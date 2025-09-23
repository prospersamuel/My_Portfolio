import { useRef } from 'react';
import { Calendar, ChevronRight, Earth } from "lucide-react";
import medark from "../../assets/medark.png";
import melight from "../../assets/melight.png";
import BlurText from "../../components/BlurText";
import { SiFacebook, SiGithub, SiInstagram, SiUpwork, SiX } from 'react-icons/si';
import CalendlyScheduler from "../../components/CalendlyScheduler"; 
import { useApp } from '../../context/Appcontext';

export default function Profile() {
  const sectionRefs = {
    introduction: useRef(null),
    work: useRef(null),
    studies: useRef(null),
    skills: useRef(null),
    services: useRef(null)
  };

  const scrollToSection = (sectionId) => {
    const section = sectionRefs[sectionId]?.current;
    if (section) {
      section.scrollIntoView({ 
        behavior: 'smooth',
        block: 'center',
      });
    }
  };

  const calendlyRef = useRef();

  const tabs = [
    { id: 'introduction', label: 'Introduction' },
    { id: 'work', label: 'Work Experience' },
    { id: 'studies', label: 'Studies' },
    { id: 'skills', label: 'Technical Skills' },
    { id: 'services', label: 'Services' }
  ];

    const { theme } = useApp();
  

  return (
    <>
      <div className="min-h-screen text-neutral-700 dark:text-neutral-200 flex">
        {/* Sidebar */}
        <div className="absolute flex w-full justify-between p-4 items-center space-x-3">
          <p className="text-xs md:hidden md:text-sm mt-2 flex gap-1 md:gap-2 items-center">
            <Earth className="text-neutral-600 w-5 h-5" /> Africa/Abuja
          </p>
          <div className="mt-2 flex md:hidden items-center justify-center md:flex-row gap-2">
            <div className="px-1.5 py-0.5 md:px-3 md:py-1 text-xs rounded-lg border border-neutral-300 dark:border-neutral-700">
              English
            </div>
            <div className="px-1.5 py-0.5 md:px-3 md:py-1 rounded-lg text-xs border border-neutral-300 dark:border-neutral-700">
              French
            </div>
          </div>
        </div>
        
        <aside className="md:items-center items-start w-[14%] md:w-[35%] justify-between h-screen flex px-3 md:p-6">
          <nav className="space-y-6 hidden md:block font-semibold">
            {tabs.map((tab) => (
              <button 
                key={tab.id}
                onClick={() => scrollToSection(tab.id)}
                className="block text-neutral-600 dark:text-neutral-400 hover:text-neutral-800 dark:hover:text-neutral-200 transition-colors duration-200"
              >
                <span className="text-neutral-400 dark:text-neutral-600">—</span>{" "}
                {tab.label}
              </button>
            ))}
          </nav>

          {/* Profile + language */}
          <div className="flex md:-mt-32 mt-24 flex-col gap-0 md:gap-3 items-start md:items-center">
            <div className="md:w-40 md:h-40 w-10 h-10 rounded-full bg-gradient-to-br from-neutral-700 to-neutral-900 dark:from-neutral-600 dark:to-neutral-900 overflow-hidden border border-neutral-400 dark:border-neutral-700 shadow-md">
              <img
                src={theme === 'dark' ? medark : melight}
                className="select-none"
                onContextMenu={(e) => e.preventDefault()}
                alt=""
              />
            </div>
            <p className="text-xs hidden md:text-sm md:flex gap-1 md:gap-2 items-center">
              <Earth className="text-neutral-600 w-5 h-5" /> Africa/Abuja
            </p>
            <div className="mt-2 md:flex hidden items-center justify-center md:flex-row gap-2">
              <div className="px-1.5 py-0.5 md:px-3 md:py-1 text-xs rounded-lg border border-neutral-300 dark:border-neutral-700">
                English
              </div>
              <div className="px-1.5 py-0.5 md:px-3 md:py-1 rounded-lg text-xs border border-neutral-300 dark:border-neutral-700">
                French
              </div>
            </div>
          </div>
        </aside>

        {/* Main content */}
        <main className="flex-1 p-5 md:p-20 w-[65%] mt-20 md:mt-2 overflow-auto h-screen">
          {/* Updated Schedule a call button with Calendly */}
       <button 
  onClick={() => calendlyRef.current?.openModal()}
  className="flex items-center mb-6 md:-ml-2 -m-0 pl-4 pr-0.5 md:pr-1 border border-neutral-100 dark:border-neutral-700 bg-neutral-100 shadow-md dark:bg-gradient-to-br from-neutral-700 to-neutral-900 dark:from-neutral-600 dark:to-neutral-900 hover:scale-110 duration-300 rounded-full w-fit py-0.5 md:py-1.5 space-x-4 transition-all cursor-pointer"
>
  <Calendar className="md:size-5 size-4 text-neutral-20d0"/>
  <span className="text-sm md:text-base text-neutral-20d0">Schedule a call</span>
  <div className="rounded-full border p-0.5 flex justify-center items-center border-neutral-600">
    <ChevronRight className="size-4 md:size-5 text-neutrdal-200"/>
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
              className="text-3xl md:text-4xl text-center font-bold dark:text-neutral-200 text-neutral-900/90 leading-tight"
            />
            <h2 className="md:text-xl text-lg md:mt-1 mt-0.5 mb-5 text-neutral-900/85 dark:text-neutral-300">
              Full Stack Developer
            </h2>
            <div className='flex space-x-2 md:space-x-3 overflow-x-auto -ml-1'>
              {[
                {name: "Github", icon: <SiGithub/>, link: "https://github.com/prospersamuel"},
                {name: "Twitter", icon: <SiX/>, link: "https://x.com/ProsperSam35123"},
                {name: "Facebook", icon: <SiFacebook/>, link: "www.github.com"},
                {name: "Instagram", icon: <SiInstagram/>, link: "https://www.instagram.com/prosper_samuel55/"},
              ].map((social, i) => (
                <a href={social.link} 
                target="_blank"
                rel="noopener noreferrer"
                 key={i} className="flex items-center mb-6 px-2 border border-neutral-100 dark:border-neutral-700 bg-neutral-100 shadow-md dark:bg-gradient-to-br from-neutral-700 to-neutral-900 dark:from-neutral-600 dark:to-neutral-900 hover:scale-110 duration-300 transition rounded-full w-fit py-1 gap-1.5">
                  <span className="size-3 w-fit h-fit">{social.icon}</span> 
                  <span className="text-xs">{social.name}</span>
                </a>
              ))}
            </div>
          </div>

       <section ref={sectionRefs.introduction} className="mb-8">
  <h2 className="text-2xl font-bold mb-4">Introduction</h2>
  <p className="text-neutral-600 dark:text-neutral-400 text-sm">
    I’m Prosper, a frontend developer passionate about building sleek,
    functional, and scalable digital products. My focus is on creating
    user-friendly interfaces that don’t just look good but solve real
    business problems. I care about performance, accessibility, and
    experiences that keep users engaged.
  </p>
</section>

<div className="h-px w-full mb-8 bg-gradient-to-r from-transparent via-neutral-400 to-transparent dark:via-neutral-700"></div>

<section ref={sectionRefs.work} className="mb-8">
  <h2 className="text-2xl font-bold mb-4">Work Experience</h2>
  <p className="text-neutral-600 dark:text-neutral-400 text-sm mb-4">
    I’ve worked on projects ranging from personal portfolios to
    full-scale apps with authentication, payment integration, referral
    systems, and dashboards. My work is centered on helping clients
    grow their businesses through reliable, modern solutions.
  </p>
  <ul className="list-disc  space-y-2 text-neutral-600 dark:text-neutral-400 text-sm">
    <li>
      Built a crypto-style dashboard with live balance growth,
      deposits, and withdrawals using Firebase.
    </li>
    <li>
      Designed and developed a referral tracking MVP for eCommerce
      websites without user signups.
    </li>
    <li>
      Integrated payment verification and webhook handling with
      Flutterwave for seamless transactions.
    </li>
  </ul>
</section>

<div className="h-px w-full mb-8 bg-gradient-to-r from-transparent via-neutral-400 to-transparent dark:via-neutral-700"></div>

<section ref={sectionRefs.studies} className="mb-8">
  <h2 className="text-2xl font-bold mb-4">Studies</h2>
  <div className="space-y-4">
    <div>
      <h3 className="font-semibold">University of Abuja</h3>
      <p className="text-neutral-600 dark:text-neutral-400 text-sm">
        Studied Computer Science and built a foundation in
        problem-solving and programming.
      </p>
    </div>
    <div>
      <h3 className="font-semibold">Build the Future</h3>
      <p className="text-neutral-600 dark:text-neutral-400 text-sm">
        Learned digital marketing and personal branding to better
        understand how technology drives growth.
      </p>
    </div>
  </div>
</section>

<div className="h-px w-full mb-8 bg-gradient-to-r from-transparent via-neutral-400 to-transparent dark:via-neutral-700"></div>

<section ref={sectionRefs.skills} className="mb-8">
  <h2 className="text-2xl font-bold mb-4">Technical Skills</h2>
  <p className="text-neutral-600 dark:text-neutral-400 text-sm">
    React, Tailwind, Firebase, Node.js, Python, Flutter, WordPress, Git.
    I also focus on design systems, authentication flows, AI chatbots, referral
    systems, and payment integrations.
  </p>
</section>

<div className="h-px w-full mb-8 bg-gradient-to-r from-transparent via-neutral-400 to-transparent dark:via-neutral-700"></div>

<section ref={sectionRefs.services}>
  <h2 className="text-2xl font-bold mb-4">Services</h2>
  <div className="space-y-4">
    <div>
      <h3 className="font-semibold">Web Development</h3>
      <p className="text-neutral-600 dark:text-neutral-400 text-sm">
        I build modern, responsive websites and dashboards with both code and non-coding methods that perform
        well, scale easily, and help you reach your business goals.
      </p>
    </div>
    <div>
    <h3 className="font-semibold">App Development</h3>
      <p className="text-neutral-600 dark:text-neutral-400 text-sm">
        Cross-platform mobile and web apps tailored to your business needs,
        built with scalability and performance in mind.
      </p>
      </div>
    <div>
      <h3 className="font-semibold">WhatsApp CRM Chatbots</h3>
      <p className="text-neutral-600 dark:text-neutral-400 text-sm">
        Automate customer support, collect leads, and boost sales with
        custom WhatsApp chatbot solutions that integrate directly with
        your workflows.
      </p>
    </div>
    <div>
      <h3 className="font-semibold">UI/UX Design</h3>
      <p className="text-neutral-600 dark:text-neutral-400 text-sm">
        Clean, user-friendly designs that improve engagement,
        conversions, and overall product experience.
      </p>
    </div>
     <div>
      <h3 className="font-semibold">SEO Optimization</h3>
      <p className="text-neutral-600 dark:text-neutral-400 text-sm">
        Get found faster. I apply SEO best practices to improve search
        rankings, drive organic traffic, and maximize visibility for
        your brand.
      </p>
    </div>
  </div>
</section>

        </main>
      </div>
      <div className="h-px w-full mb-12 bg-gradient-to-r from-transparent via-neutral-400 to-transparent dark:via-neutral-700"></div>
    </>
  );
}