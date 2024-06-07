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
        description="Whether you're a small startup or a large enterprise, Edit Enterprise is here to help you navigate the complex world of technology and unlock your full potential. Contact us today to learn more about our services and how we can support your business goals.
At Edit Enterprise, we are more than just an IT company – we are your trusted partner in digital transformation. Let's embark on this journey together and shape the future of IT."


      />

      <Contact />
    </>
  );
};

export default ContactPage;
