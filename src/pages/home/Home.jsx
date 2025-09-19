import { Hero } from './Hero';
import { SiReact, SiNextdotjs, SiTypescript, SiTailwindcss, SiFlutter, SiAdobephotoshop, SiCoreldraw, SiNodedotjs, SiPython, SiChatbot, SiViadeo, SiViaplay, SiOnlyoffice, SiWordpress, SiWhatsapp } from 'react-icons/si';
import LogoLoop from './LogoLoop';
import { PortfolioOverview } from './PortfolioOverview';

function Home() {

const techLogos = [
  { node: <SiReact />, title: "React", href: "https://react.dev" },
  { node: <SiNextdotjs />, title: "Next.js", href: "https://nextjs.org" },
  { node: <SiTypescript />, title: "TypeScript", href: "https://www.typescriptlang.org" },
  { node: <SiTailwindcss />, title: "Tailwind CSS", href: "https://tailwindcss.com" },
  { node: <SiFlutter />, title: "Flutter", href: "https://flutter.dev" },
  { node: <SiAdobephotoshop />, title: "Adobe Photoshop", href: "https://adobe.com/" },
  { node: <SiCoreldraw />, title: "Coreldraw", href: "https://oreldraw.com" },
  { node: <SiNodedotjs />, title: "Node.js", href: "https://nodejs.org" },
  { node: <SiPython />, title: "Node.js", href: "https://nodejs.org" },
  { node: <SiWordpress />, title: "Node.js", href: "https://nodejs.org" },
];


  return (
    <div className="relative">
      <Hero/>
      <div className='h-px w-full mt-10 sm:mt-5 mb-10 sm:mb-20 bg-gradient-to-r from-transparent via-neutral-400 to-transparent dark:via-neutral-700'></div>

    <div className='relative w-[85%] m-auto mt-10 overflow-hidden'>
      <h2 className="text-2xl md:text-3xl font-bold text-center text-neutral-900 dark:text-neutral-200 mb-3">
            Technologies I Work With
          </h2>
          <p className="text-neutral-600 dark:text-neutral-400 text-center max-w-2xl mx-auto mb-10">
            These are the tools and technologies I use to bring ideas to life
          </p>
      <LogoLoop
        logos={techLogos}
        speed={50}
        direction="left"
        logoHeight={{ mobile: 48, desktop: 88 }}
        gap={{ mobile: 32, desktop: 60 }}
        pauseOnHover
        scaleOnHover
        fadeOut
        ariaLabel="Technology partners"
        className="[--logoloop-logoHeight:48px] [--logoloop-gap:32px] md:[--logoloop-logoHeight:88px] md:[--logoloop-gap:60px]"
      />
    </div>
          <div className='h-px w-full mt-14 sm:mt-24 bg-gradient-to-r from-transparent via-neutral-400 to-transparent dark:via-neutral-700'></div>
    <PortfolioOverview />
    </div>
  )
}

export default Home
