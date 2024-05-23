import SectionTitle from "../Common/SectionTitle";
import SingleTestimonial from "./SingleTestimonial";
import Image from "next/image";
import testimonialData from "./Testimonialdata";

const Testimonials = () => {
  return (
    <section className="dark:bg-bg-color-dark bg-gray-100 relative z-10 py-16 md:py-9 lg:py-28 mt-1">
      <div className="container -mt-12"> {/* Adjusted the margin-top here */}
        <SectionTitle
          title="What Makes Us A Top IT Organization in Nepal?"
          paragraph="As a premier IT Organization in Nepal, we deliver cutting-edge technology solutions globally. With a pulse on evolving tech trends, we craft innovative solutions that power digital transformation and deliver impactful results."
          center
        />

        <div className="flex flex-col md:flex-row md:gap-8">
          {/* Testimonial cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8  -mt-8">
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
    </section>
  );
};

export default Testimonials;


