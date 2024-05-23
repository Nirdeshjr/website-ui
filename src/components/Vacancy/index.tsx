import React from 'react';
import VacancyCard from './VacancyCard';
import vacanciesData from './VacancyData';

const YourComponent = () => {
  return (
    <div className="min-h-screen dark:bg-white-100 flex flex-col items-center pt-12 pb-12 p-6">
      <h1 className="text-2xl font-semibold dark:text-white text-gray-900 mb-6">Vacancies</h1>
      <div className="space-y-6 w-full max-w-2xl">
        {vacanciesData.map((vacancy) => (
          <VacancyCard key={vacancy.id} vacancy={vacancy} />
        ))}
      </div>
    </div>
  );
};

export default YourComponent;



