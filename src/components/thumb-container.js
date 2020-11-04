import React from "react";
import VideoThumbnail from "./video-thumbnail.js";

import video1 from "../images/video1.jpg";
import video2 from "../images/video2.jpg";
import video3 from "../images/video3.jpg";
import video4 from "../images/video4.jpg";
import video5 from "../images/video5.jpg";
import video6 from "../images/video6.jpg";
import video7 from "../images/video7.jpg";
import video8 from "../images/video8.jpg";

export function ThumbContainer() {
  return <div className="thumb-container">
    <VideoThumbnail image={video1}/>
    <VideoThumbnail image={video2}/>
    <VideoThumbnail image={video3}/>
    <VideoThumbnail image={video4}/>
    <VideoThumbnail image={video5}/>
    <VideoThumbnail image={video6}/>
    <VideoThumbnail image={video7}/>
    <VideoThumbnail image={video8}/>
  </div>;
}
