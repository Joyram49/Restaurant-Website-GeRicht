import React, { useRef, useState } from "react";
import "./introvid.css";
import { meal } from "../../constants";

import { BsFillPlayFill, BsPauseFill } from "react-icons/bs";

const IntroVid = () => {
  const videoRef = useRef();
  const [playVideo, setPlayVideo] = useState(false);

  const handleClick = () => {
    setPlayVideo((prevPlayVideo) => !prevPlayVideo);

    if (playVideo) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
  };

  return (
    <div className='introVid'>
      <video
        src={meal}
        ref={videoRef}
        type='video/mp4'
        loop
        controls={false}
        muted
      ></video>
      <div className='video_overlay'>
        <div className='video_overlay-circle' onClick={handleClick}>
          {playVideo ? (
            <BsPauseFill className='icon_style' />
          ) : (
            <BsFillPlayFill className='icon_style' />
          )}
        </div>
      </div>
    </div>
  );
};

export default IntroVid;
