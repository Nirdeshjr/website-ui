"use client";
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import Button from './Button';
import Image from 'next/image';
import { Text } from './Text';

const ImageFilter = () => {
  const [filterableData, setFilterableData] = useState([]);
  const [activeFilter, setActiveFilter] = useState('all');

  const buttonCaptions = ['all', 'Mobile App Development', 'Web Development', 'Software Development'];

  const handleFilterClick = (filter) => {
    setActiveFilter(filter);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://backend-4c5c.onrender.com/api/product/');
        const data = response.data;
        setFilterableData(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <section className="w-full flex flex-col gap-12 py-16 lg:px-16 md:px-10 px-5">
      <h1 className="text-center text-4xl font-bold mt-8 dark:text-white">Our Product</h1>
      <div className="flex w-full md:justify-center items-start md:gap-6 gap-3 flex-wrap">
        {buttonCaptions.map((filter) => (
          <Button
            key={filter}
            onClick={() => handleFilterClick(filter)}
            type="button"
            className={`focus:outline-none border-2 border-purple-600 hover:bg-purple-700 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 capitalize ${activeFilter === filter ? 'bg-purple-600' : ''
              }`}
          >
            {filter === 'all' ? 'Show all' : filter}
          </Button>
        ))}
      </div>
      {/* filtered cards display */}
      <main className="w-full grid lg:grid-cols-4 md:grid-cols-2 gap-x-5 gap-y-8 md:mt-8">
        {filterableData.map((item, index) => (
          <div
            key={index}
            className={`w-full cursor-pointer transition-all duration-200 rounded-lg shadow bg-gray-800 border border-gray-600 ${activeFilter === 'all' || activeFilter === item.title ? 'block' : 'hidden'
              }`}
          >
            <Image
              className="w-full h-40 object-cover mb-3 rounded-t-lg"
              src={item.product_image || "/Images/course.png"}
              alt="Bonnie image"
              width={90}
              height={70}
            />
            <div className="p-5">
              <Text as="h5" className="mb-2 text-2xl font-bold tracking-tight text-white">
                {item.name}
              </Text>
              <Text as="p" className="mb-3 font-normal text-gray-400">
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

