import React from "react";
import "./Topbar.css";
import { IoMdNotificationsOutline } from "react-icons/io";
import { GrLanguage } from "react-icons/gr";
import { FcSettings } from "react-icons/fc";
import MyImage from "./my.JPG";
import Logo from "./logo.JPG";

export default function Topbar() {
  const logout = () => {
    localStorage.removeItem("login");
    localStorage.removeItem("user");
    window.location.href = "/login";
  };

  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topleft">
          <span className="">
            <a href="/" class="text-reset">
              <img src={Logo} className="logo image-fluid" alt="NOT FOUND" />

              <span className="logo_text">
                {" "}
                Special Differently Abled Minds
              </span>
            </a>
          </span>
        </div>

        <div className="topright">
          <div className="topbarIconContainer">
            <IoMdNotificationsOutline size={25} />
            <span className="topiconbag">2</span>
          </div>

          <div className="topbarIconContainer">
            <GrLanguage size={20} />
            <span className="topiconbag">6</span>
          </div>

          <img
            src={JSON.parse(localStorage.getItem("user"))?.profile_pic}
            alt="NOT FOUND"
            className="topAvatar"
          />
          <div className="topbarIconContainer ml-4">
            <small onClick={logout}>Signout</small>
          </div>
        </div>
      </div>
    </div>
  );
}
