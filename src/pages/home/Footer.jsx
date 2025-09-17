// components/Footer.jsx
import { Github, Linkedin, Twitter, Mail, ExternalLink } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className=" border-neutral-800  pb-10 w-[80%] m-auto">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Portfolio Links */}
          <div>
            <h4 className="font-semibold text-neutral-200 mb-4 text-lg">Portfolio</h4>
            <ul className="space-y-3">
              <li>
                <a 
                  href="/projects" 
                  className="text-neutral-400 hover:text-neutral-200 transition-colors flex items-center gap-2 group"
                >
                  <span>Projects</span>
                  <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </li>
              <li>
                <a 
                  href="/about" 
                  className="text-neutral-400 hover:text-neutral-200 transition-colors flex items-center gap-2 group"
                >
                  <span>Profile</span>
                  <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </li>
              <li>
                <a 
                  href="/contact" 
                  className="text-neutral-400 hover:text-neutral-200 transition-colors flex items-center gap-2 group"
                >
                  <span>Contact</span>
                  <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </li>
            </ul>
          </div>

          {/* Connect Links */}
          <div>
            <h4 className="font-semibold text-neutral-200 mb-4 text-lg">Connect</h4>
            <ul className="space-y-3">
              <li>
                <a 
                  href="https://github.com/yourusername" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-neutral-400 hover:text-neutral-200 transition-colors flex items-center gap-2 group"
                >
                  <Github className="w-4 h-4" />
                  <span>GitHub</span>
                </a>
              </li>
              <li>
                <a 
                  href="https://linkedin.com/in/yourusername" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-neutral-400 hover:text-neutral-200 transition-colors flex items-center gap-2 group"
                >
                  <Linkedin className="w-4 h-4" />
                  <span>LinkedIn</span>
                </a>
              </li>
              <li>
                <a 
                  href="https://twitter.com/yourusername" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-neutral-400 hover:text-neutral-200 transition-colors flex items-center gap-2 group"
                >
                  <Twitter className="w-4 h-4" />
                  <span>Twitter</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-neutral-200 mb-4 text-lg">Services</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-neutral-400 hover:text-neutral-200 transition-colors">
                  Web Development
                </a>
              </li>
              <li>
                <a href="#" className="text-neutral-400 hover:text-neutral-200 transition-colors">
                  UI/UX Design
                </a>
              </li>
              <li>
                <a href="#" className="text-neutral-400 hover:text-neutral-200 transition-colors">
                  Mobile Apps
                </a>
              </li>
              <li>
                <a href="#" className="text-neutral-400 hover:text-neutral-200 transition-colors">
                  Consulting
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-neutral-200 mb-4 text-lg">Get In Touch</h4>
            <div className="space-y-3">
              <a 
                href="mailto:prospersamuel100@gmail.com" 
                className="text-neutral-400 hover:text-neutral-200 transition-colors flex items-center gap-2 group"
              >
                <Mail className="w-5 h-5" />
                <span className='truncate'>prospersamuel100@gmail.com</span>
              </a>
              <p className="text-neutral-400 text-sm">
                Currently available for new projects and opportunities.
              </p>
              <div className="flex gap-3 pt-2">
                <a 
                  href="https://github.com/yourusername" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-2 rounded-full border border-neutral-100 dark:border-neutral-700 bg-neutral-100 shadow-md dark:bg-gradient-to-br from-neutral-700 to-neutral-900 dark:from-neutral-600 dark:to-neutral-900 hover:scale-110 duration-300 transition"
                  aria-label="GitHub"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a 
                  href="https://linkedin.com/in/yourusername" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-2 rounded-full border border-neutral-100 dark:border-neutral-700 bg-neutral-100 shadow-md dark:bg-gradient-to-br from-neutral-700 to-neutral-900 dark:from-neutral-600 dark:to-neutral-900 hover:scale-110 duration-300 transition"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a 
                  href="https://twitter.com/yourusername" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-2 rounded-full border border-neutral-100 dark:border-neutral-700 bg-neutral-100 shadow-md dark:bg-gradient-to-br from-neutral-700 to-neutral-900 dark:from-neutral-600 dark:to-neutral-900 hover:scale-110 duration-300 transition"
                  aria-label="Twitter"
                >
                  <Twitter className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className='h-px w-full mt-10  bg-gradient-to-r from-transparent via-neutral-400 to-transparent dark:via-neutral-700'></div>

        {/* Bottom Bar */}
        <div className=" pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-neutral-400 text-sm mb-4 md:mb-0">
            © {currentYear} Prosper Samuel. All rights reserved.
          </div>
          
          <div className="flex items-center gap-6 text-sm text-neutral-400">
            <a href="/privacy" className="hover:text-neutral-200 transition-colors">
              Privacy Policy
            </a>
            <a href="/terms" className="hover:text-neutral-200 transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;