import { useState } from "react";
import { motion } from "framer-motion";
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
import { SiChatbot, SiOnlyoffice, SiWhatsapp } from "react-icons/si";
import { Link } from "react-router-dom";
import { scrollToTop } from "../Layout/Layout";

export const PortfolioOverview = () => {
  const [activeTab, setActiveTab] = useState("skills");

  const tabs = [
    { id: "skills", label: "Skills & Workflow" },
    { id: "services", label: "Services I Offer" },
    { id: "extras", label: "Extra Value" },
  ];

  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-2xl lg:text-3xl font-bold text-neutral-900 dark:text-neutral-200 mb-3">
            A Developer Who Delivers
          </h2>
          <p className="text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
            I design and build clean, modern web apps with a focus on
            performance, usability, and great user experience.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Tabs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="border-b flex justify-start border-neutral-200 dark:border-neutral-700 mb-8"
            >
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  className={`px-3 lg:px-4 py-2 font-medium text-[12px] lg:text-[16px] transition-all duration-200 ${
                    activeTab === tab.id
                      ? "text-neutral-700 dark:text-neutral-200 border-b-2 border-neutral-600"
                      : "text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-200"
                  }`}
                  onClick={() => setActiveTab(tab.id)}
                >
                  {tab.label}
                </button>
              ))}
            </motion.div>

            {/* Skills Tab */}
            {activeTab === "skills" && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4 }}
              >
                <h2 className="text-2xl font-bold text-neutral-900 dark:text-neutral-200 mb-6">
                  My Tech Stack & Process
                </h2>
                <p className="text-neutral-600 dark:text-neutral-400 mb-8">
                  I combine modern frontend tools with strong fundamentals to
                  build apps that are fast, scalable, and visually appealing.
                </p>

                <div className="space-y-8">
                  {[
                    {
                      icon: Code2,
                      title: "Clean Frontend Development",
                      desc: "React + Tailwind CSS for responsive, accessible, and maintainable user interfaces.",
                    },
                    {
                      icon: Database,
                      title: "Node.js & Backend Integrations",
                      desc: "Real-time databases, authentication, and secure cloud functions for scalable apps.",
                    },
                    {
                      icon: Palette,
                      title: "UI/UX Design Sense",
                      desc: "I focus on usability and aesthetics to create intuitive, user-friendly experiences.",
                    },
                  ].map((item, index) => (
                    <motion.div
                      key={item.title}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="pb-8 border-b border-neutral-200 dark:border-neutral-700"
                    >
                      <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                        <item.icon className="w-5 h-5 text-neutral-600" />
                        {item.title}
                      </h3>
                      <p className="text-neutral-600 dark:text-neutral-400">
                        {item.desc}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Services Tab */}
            {activeTab === "services" && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4 }}
              >
                <h2 className="text-2xl font-bold text-neutral-900 dark:text-neutral-200 mb-6">
                  What I Can Do For You
                </h2>
                <p className="text-neutral-600 dark:text-neutral-400 mb-8">
                  From concept to deployment, I help bring ideas to life with
                  polished and functional solutions.
                </p>

                <div className="space-y-8">
                  {[
                    {
                      icon: Laptop,
                      title: "Web Development",
                      desc: "Custom websites using WordPress or code and mobile applications tailored to your needs.",
                    },
                    {
                      icon: Palette,
                      title: "UI/UX Design",
                      desc: "Pixel-perfect designs that balance creativity with usability.",
                    },
                    {
                      icon: Settings,
                      title: "App Optimization",
                      desc: "Performance tuning, SEO best practices, and responsive layouts.",
                    },
                    {
                      icon: SiChatbot,
                      title: "Automated WhatsApp CRM Chatbots",
                      desc: "I can build automated WhatsApp Chatbots that manage customer inquiries, capture leads, send reminders and connect with your CRM.",
                    },
                  ].map((item, index) => (
                    <motion.div
                      key={item.title}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                        <item.icon className="w-5 h-5 text-neutral-600" />
                        {item.title}
                      </h3>
                      <p className="text-neutral-600 dark:text-neutral-400">
                        {item.desc}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Extras Tab */}
            {activeTab === "extras" && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4 }}
              >
                <h2 className="text-2xl font-bold text-neutral-900 dark:text-neutral-200 mb-6">
                  Extra Skills That Add Value
                </h2>
                <p className="text-neutral-600 dark:text-neutral-400 mb-8">
                  Beyond development, I bring creative and productivity skills
                  that make me a versatile partner for your projects.
                </p>

                <div className="space-y-8">
                  {[
                    {
                      icon: Video,
                      title: "Video Editing",
                      desc: "Polished promo clips or tutorials to support your product launches.",
                    },
                    {
                      icon: Edit,
                      title: "Photoshop & CorelDraw",
                      desc: "Graphics, banners, and assets that align perfectly with your brand.",
                    },
                    {
                      icon: SiOnlyoffice,
                      title: "Microsoft Office",
                      desc: "Organized reports, docs, and presentations that communicate clearly.",
                    },
                  ].map((item, index) => (
                    <motion.div
                      key={item.title}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                        <item.icon className="w-5 h-5 text-neutral-600" />
                        {item.title}
                      </h3>
                      <p className="text-neutral-600 dark:text-neutral-400">
                        {item.desc}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}
          </div>

          {/* Sidebar - Contact */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-1"
          >
            <div className="dark:bg-neutral-900/70 sticky top-6 bg-neutral-100/5 backdrop-blur-sm border-2 border-neutral-300 dark:border-neutral-700 rounded-2xl p-6 shadow-md max-w-md w-full overflow-hidden">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-full bg-neutral-200/70 dark:bg-neutral-700 flex items-center justify-center">
                  <Mail className="w-6 h-6 dark:text-neutral-900 text-neutral-600" />
                </div>
                <div>
                  <h3 className="font-semibold">Get in Touch</h3>
                  <p className="text-sm text-neutral-600 dark:text-neutral-400">
                    Let's connect and collaborate.
                  </p>
                </div>
              </div>

              <div className="space-y-3">
                {[
                  {
                    href: "mailto:prospersamuel100@gmail.com",
                    icon: Mail,
                    label: "Email Me",
                  },
                  {
                    href: "tel:+2349133037955",
                    icon: PhoneCall,
                    label: "Call Me",
                  },
                  {
                    href: "https://wa.me/2349133037955",
                    icon: SiWhatsapp,
                    label: "WhatsApp Me",
                    external: true,
                  },
                ].map((item, index) => (
                  <motion.a
                    key={item.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                    href={item.href}
                    target={item.external ? "_blank" : undefined}
                    rel={item.external ? "noreferrer noopener" : undefined}
                    whileHover={{ scale: 1.02 }}
                    className="w-full flex items-center gap-3 p-3 rounded-lg border border-neutral-300 dark:border-neutral-700 hover:scale-105 transition-all duration-200"
                  >
                    <item.icon className="w-5 h-5 text-neutral-600" />
                    {item.label}
                  </motion.a>
                ))}
              </div>

              <div className="h-px w-full mt-6 bg-gradient-to-r from-transparent via-neutral-400 to-transparent dark:via-neutral-700"></div>

              <div className="mt-6">
                <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-2">
                  Typical response time:
                </p>
                <p className="font-medium">Within 24 hours</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mt-20"
        >
          <h2 className="text-3xl font-bold mb-6">
            Ready to start your next project?
          </h2>
          <div className="flex gap-4 flex-row justify-center">
            <motion.a
              href="mailto:prospersamuel100@gmail.com"
              whileHover={{ scale: 1.05 }}
              className="px-6 py-3 rounded-lg bg-gradient-to-br from-neutral-700 to-neutral-900 dark:from-neutral-600 dark:to-neutral-900 text-white font-medium shadow-md hover:scale-110 transition-all duration-300 text-center"
            >
              Get in touch
            </motion.a>
            <motion.div whileHover={{ scale: 1.05 }}>
              <Link
                to={"/projects"}
                onClick={() => scrollToTop()}
                className="px-6 py-3 rounded-lg border border-neutral-300 dark:border-neutral-700 text-neutral-700 dark:text-neutral-200 font-medium hover:scale-110 transition-all duration-300 text-center block"
              >
                View Projects
              </Link>
            </motion.div>
          </div>
        </motion.div>

        <div className="h-px w-full mt-20 sm:mt-32 bg-gradient-to-r from-transparent via-neutral-400 to-transparent dark:via-neutral-700"></div>
      </div>
    </section>
  );
};
