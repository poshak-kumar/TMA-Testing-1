import React from "react";

const Friends = () => {
  return (
    <div style={styles.container}>
      <h2>Your Friends</h2>
      <ul style={styles.friendList}>
        <li>Friend 1</li>
        <li>Friend 2</li>
        <li>Friend 3</li>
        {/* Add more friends */}
      </ul>
      <button style={styles.inviteButton}>Invite Friends</button>
    </div>
  );
};

const styles = {
  container: {
    padding: "20px",
  },
  friendList: {
    listStyleType: "none",
    paddingLeft: "0",
  },
  inviteButton: {
    marginTop: "20px",
    padding: "10px 20px",
    fontSize: "16px",
    backgroundColor: "#28a745",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
};

export default Friends;
