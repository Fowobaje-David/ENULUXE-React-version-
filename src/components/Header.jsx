// import React from 'react';
// import { Link } from 'react-router-dom';
//
// const Header = () => {
//   return (
//     <header>
//       <div className="logo">
//         <strong>Enuluxe</strong>
//         <span className="logo-extension">.ng</span>
//       </div>
//       <nav>
//         <a href="/buy">Buy</a>
//           <Link to="/Sell">Sell</Link>
//         <a href="/rent">Rent</a>
//           <Link to="/AboutUs">About Us</Link>
//       </nav>
//       <div className="auth-buttons">
//         <Link to="/register" className="register-btn">Register</Link>
//         <Link to="/login" className="login-btn">Log in</Link>
//       </div>
//     </header>
//   );
// };
//
// export default Header;
import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
    const styles = {
        header: {
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            padding: "1rem 3rem",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            background: "rgba(0, 0, 0, 0.35)",
            color: "#fff",
            zIndex: 10,
            flexWrap: "wrap", // responsiveness
        },
        logo: {
            fontSize: "1.5rem",
            fontWeight: "bold",
            color: "#fff",
        },
        logoExt: {
            color: "#ffd700",
        },
        nav: {
            display: "flex",
            gap: "1rem",
            flexWrap: "wrap",
        },
        navLink: {
            color: "#fff",
            textDecoration: "none",
            fontWeight: 500,
            transition: "color 0.3s",
        },
        navLinkHover: {
            color: "#ffd700",
        },
        auth: {
            display: "flex",
            gap: "1rem",
            flexWrap: "wrap",
        },
        registerBtn: {
            background: "#fff",
            color: "#0b0b45",
            padding: "0.4rem 0.9rem",
            borderRadius: "6px",
            textDecoration: "none",
            fontSize: "0.9rem",
        },
        loginBtn: {
            background: "#0b0b45",
            color: "#fff",
            padding: "0.4rem 0.9rem",
            borderRadius: "6px",
            border: "1px solid #fff",
            textDecoration: "none",
            fontSize: "0.9rem",
        },
    };

    return (
        <header style={styles.header}>
            {/* Logo */}
            <div style={styles.logo}>
                Enuluxe<span style={styles.logoExt}>.ng</span>
            </div>

            {/* Nav Links */}
            <nav style={styles.nav}>
                <Link to="/buy" style={styles.navLink}>
                    Buy
                </Link>
                <Link to="/sell" style={styles.navLink}>
                    Sell
                </Link>
                <Link to="/rent" style={styles.navLink}>
                    Rent
                </Link>
                <Link to="/aboutus" style={styles.navLink}>
                    About Us
                </Link>
            </nav>

            {/* Auth Buttons */}
            <div style={styles.auth}>
                <Link to="/register" style={styles.registerBtn}>
                    Register
                </Link>
                <Link to="/login" style={styles.loginBtn}>
                    Log in
                </Link>
            </div>
        </header>
    );
};

export default Header;
