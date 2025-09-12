import { Hero } from './Hero';
import { SiReact, SiNextdotjs, SiTypescript, SiTailwindcss, SiFlutter, SiAdobephotoshop, SiCoreldraw, SiNodedotjs } from 'react-icons/si';
import LogoLoop from './LogoLoop';

function Home() {

const techLogos = [
  { node: <SiReact />, title: "React", href: "https://react.dev" },
  { node: <SiNextdotjs />, title: "Next.js", href: "https://nextjs.org" },
  { node: <SiTypescript />, title: "TypeScript", href: "https://www.typescriptlang.org" },
  { node: <SiTailwindcss />, title: "Tailwind CSS", href: "https://tailwindcss.com" },
  { node: <SiFlutter />, title: "Flutter", href: "https://flutter.com" },
  { node: <SiAdobephotoshop />, title: "Adobe Photoshop", href: "https://flutter.com" },
  { node: <SiCoreldraw />, title: "Coreldraw", href: "https://flutter.com" },
  { node: <SiNodedotjs />, title: "Node.js", href: "https://flutter.com" },
];


  return (
    <div className="relative">
      <Hero/>

    <div className='relative mt-10 overflow-hidden'>
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

    </div>
  )
}

export default Home
