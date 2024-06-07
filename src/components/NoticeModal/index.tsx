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
      />
      {/* Your other page content goes here */}
    </>
  );
};

export default Home;








