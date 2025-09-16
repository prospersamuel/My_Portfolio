import { Code2, HomeIcon, Moon, Sun, User } from "lucide-react";
import Navbar from "./home/NavBar";
import { Outlet, useNavigate } from "react-router-dom";
import { useApp } from "../context/Appcontext";
import { useEffect, useState } from "react";

export default function Layout() {
  const { toggleTheme, theme } = useApp();
  const navigate = useNavigate();

  const items = [
    {
      icon: <HomeIcon size={18} />,
      label: "Home",
      onClick: () => navigate("/"),
    },
    {
      icon: <User size={18} />,
      label: "Profile",
      onClick: () => navigate("profile"),
    },
    {
      icon: <Code2 size={18} />,
      label: "Projects",
      onClick: () => alert("Archive!"),
    },
    {
      icon: theme === "dark" ? <Sun size={18} /> : <Moon size={18} />,
      label: "Theme",
      onClick: () => toggleTheme(),
    },
  ];

  const [isMobile, setIsMobile] = useState(false);

  // Detect mobile screen size
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <div>
      <Outlet />
      <Navbar
        items={items}
        panelHeight={58}
        baseItemSize={40}
        magnification={60}
        spring={{ mass: 0.1, stiffness: isMobile ? 0 : 150, damping: 12 }}
      />
    </div>
  );
}
