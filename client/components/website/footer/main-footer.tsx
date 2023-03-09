import { IoLocationSharp } from "react-icons/io5";
import { BsTelephoneFill } from "react-icons/bs";
import { MdMailOutline } from "react-icons/md";
import FooterLink from "./footer-link";
import Link from "next/link";

const footerLinks = [
  {
    title: "Company Info",
    links: [
      { name: "About Us", path: "/about" },
      { name: "Contact Us", path: "/contact" },
      { name: "Privacy Policy", path: "/" },
      { name: "Terms & Conditions", path: "/" },
    ],
  },
  {
    title: "Categories",
    links: [
      { name: "Electronics", path: "/products/category/electronics" },
      { name: "T-Shirt", path: "/products/category/t-shirt" },
      { name: "Accessories", path: "/products/category/accessories" },
    ],
  },
  {
    title: "Stay Connected",
    links: [
      { name: "Facebook", path: "/" },
      { name: "Twitter", path: "/" },
      { name: "Instagram", path: "/" },
      { name: "LinkedIn", path: "/" },
    ],
  },
];

const MainFooter = () => {
  return (
    <footer>
      <div className="flex justify-center bg-cream2 py-3">
        <div className="container flex justify-between flex-wrap gap-5 py-3 px-5 md:px-8">
          <ul className="max-w-[15rem] space-y-2">
            <li>
              <Link href="/" className="text-lg md:text-xl font-bold">
                Jumpstart.
              </Link>
            </li>
            <li>
              <p className="text-sm md:text-base">
                Worldwide retail-chain owns 750 stores nationwide
              </p>
            </li>
            <li className="flex items-center space-x-2 text-sm md:text-base">
              <IoLocationSharp className="text-md md:text-lg" />
              <span>Bali, Indonesia</span>
            </li>
            <li className="flex items-center space-x-2 text-sm md:text-base">
              <BsTelephoneFill className="text-md md:text-lg" />
              <span>+6281 234 5854</span>
            </li>
            <li className="flex items-center space-x-2 text-sm md:text-base">
              <MdMailOutline className="text-md md:text-lg" />
              <span>jumpstart@gmail.com</span>
            </li>
          </ul>
          {footerLinks.map((link) => (
            <FooterLink
              key={link.title}
              title={link.title}
              links={link.links}
            />
          ))}
        </div>
      </div>
      <div className="bg-cream1 py-3">
        <p className="text-center font-medium">
          Jumpstart © 2023 All Right Reserved.
        </p>
      </div>
    </footer>
  );
};

export default MainFooter;
