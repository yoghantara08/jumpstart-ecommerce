import Link from "next/link";
import React from "react";

interface Props {
  title: string;
  links: { name: string; path: string }[];
}

const FooterLink: React.FC<Props> = ({ title, links }) => {
  return (
    <ul className="max-w-[15rem] space-y-2">
      <h3 className="font-bold text-lg md:text-lg">{title}</h3>
      {links.map((link) => (
        <li key={link.name} className="text-sm md:text-base">
          <Link href={link.path}>{link.name}</Link>
        </li>
      ))}
    </ul>
  );
};

export default FooterLink;
