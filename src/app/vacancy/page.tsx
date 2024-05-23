import React from 'react'
import Breadcrumb from "@/components/Common/Breadcrumb";
import YourComponent from '@/components/Vacancy';

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Vacancy page",
  description: "This is Vacancy Page for Edit Enterprises",
  // other metadata
};

const member = () => {
  return (
    <>
      <Breadcrumb
        pageName="Vacancy Page"
        description="To apply for a position at Edit Enterprises, please submit your resume and cover letter to [email address]. Be sure to include the title of the position you're applying for in the subject line. Our team will review your application and reach out to qualified candidates for further consideration."
      />
      <YourComponent/>
    </>
  )
}

export default member