"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { TbArrowUpRight } from "react-icons/tb";
import { motion, useScroll, useTransform } from "framer-motion";
import { desVariants, tagVariants, titleVariants } from "@/utils/animate";
import { useRef } from "react";

const About = () => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end end"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [0.6, 1]);
  return (
    <section>
      <div className="bg-[url('/images/header_light.jpg')] bg-center bg-cover">
        <h1
          className="container py-32 text-6xl font-semibold tracking-widest 
          text-center lg:py-64 text-white "
        >
          About Us
        </h1>
      </div>
      <div className="container">
        <div className="pt-4">
          <motion.h2
            initial="offscreen"
            whileInView={"onscreen"}
            variants={titleVariants}
            className="text-3xl font-semibold text-center lg:p-10
          lg:text-5xl"
          >
            Africa&apos;s finest Whisky is now on sale
          </motion.h2>
          <motion.p
            initial="offscreen"
            whileInView={"onscreen"}
            variants={desVariants}
            className="text-2xl text-center font-medium pb-10 mt-5"
          >
            Africa&apos;s finest whiskey has come to stay.
          </motion.p>
        </div>

        <div className="items-center lg:flex gap-x-8">
          {/* left Image Section */}
          <motion.div style={{ scale }} ref={ref} className="w-full">
            <Image
              src="/images/gallery2.jpg"
              width={700}
              height={600}
              alt="abtimg"
              className="rounded-2xl"
            />
          </motion.div>

          {/* Right Content Section */}
          <motion.div
            initial="offscreen"
            whileInView={"onscreen"}
            variants={tagVariants}
          >
            <p className="pb-8 tracking-wide mt-6">
              Welcome to #3 Whiskey where passion meets crafsmanship. Founded in
              in the year 2022, our journey began with a simple mission to bring
              exceptional whiskey to enthusiasts around the world. We specialize
              in sourcing, aging, and bottling some of the finest whiskeys,
              delivering unique taste and unforgettable experiences in every
              bottle.
              <br /> <br />
              Our team of experts travel far and wide to select only the best
              barrels from renowned distilleries, ensuring quality and character
              are at the heart of every batch. We pride ourselves on a
              meticulous aging and blending process, carefully refining each
              whiskey to achieve it&apos;s full potential. From the robust and
              smoky to the smooth and mellow, our diverse range caters to all
              palates, offering something for every whiskey lover. <br /> <br />
              Sustainability and integrity are key values in our processes. We
              are committed to using eco-friendly packaging and supporting
              responsible sourcing practices to minimize our environmental
              footprint. Every bottle of #3 Whiskey is a testament to our
              dedication to quality, heritage, and crafsmanship. <br /> <br />
              Whether you&apos;re a seasoned connoisseur or new to the world of
              whiskey, we invite you to explore our collection and discover the
              rich flavors and stories that each bottle holds. Here&apos;s to
              the spirit of fine whiskey and the joy of sharing it with those
              who appreciate the art of well-crafted whiskey.
            </p>
            <Button
              className="inline-flex items-center px-8 py-3 shadow-lg
            hover:bg-gray-800 hover:ring-2 hover:ring-gray-950 ring-offset-2"
            >
              Read More <TbArrowUpRight className="w-5 h-5 ml-2" />
            </Button>
          </motion.div>
        </div>
        {/* Team Section */}
        <div className="lg:py-20">
          <div className="pt-8 pb-4">
            <motion.h1
              initial="offscreen"
              whileInView={"onscreen"}
              variants={titleVariants}
              className="text-4xl font-bold tracking-wider text-center
            uppercase"
            >
              Our Team
            </motion.h1>
          </div>

          <div className="grid py-8 gap-20 lg:grid-cols-3">
            <motion.div
              initial="offscreen"
              whileInView={"onscreen"}
              variants={titleVariants}
              className="border-2 border-primary"
            >
              <div
                className="p-4 text-center bg-gray-100 aspect-square
              dark:bg-tertiary -m-0.5 transition hover:-translate-y-3
              hover:-translate-x-3"
              >
                <Image
                  src="/images/annan1.jpg"
                  width={200}
                  height={200}
                  alt="team"
                  className="mx-auto rounded-full"
                />
                <h2 className="py-4 text-2xl font-semibold uppercase">
                  Prof Afful
                </h2>
                <p>CEO / Marketer</p>
              </div>
            </motion.div>
            <motion.div
              initial="offscreen"
              whileInView={"onscreen"}
              variants={desVariants}
              className="border-2 border-primary"
            >
              <div
                className="p-4 text-center bg-gray-100 aspect-square
              dark:bg-tertiary -m-0.5 transition hover:-translate-y-3
              hover:-translate-x-3"
              >
                <Image
                  src="/images/annan1.jpg"
                  width={200}
                  height={200}
                  alt="team"
                  className="mx-auto rounded-full"
                />
                <h2 className="py-4 text-2xl font-semibold uppercase">
                  Ebenezer Annan
                </h2>
                <p>Manager</p>
              </div>
            </motion.div>
            <motion.div
              initial="offscreen"
              whileInView={"onscreen"}
              variants={tagVariants}
              className="border-2 border-primary"
            >
              <div
                className="p-4 text-center bg-gray-100 aspect-square
              dark:bg-tertiary -m-0.5 transition hover:-translate-y-3
              hover:-translate-x-3"
              >
                <Image
                  src="/images/annan1.jpg"
                  width={200}
                  height={200}
                  alt="team"
                  className="mx-auto rounded-full"
                />
                <h2 className="py-4 text-2xl font-semibold uppercase">
                  Kwamina Acheapong
                </h2>
                <p>Factory Manager</p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
