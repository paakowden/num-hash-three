"use client";

import { TbArrowUpRight } from "react-icons/tb";
import { Button } from "./ui/button";

import { motion } from "framer-motion";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import Image from "next/image";
import { desVariants, tagVariants, titleVariants } from "@/utils/animate";
import Link from "next/link";

export default function CatalogueSwiper() {
  return (
    <div className="py-8 lg:py-16 text-center">
      <div className="container grid pb-8 lg:grid-cols-1">
        <div className="text-center">
          <motion.h1
            initial="offscreen"
            whileInView={"onscreen"}
            variants={titleVariants}
            className="py-4 text-4xl font-medium lg:text-4xl lg:py-0 text-center"
          >
            LUXURY IN A GLASS
          </motion.h1>
          <motion.h2
            initial="offscreen"
            whileInView={"onscreen"}
            variants={desVariants}
            className="pb-6 text-xl font-bold tracking-wider mt-5
            text-center"
          ></motion.h2>
          <p className="text-center text-muted-foreground">
            We specialize in sourcing, aging, and bottling some of the finest
            whiskeys, delivering unique taste and unforgettable experiences in
            every bottle. Our team of experts travel far and wide to select only
            the best barrels from renowned distilleries, ensuring quality and
            character are at the heart of every batch.
          </p>
        </div>
        <motion.div
          initial="offscreen"
          whileInView={"onscreen"}
          variants={tagVariants}
          className="grid grid-cols-2 gap-x-8 text-center"
        ></motion.div>

        <Link href="/gallery">
          <Button
            className="inline-flex items-center px-8 py-3 mt-10 text-white
          rounded-full shadow-lg hover:bg-gray-800 hover:ring-2 
          hover:ring-gray-950 ring-offset-2"
          >
            View Gallery <TbArrowUpRight className="w-5 h-5 ml-2" />
          </Button>
        </Link>
      </div>
      {/* Swiper Section */}
      <Swiper
        direction={"horizontal"}
        slidesPerView={1}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        modules={[Autoplay]}
      >
        <SwiperSlide>
          <Image
            src="/images/3Whiskey_10.jpg"
            width={520}
            height={320}
            alt="Swiper"
            className="w-full rounded-2xl h-[310px]"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="/images/3Whiskey_7.jpg"
            width={520}
            height={220}
            alt="Swiper"
            className="w-full rounded-2xl h-[310px]"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="/images/3Whiskey_5.jpg"
            width={520}
            height={220}
            alt="Swiper"
            className="w-full rounded-2xl h-[310px]"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="/images/3Whiskey_3.jpg"
            width={520}
            height={220}
            alt="Swiper"
            className="w-full rounded-2xl h-[310px]"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="/images/3Whiskey_1.jpg"
            width={520}
            height={220}
            alt="Swiper"
            className="w-full rounded-2xl h-[310px]"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
