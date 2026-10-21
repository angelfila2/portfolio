import { ArrowUpRight, CalendarRange, Github, ShieldCheck, ShoppingBag, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { projects } from "../data/projects";

export default function Projects() {
  return (
    <section id="projects" className="container mx-auto px-4 py-20 md:py-28 scroll-mt-20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-blue-600 text-xs font-semibold tracking-[0.2em] uppercase mb-3">Selected work</p>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">Projects, beyond the code.</h2>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto">The problems, decisions and lessons behind the systems I build.</p>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <article key={project.slug} className="project-card group relative rounded-2xl border border-slate-200 bg-white overflow-hidden shadow-sm hover:shadow-lg transition-shadow">
              {project.cover && <Link to={`/projects/${project.slug}`} tabIndex={-1} aria-hidden="true" className="project-cover"><img src={project.cover} alt="" loading="lazy" /><span><Sparkles size={14} /> Featured AI project</span></Link>}
              {!project.cover && <Link to={`/projects/${project.slug}`} tabIndex={-1} aria-hidden="true" className={`project-cover project-cover--diagram ${project.slug}`}><div className="project-diagram-icon">{project.slug === "room-booking" ? <CalendarRange size={42} /> : project.slug === "lms-guardian" ? <ShieldCheck size={42} /> : <ShoppingBag size={42} />}</div><p>WORKFLOW OVERVIEW</p><div className="project-diagram-steps">{project.workflow.slice(0, 3).map((step) => <span key={step}>{step}</span>)}</div></Link>}
              <div className="p-7 sm:p-8">
                <p className="text-xs text-blue-600 font-semibold tracking-wide mb-3">{project.category}</p>
                <h3 className="text-2xl font-bold text-slate-900 mb-3"><Link className="project-title-link hover:text-blue-600" to={`/projects/${project.slug}`}>{project.title}</Link></h3>
                <p className="text-slate-600 leading-relaxed text-sm mb-6">{project.summary}</p>
                <div className="flex flex-wrap gap-2 mb-7">{project.stack.map((tech) => <span key={tech} className="text-xs text-slate-600 bg-slate-50 border border-slate-100 rounded-md px-2.5 py-1">{tech}</span>)}</div>
                <div className="flex flex-wrap justify-between gap-4 items-center border-t border-slate-100 pt-5">
                  <Link to={`/projects/${project.slug}`} className="inline-flex gap-2 items-center font-semibold text-blue-600 text-sm">Explore the project <ArrowUpRight size={16} /></Link>
                  {project.repository && <a href={project.repository} target="_blank" rel="noopener noreferrer" className="relative z-10 inline-flex items-center gap-2 text-sm text-slate-500 hover:text-slate-900"><Github size={16} /><span>Code</span><span className="sr-only"> for {project.title}</span></a>}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
