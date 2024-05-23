import { Feature } from "@/types/feature";
import { VscServerProcess } from "react-icons/vsc";
import { TbWorld } from "react-icons/tb";
import { MdOutlineUsb } from "react-icons/md";
import { GiCctvCamera } from "react-icons/gi";
import { AiOutlineLayout } from "react-icons/ai";
import { FaDesktop } from "react-icons/fa";
import { FaAppStore } from "react-icons/fa";
import { FaMobileAlt } from "react-icons/fa";

const featuresData: Feature[] = [
  {
    id: 1,
    icon: <FaAppStore className="text-4xl text-amber-600"/>,
    title: "Software Development",
    paragraph:
      "Get a robust and user-friendly software that solves your business problems",
  },
  {
    id: 1,
    icon: <FaMobileAlt className="text-4xl text-amber-600" />,
    title: "Mobile App Development",
    paragraph:
      "Want to build a high performing iOS or Android mobile application? Your search ends here",
  },
  {
    id: 1,
    icon: <VscServerProcess className="text-4xl text-amber-600"/>,
    title: "Server Management",
    paragraph:
      "Keep running your system, website and track if any issues with our server management",
  },
  {
    id: 1,
    icon: <TbWorld className="text-4xl text-amber-600" />,
    title: "Web Application Development",
    paragraph:
      "Build a powerful custom web application or web portal based on your requirements",
  },
  {
    id: 1,
    icon: <MdOutlineUsb className="text-4xl text-amber-600"/>,
    title: "Network Management",
    paragraph:
      "Keep complete network management and consultancy solution.",
  },
  {
    id: 1,
    icon: <GiCctvCamera className="text-4xl text-amber-600"/>,
    title: "Surveillance Solution",
    paragraph:
      "Keep your premises secure from surveillance system from our service.",
  },
  {
    id: 1,
    icon: <AiOutlineLayout className="text-4xl text-amber-600"/>,
    title: "Website Development",
    paragraph:
      "Build a unique and responsive website to enhance your global presence",
  },
  {
    id: 1,
    icon: <FaDesktop className="text-4xl text-amber-600"/>,
    title: "Desktop Publication",
    paragraph:
      "ID Card, Certification, Invitation card, Visiting card design and printing solution service",
  },
];
export default featuresData;
