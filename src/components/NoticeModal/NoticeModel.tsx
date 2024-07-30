"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import NoticeModalProps from "@/types/noticemodal";

const NoticeModal: React.FC<NoticeModalProps> = ({ isOpen, onClose }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [noticeData, setNoticeData] = useState<{ message: string; notice_image: string } | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchNoticeData = async () => {
      try {
        const response = await axios.get('https://backend-4c5c.onrender.com/api/notice/');
        console.log("Response from API:", response.data); // Debugging: Check the API response
        if (Array.isArray(response.data) && response.data.length > 0) {
          setNoticeData(response.data[0]); // Set the first notice
        } else {
          setNoticeData(null); // No notice data available
        }
        setIsLoading(false);
      } catch (error) {
        console.error("Error while fetching notice data:", error.message); // Log error message
        setIsLoading(false);
      }
    };

    fetchNoticeData();
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      setTimeout(() => {
        setIsVisible(true);
        console.log("Notice message:", noticeData?.message); // Debugging: Check notice message
      }, 100);
    } else {
      document.body.style.overflow = "auto";
      setIsVisible(false);
    }
  }, [isOpen, noticeData]);

  const closeModal = () => {
    onClose();
  };

  return (
    <div className={`fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 ${isOpen ? "" : "hidden"}`}>
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative bg-white rounded-lg shadow-lg max-w-lg w-full mx-auto overflow-hidden">
        {isLoading && (
          <div className="absolute inset-0 flex items-center justify-center bg-white bg-opacity-75 z-10">
            <div className="w-12 h-12 border-4 border-t-4 border-t-blue-500 border-gray-200 rounded-full animate-spin"></div>
          </div>
        )}
        {!isLoading && noticeData && (
          <>
            {noticeData.notice_image && (
              <img src={noticeData.notice_image} alt="Notice" className="w-full h-auto max-h-96 object-cover" />
            )}
            <button className="absolute top-2 right-2 focus:outline-none z-10" onClick={closeModal}>
              <div className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-300 hover:bg-gray-400 transition-colors">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-gray-800 hover:text-gray-900"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </div>
            </button>
            <div className={`p-6 md:p-8 lg:p-10 overflow-y-auto max-h-[80vh] ${isVisible ? "" : "hidden"}`}>
              <p className={`text-lg lg:text-xl xl:text-2xl mb-6 ${isVisible ? "" : "hidden"}`}>{noticeData.message}</p>
              <button className="block w-full bg-primary text-white py-3 px-6 rounded-md text-center font-semibold hover:bg-primary-dark transition duration-300" onClick={closeModal}>
                Close
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default NoticeModal;

























