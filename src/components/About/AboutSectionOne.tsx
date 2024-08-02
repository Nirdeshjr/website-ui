"use client";
import SectionTitle from "../Common/SectionTitle";
import { useEffect, useRef } from "react";

const AboutSectionOne = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fadeIn");
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="about"
      className="pt-8 md:pt-12 lg:pt-16 relative overflow-hidden border-b-4 border-gray-200"
    >
      <div className="container mx-auto relative z-10">
        <SectionTitle
          title="Our Organization Process Workflow"
          paragraph="Since 2015, our organization team accelerates digital transformation for clients across industries. We employ a streamlined four-step process, ensuring swift, impactful solutions."
          center={true}
          className="custom-class opacity-0 transition-opacity duration-1000 ease-in-out" // Add transition and opacity classes
          mb="8" // Adjust margin bottom
          width="full" // Adjust width to full
        />
        <div className="flex flex-col md:flex-row justify-between items-center relative">
          {["Analyze", "Strategize", "Implement", "Monitor"].map((step, index) => (
            <div
              className={`relative flex flex-col items-center text-center p-4 md:p-8 opacity-0 transform transition-all duration-1000 ease-in-out delay-${index * 200}`}
              key={index}
            >
              <div className="w-12 h-12 md:w-16 md:h-16 mb-2 rounded-full bg-primary text-white flex items-center justify-center text-lg md:text-xl animate-bounce">
                {index + 1}
              </div>
              <h3 className="font-bold text-lg md:text-xl text-orange-500">{step}</h3>
              <p className="mt-2 text-sm md:text-base">
                {index === 0 && "We analyze business IT needs, key pain areas, digitalization goals, and objectives."}
                {index === 1 && "We identify areas for improvement and strategize to achieve desired goals."}
                {index === 2 && "We implement the solutions and ensure proper integration with existing IT infrastructure."}
                {index === 3 && "We monitor the performance of IT solutions and make changes to improve efficiency."}
              </p>
              {index < 3 && (
                <div className="hidden md:block absolute top-1/2 transform -translate-y-1/2 right-0 w-1 h-full bg-primary"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSectionOne;
