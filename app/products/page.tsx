"use client";
import Image from "next/image";
import Link from "next/link";
import { TbArrowUpRight } from "react-icons/tb";
import { motion } from "framer-motion";
import { desVariants, tagVariants } from "@/utils/animate";
import { Button } from "@/components/ui/button";

const products = [
  {
    id: "1",
    img: "/images/products.jpg",
    title: "Luxury taste in a bottle",
    price: "$12.00",
  },
  {
    id: "2",
    img: "/images/products1.jpg",
    title: "Luxury taste in a bottle",
    price: "$12.00",
  },
  {
    id: "3",
    img: "/images/products2.jpg",
    title: "Luxury taste in a bottle",
    price: "$12.00",
  },
  {
    id: "4",
    img: "/images/swiper2.jpeg",
    title: "Luxury taste in a bottle",
    price: "$12.00",
  },
  {
    id: "5",
    img: "/images/productm.jpeg",
    title: "Luxury taste in a bottle",
    price: "$12.00",
  },
  {
    id: "6",
    img: "/images/sliderm.jpeg",
    title: "Luxury taste in a bottle",
    price: "$12.00",
  },
  {
    id: "7",
    img: "/images/swiper4.jpeg",
    title: "Luxury taste in a bottle",
    price: "$12.00",
  },
  {
    id: "8",
    img: "/images/sliderqw.jpeg",
    title: "Luxury taste in a bottle",
    price: "$12.00",
  },
];

const Products = () => {
  return (
    <section>
      <div className="bg-[url('/images/header1_light.jpg')] bg-center bg-cover">
        <h1
          className="container py-64 text-6xl font-semibold tracking-widest text-center
        text-white"
        >
          Products Instock
        </h1>
      </div>
      <div className="container mx-auto">
        <motion.h1
          initial="offscreen"
          whileInView={"onscreen"}
          variants={desVariants}
          className="py-20 text-4xl font-medium lg:text-6xl text-center"
        >
          Our Products
        </motion.h1>
        {/* product grid */}
        <div
          className="grid grid-cols-1 gap-[30px] md:grid-cols-2 md:gap-[15px]
        xl:grid-cols-4"
        >
          {products.map((product) => (
            <div
              key={product.id}
              className="max-w-[580px]
              shadow-primary mx-auto xl:mx-0 group"
            >
              {/* img */}
              <motion.div
                initial="offscreen"
                whileInView={"onscreen"}
                variants={tagVariants}
                className="overflow-hidden mt-12"
              >
                <Image
                  src={product.img}
                  width={900}
                  height={500}
                  alt=""
                  className="h-[200px] w-[550px] rounded-2xl group-hover:scale-110 
                  transition-all duration-300"
                />
              </motion.div>
              {/* title & price */}
              <motion.div
                initial="offscreen"
                whileInView={"onscreen"}
                variants={tagVariants}
                className="pt-[20px] pb-[28px] px-[30px] lg:text-left 
                md:text-left text-center sm:text-center"
              >
                <h3 className="mb-[14px]">{product.title}</h3>
                <div className="text-xl font-semibold">{product.price}</div>
              </motion.div>
              <motion.div
                initial="offscreen"
                whileInView={"onscreen"}
                variants={tagVariants}
                className="lg:text-left md:text-left text-center sm:text-center"
              >
                <Button
                  className="inline-flex items-center px-8 py-3 text-white
        rounded-full shadow-lg hover:bg-gray-800 hover:ring-2 hover:
        ring-gray-950 ring-offset-2 right-3"
                >
                  <Link href="/comingsoon">Buy now </Link>{" "}
                  <TbArrowUpRight className="w-5 h-5 ml-2" />
                </Button>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
