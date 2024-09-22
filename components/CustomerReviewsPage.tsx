"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { desVariants, tagVariants, titleVariants } from "@/utils/animate";

const posts = [
  {
    id: 1,
    title: "Soothes my taste buds",
    href: "#",
    description:
      "Absolutely superb! The attention to detail in both flavor and presentation is evident. This is by far one of the best whiskey selections I have tasted. The complexity and smoothness are perfect. Will definitely be back for more!",
    date: "Mar 16, 2024",
    datetime: "2024-03-16",
    category: { title: "4.7", href: "#" },
    author: {
      name: "Natasha",
      location: "Acrra, Ghana",
      href: "#",
      imgUrl: "/images/annan.jpg",
    },
  },
  {
    id: 2,
    title: "Crafted with love",
    href: "#",
    description:
      "I'm not usually a whiskey drinker, but this brand has converted me. Their blends are so smooth and enjoyable. The customer service was excellent as well. A premium experience all around.",
    date: "Mar 16, 2024",
    datetime: "2024-03-16",
    category: { title: "4.9", href: "#" },
    author: {
      name: "Michael Chris",
      location: "Rhoda Islands, Usa",
      href: "#",
      imgUrl: "/images/annan1.jpg",
    },
  },
  {
    id: 3,
    title: "A great whiskey",
    href: "#",
    description:
      "From the first sip to the last, this was a whiskey to remember. The complexity and depth of flavors are unparalleled. It's clear that the people behind this company care about every aspect of their product.",
    date: "Mar 16, 2024",
    datetime: "2024-03-16",
    category: { title: "4.2", href: "#" },
    author: {
      name: "Samuel JOS",
      location: "Texas, Usa",
      href: "#",
      imgUrl: "/images/slider3.jpg",
    },
  },
];

export default function CustomerReviewsPage() {
  return (
    <section className="pt-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.h2
          initial="offscreen"
          whileInView={"onscreen"}
          variants={titleVariants}
          className="text-3xl font-bold tracking-tight sm:text-4xl text-center"
        >
          Customer Reviews
        </motion.h2>
        <motion.p
          initial="offscreen"
          whileInView={"onscreen"}
          variants={desVariants}
          className="mt-2 text-lg leading-8 text-muted-foreground text-center"
        >
          What our customers say about over product
        </motion.p>
        <motion.div
          initial="offscreen"
          whileInView={"onscreen"}
          variants={tagVariants}
          className="mx-auto mt-10 grid lg:grid-cols-3 grid-cols-1 gap-x-8
        lg:max-w-none lg:mx-0 sm:py-16 sm:mt-16 py-10 border-b 
        border-gray-200 border-t gap-y-16"
        >
          {posts.map((post) => (
            <article
              key={post.id}
              className="flex max-w-xl flex-col items-start justify-between"
            >
              <div className="flex items-center gap-x-4 text-xs">
                <time dateTime={post.datetime}>
                  <Image
                    src="/images/star.svg"
                    width={80}
                    height={5}
                    alt="star"
                  />
                </time>
                <a
                  href={post.category.href}
                  className="relative z-10 bg-primary rounded-full text-white
                px-3 py-1.5 font-medium hover:bg-gray-100 hover:text-black
                transition-all"
                >
                  {post.category.title}
                </a>
              </div>
              <div className="group relative">
                <h3
                  className="mt-3 text-lg font-semibold leading-6
                group-hover:text-gray-100"
                >
                  <a href={post.href}>
                    <span className="">{post.title}</span>
                  </a>
                </h3>
                <p
                  className="mt-5 line-clamp-3 text-sm leading-6 
                text-muted-foreground"
                >
                  {post.description}
                </p>
              </div>
              <div className="relative mt-8 flex items-center gap-x-4">
                <Image
                  src={post.author.imgUrl}
                  width={100}
                  height={100}
                  alt=""
                  className="h-10 w-10 rounded-full bg-gray-50"
                />
                <div className="text-sm leading-6">
                  <p className="font-semibold ">
                    <a href={post.author.href}>
                      <span />
                      {post.author.name}
                    </a>
                  </p>
                  <p className="text-muted-foreground">
                    {post.author.location}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
