import React from "react";
import "./Sidebar.css";
import SidebarOption from "./SidebarOption";

import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import LibraryMusicIcon from "@material-ui/icons/LibraryMusic";

function Sidebar() {
  return (
    <div className="sidebar">
      <img
        className="sidebar__logo"
        src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
        alt="Spotify Logo"
      />
      <SidebarOption title="Home" Icon={HomeIcon}></SidebarOption>
      <SidebarOption title="Search" Icon={SearchIcon}></SidebarOption>
      <SidebarOption
        title="Your Library"
        Icon={LibraryMusicIcon}
      ></SidebarOption>

      <br />
      <strong className="sidebar__title">PLAYLISTS</strong>
      <hr />

      <SidebarOption title="Hip Hop"></SidebarOption>
      <SidebarOption title="Rock"></SidebarOption>
      <SidebarOption title="R&B"></SidebarOption>
    </div>
  );
}

export default Sidebar;
