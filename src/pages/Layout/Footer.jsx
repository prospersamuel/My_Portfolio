// components/Footer.jsx
import { motion } from 'framer-motion';
import { Github, Mail, Instagram, PhoneCall } from 'lucide-react';
import { SiWhatsapp, SiX } from 'react-icons/si';
import { Link } from 'react-router-dom';
import { scrollToTop } from './Layout';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const portfolioLinks = [
    { name: 'Home', link: '/' },
    { name: 'Profile', link: '/profile' },
    { name: 'Projects', link: '/projects' }
  ];

  const connectLinks = [
    { name: 'GitHub', icon: Github, href: 'https://github.com/prospersamuel' },
    { name: 'Instagram', icon: Instagram, href: 'https://www.instagram.com/prosper_samuel55/' },
    { name: 'Twitter', icon: SiX, href: 'https://x.com/ProsperSam35123' }
  ];

  const services = [
    'Web Development',
    'UI/UX Design',
    'Mobile Apps'
  ];

  const contactButtons = [
    { icon: PhoneCall, href: 'tel:+2349133037955', label: 'phone number' },
    { icon: SiWhatsapp, href: 'https://wa.me/2349133037955', label: 'whatsapp' }
  ];

  return (
    <footer className="border-neutral-700 text-neutral-600 dark:text-neutral-400 pb-10 w-[80%] m-auto">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mb-8">
          {/* Portfolio Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h4 className="font-semibold text-neutral-700 dark:text-neutral-200 mb-4 text-lg">Portfolio</h4>
            <ul className="space-y-3">
              {portfolioLinks.map((link, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Link 
                    to={link.link} 
                    onClick={() => scrollToTop()}
                    className="dark:hover:text-neutral-200 hover:text-neutral-900 transition-colors"
                  >
                    <span>{link.name}</span>
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Connect Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="font-semibold text-neutral-700 dark:text-neutral-200 mb-4 text-lg">Connect</h4>
            <ul className="space-y-3">
              {connectLinks.map((link, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <a 
                    href={link.href} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="dark:hover:text-neutral-200 hover:text-neutral-900 transition-colors flex items-center gap-2 group"
                  >
                    <link.icon className="w-4 h-4" />
                    <span>{link.name}</span>
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="font-semibold text-neutral-700 dark:text-neutral-200 mb-4 text-lg">Services</h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <span className="dark:hover:text-neutral-200 hover:text-neutral-900 transition-colors">
                    {service}
                  </span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h4 className="font-semibold text-neutral-700 dark:text-neutral-200 mb-4 text-lg">Get In Touch</h4>
            <div className="space-y-3">
              <motion.a 
                href="mailto:prospersamuel100@gmail.com" 
                className="dark:hover:text-neutral-200 hover:text-neutral-900 transition-colors flex items-center gap-2 group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                viewport={{ once: true }}
              >
                <Mail className="w-5 h-5" />
                <span className='truncate'>prospersamuel100@gmail.com</span>
              </motion.a>
              
              <motion.p 
                className="text-sm"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                viewport={{ once: true }}
              >
                Currently available for new projects and opportunities.
              </motion.p>
              
              <motion.div 
                className="flex gap-3 pt-2"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                viewport={{ once: true }}
              >
                {contactButtons.map((button, index) => (
                  <motion.a
                    key={index}
                    href={button.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-full border border-neutral-100 dark:border-neutral-700 bg-neutral-100 shadow-md dark:bg-gradient-to-br from-neutral-700 to-neutral-900 dark:from-neutral-600 dark:to-neutral-900 hover:scale-110 duration-300 transition"
                    aria-label={button.label}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <button.icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </motion.div>
            </div>
          </motion.div>
        </div>

        <motion.div 
          className='h-px w-full mt-10 bg-gradient-to-r from-transparent via-neutral-400 to-transparent dark:via-neutral-700'
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        />

        {/* Bottom Bar */}
        <motion.div 
          className="pt-8 flex justify-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="text-sm">
            © {currentYear} Prosper Samuel. All rights reserved.
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;