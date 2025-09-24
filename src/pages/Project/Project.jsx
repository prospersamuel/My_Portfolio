import { useState } from 'react';

import uplinkHomeDark from '../../assets/Projectimages/Uplink/uplinkHomeDark.png';
import uplinkHomeLight from '../../assets/Projectimages/Uplink/uplinkHomeLight.png';
import companyDashboardDark from '../../assets/Projectimages/Uplink/companyDashboardDark.png';
import companyDashboardLight from '../../assets/Projectimages/Uplink/companyDashboardLight.png';
import promoterDashboardLight from '../../assets/Projectimages/Uplink/promoterDashboardLight.png';
import promoterDashboardDark from '../../assets/Projectimages/Uplink/promoterDashboardDark.png';
import AutogrowHome from '../../assets/Projectimages/Autogrow/autogrowHome.png';
import autogrowDashboard from '../../assets/Projectimages/Autogrow/autogrowDashboard.png';
import autogrowProfile from '../../assets/Projectimages/Autogrow/autogrowProfile.png';
import offbeatsHome from '../../assets/Projectimages/Offbeats/offbeatsHome.png';
import offbeatsoffline from '../../assets/Projectimages/Offbeats/offbeatsoffline.png';
import offbeatsonline from '../../assets/Projectimages/Offbeats/offbeatsonline.png';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useApp } from "../../context/Appcontext";


const Projects = () => {

  const {theme} = useApp()

  const projects = [
    {
      id: 1,
      title: "Build faster than AI with Once UI for Next-Is",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta magni accusamus doloremque accusantium harum aliquid dolor dolore sint. Est, esse? Dolorum eos perferendis, dolores natus corporis consectetur adipisci libero a!",
      images: [
       theme === 'dark'? uplinkHomeDark : uplinkHomeLight,
       theme === 'dark'? companyDashboardDark : companyDashboardLight,
       theme === 'dark'? promoterDashboardDark : promoterDashboardLight,]
    },
    {
      id: 2,
      title: "Building Once UI, a Customizable Design System",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis et optio, exercitationem architecto quod tempore excepturi dolorum officiis qui repellat.",
      cta: "Read data study",
      images: [
        AutogrowHome,
        autogrowDashboard,
        autogrowProfile
      ]
    },
    {
      id: 3,
      title: "Once UI: Open-source design system",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis et optio, exercitationem architecto quod tempore excepturi dolorum officiis qui repellat.",
      images: [
        offbeatsHome,
        offbeatsonline,
        offbeatsoffline
      ]
    },
    {
      id: 4,
      title: "Automating Design Handovers with a Flynn to Code Pipeline",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta magni accusamus doloremque accusantium harum aliquid dolor dolore sint. Est, esse? Dolorum eos perferendis, dolores natus corporis consectetur adipisci libero a!",
      cta: "Read data study",
      secondaryCta: "View project",
      images: [
        "/images/project4-1.jpg",
        "/images/project4-2.jpg",
        "/images/project4-3.jpg"
      ]
    }
  ];

  return (
    <div className="min-h-screen">
      <main className="mx-auto lg:p-36 px-5 py-10">
        {/* Projects Grid */}
        <div className="space-y-12 lg:space-y-20">
          {projects.map((project, index) => (
            <ProjectSection 
              key={project.id} 
              project={project} 
            />
          ))}
        </div>
      </main>
    </div>
  );
};

// Project Section Component with Carousel
const ProjectSection = ({ project }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

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

  return (
    <>
      <div className={`flex flex-col gap-8 lg:gap-12`}>
        {/* Image Carousel */}
        <div className="w-full relative group">
          <div className="relative overflow-hidden rounded-xl lg:rounded-3xl border-neutral-400 shadow-md dark:shadow-none border-2 dark:border-neutral-700 bg-gradient-to-br from-neutral-700 to-neutral-900 lg:h-[80vh] h-[20vh]">
            {/* ACTUAL IMAGE DISPLAY - Fixed for mobile */}
            <img 
              src={project.images[currentImageIndex]} 
              alt={`${project.title} - Image ${currentImageIndex + 1}`}
              className="w-full h-full object-cover object-center"
            />
            
            {/* Carousel Controls */}
            {project.images.length > 1 && (
              <>
                <button
                  onClick={prevImage}
                  className="absolute left-2 lg:left-4 top-1/2 transform -translate-y-1/2 border border-neutral-700 bg-gradient-to-br from-neutral-700 to-neutral-900 hover:scale-110 duration-300 transition-all text-neutral-200 rounded-full p-1 lg:p-2 flex items-center justify-center opacity-0 group-hover:opacity-100"
                >
                  <ChevronLeft className="w-4 h-4 lg:w-5 lg:h-5" />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-2 lg:right-4 top-1/2 transform -translate-y-1/2 border border-neutral-700 bg-gradient-to-br from-neutral-700 to-neutral-900 hover:scale-110 duration-300 transition-all text-neutral-200 rounded-full p-1 lg:p-2 flex items-center justify-center opacity-0 group-hover:opacity-100"
                >
                  <ChevronRight className="w-4 h-4 lg:w-5 lg:h-5" />
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
                    index === currentImageIndex ? 'dark:bg-neutral-200 bg-neutral-600' : 'dark:bg-neutral-200/30 bg-neutral-600/30'
                  }`}
                />
              ))}
            </div>
          )}
        </div>

        {/* Project Content - Improved mobile spacing */}
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-10 items-start">
          <h2 className="text-xl lg:text-3xl dark:text-neutral-200 text-neutral-700 font-bold leading-tight">
            {project.title}
          </h2>
          
          <p className="dark:text-neutral-400 text-sm lg:text-base text-pretty text-neutral-600 leading-relaxed">
            {project.description}
          </p>
        </div>
      </div>
      <div className="h-px w-full bg-gradient-to-r from-transparent via-neutral-400 to-transparent dark:via-neutral-700 mt-8 lg:mt-0"></div>
    </>
  );
};

export default Projects;