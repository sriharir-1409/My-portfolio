import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";
import github from "../assets/github.png";
import linkedin from "../assets/linkedin.png";
import resumePDF from "../assets/SRIHARI__R-resume.pdf";

const Hero = () => {
  const [canvasSize, setCanvasSize] = useState({ width: 500, height: 500 });

  useEffect(() => {
    const updateCanvasSize = () => {
      if (window.innerWidth < 640) {
        setCanvasSize({ width: 250, height: 250 });
      } else if (window.innerWidth < 1024) {
        setCanvasSize({ width: 350, height: 350 });
      } else {
        setCanvasSize({ width: 500, height: 500 });
      }
    };

    updateCanvasSize();
    window.addEventListener("resize", updateCanvasSize);
    return () => window.removeEventListener("resize", updateCanvasSize);
  }, []);

  return (
    <section className="relative w-full h-screen mx-auto">
      <div
        className={`absolute inset-0 top-[120px] max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915EFF]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className="text-[#915EFF]">SRIHARI R</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I build and train AI models to<br className="sm:block hidden" />
            solve real-world problems.
          </p>
        </div>
      </div>

      {/* Responsive Canvas */}
      <ComputersCanvas width={canvasSize.width} height={canvasSize.height} />

      <div className="absolute bottom-3 right-5 flex space-x-4">
        <a
          href={resumePDF}
          target="_blank"
          rel="noopener noreferrer"
          className="px-8 py-3 bg-gradient-to-r from-[#915EFF] to-[#7a3fe4] text-white rounded-full font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg shadow-md shadow-indigo-500/50 border border-transparent hover:border-white"
        >
          Resume
        </a>
      </div>

      <div className="absolute bottom-3 left-5 flex space-x-4">
        <a
          href="https://github.com/sriharir-1409"
          target="_blank"
          rel="noopener noreferrer"
          className="w-10 h-10  p-1 transition duration-300 shadow-md"
        >
          <img
            src={github}
            alt="GitHub"
            className="w-full h-full object-cover"
          />
        </a>
        <a
          href="https://www.linkedin.com/in/srihari-r-614714252/"
          target="_blank"
          rel="noopener noreferrer"
          className="w-10 h-10 p-1 transition duration-300 shadow-md"
        >
          <img
            src={linkedin}
            alt="LinkedIn"
            className="w-full h-full object-cover"
          />
        </a>
      </div>


      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
