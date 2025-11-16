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
import dashboardoverview from '../../assets/Projectimages/SchoolWebsite/dashboardoverview.png'
import SchoolHome from '../../assets/Projectimages/SchoolWebsite/home.png'
import loginpage from '../../assets/Projectimages/SchoolWebsite/loginpage.png'
import mycoursestab from '../../assets/Projectimages/SchoolWebsite/mycoursestab.png'
import { ChevronLeft, ChevronRight, ChevronDown, ChevronUp } from 'lucide-react';
import { useApp } from "../../context/Appcontext";
import {motion} from 'framer-motion'

const Projects = () => {
  const { theme } = useApp();

  const projects = [
    {
      id: 1,
      title: "Uplink — Referral Tracking MVP",
      description: "dashboards — one for companies to create/manage campaigns and another for promoters to generate referral links and track their performance. The system captures referrals using URL parameters + cookies, supports signup tracking in addition to checkout tracking, and logs referrals in real time. Companies can review referred leads/sales, while promoters can easily monitor their earnings and progress.",
      link: "https://earnwithuplink.vercel.app/",
      highlights:[
        'Dual dashboards: Company (manage campaigns, approve rewards) & Promoter (track performance).',
        'Automatic referral + signup tracking with cookies.',
        'Real-time analytics for referrals and conversions.',
        'Lightweight setup with no complex integrations needed.'
      ],
      images: [
        theme === 'dark' ? uplinkHomeDark : uplinkHomeLight,
        theme === 'dark' ? companyDashboardDark : companyDashboardLight,
        theme === 'dark' ? promoterDashboardDark : promoterDashboardLight,
      ]
    },
    {
      id: 2,
      title: "AutoGrow — Smart Earnings Dashboard",
      description: "AutoGrow is a modern web app that lets users deposit funds and watch their balance grow automatically over time. It features a crypto-style dashboard where users can view deposits, daily/weekly/monthly earnings, and withdrawals — all with a clean, intuitive UI. The system integrates Flutterwave for payments and Firebase for authentication, database, and real-time updates. It also includes a referral system that tracks referred users, counts rewards, and boosts earnings potential.",
      link: "https://autogrow-alpha.vercel.app/",
      highlights:[
       ' Automated daily/weekly/monthly earnings updates.',
       'Secure deposits & withdrawals with Flutterwave + Firebase.',
       'Full referral tracking system (codes, counts, bonuses, and referral earnings).',
       'Sleek, crypto-inspired user dashboard with animations & modern UI.'
      ],
      images: [
        AutogrowHome,
        autogrowDashboard,
        autogrowProfile
      ]
    },
    {
      id: 3,
      title: "Offbeats — Offline-First Music App",
      description: "Offbeats is a desktop music player designed to work seamlessly both online and offline. Users can browse and search songs while connected to the internet, then save them for later offline playback. With a clean interface and smooth playback engine, Offbeats offers a balance of convenience and performance, giving users a reliable music experience even without constant connectivity.",
      link: "https://github.com/prospersamuel/Offbeats-App/releases/tag/v1.0.0",
      highlights:[
       'Offline-first design — download & play songs without internet.',
       'Online mode with search and browse functionality.',
       'Song caching for smooth playback across sessions.',
       'Desktop-focused for fast, lightweight performance.'
      ],
      images: [
        offbeatsoffline,
        offbeatsonline,
      ]
    },
    {
      id: 4,
     title: "School Portal — Student & Admin Management System",
description:
  "School Portal is a modern academic management system built to simplify how schools handle student information, attendance, results, and communication. Students can log in to access their dashboard, view grades, check announcements, and manage their profile. Admins get a powerful backend with tools for managing users, posting updates, and overseeing school operations. Designed with a clean UI, fast authentication, and a secure data layer, School Portal brings a smooth digital experience to both students and staff.",
link: "https://sunshine-academy.vercel.app/",
highlights: [
  "Secure login system with student and admin roles.",
  "Student dashboard for grades, profile, and announcements.",
  "Admin dashboard for managing users, results, and updates.",
  "Real-time database updates with smooth navigation.",
  "Modern UI built for speed, clarity, and easy use.",
],

      images: [
        SchoolHome,
        loginpage,
        dashboardoverview,
        mycoursestab,
      ]
    },
  ];

  return (
    <div className="min-h-screen">
      <main className="mx-auto lg:p-36 px-5 py-10">
        <div className="space-y-12 lg:space-y-20">
          {projects.map((project, i) => (
            <motion.div
            key={project.id} 
               initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.2 }}
                  viewport={{ once: true }}
            >
            <ProjectSection project={project} />
            </motion.div>
          ))}
        </div>
      </main>
    </div>
  );
};

