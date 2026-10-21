import { useEffect } from "react";
import { ArrowLeft, ArrowRight, Github, Layers3, ShieldCheck } from "lucide-react";
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

  if (!project) return <main className="case-study" tabIndex={-1}><Link className="case-back" to="/" state={{ section: "projects" }}><ArrowLeft size={16} /> All projects</Link><h1>Project not found</h1><p>Choose a project from the portfolio to read its case study.</p></main>;
  const next = projects[(projects.indexOf(project) + 1) % projects.length];
  return (
    <main className="case-study" tabIndex={-1}>
      <Link className="case-back" to="/" state={{ section: "projects" }}><ArrowLeft size={16} /> All projects</Link>
      <header className="case-hero">
        <div className="case-eyebrow">PROJECT CASE STUDY <span>/</span> {project.category}</div>
        <div className="case-title">{project.mascot && <img src={project.mascot} alt="SupportFlow’s corgi helpdesk mascot" width="68" height="68" />}<h1>{project.title}<span>.</span></h1></div>
        <p className="case-tagline">{project.tagline}</p>
        <div className="case-stack">{project.stack.map((tech) => <span key={tech}>{tech}</span>)}</div>
        <div className="case-meta"><p>{project.role}</p>{project.repository && <a href={project.repository} target="_blank" rel="noopener noreferrer"><Github size={16} /> View source code <ArrowRight size={15} /></a>}</div>
      </header>

      {project.gallery?.length > 0 && <ScreenshotGallery key={project.slug} slides={project.gallery} />}

      <div className="case-overview">
        <Section number="01" title="The problem"><p>{project.problem}</p></Section>
        <Section number="02" title="The approach"><p>{project.approach}</p></Section>
      </div>
      <Section number="03" title="What it does" description="A closer look at the functionality.">
        <div className="case-features">{project.features.map(([title, body]) => <article key={title}><span className="feature-mark"><Layers3 size={17} /></span><h3>{title}</h3><p>{body}</p></article>)}</div>
      </Section>
      <Section number="04" title={project.slug === "supportflow" ? "Inside the AI workflow" : "How the workflow fits together"}>
        <ol className="case-workflow">{project.workflow.map((step, number) => <li key={step}><span>{String(number + 1).padStart(2, "0")}</span><strong>{step}</strong>{number < project.workflow.length - 1 && <ArrowRight size={17} aria-hidden="true" />}</li>)}</ol>
      </Section>
      {project.decisions.length > 0 && <Section number="05" title="Engineering decisions"><div className="case-decisions">{project.decisions.map(([title, body]) => <article key={title}><h3>{title}</h3><p>{body}</p></article>)}</div></Section>}
      <section className="case-validation"><span><ShieldCheck size={20} /></span><div><h2>{project.validation ? "Validation, with context" : "Scope and boundaries"}</h2>{project.validation && <p>{project.validation}</p>}<p>{project.limitations}</p></div></section>
      <Section number="06" title="What I learned"><p className="case-learning">{project.learning}</p></Section>
      {project.sources && <div className="case-sources"><span>Explore the implementation</span>{project.sources.map((source) => <a key={source.url} href={source.url} target="_blank" rel="noopener noreferrer">{source.label} ↗</a>)}</div>}
      <Link to={`/projects/${next.slug}`} className="case-next"><span>UP NEXT<strong>{next.title}</strong></span><ArrowRight size={26} /></Link>
    </main>
  );
}

function Section({ number, title, description, children }) {
  return <section className="case-section"><div className="case-section-heading"><span>{number}</span><h2>{title}</h2></div>{description && <p className="case-section-description">{description}</p>}{children}</section>;
}
