import Link from "next/link";
import Image from "next/image";

interface ProductType {
  id: number;
  section: string;
  link: string[];
}

interface SocialLinks {
  imgSrc: string;
  link: string;
  width: number;
}

const socialLinks: SocialLinks[] = [
  {
    imgSrc: '/assets/footer/facebook.svg',
    link: 'https://www.facebook.com/profile.php?id=100057636332488',
    width: 24,
  },
  {
    imgSrc: '/assets/footer/insta.svg',
    link: 'https://www.instagram.com',
    width: 24,
  },
  {
    imgSrc: '/assets/footer/linkedin.svg',
    link: 'https://www.linkedin.com',
    width: 24,
  },
  {
    imgSrc: '/assets/footer/youtube.svg',
    link: 'https://www.youtube.com/watch?v=H87AzJmjbT',
    width: 24,
  },
];

const products: ProductType[] = [
  {
    id: 1,
    section: "Company",
    link: ['Home', 'About', 'Services', 'Terms Of Services', 'Privacy Policy'],
  },
  {
    id: 2,
    section: "Contact",
    link: ['Phone:', '+977-9861768902', 'Email:', 'info@editentpvtltd.com', 'editentpltd@gmail.com'],
  },
  {
    id: 3,
    section: "Our Services",
    link: ['Web Design', 'Software Development', 'Network Management', 'Surveillance Solution', 'Mobile App Development'],
  },
];

const Footer = () => {
  return (
    <div className="relative overflow-hidden bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-300">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 relative z-10">
        <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-6 lg:grid-cols-12">

          {/* COLUMN-1 */}
          <div className="sm:col-span-6 lg:col-span-5">
            <div className="flex items-center">
              <Image src="/assets/footer/logo.png" alt="logo" width={140} height={30} />
            </div>
            <h3 className="text-xs font-medium mt-5 mb-4 lg:mb-16 text-gray-800 dark:text-gray-300">
              Elevate Your Digital Experience
            </h3>
            <div className="flex gap-4">
              {socialLinks.map((item, i) => (
                <Link href={item.link} key={i}>
                  <div className="bg-gray-200 dark:bg-gray-700 h-12 w-12 shadow-lg rounded-full flex items-center justify-center hover:bg-blue-600 transition duration-300 ease-in-out">
                    <Image src={item.imgSrc} alt={item.imgSrc} width={item.width} height={item.width} />
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* COLUMN-2/3/4 */}
          {products.map((product) => (
            <div key={product.id} className="sm:col-span-2">
              <p className="text-gray-800 dark:text-gray-300 text-lg mb-2 font-bold">{product.section}</p>
              <ul>
                {product.link.map((link, index) => (
                  <li key={index} className="mb-2">
                    <Link href="#">
                      <span className="text-gray-600 dark:text-gray-400 hover:text-blue-600 transition duration-300 ease-in-out">
                        {link}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* All Rights Reserved */}
        <div className="py-6 flex items-center justify-between border-t border-gray-300 dark:border-gray-600 mt-8">
          <h4 className="text-gray-600 dark:text-gray-400 text-sm text-center md:text-start font-normal">
            © 2024 Edit Enterprises. All rights reserved.
          </h4>
        </div>
      </div>
    </div>
  );
};

export default Footer;



















