import React from "react";
import { Link } from 'react-router-dom';


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
            <div
                style={{
                    maxWidth: "900px",
                    margin: "40px auto",
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

const inputStyle = {
    padding: "12px",
    borderRadius: "8px",
    border: "1px solid #ccc",
    fontSize: "14px",
};
