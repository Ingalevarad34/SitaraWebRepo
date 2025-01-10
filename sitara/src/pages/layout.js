import { useState } from "react";
import { Outlet } from "react-router-dom";
import "./layout.css";
import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";
import {
  FaHome,         // Home icon
  FaSearch,       // Discover icon
  FaMusic,        // Albums icon
  FaUser,         // Artists icon
  FaClock,        // Recently Added icon
  FaPlay,         // Most Played icon
  FaHeart,        // Your Favorites icon
  FaPlus,         // Add Playlist icon
  FaCog,          // Setting icon
  FaSignOutAlt,   // Logout icon
} from "react-icons/fa";

function Layout() {
  const [isCollapsed, setIsCollapsed] = useState(true);

  const handleMouseEnter = () => setIsCollapsed(false);
  const handleMouseLeave = () => setIsCollapsed(true);

  return (
    <div className="layout-container">
      <Sidebar
        collapsed={isCollapsed}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        backgroundColor={"#181818"}
        className="sidebar"
      >
        <div className="sidebar-header mt-3">
          <h2 className="gradient-text"> 🎵 SITARA</h2>
        </div>
        <Menu>
          {/* Menu Section */}
          <p className="section-title">Menu</p>
          <MenuItem icon={<FaHome />} className="active-menu-item">
            Home
          </MenuItem>
          <MenuItem icon={<FaSearch />}>Discover</MenuItem>
          <MenuItem icon={<FaMusic />}>Albums</MenuItem>
          <MenuItem icon={<FaUser />}>Artists</MenuItem>

          {/* Library Section */}
          <p className="section-title">Library</p>
          <MenuItem icon={<FaClock />}>Recently Added</MenuItem>
          <MenuItem icon={<FaPlay />}>Most Played</MenuItem>

          {/* Playlist and Favorites Section */}
          <p className="section-title">Playlist and favorite</p>
          <MenuItem icon={<FaHeart />}>Your Favorites</MenuItem>
          <MenuItem icon={<FaPlus />} className="blue-item">
            Add Playlist
          </MenuItem>

          {/* General Section */}
          <p className="section-title">General</p>
          <MenuItem icon={<FaCog />}>Setting</MenuItem>
          <MenuItem icon={<FaSignOutAlt />} className="logout-item">
            Logout
          </MenuItem>
        </Menu>
      </Sidebar>
      <div className="content">
        <Outlet /> {/* Renders routed components */}
      </div>
    </div>
  );
}

export default Layout;
