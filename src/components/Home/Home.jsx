import React, { useEffect, useState } from "react";
import Profile from "../UserProfile/Profile";
import ProfileButton from "../Buttons/ProfileButton/ProfileButton";

const Home = () => {
  const [user, setUser] = useState({});

  useEffect(() => {
    const tg = window.Telegram.WebApp;
    setUser(tg.initDataUnsafe?.user || {});
  }, []);

  /** Profile Pop-Up Button Fuctionality */
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  const openProfile = () => {
    setIsProfileOpen(true);
  };

  const closeProfile = () => {
    setIsProfileOpen(false);
  };

  return (
    <div style={styles.container}>
      <h2>Welcome, {user.username || "Telegram User"}</h2>

      <button onClick={openProfile} style={styles.button}>
        Open Profile
      </button>
      <ProfileButton isOpen={isProfileOpen} onClose={closeProfile}>
        <Profile />
      </ProfileButton>
    </div>
  );
};

const styles = {
  container: {
    padding: "20px",
    textAlign: "center",
    fontFamily: "Arial, sans-serif",
  },
  button: {
    padding: "10px 20px",
    fontSize: "16px",
    backgroundColor: "#007bff",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
};

export default Home;
