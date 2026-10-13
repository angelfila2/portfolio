import avatar from "../assets/portfolio.png";

const About = () => {
  return (
    <section id="about" className="container mx-auto px-4 py-20 md:py-28">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-10 text-center">
          About Me
        </h2>

        <div className="flex flex-col md:flex-row gap-8 md:gap-10 items-center md:items-stretch">
          {/* Avatar Picture */}
          <div className="w-56 md:w-72 shrink-0 flex items-center justify-center">
            <img
              src={avatar}
              alt="Muhammad Syafiq"
              className="w-full h-auto rounded-xl border border-slate-200 shadow-sm bg-white p-2"
            />
          </div>

          {/* Text Card */}
          <div className="w-full rounded-xl border border-slate-200 bg-white shadow-sm p-6 md:p-8 flex flex-col justify-center space-y-4">
            <p className="text-base sm:text-lg text-slate-700 leading-relaxed">
              I am <b>Muhammad Syafiq Bin Wahinudin</b>, a Singapore-based
              software engineer and recent graduate focusing on backend
              development with{" "}
              <b>JavaScript (Node.js) and Java (Spring Boot)</b>.
            </p>

            <p className="text-base sm:text-lg text-slate-700 leading-relaxed">
              I take real ownership of what I build, love receiving feedback to
              get better, and learn fastest by building practical projects. You
              can check out my Java Spring Boot and backend projects over on my{" "}
              <a
                href="https://github.com/angelfila2"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-blue-600 hover:underline"
              >
                GitHub
              </a>
              !
            </p>

            {/* Natural & Grounded Python / Agentic AI Paragraph */}
            <p className="text-base sm:text-lg text-slate-700 leading-relaxed">
              Lately, I've also been diving into <b>Python</b> and exploring{" "}
              <b>Agentic AI</b>. I'm really curious about how AI agents can use
              tools and automate real-world tasks, and I love seeing how backend
              logic connects with AI. I'm always eager to pick up new stacks and
              hit the ground running on a team.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
