import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className='xs:w-[250px] w-full sm:w-[200px] md:w-[240px] lg:w-[250px]'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
      transition={{ type: "spring", stiffness: 100, damping: 15 }}
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-[20px] py-5 px-8 min-h-[260px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt='service-icon'
          className='w-14 h-14 md:w-16 md:h-16 object-contain'
        />

        <h3 className='text-white text-[18px] md:text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()} className="text-center sm:text-left">
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[15px] md:text-[17px] max-w-xl lg:max-w-3xl leading-[25px] md:leading-[30px] text-center sm:text-left'
      >
        I'm passionate about creating impactful AI solutions, specializing in training and deploying machine learning models for real-world applications. With projects spanning spam detection, wine quality prediction, and custom LLaMA model training, I am dedicated to exploring AI's potential to solve complex problems. Skilled in Python and proficient in Java, I bring a versatile approach to building AI-driven applications that are ready for frontend integration.
      </motion.p>

      <div className='mt-12 sm:mt-20 flex flex-wrap gap-6 sm:gap-10 justify-center'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
