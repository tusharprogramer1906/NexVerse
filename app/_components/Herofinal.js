"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import './bg.css'

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

const container3 = (delay) => ({
  hidden: { scale:0, opacity: 0 },
  visible: {
    scale:1,
    opacity: 1,
    transition: { duration: 0.5, delay: delay },
  },
});

function Herofinal() {
  return (
<div>
<div className="h-[300px] mt-20 flex gap-8 justify-center items-end">
        <motion.div
          variants={container(0.5)}
          initial="hidden"
          animate="visible"
          className="p-7 hidden sm:flex rounded-3xl shadow-[0px_0px_400px_0px_#3182ce] w-[200px]"
        >
          <div>
            <p className="font-extrabold text-white text-4xl">Learn</p>
            <p className="font-extrabold text-secondary text-4xl">Connect</p>
            <p className="font-extrabold text-primary text-4xl">Grow</p>
          </div>
        </motion.div>
        <motion.div
          variants={container3(0)}
          initial="hidden"
          animate="visible"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.8 }}
          className="rounded-3xl p-10 shadow-[0px_0px_400px_0px_#3182ce] mb-5 hover:mx-5 transition-all"
        >
          <Image src={"/geekroom.png"} width={300} height={400} alt="profile" />
        </motion.div>
        <motion.div
          variants={container2(0.5)}
          initial="hidden"
          animate="visible"
          className="p-7 hidden sm:flex rounded-3xl shadow-[0px_0px_400px_0px_#3182ce] w-[200px]"
        >
          <div>
            <p className="font-extrabold text-white text-4xl">Code</p>
            <p className="font-extrabold text-secondary text-4xl">Create</p>
            <p className="font-extrabold text-primary text-4xl">Inspire</p>
          </div>
        </motion.div>
      </div>
      <div className=" text-white font-bold text-6xl sm:text-7xl flex flex-col justify-center items-center mb-10">
        <h1>Geek Room</h1>
        <div className="w-max">
    <h1 className="animate-typing overflow-hidden border-r-4 border-r-secondary pr-1 whitespace-nowrap">IITM</h1>
  </div>
      </div>
      
</div>
  );
}

export default Herofinal;
