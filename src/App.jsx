import React, { useEffect, useState } from "react";

const App = () => {
  const [username, setUsername] = useState("");
  const [greeting, setGreeting] = useState("");

  useEffect(() => {
    // Initialize the Telegram Web App
    const tg = window.Telegram.WebApp;
    tg.ready(); // Notify Telegram that the app is ready
    tg.expand(); // Expand the app to take up the full screen

    // Fetch user information
    const user = tg.initDataUnsafe?.user;
    if (user) {
      setUsername(user.username);
    }

    // Customize the main button
    tg.MainButton.text = "Send Greeting"; // Set button text
    tg.MainButton.show(); // Show the main button

    // Handle main button click
    tg.MainButton.onClick(() => {
      setGreeting(`Hello, ${username}!`);
      tg.sendData(`Greeting sent to ${username}`); // Send data back to the Telegram bot
    });

    // Clean up the event listener on unmount
    return () => {
      tg.MainButton.offClick();
    };
  }, [username]);

  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <h1>Welcome to My Telegram Mini App</h1>
      {username && <p>Logged in as: {username}</p>}
      <p>{greeting}</p>
    </div>
  );
};

export default App;
