import { useEffect } from "react";
import { ArrowLeft, ArrowRight, Github, Layers3 } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import ScreenshotGallery from "../components/ScreenshotGallery";
import { findProject, projects } from "../data/projects";

export default function ProjectPage() {
  const { slug } = useParams();
  const project = findProject(slug);

  useEffect(() => {
    document.title = project ? `${project.title} | Syafiq’s projects` : "Project not found | Syafiq";
    window.scrollTo({ top: 0, behavior: "instant" });
    return () => { document.title = "Muhammad Syafiq | Junior Software Engineer"; };
  }, [project]);

  if (!project) {
    return <main className="case-study" tabIndex={-1}><Link className="case-back" to="/" state={{ section: "projects" }}><ArrowLeft size={16} /> All projects</Link><h1>Project not found</h1><p>Choose a project from the portfolio.</p></main>;
  }

  const next = projects[(projects.indexOf(project) + 1) % projects.length];

  return (
    <main className="case-study project-detail" tabIndex={-1}>
      <Link className="case-back" to="/" state={{ section: "projects" }}><ArrowLeft size={16} /> All projects</Link>
      <header className="project-detail-heading">
        <div className="case-title">
          {project.mascot && <img src={project.mascot} alt="SupportFlow’s corgi helpdesk mascot" width="52" height="52" />}
          <h1>{project.title}<span>.</span></h1>
        </div>
        {project.repository && <a href={project.repository} target="_blank" rel="noopener noreferrer"><Github size={16} /> View code <ArrowRight size={14} /></a>}
      </header>

      <section className="project-photos" aria-labelledby="photos-title">
        <h2 id="photos-title">Project photos</h2>
        {project.gallery?.length > 0
          ? <ScreenshotGallery key={project.slug} slides={project.gallery} />
          : <p className="photos-unavailable">Project screenshots haven’t been added yet.</p>}
      </section>

      <section className="project-detail-section" aria-labelledby="description-title">
        <h2 id="description-title">About the project</h2>
        <p>{project.description}</p>
      </section>

      <section className="project-detail-section" aria-labelledby="features-title">
        <h2 id="features-title">Key features</h2>
        <div className="case-features">{project.features.map(([title, body]) => (
          <article key={title}><span className="feature-mark"><Layers3 size={17} /></span><h3>{title}</h3><p>{body}</p></article>
        ))}</div>
      </section>

      <section className="project-detail-section" aria-labelledby="technologies-title">
        <h2 id="technologies-title">Technologies used</h2>
        <ul className="project-technologies">{project.stack.map((tech) => <li key={tech}>{tech}</li>)}</ul>
      </section>

      <Link to={`/projects/${next.slug}`} className="case-next"><span>UP NEXT<strong>{next.title}</strong></span><ArrowRight size={26} /></Link>
    </main>
  );
}
