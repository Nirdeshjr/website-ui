"use client";
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import Button from './Button';
import Image from 'next/image';
import { Text } from './Text';

const ImageFilter = () => {
  const [filterableData, setFilterableData] = useState([]);
  const [activeFilter, setActiveFilter] = useState('all');

  const buttonCaptions = ['all', 'app', 'website', 'software'];

  const handleFilterClick = (filter) => {
    setActiveFilter(filter);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:8000/api/product/');
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
            className={`focus:outline-none border-2 border-purple-600 hover:bg-purple-700 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 capitalize ${
              activeFilter === filter ? 'bg-purple-600' : ''
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
            className={`w-full cursor-pointer transition-all duration-200 rounded-lg shadow bg-gray-800 border border-gray-600 ${
              activeFilter === 'all' || activeFilter === item.name ? 'block' : 'hidden'
            }`}
          >
            <Image className="rounded-t-lg w-full h-[200px] overflow-hidden" src={item.gallery_image || "/images/about/team.gif"} alt={item.name} width={300} height={500}/>
            <div className="p-5">
              <Text as="h5" className="mb-2 text-2xl font-bold tracking-tight text-white">
                {item.title}
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

