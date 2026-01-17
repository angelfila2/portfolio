import SkillCard from "./SkillCard";
import { HiOutlineExternalLink } from "react-icons/hi";

const PROJECTS = [
  {
    label: "Room Booking",
    description:
      "A room booking MVP designed to improve operational efficiency by simplifying reservations, preventing double bookings through conflict detection, and offering clear daily and weekly overviews for effective space management.",
    url: "https://github.com/angelfila2/room-booking",
    technology: ["react", "node", "mongodb"],
  },
  {
    label: "LMS Content Scraper & URL Reputation Scanner",
    description:
      "A backend-focused LMS security tool that automatically scans course content, extracts external links, and evaluates their safety using multiple reputation and threat intelligence APIs. Built in response to a real incident involving compromised legacy links, the system enables proactive detection of malicious or inappropriate content within Moodle.",
    url: "https://github.com/angelfila2/LMSGuardian",
    technology: ["python", "postgres"],
  },
  {
    label: "ShopMore E-commerce Platform",
    description:
      "An e-commerce platform based off a famous e-commerce suite that offers a seamless shopping experience with features like user authentication, product browsing, shopping cart, and order management. Built using Java Spring Boot for the backend and PostgreSQL for data storage, ensuring robust performance and scalability.",
    url: "https://github.com/angelfila2/eccomerce-site",
    technology: ["java", "postgres", "spring"],
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen container mx-auto px-4 py-24 md:py-32"
    >
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-10 text-center">
          Featured Projects
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {PROJECTS.map((project, index) => (
            <div
              key={index}
              className="relative rounded-xl border border-slate-200 shadow-sm p-10 md:p-12 bg-white"
            >
              {/* External link icon */}
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute top-4 right-4 text-slate-400 hover:text-slate-900 transition"
                aria-label="Open project"
              >
                <HiOutlineExternalLink className="w-6 h-6" />
              </a>

              {/* Card content */}
              <div className="space-y-5">
                <h2 className="font-bold text-2xl">{project.label}</h2>

                <p className="text-slate-700 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-3 pt-2">
                  {project.technology.map((tech, techIndex) => (
                    <SkillCard language={tech} key={techIndex} size="sm" />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
