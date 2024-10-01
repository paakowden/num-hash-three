"use client";

import Image from "next/image";
import { Button } from "./ui/button";
import Link from "next/link";
import { TbArrowUpRight } from "react-icons/tb";

//className="h-[88vh] w-full bg-hero bg-right bg-cover bg-no-repeat text-white pt-[225px] pb-[254px] relative mb-12 lg:bg-center

const Hero = () => {
  return (
    <section className="h-[110vh] xl:h-screen relative text-white z-10">
      {/* hero image */}
      <Image
        src="/images/herobg.jpg"
        fill
        alt="hero"
        className="absolute top-0 left-0 w-full h-full object-cover
        bg-no-reapet"
      />
      <div
        className="container mx-auto h-full flex flex-col xl:flex-row
      items-center z-30 relative"
      >
        {/*text */}
        <div
          className="flex-1 flex flex-col text-center justify-center
        items-center xl:pb-12 gap-10 h-full"
        >
          {/* badge & h1 */}
          <div className="flex flex-col items-center">
            <h1 className="h1 text-white">
              <span className="text-primary">#3 </span> Whiskey
            </h1>
          </div>
          {/* separator */}

          <p
            className="lead font-light max-w-[300px] md:max-w-[430px] 
          xl:max-w-[560px] mb-4 text-2xl"
          >
            Experience the joy of exceptional #3 whiskey in a well crafted
            bottle, where every glass is filled with passion and warmth.
          </p>
          <Link href="/sales">
            <Button
              className="inline-flex items-center px-8 py-3 mt-10 text-white
          rounded-full shadow-lg hover:bg-gray-800 hover:ring-2 
          hover:ring-gray-950 ring-offset-2"
            >
              Buy now <TbArrowUpRight className="w-5 h-5 ml-2" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
