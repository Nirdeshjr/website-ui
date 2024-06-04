"use client"

import React, { useEffect, useState } from 'react';
import VacancyCard from './VacancyCard';
import axios from 'axios';
import { Vacancy } from './VacancyCard';

const YourComponent = () => {
  const [vacancyData, setVacancyData] = useState<Vacancy[]>([]);

  const getData = () => {
    axios.get("http://127.0.0.1:8000/api/vacancy/")
      .then(response => {
        const fetchData = response.data;
        setVacancyData(fetchData);
        console.log(fetchData);
      })
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="min-h-screen dark:bg-white-100 flex flex-col items-center pt-12 pb-12 p-6">
      <h1 className="text-2xl font-semibold dark:text-white text-gray-900 mb-6">Vacancies</h1>
      <div className="space-y-6 w-full max-w-2xl">
        {vacancyData.map((vacancy) => (
          <VacancyCard key={vacancy.id} vacancy={vacancy} />
        ))}
      </div>
    </div>
  );
};

export default YourComponent;
