import Image from 'next/image'
import Link from 'next/link'
import ClientWrapper from '../../../components/ClientWrapper'
import NewsletterForm from '../../../components/NewsletterForm'
import { notFound } from 'next/navigation'

// Experience data - in a real app, this would come from a CMS or database
const experiences = {
  'gros-piton-sunrise-hike': {
    id: 1,
    title: "Gros Piton Sunrise Hike",
    excerpt: "Experience the magical sunrise from the summit of Gros Piton, offering breathtaking 360-degree views of the island.",
    image: "/images/attractions/tet_paul_nature-trail.jpg",
    category: "Adventure",
    duration: "5-6 hours",
    difficulty: "Challenging",
    slug: "gros-piton-sunrise-hike",
    price: "From $95 per person",
    includes: ["Professional guide", "Light refreshments", "Transportation", "Safety equipment"],
    content: `
      <p>Conquer the iconic Gros Piton at sunrise for one of the most spectacular experiences St. Lucia has to offer. This challenging yet rewarding hike takes you 2,619 feet above sea level to witness the Caribbean's most breathtaking sunrise.</p>

      <h3>The Journey Begins</h3>
      <p>Your adventure starts in the pre-dawn darkness at 3:30 AM with pickup from your villa. As you make your way to the base of Gros Piton in Soufrière, the anticipation builds for what lies ahead. Our experienced local guides will brief you on the trail ahead and ensure you're properly equipped for the challenging ascent.</p>

      <h3>The Ascent</h3>
      <p>The trail to the summit is steep and demanding, winding through lush tropical vegetation and volcanic rock formations. You'll traverse through different ecosystems as you climb, from coastal dry forest to montane rainforest. The path includes rope-assisted sections and rocky scrambles that require good physical fitness and determination.</p>

      <h3>Sunrise at the Summit</h3>
      <p>Reaching the summit just before sunrise is a moment you'll never forget. As the first rays of sunlight paint the sky in brilliant colors, you'll enjoy panoramic views of the entire island, the Caribbean Sea, and on clear days, even neighboring islands like Martinique and St. Vincent.</p>

      <h3>What Makes This Special</h3>
      <p>This isn't just a hike – it's a spiritual journey that connects you with St. Lucia's volcanic heritage. The Pitons are UNESCO World Heritage sites, and standing atop Gros Piton at sunrise offers a profound connection to the island's natural majesty and geological significance.</p>

      <h3>Important Notes</h3>
      <p>This experience requires excellent physical fitness and is not recommended for those with fear of heights or heart conditions. Weather conditions can change rapidly, and tours may be cancelled for safety reasons. Proper hiking shoes and comfortable clothing are essential.</p>
    `
  },
  'volcano-waterfall-adventure': {
    id: 2,
    title: "Volcano & Waterfall Adventure",
    excerpt: "Explore the world's only drive-in volcano and discover the stunning Diamond Falls in a full day of natural wonders.",
    image: "/images/attractions/St-Lucia-sulphur-bath-2.jpg",
    category: "Nature",
    duration: "6-7 hours",
    difficulty: "Moderate",
    slug: "volcano-waterfall-adventure",
    price: "From $125 per person",
    includes: ["Expert naturalist guide", "Entrance fees", "Lunch", "Transportation", "Therapeutic mud bath"],
    content: `
      <p>Immerse yourself in St. Lucia's volcanic heritage with this comprehensive tour that combines the therapeutic wonders of Sulphur Springs with the colorful beauty of Diamond Falls. This full-day adventure showcases the island's unique geological features and lush tropical landscapes.</p>

      <h3>Sulphur Springs - The Drive-In Volcano</h3>
      <p>Begin your day at Sulphur Springs, the world's only drive-in volcano. This collapsed volcanic crater still bubbles with sulfurous gases and hot springs, creating an otherworldly landscape of steaming vents and mineral-rich pools. Your expert guide will explain the geological forces that shaped St. Lucia while you experience the therapeutic benefits of the natural mud baths.</p>

      <h3>The Therapeutic Mud Bath Experience</h3>
      <p>Indulge in the island's famous volcanic mud baths, rich in minerals like sulfur, iron, and magnesium. These natural spa treatments have been used for centuries to rejuvenate skin and soothe muscles. The warm, sulfur-rich mud is believed to have healing properties for various skin conditions and joint pain.</p>

      <h3>Diamond Falls Botanical Gardens</h3>
      <p>After your volcanic adventure, journey to the enchanting Diamond Falls, where rainbow-colored waters cascade down mineral-stained rocks. The falls get their striking colors from the volcanic minerals in the water, creating a natural masterpiece that changes hues throughout the day.</p>

      <h3>Botanical Garden Exploration</h3>
      <p>Wander through the lush botanical gardens surrounding Diamond Falls, home to exotic tropical plants, medicinal herbs, and colorful flowers. Learn about the indigenous flora used in traditional Caribbean medicine and the conservation efforts protecting these precious ecosystems.</p>

      <h3>Cultural Heritage</h3>
      <p>This tour isn't just about natural beauty – it's also a journey through St. Lucia's cultural heritage. Diamond Estate has historical significance dating back to the colonial era, and your guide will share stories of the island's complex past while you explore these remarkable natural wonders.</p>

      <h3>Perfect for All Ages</h3>
      <p>This moderate-difficulty tour is suitable for most fitness levels and ages, making it perfect for families and groups with varying abilities. The therapeutic aspects make it especially appealing for those seeking relaxation and wellness during their Caribbean vacation.</p>
    `
  },
  'sunset-catamaran-cruise': {
    id: 3,
    title: "Sunset Catamaran Cruise",
    excerpt: "Sail along St. Lucia's stunning coastline with snorkeling, swimming, and unforgettable sunset views.",
    image: "/images/attractions/yacht.jpg",
    category: "Water Sports",
    duration: "4-5 hours",
    difficulty: "Easy",
    slug: "sunset-catamaran-cruise",
    price: "From $85 per person",
    includes: ["Open bar", "Snorkeling equipment", "Light refreshments", "Professional crew", "Sunset views"],
    content: `
      <p>Set sail on the crystal-clear waters of the Caribbean for an unforgettable sunset catamaran cruise along St. Lucia's spectacular coastline. This relaxing yet adventurous experience combines snorkeling, swimming, and breathtaking sunset views for the perfect day on the water.</p>

      <h3>Departure and Coastal Views</h3>
      <p>Your maritime adventure begins at one of St. Lucia's beautiful marinas, where you'll board a spacious catamaran designed for comfort and stability. As you sail along the western coast, marvel at the dramatic Pitons rising from the sea and the lush, mountainous landscape that makes St. Lucia one of the Caribbean's most scenic islands.</p>

      <h3>Snorkeling in Paradise</h3>
      <p>Anchor at pristine snorkeling spots where you can explore vibrant coral reefs teeming with tropical marine life. The warm Caribbean waters offer excellent visibility, perfect for spotting colorful parrotfish, angelfish, sea turtles, and rays. All snorkeling equipment is provided, and our crew offers guidance for beginners.</p>

      <h3>Swimming and Relaxation</h3>
      <p>Enjoy multiple swimming stops in secluded bays with crystal-clear waters. The catamaran's easy water access makes it simple to slip in and out of the refreshing Caribbean Sea. Relax on the boat's spacious deck, enjoy the open bar, and soak up the tropical sun while taking in the stunning coastal scenery.</p>

      <h3>The Magical Sunset</h3>
      <p>As the day winds down, position yourself for one of the Caribbean's most spectacular sunsets. Watch as the sky transforms into a canvas of brilliant oranges, pinks, and purples, with the silhouette of the Pitons creating a dramatic backdrop. This is the moment that makes St. Lucia truly magical.</p>

      <h3>Onboard Amenities</h3>
      <p>Enjoy a full open bar featuring local rum punches, beer, and soft drinks throughout the cruise. Light refreshments and snacks are served to keep you energized for swimming and snorkeling. The professional crew ensures your safety and comfort while sharing local knowledge about the marine environment and coastal landmarks.</p>

      <h3>Perfect for Everyone</h3>
      <p>This easy-difficulty cruise is suitable for all ages and swimming abilities. Non-swimmers can enjoy the boat ride and scenery, while water enthusiasts can make the most of the snorkeling and swimming opportunities. It's an ideal experience for couples, families, and groups celebrating special occasions.</p>
    `
  },
  'caribbean-cooking-class': {
    id: 4,
    title: "Caribbean Cooking Class",
    excerpt: "Learn to prepare authentic St. Lucian dishes using local ingredients and traditional techniques.",
    image: "/images/attractions/unnamed.webp",
    category: "Cultural",
    duration: "3-4 hours",
    difficulty: "Easy",
    slug: "caribbean-cooking-class",
    price: "From $75 per person",
    includes: ["Professional chef instruction", "All ingredients", "Recipe cards", "Lunch/dinner", "Welcome drink"],
    content: `
      <p>Immerse yourself in St. Lucian culture through its vibrant culinary traditions. This hands-on cooking class takes you on a delicious journey through authentic Caribbean flavors, teaching you to prepare traditional dishes using fresh, local ingredients and time-honored techniques.</p>

      <h3>Welcome to Caribbean Cuisine</h3>
      <p>Begin your culinary adventure with a welcome drink and introduction to Caribbean cooking traditions. Learn about the cultural influences that shaped St. Lucian cuisine, from indigenous Carib and Arawak techniques to African, French, and British colonial influences that created the island's unique flavor profile.</p>

      <h3>Market Fresh Ingredients</h3>
      <p>Discover the vibrant local ingredients that form the foundation of Caribbean cooking. Learn to identify and use exotic spices, tropical fruits, root vegetables, and fresh seafood. Your chef instructor will explain the nutritional and medicinal properties of traditional ingredients like turmeric, scotch bonnet peppers, and breadfruit.</p>

      <h3>Hands-On Cooking Experience</h3>
      <p>Roll up your sleeves and learn to prepare authentic St. Lucian dishes such as callaloo soup, curry chicken, rice and peas, plantain, and fresh fish with creole sauce. Master traditional cooking techniques like seasoning meats with green seasoning, preparing roux for curry bases, and achieving the perfect texture for rice and peas.</p>

      <h3>Cultural Stories and Traditions</h3>
      <p>While you cook, listen to fascinating stories about how each dish connects to St. Lucian history and culture. Learn about the significance of communal cooking, traditional cooking vessels, and how recipes have been passed down through generations of Caribbean families.</p>

      <h3>The Feast</h3>
      <p>Sit down to enjoy the delicious meal you've prepared, accompanied by fresh tropical juices and local beverages. This communal dining experience embodies the spirit of Caribbean hospitality and gives you a deeper appreciation for the island's culinary heritage.</p>

      <h3>Take Home the Experience</h3>
      <p>Receive recipe cards with detailed instructions for all the dishes you've learned to prepare, so you can recreate these authentic Caribbean flavors at home. Your chef will also provide tips for sourcing Caribbean ingredients and adapting recipes for different dietary preferences.</p>

      <h3>Perfect Cultural Immersion</h3>
      <p>This easy-level experience requires no prior cooking experience and is suitable for all ages. It's an excellent way to connect with local culture, learn new skills, and enjoy delicious food in a relaxed, friendly environment.</p>
    `
  },
  'rainforest-canopy-adventure': {
    id: 5,
    title: "Rainforest Canopy Adventure",
    excerpt: "Zip-line through the lush rainforest canopy and experience St. Lucia's biodiversity from above.",
    image: "/images/attractions/tet_paul_nature-trail.jpg",
    category: "Adventure",
    duration: "4-5 hours",
    difficulty: "Moderate",
    slug: "rainforest-canopy-adventure",
    price: "From $110 per person",
    includes: ["Safety equipment", "Professional guides", "Transportation", "Light refreshments", "Photography opportunities"],
    content: `
      <p>Soar through the emerald canopy of St. Lucia's pristine rainforest on this exhilarating zip-line adventure. Experience the island's incredible biodiversity from a unique perspective while gliding between towering trees and taking in spectacular views of the tropical landscape below.</p>

      <h3>Into the Heart of the Rainforest</h3>
      <p>Journey into St. Lucia's interior rainforest, home to rare endemic species and ancient trees that have stood for centuries. This protected ecosystem represents one of the Caribbean's most important biodiversity hotspots, housing exotic birds, colorful butterflies, and unique plant species found nowhere else on earth.</p>

      <h3>Professional Safety Briefing</h3>
      <p>Before taking flight, receive comprehensive safety training from certified guides who prioritize your security and enjoyment. Learn proper zip-line techniques, equipment use, and emergency procedures. All safety gear meets international standards, ensuring a secure and thrilling experience for adventurers of all skill levels.</p>

      <h3>Canopy Zip-Line Experience</h3>
      <p>Embark on a series of zip-lines that take you progressively higher into the forest canopy. Each line offers different perspectives and challenges, from gentle introductory runs to longer, faster lines that span dramatic gorges and provide breathtaking views of the surrounding mountains and coastline.</p>

      <h3>Wildlife and Nature Observation</h3>
      <p>Between zip-line segments, pause on elevated platforms to observe the rainforest's incredible wildlife. Spot endemic St. Lucia parrots, hummingbirds, and colorful tanagers. Learn about the complex ecosystem relationships and conservation efforts protecting this precious environment from knowledgeable naturalist guides.</p>

      <h3>Educational Component</h3>
      <p>This adventure combines thrills with environmental education. Discover how rainforests contribute to global climate regulation, learn about medicinal plants used by indigenous peoples, and understand the importance of conservation in maintaining these crucial ecosystems for future generations.</p>

      <h3>Spectacular Views</h3>
      <p>From the canopy platforms, enjoy panoramic views that extend from the rainforest interior to the Caribbean Sea. On clear days, you can see the dramatic Pitons, neighboring islands, and the intricate tapestry of St. Lucia's varied landscapes from mountains to sea.</p>

      <h3>Moderate Adventure Level</h3>
      <p>This moderate-difficulty experience requires basic physical fitness but no previous zip-lining experience. Age and weight restrictions apply for safety reasons. The adventure is suitable for most adventurous travelers seeking an exciting way to experience St. Lucia's natural beauty.</p>
    `
  },
  'coral-reef-diving': {
    id: 6,
    title: "Coral Reef Diving",
    excerpt: "Explore vibrant coral reefs and diverse marine life in St. Lucia's pristine underwater world.",
    image: "/images/attractions/seahome.jpg",
    category: "Water Sports",
    duration: "Half or full day",
    difficulty: "Intermediate",
    slug: "coral-reef-diving",
    price: "From $95 per person",
    includes: ["Diving equipment", "Professional dive master", "Boat transportation", "Multiple dive sites", "Safety briefing"],
    content: `
      <p>Dive into St. Lucia's underwater paradise and discover vibrant coral reefs teeming with exotic marine life. This world-class diving experience showcases the Caribbean's most pristine underwater ecosystems, from colorful shallow reefs to dramatic underwater walls and fascinating shipwrecks.</p>

      <h3>St. Lucia's Diving Paradise</h3>
      <p>St. Lucia's western coast offers some of the Caribbean's finest diving conditions, with excellent visibility, warm waters year-round, and diverse marine ecosystems. The island's volcanic origin creates dramatic underwater topography, including steep walls, underwater caves, and thriving coral gardens protected from Atlantic swells.</p>

      <h3>Diverse Dive Sites</h3>
      <p>Explore multiple dive sites tailored to your experience level. Beginners can enjoy shallow coral gardens near Anse Chastanet, while advanced divers can tackle the famous Lesleen M wreck or the dramatic drop-offs at Pinnacles. Each site offers unique marine encounters and underwater landscapes.</p>

      <h3>Marine Life Encounters</h3>
      <p>Encounter an incredible diversity of Caribbean marine life, including hawksbill and green sea turtles, southern stingrays, moray eels, nurse sharks, and colorful reef fish like parrotfish, angelfish, and trumpetfish. Lucky divers might spot dolphins, whale sharks, or migrating humpback whales during winter months.</p>

      <h3>Coral Conservation</h3>
      <p>Learn about coral reef conservation efforts and the importance of these ecosystems to marine biodiversity and coastal protection. St. Lucia's reefs face challenges from climate change and human impact, making sustainable diving practices crucial for preserving these underwater treasures for future generations.</p>

      <h3>Professional Guidance</h3>
      <p>Dive with experienced, certified dive masters who know the local conditions and marine life intimately. They ensure your safety while maximizing your underwater experience, pointing out hidden creatures and sharing knowledge about the marine ecosystem's complex relationships.</p>

      <h3>Multiple Dive Options</h3>
      <p>Choose from half-day excursions with two dives or full-day adventures with multiple sites and extended bottom time. Night diving options reveal different marine behaviors and nocturnal creatures rarely seen during daylight hours, offering a completely different underwater experience.</p>

      <h3>Certification Requirements</h3>
      <p>This intermediate-level experience requires Open Water Diver certification or equivalent. Recent diving experience is recommended, though refresher courses are available for rusty divers. All equipment is provided, but experienced divers are welcome to bring their own gear.</p>
    `
  }
}

