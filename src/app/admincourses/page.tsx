import React from 'react';
import LayoutRender from '../renderLayout';
import Courses from '@/components/AdminCourses/courses';

function page() {
  return (
    <LayoutRender>
        <Courses/>
    </LayoutRender>
  )
}

export default page
