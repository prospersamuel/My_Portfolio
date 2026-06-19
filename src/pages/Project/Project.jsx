import { useState, useRef, useEffect } from 'react';
import uplinkHomeDark from '../../assets/Projectimages/Uplink/uplinkHomeDark.png';
import uplinkHomeLight from '../../assets/Projectimages/Uplink/uplinkHomeLight.png';
import companyDashboardDark from '../../assets/Projectimages/Uplink/companyDashboardDark.png';
import companyDashboardLight from '../../assets/Projectimages/Uplink/companyDashboardLight.png';
import promoterDashboardDark from '../../assets/Projectimages/Uplink/promoterDashboardDark.png';
import promoterDashboardLight from '../../assets/Projectimages/Uplink/promoterDashboardLight.png';
import AutogrowHome from '../../assets/Projectimages/Autogrow/autogrowHome.png';
import autogrowDashboard from '../../assets/Projectimages/Autogrow/autogrowDashboard.png';
import autogrowProfile from '../../assets/Projectimages/Autogrow/autogrowProfile.png';
import offbeatsoffline from '../../assets/Projectimages/Offbeats/offbeatsoffline.png';
import offbeatsonline from '../../assets/Projectimages/Offbeats/offbeatsonline.png';
import dashboardoverview from '../../assets/Projectimages/SchoolWebsite/dashboardoverview.png';
import SchoolHome from '../../assets/Projectimages/SchoolWebsite/home.png';
import loginpage from '../../assets/Projectimages/SchoolWebsite/loginpage.png';
import mycoursestab from '../../assets/Projectimages/SchoolWebsite/mycoursestab.png';
import smmboosterLogin from '../../assets/Projectimages/SMM-booster/smmbooster-login.png';
import smmboosterDashbaord from '../../assets/Projectimages/SMM-booster/smmbooster-dashboard.png';
import smmboosterTopup from '../../assets/Projectimages/SMM-booster/smmbooster-topup.png';
import smmboosterOrder from '../../assets/Projectimages/SMM-booster/smmbooster-order.png';

import burgerHome from '../../assets/Projectimages/BurgerWebsite/burgerWebsiteHome.png';
import burgerHome2 from '../../assets/Projectimages/BurgerWebsite/burgerhome2.png';
import burgerOrderPage from '../../assets/Projectimages/BurgerWebsite/burgerOrderPage.png';
import burgercheckout from '../../assets/Projectimages/BurgerWebsite/burgercheckout.png';

import { ChevronLeft, ChevronRight, ChevronDown, ChevronUp, ExternalLink } from 'lucide-react';
import { useApp } from "../../context/Appcontext";
import { motion } from 'framer-motion';

// ----------------------------------------------
// Lightweight Laptop Frame (preserves original aspect ratio)
// ----------------------------------------------
const LaptopFrame = ({ children }) => (
  <div className="relative w-full group">
    <div className="bg-neutral-800 rounded-t-xl overflow-hidden shadow-lg">
      <div className="relative">
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-8 h-4 bg-neutral-900 rounded-b-md z-10"></div>
        <div className="bg-black">{children}</div>
      </div>
    </div>
    <div className="bg-neutral-700 rounded-b-xl h-2 w-full"></div>
  </div>
);

