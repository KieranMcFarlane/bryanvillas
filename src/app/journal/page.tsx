import Image from 'next/image'
import Link from 'next/link'
import ClientWrapper from '../../components/ClientWrapper'
import NewsletterForm from '../../components/NewsletterForm'
import MobileNav from '../../components/MobileNav'

export default function Journal() {
  const articles = [
    {
      id: 1,
      title: "Hidden Gems of St. Lucia: Beyond the Pitons",
      excerpt: "Discover the secret beaches, local restaurants, and cultural treasures that only locals know about in this Caribbean paradise.",
      image: "/images/attractions/st-Lucia.jpg",
      date: "January 15, 2025",
      readTime: "5 min read",
      category: "Travel Tips"
    },
    {
      id: 2,
      title: "The Ultimate Guide to Piton Climbing",
      excerpt: "Everything you need to know about conquering Gros Piton, from preparation and gear to the breathtaking views at the summit.",
      image: "/images/attractions/tet_paul_nature-trail.jpg",
      date: "January 10, 2025",
      readTime: "8 min read",
      category: "Adventure"
    },
    {
      id: 3,
      title: "Luxury Dining in Soufriere: A Culinary Journey",
      excerpt: "Explore the finest restaurants and local eateries that showcase authentic St. Lucian cuisine with a modern twist.",
      image: "/images/property-3/5-honey-chile-carousel-1.jpg",
      date: "January 5, 2025",
      readTime: "6 min read",
      category: "Food & Drink"
    },
    {
      id: 4,
      title: "Wellness Retreats: Rejuvenate in Paradise",
      excerpt: "From spa treatments using local ingredients to yoga sessions overlooking the Caribbean Sea, find your perfect wellness escape.",
      image: "/images/attractions/St-Lucia-sulphur-bath-2.jpg",
      date: "December 30, 2024",
      readTime: "7 min read",
      category: "Wellness"
    },
    {
      id: 5,
      title: "Villa Life: Making the Most of Your Private Paradise",
      excerpt: "Tips for getting the most out of your luxury villa stay, from working with your private chef to organizing exclusive experiences.",
      image: "/images/property-2/237110_MRG035_IMG_16_0000.jpeg",
      date: "December 25, 2024",
      readTime: "4 min read",
      category: "Villa Life"
    },
    {
      id: 6,
      title: "Water Adventures: Diving, Sailing, and More",
      excerpt: "The Caribbean waters around St. Lucia offer incredible opportunities for water sports enthusiasts and marine life lovers.",
      image: "/images/attractions/yacht.jpg",
      date: "December 20, 2024",
      readTime: "6 min read",
      category: "Adventure"
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
          <MobileNav />
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="journal-hero">
          <div className="hero-content">
            <h1>The Villa Journal</h1>
            <p>Stories, guides, and inspiration from St. Lucia&apos;s most exclusive destinations</p>
          </div>
        </section>

        {/* Articles Grid */}
        <section className="section">
          <div className="container">
            <div className="section-header">
              <h2>Latest Stories</h2>
              <p>Discover the beauty, culture, and adventures that await you in St. Lucia through our curated collection of travel stories and guides.</p>
            </div>
            
            <div className="journal-grid">
              {articles.map((article) => (
                <article key={article.id} className="journal-card">
                  <div className="journal-card-image">
                    <Image 
                      src={article.image}
                      alt={article.title}
                      width={400}
                      height={250}
                      className="object-cover"
                    />
                    <div className="journal-category">{article.category}</div>
                  </div>
                  <div className="journal-card-content">
                    <div className="journal-meta">
                      <span className="journal-date">{article.date}</span>
                      <span className="journal-read-time">{article.readTime}</span>
                    </div>
                    <h3>{article.title}</h3>
                    <p>{article.excerpt}</p>
                    <Link href={`/journal/${article.id}`} className="journal-read-more">
                      Read More →
                    </Link>
                  </div>
                </article>
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
            <p className="copyright">© 2025 Piton View Estates. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </ClientWrapper>
  )
} 