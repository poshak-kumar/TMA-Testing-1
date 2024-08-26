import React from "react";
import { Link, useLocation } from "react-router-dom";

const NavigationBar = () => {
  const location = useLocation();

  return (
    <div style={styles.navBar}>
      {/** */}
      {/**This is Previous Nav, with no Home Refresh */
      /* <div style={styles.navBar}>
      <NavLink to="/home" style={styles.link} activeStyle={styles.activeLink}>
        Home
      </NavLink>
      <NavLink to="/earn" style={styles.link} activeStyle={styles.activeLink}>
        Earn
      </NavLink>
      <NavLink
        to="/friends"
        style={styles.link}
        activeStyle={styles.activeLink}
      >
        Friends
      </NavLink>
      <NavLink to="/wallet" style={styles.link} activeStyle={styles.activeLink}>
        Wallet
      </NavLink>
    </div> */}

      <Link
        to="/"
        style={location.pathname === "/" ? styles.activeLink : styles.link}
      >
        Home
      </Link>
      <Link
        to="/earn"
        style={location.pathname === "/earn" ? styles.activeLink : styles.link}
      >
        Earn
      </Link>
      <Link
        to="/friends"
        style={
          location.pathname === "/friends" ? styles.activeLink : styles.link
        }
      >
        Friends
      </Link>
      <Link
        to="/wallet"
        style={
          location.pathname === "/wallet" ? styles.activeLink : styles.link
        }
      >
        Wallet
      </Link>
    </div>
  );
};

const styles = {
  navBar: {
    display: "flex",
    justifyContent: "space-around",
    position: "fixed",
    bottom: 0,
    width: "100%",
    backgroundColor: "#fff",
    borderTop: "1px solid #ddd",
    padding: "10px 0",
  },
  link: {
    textDecoration: "none",
    color: "#555",
    fontSize: "16px",
  },
  activeLink: {
    textDecoration: "none",
    color: "#007bff",
    fontSize: "16px",
  },
};

export default NavigationBar;
