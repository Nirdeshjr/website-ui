import React from 'react';

const BackgroundVideo = ({video}) => {
  return (
    <div className="absolute inset-0 overflow-hidden z-0">
      <video
        className="w-full h-full object-cover md:w-8/12 md:h-auto"
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