import React, { useState } from 'react';

import me from '../../assets/medark.png'
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Projects = () => {
  // Sample project data - replace with your actual projects
  const projects = [
    {
      id: 1,
      title: "Build faster than AI with Once UI for Next-Is",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta magni accusamus doloremque accusantium harum aliquid dolor dolore sint. Est, esse? Dolorum eos perferendis, dolores natus corporis consectetur adipisci libero a!",
      images: [
        "/images/project1-1.jpg",
        "/images/project1-2.jpg",
        "/images/project1-3.jpg"
      ]
    },
    {
      id: 2,
      title: "Building Once UI, a Customizable Design System",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis et optio, exercitationem architecto quod tempore excepturi dolorum officiis qui repellat.",
      cta: "Read data study",
      images: [
        "/images/project2-1.jpg",
        "/images/project2-2.jpg",
        "/images/project2-3.jpg"
      ]
    },
    {
      id: 3,
      title: "Once UI: Open-source design system",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis et optio, exercitationem architecto quod tempore excepturi dolorum officiis qui repellat.",
      images: [
        "/images/project3-1.jpg",
        "/images/project3-2.jpg",
        "/images/project3-3.jpg"
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
      <main className="mx-auto lg:p-32 px-5 py-10">
        {/* Projects Grid */}
        <div className="space-y-24">
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
    <div className={`flex flex-col gap-8 lg:gap-12 `}>
      {/* Image Carousel */}
      <div className="w-full relative group">
        <div className="relative overflow-hidden rounded-2xl shadow-xl dark:shadow-none dark:border-2 border-neutral-700 bg-neutral-100 lg:h-[80vh] h-[30vh]">
          {/* Placeholder for actual images - replace with your image component */}
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-neutral-600 to-neutral-900">
              {/* <img src={me} className='w-full h-full object-cover object-center' alt="" /> */}
            <span className="text-neutral-500 text-lg">Project Image {currentImageIndex + 1}</span>
          </div>
          
          {/* Carousel Controls */}
          {project.images.length > 1 && (
            <>
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 transform -translate-y-1/2  border border-neutral-700 bg-gradient-to-br from-neutral-700 to-neutral-900 hover:scale-110 duration-300 transition-all text-neutral-200 rounded-full p-2 flex items-center justify-center opacity-0 group-hover:opacity-100"
              >
                <ChevronLeft/>
              </button>
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 transform -translate-y-1/2  border border-neutral-700 bg-gradient-to-br from-neutral-700 to-neutral-900 hover:scale-110 duration-300 transition-all text-neutral-200 rounded-full p-2 flex items-center justify-center opacity-0 group-hover:opacity-100"
              >
                <ChevronRight/>
              </button>
            </>
          )}
          
          {/* Carousel Indicators */}
        </div>
          {project.images.length > 1 && (
            <div className="w-[95%] m-auto mt-3 h-0.5 flex gap-2">
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

      {/* Project Content */}
      <div className="w-[95%] m-auto grid grid-cols-1 md:grid-cols-2 lg:space-x-10 space-y-2 items-start">
        <h2 className="text-xl lg:text-3xl dark:text-neutral-200 text-neutral-700  font-bold">
          {project.title}
        </h2>
        
        <p className="dark:text-neutral-400 text-sm lg:text-base text-pretty text-neutral-600">
          {project.description}
        </p>
      </div>
    </div>
          <div className="h-px w-full  bg-gradient-to-r from-transparent via-neutral-400 to-transparent dark:via-neutral-700"></div>
          </>
  );
};

export default Projects;