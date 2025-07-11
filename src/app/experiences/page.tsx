import Image from 'next/image'
import Link from 'next/link'
import ClientWrapper from '../../components/ClientWrapper'
import NewsletterForm from '../../components/NewsletterForm'

export default function Experiences() {
  const experiences = [
    {
      id: 1,
      title: "Gros Piton Sunrise Hike",
      description: "Experience the magical sunrise from the summit of Gros Piton, offering breathtaking 360-degree views of the island.",
      image: "/images/attractions/tet_paul_nature-trail.jpg",
      category: "Adventure",
      duration: "5-6 hours",
      difficulty: "Challenging",
      slug: "gros-piton-sunrise-hike"
    },
    {
      id: 2,
      title: "Volcano & Waterfall Adventure",
      description: "Explore the world's only drive-in volcano and discover the colorful Diamond Falls botanical gardens.",
      image: "/images/attractions/St-Lucia-sulphur-bath-2.jpg",
      category: "Nature",
      duration: "6-7 hours",
      difficulty: "Moderate",
      slug: "volcano-waterfall-adventure"
    },
    {
      id: 3,
      title: "Sunset Catamaran Cruise",
      description: "Sail along the stunning coastline with snorkeling, drinks, and a spectacular Caribbean sunset.",
      image: "/images/attractions/yacht.jpg",
      category: "Water Sports",
      duration: "4-5 hours",
      difficulty: "Easy",
      slug: "sunset-catamaran-cruise"
    },
    {
      id: 4,
      title: "Caribbean Cooking Class",
      description: "Learn to prepare authentic St. Lucian dishes with local ingredients and traditional techniques.",
      image: "/images/attractions/unnamed.webp",
      category: "Cultural",
      duration: "3-4 hours",
      difficulty: "Easy",
      slug: "caribbean-cooking-class"
    },
    {
      id: 5,
      title: "Rainforest Canopy Adventure",
      description: "Soar through the treetops on 12 zip lines with spectacular views of the island and ocean.",
      image: "/images/attractions/tet_paul_nature-trail.jpg",
      category: "Adventure",
      duration: "4-5 hours",
      difficulty: "Moderate",
      slug: "rainforest-canopy-adventure"
    },
    {
      id: 6,
      title: "Coral Reef Diving",
      description: "Explore vibrant coral reefs and tropical marine life at some of the Caribbean's best dive sites.",
      image: "/images/attractions/seahome.jpg",
      category: "Water Sports",
      duration: "Half or full day",
      difficulty: "Intermediate",
      slug: "coral-reef-diving"
    }
  ]

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
              alt="St. Lucia Experiences"
              fill
              className="object-cover"
              priority
            />
            <div className="experiences-hero-overlay">
              <div className="container">
                <div className="experiences-hero-content">
                  <h1>Unforgettable St. Lucia Experiences</h1>
                  <p>From volcanic adventures to pristine coral reefs, discover the magic of St. Lucia through carefully curated experiences that showcase the island&apos;s natural beauty and rich culture.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Experiences Grid */}
        <section className="experiences-section section">
          <div className="container">
            <div className="section-header">
              <h2>Adventure Awaits</h2>
              <p>Choose from our collection of authentic St. Lucian adventures, each designed to create lasting memories and deep connections with this Caribbean paradise.</p>
            </div>
            
            <div className="experiences-grid">
              {experiences.map((experience) => (
                <div key={experience.id} className="experience-card">
                  <div className="experience-card-image">
                    <Image 
                      src={experience.image}
                      alt={experience.title}
                      width={400}
                      height={250}
                      className="object-cover"
                    />
                    <div className="experience-category">{experience.category}</div>
                  </div>
                  <div className="experience-card-content">
                    <h3>{experience.title}</h3>
                    <p>{experience.description}</p>
                    <div className="experience-details">
                      <div className="experience-detail">
                        <svg viewBox="0 0 24 24" className="experience-icon">
                          <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm3.5 6L12 10.5 8.5 8 12 5.5 15.5 8zM8.5 16L12 13.5 15.5 16 12 18.5 8.5 16z"/>
                        </svg>
                        <span>{experience.duration}</span>
                      </div>
                      <div className="experience-detail">
                        <svg viewBox="0 0 24 24" className="experience-icon">
                          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                        </svg>
                        <span>{experience.difficulty}</span>
                      </div>
                    </div>
                    <Link href={`/experiences/${experience.slug}`} className="btn experience-btn">Learn More</Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="experiences-cta section">
          <div className="container">
            <div className="experiences-cta-content">
              <h2>Ready to Explore St. Lucia?</h2>
              <p>Our concierge team is ready to help you plan the perfect adventure combination that matches your interests and creates unforgettable memories.</p>
              <div className="cta-buttons">
                <Link href="/contact" className="btn">Plan My Adventure</Link>
                <Link href="/journal" className="btn btn-secondary">Read Travel Stories</Link>
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
            <p className="copyright">© 2025 Piton View Estates. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </ClientWrapper>
  )
} 