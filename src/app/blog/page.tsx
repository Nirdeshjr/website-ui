import Breadcrumb from "@/components/Common/Breadcrumb";
import MemberIndex from "@/components/BOD/memberindex";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Page ",
  description: "This is Contact Page",
  // other metadata
};

const MemberPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Board Member"
        description="At Edit Enterprises, our success is driven by the guidance and expertise of our esteemed Board of Directors. With diverse backgrounds spanning technology, finance, marketing, and operations, our board is dedicated to upholding our core values and delivering exceptional results for our clients and stakeholders. Meet the leaders shaping the future of Edit Enterprises below."
      />

      <MemberIndex />
    </>
  );
};

export default MemberPage;









