"use client";

import { useTheme } from "next-themes";

const NewsLatterBox = () => {
  const { theme } = useTheme();

  return (
    <div className="relative z-10 rounded-sm bg-white p-8 shadow-three dark:bg-gray-dark sm:p-11 lg:p-8 xl:p-11 h-[500px]">
      <h3 className="mb-4 text-2xl font-bold leading-tight text-black dark:text-white">
        Find Us Here
      </h3>
      <div className="aspect-w-16 aspect-h-10 h-full">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d220.80652931243424!2d85.34531027602188!3d27.689347336652272!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb198e0ffae29b%3A0x3f1ce8ab85d90461!2sSwiss%20Bakery!5e0!3m2!1sen!2snp!4v1715613001754!5m2!1sen!2snp"
          className="w-full h-full"
          style={{ border: 0 }}
          loading="lazy"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default NewsLatterBox;
