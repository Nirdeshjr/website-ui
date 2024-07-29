import React from 'react';
import LayoutRender from '../renderLayout';
import VacancyList from '@/components/AdminVacancy/VacancyList';
function page() {
  return (
    <LayoutRender>
      <VacancyList/>
    </LayoutRender>
  )
}


export default page
