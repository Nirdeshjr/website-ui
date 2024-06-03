import React, { useEffect, useState } from "react";
import NoticeModalProps from "@/types/noticemodal";
import "./NoticeModal.css"; // Import CSS file for custom styles

const NoticeModal: React.FC<NoticeModalProps> = ({ isOpen, onClose, noticeMessage, imageUrl }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      // Show the notice message with a delay to allow the animation to be visible
      setTimeout(() => {
        setIsVisible(true);
      }, 100);
    } else {
      document.body.style.overflow = "auto";
      setIsVisible(false);
    }
  }, [isOpen]);

  const closeModal = () => {
    onClose();
  };

  return (
    <div className={`fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 ${isOpen ? "" : "hidden"}`}>
      <div className="bg-black absolute inset-0 opacity-50"></div>
      <div className="bg-white rounded-lg shadow-lg max-w-lg w-full mx-auto overflow-hidden relative">
        {isOpen && (
          <>
            {imageUrl && (
              <img src={imageUrl} alt="Notice" className="w-full h-auto max-h-96 object-cover" />
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
            <div className={`p-6 md:p-8 lg:p-10 overflow-y-auto max-h-80vh ${isVisible ? "visible" : ""}`}>
              <p className={`text-lg lg:text-xl xl:text-2xl mb-6 ${isVisible ? "visible" : ""}`}>{noticeMessage}</p>
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






















