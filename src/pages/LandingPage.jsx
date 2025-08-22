import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';


const LandingPage = () => {
  const [location, setLocation] = useState('');
  const [newsletterEmail, setNewsletterEmail] = useState('');

  const findProperty = () => {
    if (location.trim() === '') {
      alert('Please enter a location to search for properties.');
      return;
    }

    alert(`Searching for properties in: ${location}`);
    console.log('Searching for properties in:', location);
  };

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    if (newsletterEmail.trim() === '') {
      alert('Please enter your email address.');
      return;
    }
    alert(`Thank you for subscribing with: ${newsletterEmail}`);
    setNewsletterEmail('');
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      findProperty();
    }
  };

  // CountUp Animation Effect
  useEffect(() => {
    const els = document.querySelectorAll(".countup");
    if (!els.length) return;

    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    function formatNumber(value, separator, decimals) {
      const opts = {
        useGrouping: !!separator,
        minimumFractionDigits: decimals,
        maximumFractionDigits: decimals
      };
      let formatted = new Intl.NumberFormat("en-US", opts).format(value);
      if (separator && separator !== ",") {
        formatted = formatted.replace(/,/g, separator);
      }
      return formatted;
    }

    function decimalsOf(n) {
      const s = String(n);
      return s.includes(".") ? s.split(".")[1].length : 0;
    }

    function animateCount(el) {
      const from = parseFloat(el.dataset.from ?? "0");
      const to = parseFloat(el.dataset.to ?? "0");
      const duration = parseInt(el.dataset.duration ?? "2000", 10);
      const delay = parseInt(el.dataset.delay ?? "0", 10);
      const dir = (el.dataset.direction || "up").toLowerCase();
      const separator = el.dataset.separator || "";

      const maxDecimals = Math.max(decimalsOf(from), decimalsOf(to));
      const start = dir === "down" ? from : from;
      const end = dir === "down" ? to : to;

      if (prefersReduced || duration === 0) {
        el.textContent = formatNumber(end, separator, maxDecimals);
        return;
      }

      let startTime = null;
      const totalChange = end - start;

      function step(ts) {
        if (!startTime) startTime = ts;
        const elapsed = ts - startTime;
        const t = Math.min(elapsed / duration, 1);
        const eased = 1 - Math.pow(1 - t, 3);
        const current = start + totalChange * eased;

        el.textContent = formatNumber(current, separator, maxDecimals);

        if (t < 1) {
          requestAnimationFrame(step);
        } else {
          el.textContent = formatNumber(end, separator, maxDecimals);
        }
      }

      setTimeout(() => requestAnimationFrame(step), delay);
    }

    // Trigger when elements enter the viewport
    const io = ("IntersectionObserver" in window)
      ? new IntersectionObserver((entries, obs) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              animateCount(entry.target);
              obs.unobserve(entry.target);
            }
          });
        }, { threshold: 0.2 })
      : null;

    els.forEach(el => {
      el.textContent = el.dataset.from ?? "0";
      if (io) io.observe(el);
      else animateCount(el);
    });
  }, []);

  return (
    <>
      <Header />

      <section className="hero">
        <div className="overlay"></div>
        <div className="hero-content">
          <h1>Unlock the door to your perfect property!</h1>
          <p>We connect buyers, renters and landlords by simplifying their property search process and fostering transparent and efficient transactions, providing you the perfect property!</p>
          <div className="search-container">
            <div className="search-bar">
              <input
                type="text"
                placeholder="Enter your location..."
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                onKeyPress={handleKeyPress}
              />
              <button onClick={findProperty}>Find property</button>
            </div>
          </div>
        </div>
      </section>

      <div className="stats">
        <div className="stat">
          <span
            className="countup"
            data-from="0"
            data-to="30000"
            data-duration="3200"
            data-delay="200"
            data-separator=","
          >
            0
          </span>
          <p> + Properties sold</p>
        </div>
        <div className="stat">
          <span
            className="countup"
            data-from="0"
            data-to="10"
            data-duration="3600"
            data-delay="0"
          >
            0
          </span>
          <p>Years of experience</p>
        </div>
        <div className="stat">
          <span
            className="countup"
            data-from="500"
            data-to="12000"
            data-duration="3200"
            data-direction="down"
          >
            500
          </span>
          <p> + Clients</p>
        </div>
      </div>

      <section className="properties">
        <div className="container">
          <div className="section-header">
            <h2>Discount Offers on Properties in Enugu</h2>
          </div>
          <div className="view-all">
            <button className="view-all-btn">View All </button>
          </div>
        </div>
        <div className="property-grid">
          {/* Property Card 1 */}
          <div className="property-card">
            <div className="property-image">
              <img src="/Semi-detached.jpg" alt="Luxury Villa" />
            </div>
            <div className="property-details">
              <h3>Semi-detached</h3>
              <div className="features">
                <span> 4 Beds</span>
                <span> 4 Baths</span>
                <span> 2,500 sqft</span>
              </div>
              <p className="location">Independence layout, Enugu</p>
              <div className="price">
                <span className="amount"><s>₦5,000,000</s> ₦2,000,000</span>
                <button className="book_now-btn">Book Now</button>
              </div>
            </div>
          </div>

          {/* Property Card 2 */}
          <div className="property-card">
            <div className="property-image">
              <img src="/Air-bnb.jpg" alt="Air-bnb" />
            </div>
            <div className="property-details">
              <h3>Air-bnb</h3>
              <div className="features">
                <span> 4 Beds</span>
                <span> 4 Baths</span>
                <span> 2,500 sqft</span>
              </div>
              <p className="location">Independence layout, Enugu</p>
              <div className="price">
                <span className="amount"><s>₦5,000,000</s> ₦1,000,000</span>
                <button className="book_now-btn">Contact Now</button>
              </div>
            </div>
          </div>

          {/* Property Card 3 */}
          <div className="property-card">
            <div className="property-image">
              <img src="/Twin-duplex.jpg" alt="Twin-duplex" />
            </div>
            <div className="property-details">
              <h3>Twin-duplex</h3>
              <div className="features">
                <span> 4 Beds</span>
                <span> 4 Baths</span>
                <span> 2,500 sqft</span>
              </div>
              <p className="location">Independence layout, Enugu</p>
              <div className="price">
                <span className="amount"><s>₦5,000,000</s> ₦1,000,000</span>
                <button className="book_now-btn">Contact Now</button>
              </div>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="section-header">
            <h2>New Listings In New Layout, Enugu</h2>
          </div>
          <div className="view-all">
            <button className="view-all-btn">View All </button>
          </div>
        </div>
        <div className="property-grid">
          {/* Property Card 4 */}
          <div className="property-card">
            <div className="property-image">
              <img src="/Bungalow.jpg" alt="Bungalow" />
            </div>
            <div className="property-details">
              <h3>Bungalow</h3>
              <div className="features">
                <span> 4 Beds</span>
                <span> 4 Baths</span>
                <span> 2,500 sqft</span>
              </div>
              <p className="location">Independence layout, Enugu</p>
              <div className="price">
                <span className="amount">₦3,000,000</span>
                <button className="book_now-btn">Contact Now</button>
              </div>
            </div>
          </div>

          {/* Property Card 5 */}
          <div className="property-card">
            <div className="property-image">
              <img src="/Twin-duplex2.png" alt="Twin-duplex" />
            </div>
            <div className="property-details">
              <h3>Twin-duplex</h3>
              <div className="features">
                <span> 4 Beds</span>
                <span> 4 Baths</span>
                <span> 2,500 sqft</span>
              </div>
              <p className="location">Independence layout, Enugu</p>
              <div className="price">
                <span className="amount">₦4,000,000</span>
                <button className="book_now-btn">Contact Now</button>
              </div>
            </div>
          </div>

          {/* Property Card 6 */}
          <div className="property-card">
            <div className="property-image">
              <img src="/Semi-detached2.jpg" alt="Semi-detached" />
            </div>
            <div className="property-details">
              <h3>Semi-detached</h3>
              <div className="features">
                <span> 4 Beds</span>
                <span> 4 Baths</span>
                <span> 2,500 sqft</span>
              </div>
              <p className="location">Independence layout, Enugu</p>
              <div className="price">
                <span className="amount">₦5,000,000</span>
                <button className="book_now-btn">Contact Now</button>
              </div>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="section-header">
            <h2>New Land Listings In GRA, Enugu</h2>
          </div>
          <div className="view-all">
            <button className="view-all-btn">View All </button>
          </div>
        </div>
        <div className="property-grid">
          {/* Property Card 7 */}
          <div className="property-card">
            <div className="property-image">
              <img src="/30 Hectares.jpg" alt="30 Hectares" />
            </div>
            <div className="property-details">
              <h3>30 Hectares</h3>
              <div className="features">
                <span> 4000mm x 5000mm</span>
                <span> 2,500 sqft</span>
              </div>
              <p className="location">GRA, Enugu</p>
              <div className="price">
                <span className="amount">₦20,000,000</span>
                <button className="book_now-btn">Contact Now</button>
              </div>
            </div>
          </div>

          {/* Property Card 8 */}
          <div className="property-card">
            <div className="property-image">
              <img src="/100 Wide Plots.jpg" alt="100 Wide Plots" />
            </div>
            <div className="property-details">
              <h3>100 Wide Plots</h3>
              <div className="features">
                <span> 9000mm x 9000mm</span>
                <span> 2,500 sqft</span>
              </div>
              <p className="location">GRA, Enugu</p>
              <div className="price">
                <span className="amount">₦10,000,000</span>
                <button className="book_now-btn">Contact Now</button>
              </div>
            </div>
          </div>

          {/* Property Card 9 */}
          <div className="property-card">
            <div className="property-image">
              <img src="/50 Hectares.jpg" alt="50 Hectares" />
            </div>
            <div className="property-details">
              <h3>50 Hectares</h3>
              <div className="features">
                <span> 4000mm x 4000mm</span>
                <span> 2,500 sqft</span>
              </div>
              <p className="location">GRA, Enugu</p>
              <div className="price">
                <span className="amount">₦30,000,000</span>
                <button className="book_now-btn">Contact Now</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="newsletter">
        <div className="newsletter-container">
          <div className="newsletter-content">
            <h2>Subscribe to Our Newsletter</h2>
            <p>Get full details on new listings</p>
            <form className="newsletter-form" onSubmit={handleNewsletterSubmit}>
              <input
                type="email"
                placeholder=" your email address"
                required
                value={newsletterEmail}
                onChange={(e) => setNewsletterEmail(e.target.value)}
              />
              <button type="submit">Subscribe</button>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default LandingPage;
