import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Hero from "../components/Hero";
import About from "../components/About";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Contact from "../components/Contact";

export default function HomePage({ section }) {
  const location = useLocation();
  const destination = location.state?.section || section;
  useEffect(() => {
    if (destination) document.getElementById(destination)?.scrollIntoView({ block: "start", behavior: "instant" });
    else window.scrollTo({ top: 0, behavior: "instant" });
  }, [destination, location.key]);
  return <main tabIndex={-1}><Hero /><About /><Skills /><Projects /><Contact /></main>;
}
