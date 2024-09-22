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
            Africa&apos;s finest Whiskey is now on sale
          </motion.h2>
          <motion.p
            initial="offscreen"
            whileInView={"onscreen"}
            variants={desVariants}
            className="text-2xl text-center font-medium pb-10 mt-5"
          >
            A message from Our CEO and Country Director & Manager.
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
              Welcome to No.3 African Whiskey, a brand born from seven years of
              dedication and passion. Established in 2023 and proudly rooted in
              Ghana, our whiskey represents the fusion of rich African heritage
              with the finest whiskey-making traditions. With the theme “Drink
              and Tourism,” we invite you to experience the unique flavors of
              our whiskey while exploring the beauty and culture of Africa.
              <br />
              <br />
              Every bottle of No.3 African Whiskey tells a story—a journey of
              craftsmanship, community, and the pursuit of excellence.
              We&apos;re excited to share this journey with you, offering a
              taste of Africa that&apos;s as bold and vibrant as the continent
              itself. Cheers, Kwaku Afful Annan Founder & CEO, No.3 African
              Whiskey.
              <br />
              <br />
              Cheers,
              <br /> Kwaku Afful Annan
              <br />
              Founder & CEO, No.3 African Whiskey
              <br /> <br />
              At No.3 African Whiskey, our mission is to create a truly African
              whiskey that celebrates the spirit and resilience of our people.
              As the Country Director and Manager, we are proud to oversee the
              production of a brand that does not only delivers quality but also
              highlights Ghana&apos;s rich heritage and craftsmanship.
              <br /> <br />
              Our theme, “Drink and Tourism,” is a gateway to exploring the best
              of Africa through every sip. We are excited to share this journey
              with you and look forward to introducing the world to the
              exceptional taste and experience that No.3 African Whiskey offers.
              <br /> <br />
              Cheers, <br />
              Ebenezer Kweipeh Annan
              <br />
              Country Director and Manager, No.3 African Whiskey.
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

          <div className="grid py-8 gap-20 lg:grid-cols-2">
            <motion.div
              initial="offscreen"
              whileInView={"onscreen"}
              variants={titleVariants}
              className=""
            >
              <div
                className="p-4 text-center aspect-square
              dark:bg-tertiary -m-0.5 transition hover:-translate-y-3
              hover:-translate-x-3"
              >
                <Image
                  src="/images/prof1.jpg"
                  width={200}
                  height={200}
                  alt=""
                  className="mx-auto rounded-full"
                />
                <h2 className="py-4 text-2xl font-semibold uppercase">
                  Kwaku Afful Annan
                </h2>
                <p>CEO / Founder</p>
              </div>
            </motion.div>
            <motion.div
              initial="offscreen"
              whileInView={"onscreen"}
              variants={desVariants}
              className=""
            >
              <div
                className="p-4 text-center  aspect-square
              dark:bg-tertiary -m-0.5 transition hover:-translate-y-3
              hover:-translate-x-3"
              >
                <Image
                  src="/images/attaquaye.jpg"
                  width={200}
                  height={200}
                  alt=""
                  className="mx-auto rounded-full"
                />
                <h2 className="py-4 text-2xl font-semibold uppercase">
                  Ebenezer Kweipeh Annan
                </h2>
                <p>Country Director and Manager</p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
