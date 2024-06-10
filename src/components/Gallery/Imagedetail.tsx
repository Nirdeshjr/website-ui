"use client";
import { useState } from "react";
import Button from "./Buttons";
import { cardData } from "@/gallerydata/data";
import { Img } from "./Imagee";
import { Title } from "./Texts";

const ImageFilter = () => {
  const [activeFilter, setActiveFilter] = useState<string>('all');

  const buttonCaptions = ['all', 'app', 'website', 'software'];

  const handleFilterClick = (filter: string) => {
    setActiveFilter(filter);
  };

  return (
    <section className="w-full flex flex-col gap-12 py-16 lg:px-16 md:px-10 px-5">
      <h1 className="text-center text-4xl font-bold mt-8 dark:text-white">Our Gallery Highlights</h1>
      <div className="flex w-full justify-center items-center gap-4 flex-wrap">
        {buttonCaptions.map((filter) => (
          <Button
            key={filter}
            onClick={() => handleFilterClick(filter)}
            type="button"
            className={`focus:outline-none border-2 border-blue-500 text-sm px-5 py-2.5 mb-2 capitalize transition-all duration-200 ${
              activeFilter === filter ? 'bg-blue-500 text-white' : 'bg-white text-orange-500 hover:bg-blue-500 hover:text-white'
            }`}
          >
            {filter === 'all' ? 'Show all' : filter}
          </Button>
        ))}
      </div>
      {/* Filtered cards display */}
      <main className="w-full grid lg:grid-cols-3 md:grid-cols-2 gap-8 mt-8">
        {cardData.map((item, index) => (
          <div
            key={index}
            className={`relative w-full cursor-pointer transition-all duration-200 rounded-lg shadow-lg overflow-hidden bg-white ${
              activeFilter === 'all' || activeFilter === item.name ? 'block' : 'hidden'
            }`}
          >
            <Img className="w-full h-[250px] overflow-hidden" image={item.src} alt={item.name} objectCover="object-cover" />
            <div className="p-5">
              <Title as="h5" className="mb-2 text-2xl font-bold text-gray-800">
                {item.title}
              </Title>
              <Title as="p" className="mb-3 text-gray-600">
                {item.text}
              </Title>
            </div>
          </div>
        ))}
      </main>
    </section>
  );
};

export default ImageFilter;

