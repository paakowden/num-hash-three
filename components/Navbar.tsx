"use client";
import { NAV_LINKS } from "@/constants";

import Link from "next/link";

const Navbar = () => {
  return (
    <nav>
      <div className="container flex justify-between items-center py-4 md:pt-6">
        <div className="flex items-center gap-2 font-bold text-2xl uppercase"></div>

        <div className="hidden md:block">
          <ul className="flex items-center gap-6">
            {NAV_LINKS.map((items) => (
              <li key={items.key} className="">
                <Link
                  href={items.href}
                  className="inline-block py-1 px-3 hover:text-rose-500 
              hover:shadow-[0 3px 0 -1px] font-semibold uppercase tracking-wide"
                >
                  {items.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

{
}
