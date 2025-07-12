import Image from 'next/image'
import Link from 'next/link'
import ClientWrapper from '../../../components/ClientWrapper'
import NewsletterForm from '../../../components/NewsletterForm'
import MobileNav from '../../../components/MobileNav'
import { notFound } from 'next/navigation'

// Article data - in a real app, this would come from a CMS or database
const articles = {
  '1': {
    id: 1,
    title: "Hidden Gems of St. Lucia: Beyond the Pitons",
    excerpt: "Discover the secret beaches, local restaurants, and cultural treasures that only locals know about in this Caribbean paradise.",
    image: "/images/attractions/st-Lucia.jpg",
    date: "January 15, 2025",
    readTime: "5 min read",
    category: "Travel Tips",
    author: "Sarah Mitchell",
    content: `
      <p>St. Lucia is renowned for its iconic Pitons and luxury resorts, but the real magic of this Caribbean island lies in its hidden treasures – places where locals gather, stories unfold, and authentic experiences await those curious enough to venture beyond the beaten path.</p>

      <h2>Secret Beaches Worth the Journey</h2>
      
      <p>While Reduit Beach and Sugar Beach attract most visitors, some of St. Lucia's most spectacular stretches of sand remain delightfully undiscovered.</p>

      <h3>Anse Mamin</h3>
      <p>Tucked away near the iconic Pitons, Anse Mamin offers a perfect blend of history and natural beauty. This secluded black sand beach was once the site of an 18th-century sugar plantation, and today you can still explore the atmospheric ruins while enjoying the pristine coastline. The beach is accessible via a scenic 15-minute hike through tropical forest – a small price for paradise.</p>

      <h3>Cas-en-Bas Beach</h3>
      <p>Located on the northern tip of the island, this windswept beach is a kite-surfer's dream but remains largely unknown to regular tourists. The consistent trade winds and shallow waters create perfect conditions for water sports, while the dramatic rock formations provide stunning photo opportunities. Pack a picnic – there are no vendors here, just pure, untouched nature.</p>

      <h2>Local Dining Experiences</h2>
      
      <p>Beyond the resort restaurants lies a world of authentic Caribbean flavors that tell the true story of St. Lucian cuisine.</p>

      <h3>Friday Night Fish Fry, Anse La Raye</h3>
      <p>Every Friday evening, the small fishing village of Anse La Raye transforms into a vibrant street food paradise. Local fishermen grill the day's catch right on the beach while live calypso music fills the air. Try the grilled lobster with garlic butter or the catch-of-the-day with traditional breadfruit. Arrive early for the best selection and bring cash – most vendors don't accept cards.</p>

      <h3>Dennery Fish Market</h3>
      <p>Saturday mornings at Dennery Fish Market offer a glimpse into authentic St. Lucian life. Watch as local fishermen bring in their catch while vendors prepare traditional breakfast dishes like saltfish and green fig. The market doubles as a cultural experience where you'll hear Kwéyòl (St. Lucian Creole) spoken freely and witness age-old trading traditions.</p>

      <h2>Cultural Treasures</h2>

      <h3>Sulphur Springs Drive-In Volcano</h3>
      <p>While not exactly hidden, many visitors rush through this geological wonder without truly appreciating its significance. Take time to explore the surrounding area where local guides share stories passed down through generations about the mystical properties of the mineral-rich mud baths. The best time to visit is early morning when the mist creates an otherworldly atmosphere.</p>

      <h3>Fond Doux Plantation</h3>
      <p>This working cocoa plantation offers an intimate look at St. Lucia's agricultural heritage. Unlike the larger tourist plantations, Fond Doux maintains its authentic character with hands-on chocolate-making workshops led by local farmers. The property also features traditional Creole cottages where you can stay overnight for a truly immersive experience.</p>

      <h2>Island Adventures</h2>

      <h3>Rain Forest Sky Rides</h3>
      <p>While zip-lining tours are common, few visitors know about the scenic gondola rides that offer a gentler way to explore the canopy. These peaceful journeys provide exceptional bird-watching opportunities and stunning views of the interior mountains. Keep an eye out for the endangered St. Lucia parrot – spotting one is considered incredibly lucky.</p>

      <h3>Mamiku Gardens</h3>
      <p>These 12-acre botanical gardens showcase indigenous plants and flowers in a setting that feels more like a secret garden than a tourist attraction. The ruins of an 18th-century estate provide a romantic backdrop for afternoon strolls. Many locals come here for picnics, making it a perfect place to experience St. Lucian family life.</p>

      <h2>Insider Tips</h2>

      <ul>
        <li><strong>Transportation:</strong> Rent a car for maximum flexibility. Many hidden spots are only accessible by private vehicle.</li>
        <li><strong>Timing:</strong> Visit during the week when possible – weekends can get busy with local families.</li>
        <li><strong>Currency:</strong> Bring Eastern Caribbean dollars (XCD) for local markets and small vendors who may not accept USD.</li>
        <li><strong>Language:</strong> Learning a few basic Kwéyòl phrases will endear you to locals and open doors to authentic experiences.</li>
        <li><strong>Weather:</strong> The dry season (December to April) offers the best conditions for exploring off-the-beaten-path locations.</li>
      </ul>

      <h2>Respecting Local Culture</h2>

      <p>As you explore these hidden gems, remember that you're entering communities where people live and work. Always ask permission before photographing locals, respect private property, and consider how your presence impacts these special places. The goal is to experience authentic St. Lucia while ensuring these treasures remain preserved for future generations.</p>

      <p>St. Lucia's hidden gems offer experiences that no resort can replicate – the warmth of genuine local hospitality, the thrill of discovery, and the deep satisfaction of connecting with a place on its own terms. Venture beyond the Pitons, and you'll discover a St. Lucia that lives in the heart long after the tan fades.</p>
    `
  },
  // Add other articles here as needed
  '2': {
    id: 2,
    title: "The Ultimate Guide to Piton Climbing",
    excerpt: "Everything you need to know about conquering Gros Piton, from preparation and gear to the breathtaking views at the summit.",
    image: "/images/attractions/tet_paul_nature-trail.jpg",
    date: "January 10, 2025",
    readTime: "8 min read",
    category: "Adventure",
    author: "Marcus Thompson",
    content: `<p>Coming soon - The complete guide to climbing Gros Piton safely and responsibly.</p>`
  }
  // ... other articles
}

