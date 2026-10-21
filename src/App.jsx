import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import ProjectPage from "./pages/ProjectPage";
import "./project-pages.css";

export default function App() {
  return <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-amber-50/20"><a href="#main-content" className="skip-link" onClick={(event) => { event.preventDefault(); document.querySelector("main")?.focus(); }}>Skip to content</a><Navbar /><div id="main-content"><Routes><Route path="/" element={<HomePage />} /><Route path="/projects/:slug" element={<ProjectPage />} />{["about", "skills", "projects", "contact"].map((section) => <Route key={section} path={`/${section}`} element={<HomePage section={section} />} />)}<Route path="*" element={<ProjectPage />} /></Routes></div><Footer /></div>;
}
