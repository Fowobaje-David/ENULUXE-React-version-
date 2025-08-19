import React, { useState } from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header"; // ✅ use the Enuluxe.ng transparent header
import "./rent.css";

// ✅ Import property images correctly from public folder
import apartment1 from "/Apartment.jpg";
import apartment2 from "/763c7b3c-d0f6-4154-9bcc-cbfb4383ae21.jpg";
import house1 from "/Contemporary Villla.jpg";
import studio from "/Low-Budget Balcony Garden Ideas That Look Like a Designer’s Work.jpg";
import duplex from "/15 Must-See Loft House Design Ideas to Transform Small Living in the Philippines - pulsepathlife_com.jpg";
import penthouse from "/Cityscape views from penthouse.jpg";

const RentPage = () => {
    const [filters, setFilters] = useState({
        type: "all",
        payment: "all",
        price: "all",
        location: "",
    });

    const properties = [
        {
            id: 1,
            type: "apartment",
            payment: "monthly",
            price: "low",
            location: "Agbani",
            title: "1-Bedroom Flat",
            details: "1 Bed • 1 Bath • 800 sqft",
            address: "Agbani, Enugu",
            amount: "₦350,000 / Monthly",
            image: apartment1,
        },
        {
            id: 2,
            type: "apartment",
            payment: "quarterly",
            price: "mid",
            location: "Achi",
            title: "Luxury Apartment",
            details: "2 Beds • 2 Baths • 1,200 sqft",
            address: "Achi, Enugu",
            amount: "₦1,200,000 / Quarterly",
            image: apartment2,
        },
        {
            id: 3,
            type: "house",
            payment: "annually",
            price: "high",
            location: "Obimo",
            title: "Family House",
            details: "4 Beds • 3 Baths • 3,000 sqft",
            address: "Obimo, Enugu",
            amount: "₦3,000,000 / Annually",
            image: house1,
        },
        {
            id: 4,
            type: "apartment",
            payment: "monthly",
            price: "low",
            location: "Independence Layout",
            title: "Studio Apartment",
            details: "1 Bed • 1 Bath • 500 sqft",
            address: "Independence Layout, Enugu",
            amount: "₦150,000 / Monthly",
            image: studio,
        },
        {
            id: 5,
            type: "house",
            payment: "quarterly",
            price: "mid",
            location: "Aku",
            title: "3-Bedroom Duplex",
            details: "3 Beds • 3 Baths • 2,200 sqft",
            address: "Aku, Enugu",
            amount: "₦800,000 / Quarterly",
            image: duplex,
        },
        {
            id: 6,
            type: "apartment",
            payment: "annually",
            price: "high",
            location: "Udi",
            title: "Penthouse Apartment",
            details: "3 Beds • 3 Baths • 2,800 sqft",
            address: "Udi, Enugu",
            amount: "₦5,500,000 / Annually",
            image: penthouse,
        },
    ];

    const filteredProperties = properties.filter((p) => {
        const matchType = filters.type === "all" || p.type === filters.type;
        const matchPayment =
            filters.payment === "all" || p.payment === filters.payment;
        const matchPrice = filters.price === "all" || p.price === filters.price;
        const matchLocation =
            filters.location === "" ||
            p.location.includes(filters.location.toLowerCase());
        return matchType && matchPayment && matchPrice && matchLocation;
    });

    return (
        <div>
            {/* ✅ Transparent Enuluxe.ng Header */}
            <Header />

            {/* Hero Section */}
            <section className="hero rent-hero">
                <div className="hero-overlay">
                    <h1>Discover Rentals</h1>
                    <p>Elegant apartments and homes tailored to your lifestyle</p>
                    <div className="filter-bar">
                        <select
                            value={filters.type}
                            onChange={(e) => setFilters({ ...filters, type: e.target.value })}
                        >
                            <option value="all">Property Type</option>
                            <option value="apartment">Apartment</option>
                            <option value="house">House</option>
                        </select>

                        <select
                            value={filters.payment}
                            onChange={(e) =>
                                setFilters({ ...filters, payment: e.target.value })
                            }
                        >
                            <option value="all">Payment Plan</option>
                            <option value="monthly">Monthly</option>
                            <option value="quarterly">Quarterly</option>
                            <option value="annually">Annually</option>
                        </select>

                        <select
                            value={filters.price}
                            onChange={(e) => setFilters({ ...filters, price: e.target.value })}
                        >
                            <option value="all">Price Range</option>
                            <option value="low">₦100k - ₦500k</option>
                            <option value="mid">₦500k - ₦2M</option>
                            <option value="high">Above ₦2M</option>
                        </select>

                        <input
                            type="text"
                            placeholder="Search by Location (e.g. Udi, Owo)"
                            value={filters.location}
                            onChange={(e) =>
                                setFilters({ ...filters, location: e.target.value })
                            }
                        />
                    </div>
                </div>
            </section>

            {/* Property Listings */}
            <section className="property-grid">
                {filteredProperties.map((p) => (
                    <div
                        className="property-card"
                        key={p.id}
                        data-type={p.type}
                        data-payment={p.payment}
                        data-price={p.price}
                        data-location={p.location}
                    >
                        <img src={p.image} alt={p.title} />
                        <div className="property-info">
                            <h3>{p.title}</h3>
                            <p>{p.details}</p>
                            <p>{p.address}</p>
                            <p className="price">{p.amount}</p>
                            <div className="btn-group">
                                <a href="#" className="btn btn-details">
                                    View Details
                                </a>
                                <a href="#" className="btn btn-save">
                                    Save Rental
                                </a>
                                <a href="#" className="btn btn-rent">
                                    Book Inspection
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </section>

            {/* Custom Footer for Rent Page ONLY */}
            <footer className="site-footer">
                <div className="footer-content">
                    <div className="footer-section">
                        <a href="/"><h3>Enuluxe.ng</h3></a>
                        <p>
                            Enuluxe.ng is now available on iOS, Android and Chrome. Use
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
                            <li><a href="#">Rental Guide</a></li>
                            <li><a href="#">Payment Options</a></li>
                            <li><a href="#">Contact Realtors</a></li>
                            <li><a href="#">Rental App</a></li>
                        </ul>
                    </div>
                    <div className="footer-section">
                        <h4>Explore</h4>
                        <ul>
                            <li><a href="#">Discover Rentals</a></li>
                            <li><a href="#">New Apartments</a></li>
                            <li><a href="#">Popular Houses</a></li>
                            <li><a href="#">Applications</a></li>
                        </ul>
                    </div>
                    <div className="footer-section">
                        <h4>About Us</h4>
                        <ul>
                            <li><a href="/Contact">Contact Us</a></li>
                            <li><a href="/register">Register</a></li>
                            <li><a href="/login">Login</a></li>
                        </ul>
                    </div>
                    <div className="footer-section">
                        <h4>Follow Us</h4>
                        <div className="social-links">
                            <a href="https://www.instagram.com"><i className="fab fa-instagram"></i></a>
                            <a href="https://www.facebook.com"><i className="fab fa-facebook-f"></i></a>
                            <a href="https://www.twitter.com"><i className="fab fa-twitter"></i></a>
                            <a href="https://www.linkedin.com"><i className="fab fa-linkedin-in"></i></a>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom">
                    <p>&copy; 2025 PropertyLink.ng. All rights reserved.</p>
                </div>
            </footer>
        </div>
    );
};

export default RentPage;
