"use client";
import { TbArrowUpRight } from "react-icons/tb";
import { Button } from "./ui/button";
import { motion } from "framer-motion";
import Link from "next/link";
import { desVariants, tagVariants } from "@/utils/animate";

const HeroSection = () => {
  return (
    <section className="bg-[url('/images/num-three2.jpg')] bg-center bg-cover h-[400px] w-full py-24">
      <div className="container mx-auto text-center ">
        <div className="flex items-center xl:h[540]">
          {/* text */}
          <div className="w-full xl:max-w-[560px] text-center xl:mt-[100px] right-4">
            <motion.h1
              initial="offscreen"
              whileInView={"onscreen"}
              variants={desVariants}
              className="h1 text-white mb-4 text-center"
            >
              {" "}
              Africa&apos;s finest <br /> Whisky{" "}
            </motion.h1>
            <motion.p
              initial="offscreen"
              whileInView={"onscreen"}
              variants={tagVariants}
              className="text-white mb-12 max-w-lg mx-auto
            xl:max-w-none xl:mx-auto text-muted-foreground font-semibold text- centers"
            >
              Experience the joy of exceptional #3 whisky in a well crafted
              bottle, where every glass is filled with passion and warmth. After
              a hard days work, #3 whisky is in hand to sooth your night. Go for
              #3 whisky the best in the industry.
            </motion.p>
            <motion.div
              initial="offscreen"
              whileInView={"onscreen"}
              variants={tagVariants}
            >
              <Link href="comingsoon">
                <Button
                  className="inline-flex items-center px-8 py-3 text-white
        rounded-full shadow-lg hover:bg-gray-800 hover:ring-2 hover:
        ring-gray-950 ring-offset-2 right-3"
                >
                  Buy now <TbArrowUpRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
