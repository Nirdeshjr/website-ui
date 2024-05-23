import React from 'react'
import Breadcrumb from "@/components/Common/Breadcrumb";
import AllMembers from '@/components/Member/AllMembers';

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Members Page",
  description: "This is member Page for Edit Enterprises",
  // other metadata
};

const member = () => {
  return (
    <>
      <Breadcrumb
        pageName="Members Page"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In varius eros eget sapien consectetur ultrices. Ut quis dapibus libero."
      />
      <AllMembers/>
    </>
  )
}

export default member
