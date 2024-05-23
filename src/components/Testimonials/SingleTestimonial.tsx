import { Testimonial } from "@/types/testimonial";

const SingleTestimonial = ({ testimonial }: { testimonial: Testimonial }) => {
  const { name, content } = testimonial;

  return (
    <div className="w-full p-6 bg-white rounded-md shadow-lg hover:shadow-xl transition-shadow duration-300 dark:bg-gray-800">
      <div className="flex items-center">
        <div>
          <h3 className="mb-2 text-lg font-semibold text-orange-500">
            {name}
          </h3>
        </div>
      </div>
      <p className="mb-6 text-base leading-relaxed text-gray-700 dark:text-gray-300">
        “{content}”
      </p>
    </div>
  );
};

export default SingleTestimonial;





