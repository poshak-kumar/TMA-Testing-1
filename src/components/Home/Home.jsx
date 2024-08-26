import React, { useEffect, useState } from "react";

const Home = () => {
  const [user, setUser] = useState({});

  useEffect(() => {
    const tg = window.Telegram.WebApp;
    setUser(tg.initDataUnsafe?.user || {});
  }, []);

  return (
    <div>
      <h2>Welcome, {user.username || "Telegram User"}</h2>
    </div>
  );
};

export default Home;
