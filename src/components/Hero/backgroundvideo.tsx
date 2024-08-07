import React from 'react';

const BackgroundVideo = ({ video }) => {
  return (
    <div className="relative w-full h-auto max-w-[900px]">
      <video
        className="w-full h-auto"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src={video} type="video/mp4" />
      </video>
    </div>
  );
};

export default BackgroundVideo;
