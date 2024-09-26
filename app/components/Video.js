import React, { useRef, useEffect } from "react";
import "../styles/video.css";

const Video = () => {
  const videoRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const playVideo = async () => {
      if (videoRef.current) {
        try {
          await videoRef.current.play();
        } catch (err) {
          console.error("Error attempting to play video: ", err);
        }
      }
    };

    playVideo();
  }, []);

  return (
    <div className="video-container">
      <div className="mask-reference"></div>
      <video autoPlay loop muted playsInline className="video" ref={videoRef}>
        <source src="/img/video1.mp4" type="video/mp4" />
        {/* Your browser does not support the video tag */}
      </video>
    </div>
  );
};

export default Video;