interface PageProps {
  params: Promise<{ id: string }>
}

export default async function ArticlePage({ params }: PageProps) {
  const { id } = await params
  const article = articles[id as keyof typeof articles]

  if (!article) {
    notFound()
  }

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
        {/* Article Hero */}
        <section className="article-hero">
          <div className="article-hero-image">
            <Image 
              src={article.image}
              alt={article.title}
              fill
              className="object-cover"
              priority
            />
            <div className="article-hero-overlay">
              <div className="container">
                <div className="article-hero-content">
                  <div className="article-breadcrumb">
                    <Link href="/journal" className="breadcrumb-link">Journal</Link>
                    <span className="breadcrumb-separator">→</span>
                    <span className="breadcrumb-current">{article.category}</span>
                  </div>
                  <div className="article-category">{article.category}</div>
                  <h1>{article.title}</h1>
                  <div className="article-meta">
                    <span className="article-author">By {article.author}</span>
                    <span className="article-separator">•</span>
                    <span className="article-date">{article.date}</span>
                    <span className="article-separator">•</span>
                    <span className="article-read-time">{article.readTime}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Article Content */}
        <section className="article-content-section">
          <div className="container">
            <div className="article-layout">
              <article className="article-content">
                <div 
                  className="article-body"
                  dangerouslySetInnerHTML={{ __html: article.content }}
                />
                
                {/* Article Footer */}
                <div className="article-footer">
                  <div className="article-tags">
                    <span className="tag">{article.category}</span>
                    <span className="tag">St. Lucia</span>
                    <span className="tag">Travel Guide</span>
                  </div>
                  <div className="article-share">
                    <h4>Share this article</h4>
                    <div className="social-share">
                      <a href="#" className="share-button">
                        <svg viewBox="0 0 24 24">
                          <path d="M22.46 6c-.77.35-1.6.58-2.46.67.88-.53 1.56-1.37 1.88-2.38-.83.49-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98-3.56-.18-6.72-1.89-8.83-4.47-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.58-.7-.02-1.37-.21-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.52 8.52 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.5 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"></path>
                        </svg>
                        Twitter
                      </a>
                      <a href="#" className="share-button">
                        <svg viewBox="0 0 24 24">
                          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"></path>
                        </svg>
                        Facebook
                      </a>
                    </div>
                  </div>
                </div>
              </article>

              {/* Sidebar */}
              <aside className="article-sidebar">
                <div className="sidebar-widget">
                  <h3>More from Journal</h3>
                  <div className="related-articles">
                    <Link href="/journal/2" className="related-article">
                      <div className="related-article-image">
                        <Image 
                          src="/images/attractions/tet_paul_nature-trail.jpg"
                          alt="The Ultimate Guide to Piton Climbing"
                          width={80}
                          height={60}
                          className="object-cover"
                        />
                      </div>
                      <div className="related-article-content">
                        <h4>The Ultimate Guide to Piton Climbing</h4>
                        <span className="related-article-date">January 10, 2025</span>
                      </div>
                    </Link>
                    <Link href="/journal/3" className="related-article">
                      <div className="related-article-image">
                        <Image 
                          src="/images/property-3/5-honey-chile-carousel-1.jpg"
                          alt="Luxury Dining in Soufriere"
                          width={80}
                          height={60}
                          className="object-cover"
                        />
                      </div>
                      <div className="related-article-content">
                        <h4>Luxury Dining in Soufriere</h4>
                        <span className="related-article-date">January 5, 2025</span>
                      </div>
                    </Link>
                  </div>
                </div>

                <div className="sidebar-widget">
                  <h3>Newsletter</h3>
                  <p>Get the latest travel stories and villa updates.</p>
                  <NewsletterForm />
                </div>
              </aside>
            </div>
          </div>
        </section>

        {/* Related Articles */}
        <section className="related-articles-section section">
          <div className="container">
            <div className="section-header">
              <h2>You Might Also Like</h2>
            </div>
            <div className="related-articles-grid">
              <Link href="/journal/2" className="journal-card">
                <div className="journal-card-image">
                  <Image 
                    src="/images/attractions/tet_paul_nature-trail.jpg"
                    alt="The Ultimate Guide to Piton Climbing"
                    width={400}
                    height={250}
                    className="object-cover"
                  />
                  <div className="journal-category">Adventure</div>
                </div>
                <div className="journal-card-content">
                  <div className="journal-meta">
                    <span className="journal-date">January 10, 2025</span>
                    <span className="journal-read-time">8 min read</span>
                  </div>
                  <h3>The Ultimate Guide to Piton Climbing</h3>
                  <p>Everything you need to know about conquering Gros Piton, from preparation and gear to the breathtaking views at the summit.</p>
                  <span className="journal-read-more">Read More →</span>
                </div>
              </Link>

              <Link href="/journal/3" className="journal-card">
                <div className="journal-card-image">
                  <Image 
                    src="/images/property-3/5-honey-chile-carousel-1.jpg"
                    alt="Luxury Dining in Soufriere"
                    width={400}
                    height={250}
                    className="object-cover"
                  />
                  <div className="journal-category">Food & Drink</div>
                </div>
                <div className="journal-card-content">
                  <div className="journal-meta">
                    <span className="journal-date">January 5, 2025</span>
                    <span className="journal-read-time">6 min read</span>
                  </div>
                  <h3>Luxury Dining in Soufriere: A Culinary Journey</h3>
                  <p>Explore the finest restaurants and local eateries that showcase authentic St. Lucian cuisine with a modern twist.</p>
                  <span className="journal-read-more">Read More →</span>
                </div>
              </Link>
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