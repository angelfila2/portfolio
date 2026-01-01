import SkillCard from "./SkillCard";

const PROJECTS = [
  {
    label: "Room Booking",
    description:
      "A room booking MVP designed to improve operational efficiency by simplifying reservations, preventing double bookings through conflict detection, and offering clear daily and weekly overviews for effective space management",
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original-wordmark.svg",
    technology: ["react", "node", "mongodb"],
  },
  // {
  //   label: "Project 2",
  //   description: "",
  //   url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original-wordmark.svg",
  //   technology: ["react", "node", "mongodb"],
  // },
  // {
  //   label: "Project 3",
  //   description: "",
  //   url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original-wordmark.svg",
  //   technology: ["react", "node", "mongodb"],
  // },
  // {
  //   label: "Project 4",
  //   description: "",
  //   url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original-wordmark.svg",
  //   technology: ["react", "node", "mongodb"],
  // },
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          {PROJECTS.map((e, index) => (
            <div
              className="rounded-xl border border-slate-200 shadow-sm p-10 md:p-12 space-y-5"
              key={index}
            >
              <div className="rounded-xl border border-slate-200 bg-white shadow-sm text-left p-3 ">
                <h2 className="font-bold text-2xl mb-4">{e.label}</h2>
                <p>{e.description}</p>
                <div className="flex flex-wrap gap-3 pt-2">
                  {e.technology.map((language, techIndex) => (
                    <SkillCard language={language} key={techIndex} size="sm" />
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
