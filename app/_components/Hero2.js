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

function Hero2() {
  return (
    <div>
      <div className=" mt-20 flex gap-6 justify-center items-end">
        <motion.div
          variants={container2(0.5)}
          initial="hidden"
          animate="visible"
          className="p-7 rounded-3xl shadow-[0px_0px_400px_0px_#3182ce] w-[200px]"
        >
          <div>
            <p className="font-extrabold text-white text-4xl">Learn</p>
            <p className="font-extrabold text-secondary text-4xl">Connect</p>
            <p className="font-extrabold text-primary text-4xl">Grow</p>
          </div>
        </motion.div>
        <motion.div
          variants={container2(0.5)}
          initial="hidden"
          animate="visible"
          className="rounded-3xl p-10 shadow-[0px_0px_400px_0px_#3182ce] mb-5"
        >
          <Image src={"/geekroom.png"} width={300} height={400} alt="profile" />
        </motion.div>
        <motion.div
          variants={container2(0.5)}
          initial="hidden"
          animate="visible"
          className="p-7 rounded-3xl shadow-[0px_0px_400px_0px_#3182ce] w-[200px]"
        >
          <div>
            <p className="font-extrabold text-white text-4xl">Code</p>
            <p className="font-extrabold text-secondary text-4xl">Create</p>
            <p className="font-extrabold text-primary text-4xl">Inspire</p>
          </div>
        </motion.div>
      </div>
      <div className=" text-white font-extrabold text-7xl font-mono flex flex-col justify-center items-center">
        <h1>Geek Room</h1>
        <h1>IITM</h1>
      </div>
      {/* <div className=" text-white font-extrabold text-5xl font-mono flex flex-col justify-center items-center mt-24 ">
        <div className="rounded-full bg-gradient-to-r from-secondary via-orange-300 to-primary p-1">
          <div className="rounded-full bg-black py-5 px-56">
            What is Geek Room?
          </div>
        </div>
      </div> */}

    </div>
  );
}

export default Hero2;
