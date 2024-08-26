import React from "react";
import { NavLink } from "react-router-dom";

const NavigationBar = () => {
  return (
    <div style={styles.navBar}>
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
    backgroundColor: "#f8f8f8",
    borderTop: "1px solid #ddd",
    padding: "10px 0",
  },
  link: {
    textDecoration: "none",
    color: "#555",
    fontSize: "16px",
  },
  activeLink: {
    color: "#007bff",
  },
};

export default NavigationBar;
