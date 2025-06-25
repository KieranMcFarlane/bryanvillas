# Cal.com Integration Guide for Bryan's Villas

## Overview
This guide will help you integrate Cal.com booking functionality with your Bryan's Villas website, including self-hosting options.

## Current Implementation
The "Plan Your Stay" button on the homepage is already configured to open a Cal.com booking link. You need to update the JavaScript with your actual Cal.com details.

## Setup Steps

### 1. Create Cal.com Account
1. Visit [cal.com](https://cal.com) and create an account
2. Choose your username (e.g., `bryans-villas`)
3. Set up your profile and availability

### 2. Create Event Types
Create different event types for your booking needs:
- **Villa Consultation** (30 minutes) - Initial discussion
- **Property Viewing** (60 minutes) - Virtual or in-person tours
- **Booking Appointment** (45 minutes) - Finalize reservations

### 3. Update Website Integration

#### Current Code Location
File: `index.html` (lines near the bottom in the `<script>` section)

#### Update This Section:
```javascript
// Cal.com booking integration
const planYourStayBtn = document.getElementById('plan-your-stay-btn');
if (planYourStayBtn) {
    planYourStayBtn.addEventListener('click', function() {
        // Replace 'your-cal-username' with your actual Cal.com username
        // Replace 'consultation' with your actual event type
        window.open('https://cal.com/your-cal-username/consultation', '_blank');
    });
}
```

#### Replace With Your Details:
```javascript
// Cal.com booking integration
const planYourStayBtn = document.getElementById('plan-your-stay-btn');
if (planYourStayBtn) {
    planYourStayBtn.addEventListener('click', function() {
        // Update with your actual Cal.com details
        window.open('https://cal.com/bryans-villas/villa-consultation', '_blank');
    });
}
```

### 4. Advanced Integration Options

#### Option A: Embedded Calendar
Instead of opening a new window, embed the calendar directly on your site:

```html
<!-- Add this to your HTML where you want the calendar -->
<div id="cal-embed"></div>

<script>
(function (C, A, L) { 
    let p = function (a, ar) { 
        a.q.push(ar); 
    }; 
    let d = C.document; 
    C.Cal = C.Cal || function () { 
        let cal = C.Cal; 
        let ar = arguments; 
        if (!cal.loaded) { 
            cal.ns = {}; 
            cal.q = cal.q || []; 
            d.head.appendChild(d.createElement("script")).src = A; 
            cal.loaded = true; 
        } 
        if (ar[0] === L) { 
            const api = function () { 
                p(api, arguments); 
            }; 
            const namespace = ar[1]; 
            api.q = api.q || []; 
            typeof namespace === "string" ? (cal.ns[namespace] = api) && p(api, ar) : p(cal, ar); 
            return; 
        } 
        p(cal, ar); 
    }; 
})(window, "https://app.cal.com/embed/embed.js", "init");

Cal("init", {
    origin:"https://cal.com"
});

Cal("ui", {
    "theme":"light",
    "styles":{"branding":{"brandColor":"#14b8a6"}},
    "hideEventTypeDetails":false
});

// Replace 'bryans-villas' and 'villa-consultation' with your details
Cal("inline", {
    elementOrSelector:"#cal-embed",
    calLink: "bryans-villas/villa-consultation"
});
</script>
```

#### Option B: Modal Popup
Create a modal that opens with the calendar:

```javascript
// Add this to your existing JavaScript
function openBookingModal() {
    const modal = document.createElement('div');
    modal.innerHTML = `
        <div class="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
            <div class="bg-white rounded-lg max-w-4xl w-full max-h-screen overflow-y-auto">
                <div class="p-4 border-b flex justify-between items-center">
                    <h2 class="text-2xl font-bold">Book Your Consultation</h2>
                    <button onclick="this.closest('.fixed').remove()" class="text-gray-500 hover:text-gray-700">
                        <span class="material-icons">close</span>
                    </button>
                </div>
                <div id="cal-modal-embed" style="min-height: 600px;"></div>
            </div>
        </div>
    `;
    document.body.appendChild(modal);
    
    // Initialize Cal.com in modal
    Cal("inline", {
        elementOrSelector:"#cal-modal-embed",
        calLink: "bryans-villas/villa-consultation"
    });
}

// Update the button click handler
const planYourStayBtn = document.getElementById('plan-your-stay-btn');
if (planYourStayBtn) {
    planYourStayBtn.addEventListener('click', openBookingModal);
}
```

### 5. Self-Hosting Cal.com

#### Prerequisites
- Node.js 18+ and npm/yarn
- PostgreSQL database
- Domain name and SSL certificate
- Server with at least 2GB RAM

#### Installation Steps

1. **Clone the Cal.com repository:**
```bash
git clone https://github.com/calcom/cal.com.git
cd cal.com
```

2. **Install dependencies:**
```bash
yarn install
```

3. **Set up environment variables:**
```bash
cp .env.example .env
```

4. **Configure your `.env` file:**
```env
# Database
DATABASE_URL="postgresql://username:password@localhost:5432/calendso"

# NextAuth.js
NEXTAUTH_SECRET="your-secret-here"
NEXTAUTH_URL="https://your-domain.com"

# Email (optional but recommended)
EMAIL_FROM="noreply@your-domain.com"
EMAIL_SERVER_HOST="your-smtp-server"
EMAIL_SERVER_PORT=587
EMAIL_SERVER_USER="your-email"
EMAIL_SERVER_PASSWORD="your-password"

# Calendar integrations (optional)
GOOGLE_API_CREDENTIALS='{...}'
MS_GRAPH_CLIENT_ID="..."
MS_GRAPH_CLIENT_SECRET="..."
```

5. **Set up the database:**
```bash
yarn prisma migrate deploy
```

6. **Build and start:**
```bash
yarn build
yarn start
```

#### Docker Deployment (Recommended)
```bash
# Create docker-compose.yml
version: '3.8'
services:
  database:
    image: postgres:14
    environment:
      POSTGRES_DB: calendso
      POSTGRES_USER: calendso
      POSTGRES_PASSWORD: your-password
    volumes:
      - cal_db:/var/lib/postgresql/data

  app:
    image: calcom/cal.com:latest
    environment:
      DATABASE_URL: postgresql://calendso:your-password@database:5432/calendso
      NEXTAUTH_SECRET: your-secret
      NEXTAUTH_URL: https://your-domain.com
    ports:
      - "3000:3000"
    depends_on:
      - database

volumes:
  cal_db:
```

### 6. Domain and DNS Setup

1. **Point your subdomain to your server:**
   - Create A record: `booking.bryansvillas.com` → Your server IP
   
2. **Set up SSL certificate (using Let's Encrypt):**
```bash
sudo apt install certbot nginx
sudo certbot --nginx -d booking.bryansvillas.com
```

3. **Configure Nginx:**
```nginx
server {
    listen 443 ssl;
    server_name booking.bryansvillas.com;
    
    ssl_certificate /etc/letsencrypt/live/booking.bryansvillas.com/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/booking.bryansvillas.com/privkey.pem;
    
    location / {
        proxy_pass http://localhost:3000;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}
```

### 7. Integration Testing

1. **Test the booking flow:**
   - Click "Plan Your Stay" button
   - Verify calendar opens correctly
   - Complete a test booking
   - Check email notifications

2. **Mobile testing:**
   - Test on various mobile devices
   - Ensure responsive design works
   - Verify touch interactions

### 8. Customization Options

#### Branding
- Upload your logo to Cal.com
- Set brand colors to match your site (#14b8a6 for teal)
- Customize booking confirmation emails

#### Event Types
- Set different durations for different consultation types
- Add custom questions (guest count, dates, villa preferences)
- Set up automated email sequences

#### Availability
- Set business hours
- Block out maintenance periods
- Set minimum booking notice

### 9. Backup and Maintenance

#### Regular Backups
```bash
# Database backup
pg_dump calendso > backup_$(date +%Y%m%d).sql

# Upload to cloud storage
aws s3 cp backup_$(date +%Y%m%d).sql s3://your-backup-bucket/
```

#### Updates
```bash
# Update Cal.com
git pull origin main
yarn install
yarn prisma migrate deploy
yarn build
pm2 restart cal-com
```

### 10. Alternative: Hosted Cal.com with Custom Domain

If self-hosting seems complex, you can use Cal.com's hosted solution with your custom domain:

1. **Upgrade to Cal.com Pro**
2. **Set up custom domain:**
   - Point `booking.bryansvillas.com` to Cal.com's servers
   - Configure DNS as instructed by Cal.com
3. **Update website integration:**
```javascript
window.open('https://booking.bryansvillas.com/villa-consultation', '_blank');
```

## Support and Troubleshooting

### Common Issues
1. **CORS errors:** Ensure your domain is properly configured
2. **Database connection:** Check PostgreSQL settings
3. **Email not sending:** Verify SMTP configuration
4. **SSL issues:** Ensure certificates are properly installed

### Resources
- [Cal.com Documentation](https://docs.cal.com)
- [Self-hosting Guide](https://github.com/calcom/cal.com/blob/main/CONTRIBUTING.md)
- [Docker Setup](https://docs.cal.com/docker)

## Cost Comparison

### Self-Hosted
- **Server costs:** $20-50/month (DigitalOcean, AWS)
- **Domain:** $10-15/year
- **SSL:** Free (Let's Encrypt)
- **Total:** ~$25-55/month

### Cal.com Hosted Pro
- **Plan cost:** $12/user/month
- **Custom domain:** Included
- **SSL:** Included
- **Total:** $12/month

**Recommendation:** Start with hosted solution for simplicity, then consider self-hosting if you need more customization or have privacy requirements. 