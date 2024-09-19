"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { desVariants, tagVariants } from "@/utils/animate";
import { Button } from "./ui/button";
import { TbArrowUpRight } from "react-icons/tb";
import Link from "next/link";

const AboutClientPage = () => {
  return (
    <section className="container py-12 xl:py-24 h-[auto]">
      <div className="grid lg:grid-cols-2 place-items-center">
        <motion.div
          initial="offscreen"
          whileInView={"onscreen"}
          variants={desVariants}
        >
          <div className="items-center">
            <motion.h2
              initial="offscreen"
              whileInView={"onscreen"}
              variants={desVariants}
              className="px-12 py-4 text-3xl font-extrabold leading-tight
          lg:text-5xl inline-block"
            >
              We are new in the market
            </motion.h2>
            <motion.p
              initial="offscreen"
              whileInView={"onscreen"}
              variants={desVariants}
              className="px-12 tracking-wider uppercase mt-3 inline-block"
            >
              World Coverage
            </motion.p>
            <motion.p
              initial="offscreen"
              whileInView={"onscreen"}
              variants={tagVariants}
              className="px-12 pb-4 mt-4 inline-block text-muted-foreground"
            >
              Experience the joy of exceptional #3 whisky in a well crafted
              bottle, where every glass is filled with passion and warmth. After
              a hard days work, #3 whisky is in hand to sooth your night. Go for
              #3 whiskey the best in the industry.
            </motion.p>
            <motion.p
              initial="offscreen"
              whileInView={"onscreen"}
              variants={tagVariants}
              className="px-12 pb-4 inline-block text-muted-foreground"
            >
              #3 whiskey, is brewed in Ghana with a distinct flavor and iconic
              branding. We are working towards leaving an indelible mark on the
              industry. From our modest beginnings, we want to rise to the level
              of a global sensation.
            </motion.p>
          </div>
          <Link href="/comingsoon">
            <Button
              className="inline-flex items-center px-8 py-3 text-white
        rounded-full shadow-lg hover:bg-gray-800 hover:ring-2 hover:
        ring-gray-950 ring-offset-2 right-3"
            >
              Buy now <TbArrowUpRight className="w-5 h-5 ml-2" />
            </Button>
          </Link>
        </motion.div>
        <div className="items-center">
          <Image
            src="/images/slider2.jpg"
            width={900}
            height={500}
            alt="about-front"
            className="max-md:hidden rounded-2xl"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutClientPage;
