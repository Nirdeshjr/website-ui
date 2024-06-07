import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Breadcrumb from "@/components/Common/Breadcrumb";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
  description: "This is About Page for edit enterprises",
  // other metadata
};

const AboutPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="About Us"
        description="Edit Enterprises Pvt ltd, we are a dynamic team of IT professionals dedicated to delivering innovative solutions and exceptional service to businesses of all sizes. Established in 2021, we have rapidly grown into a leading provider of IT services, serving clients across the world. With a passion for technology and a commitment to excellence, we strive to empower our clients to achieve their goals and stay ahead in today's fast-paced digital landscape."
      />
      <AboutSectionOne />
      <AboutSectionTwo />
    </>
  );
};

export default AboutPage;
