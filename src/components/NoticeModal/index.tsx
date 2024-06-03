"use client";
import React, { useState } from "react";
import NoticeModal from "./NoticeModel";


const Home: React.FC = () => {
    const [isNoticeOpen, setIsNoticeOpen] = useState(true);

return (
    <>
    <NoticeModal
        isOpen={isNoticeOpen}
        onClose={() => setIsNoticeOpen(false)}
        noticeMessage="eDIT ENTERPRISES परिवारको तर्फबाट नयाँ वर्षको शुभकामना !"
        imageUrl="/images/logo/front.jpg" // Provide the URL of the image
    />
      {/* Your other page content goes here */}
    </>
);
};

export default Home;


