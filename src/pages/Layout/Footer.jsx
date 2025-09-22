// components/Footer.jsx
import { Github, Linkedin, Twitter, Mail, ExternalLink, Instagram, PhoneCall } from 'lucide-react';
import { SiWhatsapp, SiX } from 'react-icons/si';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className=" border-neutral-800 text-neutral-600 dark:text-neutral-400 pb-10 w-[80%] m-auto">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Portfolio Links */}
          <div>
            <h4 className="font-semibold text-neutral-700 dark:text-neutral-200 mb-4 text-lg">Portfolio</h4>
            <ul className="space-y-3">
              {
                [
                  {name: 'Profile', link: '/profile'},
                  {name: 'Projects', link: '/projects'}
                ].map((link, i)=>(
              <li key={i}>
                <Link 
                  to={link.link} 
                  className="dark:hover:text-neutral-200 hover:text-neutral-900 transition-colors"
                >
                  <span>{link.name}</span>
                </Link>
              </li>
                ))
              }
            </ul>
          </div>

          {/* Connect Links */}
          <div>
            <h4 className="font-semibold text-neutral-700 dark:text-neutral-200 mb-4 text-lg">Connect</h4>
            <ul className="space-y-3">
              {/* {
                [
                  {name: 'Github', }
                ]
              } */}
              <li>
                <a 
                  href="https://github.com/prospersamuel" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="dark:hover:text-neutral-200 hover:text-neutral-900 transition-colors flex items-center gap-2 group"
                >
                  <Github className="w-4 h-4" />
                  <span>GitHub</span>
                </a>
              </li>
              <li>
                <a 
                  href="https://www.instagram.com/prosper_samuel55/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="dark:hover:text-neutral-200 hover:text-neutral-900 transition-colors flex items-center gap-2 group"
                >
                  <Instagram className="w-4 h-4" />
                  <span>Instagram</span>
                </a>
              </li>
              <li>
                <a 
                  href="https://x.com/ProsperSam35123" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="dark:hover:text-neutral-200 hover:text-neutral-900 transition-colors flex items-center gap-2 group"
                >
                  <SiX className="w-4 h-4" />
                  <span>Twitter</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-neutral-700 dark:text-neutral-200 mb-4 text-lg">Services</h4>
            <ul className="space-y-3">
              <li>
                <span className="dark:hover:text-neutral-200 hover:text-neutral-900 transition-colors">
                  Web Development
                </span>
              </li>
              <li>
                <span className="dark:hover:text-neutral-200 hover:text-neutral-900 transition-colors">
                  UI/UX Design
                </span>
              </li>
              <li>
                <span className="dark:hover:text-neutral-200 hover:text-neutral-900 transition-colors">
                  Mobile Apps
                </span>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-neutral-700 dark:text-neutral-200 mb-4 text-lg">Get In Touch</h4>
            <div className="space-y-3">
              <a 
                href="mailto:prospersamuel100@gmail.com" 
                className="dark:hover:text-neutral-200 hover:text-neutral-900 transition-colors flex items-center gap-2 group"
              >
                <Mail className="w-5 h-5" />
                <span className='truncate'>prospersamuel100@gmail.com</span>
              </a>
              <p className="text-sm">
                Currently available for new projects and opportunities.
              </p>
              <div className="flex gap-3 pt-2">
                <a 
                  href="tel:+2349133037955" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-2 rounded-full border border-neutral-100 dark:border-neutral-700 bg-neutral-100 shadow-md dark:bg-gradient-to-br from-neutral-700 to-neutral-900 dark:from-neutral-600 dark:to-neutral-900 hover:scale-110 duration-300 transition"
                  aria-label="phone number"
                >
                  <PhoneCall className="w-5 h-5" />
                </a>
                <a 
                  href="https://wa.me/2349133037955" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-2 rounded-full border border-neutral-100 dark:border-neutral-700 bg-neutral-100 shadow-md dark:bg-gradient-to-br from-neutral-700 to-neutral-900 dark:from-neutral-600 dark:to-neutral-900 hover:scale-110 duration-300 transition"
                  aria-label="whatsapp"
                >
                  <SiWhatsapp className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className='h-px w-full mt-10  bg-gradient-to-r from-transparent via-neutral-400 to-transparent dark:via-neutral-700'></div>

        {/* Bottom Bar */}
        <div className=" pt-8 flex justify-center">
          <div className="text-sm mb-4 md:mb-0">
            © {currentYear} Prosper Samuel. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;