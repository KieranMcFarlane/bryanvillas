import Image from 'next/image'
import Link from 'next/link'
import ClientWrapper from '../components/ClientWrapper'
import NewsletterForm from '../components/NewsletterForm'
import MobileNav from '../components/MobileNav'

export default function Home() {
  return (
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
              <li><Link href="#villas">Villas</Link></li>
              <li><Link href="/experiences">Experiences</Link></li>
              <li><Link href="/journal">Journal</Link></li>
              <li><Link href="/about">About Us</Link></li>
              <li><Link href="/contact">Contact</Link></li>
            </ul>
          </nav>
          <MobileNav />
        </div>
      </header>

      <main>
        <section className="hero">
          <div className="hero-content">
            <h1>Your Private Slice of Paradise</h1>
            <p>Discover our exclusive collection of three exceptional villas in the heart of St. Lucia</p>
            <Link href="#villas" className="btn">View Our Villas</Link>
            <Link href="#cta" className="btn btn-secondary">Plan Your Stay</Link>
          </div>
        </section>

        <section id="villas" className="section">
          <div className="container">
            <div className="section-header">
              <h2>Our Exclusive Villa Collection</h2>
              <p>Each villa in our St. Lucia collection offers a unique blend of luxury, privacy, and breathtaking Caribbean views. From intimate retreats to grand estates, find your perfect island sanctuary.</p>
            </div>
            <div className="villas-grid">
              <Link href="/villa" className="villa-card-link">
                <div className="villa-card">
                  <div 
                    className="villa-card-image" 
                    style={{ backgroundImage: 'url(/images/property-4/LIVING_DINING-AREA_1_A_PIGEON-POINT_BLUE-PIGEON.jpg)' }}
                  ></div>
                  <div className="villa-card-content">
                    <h3>Sunset Sanctuary</h3>
                    <p>Intimate beachfront villa perfect for romantic getaways. Features private beach, outdoor dining pavilion, and stunning sunset views.</p>
                    <div className="villa-card-footer">
                      <div className="villa-specs">
                        <span>
                          <svg viewBox="0 0 24 24">
                            <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"></path>
                          </svg>4
                        </span>
                        <span>
                          <svg viewBox="0 0 24 24">
                            <path d="M7 13c1.66 0 3-1.34 3-3S8.66 7 7 7s-3 1.34-3 3 1.34 3 3 3zm12-6h-8v7H3V5H1v15h2v-3h18v3h2V7c0-2.21-1.79-4-4-4z"></path>
                          </svg>2
                        </span>
                      </div>
                      <span className="villa-price">From £750 / night</span>
                    </div>
                  </div>
                </div>
              </Link>
              
              <Link href="/villa" className="villa-card-link">
                <div className="villa-card">
                  <div 
                    className="villa-card-image" 
                    style={{ backgroundImage: 'url(/images/property-3/1-stay-header-1600x698-1.jpg)' }}
                  ></div>
                  <div className="villa-card-content">
                    <h3>Smugglers Nest</h3>
                    <p>Prime location on Soufriere Bay with magnificent Piton views. This luxury villa features private beach access and full staff including a cook.</p>
                    <div className="villa-card-footer">
                      <div className="villa-specs">
                        <span>
                          <svg viewBox="0 0 24 24">
                            <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"></path>
                          </svg>8
                        </span>
                        <span>
                          <svg viewBox="0 0 24 24">
                            <path d="M7 13c1.66 0 3-1.34 3-3S8.66 7 7 7s-3 1.34-3 3 1.34 3 3 3zm12-6h-8v7H3V5H1v15h2v-3h18v3h2V7c0-2.21-1.79-4-4-4z"></path>
                          </svg>4
                        </span>
                      </div>
                      <span className="villa-price">From £1,250 / night</span>
                    </div>
                  </div>
                </div>
              </Link>

              <Link href="/villa" className="villa-card-link">
                <div className="villa-card">
                  <div 
                    className="villa-card-image" 
                    style={{ backgroundImage: 'url(/images/property-2/237110_MRG035_IMG_30_0000.jpeg)' }}
                  ></div>
                  <div className="villa-card-content">
                    <h3>Piton Paradise</h3>
                    <p>Spectacular hilltop retreat with panoramic views of both Pitons. Features infinity pool, spa pavilion, and tropical gardens.</p>
                    <div className="villa-card-footer">
                      <div className="villa-specs">
                        <span>
                          <svg viewBox="0 0 24 24">
                            <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"></path>
                          </svg>6
                        </span>
                        <span>
                          <svg viewBox="0 0 24 24">
                            <path d="M7 13c1.66 0 3-1.34 3-3S8.66 7 7 7s-3 1.34-3 3 1.34 3 3 3zm12-6h-8v7H3V5H1v15h2v-3h18v3h2V7c0-2.21-1.79-4-4-4z"></path>
                          </svg>3
                        </span>
                      </div>
                      <span className="villa-price">From £980 / night</span>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </section>
        
        <section id="why-choose" className="section">
          <div className="container">
            <div className="section-header">
              <h2>Why Choose St. Lucia</h2>
              <p>From the iconic Pitons to pristine beaches and lush rainforests, St. Lucia offers an unparalleled Caribbean experience.</p>
            </div>
            <div className="features-grid">
              <div className="feature-item">
                <div className="feature-item-icon">
                  <svg viewBox="0 0 24 24">
                    <path d="M12 2L1 21h22L12 2zm0 15l-5-5h3v-4h4v4h3l-5 5z"></path>
                  </svg>
                </div>
                <h4>Iconic Pitons</h4>
                <p>UNESCO World Heritage volcanic peaks rising dramatically from the sea.</p>
              </div>
              <div className="feature-item">
                <div className="feature-item-icon">
                  <svg viewBox="0 0 24 24">
                    <path d="M21 18v1c0 1.1-.9 2-2 2H5c-1.11 0-2-.9-2-2V7c0-1.1.89-2 2-2h1V4c0-1.1.9-2 2-2s2 .9 2 2v1h8V4c0-1.1.9-2 2-2s2 .9 2 2v1h1c1.1 0 2 .9 2 2v11zM5 7v12h14V7H5zm5.5 4c-.83 0-1.5-.67-1.5-1.5S9.67 8 10.5 8s1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"></path>
                  </svg>
                </div>
                <h4>Pristine Beaches</h4>
                <p>Golden sand and dramatic black sand beaches with crystal-clear waters.</p>
              </div>
              <div className="feature-item">
                <div className="feature-item-icon">
                  <svg viewBox="0 0 24 24">
                    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"></path>
                  </svg>
                </div>
                <h4>Luxury & Wellness</h4>
                <p>World-class spas, fine dining, and premium hospitality.</p>
              </div>
              <div className="feature-item">
                <div className="feature-item-icon">
                  <svg viewBox="0 0 24 24">
                    <path d="M14.12 4.47L12 2 9.88 4.47 7.4 2.06l-1.41 1.41L8.41 6 6 8.41l1.41 1.41L9.88 7.4l2.12 2.47L12 12l2.12-2.12 2.41 2.41 1.41-1.41L15.59 6l2.41-2.41-1.41-1.41-2.47 2.47zM12 15c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm0 10c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z"></path>
                  </svg>
                </div>
                <h4>Adventure</h4>
                <p>Rainforest hikes, volcano tours, diving, and water sports.</p>
              </div>
            </div>
          </div>
        </section>

        <section id="attractions" className="section">
          <div className="container">
            <div className="section-header">
              <h2>Nearby Attractions & Experiences</h2>
              <p>Discover the natural wonders and cultural treasures that make St. Lucia an unforgettable destination.</p>
            </div>
            <div className="attractions-grid">
              <div className="attraction-card">
          <Image
                  src="/images/attractions/St-Lucia-sulphur-bath-2.jpg" 
                  alt="Sulphur Springs"
                  width={400}
                  height={350}
                  className="object-cover"
                />
                <div className="attraction-card-overlay">
                  <h4>Sulphur Springs</h4>
                  <p>Drive-in volcano with therapeutic mud baths - 10 mins away</p>
                </div>
              </div>
              <div className="attraction-card">
          <Image
                  src="/images/attractions/diamond-falls.jpg" 
                  alt="Diamond Falls"
                  width={400}
                  height={350}
                  className="object-cover"
                />
                <div className="attraction-card-overlay">
                  <h4>Diamond Falls</h4>
                  <p>Colorful waterfall in botanical gardens - 15 mins away</p>
                </div>
              </div>
              <div className="attraction-card">
          <Image
                  src="/images/attractions/tet_paul_nature-trail.jpg" 
                  alt="Tet Paul Nature Trail"
                  width={400}
                  height={350}
                  className="object-cover"
                />
                <div className="attraction-card-overlay">
                  <h4>Tet Paul Nature Trail</h4>
                  <p>Easy hiking trail with spectacular Piton views - 20 mins away</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="cta" className="section">
          <div className="container">
            <div className="section-header">
              <h2>Ready to Experience St. Lucia?</h2>
              <p>Let our travel experts help you choose the perfect villa and create an unforgettable Caribbean getaway.</p>
            </div>
            <div className="cta-buttons">
              <Link href="/contact" className="btn">Enquire Now</Link>
              <Link href="/contact" className="btn btn-secondary">Request Callback</Link>
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
                <li><Link href="/journal">Journal</Link></li>
                <li><Link href="#">Careers</Link></li>
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
              <Link href="#">
                <svg viewBox="0 0 24 24">
                  <path d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8 1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5 5 5 0 0 1-5 5 5 5 0 0 1-5-5 5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3z"></path>
                </svg>
              </Link>
              <Link href="#">
                <svg viewBox="0 0 24 24">
                  <path d="M22.46 6c-.77.35-1.6.58-2.46.67.88-.53 1.56-1.37 1.88-2.38-.83.49-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98-3.56-.18-6.72-1.89-8.83-4.47-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.58-.7-.02-1.37-.21-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.52 8.52 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.5 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"></path>
                </svg>
              </Link>
            </div>
            <p className="copyright">© 2025 Bryan Villas. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </ClientWrapper>
  )
}
