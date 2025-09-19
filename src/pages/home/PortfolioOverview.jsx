import { useState } from "react";
import {
  Code2,
  Palette,
  Laptop,
  Database,
  Mail,
  Settings,
  Video,
  Edit,
  PhoneCall,
} from "lucide-react";
import {SiChatbot, SiOnlyoffice, SiWhatsapp} from 'react-icons/si'

export const PortfolioOverview = () => {
  const [activeTab, setActiveTab] = useState("skills");

  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 dark:text-neutral-200 mb-3">
            A Developer Who Delivers
          </h2>
          <p className="text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
            I design and build clean, modern web apps with a focus on
            performance, usability, and great user experience.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Tabs */}
            <div className="border-b flex flex-col justify-start sm:flex-row border-neutral-200 dark:border-neutral-700 mb-8">
              <button
                className={`px-4 py-3 font-medium ${
                  activeTab === "skills"
                    ? "text-neutral-800 dark:text-neutral-200 border-b-2 border-neutral-600"
                    : "text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-200"
                }`}
                onClick={() => setActiveTab("skills")}
              >
                Skills & Workflow
              </button>
              <button
                className={`px-4 py-3 font-medium ${
                  activeTab === "services"
                    ? "text-neutral-800 dark:text-neutral-200 border-b-2 border-neutral-600"
                    : "text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-200"
                }`}
                onClick={() => setActiveTab("services")}
              >
                Services I Offer
              </button>
              <button
                className={`px-4 py-3 font-medium ${
                  activeTab === "extras"
                    ? "text-neutral-800 dark:text-neutral-200 border-b-2 border-neutral-600"
                    : "text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-200"
                }`}
                onClick={() => setActiveTab("extras")}
              >
                Extra Value
              </button>
            </div>

            {/* Skills */}
            {activeTab === "skills" && (
              <>
                <h2 className="text-2xl font-bold text-neutral-900 dark:text-neutral-200 mb-6">
                  My Tech Stack & Process
                </h2>
                <p className="text-neutral-600 dark:text-neutral-400 mb-8">
                  I combine modern frontend tools with strong fundamentals to
                  build apps that are fast, scalable, and visually appealing.
                </p>

                <div className="space-y-8">
                  <div className="pb-8 border-b border-neutral-200 dark:border-neutral-700">
                    <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                      <Code2 className="w-5 h-5 text-neutral-600 " />
                      Clean Frontend Development
                    </h3>
                    <p className="text-neutral-600 dark:text-neutral-400">
                      React + Tailwind CSS for responsive, accessible, and
                      maintainable user interfaces.
                    </p>
                  </div>

                  <div className="pb-8 border-b border-neutral-200 dark:border-neutral-700">
                    <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                      <Database className="w-5 h-5 text-neutral-600" />
                      Node.js & Backend Integrations
                    </h3>
                    <p className="text-neutral-600 dark:text-neutral-400">
                      Real-time databases, authentication, and secure cloud
                      functions for scalable apps.
                    </p>
                  </div>

                  <div className="pb-8 border-b border-neutral-200 dark:border-neutral-700">
                    <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                      <Palette className="w-5 h-5 text-neutral-600" />
                      UI/UX Design Sense
                    </h3>
                    <p className="text-neutral-600 dark:text-neutral-400">
                      I focus on usability and aesthetics to create intuitive,
                      user-friendly experiences.
                    </p>
                  </div>
                </div>
              </>
            )}

            {/* Services */}
            {activeTab === "services" && (
              <>
                <h2 className="text-2xl font-bold text-neutral-900 dark:text-neutral-200 mb-6">
                  What I Can Do For You
                </h2>
                <p className="text-neutral-600 dark:text-neutral-400 mb-8">
                  From concept to deployment, I help bring ideas to life with
                  polished and functional solutions.
                </p>

                <div className="space-y-8">
                  <div>
                    <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                      <Laptop className="w-5 h-5 text-neutral-600" />
                      Web Development
                    </h3>
                    <p className="text-neutral-600 dark:text-neutral-400">
                      Custom websites using wordpress or code and mobile applications tailored to your needs.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                      <Palette className="w-5 h-5 text-neutral-600" />
                      UI/UX Design
                    </h3>
                    <p className="text-neutral-600 dark:text-neutral-400">
                      Pixel-perfect designs that balance creativity with
                      usability.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                      <Settings className="w-5 h-5 text-neutral-600" />
                      App Optimization
                    </h3>
                    <p className="text-neutral-600 dark:text-neutral-400">
                      Performance tuning, SEO best practices, and responsive
                      layouts.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                      <SiChatbot className="w-5 h-5 text-neutral-600" />
                      Automated WhatsApp CRM Chatbots
                    </h3>
                    <p className="text-neutral-600 dark:text-neutral-400">
                      I can build automated WhatsApp Chatbots that manage customer inquiries, Capture leads, Send reminders and connect with your CRM. This means faster response, Less manual work and 24/7 customer support that helps you close more deals.
                    </p>
                  </div>
                </div>
              </>
            )}

            {/* Extras */}
            {activeTab === "extras" && (
              <>
                <h2 className="text-2xl font-bold text-neutral-900 dark:text-neutral-200 mb-6">
                  Extra Skills That Add Value
                </h2>
                <p className="text-neutral-600 dark:text-neutral-400 mb-8">
                  Beyond development, I bring creative and productivity skills
                  that make me a versatile partner for your projects.
                </p>

                <div className="space-y-8">
                  <div>
                         <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                      <Video className="w-5 h-5 text-neutral-600" />
                      Video Editing
                    </h3>
                    <p className="text-neutral-600 dark:text-neutral-400">
                      Polished promo clips or tutorials to support your product
                      launches.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                      <Edit className="w-5 h-5 text-neutral-600" />
                     Photoshop & CorelDraw
                    </h3>
                    <p className="text-neutral-600 dark:text-neutral-400">
                    Graphics, banners, and assets that align perfectly with
                      your brand.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                      <SiOnlyoffice className="w-5 h-5 text-neutral-600" />
                     Microsoft Office
                    </h3>
                    <p className="text-neutral-600 dark:text-neutral-400">
                    Organized reports, docs, and presentations that
                      communicate clearly.
                    </p>
                  </div>
                </div>
              </>
            )}
          </div>

          {/* Sidebar - Contact */}
          <div className="lg:col-span-1">
            <div className="dark:bg-neutral-900/70 sticky top-6 bg-neutral-100/5 backdrop-blur-sm border-2 border-neutral-300 dark:border-neutral-700 rounded-2xl p-6 shadow-md max-w-md w-full order-1 lg:order-2 overflow-hidden">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-full bg-neutral-100 dark:bg-neutral-900/30 flex items-center justify-center">
                  <Mail className="w-6 h-6 text-neutral-600" />
                </div>
                <div>
                  <h3 className="font-semibold">Get in Touch</h3>
                  <p className="text-sm text-neutral-600 dark:text-neutral-400">
                    Let’s connect and collaborate.
                  </p>
                </div>
              </div>

              <div className="space-y-3">
                <a
                  href="mailto:prospersamuel100@gmail.com"
                  className="w-full flex items-center gap-3 p-3 rounded-lg border border-neutral-300 dark:border-neutral-700 hover:scale-105 transition-all"
                >
                  <Mail className="w-5 h-5 text-neutral-600 animate-pulsing animate-iteration-count-infinite" /> Email Me
                </a>
                <a
                  href="tel:+2349133037955"
                  className="w-full flex items-center gap-3 p-3 rounded-lg border border-neutral-300 dark:border-neutral-700 hover:scale-105 transition-all"
                >
                  <PhoneCall className="w-5 h-5 text-neutral-600 animate-pulsing animate-iteration-count-infinite" />Call Me
                </a>
                <a
                  href="https://wa.me/2349133037955"
                  target="_blank"
                  className="w-full flex items-center gap-3 p-3 rounded-lg border border-neutral-300 dark:border-neutral-700 hover:scale-105 transition-all"
                >
                  <SiWhatsapp className="w-5 h-5 text-neutral-600 animate-pulsing animate-iteration-count-infinite" /> WhatsApp Me
                </a>
              </div>

<div className='h-px w-full mt-6 bg-gradient-to-r from-transparent via-neutral-400 to-transparent dark:via-neutral-700'></div>


              <div className="mt-6">
                <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-2">
                  Typical response time:
                </p>
                <p className="font-medium">Within 24 hours</p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-20">
          <h2 className="text-3xl font-bold mb-6">
            Ready to start your next project?
          </h2>
          <div className="flex gap-4 flex-row justify-center">
             <button
              className="px-6 py-3 rounded-lg bg-gradient-to-br from-neutral-700 to-neutral-900 dark:from-neutral-600 dark:to-neutral-900 text-white font-medium shadow-md hover:scale-110 transition-all duration-300 text-center"
            >
             Get in touch
            </button>
            <button
              className="px-6 py-3 rounded-lg border border-neutral-300 dark:border-neutral-700 text-neutral-800 dark:text-neutral-200 font-medium hover:scale-110 transition-all duration-300 text-center"
            >
              View Projects
            </button>
          </div>
        </div>

<div className='h-px w-full mt-20 sm:mt-32 bg-gradient-to-r from-transparent via-neutral-400 to-transparent dark:via-neutral-700'></div>
      </div>
    </section>
  );
};