import React from "react";

const Menu = () => {
  return (
    <div style={styles.container}>
      <h2>Menu</h2>
      <ul style={styles.menuList}>
        <li>Rankings</li>
        <li>Docs</li>
        <li>Support</li>
        <li>Social Media</li>
      </ul>
    </div>
  );
};

const styles = {
  container: {
    padding: "20px",
  },
  menuList: {
    listStyleType: "none",
    paddingLeft: "0",
  },
};

export default Menu;
