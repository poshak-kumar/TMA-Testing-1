import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Loading = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Simulate data fetching or initialization
    setTimeout(() => {
      navigate("/home"); // Navigate to Home page after loading
    }, 2000); // Adjust the time as needed
  }, [navigate]);

  return (
    <div style={styles.container}>
      <img src="/path-to-your-logo.png" alt="Loading..." style={styles.logo} />
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
  },
  logo: {
    width: "100px",
    height: "100px",
  },
};

export default Loading;
