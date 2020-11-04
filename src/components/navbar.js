import React from "react";
import Logo from "./logo.js";
import SearchBar from "./search-bar.js";
import Login from "./login.js";
import Icon from "./icon.js"

import videoCam from "../icons/iconfinder_ic_videocam_48px_3669181.png"
import viewModule from "../icons/iconfinder_ic_view_module_48px_3669149.png"
import bell from "../icons/iconfinder_icon-ios7-bell_211694.png"
import logo from "../icons/iconfinder_youtube_294703.png"

export default function Navbar(props) {
  return <div className="navbar">
    < Logo  logo={logo}/>
    < SearchBar />
    <Icon iconUrl={videoCam}/>
    <Icon iconUrl={viewModule}/>
    <Icon iconUrl={bell}/>
    < Login />
  </div>;
}
