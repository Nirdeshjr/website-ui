"use client"

import { FaChevronCircleLeft } from "react-icons/fa";
import { FaChevronCircleRight } from "react-icons/fa";

import React from 'react';
import { useEffect } from 'react';
import Glide from '@glidejs/glide';
import SingleFeature from './SingleFeature';
import featuresData from './featuresData';
import '@glidejs/glide/dist/css/glide.core.min.css';
import '@glidejs/glide/dist/css/glide.theme.min.css';

const Cardslide = () => {
    useEffect(() => {
        const config = {
            type: 'carousel',
            startAt: 0,
            perView: 3,
            gap: 32,
            breakpoints: {
                1280: {
                    perView: 3,
                },
                1024: {
                    perView: 2,
                },
                768: {
                    perView: 1,
                }
            }
        }
        new Glide('.glide', config).mount();
    }, []);

    return (
        <div className="glide xl:w-[54rem] lg:w-[42rem] md:w-[30rem] sm:w-[18rem] px-16 py-8 bg-opacity-60 rounded-1xl">
            <div className="glide__track ml-5" data-glide-el="track">
                <ul className="glide__slides">
                    {featuresData.map((feature) => (
                        <li className="glide__slide" key={feature.id}>
                            <SingleFeature feature={feature}/>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="glide__arrows" data-glide-el="controls">
                <a className="glide__arrow glide__arrow--left left-4 md:mr-5" data-glide-dir="<">
                    <div className="h-9 w-9  rounded-xl flex justify-center items-center my-auto duration-300 ease-in-out">
                        <i className="fas fa-angle-left text-black text-2xl dark:text-white"><FaChevronCircleLeft/></i>
                    </div>
                </a>
                <a className="glide__arrow glide__arrow--right right-4 md:ml-5" data-glide-dir=">">
                    <div className="h-9 w- rounded-xl flex justify-center items-center my-auto  duration-300 ease-in-out">
                        <i className="fas fa-angle-right text-black text-2xl dark:text-white"><FaChevronCircleRight/></i>
                    </div>
                </a>
            </div>
        </div>
    )
}

export default Cardslide
