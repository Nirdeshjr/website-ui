import Link from "next/link";
import Image from "next/image";

interface ProductType {
    id: number;
    section: string;
    link: string[];
}

interface socialLinks {
    imgSrc: string;
    link: string;
    width: number;
}

const socialLinks: socialLinks[] = [
    {
        imgSrc: '/assets/footer/facebook.svg',
        link: 'https://www.facebook.com/profile.php?id=100057636332488',
        width: 10
    },
    {
        imgSrc: '/assets/footer/insta.svg',
        link: 'www.instagram.com',
        width: 14
    },
    {
        imgSrc: '/assets/footer/linkedin.svg',
        link: 'www.linkedin.com',
        width: 14
    },
    {
        imgSrc: '/assets/footer/youtube.svg',
        link: 'https://www.youtube.com/watch?v=H87AzJmjbT',
        width: 14
    },
]

const products: ProductType[] = [
    {
        id: 1,
        section: "Company",
        link: ['Home', 'About', 'Services', 'Terms Of Services', 'Privacy Policy'],
    },
    {
        id: 2,
        section: "Contact",
        link: ['Phone:', '+977-9861768902', 'Email:', 'info@editentpvtltd.com', 'editentpltd@gmail.com']
    },
    {
        id: 3,
        section: "Our Services",
        link: ['Web Design', 'Software Development', 'Network Management', 'Surveillance Solution', 'Mobile App Development']
    }
]

const Footer = () => {
    return (
        <div className="mx-auto max-w-2xl sm:pt-24 px-4 sm:px-6 lg:max-w-7xl lg:px-8 relative overflow-hidden">
            {/* Curved Border */}
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-blue-500 to-purple-600 opacity-80 transform -skew-y-6 z-0 dark:from-gray-800 dark:to-gray-900"></div>

            <div className="my-12 grid grid-cols-1 gap-y-10 sm:grid-cols-6 lg:grid-cols-12 relative z-10">

                {/* COLUMN-1 */}
                <div className='sm:col-span-6 lg:col-span-5 relative'>
                    <div className="flex flex-shrink-0 items-center border-right">
                        <Image src="/assets/footer/logo.png" alt="logo" width={140} height={30} />
                    </div>
                    <h3 className='text-xs font-medium text-gunmetalgray lh-160 mt-5 mb-4 lg:mb-16 dark:text-gray-300'>Elevate Your Digital Experience</h3>
                    <div className='flex gap-4'>
                        {socialLinks.map((items, i) => (
                            <Link href={items.link} key={i}>
                                <div className="bg-white dark:bg-gray-900 h-12 w-12 shadow-xl text-base rounded-full flex items-center justify-center footer-icons hover:bg-ultramarine">
                                    <Image src={items.imgSrc} alt={items.imgSrc} width={items.width} height={2} className="sepiaa" />
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>

                {/* CLOUMN-2/3/4 */}
                {products.map((product) => (
                    <div key={product.id} className="sm:col-span-2">
                        <p className="text-black dark:text-white text-lg font-medium mb-2 font-bold">{product.section}</p>
                        <ul>
                            {product.link.map((link: string, index: number) => (
                                <li key={index} className='mb-2'>
                                    <Link href={link} className="text-darkgray dark:text-gray-300 text-base font-normal space-links">{link}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>

            {/* All Rights Reserved */}
            <div className='py-10 md:flex items-center justify-between border-t border-t-gray-blue'>
                <h4 className='text-dark-red opacity-75 text-sm text-center md:text-start font-normal dark:text-gray-300'>@2024.Edit Enterprises.All rights reserved</h4>
            </div>
        </div>
    )
}

export default Footer;




