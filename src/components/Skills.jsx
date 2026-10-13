import SkillCard from "./SkillCard";

const Skills = () => {
  return (
    <section
      id="skills"
      className="container mx-auto px-4 py-20 md:py-28 scroll-mt-16"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-3">
            Technical Skills
          </h2>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto">
            Tools, languages, and frameworks I use to build backend systems and
            applications.
          </p>
        </div>

        {/* 3-Column Balanced Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
          {/* 1. LANGUAGES */}
          <div className="rounded-2xl border border-slate-200 bg-white shadow-sm p-6 sm:p-8 flex flex-col gap-4">
            <h3 className="text-xl font-bold text-slate-900 pb-3 border-b border-slate-100">
              Languages
            </h3>
            <div className="flex flex-col gap-3">
              <SkillCard language="java" />
              <SkillCard language="javascript" />
              <SkillCard language="python" />
            </div>
          </div>

          {/* 2. FRAMEWORKS & AI */}
          <div className="rounded-2xl border border-slate-200 bg-white shadow-sm p-6 sm:p-8 flex flex-col gap-4">
            <h3 className="text-xl font-bold text-slate-900 pb-3 border-b border-slate-100">
              Frameworks & AI
            </h3>
            <div className="flex flex-col gap-3">
              <SkillCard language="spring" />
              <SkillCard language="node" />
              <SkillCard language="langchain" />
              <SkillCard language="react" />
            </div>
          </div>

          {/* 3. DATABASES & PLATFORMS */}
          <div className="rounded-2xl border border-slate-200 bg-white shadow-sm p-6 sm:p-8 flex flex-col gap-4">
            <h3 className="text-xl font-bold text-slate-900 pb-3 border-b border-slate-100">
              Databases & Platforms
            </h3>
            <div className="flex flex-col gap-3">
              <SkillCard language="postgres" />
              <SkillCard language="mysql" />
              <SkillCard language="mongodb" />
              <SkillCard language="pega" />
              <SkillCard language="git" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
