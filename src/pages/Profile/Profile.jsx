import { Calendar, ChevronRight, Earth } from "lucide-react";
import mee from "../../assets/mee.png";
import BlurText from "../../components/BlurText";

export default function Profile() {
  return (
    <>
    <div className="min-h-screen text-neutral-700 dark:text-neutral-200 flex">
      {/* Sidebar */}
      <div className="absolute flex w-full justify-between p-4 items-center space-x-3">
        <p className="text-xs md:hidden md:text-sm flex gap-1 md:gap-2 items-center">
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
          <button className="block">
            <span className="text-neutral-400 dark:text-neutral-600">—</span>{" "}
            Introduction
          </button>
          <button className="block">
            <span className="text-neutral-400 dark:text-neutral-600">—</span>{" "}
            Work Experience
          </button>
          <button className="block">
            <span className="text-neutral-400 dark:text-neutral-600">—</span>{" "}
            Studies
          </button>
          <button className="block">
            <span className="text-neutral-400 dark:text-neutral-600">—</span>{" "}
            Technical Skills
          </button>
          <button className="block">
            <span className="text-neutral-400 dark:text-neutral-600">—</span>{" "}
            Services
          </button>
        </nav>

        {/* Profile + language */}
        <div className="flex md:-mt-56 mt-24 flex-col gap-0 md:gap-3 items-start md:items-center">
          <div className="md:w-40 md:h-40 w-10 h-10 rounded-full bg-gradient-to-br from-neutral-700 to-neutral-900 dark:from-neutral-600 dark:to-neutral-900 overflow-hidden border border-neutral-300 dark:border-neutral-700 shadow-md">
            <img
              src={mee}
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
        <div className="flex items-center mb-6 md:-ml-2 -m-0 pl-4 pr-1 border border-neutral-300 dark:border-neutral-700 bg-gradient-to-br from-neutral-700 to-neutral-900 dark:from-neutral-700 dark:to-neutral-900 rounded-full w-fit py-0.5 md:py-1.5 space-x-4 ">
          <Calendar className="md:size-5 size-4"/>
          <span className="text-sm md:text-base">Schedule a call</span>
          <div className="rounded-full border p-0.5 border-neutral-300 dark:border-neutral-700">
            <ChevronRight className="size-4 md:size-5"/>
          </div>
        </div>
        <div className=" mb-8">
         <BlurText
            text="Prosper Samuel"
            delay={150}
            animateBy="words"
            direction="top"
            className="text-3xl md:text-4xl lg:text-6xl text-center font-bold dark:text-neutral-200 text-neutral-800 leading-tight"
          />
           <h2 className="md:text-2xl text-lg md:mt-2.5 mt-0.5 text-neutral-900 dark:text-neutral-300">
              Full Stack Developer
            </h2>
          </div>
        {/* Sections */}
        <section id="introduction" className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Introduction</h2>
          <p className="text-neutral-600 dark:text-neutral-400 text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
            quasi itaque earum maxime debitis labore ad odit vel laborum,
            officiis excepturi non beatae, atque autem voluptas. Omnis atque
            possimus voluptatibus ea molestias iure nobis dolores facilis esse
            quae, quibusdam nesciunt.
          </p>
        </section>

        <div className="h-px w-full mb-8 bg-gradient-to-r from-transparent via-neutral-400 to-transparent dark:via-neutral-700"></div>

        <section id="work" className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Work Experience</h2>
          <p className="text-neutral-600 dark:text-neutral-400 text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
            error ullam tempora laborum quam repellendus nisi rem et ipsum,
            similique provident fugit magni recusandae distinctio laboriosam
            esse adipisci quisquam ipsa corporis nihil, earum sequi
            voluptatibus! Quod ipsum deserunt soluta pariatur.
          </p>
        </section>

        <div className="h-px w-full mb-8 bg-gradient-to-r from-transparent via-neutral-400 to-transparent dark:via-neutral-700"></div>

        <section id="studies" className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Studies</h2>
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold">University of Lagos</h3>
              <p className="text-neutral-600 dark:text-neutral-400 text-sm">
                Studied software engineering.
              </p>
            </div>
            <div>
              <h3 className="font-semibold">Build the Future</h3>
              <p className="text-neutral-600 dark:text-neutral-400 text-sm">
                Studied online marketing and personal branding.
              </p>
            </div>
          </div>
        </section>

        <div className="h-px w-full mb-8 bg-gradient-to-r from-transparent via-neutral-400 to-transparent dark:via-neutral-700"></div>

        <section id="skills" className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Technical Skills</h2>
          <ul className="list-disc list-inside space-y-2 text-neutral-600 dark:text-neutral-400 text-sm">
            <li>React</li>
            <li>Tailwind</li>
            <li>Firebase</li>
            <li>Node.js</li>
            <li>Git…</li>
          </ul>
        </section>

        <div className="h-px w-full mb-8 bg-gradient-to-r from-transparent via-neutral-400 to-transparent dark:via-neutral-700"></div>

        <section id="services">
          <h2 className="text-2xl font-bold mb-4">Services</h2>
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold">Web Development</h3>
              <p className="text-neutral-600 dark:text-neutral-400 text-sm">
                Modern, responsive websites to grow your brand.
              </p>
            </div>
            <div>
              <h3 className="font-semibold">WhatsApp CRM Chatbots</h3>
              <p className="text-neutral-600 dark:text-neutral-400 text-sm">
                Automate customer support, capture leads, and boost sales with
                WhatsApp automation.
              </p>
            </div>
            <div>
              <h3 className="font-semibold">UI/UX Design</h3>
              <p className="text-neutral-600 dark:text-neutral-400 text-sm">
                Clean, user-friendly designs tailored for conversions.
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
