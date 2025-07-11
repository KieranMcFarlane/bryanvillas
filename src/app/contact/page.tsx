import Image from 'next/image'
import Link from 'next/link'
import ClientWrapper from '../../components/ClientWrapper'

export default function Contact() {
  return (
    <div className="page-with-hero">
      <ClientWrapper>
      <header className="header">
        <div className="header-container">
          <Link href="/" className="logo">
            <Image 
              src="/images/logo-1.png" 
              alt="Bryan's Villas Logo" 
              width={129} 
              height={56} 
              className="h-14 w-auto mr-3"
            />
          </Link>
          <nav className="main-nav">
            <ul>
              <li><Link href="/villa">Villas</Link></li>
              <li><Link href="/experiences">Experiences</Link></li>
              <li><Link href="/journal">Journal</Link></li>
              <li><Link href="/about">About Us</Link></li>
              <li><Link href="/contact">Contact</Link></li>
            </ul>
          </nav>
        </div>
      </header>

      <main>
        <section className="experiences-hero">
          <div className="experiences-hero-background">
            <Image 
              src="/images/hero-bg.jpg"
              alt="Contact Bryan's Villas"
              fill
              className="object-cover"
              priority
            />
            <div className="experiences-hero-overlay">
              <div className="container">
                <div className="experiences-hero-content">
                  <h1>Contact Us</h1>
                  <p>Get in touch with our villa experts for personalized assistance in finding and booking your perfect luxury villa escape. Our team is here to help you create unforgettable memories.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="content-area section">
          <div className="container">
            <div className="contact-grid">
              <div className="contact-form">
                <h2>Send an Enquiry</h2>
                <form className="enquiry-form">
                  <div className="form-group">
                    <label htmlFor="name">Full Name</label>
                    <input type="text" id="name" name="name" required />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email Address</label>
                    <input type="email" id="email" name="email" required />
                  </div>
                  <div className="form-group">
                    <label htmlFor="phone">Phone Number</label>
                    <input type="tel" id="phone" name="phone" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="subject">Subject</label>
                    <input type="text" id="subject" name="subject" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="message">Message</label>
                    <textarea id="message" name="message" rows={6} required></textarea>
                  </div>
                  <div className="form-group">
                    <button type="submit" className="btn">Send Message</button>
                  </div>
                </form>
              </div>
              
              <div className="contact-details">
                <h3>Our Office</h3>
                <div className="office-info">
                  <p>
                    <strong>Bryan's Villas Head Office</strong><br/>
                    123 Travel Street<br/>
                    London, SW1A 1AA<br/>
                    United Kingdom
                  </p>
                  <p>
                    <strong>Email:</strong> hello@bryansvillas.com<br/>
                    <strong>Phone:</strong> 0333 000 0000
                  </p>
                  <h4>Office Hours</h4>
                  <p>
                    Monday - Friday: 9am - 6pm<br/>
                    Saturday - Sunday: 10am - 4pm
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div className="container">
          <div className="footer-grid">
            <div className="footer-col">
              <h4>Company</h4>
              <ul>
                <li><Link href="/about">About Us</Link></li>
                <li><Link href="/villa">Our Villas</Link></li>
                <li><Link href="/journal">Journal</Link></li>
                <li><Link href="/">Careers</Link></li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>Help</h4>
              <ul>
                <li><Link href="/contact">Contact Us</Link></li>
                <li><Link href="/">FAQs</Link></li>
                <li><Link href="/">Booking T&Cs</Link></li>
                <li><Link href="/">Privacy Policy</Link></li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>Destinations</h4>
              <ul>
                <li><Link href="/">Caribbean</Link></li>
                <li><Link href="/">Europe</Link></li>
                <li><Link href="/">Asia</Link></li>
                <li><Link href="/">UK & Ireland</Link></li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>Newsletter</h4>
              <p>Sign up for travel inspiration and exclusive offers.</p>
              <form className="newsletter-form">
                <input type="email" placeholder="Your email" />
                <button type="submit">Go</button>
              </form>
            </div>
          </div>
          <div className="footer-bottom">
            <div className="social-links">
              <Link href="#">
                <svg viewBox="0 0 24 24">
                  <path d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8 1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5 5 5 0 0 1-5 5 5 5 0 0 1-5-5 5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3z"/>
                </svg>
              </Link>
              <Link href="#">
                <svg viewBox="0 0 24 24">
                  <path d="M22.46 6c-.77.35-1.6.58-2.46.67.88-.53 1.56-1.37 1.88-2.38-.83.49-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98-3.56-.18-6.72-1.89-8.83-4.47-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.58-.7-.02-1.37-.21-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.52 8.52 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.5 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/>
                </svg>
              </Link>
            </div>
            <p className="copyright">© 2025 Piton View Estates. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </ClientWrapper>
    </div>
  )
} 