"use client";
import { motion } from "framer-motion";
import { desVariants } from "@/utils/animate";
import Image from "next/image";

const Media = () => {
  return (
    <main className="container grid lg:grid-cols-2 gap-4 py-8">
      <section className="h-[40vh] xl:h-[50vh] xl:w-[40] relative">
        <video
          autoPlay
          loop
          muted
          playsInline
          controls
          className="absolute left-0 w-[90vh] h-full py-2"
        >
          <source src="/images/3 Whiskey - 1.mp4" type="video/mp4" />
        </video>
      </section>
      <div className="">
        <motion.h2
          initial="offscreen"
          whileInView={"onscreen"}
          variants={desVariants}
          className="px-12 py-4 text-3xl font-extrabold leading-tight
          lg:text-5xl inline-block text-primary"
        >
          <Image
            src="/images/header.jpg"
            height={500}
            width={800}
            alt=""
            className="rounded-md"
          />
        </motion.h2>
      </div>
    </main>
  );
};

export default Media;
