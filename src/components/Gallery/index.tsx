import React from 'react';
import Cards from './Cards';
import SectionTitle from "../Common/SectionTitle";

const Gallery = () => {
  return (
    <>
      <div className='container'>
        <SectionTitle
          className="mt-11"
          title="Our Environment"
          paragraph="We intertwine work and enjoyment to enhance creativity and productivity"
          center
        />
        <div className='container mt-1 -mt-5'>
          
          <Cards />
        </div>
      </div>
    </>
  )
}

export default Gallery
