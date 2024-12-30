"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { desVariants, tagVariants } from "@/utils/animate";

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
              Experience the joy of exceptional #3 whiskey in a well crafted
              bottle, where every glass is filled with passion and warmth. After
              a hard days work, #3 whiskey is in hand to sooth your night. Go
              for #3 whiskey the best in the industry.
            </motion.p>
            <motion.p
              initial="offscreen"
              whileInView={"onscreen"}
              variants={tagVariants}
              className="px-12 pb-4 inline-block text-muted-foreground"
            >
              #3 whiskey, is brewed in Ghana with a distinct flavor and iconic
              branding. Every bottle of #3 Whiskey tells a story of
              craftsmanship, community, and the pursuit of excellence.
              We&apos;re excited to share this journey with you, offering a
              taste of Africa that&apos;s as bold and vibrant as the continent
              itself.
            </motion.p>
          </div>
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
