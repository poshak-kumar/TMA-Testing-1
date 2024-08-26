import React, { useEffect, useState } from "react";

const Profile = () => {
  const [user, setUser] = useState({});

  useEffect(() => {
    const tg = window.Telegram.WebApp;
    setUser(tg.initDataUnsafe?.user || {});
  }, []);

  return (
    <div style={styles.container}>
      <h2>Profile</h2>
      <img
        src={user.photo_url || "/path-to-default-avatar.png"}
        alt="Profile"
        style={styles.avatar}
      />
      <p>Username: {user.username}</p>
      <p>
        Full Name: {user.first_name} {user.last_name}
      </p>
      <button style={styles.editButton}>Edit</button>
      <button style={styles.moreInfoButton}>More Information</button>
    </div>
  );
};

const styles = {
  container: {
    padding: "20px",
    textAlign: "center",
  },
  avatar: {
    width: "100px",
    height: "100px",
    borderRadius: "50%",
  },
  editButton: {
    marginTop: "20px",
    padding: "10px 20px",
    fontSize: "16px",
    backgroundColor: "#007bff",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
  moreInfoButton: {
    marginTop: "10px",
    padding: "10px 20px",
    fontSize: "16px",
    backgroundColor: "#6c757d",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
};

export default Profile;
