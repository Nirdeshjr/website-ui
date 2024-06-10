import Gallery from "@/components/Gallery/Imagedetail";
import Breadcrumb from "@/components/Common/Breadcrumb";


const AboutPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Our Gallery"
        description="Welcome to the Edit Enterprises Pvt Ltd gallery! Here, you can explore a collection of our recent projects and get a glimpse into the innovative solutions we provide to our clients. Each image showcases our commitment to excellence, our passion for technology, and our ability to deliver customized IT services that meet diverse business needs. From cutting-edge software development to seamless IT support, our gallery highlights the breadth and depth of our expertise."
      />
      <Gallery />
    </>
  );
};

export default AboutPage;
