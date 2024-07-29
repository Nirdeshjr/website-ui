import React from 'react';
import LayoutRender from '../renderLayout';
import Notice from '@/components/AdminNews/notice';

const News = () => {
    return (
        <>
            <LayoutRender>
                <Notice/>
            </LayoutRender>
        </>
    )
}

export default News;
