'use client';

import { useEffect, useState } from 'react';
import Footer from "../components/Footer";
import Header from "../components/Header";
import ScrollToTop from "../components/ScrollToTop";
import { Inter } from "next/font/google";
import "../styles/index.css";

//for dashboard
import { usePathname, useRouter } from 'next/navigation';
import Layout from './dashLayout/Layout';

import { Providers } from "./providers";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  const pathname = usePathname();
  const router = useRouter();
  const [isClient, setIsClient] = useState(false);
  const [adminData, setAdminData] = useState<string | null>(null);

  useEffect(() => {
    setIsClient(true);
    const data = localStorage.getItem("Admin data");
    setAdminData(data);

    if (pathname === '/') {
      localStorage.clear();
      router.push('/');
    } else if (pathname !== '/login' && !data) {
      router.push('/');
    }
  }, [pathname, router]);

  useEffect(() => {
    document.body.classList.remove('dark'); // Ensure light mode is set by default
  }, []);

  if (!isClient) {
    return null; // Render nothing until client-side logic is complete
  }

  if (pathname === '/login') {
    return (
      <html lang="en">
        <head />
        <body>
          {children}
        </body>
      </html>
    );
  }

  return (
    <html suppressHydrationWarning lang="en">
      <head />
      <body className={`bg-[#FCFCFC] ${inter.className}`}>
        {adminData ? (
          <Layout>
            {children}
          </Layout>
        ) : (
          <Providers>
            <Header />
            {children}
            <Footer />
            <ScrollToTop />
          </Providers>
        )}
      </body>
    </html>
  );
}
