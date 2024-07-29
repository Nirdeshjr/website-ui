import React from 'react';
import LayoutRender from '../renderLayout';
import Products from '@/components/AdminProduct/products';
const Gallery = () => {
    return (
        <>
            <LayoutRender>
                <Products/>
            </LayoutRender>
        </>
    )
}

export default Gallery
