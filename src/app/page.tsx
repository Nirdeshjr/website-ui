import AboutSectionOne from "@/components/About/AboutSectionOne";
import Blog from "@/components/Blog";
import BOD from "@/components/BOD";
import Brands from "@/components/Brands";
import ScrollUp from "@/components/Common/ScrollUp";
import Contact from "@/components/Contact";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Testimonials from "@/components/Testimonials";
import Video from "@/components/Video";
import NoticeModal from "@/components/NoticeModal";
import Product from "@/components/Product/ImageFilter"; // Updated import statement
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Edit UI",
  description: "This is Home ",
  // other metadata
};

export default function Home() {
  return (
    <>
      <ScrollUp />
      <Hero />
      <Video />
      <Features />
      <Brands />
      <AboutSectionOne />
      <Product />
      <Testimonials />
      <BOD/>
      <Contact />
      <NoticeModal />
    </>
  );
}
