"use client";
import { desVariants, tagVariants } from "@/utils/animate";
import { motion } from "framer-motion";

const page = () => {
  return (
    <div className="px-6 py-24 sm:py-32 lg:px-8">
      <div className="mx-auto max-w-2xl text-center">
        <motion.h2
          initial="offscreen"
          whileInView={"onscreen"}
          variants={desVariants}
          className="text-3xl font-bold tracking-tight sm:text-4xl"
        >
          Contact Sales
        </motion.h2>
      </div>
      <br />
      <motion.h3
        initial="offscreen"
        whileInView={"onscreen"}
        variants={tagVariants}
        className="items-center text-center text-xl"
      >
        Line 1: (+233594346534)
      </motion.h3>
      <br />
      <motion.h3
        initial="offscreen"
        whileInView={"onscreen"}
        variants={tagVariants}
        className="items-center text-center text-xl"
      >
        Line 2: (+233245365939)
      </motion.h3>
      <br />
      <motion.h3
        initial="offscreen"
        whileInView={"onscreen"}
        variants={tagVariants}
        className="items-center text-center text-xl"
      >
        {""}Email: info@3whiskey.com
      </motion.h3>
    </div>
  );
};

export default page;
