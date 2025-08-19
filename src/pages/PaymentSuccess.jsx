import React from "react";

const PaymentSuccess = () => {
    const styles = {
        container: {
            height: "100vh",
            width: "100%",
            backgroundImage: "url('/img.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "relative",
            color: "#fff",
            textAlign: "center",
            fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        },
        overlay: {
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.7)",
            zIndex: 1,
        },
        content: {
            position: "relative",
            zIndex: 2,
            maxWidth: "700px",
            padding: "2rem",
            background: "rgba(255, 255, 255, 0.05)",
            borderRadius: "12px",
            boxShadow: "0 8px 25px rgba(0,0,0,0.4)",
            backdropFilter: "blur(6px)",
        },
        title: {
            fontSize: "2.5rem",
            marginBottom: "1rem",
            fontWeight: "bold",
            color: "#385c19",
        },
        message: {
            fontSize: "1.1rem",
            lineHeight: "1.8",
            color: "#f1f1f1",
            marginBottom: "2rem",
        },
        button: {
            padding: "12px 30px",
            backgroundColor: "#00005c",
            border: "none",
            borderRadius: "6px",
            fontSize: "1rem",
            fontWeight: "500",
            color: "#fff",
            textDecoration: "none",
            cursor: "pointer",
            transition: "background 0.3s ease",
        },
        buttonHover: {
            backgroundColor: "#1a1a80",
        },
    };

    return (
        <div style={styles.container}>
            <div style={styles.overlay}></div>
            <div style={styles.content}>
                <h1 style={styles.title}>Payment Successful</h1>
                <p style={styles.message}>
                    Thank you for paying the inspection fee. <br />
                    You will receive an email containing the list of available realtors,
                     a form to book your time slot, and further details regarding your property inspection.
                </p>
                <a href="/" style={styles.button}>
                    Return to Home
                </a>
            </div>
        </div>
    );
};

export default PaymentSuccess;
