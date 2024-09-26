"use client";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";
import { motion } from "framer-motion";
import { desVariants } from "@/utils/animate";

const products = [
  {
    id: "1",
    img: "/images/prodhome.jpg",
    title: "Luxury taste in a bottle",
    price: "$15.00",
  },
  {
    id: "2",
    img: "/images/prodhome1.jpg",
    title: "Luxury taste in a bottle",
    price: "$15.00",
  },
  {
    id: "3",
    img: "/images/prodhome2.jpg",
    title: "Luxury taste in a bottle",
    price: "$15.00",
  },
  {
    id: "4",
    img: "/images/prodhome3.jpg",
    title: "Luxury taste in a bottle",
    price: "$15.00",
  },
];

export default function Products() {
  return (
    <section className="py-4 lg:py-[-4px]">
      <div className="container mx-auto">
        <motion.h1
          initial="offscreen"
          whileInView={"onscreen"}
          variants={desVariants}
          className="py-4 text-4xl font-medium lg:text-6xl text-center"
        >
          Our Products
        </motion.h1>
        {/* product grid */}
        <div className="container grid lg:grid-cols-4 gap-8 py-8 cursor-pointer">
          {products.map((product) => (
            <div
              key={product.id}
              className="relative overflow-hidden 
          rounded-xl group"
            >
              <div>
                <Image
                  src={product.img}
                  width={480}
                  height={380}
                  alt=""
                  className="w-full"
                />
              </div>
              <div
                className="absolute bottom-0 right-0 bg-white/90
            dark:bg-black/40 flex-col items-center justify-end w-86
            gap-32 p-12 text-xl transition duration-300 ease-in-out
            translate-y-full from-transparent to-black group-hover:translate-y-0"
              >
                <h1 className="text-2xl font-semibold">{product.title}</h1>
                <p className="py-4">{product.price}</p>
                <Button>
                  <Link href="/sales">Buy now</Link>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
