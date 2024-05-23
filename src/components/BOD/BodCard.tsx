"use client";
import React from 'react';
import Image from 'next/image';
import { Members } from '@/types/members';
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa6";
import { useRouter } from 'next/navigation';

const BodCard = ({ member }: { member: Members }) => {
  const { name, detail, position, image } = member;
  const router = useRouter();
  const handleClick = (redirect: string) =>{
    router.push(redirect);
  }

  return (
    <div className="rounded-lg overflow-hidden shadow-lg flex flex-col cursor-pointer border border-gray-200 hover:border-indigo-500 transition duration-300 mr-5">
      <div className="relative w-full h-48 md:h-64">
        <Image
          className="object-cover w-full h-full"
          src={image}
          alt={name}
          layout="fill"
        />
      </div>
      <div className="px-6 py-4 mb-auto">
        <div className="font-medium text-lg mb-2 text-amber-600">
          <a
            onClick={() => handleClick('/Members')}
            className="hover:text-indigo-600 transition duration-500 ease-in-out hover:cursor-pointer"
          >
            {name}
          </a>
        </div>
        <h3 className="text-sm md:text-base">{position}</h3>
        <p className="text-gray-500 text-xs md:text-sm">
          {detail}
        </p>
      </div>
      <div className="px-8 py-3 flex flex-row items-center justify-center bg-gray-100">
        <span className="py-1 text-xl mr-3 md:mr-5 font-regular text-gray-900">
          <FaFacebookF />
        </span>
        <span className="py-1 text-xl mr-3 md:mr-5 font-regular text-gray-900">
          <FaInstagram />
        </span>
        <span className="py-1 text-xl font-regular text-gray-900">
          <FaLinkedinIn />
        </span>
      </div>
    </div>
  );
};

export default BodCard;


