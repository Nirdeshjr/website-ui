import { Menu } from "@/types/menu";

const menuData: Menu[] = [
  {
    id: 1,
    title: "Home",
    path: "/",
    newTab: false,
  },
  {
    id: 2,
    title: "About",
    path: "/about",
    newTab: false,
  },
  {
    id: 33,
    title: "BOD",
    path: "/blog",
    newTab: false,
  },
  {
    id: 3,
    title: "Support",
    path: "/contact",
    newTab: false,
  },
  {
    id: 4,
    title: "vacancy",
    path: "/vacancy",
    newTab: false,
  },
  {
    id: 5,
    title: "Our Services",
    newTab: false,
    submenu: [
      {
        id: 41,
        title: "Application Development",
        path: "/error",
        newTab: false,
        submenu: [
          {
            id: 411,
            title: "Web App Development",
            path: "/error",
            newTab: false,
          },
          {
            id: 412,
            title: "Mobile App Development",
            path: "/error",
            newTab: false,
          },
          {
            id: 413,
            title: "Desktop App Development",
            path: "/error",
            newTab: false,
          },
        ]
      },
      {
        id: 42,
        title: "Network Management",
        path: "/error",
        newTab: false,
      },
      {
        id: 43,
        title: "System And Server Management",
        path: "/error",
        newTab: false,
      },
      {
        id: 44,
        title: "Surveillance System",
        path: "/error",
        newTab: false,
      },
      {
        id: 45,
        title: "Network Management",
        path: "/error",
        newTab: false,
      },
    ],
  },
];
export default menuData;
