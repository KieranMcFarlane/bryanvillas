import Image from 'next/image'
import Link from 'next/link'
import ClientWrapper from '../../components/ClientWrapper'
import NewsletterForm from '../../components/NewsletterForm'

export default function About() {
  const teamMembers = [
    {
      id: 1,
      name: "Oliver Bell",
      role: "Founder & CEO",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCa7RlKdRJhVSszsW4Wb3wBMzYVGjf5hE195uLxP7h1tivR-8N_s0_550TUjdPyDvmWEjLDySM9Uchu4ZrxO2KR6Bnwd6Yr_rp_86FI07SwxJtdpBFgdktIEhcxu0tmPjrbcWaP4hmgVYfCQaMUZ5LIxnnHJQRjiyO81xmkVcoq6tYrssGJTq1M_0QdQOJa7lnEG96-EgbIU5Jbl_XsZDRGOM8EWC6C4mS55HzrRcjbmLeo6ba9RNWZ2Vpjw-uChF5JpWptJobF4oc"
    },
    {
      id: 2,
      name: "Sarah Mitchell", 
      role: "Head of Villa Selection",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBQuuujjwyhE4SrXsqfMaVtRTFG-b3fRBnU3Sm25feeub4safDHFAo-aafMkj7snPPe0VthWDfrn-rDEZ3141LEaCGiMr8XbDzxeB5Gy761wcwKWSl_gWg2blXlKUaKy1v4kgaP7Hbcdy6y6-HaYNVlG2G7BItlK7kRmCzhQnz6RwO8ywGO-SKKyeVoPGR1CFOiOQnsZVvCWug8Cp5YgvvVzmFfAL67q86QWKLAXU2OLjZyCD1J9V9MXy2L7y-01g0Fo9RzaXeC9kM"
    },
    {
      id: 3,
      name: "James Rodriguez",
      role: "Customer Experience Director", 
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBedESYRZZ0jrBlGtpqcZajFcAlY6yTy4abd14ZVj3GkKFdiSB-Kqqk3RuZd0ox46cAy0OnRcU-p_s3L8znvwfEQ9fX7zkw1pcbOnQFrDf0md2lCwY5o-ntjRCvd-bl1shI59ujslKcosIvKK8RF3QhLgnvLgtlDxsurhqVdETwic3QLYTcm_nWHUJZDVwl595Q7mcxZKm9pn94YwasJs6Fr2WzSpCf-UR4JwDDlU3IWiM5ekYnfUX--VQ_JtjVO-2NSRRTpfDpT2Y"
    },
    {
      id: 4,
      name: "Emma Thompson",
      role: "Travel Specialist",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDN8zU0Lm_2zbbp4AAWuzyRlNrfOsLW_1hB_D8e7RrzvahqmYIEj7yCE3FWN6dFsxza6SXAKXGbYWi-oskVAp6Jv4RpuC1Jr2pKDLNg-Rd7cyE8PMsr5gGeP1_fdFBjMwVKt3Kf4IB-t6MgtJB98AjT1An_NkJJE9780AiRQmfBu12fj80Nz0kuGl4gpmzkrjNB_cDYiELAyz1IzDPvRjnfGEnfFMBQaz77FXfrqHSYQ2UNi1vtIUfQbei91O-kJdYhg0jYIVCDvo4"
    }
  ]

  const values = [
    {
      title: "Authenticity",
      description: "Every villa in our collection is personally inspected and chosen for its authentic character and genuine connection to its destination."
    },
    {
      title: "Excellence", 
      description: "We maintain the highest standards in everything we do, from villa selection to guest services, ensuring exceptional experiences."
    },
    {
      title: "Passion",
      description: "Our love for travel and hospitality drives us to go above and beyond for every guest, creating truly memorable journeys."
    }
  ]

  return (
    <div className="page-with-hero">
      <ClientWrapper>
      <header className="">
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
              <li><Link href="/#villas">Villas</Link></li>
              <li><Link href="/experiences">Experiences</Link></li>
              <li><Link href="/journal">Journal</Link></li>
              <li><Link href="/about">About Us</Link></li>
              <li><Link href="/contact">Contact</Link></li>
            </ul>
          </nav>
        </div>
      </header>

      <main>
        {/* Page Hero */}
        <section className="experiences-hero">
          <div className="experiences-hero-background">
            <Image 
              src="/images/hero-bg.jpg"
              alt="About Bryan's Villas"
              fill
              className="object-cover"
              priority
            />
            <div className="experiences-hero-overlay">
              <div className="container">
                <div className="experiences-hero-content">
                  <h1>About Bryan's Villas</h1>
                  <p>Curating exceptional villa experiences since 1996. We've grown from a small family business to one of the world's leading luxury villa specialists, always maintaining our commitment to personal service and authentic experiences.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Story Section */}
        <section className="about-content section">
          <div className="container">
            <div className="section-header">
              <h2>Our Story</h2>
              <p>Founded in 1996 by Bryan, Bryan's Villas began as a passion project to share the world's most extraordinary villas with discerning travelers. What started as a small collection of handpicked properties has grown into one of the world's leading luxury villa specialists.</p>
              <p>Today, we curate over 8,000 exceptional villas across 80 destinations worldwide, each one personally selected for its unique character, stunning location, and impeccable service standards.</p>
            </div>
          </div>
        </section>

        {/* Our Values Section */}
        <section className="values-section section">
          <div className="container">
            <div className="section-header">
              <h2>Our Values</h2>
            </div>
            <div className="values-grid">
              {values.map((value, index) => (
                <div key={index} className="value-card">
                  <h3>{value.title}</h3>
                  <p>{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Meet the Team Section */}
        <section className="team-section section">
          <div className="container">
            <div className="section-header">
              <h2>Meet Our Team</h2>
            </div>
            <div className="team-grid">
              {teamMembers.map((member) => (
                <div key={member.id} className="team-member">
                  <div className="team-member-image">
                    <Image
                      src={member.image}
                      alt={member.name}
                      width={128}
                      height={128}
                      className="team-photo"
                    />
                  </div>
                  <h4>{member.name}</h4>
                  <p>{member.role}</p>
                </div>
              ))}
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
                <li><Link href="/#villas">Our Villas</Link></li>
                <li><Link href="/journal">Journal</Link></li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>Help</h4>
              <ul>
                <li><Link href="/contact">Contact Us</Link></li>
                <li><Link href="#">FAQs</Link></li>
                <li><Link href="#">Booking T&Cs</Link></li>
                <li><Link href="#">Privacy Policy</Link></li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>Destinations</h4>
              <ul>
                <li><Link href="#">Caribbean</Link></li>
                <li><Link href="#">Europe</Link></li>
                <li><Link href="#">Asia</Link></li>
                <li><Link href="#">UK & Ireland</Link></li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>Newsletter</h4>
              <p>Sign up for travel inspiration and exclusive offers.</p>
              <NewsletterForm />
            </div>
          </div>
          <div className="footer-bottom">
            <div className="social-links">
              <Link href="#"><svg viewBox="0 0 24 24"><path d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8 1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5 5 5 0 0 1-5 5 5 5 0 0 1-5-5 5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3z"></path></svg></Link>
              <Link href="#"><svg viewBox="0 0 24 24"><path d="M22.46 6c-.77.35-1.6.58-2.46.67.88-.53 1.56-1.37 1.88-2.38-.83.49-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98-3.56-.18-6.72-1.89-8.83-4.47-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.58-.7-.02-1.37-.21-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.52 8.52 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.5 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"></path></svg></Link>
            </div>
            <p className="copyright">© 2025 Bryan Villas. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </ClientWrapper>
    </div>
  )
} 