// ----------------------------------------------
// Carousel with fast navigation and preload
// ----------------------------------------------
const Carousel = ({ images, title, link }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(null);
  const total = images.length;

  useEffect(() => {
    const preload = (src) => { const img = new Image(); img.src = src; };
    if (total > 1) {
      preload(images[(currentIndex + 1) % total]);
      preload(images[(currentIndex - 1 + total) % total]);
    }
  }, [currentIndex, images, total]);

  const next = () => setCurrentIndex((prev) => (prev + 1) % total);
  const prev = () => setCurrentIndex((prev) => (prev - 1 + total) % total);

  const handleTouchStart = (e) => setTouchStart(e.touches[0].clientX);
  const handleTouchEnd = (e) => {
    if (!touchStart) return;
    const diff = touchStart - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 40) diff > 0 ? next() : prev();
    setTouchStart(null);
  };

  return (
    <div
      className="relative w-full h-full cursor-pointer"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <a href={link} target="_blank" rel="noopener noreferrer" className="block w-full h-full">
        <img
          src={images[currentIndex]}
          alt={`${title}`}
          className="w-full h-full object-cover object-top select-none"
          loading="lazy"
          decoding="async"
        />
      </a>
      {total > 1 && (
        <>
          <button
            onClick={(e) => { e.preventDefault(); prev(); }}
            className="absolute left-1 top-1/2 -translate-y-1/2 bg-black/40 text-white rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity duration-150"
          >
            <ChevronLeft size={16} />
          </button>
          <button
            onClick={(e) => { e.preventDefault(); next(); }}
            className="absolute right-1 top-1/2 -translate-y-1/2 bg-black/40 text-white rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity duration-150"
          >
            <ChevronRight size={16} />
          </button>
          <div className="absolute bottom-1 left-1/2 -translate-x-1/2 flex gap-1">
            {images.map((_, idx) => (
              <button
                key={idx}
                onClick={(e) => { e.preventDefault(); setCurrentIndex(idx); }}
                className={`w-1.5 h-1.5 rounded-full transition-all ${idx === currentIndex ? 'bg-white w-3' : 'bg-white/50'}`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

// ----------------------------------------------
// Main Projects with Bento Grid Layout
// ----------------------------------------------
const Projects = () => {
  const { theme } = useApp();

  // Full project data with original descriptions and highlights
  const projects = [
    {
      id: 0,
      title: "SMM Booster — Social Media Growth Platform",
      tagline: "Social Media Growth Platform",
      description: "A lightweight social media marketing platform built for Nigerian users to purchase Instagram followers, TikTok views, YouTube subscribers and more using Naira payments. The platform includes secure authentication, wallet funding, real-time order tracking, transaction history and automated order processing through integrated SMM APIs. Designed with a strong focus on speed, simplicity and mobile-first usability.",
      link: "https://smmbooster.com.ng/",
      highlights: [
        "Secure authentication and user account management.",
        "Wallet funding with Flutterwave payments in Naira.",
        "Real-time order placement and transaction tracking.",
        "Fast, mobile-first UI optimized for performance and simplicity."
      ],
      images: [smmboosterLogin, smmboosterDashbaord, smmboosterTopup, smmboosterOrder],
      status: "sold"
    },

        {
  id: 1,
  title: "Burger Ordering Website — Premium Restaurant System",
  tagline: "Ready-to-sell restaurant ordering system",
  description:
    "A high-performance restaurant ordering system designed for burger shops and fast-food brands. Includes menu browsing, cart system, checkout flow, and mobile-first UX optimized for conversions. Built to help restaurants take orders online without relying on WhatsApp or phone calls.",
  link: "https://burger-website-neon.vercel.app/",
  highlights: [
    "Fully responsive online ordering system",
    "Cart + checkout flow optimized for speed",
    "Restaurant-ready UI with premium animations",
    "Can be rebranded for any food business",
  ],
  images: [burgerHome, burgerHome2, burgerOrderPage, burgercheckout],
  status: "Available for purchase",
},

    {
      id: 2,
      title: "AutoGrow — Smart Earnings Dashboard",
      tagline: "Smart Earnings Dashboard",
      description: "AutoGrow is a modern web app that lets users deposit funds and watch their balance grow automatically over time. It features a crypto-style dashboard where users can view deposits, daily/weekly/monthly earnings, and withdrawals — all with a clean, intuitive UI. The system integrates Flutterwave for payments and Firebase for authentication, database, and real-time updates. It also includes a referral system that tracks referred users, counts rewards, and boosts earnings potential.",
      link: "https://autogrow-alpha.vercel.app/",
      highlights: [
        "Automated daily/weekly/monthly earnings updates.",
        "Secure deposits & withdrawals with Flutterwave + Firebase.",
        "Full referral tracking system (codes, counts, bonuses, and referral earnings).",
        "Sleek, crypto-inspired user dashboard with animations & modern UI."
      ],
      images: [AutogrowHome, autogrowDashboard, autogrowProfile],
      status: "Available for purchase",

    },
      {
      id: 3,
      title: "School Portal — Student & Admin Management System",
      tagline: "Student & Admin System",
      description: "School Portal is a modern academic management system built to simplify how schools handle student information, attendance, results, and communication. Students can log in to access their dashboard, view grades, check announcements, and manage their profile. Admins get a powerful backend with tools for managing users, posting updates, and overseeing school operations. Designed with a clean UI, fast authentication, and a secure data layer, School Portal brings a smooth digital experience to both students and staff.",
      link: "https://sunshine-academy.vercel.app/",
      highlights: [
        "Secure login system with student and admin roles.",
        "Student dashboard for grades, profile, and announcements.",
        "Admin dashboard for managing users, results, and updates.",
        "Real-time database updates with smooth navigation.",
        "Modern UI built for speed, clarity, and easy use."
      ],
      images: [SchoolHome, loginpage, dashboardoverview, mycoursestab],
      status: "Available for purchase",
    },
      {
        id: 4,
        title: "Uplink — Referral Tracking MVP",
        tagline: "Referral Tracking MVP",
        description: "Dashboards — one for companies to create/manage campaigns and another for promoters to generate referral links and track their performance. The system captures referrals using URL parameters + cookies, supports signup tracking in addition to checkout tracking, and logs referrals in real time. Companies can review referred leads/sales, while promoters can easily monitor their earnings and progress.",
        link: "https://earnwithuplink.vercel.app/",
        highlights: [
          "Dual dashboards: Company (manage campaigns, approve rewards) & Promoter (track performance).",
          "Automatic referral + signup tracking with cookies.",
          "Real-time analytics for referrals and conversions.",
          "Lightweight setup with no complex integrations needed."
        ],
        images: [
          theme === 'dark' ? uplinkHomeDark : uplinkHomeLight,
          theme === 'dark' ? companyDashboardDark : companyDashboardLight,
          theme === 'dark' ? promoterDashboardDark : promoterDashboardLight,
        ],
        status: "Available for purchase"
      },
    {
      id: 5,
      title: "Offbeats — Offline-First Music App",
      tagline: "Offline-First Music App",
      description: "Offbeats is a desktop music player designed to work seamlessly both online and offline. Users can browse and search songs while connected to the internet, then save them for later offline playback. With a clean interface and smooth playback engine, Offbeats offers a balance of convenience and performance, giving users a reliable music experience even without constant connectivity.",
      link: "https://github.com/prospersamuel/Offbeats-App/releases/tag/v1.0.0",
      highlights: [
        "Offline-first design — download & play songs without internet.",
        "Online mode with search and browse functionality.",
        "Song caching for smooth playback across sessions.",
        "Desktop-focused for fast, lightweight performance."
      ],
      images: [offbeatsoffline, offbeatsonline],
      status: "Available for purchase"
    },
  
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.05, delayChildren: 0.05 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3, ease: "easeOut" } }
  };

  return (
    <div className="min-h-screen py-12 px-4 md:px-8 bg-neutral-50 dark:bg-neutral-950">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12 text-center">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-neutral-800 to-neutral-600 dark:from-neutral-100 dark:to-neutral-400 bg-clip-text text-transparent">
            Featured Projects
          </h1>
          <p className="text-neutral-500 dark:text-neutral-400 mt-3 max-w-2xl mx-auto">
            Real-world applications built with modern tech stacks
          </p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 auto-rows-fr"
        >
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} variants={itemVariants} />
          ))}
        </motion.div>
      </div>
    </div>
  );
};

// Individual card with expand/collapse functionality
const ProjectCard = ({ project, variants }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const truncateDescription = (desc, limit = 120) => {
    if (desc.length <= limit) return desc;
    return desc.substring(0, limit) + '...';
  };

  return (
    <motion.div
      variants={variants}
      className={`${project.size} bg-white dark:bg-neutral-800/50 backdrop-blur-sm rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 flex flex-col overflow-hidden border border-neutral-200 dark:border-neutral-700`}
    >
      <div className="p-4 pb-2 bg-gradient-to-b from-neutral-100 to-neutral-200 dark:from-neutral-800 dark:to-neutral-900">
        <LaptopFrame>
          <div className="h-[20vh] md:h-80 w-full">
            <Carousel images={project.images} title={project.title} link={project.link} />
          </div>
        </LaptopFrame>
      </div>

      <div className="p-5 flex-1 flex flex-col">
        <div className="flex justify-between items-start gap-2">
          <div>
            <h3 className="text-xl font-bold text-neutral-800 dark:text-white">{project.title}</h3>
            <p className="text-sm text-indigo-500 dark:text-indigo-400 mt-0.5">{project.tagline}</p>
          </div>
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-neutral-500 hover:text-neutral-800 dark:hover:text-white transition-colors"
          >
            <ExternalLink size={18} />
          </a>
        </div>

        {/* Description with expand toggle */}
        <div className="text-neutral-600 dark:text-neutral-300 text-sm mt-3">
          {isExpanded ? project.description : truncateDescription(project.description)}
          {project.description.length > 120 && (
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="ml-2 text-indigo-500 dark:text-indigo-400 hover:underline inline-flex items-center gap-1"
            >
              {isExpanded ? (
                <>View Less <ChevronUp size={14} /></>
              ) : (
                <>View More <ChevronDown size={14} /></>
              )}
            </button>
          )}
        </div>

        {/* Highlights - only when expanded */}
        {isExpanded && project.highlights && (
          <div className="mt-4 space-y-2">
            <h4 className="text-xs font-semibold text-neutral-500 dark:text-neutral-400 uppercase tracking-wide">
              Key Features
            </h4>
            <ul className="space-y-1.5">
              {project.highlights.map((highlight, idx) => (
                <li key={idx} className="flex items-start gap-2 text-xs text-neutral-600 dark:text-neutral-300">
                  <span className="text-indigo-500 mt-0.5">•</span>
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        <div className="mt-4 flex flex-wrap gap-2">
          {project.status === "Available for purchase" ? (
            <div className='flex justify-between w-full items-center gap-2'>
  <a
    href={project.link}
    target="_blank"
    className="text-xs font-medium bg-green-600 text-white px-3 py-1.5 rounded-full hover:bg-green-700 transition"
  >
    View Product →
  </a>

  <div className='text-xs font-semibold px-2 py-1 rounded-full bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300'>
    Avalaible for pickup
  </div>
  </div>
) : (
  <a
    href={project.link}
    target="_blank"
    className="text-xs font-medium bg-neutral-100 dark:bg-neutral-700 px-3 py-1.5 rounded-full hover:bg-neutral-200 dark:hover:bg-neutral-600 transition"
  >
    Live Demo →
  </a>
)}

{project.status === "sold" && (
  <span className="text-xs font-semibold px-2 py-1 rounded-full bg-yellow-100 text-yellow-700 dark:bg-yellow-900 dark:text-yellow-300">
    Sold
  </span>
)}
        </div>
      </div>
    </motion.div>
  );
};

export default Projects;