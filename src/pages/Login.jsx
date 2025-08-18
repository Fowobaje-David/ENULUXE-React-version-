
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const CLIENT_ID =
    "746210027077-qj0dikikmqi7cru23fv9v7h42fn5u9k4.apps.googleusercontent.com";

const Login = () => {
    const [formData, setFormData] = useState({
        username: "",
        password: "",
    });

    useEffect(() => {
        // Load Google script dynamically
        const scriptId = "google-client-script";
        if (!document.getElementById(scriptId)) {
            const script = document.createElement("script");
            script.src = "https://accounts.google.com/gsi/client";
            script.async = true;
            script.defer = true;
            script.id = scriptId;
            document.body.appendChild(script);
        }

        // Initialize Google Sign-In
        window.onload = () => {
            if (window.google) {
                window.google.accounts.id.initialize({
                    client_id: CLIENT_ID,
                    callback: () => {
                        // redirect on successful sign in
                        window.location.href = "/";
                    },
                    ux_mode: "popup",
                });

                window.google.accounts.id.renderButton(
                    document.getElementById("g_id_signin"),
                    {
                        theme: "outline",
                        size: "large",
                        text: "signin_with",
                        shape: "pill",
                        width: "100%",
                    }
                );
            }
        };
    }, []);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!formData.username || !formData.password) {
            alert("Please fill in all fields.");
            return;
        }

        console.log("Login data:", formData);
        alert("Login successful! Welcome back to Enuluxe.ng");

        setFormData({
            username: "",
            password: "",
        });
    };

    // Inline styles
    const styles = {
        body: {
            margin: 0,
            fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
            background: "url('/img.png') no-repeat center center / cover",
            height: "100vh",
        },
        overlay: {
            backgroundColor: "rgba(0,0,0,0.7)",
            height: "100vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
        },
        container: {
            background: "rgba(244,241,241,0.37)",
            padding: "40px 30px",
            borderRadius: "10px",
            boxShadow: "0 5px 20px rgba(0,0,0,0.3)",
            width: "100%",
            maxWidth: "400px",
            textAlign: "center",
        },
        h2: { marginBottom: "25px", fontWeight: "normal" },
        divider: { margin: "20px 0", fontSize: "14px", color: "#666" },
        input: {
            width: "100%",
            padding: "12px",
            marginBottom: "15px",
            border: "1px solid #ccc",
            borderRadius: "6px",
            fontSize: "14px",
        },
        forgot: {
            display: "block",
            textAlign: "right",
            fontSize: "13px",
            color: "#c0392b",
            textDecoration: "none",
            marginBottom: "20px",
        },
        button: {
            width: "100%",
            padding: "12px",
            backgroundColor: "#00005c",
            color: "white",
            border: "none",
            borderRadius: "6px",
            fontSize: "16px",
            cursor: "pointer",
        },
        signup: { marginTop: "20px", fontSize: "14px" },
        signupLink: { color: "#00005c", textDecoration: "none" },
    };

    return (
        <div style={styles.body}>
            <div style={styles.overlay}>
                <div style={styles.container}>
                    <h2 style={styles.h2}>Welcome back</h2>

                    {/* Google Sign-In */}
                    <div id="g_id_signin" style={{ marginBottom: "20px" }}></div>

                    <div style={styles.divider}>or</div>

                    <form onSubmit={handleSubmit}>
                        <input
                            type="text"
                            placeholder="Username or Email"
                            name="username"
                            value={formData.username}
                            onChange={handleInputChange}
                            required
                            style={styles.input}
                        />
                        <input
                            type="password"
                            placeholder="Password"
                            name="password"
                            value={formData.password}
                            onChange={handleInputChange}
                            required
                            style={styles.input}
                        />

                        <a href="#" style={styles.forgot}>
                            Forgot password?
                        </a>

                        <button
                            type="submit"
                            style={styles.button}
                            onMouseOver={(e) =>
                                (e.target.style.backgroundColor = "#000042")
                            }
                            onMouseOut={(e) =>
                                (e.target.style.backgroundColor = "#00005c")
                            }
                        >
                            Log in
                        </button>
                    </form>

                    <p style={styles.signup}>
                        Don't have an account?{" "}
                        <Link to="/register" style={styles.signupLink}>
                            Sign up
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Login;
