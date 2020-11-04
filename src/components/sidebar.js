import React from "react";
import Icon from "./icon.js";

import fireIcon from "../icons/iconfinder_Icon_Element_Fire_03_513726.png";
import homeIcon from "../icons/iconfinder_ic_home_48px_3669170.png";
import playlist from "../icons/iconfinder_ic_playlist_play_48px_3669290.png";
import subscriptionsIcon from "../icons/iconfinder_ic_subscriptions_48px_3669213.png";
import logo from "../icons/iconfinder_youtube_294703.png";

const menuItems = [
  {
    icon: homeIcon,
    title: "Principal"
  },
  {
    icon: fireIcon,
    title: "Tendencias"
  },
  {
    icon: subscriptionsIcon,
    title: "Suscripciones"
  },
  {
    icon: playlist,
    title: "Biblioteca"
  }
];

export function Sidebar(props) {
  return <div className="sidebar">
    <Icon title={menuItems[0].title} iconUrl={homeIcon}/>
    <Icon title={menuItems[1].title} iconUrl={fireIcon}/>
    <Icon title={menuItems[2].title} iconUrl={subscriptionsIcon}/>
    <Icon title={menuItems[3].title} iconUrl={playlist}/>
    </div>;
}
