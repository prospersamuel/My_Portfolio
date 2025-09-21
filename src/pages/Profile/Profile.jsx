import { Earth, Map } from "lucide-react";
import mee from "../../assets/mee.png";


export default function Profile() {
  return (
    <div className="min-h-screen font-semibold flex">
      {/* Sidebar */}
      <aside className="items-center w-[35%] justify-between h-screen flex p-6">
        <nav className="space-y-6 font-semibold">
          <button className="block hover:text-white text-neutral-400">
            — Introduction
          </button>
          <button className="block hover:text-white text-neutral-400">
            — Work Experience
          </button>
          <button className="block hover:text-white text-neutral-400">
            — Studies
          </button>
          <button className="block hover:text-white text-neutral-400">
            — Technical Skills
          </button>
          <button className="block hover:text-white text-neutral-400">
            — Services
          </button>
        </nav>

                {/* Profile + language */}
        <div className="flex -mt-40 flex-col gap-3 items-center mb-12">
            <div className="w-40 h-40 rounded-full bg-gradient-to-br from-neutral-700 to-neutral-900 dark:from-neutral-600 dark:to-neutral-900 overflow-hidden border-4 border-neutral-300 dark:border-neutral-700 shadow-lg">
              <div className="w-40 h-40 flex items-center justify-center text-neutral-400">
                <img src={mee} alt="" />
              </div>
            </div>
            <p className="text-sm text-neutral-400 flex gap-2 items-center"><Earth/> Africa/Abuja</p>
            <div className="mt-2 flex space-x-2">
              <div className="px-3 py-1 border border-neutral-600 rounded-md text-sm">
                English
              </div>
              <div className="px-3 py-1 border border-neutral-600 rounded-md text-sm">
                French
              </div>
            </div>
        </div>
      </aside>

      {/* Main content */}
      <main className="flex-1 p-20 w-[65%] overflow-auto h-screen">
        {/* Sections */}
        <section id="introduction" className="mb-16">
          <h2 className="text-2xl font-bold mb-4">Introduction</h2>
          <ul className="list-disc list-inside space-y-2 text-neutral-300">
            <li>
              Helping brands and startups build fast, scalable, and engaging
              digital products.
            </li>
            <li>
              Focused on clean UI, smooth UX, and functional business solutions.
            </li>
          </ul>
        </section>

        <section id="work" className="mb-16">
          <h2 className="text-2xl font-bold mb-4">Work Experience</h2>
          <p className="text-neutral-300">Add your work history here…</p>
        </section>

        <section id="studies" className="mb-16">
          <h2 className="text-2xl font-bold mb-4">Studies</h2>
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold">University of Lagos</h3>
              <p className="text-neutral-400">Studied software engineering.</p>
            </div>
            <div>
              <h3 className="font-semibold">Build the Future</h3>
              <p className="text-neutral-400">
                Studied online marketing and personal branding.
              </p>
            </div>
          </div>
        </section>

        <section id="skills" className="mb-16">
          <h2 className="text-2xl font-bold mb-4">Technical Skills</h2>
          <p className="text-neutral-300">
            React, Tailwind, Firebase, Node.js, Git…
          </p>
        </section>

        <section id="services" className="mb-16">
          <h2 className="text-2xl font-bold mb-4">Services</h2>
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold">Web Development</h3>
              <p className="text-neutral-400">
                Modern, responsive websites to grow your brand.
              </p>
            </div>
            <div>
              <h3 className="font-semibold">WhatsApp CRM Chatbots</h3>
              <p className="text-neutral-400">
                Automate customer support, capture leads, and boost sales with
                WhatsApp automation.
              </p>
            </div>
            <div>
              <h3 className="font-semibold">UI/UX Design</h3>
              <p className="text-neutral-400">
                Clean, user-friendly designs tailored for conversions.
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
