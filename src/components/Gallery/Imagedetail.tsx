"use client";
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { Text } from '@/components/Gallery/Texts';

const ImageFilter = () => {
  const [galleryData, setGalleryData] = useState([]);
  const [fullscreenImage, setFullscreenImage] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/gallery/`);
        const data = response.data;
        setGalleryData(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const handleImageClick = (src) => {
    setFullscreenImage(src);
  };

  const closeFullscreenImage = () => {
    setFullscreenImage(null);
  };

  return (
    <section className="w-full flex flex-col gap-12 py-16 lg:px-16 md:px-10 px-5 bg-gray-100 dark:bg-gray-900">
      <h1 className="text-center text-4xl font-bold mt-8 text-gray-900 dark:text-white">Our Gallery</h1>
      <main className="w-full grid lg:grid-cols-3 md:grid-cols-2 gap-x-5 gap-y-8 md:mt-8">
        {galleryData.map((item, index) => (
          <div
            key={index}
            className="w-full cursor-pointer transition-all duration-200 rounded-lg shadow-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:shadow-2xl"
            onClick={() => handleImageClick(item.image || "/images/about/team.gif")}
          >
            <div className="relative w-full h-60 overflow-hidden rounded-t-lg">
              <Image
                className="rounded-t-lg transform transition-transform duration-300 hover:scale-105"
                src={item.image || "/images/about/team.gif"}
                alt={item.name}
                layout="fill"
                objectFit="cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-25 rounded-t-lg"></div>
            </div>
            <div className="p-5">
              <Text as="h5" className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {item.name}
              </Text>
              <Text as="p" className="mb-3 font-normal text-gray-600 dark:text-gray-400">
                {item.text}
              </Text>
            </div>
          </div>
        ))}
      </main>
      {fullscreenImage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75" onClick={closeFullscreenImage}>
          <Image
            src={fullscreenImage}
            alt="Fullscreen"    
            layout="responsive"         
            width={500}                  
            height={300}                 
            className="object-cover" 
          />
        </div>
      )}
    </section>
  );
};

export default ImageFilter;