const ProjectSection = ({ project }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  const [isExpanded, setIsExpanded] = useState(false);
  const carouselRef = useRef(null);

  // Minimum swipe distance (px)
  const minSwipeDistance = 50;

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === project.images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === 0 ? project.images.length - 1 : prevIndex - 1
    );
  };

  // Get truncated description (first ~150 characters)
  const getTruncatedDescription = () => {
    if (project.description.length <= 150) return project.description;
    return project.description.substring(0, 150) + '...';
  };

  // Touch handlers for swipe
  const onTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      nextImage();
    } else if (isRightSwipe) {
      prevImage();
    }
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowLeft') {
        prevImage();
      } else if (e.key === 'ArrowRight') {
        nextImage();
      }
    };

    const carousel = carouselRef.current;
    if (carousel) {
      carousel.addEventListener('keydown', handleKeyDown);
      carousel.setAttribute('tabindex', '0'); // Make it focusable
    }

    return () => {
      if (carousel) {
        carousel.removeEventListener('keydown', handleKeyDown);
      }
    };
  }, [currentImageIndex, project.images.length]);

  return (
    <>
      <div className="flex flex-col gap-8 lg:gap-12">
        {/* Image Carousel with Swipe Support */}
        <div 
          ref={carouselRef}
          className="w-full relative group outline-none"
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
        >
          <div onContextMenu={(e)=>e.preventDefault()} className="relative overflow-hidden rounded-xl lg:rounded-3xl border-2 border-neutral-400 dark:border-neutral-700 shadow-md dark:shadow-none bg-gradient-to-br from-neutral-700 to-neutral-900 h-[20vh] md:h-80 lg:h-[500px]">
            
            {/* Image with swipe feedback */}
            <a href={project.link}
             target="_blank"
             rel="noopener noreferrer">
            <img 
              src={project.images[currentImageIndex]} 
              alt={`${project.title} - Image ${currentImageIndex + 1}`}
              className="w-full h-full object-cover object-center select-none"
              draggable="false"
              />
              </a>
            
            {/* Carousel Controls - Visible on desktop, hidden on mobile */}
            {project.images.length > 1 && (
              <>
                {/* Left Button - Hidden on mobile, visible on hover desktop */}
                <button
                  onClick={prevImage}
                  className="hidden lg:flex absolute left-4 top-1/2 transform -translate-y-1/2 border border-neutral-700 bg-black/50 backdrop-blur-sm hover:scale-110 duration-300 transition-all text-neutral-200 rounded-full p-2 items-center justify-center opacity-0 group-hover:opacity-100"
                  aria-label="Previous image"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>

                {/* Right Button - Hidden on mobile, visible on hover desktop */}
                <button
                  onClick={nextImage}
                  className="hidden lg:flex absolute right-4 top-1/2 transform -translate-y-1/2 border border-neutral-700 bg-black/50 backdrop-blur-sm hover:scale-110 duration-300 transition-all text-neutral-200 rounded-full p-2 items-center justify-center opacity-0 group-hover:opacity-100"
                  aria-label="Next image"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>

                {/* Mobile Buttons - Always visible on mobile */}
                <button
                  onClick={prevImage}
                  className="lg:hidden absolute left-2 top-1/2 transform -translate-y-1/2 border border-neutral-700 bg-black/50 backdrop-blur-sm text-neutral-200 rounded-full p-2 flex items-center justify-center"
                  aria-label="Previous image"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>

                <button
                  onClick={nextImage}
                  className="lg:hidden absolute right-2 top-1/2 transform -translate-y-1/2 border border-neutral-700 bg-black/50 backdrop-blur-sm text-neutral-200 rounded-full p-2 flex items-center justify-center"
                  aria-label="Next image"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </>
            )}
          </div>
          
          {/* Carousel Indicators */}
          {project.images.length > 1 && (
            <div className="w-[95%] mx-auto mt-3 h-1 flex gap-1 lg:gap-2">
              {project.images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`w-full rounded-full transition-all ${
                    index === currentImageIndex 
                      ? 'bg-neutral-600 dark:bg-neutral-200' 
                      : 'bg-neutral-300 dark:bg-neutral-600'
                  }`}
                  aria-label={`Go to image ${index + 1}`}
                />
              ))}
            </div>
          )}
        </div>

        {/* Project Content */}
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-10 items-start">
          <motion.h2
             initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  viewport={{ once: true }}
           className="text-xl lg:text-3xl dark:text-neutral-200 text-neutral-700 font-bold leading-tight">
            {project.title}
          </motion.h2>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            {/* Description */}
            <div className="dark:text-neutral-400 text-sm lg:text-base text-pretty text-neutral-600 leading-relaxed">
              {isExpanded ? project.description : getTruncatedDescription()}
              
              {/* Show "View More" only if description is long enough */}
              {project.description.length > 150 && (
                <button
                  onClick={() => setIsExpanded(!isExpanded)}
                  className="ml-2 text-neutral-400 hover:text-neutral-600 dark:text-neutral-600 dark:hover:text-neutral-500 font-medium inline-flex items-center gap-1 transition-colors"
                >
                  {isExpanded ? (
                    <>
                      View Less <ChevronUp className="w-4 h-4" />
                    </>
                  ) : (
                    <>
                      View More <ChevronDown className="w-4 h-4" />
                    </>
                  )}
                </button>
              )}
            </div>

            {/* Highlights - Only show when expanded and if highlights exist */}
            {isExpanded && project.highlights && project.highlights.length > 0 && (
              <div className="space-y-3 mt-6">
                <h3 className="text-lg font-semibold dark:text-neutral-200 text-neutral-700">
                  Key Features:
                </h3>
                <ul className="space-y-2">
                  {project.highlights.map((highlight, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-start gap-3 dark:text-neutral-300 text-neutral-600 text-sm lg:text-base"
                    >
                      <span className="text-neutral-500 mt-1 flex-shrink-0">•</span>
                      <span>{highlight}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            )}
          </motion.div>
        </div>
      </div>
      <div className="h-px w-full bg-gradient-to-r from-transparent via-neutral-400 to-transparent dark:via-neutral-700 mt-8 lg:mt-12" />
    </>
  );
};

export default Projects;