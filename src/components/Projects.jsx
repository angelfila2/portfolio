import SkillCard from "./SkillCard";
import { Github, ExternalLink } from "lucide-react";

const PROJECTS = [
  {
    label: "Room Booking MVP",
    description:
      "A room booking system designed to streamline reservations, eliminate double-bookings with automated conflict detection, and provide clear calendar views for operational space management.",
    url: "https://github.com/angelfila2/room-booking",
    technology: ["react", "node", "mongodb"],
  },
  {
    label: "LMS Security & URL Scanner",
    description:
      "A backend security tool built in response to a real incident with compromised legacy links in Moodle. Automatically scans course content, extracts external URLs, and verifies reputation via threat intelligence APIs.",
    url: "https://github.com/angelfila2/LMSGuardian",
    technology: ["python", "postgres"],
  },
  {
    label: "ShopMore E-commerce Platform",
    description:
      "A full-featured e-commerce backend and shopping platform with user authentication, product catalog browsing, cart operations, and transactional order management built with high reliability.",
    url: "https://github.com/angelfila2/eccomerce-site",
    technology: ["java", "spring", "postgres"],
  },
];

const Projects = () => {
  return (
    <section id="projects" className="container mx-auto px-4 py-20 md:py-28">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-3">
            Featured Projects
          </h2>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto">
            Practical backend systems, security tools, and applications I've
            built.
          </p>
        </div>

        {/* Balanced 3-column layout on large screens */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
          {PROJECTS.map((project, index) => (
            <div
              key={index}
              className="flex flex-col justify-between rounded-2xl border border-slate-200 shadow-sm p-6 sm:p-8 bg-white hover:shadow-md hover:border-slate-300 transition-all duration-200 group"
            >
              {/* Card Header & Body */}
              <div>
                <div className="flex items-start justify-between gap-2 mb-4">
                  <h3 className="font-bold text-xl text-slate-900 group-hover:text-blue-600 transition-colors">
                    {project.label}
                  </h3>
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-400 hover:text-slate-900 transition p-1"
                    aria-label={`Open ${project.label} on GitHub`}
                  >
                    <ExternalLink className="w-5 h-5" />
                  </a>
                </div>

                <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6">
                  {project.description}
                </p>
              </div>

              {/* Card Footer: Tech tags + Visible Code Link */}
              <div className="pt-4 border-t border-slate-100 flex flex-col gap-4">
                <div className="flex flex-wrap gap-2">
                  {project.technology.map((tech, techIndex) => (
                    <SkillCard language={tech} key={techIndex} size="sm" />
                  ))}
                </div>

                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-slate-700 hover:text-blue-600 transition-colors pt-1"
                >
                  <Github className="w-4 h-4" />
                  <span>View Repository</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
