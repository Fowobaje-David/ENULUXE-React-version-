import React from "react";
import { Link } from "react-router-dom"; 

export default function SellSuccess() {
    return (
        <div
            style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
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
                    backgroundColor: "white",
                    padding: "30px",
                    borderRadius: "12px",
                    boxShadow: "0px 4px 15px rgba(0,0,0,0.2)",
                    maxWidth: "400px",
                    textAlign: "center",
                }}
            >

                <div style={{ fontSize: "50px", color: "green" }}>✔️</div>


                <h1 style={{ fontSize: "22px", fontWeight: "bold", margin: "20px 0 10px" }}>
                    Property Listed Successfully
                </h1>


                <p style={{ color: "#555", marginBottom: "20px" }}>
                    Your property is being reviewed! You can view listings or return to your Home page.
                </p>

                /* Buttons */
                <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                    <Link
                        to="/buy"
                        style={{
                            padding: "12px",
                            backgroundColor: "blue",
                            color: "white",
                            border: "none",
                            borderRadius: "8px",
                            cursor: "pointer",
                            textAlign: "center",
                            textDecoration: "none",
                        }}
                    >
                        View My Listing
                    </Link>

                    <Link
                        to="/"
                        style={{
                            padding: "12px",
                            backgroundColor: "white",
                            color: "black",
                            border: "1px solid #ccc",
                            borderRadius: "8px",
                            cursor: "pointer",
                            textAlign: "center",
                            textDecoration: "none",
                        }}
                    >
                        Back to Home
                    </Link>
                </div>
            </div>
        </div>
    );
}
