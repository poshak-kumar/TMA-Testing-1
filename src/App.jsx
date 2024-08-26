import React from "react";
import { Outlet } from "react-router-dom";
import NavigationBar from "./components/NavigationBar/NavigationBar.jsx";
import SidebarMenu from "./components/MenuNavigation/Menu.jsx";

const App = () => {
  return (
    <div>
      <SidebarMenu />
      <Outlet />
      <NavigationBar />
    </div>
  );
};

export default App;
