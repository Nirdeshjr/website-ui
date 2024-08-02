import SectionTitle from "../Common/SectionTitle";
import SingleTestimonial from "./SingleTestimonial";
import Image from "next/image";
import testimonialData from "./Testimonialdata";

const Testimonials = () => {
  return (
    <section className="dark:bg-bg-color-dark bg-gray-100 relative z-10 py-16 md:py-9 lg:py-28 mt-1 mb-2"> {/* Adjusted the margin-bottom here */}
      <div className="container -mt-12"> {/* Adjusted the margin-top here */}
        <SectionTitle
          title="What Makes Us A Top IT Organization in Nepal?"
          paragraph="As a premier IT Organization in Nepal, we deliver cutting-edge technology solutions globally. With a pulse on evolving tech trends, we craft innovative solutions that power digital transformation and deliver impactful results."
          center
        />

        <div className="flex flex-col md:flex-row md:gap-8">
          {/* Testimonial cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 -mt-8">
            {testimonialData.map((testimonial, index) => (
              <div
                key={testimonial.id}
                className={`transform transition duration-500 hover:scale-105 ${
                  index === testimonialData.length - 1 ? 'md:mb-8' : ''
                }`}
              >
                <SingleTestimonial testimonial={testimonial} />
              </div>
            ))}
          </div>

          {/* Image */}
          <div className="flex items-center justify-center mt-8 md:mt-0">
            <Image
              src="/images/logo/info.png"
              alt="Your Image"
              className="transition-transform duration-500 hover:scale-110"
              width={300}
              height={55}
            />
          </div>
        </div>
      </div>

      {/* SVG Backgrounds */}
      <div>
        <span className="absolute left-0 top-0 z-[-1]">
          <svg
            width="287"
            height="254"
            viewBox="0 0 287 254"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              opacity="0.1"
              d="M286.5 0.5L-14.5 254.5V69.5L286.5 0.5Z"
              fill="url(#paint0_linear_111:578)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_111:578"
                x1="-40.5"
                y1="117"
                x2="301.926"
                y2="-97.1485"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#4A6CF7" />
                <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>
        </span>
        <span className="absolute right-0 top-0 z-[-1]">
          <svg
            width="628"
            height="258"
            viewBox="0 0 628 258"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              opacity="0.1"
              d="M669.125 257.002L345.875 31.9983L524.571 -15.8832L669.125 257.002Z"
              fill="url(#paint0_linear_0:1)"
            />
            <path
              opacity="0.1"
              d="M0.0716344 182.78L101.988 -15.0769L142.154 81.4093L0.0716344 182.78Z"
              fill="url(#paint1_linear_0:1)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_0:1"
                x1="644"
                y1="221"
                x2="429.946"
                y2="37.0429"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#4A6CF7" />
                <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
              </linearGradient>
              <linearGradient
                id="paint1_linear_0:1"
                x1="18.3648"
                y1="166.016"
                x2="105.377"
                y2="32.3398"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#4A6CF7" />
                <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>
        </span>
      </div>
    </section>
  );
};

export default Testimonials;





