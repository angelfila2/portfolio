import SkillCard from "./SkillCard";

const Skills = () => {
  return (
    <section
      id="skills"
      className="min-h-screen container mx-auto px-4 py-24 md:py-32"
    >
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-10 text-center">
          Skills
        </h2>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
          {/* LANGUAGES */}
          <div className="h-full rounded-xl border border-slate-200 bg-white shadow-sm p-10 md:p-12 flex flex-col gap-6">
            <h1 className="text-3xl font-bold min-h-[72px]">Languages</h1>

            <SkillCard language="javascript" />
            <SkillCard language="java" />
            <SkillCard language="python" />
          </div>

          {/* FRAMEWORKS */}
          <div className="h-full rounded-xl border border-slate-200 bg-white shadow-sm p-10 md:p-12 flex flex-col gap-6">
            <h1 className="text-3xl font-bold min-h-[72px]">Frameworks</h1>

            <SkillCard language="react" />
            <SkillCard language="node" />
          </div>

          {/* DATABASE & TOOLS */}
          <div className="h-full rounded-xl border border-slate-200 bg-white shadow-sm p-10 md:p-12 flex flex-col gap-6">
            <h1 className="text-3xl font-bold min-h-[72px]">
              Database and Tools
            </h1>

            <SkillCard language="mongodb" />
            <SkillCard language="mysql" />
            <SkillCard language="postgres" />
            <SkillCard language="git" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
