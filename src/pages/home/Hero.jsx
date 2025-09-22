import {  Github, Instagram  } from "lucide-react";
import BlurText from "../../components/BlurText";
import TextType from "../../components/TextType";
import me from "../../assets/mee.png";
import CountUp from "../../components/Countup";
import { SiX } from "react-icons/si";

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-16 relative overflow-hidden">
      <div className="w-full max-w-6xl flex flex-col lg:flex-row justify-center lg:gap-24 items-center">
        {/* Left Side */}
        <div className="space-y-6 order-2 lg:order-1 text-center lg:text-left">
          <div className="hidden md:block">
            <BlurText
              text="Hi, I'm Prosper"
              delay={150}
              animateBy="words"
              direction="top"
              className="text-4xl md:text-5xl lg:text-6xl text-center font-bold dark:text-neutral-200 text-neutral-800 leading-tight"
            />
            <TextType
              text={
                "A full-stack developer passionate about building clean, modern and responsive web experiences and mobile applications."
              }
              className="mt-4 md:text-xl w-[600px] max-w-2xl text-neutral-600 dark:text-neutral-400"
              cursorClassName="dark:text-white text-2xl"
            />
          </div>

          <div className="flex flex-row gap-4 justify-center lg:justify-start">
            <button className="px-6 py-3 rounded-lg bg-gradient-to-br from-neutral-700 to-neutral-900 dark:from-neutral-600 dark:to-neutral-900 text-white font-medium shadow-md hover:scale-110 transition-all duration-300 text-center">
              Contact Me
            </button>
            <button className="px-6 py-3 rounded-lg border border-neutral-300 dark:border-neutral-700 text-neutral-800 dark:text-neutral-200 font-medium hover:scale-110 transition-all duration-300 text-center">
              View Profile
            </button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center lg:justify-start gap-4 pt-2">
            <a
              href="https://github.com/prospersamuel"
              target="_blank"
              className="p-2 rounded-full border border-neutral-100 dark:border-neutral-700 bg-neutral-100 shadow-md dark:bg-gradient-to-br from-neutral-700 to-neutral-900 dark:from-neutral-600 dark:to-neutral-900 hover:scale-110 duration-300 transition"
            >
              <Github
                target="_blank"
                size={20}
                className="text-neutral-700 dark:text-neutral-300"
              />
            </a>
            <a
              href="https://www.instagram.com/prosper_samuel55/"
              target="_blank"
              className="p-2 rounded-full border border-neutral-100 dark:border-neutral-700 bg-neutral-100 shadow-md dark:bg-gradient-to-br from-neutral-700 to-neutral-900 dark:from-neutral-600 dark:to-neutral-900 hover:scale-110 duration-300 transition"
            >
              <Instagram
                size={20}
                className="text-neutral-700 dark:text-neutral-300"
              />
            </a>
            <a
              href="https://x.com/ProsperSam35123"
              target="_blank"
              className="p-2 rounded-full border border-neutral-100 dark:border-neutral-700 bg-neutral-100 shadow-md dark:bg-gradient-to-br from-neutral-700 to-neutral-900 dark:from-neutral-600 dark:to-neutral-900 hover:scale-110 duration-300 transition"
            >
              <SiX
                size={20}
                className="text-neutral-700 dark:text-neutral-300"
              />
            </a>
          </div>
        </div>

        <div className="block md:hidden">
          <BlurText
            text="Hi, I'm Prosper"
            delay={150}
            animateBy="words"
            direction="top"
            className="text-4xl md:text-5xl lg:text-6xl text-center font-bold dark:text-neutral-200 text-neutral-800 leading-tight"
          />
          <TextType
            text={
              "A full-stack developer passionate about building clean, modern and responsive web experiences and mobile applications."
            }
            className="mt-4 md:text-xl bg-rerd-500 w-[300px] max-w-2xl text-neutral-600 dark:text-neutral-400"
            cursorClassName="dark:text-white text-2xl"
          />
        </div>

        {/* Right Side - Image Container */}
        <div className="dark:bg-neutral-900/70 bg-neutral-100/5 backdrop-blur-sm border-2 border-neutral-300 dark:border-neutral-700 rounded-2xl p-6 shadow-md max-w-md w-full order-1 lg:order-2 overflow-hidden">
          <div className="flex flex-col items-center space-y-5">
            {/* Image placeholder with gradient */}
            <div className="w-48 h-48 md:w-56 md:h-56 rounded-full bg-gradient-to-br from-neutral-700 to-neutral-900 dark:from-neutral-600 dark:to-neutral-900 overflow-hidden border-4 border-neutral-300 dark:border-neutral-700 shadow-md">
                <img src={me} alt="" className="select-none" onContextMenu={(e)=>e.preventDefault()} />
            </div>

            <h2 className="text-xl font-semibold text-neutral-900 dark:text-neutral-200 mt-4">
              Full Stack Developer
            </h2>
            <div className="flex justify-center gap-2">
              <span className="px-3 py-1 rounded-full text-xs bg-gradient-to-br from-neutral-700 to-neutral-900 dark:from-neutral-600 dark:to-neutral-900 text-neutral-200 dark:text-neutral-300">
                React
              </span>
              <span className="px-3 py-1 rounded-full text-xs bg-gradient-to-br from-neutral-700 to-neutral-900 dark:from-neutral-600 dark:to-neutral-900 text-neutral-200 dark:text-neutral-300">
                Node.js
              </span>
              <span className="px-3 py-1 rounded-full text-xs text-neutral-200 bg-gradient-to-br from-neutral-700 to-neutral-900 dark:from-neutral-600 dark:to-neutral-900 dark:text-neutral-300">
                Python
              </span>
              <span className="px-3 py-1 rounded-full text-xs bg-gradient-to-br from-neutral-700 to-neutral-900 dark:from-neutral-600 dark:to-neutral-900 text-neutral-200 dark:text-neutral-300">
                Flutter
              </span>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 w-full pt-4">
              <div className="text-center">
                <CountUp
                  to={12}
                  duration={1}
                  className="text-2xl font-bold text-neutral-900 dark:text-neutral-200"
                />
                <div className="text-xs text-neutral-600 dark:text-neutral-400">
                  Projects
                </div>
              </div>
              <div className="text-center">
                <CountUp
                  to={3}
                  duration={1}
                  className="text-2xl font-bold text-neutral-900 dark:text-neutral-200"
                />
                <div className="text-xs text-neutral-600 dark:text-neutral-400">
                  Years
                </div>
              </div>
              <div className="text-center">
                <CountUp
                  to={8}
                  duration={1}
                  className="text-2xl font-bold text-neutral-900 dark:text-neutral-200"
                />
                <div className="text-xs text-neutral-600 dark:text-neutral-400">
                  Clients
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
