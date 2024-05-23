import React from 'react';

export type Vacancy = {
  id: number;
  title: string;
  description: string;
  location: string;
  salary: string;
  closingDate: string;
};

type VacancyCardProps = {
  vacancy: Vacancy;
};

const VacancyCard: React.FC<VacancyCardProps> = ({ vacancy }) => {
  const { title, description, location, salary, closingDate } = vacancy;

  return (
    <div className="bg-gray-900 p-6 rounded-lg shadow-md text-white">
      <p className="text-blue-400 mb-2">We're hiring</p>
      <h2 className="text-3xl font-bold mb-2">{title}</h2>
      <p className="text-lg mb-4">{description}</p>
      <div className="flex items-center space-x-4 mb-6">
        <div className="flex items-center">
          <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
            <path d="M2.5 5.5C2.5 3.01472 4.51472 1 7 1C9.48528 1 11.5 3.01472 11.5 5.5C11.5 7.98528 9.48528 10 7 10C4.51472 10 2.5 7.98528 2.5 5.5ZM7 0C3.68629 0 1 2.68629 1 6C1 8.96086 4.06543 13.2925 6.29799 15.9254C6.68329 16.3601 7.31671 16.3601 7.70201 15.9254C9.93457 13.2925 13 8.96086 13 6C13 2.68629 10.3137 0 7 0Z"/>
          </svg>
          <span>{location}</span>
        </div>
        <div className="flex items-center">
          <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
            <path d="M6 2a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zM4 5a1 1 0 000 2v7a2 2 0 002 2h8a2 2 0 002-2V7a1 1 0 100-2H4zm2 5a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1z"/>
          </svg>
          <span>{salary}</span>
        </div>
      </div>
      <button className="bg-gray-800 text-white py-2 px-4 rounded-md hover:bg-gray-700">
        Apply for this job
      </button>
      <p className="text-sm mt-4 text-gray-400">Closed on {closingDate}</p>
    </div>
  );
};

export default VacancyCard;
