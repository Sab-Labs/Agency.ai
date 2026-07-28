import React from "react";
import assets from "../assets/assets";
import { motion } from "motion/react";

const Hero = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      id="hero"
      className="scroll-mt-20 flex flex-col items-center justify-center gap-6 py-16 sm:py-24 px-4 sm:px-12 lg:px-24 xl:px-40 text-center dark:text-white overflow-hidden relative isolate"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: true }}
        className="inline-flex items-center gap-2 border border-gray-300 p-1.5 pr-4 rounded-full"
      >
        <img className="w-20" src={assets.group_profile} alt="Group Profile" />
        <p className="text-sm font-medium">trusted by 100k+ users</p>
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        viewport={{ once: true }}
        className="text-4xl sm:text-5xl md:text-6xl xl:text-[84px] font-medium xl:leading-[95px] max-w-5xl"
      >
        Turning imagination into <span className="text-blue-500">Digital</span>{" "}
        impact
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        viewport={{ once: true }}
        className="font-semibold w-[40vw] max-sm:w-full"
      >
        We help businesses transform their ideas into powerful digital
        solutions.
      </motion.p>

      <div className="relative w-full flex justify-center">
        <motion.img
          initial={{ opacity: 0, y: 30, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          src={assets.hero_img}
          alt="Hero Image"
          className="w-full max-w-6xl"
        />
        <motion.img
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          src={assets.bgImage1}
          alt="Background Image"
          className="absolute -top-40 -right-40 sm:-top-100 sm:right-70 z-[-1] dark:hidden pointer-events-none"
        />
      </div>
    </motion.div>
  );
};

export default Hero;
