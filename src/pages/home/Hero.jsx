import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Github, Instagram } from "lucide-react";
import BlurText from "../../components/BlurText";
import TextType from "../../components/TextType";
import CountUp from "../../components/Countup";
import { SiX } from "react-icons/si";
import medark from "../../assets/medark.png";
import melight from "../../assets/melight.png";
import { useApp } from "../../context/Appcontext";
import { Link } from "react-router-dom";
import { scrollToTop } from "../Layout/Layout";

export function Hero() {
  const { theme } = useApp();
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, threshold: 0.2 });

  // Simple and fast animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        duration: 0.4
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    },
    hover: {
      y: -5,
      scale: 1.02,
      transition: {
        duration: 0.2
      }
    }
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    },
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.2
      }
    }
  };
  

  return (
    <motion.section
      ref={sectionRef}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={containerVariants}
      className="min-h-screen flex items-center justify-center px-6 py-16 relative overflow-hidden"
    >
      <div className="w-full max-w-6xl flex flex-col lg:flex-row justify-center lg:gap-24 items-center">
        {/* Left Side */}
        <motion.div 
          className="space-y-6 order-2 lg:order-1 text-center lg:text-left"
          variants={containerVariants}
        >
          <motion.div className="hidden lg:block" variants={itemVariants}>
            <BlurText
              text="Hi, I'm Prosper"
              delay={150}
              animateBy="words"
              direction="top"
              className="text-4xl lg:text-6xl text-center font-bold dark:text-neutral-200 text-neutral-900/95 leading-tight"
            />
            <motion.div variants={itemVariants}>
              <TextType
                text={
                  "A full-stack developer passionate about building clean, modern and responsive web experiences and mobile applications."
                }
                className="mt-4 lg:text-xl w-[600px] max-w-2xl text-neutral-600 dark:text-neutral-400"
                cursorClassName="dark:text-white text-2xl"
              />
            </motion.div>
          </motion.div>

          <motion.div 
            className="flex flex-row gap-4 justify-center lg:justify-start"
            variants={itemVariants}
          >
            <a 
              href="mailto:prospersamuel100@gmail.com" 
              className="px-6 py-3 rounded-lg bg-gradient-to-br from-neutral-700 to-neutral-900 dark:from-neutral-600 dark:to-neutral-900 text-white font-medium shadow-md hover:scale-105 transition-all duration-200 text-center"
            >
              Contact Me
            </a>
            <Link 
              to={'/profile'} 
              onClick={() => scrollToTop()} 
              className="px-6 py-3 rounded-lg border border-neutral-300 dark:border-neutral-700 text-neutral-700 dark:text-neutral-200 font-medium hover:scale-105 transition-all duration-200 text-center"
            >
              View Profile
            </Link>
          </motion.div>

          {/* Social Links */}
          <motion.div 
            className="flex justify-center lg:justify-start gap-4 pt-2"
            variants={itemVariants}
          >
            <a
              href="https://github.com/prospersamuel"
              target="_blank"
              className="p-2 rounded-full border border-neutral-100 dark:border-neutral-700 bg-neutral-100 shadow-md dark:bg-gradient-to-br from-neutral-700 to-neutral-900 dark:from-neutral-600 dark:to-neutral-900 hover:scale-110 duration-200 transition"
            >
              <Github
                size={20}
                className="text-neutral-700 dark:text-neutral-300"
              />
            </a>
            <a
              href="https://www.instagram.com/prosper_samuel55/"
              target="_blank"
              className="p-2 rounded-full border border-neutral-100 dark:border-neutral-700 bg-neutral-100 shadow-md dark:bg-gradient-to-br from-neutral-700 to-neutral-900 dark:from-neutral-600 dark:to-neutral-900 hover:scale-110 duration-200 transition"
            >
              <Instagram
                size={20}
                className="text-neutral-700 dark:text-neutral-300"
              />
            </a>
            <a
              href="https://x.com/ProsperSam35123"
              target="_blank"
              className="p-2 rounded-full border border-neutral-100 dark:border-neutral-700 bg-neutral-100 shadow-md dark:bg-gradient-to-br from-neutral-700 to-neutral-900 dark:from-neutral-600 dark:to-neutral-900 hover:scale-110 duration-200 transition"
            >
              <SiX
                size={20}
                className="text-neutral-700 dark:text-neutral-300"
              />
            </a>
          </motion.div>
        </motion.div>

        <motion.div className="block lg:hidden" variants={itemVariants}>
          <BlurText
            text="Hi, I'm Prosper"
            delay={150}
            animateBy="words"
            direction="top"
            className="text-4xl lg:text-6xl text-center font-bold dark:text-neutral-200 text-neutral-800 leading-tight"
          />
          <TextType
            text={
              "A full-stack developer passionate about building clean, modern and responsive web experiences and mobile applications."
            }
            className="mt-4 lg:text-xl w-[300px] max-w-2xl text-neutral-600 dark:text-neutral-400"
            cursorClassName="dark:text-white text-2xl"
          />
        </motion.div>

        {/* Right Side - Enhanced Card */}
        <motion.div
          variants={cardVariants}
          whileHover="hover"
          className="dark:bg-neutral-900/70 bg-neutral-100/5 backdrop-blur-sm border-2 border-neutral-300 dark:border-neutral-700 rounded-2xl p-6 shadow-md max-w-md w-full order-1 lg:order-2 overflow-hidden"
        >
          <div className="flex flex-col items-center space-y-5">
            {/* Enhanced Image */}
            <motion.div
              variants={imageVariants}
              whileHover="hover"
              className="w-48 h-48 lg:w-56 lg:h-56 rounded-full bg-gradient-to-br from-neutral-700 to-neutral-900 dark:from-neutral-600 dark:to-neutral-900 overflow-hidden border-2 border-neutral-400 dark:border-neutral-700 shadow-md"
            >
              <motion.img
                src={theme === 'dark' ? medark : melight}
                className="select-none w-full h-full object-cover"
                onContextMenu={(e) => e.preventDefault()}
                alt="Prosper Samuel"
              />
            </motion.div>

            <motion.h2 
              className="text-xl font-semibold text-neutral-900 dark:text-neutral-200 mt-4"
              variants={itemVariants}
            >
              Full Stack Developer
            </motion.h2>
            
            <motion.div 
              className="flex justify-center gap-2 flex-wrap"
              variants={containerVariants}
            >
              {["React", "Node.js", "Python", "Flutter"].map((tech, index) => (
                <motion.span
                  key={tech}
                  variants={itemVariants}
                  className="px-3 py-1 rounded-full text-xs border border-neutral-100 dark:border-neutral-700 bg-neutral-100 shadow-md dark:bg-gradient-to-br from-neutral-700 to-neutral-900 dark:from-neutral-600 dark:to-neutral-900 hover:scale-105 duration-200 transition"
                >
                  {tech}
                </motion.span>
              ))}
            </motion.div>

            {/* Stats */}
            <motion.div 
              className="grid grid-cols-3 gap-4 w-full pt-4"
              variants={containerVariants}
            >
              {[
                { number: 12, label: "Projects" },
                { number: 3, label: "Years" },
                { number: 8, label: "Clients" }
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  variants={itemVariants}
                  className="text-center"
                >
                  <CountUp
                    to={stat.number}
                    duration={1}
                    className="text-2xl font-bold text-neutral-900 dark:text-neutral-200"
                  />
                  <div className="text-xs text-neutral-600 dark:text-neutral-400">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}