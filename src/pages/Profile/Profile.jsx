import { useRef, useState, useEffect } from "react";
import { Calendar, ChevronRight, Earth } from "lucide-react";
import medark from "../../assets/medark.png";
import melight from "../../assets/melight.png";
import BlurText from "../../components/BlurText";
import {
  SiFacebook,
  SiGithub,
  SiInstagram,
  SiUpwork,
  SiX,
} from "react-icons/si";
import CalendlyScheduler from "../../components/CalendlyScheduler";
import { useApp } from "../../context/Appcontext";
import { motion } from "framer-motion";
import TextType from "../../components/TextType";

export default function Profile() {
  const sectionRefs = {
    introduction: useRef(null),
    work: useRef(null),
    studies: useRef(null),
    skills: useRef(null),
    services: useRef(null),
  };

  const [activeSection, setActiveSection] = useState("introduction");

  // Intersection Observer to track active section
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-50% 0px -50% 0px", // Trigger when section is in center
      threshold: 0,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, observerOptions);

    // Observe all sections
    Object.values(sectionRefs).forEach((ref) => {
      if (ref.current) {
        observer.observe(ref.current);
      }
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (sectionId) => {
    const section = sectionRefs[sectionId]?.current;
    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }
  };

  const calendlyRef = useRef();

  const tabs = [
    { id: "introduction", label: "Introduction" },
    { id: "work", label: "Work Experience" },
    { id: "studies", label: "Studies" },
    { id: "skills", label: "Technical Skills" },
    { id: "services", label: "Services" },
  ];

  const { theme } = useApp();

  return (
    <>
      <div className="min-h-screen text-neutral-700 dark:text-neutral-200 flex">
        {/* Sidebar */}
        <div className="absolute flex w-full justify-between p-4 items-center space-x-3">
          <p className="text-xs lg:hidden lg:text-sm mt-2 flex gap-1 lg:gap-2 items-center">
            <Earth className="text-neutral-600 w-5 h-5" /> Africa/Abuja
          </p>
          <div className="mt-2 flex lg:hidden items-center justify-center lg:flex-row gap-2">
            <div className="px-1.5 py-0.5 lg:px-3 lg:py-1 text-xs rounded-lg border border-neutral-300 dark:border-neutral-700">
              English
            </div>
          </div>
        </div>

        <aside className="lg:items-center items-start w-[14%] lg:w-[35%] justify-between h-screen flex px-3 lg:p-6">
          <nav className="space-y-6 hidden lg:block font-semibold">
            {tabs.map((tab, index) => (
              <motion.button
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                key={tab.id}
                onClick={() => scrollToSection(tab.id)}
                className={`block transition-all duration-300 ${
                  activeSection === tab.id
                    ? "ml-3 text-neutral-700 dark:text-neutral-200"
                    : "text-neutral-600 dark:text-neutral-400 hover:ml-3 hover:text-neutral-700 dark:hover:text-neutral-200"
                }`}
              >
                <span className="text-neutral-400 dark:text-neutral-600">
                  —
                </span>{" "}
                {tab.label}
              </motion.button>
            ))}
          </nav>

          {/* Profile + language */}
          <motion.div
              initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
           className="flex lg:-mt-32 mt-24 flex-col gap-0 lg:gap-3 items-start lg:items-center">
            <div className="lg:w-40 lg:h-40 w-10 h-10 rounded-full bg-gradient-to-br from-neutral-700 to-neutral-900 dark:from-neutral-600 dark:to-neutral-900 overflow-hidden border border-neutral-400 dark:border-neutral-700 shadow-md">
              <img
                src={theme === "dark" ? medark : melight}
                className="select-none"
                onContextMenu={(e) => e.preventDefault()}
                alt=""
              />
            </div>
            <p className="text-xs hidden lg:text-sm lg:flex gap-1 lg:gap-2 items-center">
              <Earth className="text-neutral-600 w-5 h-5" /> Africa/Abuja
            </p>
            <div className="mt-2 lg:flex hidden items-center justify-center lg:flex-row gap-2">
              <div className="px-1.5 py-0.5 lg:px-3 lg:py-1 text-xs rounded-lg border border-neutral-300 dark:border-neutral-700">
                English
              </div>
            </div>
          </motion.div>
        </aside>

        {/* Main content */}
        <main className="flex-1 p-5 lg:p-20 w-[65%] mt-20 lg:mt-2 overflow-auto h-screen">
          {/* Updated Schedule a call button with Calendly */}
          <button
            onClick={() => calendlyRef.current?.openModal()}
            className="flex items-center mb-6 lg:-ml-2 -m-0 pl-4 pr-0.5 lg:pr-1 border border-neutral-100 dark:border-neutral-700 bg-neutral-100 shadow-md dark:bg-gradient-to-br from-neutral-700 to-neutral-900 dark:from-neutral-700 dark:to-neutral-900 hover:scale-110 duration-300 rounded-full w-fit py-0.5 lg:py-1.5 space-x-4 transition-all cursor-pointer"
          >
            <Calendar className="lg:size-5 size-4 text-neutral-20d0" />
            <span className="text-sm lg:text-base text-neutral-20d0">
              Schedule a call
            </span>
            <div className="rounded-full border p-0.5 flex justify-center items-center border-neutral-600">
              <ChevronRight className="size-4 lg:size-5 text-neutrdal-200" />
            </div>
          </button>

          {/* Hidden Calendly trigger */}
          <div className="hidden">
            <CalendlyScheduler ref={calendlyRef} />
          </div>

          <div className="mb-8">
            <BlurText
              text="Prosper Samuel"
              delay={150}
              animateBy="words"
              direction="top"
              className="text-3xl lg:text-5xl text-center font-bold dark:text-neutral-200 text-neutral-800 leading-tight"
            />
             <TextType
             loop={true}
                text={['Full Stack Developer', 'Graphics Designer', 'App Developer', 'UI/UX Designer', 'Wordpress Website Developer','Search Engine Optimization']}
                    className="lg:text-xl text-lg lg:mt-1 mt-0.5 mb-5 text-neutral-900/85 dark:text-neutral-300"
                    cursorClassName="dark:text-white text-2xl"
                  />
            <div className="flex space-x-2 lg:space-x-3 overflow-x-auto -ml-1">
              {[
                {
                  name: "Github",
                  icon: <SiGithub />,
                  link: "https://github.com/prospersamuel",
                },
                {
                  name: "Twitter",
                  icon: <SiX />,
                  link: "https://x.com/ProsperSam35123",
                },
                {
                  name: "Facebook",
                  icon: <SiFacebook />,
                  link: "https://web.facebook.com/profile.php?id=100085870614623",
                },
                {
                  name: "Instagram",
                  icon: <SiInstagram />,
                  link: "https://www.instagram.com/prosper_samuel55/",
                },
              ].map((social, i) => (
                <motion.a
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.3 }}
                  viewport={{ once: true }}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  key={i}
                  className="flex items-center mb-6 px-2 border border-neutral-100 dark:border-neutral-700 bg-neutral-100 shadow-md dark:bg-gradient-to-br from-neutral-700 to-neutral-900 dark:from-neutral-700 dark:to-neutral-900 hover:scale-110 duration-300 transition rounded-full w-fit py-1 gap-1.5"
                >
                  <span className="size-3 w-fit h-fit">{social.icon}</span>
                  <span className="text-xs">{social.name}</span>
                </motion.a>
              ))}
            </div>
          </div>

          <motion.section
            id="introduction"
            ref={sectionRefs.introduction}
            className="mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-bold mb-4">Introduction</h2>
            <p className="text-neutral-600 dark:text-neutral-400 text-sm">
              I'm Prosper, a frontend developer passionate about building sleek,
              functional, and scalable digital products. My focus is on creating
              user-friendly interfaces that don't just look good but solve real
              business problems. I care about performance, accessibility, and
              experiences that keep users engaged.
            </p>
          </motion.section>

          <div className="h-px w-full mb-8 bg-gradient-to-r from-transparent via-neutral-400 to-transparent dark:via-neutral-700"></div>

          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            viewport={{ once: true }}
            id="work"
            ref={sectionRefs.work}
            className="mb-8"
          >
            <h2 className="text-2xl font-bold mb-4">Work Experience</h2>
            <p className="text-neutral-600 dark:text-neutral-400 text-sm mb-4">
              I've worked on projects ranging from personal portfolios to
              full-scale apps with authentication, payment integration, referral
              systems, and dashboards. My work is centered on helping clients
              grow their businesses through reliable, modern solutions.
            </p>
            <ul className="list-disc  space-y-2 text-neutral-600 dark:text-neutral-400 text-sm">
              {[
                "Built a crypto-style dashboard with live balance growth, deposits, and withdrawals using Firebase.",
                "Designed and developed a referral tracking MVP for eCommerce websites without user signups.",
                "Integrated payment verification and webhook handling with Flutterwave for seamless transactions.",
              ].map((exp, i) => (
                <motion.li
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                >
                  {exp}
                </motion.li>
              ))}
            </ul>
          </motion.section>

          <div className="h-px w-full mb-8 bg-gradient-to-r from-transparent via-neutral-400 to-transparent dark:via-neutral-700"></div>

          <section id="studies" ref={sectionRefs.studies} className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Studies</h2>
            <div className="space-y-4">
              {[
                {
                  title: "University of Abuja",
                  body: "Studied Computer Science and built a foundation in problem-solving and programming.",
                },
                {
                  title: "Build the Future",
                  body: "Learned digital marketing and personal branding to better understand how technology drives growth.",
                },
              ].map((stud, i) => (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                >
                  <h3 className="font-semibold">{stud.title}</h3>
                  <p className="text-neutral-600 dark:text-neutral-400 text-sm">
                    {stud.body}
                  </p>
                </motion.div>
              ))}
            </div>
          </section>

          <div className="h-px w-full mb-8 bg-gradient-to-r from-transparent via-neutral-400 to-transparent dark:via-neutral-700"></div>

          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            viewport={{ once: true }}
            id="skills"
            ref={sectionRefs.skills}
            className="mb-8"
          >
            <h2 className="text-2xl font-bold mb-4">Technical Skills</h2>
            <p className="text-neutral-600 dark:text-neutral-400 text-sm">
              React, Tailwind, Firebase, Node.js, Python, Flutter, WordPress,
              Git. I also focus on design systems, authentication flows, AI
              chatbots, referral systems, and payment integrations.
            </p>
          </motion.section>

          <div className="h-px w-full mb-8 bg-gradient-to-r from-transparent via-neutral-400 to-transparent dark:via-neutral-700"></div>

          <section id="services" ref={sectionRefs.services}>
            <h2 className="text-2xl font-bold mb-4">Services</h2>
            <div className="space-y-4">
              {[
                {
                  title: "Web Development",
                  body: "I build modern, responsive websites and dashboards with both code and non-coding methods that perform well, scale easily, and help you reach your business goals.",
                },
                {
                  title: "App Development",
                  body: "Cross-platform mobile and web apps tailored to your business needs, built with scalability and performance in mind.",
                },
                {
                  title: "WhatsApp CRM Chatbots",
                  body: "Automate customer support, collect leads, and boost sales with custom WhatsApp chatbot solutions that integrate directly with your workflows.",
                },
                {
                  title: "UI/UX Design",
                  body: "Clean, user-friendly designs that improve engagement, conversions, and overall product experience.",
                },
                {
                  title: "Search Engine Optimization (SEO)",
                  body: "Get found faster. I apply SEO best practices to improve search rankings, drive organic traffic, and maximize visibility for your brand.",
                },
              ].map((service, i) => (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                >
                  <h3 className="font-semibold">{service.title}</h3>
                  <p className="text-neutral-600 dark:text-neutral-400 text-sm">
                    {service.body}
                  </p>
                </motion.div>
              ))}
            </div>
          </section>
        </main>
      </div>
      <div className="h-px w-full mb-12 bg-gradient-to-r from-transparent via-neutral-400 to-transparent dark:via-neutral-700"></div>
    </>
  );
}
