"use client";

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Inter } from "next/font/google";
import "../styles/index.css";

const inter = Inter({ subsets: ["latin"] });

const LayoutRender = ({ children }) => {
  const [isUserDataAvailable, setIsUserDataAvailable] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const data = localStorage.getItem("Admin data");
    if (data) {
      setIsUserDataAvailable(true);
    } else {
      setIsUserDataAvailable(false);
      router.push('/error');
    }
  }, [router]);

  if (isUserDataAvailable === null) {
    return null; // or a loading spinner
  }

  return (
    <div>
      {children}
    </div>
  );
};

export default LayoutRender;
