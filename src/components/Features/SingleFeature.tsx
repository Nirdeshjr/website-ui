import { Feature } from "@/types/feature";


const SingleFeature = ({ feature }: { feature: Feature }) => {
  const { icon, title, paragraph } = feature;
  return (
    <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 hover:bg-blue-600 group hover:cursor-pointer dark:hover:bg-blue-600 h-64 w-auto">
      <div className="service_icon mb-4">
        {icon}
      </div>
      <h5 className="mb-2 text-2xl font-semibold tracking-tight text-blue-600 group-hover:text-white dark:group-hover:text-blue ">{title}</h5>
      <p className="mb-3 font-normal text-gray-500 dark:text-gray-400 group-hover:text-white dark:group-hover:text-white ">{paragraph}</p>
    </div>
  );
};

export default SingleFeature;
