import React, { useState } from "react";
import { Link } from "react-router-dom";

const SidebarMenu = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const openSidebar = () => {
    setIsSidebarOpen(true);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  return (
    <>
      <header className="app-header">
        <button className="menu-button" onClick={openSidebar}>
          ☰
        </button>
      </header>

      <div className={`sidebar ${isSidebarOpen ? "open" : ""}`}>
        <button className="close-button" onClick={closeSidebar}>
          ✖
        </button>
        <nav className="sidebar-nav">
          <ul>
            <li>
              <Link to="/home" onClick={closeSidebar}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/earn" onClick={closeSidebar}>
                Earn
              </Link>
            </li>
            <li>
              <Link to="/friends" onClick={closeSidebar}>
                Friends
              </Link>
            </li>
            <li>
              <Link to="/wallet" onClick={closeSidebar}>
                Wallet
              </Link>
            </li>
            <li>
              <Link to="/ranking" onClick={closeSidebar}>
                Ranking
              </Link>
            </li>
          </ul>
        </nav>
      </div>

      <style jsx>{`
        .sidebar {
          position: fixed;
          top: 0;
          left: -250px;
          width: 250px;
          height: 100%;
          background-color: #333;
          color: white;
          transition: left 0.3s ease;
          z-index: 1000;
        }

        .sidebar.open {
          left: 0;
        }

        .close-button {
          background: none;
          border: none;
          color: white;
          font-size: 1.5em;
          cursor: pointer;
          position: absolute;
          top: 10px;
          right: 10px;
        }

        .sidebar-nav ul {
          list-style-type: none;
          padding: 20px;
        }

        .sidebar-nav ul li {
          margin: 15px 0;
        }

        .sidebar-nav ul li a {
          color: white;
          text-decoration: none;
          font-size: 1.2em;
        }
      `}</style>
    </>
  );
};

export default SidebarMenu;
