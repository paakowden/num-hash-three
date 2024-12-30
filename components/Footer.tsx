import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="py-24 px-4 md:px-8 lg:px-16 xl:32 2xl:px-64 bg-gray-100 text-sm mt-24 dark:bg-black">
      {/* TOP */}
      <div className="flex flex-col md:flex-row justify-between gap-24">
        {/* LEFT */}
        <div className="w-full md:w-1/2 lg:w-1/4 flex flex-col gap-8">
          <Link href="/">
            <div className="text-2xl tracking-wide">
              <span className="text-paa">#3</span> Whiskey
            </div>
          </Link>
          <span className="font-semibold">E-mail: info@3whiskey.com</span>
          <span className="font-semibold">Line 1: +233594346534</span>
          <span className="font-semibold">Line 2: +233245365939</span>
          <div className="flex gap-6 dark:text-white">
            <p className="flex text-2xl">Socials</p>
            <Link href="https://www.instagram.com/3whiskeyy/profilecard/?igsh=eml1eWw0cXg0MGhu">
              <Image src="/instagram.png" alt="" width={26} height={26} />
            </Link>
            <Link href="https://vm.tiktok.com/ZMk6jhYEL/">
              <Image src="/tiktok.png" alt="" width={26} height={26} />
            </Link>
            <Link href="https://x.com/3Whiskeyy?s=09">
              <Image src="/x.avif" alt="" width={26} height={26} />
            </Link>
          </div>
        </div>
        {/* CENTER */}
        <div className="hidden lg:flex justify-between w-1/2">
          <div className="flex flex-col justify-between">
            <h1 className="font-medium text-lg">COMPANY</h1>
            <div className="flex flex-col gap-6">
              <Link href="/about">About Us</Link>
              <Link href="/products">Products</Link>
              Affiliates
              <Link href="/">Home</Link>
              <Link href="/contact">Contact Us</Link>
            </div>
          </div>

          <div className="flex flex-col justify-between">
            <h1 className="font-medium text-lg">HELP</h1>
            <div className="flex flex-col gap-6">
              <Link href="#">Customer Service</Link>
              My Account
              <Link href="/contact">Find a Store</Link>
              Legal & Privacy
              <Link href="/products">Reference</Link>
            </div>
          </div>
        </div>
        {/* RIGHT */}
      </div>
      {/* BOTTOM */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-8 mt-16">
        <div className="">
          © 2024 <span className="text-paa">#3</span> Whiskey Shop
        </div>
        <div className="flex flex-col gap-8 md:flex-row">
          <div className="">
            <span className="text-gray-500 mr-4">Language</span>
            <span className="font-medium">United States | English</span>
          </div>
          <div className="">
            <span className="text-gray-500 mr-4">Currency</span>
            <span className="font-medium">$ USD</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
