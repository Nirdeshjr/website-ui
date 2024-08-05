"use client";
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import Button from './Button';
import { Text } from './Text';
import Image from 'next/image';

const ImageFilter = () => {
  const [filterableData, setFilterableData] = useState([]);
  const [displayedData, setDisplayedData] = useState([]);
  const [activeFilter, setActiveFilter] = useState('all');

  const buttonCaptions = ['all', 'Mobile App Development', 'Web Development', 'Software Development'];

  const handleFilterClick = (filter) => {
    setActiveFilter(filter);
    if (filter === 'all') {
      setDisplayedData(filterableData);
    } else {
      setDisplayedData(filterableData.filter(item => item.title === filter));
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://backend-4c5c.onrender.com/api/product/');
        const data = response.data;
        setFilterableData(data);
        setDisplayedData(data.slice(0, 3)); // Display only first 3 items initially
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <section className="w-full flex flex-col gap-12 py-16 lg:px-16 md:px-10 px-5 bg-gray-100 dark:bg-gray-900">
      <h1 className="text-center text-4xl font-bold mt-8 text-gray-900 dark:text-white">Our Product</h1>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-8 w-full md:justify-center items-start">
        {buttonCaptions.map((filter) => (
          <Button
            key={filter}
            onClick={() => handleFilterClick(filter)}
            type="button"
            className={`focus:outline-none border-2 border-black hover:bg-blue-500 hover:border-blue-500 text-black hover:text-white font-medium rounded-lg text-sm px-5 py-2.5 capitalize dark:border-white dark:text-white ${activeFilter === filter ? 'bg-blue-500 text-white border-blue-500' : 'text-black'
              }`}
          >
            {filter === 'all' ? 'Show all' : filter}
          </Button>
        ))}
      </div>
      {/* filtered cards display */}
      <main className="w-full grid lg:grid-cols-4 md:grid-cols-2 gap-x-5 gap-y-8 md:mt-8">
        {displayedData.map((item, index) => (
          <div
            key={index}
            className="w-full cursor-pointer transition-transform transform hover:scale-105 rounded-lg shadow-lg border dark:border-gray-700 bg-white dark:bg-gray-800"
          >
            <div className="relative w-full h-60 overflow-hidden rounded-t-lg">
              <Image
                src={item.product_image || "/images/logo/dark-logo.png"}
                alt="Product"
                layout="fill"
                className="object-cover transition-transform duration-300 ease-in-out transform hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-25 rounded-t-lg"></div>
            </div>
            <div className="p-5">
              <Text as="h5" className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {item.name}
              </Text>
              <Text as="p" className="font-normal text-gray-600 dark:text-gray-400">
                {item.text}
              </Text>
            </div>
          </div>
        ))}
      </main>
    </section>
  );
};

export default ImageFilter;



