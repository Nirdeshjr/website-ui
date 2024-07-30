import React from 'react';

interface BackgroundVideoProps {
  video: string;
  className?: string; // Add className prop
}

const BackgroundVideo = ({ video, className }: BackgroundVideoProps) => {
  return (
    <div className={`absolute inset-0 overflow-hidden z-0 ${className}`}>
      <video
        className="w-full h-full object-cover"
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
