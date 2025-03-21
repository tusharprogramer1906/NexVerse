"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: delay },
  },
});

const container2 = (delay) => ({
  hidden: { x: 100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: delay },
  },
});

function Hero() {
  return (
    <div className=" mt-16 flex flex-col md:flex-row justify-center items-center">
      <div className=" flex flex-col p-5 md:w-[50%]">
        <motion.div
          variants={container(0.5)}
          initial="hidden"
          animate="visible"
          className="font-extrabold text-white text-8xl ml-10"
        >
          Learn
        </motion.div>
        <motion.div
          variants={container2(0.5)}
          initial="hidden"
          animate="visible"
          className="font-extrabold text-secondary text-8xl ml-24"
        >
          Connect
        </motion.div>
        <motion.div
          variants={container(0.5)}
          initial="hidden"
          animate="visible"
          className="font-extrabold text-primary text-8xl"
        >
          Grow...
        </motion.div>
      </div>
      <motion.div
        variants={container2(0.5)}
        initial="hidden"
        animate="visible"
        className=" rounded-full py-12 shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)]"
      >
        <Image
          src={"/geekroom.png"}
          width={330}
          height={400}
          alt="profile"
        />
      </motion.div>
    </div>
    );
}

export default Hero;
