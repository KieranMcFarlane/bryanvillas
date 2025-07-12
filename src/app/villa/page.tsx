import Image from 'next/image'
import Link from 'next/link'
import ClientWrapper from '../../components/ClientWrapper'
import MobileNav from '../../components/MobileNav'

export default function Villa() {
  const amenities = [
    "Private Beach Access",
    "Full Staff & Private Cook", 
    "Infinity Pool",
    "Air Conditioning",
    "Open-Air Living Spaces",
    "Outdoor Dining Pavilion"
  ]

  const bedrooms = [
    { name: "Bedroom 1", bed: "King Bed" },
    { name: "Bedroom 2", bed: "King Bed" },
    { name: "Bedroom 3", bed: "Queen Bed" },
    { name: "Bedroom 4", bed: "Twin Beds" },
    { name: "Bedroom 5", bed: "Twin Beds" },
    { name: "Bedroom 6", bed: "King Bed" }
  ]

  const interiorImages = [
    "/images/property-4/LIVING_DINING-AREA_1_A_PIGEON-POINT_BLUE-PIGEON.jpg",
    "/images/property-4/LIVING_DINING-AREA_1_B_PIGEON-POINT_BLUE-PIGEON.jpg",
    "/images/property-4/LIVING_DINING-AREA_1_C_PIGEON-POINT_BLUE-PIGEON.jpg",
    "/images/property-4/LIVING_DINING-AREA_1_D_PIGEON-POINT_BLUE-PIGEON.jpg",
    "/images/property-4/LIVING_DINING-AREA_1_F_PIGEON-POINT_BLUE-PIGEON.jpg",
    "/images/property-4/LIVING_DINING_1_L_PIGEON-POINT_BLUE-PIGEON.jpg",
    "/images/property-4/HALLWAY_2_PIGEON-POINT_BLUE-PIGEON.jpg",
    "/images/property-4/OFFICE_PIGEON-POINT_BLUE-PIGEON.jpg"
  ]

  const bedroomImages = [
    "/images/property-4/BEDROOM_1_B_PIGEON-POINT_BLUE-PIGEON.jpg",
    "/images/property-4/BEDROOM_1_C_PIGEON-POINT_BLUE-PIGEON.jpg", 
    "/images/property-4/BEDROOM_2_PIGEON-POINT_BLUE-PIGEON.jpg",
    "/images/property-4/BOATHOUSE-BEDROOM_PIGEON-POINT_BLUE-PIGEON.jpg"
  ]

  const attractionImages = [
    "/images/attractions/boat_charter.jpg",
    "/images/attractions/yacht.jpg",
    "/images/attractions/seahome.jpg"
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
        <section className="villa-hero">
          <div 
            className="villa-hero-bg"
            style={{ backgroundImage: 'url(/images/property-3/1-stay-header-1600x698-1.jpg)' }}
          >
            <div className="hero-content">
              <h1>Smuggler&apos;s Nest</h1>
              <p>A private sanctuary with direct beach access and magnificent Piton views.</p>
            </div>
            <button className="btn-gallery">View Gallery</button>
          </div>
        </section>

        {/* Villa Info Bar */}
        <div className="villa-info-bar">
          <div className="container">
            <div className="info-item">
              <svg viewBox="0 0 24 24">
                <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
              </svg>
              <div className="text">
                <div className="value">8 Guests</div>
              </div>
            </div>
            <div className="info-item">
              <svg viewBox="0 0 24 24">
                <path d="M7 13c1.66 0 3-1.34 3-3S8.66 7 7 7s-3 1.34-3 3 1.34 3 3 3zm12-6h-8v7H3V5H1v15h2v-3h18v3h2V7c0-2.21-1.79-4-4-4z"/>
              </svg>
              <div className="text">
                <div className="value">4 Bedrooms</div>
              </div>
            </div>
            <div className="info-item">
              <svg viewBox="0 0 24 24">
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
              </svg>
              <div className="text">
                <div className="value">Beachfront</div>
              </div>
            </div>
            <div className="info-item">
              <svg viewBox="0 0 24 24">
                <path d="M12 2L1 21h22L12 2zm0 15l-5-5h3v-4h4v4h3l-5 5z"/>
              </svg>
              <div className="text">
                <div className="value">Piton Views</div>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="container">
          <div className="villa-content-grid">
            <div className="villa-main-content">
              <section className="description-section">
                <h3>About Smuggler&apos;s Nest</h3>
                <p>Nestled directly on the shores of Soufriere Bay, Smuggler&apos;s Nest offers an unparalleled Caribbean experience with direct access to a secluded beach and awe-inspiring views of the majestic Pitons. This expansive luxury villa is designed for those who appreciate both natural beauty and refined comfort.</p>
                <p>The villa&apos;s architecture seamlessly blends indoor and outdoor living, with vast terraces, an open-plan living area, and a stunning infinity pool that appears to merge with the sea beyond. A full staff, including a talented private cook, is dedicated to ensuring your every need is met, allowing you to fully immerse yourself in the tranquility of your surroundings. Whether you&apos;re hosting a family gathering or seeking a lavish escape, Smuggler&apos;s Nest is your ultimate private paradise.</p>
              </section>
              
              <section className="amenities-section">
                <h3>Amenities</h3>
                <ul className="amenities-list">
                  {amenities.map((amenity, index) => (
                    <li key={index}>
                      <svg viewBox="0 0 24 24">
                        <path d="M0 0h24v24H0z" fill="none"/>
                        <path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"/>
                      </svg>
                      {amenity}
                    </li>
                  ))}
                </ul>
              </section>
            </div>
            
            <aside className="villa-sidebar">
              <div className="booking-widget">
                <h3>Book Your Stay</h3>
                <div className="price">£1,250 <span>/ night</span></div>
                <button className="btn">Enquire Now</button>
              </div>
            </aside>
          </div>
        </div>

        {/* Interior Section */}
        <section className="content-section villa-interior">
          <div className="container content-grid reverse">
            <div className="content-text">
              <h3>Interior</h3>
              <p>Designed with beautiful wood floors and open plan living, the main house has a large drawing room and a separate media room/den. The kitchen is state of the art and perfect for entertaining. The bedrooms are all air-conditioned with en-suite bathrooms and private verandas. There is also a separate guest cottage with its own pool.</p>
            </div>
            <div className="content-image">
              <div className="villa-image-gallery">
                <Image
                  src={interiorImages[0]}
                  alt="Villa Interior"
                  width={600}
                  height={375}
                  className="gallery-main-image"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Bedrooms Section */}
        <section className="content-section">
          <div className="container content-grid">
            <div className="content-text">
              <h3>Bedrooms</h3>
              <p>The property sleeps up to 8 guests in 4 en-suite bedrooms, all of which have air conditioning. The master bedroom has a king-sized four-poster bed, while the other rooms have a mix of king, queen, and twin beds. Each bedroom features private verandas with stunning views.</p>
              <div className="bedrooms-grid">
                {bedrooms.map((bedroom, index) => (
                  <div key={index} className="bedroom-item">
                    <h4>{bedroom.name}</h4>
                    <p>{bedroom.bed}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="content-image">
              <div className="villa-image-gallery">
                <Image
                  src={bedroomImages[0]}
                  alt="Villa Bedroom"
                  width={600}
                  height={375}
                  className="gallery-main-image"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Quote Section */}
        <section className="quote-section section">
          <div className="container">
            <h3>What Makes This Property Special</h3>
            <p>&quot;The perfect holiday home with an abundance of space for entertaining. As well as the contemporary design and the incredible views. It would be impossible not to impress your friends and family with a stay at this villa.&quot;</p>
          </div>
        </section>

        {/* Things to Do */}
        <section className="things-to-do-hero">
          <h2>Things to Do</h2>
        </section>

        {/* Boat Charter Section */}
        <section className="content-section">
          <div className="container content-grid">
            <div className="content-text">
              <h3>Boat Charter</h3>
              <p>Explore the stunning coastline of St. Lucia and its neighbouring islands on a private boat charter. Discover secluded coves, snorkel in crystal-clear waters, and enjoy a gourmet lunch on board. A perfect day out for the whole family.</p>
            </div>
            <div className="content-image">
              <div className="villa-image-gallery">
                <Image
                  src={attractionImages[0]}
                  alt="Boat Charter"
                  width={600}
                  height={375}
                  className="gallery-main-image"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Booking Bar */}
        <section className="booking-bar">
          <div className="container">
            <h3>Looking to book with us?</h3>
            <div className="buttons">
              <Link href="#enquire" className="btn-enquire">Enquire</Link>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div className="container">
          <nav className="footer-nav">
            <Link href="/about">About Us</Link>
            <Link href="/journal">Journal</Link>
                            <Link href="/contact">Contact</Link>
            <Link href="#">Privacy Policy</Link>
          </nav>
          <p className="copyright">© 2025 Piton View Estates. All rights reserved.</p>
        </div>
      </footer>
    </ClientWrapper>
  )
} 