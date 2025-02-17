import React from "react";
import "./Navbar.css";
import logo from "../../assets/logo.png";
import search from "../../assets/search_icon.svg";
import bell from "../../assets/bell_icon.svg";
import profile_image from "../../assets/profile_img.png";
import caret_icon from "../../assets/caret_icon.svg";

export default function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar-left">
        <img src={logo} alt="" />
        <ul>
          <li>Home</li>
          <li>TV Shows</li>
          <li>Movies</li>
          <li>New & Popular</li>
          <li>My List</li>
          <li>Browse by Languages</li>
        </ul>
      </div>
      <div className="navbar-right">
        <img src={search} alt="" className="icons" />
        <p>Children</p>
        <img src={bell} alt="" className="icons" />
        <div className="navbar-profile">
          <img src={profile_image} alt="" className="profile" />
          <img src={caret_icon} alt="" />
        </div>
      </div>
    </div>
  );
}
