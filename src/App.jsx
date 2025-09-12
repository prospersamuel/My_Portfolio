import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Profile from "./pages/home/Profile";
import Layout from "./pages/Layout";
import AnimatedGrid from "./pages/home/AnimatedGrid";

function App() {
  return (
    <div className="dark:bg-[radial-gradient(circle,_var(--tw-gradient-stops))] from-neutral-100 to-neutral-200 dark:from-neutral-900 dark:to-neutral-950 bg-neutral-50 min-h-screen transition-colors duration-300">
      <AnimatedGrid />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="profile" element={<Profile />} />
        <Route path="*" element={<div className="flex items-center justify-center h-screen text-neutral-700 dark:text-neutral-300">Not Found</div>}></Route>
      </Routes>
      <Layout/>
    </div>
  );
}

export default App;