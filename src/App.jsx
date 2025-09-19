import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Profile from "./pages/Profile/Profile";
import Layout from "./pages/Layout/Layout";
import AnimatedGrid from "./pages/Layout/AnimatedGrid";
import ClickSpark from "./components/ClickSpark";
import Project from "./pages/Project/Project";

function App() {
  return (
<ClickSpark
  sparkColor='#fff'
  sparkSize={10}
  sparkRadius={15}
  sparkCount={8}
  duration={400}
>
    <div className="dark:bg-[radial-gradient(ellipse,_var(--tw-gradient-stops))] dark:from-[#212121]  dark:to-neutral-950 dark:text-neutral-200 bg-neutral-50 min-h-screen transition-colors duration-300">
      <AnimatedGrid />
  {/* Your content here */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="profile" element={<Profile />} />
        <Route path="projects" element={<Project />} />
        <Route path="*" element={<div className="flex items-center justify-center h-screen text-neutral-700 dark:text-neutral-300">Not Found</div>}></Route>
      </Routes>
      <Layout/>
    </div>
</ClickSpark>
  );
}

export default App;