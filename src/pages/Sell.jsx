import React from "react";
import { Link } from "react-router-dom";

export default function Sell() {
    return (
        <div
            style={{
                fontFamily: "Arial, sans-serif",
                backgroundImage:
                    "linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('real-estate.jpg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundAttachment: "fixed",
                margin: 0,
                padding: "20px",
                minHeight: "100vh",
            }}
        >
            {/* HEADER SECTION */}
            <header
                style={{
                    position: "fixed",
                    top: 0,
                    left: 0,
                    width: "100%",
                    padding: "1rem 3rem",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    background: "rgba(0, 0, 0, 0.35)",
                    color: "#fff",
                    zIndex: 1000,
                    flexWrap: "wrap",
                }}
            >
                {/* Logo */}
                <div style={{ fontSize: "1.5rem", fontWeight: "bold", color: "#fff" }}>
                    Enuluxe<span style={{ color: "#ffd700" }}>.ng</span>
                </div>

                {/* Navigation */}
                <nav style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
                    <Link to="/buy" style={navLink}>Buy</Link>
                    <Link to="/sell" style={navLink}>Sell</Link>
                    <Link to="/rent" style={navLink}>Rent</Link>
                    <Link to="/aboutus" style={navLink}>About Us</Link>
                </nav>

                {/* Auth buttons */}
                <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
                    <Link to="/register" style={registerBtn}>Register</Link>
                    <Link to="/login" style={loginBtn}>Log in</Link>
                </div>
            </header>

            {/* CONTENT */}
            <div
                style={{
                    maxWidth: "900px",
                    margin: "120px auto 40px", // pushed down so header doesn’t overlap
                    padding: "30px",
                    background: "white",
                    borderRadius: "12px",
                    boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
                }}
            >
                <h2 style={{ textAlign: "center", color: "#004d66" }}>Why Sell With Us?</h2>
                <p style={{ textAlign: "center", fontSize: "16px", color: "#555" }}>
                    We make selling your house stress-free by connecting you with verified buyers,
                    offering expert pricing guidance, and handling all the paperwork with transparency.
                </p>

                <h3 style={{ marginTop: "30px", color: "#004d66" }}>Property Details</h3>
                <form style={{ display: "grid", gap: "20px", marginTop: "20px" }}>
                    <input type="text" placeholder="Full Name" style={inputStyle} />
                    <input type="email" placeholder="Email Address" style={inputStyle} />
                    <input type="tel" placeholder="Phone Number" style={inputStyle} />
                    <input type="text" placeholder="Property Location" style={inputStyle} />
                    <input type="number" placeholder="Asking Price (₦)" style={inputStyle} />

                    <select style={inputStyle}>
                        <option>Property Type</option>
                        <option>House</option>
                        <option>Apartment</option>
                        <option>Land</option>
                        <option>Commercial Property</option>
                    </select>

                    <textarea placeholder="Property Description" rows="4" style={inputStyle}></textarea>

                    <label style={{ fontSize: "14px", color: "#333" }}>Upload Property Images:</label>
                    <input type="file" multiple style={{ padding: "8px" }} />

                    <button
                        type="submit"
                        style={{
                            background: "#004d66",
                            color: "white",
                            padding: "14px",
                            fontSize: "16px",
                            border: "none",
                            borderRadius: "8px",
                            cursor: "pointer",
                        }}
                    >
                        Submit Property
                    </button>
                </form>
            </div>
        </div>
    );
}

// Styles
const inputStyle = {
    padding: "12px",
    borderRadius: "8px",
    border: "1px solid #ccc",
    fontSize: "14px",
};

const navLink = {
    color: "#fff",
    textDecoration: "none",
    fontWeight: 500,
};

const registerBtn = {
    background: "#fff",
    color: "#0b0b45",
    padding: "0.4rem 0.9rem",
    borderRadius: "6px",
    textDecoration: "none",
    fontSize: "0.9rem",
};

const loginBtn = {
    background: "#0b0b45",
    color: "#fff",
    padding: "0.4rem 0.9rem",
    borderRadius: "6px",
    border: "1px solid #fff",
    textDecoration: "none",
    fontSize: "0.9rem",
};
