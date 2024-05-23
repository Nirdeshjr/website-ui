import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact from "@/components/Contact";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Page ",
  description: "This is Contact Page",
  // other metadata
};

const ContactPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Contact Page"
        description=" Please feel free to reach out to us using the contact form below, and one of our representatives will get back to you promptly. Your feedback and inquiries are invaluable to us as we strive to provide top-notch solutions tailored to your needs. Thank you for considering Edit Enterprises Company—we look forward to connecting with you soon!"


      />

      <Contact />
    </>
  );
};

export default ContactPage;
