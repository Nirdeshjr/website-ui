"use client";

import React from 'react';
import { useRouter } from 'next/router';
import blogData from '@/components/BOD/blogData';
import Breadcrumb from '@/components/Common/Breadcrumb';
import Image from 'next/image';
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa6";

const MemberDetail = () => {
  const router = useRouter();
  const { id } = router.query;
  const member = blogData.find((m) => m.id === parseInt(id as string));

  if (!member) {
    return <div>Member not found</div>;
  }

  return (
    <>
      <Breadcrumb
        pageName={member.member_name}
        description={member.description}
      />

      <section className="pb-[120px] pt-[120px]">
        <div className="container">
          <div className="flex flex-wrap justify-center">
            <div className="w-full px-4 md:w-2/3 lg:w-1/2 xl:w-1/3">
              <Image
                src={member.member_profile}
                alt={member.member_name}
                width={200}
                height={200}
                className="w-full"
              />
              <div className="px-6 py-4">
                <h2 className="font-medium text-lg mb-2">{member.member_name}</h2>
                <h3 className="text-gray-500">{member.position}</h3>
                <p className="text-gray-500">{member.description}</p>
                <div className="flex mt-4">
                  <a href={`https://${member.status}`} className="text-gray-900 mr-5">
                    <FaFacebookF />
                  </a>
                  <a href={`https://${member.salary}`} className="text-gray-900 mr-5">
                    <FaInstagram />
                  </a>
                  <a href={`https://${member.phone}`} className="text-gray-900">
                    <FaLinkedinIn />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default MemberDetail;



