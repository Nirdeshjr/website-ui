"use client";
import React, { useState, useEffect } from 'react';
import Image from "next/image";
import Slider from "react-slick";
import GalleryData from "./GalleryData";
import "./Gallery.css"; // You can define additional styles in this CSS file

const Cards = () => {
    const [slidesToShow, setSlidesToShow] = useState(4);

    useEffect(() => {
        const handleResize = () => {
            const screenWidth = window.innerWidth;
            if (screenWidth < 720 && screenWidth >= 570) {
                setSlidesToShow(2);
            }
            else if (screenWidth < 570) {
                setSlidesToShow(1);
            }
            else {
                setSlidesToShow(4);
            }
        };

        handleResize(); // Call once to set initial value

        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: slidesToShow,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        cssEase: "linear"
    };

    return (
        <div className="slider-container">
            <Slider {...settings}>
                {GalleryData.map((entry) => (
                    <div id="card_area" key={entry.id} className="ml-5">
                        <figure className="snip1563">
                            <Image
                                src={entry.image}
                                alt="sample110" object-fill
                                layout="fill" 
                                objectFit="cover"
                                className="image" // Add a class for styling
                            />
                            <figcaption>
                                <h3>{entry.title}</h3>
                                <p>{entry.paragraph}</p>
                            </figcaption>
                        </figure>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default Cards;

