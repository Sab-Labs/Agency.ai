import React from "react";
import assets from "../assets/assets";
import Title from "./Title";
import ServiceCard from "./ServiceCard";
import { motion } from "motion/react";

const Services = () => {

  const servicesData = [
    {
      title: "Advertising and Marketing",
      description:
        "We build responsive and scalable web applications using modern technologies.",
      icon: assets.ads_icon,
    },
    {
      title: "content writing",
      description:
        "We create user-friendly mobile applications for both Android and iOS platforms.",
      icon: assets.content_icon ,
    },
    {
      title: "Content Creation",
      description:
        "We design intuitive and engaging user interfaces that enhance the user experience.",
      icon: assets.marketing_icon,
    },
    {
      title: "Digital Marketing",
      description:
        "We help businesses grow their online presence through effective digital marketing strategies.",
      icon: assets.social_icon,
    },
  ]

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      id="services"
      className="scroll-mt-20 relative flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-24 xl:px-40 py-16 sm:py-24 text-gray-700 dark:text-white overflow-hidden"
    >
      <motion.img
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        src={assets.bgImage2}
        alt=""
        className="absolute -top-110 -left-70 -z-1 dark:hidden pointer-events-none"
      />
      <Title
        title="How Can We Help You?"
        desc="We offer a wide range of services to help your business succeed in the digital world."
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full mt-4">
        {servicesData.map((service, index) => (
          <ServiceCard key={index} service={service} index={index} />
        ))}
      </div>
    </motion.div>
  );
};

export default Services;

