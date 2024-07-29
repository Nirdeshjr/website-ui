"use client"
import React, { useState } from 'react';
import Image from 'next/image';

const Bod = () => {
  const [showMembers, setShowMembers] = useState(false);

  return (
    <section
      id="blog"
      className="relative bg-gradient-to-b from-gray-light to-gray-dark dark:bg-gradient-to-b from-bg-color-light to-bg-color-dark py-16 md:py-20 lg:py-28 rounded-t-3xl mt-8 "
    >
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src="/images/video/second.mp4"
        autoPlay
        loop
        muted
      ></video>

      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div> {/* Overlay to darken the video */}

      <div className="relative container flex flex-col justify-center items-center">
        <div className="w-full">
          <div className="flex justify-center mb-8">
            <div className="w-32 h-32 bg-gray-200 rounded-full overflow-hidden flex items-center justify-center">
              <Image
                src="/images/logo/logo.png"
                alt="CEO and Co-founder"
                layout="responsive"
                width={500}
                height={300}
                className="object-cover"
              />
            </div>
          </div>
          <div className="text-center">
            <h3 className="text-xl font-semibold text-blue-600 animate-fade-in">
              CEO and Co-founder
            </h3>
            <p className="text-orange-500 animate-fade-in-delay">
              John Doe
            </p>
            <p className="text-gray-300 mt-4 animate-fade-in-delay-2">
              Bringing visionary leadership and strategic guidance to our team.
            </p>
          </div>
        </div>

        {/* Conditionally render the member cards */}
        {showMembers && (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 mt-10">
            {/* Render member cards here */}
          </div>
        )}
        {/* 
        Render the link to navigate to the blog page
        <div className="text-center mt-8">
          <Link href="/bod" passHref>
            <span
              className="text-primary font-medium underline cursor-pointer inline-block animate-pulse"
            >
              See other Board of Directors
            </span>
          </Link>
        </div> */}
      </div>
    </section>
  );
};

export default Bod;








