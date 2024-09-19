"use client";
import { motion } from "framer-motion";
import { desVariants } from "@/utils/animate";

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
          <source src="/images/video1.mp4" type="video/mp4" />
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
          We will launch our product at Afrikiko night club on the 26th of
          september, 2024. All are cordially invited. Attair, Dress to kill.
        </motion.h2>
      </div>
    </main>
  );
};

export default Media;