interface ExperiencePageProps {
  params: Promise<{
    id: string
  }>
}

export default async function ExperiencePage({ params }: ExperiencePageProps) {
  const { id } = await params
  const experience = experiences[id as keyof typeof experiences]

  if (!experience) {
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
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="experience-hero">
          <div className="experience-hero-background">
            <Image
              src={experience.image}
              alt={experience.title}
              fill
              style={{ objectFit: 'cover' }}
              priority
            />
          </div>
          <div className="experience-hero-overlay">
            <div className="container">
              <div className="experience-hero-content">
                <nav className="experience-breadcrumb">
                  <Link href="/" className="breadcrumb-link">Home</Link>
                  <span className="breadcrumb-separator"> / </span>
                  <Link href="/experiences" className="breadcrumb-link">Experiences</Link>
                  <span className="breadcrumb-separator"> / </span>
                  <span>{experience.title}</span>
                </nav>
                <div className="experience-category">{experience.category}</div>
                <h1>{experience.title}</h1>
                <p>{experience.excerpt}</p>
                <div className="experience-meta">
                  <span className="experience-duration">{experience.duration}</span>
                  <span className="experience-difficulty">{experience.difficulty}</span>
                  <span className="experience-price">{experience.price}</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="experience-content section">
          <div className="container">
            <div className="experience-layout">
              <div className="experience-main">
                <div className="experience-article">
                  <div dangerouslySetInnerHTML={{ __html: experience.content }} />
                </div>

                {/* What's Included */}
                <div className="experience-includes">
                  <h3>What's Included</h3>
                  <ul>
                    {experience.includes.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Sidebar */}
              <div className="experience-sidebar">
                <div className="experience-booking-card">
                  <h3>Book This Experience</h3>
                  <div className="booking-price">{experience.price}</div>
                  <div className="booking-details">
                    <div className="booking-detail">
                      <strong>Duration:</strong> {experience.duration}
                    </div>
                    <div className="booking-detail">
                      <strong>Difficulty:</strong> {experience.difficulty}
                    </div>
                    <div className="booking-detail">
                      <strong>Category:</strong> {experience.category}
                    </div>
                  </div>
                                <Link href="/contact" className="btn booking-btn">Book Now</Link>
              <Link href="/contact" className="btn btn-secondary booking-btn">Enquire</Link>
                </div>

                <div className="experience-highlights">
                  <h4>Experience Highlights</h4>
                  <ul>
                    {experience.includes.slice(0, 3).map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Related Experiences */}
        <section className="related-experiences-section section">
          <div className="container">
            <div className="section-header">
              <h2>More Experiences</h2>
              <p>Discover other amazing adventures in St. Lucia</p>
            </div>
            <div className="related-experiences-grid">
              {Object.values(experiences).filter(exp => exp.slug !== experience.slug).slice(0, 3).map((exp) => (
                <Link key={exp.id} href={`/experiences/${exp.slug}`} className="experience-card">
                  <div className="experience-card-image">
                    <Image
                      src={exp.image}
                      alt={exp.title}
                      width={400}
                      height={250}
                      style={{ objectFit: 'cover' }}
                    />
                  </div>
                  <div className="experience-card-content">
                    <div className="experience-card-category">{exp.category}</div>
                    <h3>{exp.title}</h3>
                    <p>{exp.excerpt}</p>
                    <div className="experience-card-meta">
                      <span>{exp.duration}</span>
                      <span>{exp.difficulty}</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter CTA */}
        <section id="newsletter-cta" className="section">
          <div className="container">
            <div className="section-header">
              <h2>Get Exclusive Experience Updates</h2>
              <p>Be the first to know about new adventures and special offers</p>
            </div>
            <div className="newsletter-form-large">
              <NewsletterForm variant="large" />
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
                <li><Link href="/#careers">Careers</Link></li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>Help</h4>
              <ul>
                <li><Link href="/contact">Contact Us</Link></li>
                <li><Link href="/#faqs">FAQs</Link></li>
                <li><Link href="/#terms">Booking T&Cs</Link></li>
                <li><Link href="/#privacy">Privacy Policy</Link></li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>Destinations</h4>
              <ul>
                <li><Link href="/#caribbean">Caribbean</Link></li>
                <li><Link href="/#europe">Europe</Link></li>
                <li><Link href="/#asia">Asia</Link></li>
                <li><Link href="/#uk">UK & Ireland</Link></li>
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
            <p className="copyright">© 2025 Piton View Estates. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </ClientWrapper>
  )
} 