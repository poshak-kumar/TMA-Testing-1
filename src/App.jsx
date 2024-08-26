import React from "react";
import { Outlet } from "react-router-dom";
import NavigationBar from "./components/NavigationBar/NavigationBar.jsx";

const App = () => {
  return (
    <div>
      <Outlet />
      <NavigationBar />
    </div>
  );
};

export default App;
