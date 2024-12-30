import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { AlignJustify } from "lucide-react";
import Logo from "./Logo";
import Link from "next/link";

const MobileMenu = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <AlignJustify className="cursor-pointer" />
      </SheetTrigger>
      <SheetContent>
        <div className="flex flex-col items-center justify-between h-full py-6">
          <div className="flex flex-col items-center gap-y-32">
            <Logo />
            <div
              className="text-xl font-semibold uppercase 
          py-8 m-6 rounded-3xl cursor-pointer mt-[-80px]"
            >
              <ul className="flex flex-col items-center gap-10">
                <li>
                  <Link href="/">Home</Link>
                </li>
                <li>
                  <Link href="/about">About</Link>
                </li>
                <li>
                  <Link href="/products">Products</Link>
                </li>
                <li>
                  <Link href="/gallery">Gallery</Link>
                </li>
                <li>
                  <Link href="/contact">Contact</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileMenu;
