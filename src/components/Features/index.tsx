import SectionTitle from "../Common/SectionTitle";
import Cardslide from "./cardslide";

const Features = () => {
  return (
    <section id="features" className="py-14 md:py-20 lg:py-28 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden z-0">
        <div className="absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-b from-primary to-transparent opacity-80 z-0 transform -skew-y-6"></div>
      </div>
      <div className="container relative z-0 bg-white dark:bg-gray-900 rounded-lg shadow-xl overflow-hidden">
        <SectionTitle
          title="Main Features"
          paragraph="Get a robust and user-friendly software that solves your business problems"
          center
          mb="14"
          className="dark:text-white mt-6"
        />

        {/* <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {featuresData.map((feature) => (
            <SingleFeature key={feature.id} feature={feature} />
          ))}
        </div> */}
          <Cardslide />
      </div>
    </section>
  );
};

export default Features;







