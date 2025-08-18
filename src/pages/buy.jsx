import React, { useState } from "react";
import "./buy.css"; // keep your styling
import Header from "../components/Header"; // the shared one

const BuyPage = () => {
    const [filters, setFilters] = useState({
        type: "all",
        bedrooms: "all",
        price: "all",
        location: ""
    });

    // sample property data
    const properties = [
        {
            id: 1,
            type: "duplex",
            bedrooms: 4,
            price: "mid",
            location: "enugu",
            img: "/Twin-duplex.jpg",
            title: "Luxury Duplex",
            details: "4 Beds • 4 Baths • 3,500 sqft",
            address: "Independence Layout, Enugu",
            cost: "₦3,500,000"
        },
        {
            id: 2,
            type: "apartment",
            bedrooms: 2,
            price: "low",
            location: "lagos",
            img: "/Air-bnb.jpg",
            title: "Modern Apartment",
            details: "2 Beds • 2 Baths • 1,200 sqft",
            address: "Victoria Island, Lagos",
            cost: "₦900,000"
        },
        {
            id: 3,
            type: "bungalow",
            bedrooms: 3,
            price: "mid",
            location: "abuja",
            img: "/Bungalow.jpg",
            title: "Family Bungalow",
            details: "3 Beds • 2 Baths • 2,000 sqft",
            address: "Garki, Abuja",
            cost: "₦2,500,000"
        },
        {
            id: 4,
            type: "house",
            bedrooms: 5,
            price: "luxury",
            location: "lagos",
            img: "/Semi-detached.jpg",
            title: "Luxury Mansion",
            details: "5 Beds • 6 Baths • 6,500 sqft",
            address: "Lekki Phase 1, Lagos",
            cost: "₦20,000,000"
        },
        {
            id: 5,
            type: "house",
            bedrooms: 3,
            price: "mid",
            location: "lagos",
            img: "/Semi-detached2.jpg",
            title: "Semi-detached",
            details: "3 Beds • 2 Baths • 2,500 sqft",
            address: "Lekki Phase 1, Lagos",
            cost: "₦7,500,000"
        }
    ];

    // filtering logic (React version of applyFilters)
    const filteredProperties = properties.filter((p) => {
        const matchType = filters.type === "all" || p.type === filters.type;
        const matchBeds =
            filters.bedrooms === "all" || p.bedrooms >= parseInt(filters.bedrooms);
        const matchPrice = filters.price === "all" || p.price === filters.price;
        const matchLocation =
            filters.location.trim() === "" ||
            p.location.toLowerCase().includes(filters.location.toLowerCase());

        return matchType && matchBeds && matchPrice && matchLocation;
    });

    return (
        <>
            {/* shared header */}
            <Header />

            {/* Hero Section */}
            <section className="hero">
                <div className="hero-overlay">
                    <h1>Find Your Dream Home</h1>
                    <p>Browse through exclusive listings tailored to your needs</p>

                    <div className="filter-bar">
                        <select
                            value={filters.type}
                            onChange={(e) => setFilters({ ...filters, type: e.target.value })}
                        >
                            <option value="all">Property Type</option>
                            <option value="house">House</option>
                            <option value="duplex">Duplex</option>
                            <option value="apartment">Apartment</option>
                            <option value="bungalow">Bungalow</option>
                        </select>

                        <select
                            value={filters.bedrooms}
                            onChange={(e) =>
                                setFilters({ ...filters, bedrooms: e.target.value })
                            }
                        >
                            <option value="all">Bedrooms</option>
                            <option value="1">1+</option>
                            <option value="2">2+</option>
                            <option value="3">3+</option>
                            <option value="4">4+</option>
                        </select>

                        <select
                            value={filters.price}
                            onChange={(e) =>
                                setFilters({ ...filters, price: e.target.value })
                            }
                        >
                            <option value="all">Price Range</option>
                            <option value="low">₦500k - ₦1M</option>
                            <option value="mid">₦1M - ₦5M</option>
                            <option value="high">₦5M - ₦10M</option>
                            <option value="luxury">Above ₦10M</option>
                        </select>

                        <input
                            type="text"
                            placeholder="Search by Location (e.g Enugu, Lagos)"
                            value={filters.location}
                            onChange={(e) =>
                                setFilters({ ...filters, location: e.target.value })
                            }
                        />

                        <button>Find Homes</button>
                    </div>
                </div>
            </section>

            {/* Property Listings */}
            <section className="property-grid">
                {filteredProperties.map((p) => (
                    <div
                        key={p.id}
                        className="property-card"
                        data-type={p.type}
                        data-bedrooms={p.bedrooms}
                        data-price={p.price}
                        data-location={p.location}
                    >
                        <img src={p.img} alt={p.title} />
                        <div className="property-info">
                            <h3>{p.title}</h3>
                            <p>{p.details}</p>
                            <p>{p.address}</p>
                            <p className="price">{p.cost}</p>
                            <div className="btn-group">
                                <a href="#" className="btn btn-details">
                                    View Details
                                </a>
                                <a href="#" className="btn btn-buy">
                                    Purchase
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </section>

            {/* ✅ Custom footer only for Buy Page */}
            <footer className="site-footer">
                <div className="footer-content">
                    <div className="footer-section">
                        <h3>PropertyLink.ng</h3>
                        <p>
                            PropertyLink.ng is now available on iOS, Android and Chrome. Use
                            our website to explore the world.
                        </p>
                    </div>
                    <div className="footer-section">
                        <h4>Pages</h4>
                        <ul>
                            <li><a href="/buy">Buy</a></li>
                            <li><a href="/sell">Sell</a></li>
                            <li><a href="/rent">Rent</a></li>
                            <li><a href="/aboutus">About Us</a></li>
                        </ul>
                    </div>
                    <div className="footer-section">
                        <h4>Resources</h4>
                        <ul>
                            <li><a href="#">Home Buying Guide</a></li>
                            <li><a href="#">Foreclosure Center</a></li>
                            <li><a href="#">Contact Realtors</a></li>
                        </ul>
                    </div>
                    <div className="footer-section">
                        <h4>Follow Us</h4>
                        <div className="social-links">
                            <a href="https://www.instagram.com">
                                <i className="fab fa-instagram"></i>
                            </a>
                            <a href="https://www.facebook.com">
                                <i className="fab fa-facebook-f"></i>
                            </a>
                            <a href="https://www.twitter.com">
                                <i className="fab fa-twitter"></i>
                            </a>
                            <a href="https://www.linkedin.com">
                                <i className="fab fa-linkedin-in"></i>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom">
                    <p>&copy; 2025 PropertyLink.ng. All rights reserved.</p>
                </div>
            </footer>
        </>
    );
};

export default BuyPage;
