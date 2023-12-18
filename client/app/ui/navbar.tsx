"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";

const links = [
  { name: "Home", href: "/" },
  {
    name: "About Us",
    href: "/about",
  },
  { name: "Contact Us", href: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  return (
    <nav className="w-full">
      <ul className="flex flex-col md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-gray-50 px-2  items-end justify-end">
        {links.map((link) => {
          return (
            <Link
              key={link.name}
              href={link.href}
              className={clsx(
                "flex gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium  hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3",
                {
                  " text-blue-600": pathname === link.href,
                }
              )}
            >
              {link.name}
            </Link>
          );
        })}
      </ul>
    </nav>
  );
}
