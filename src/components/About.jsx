import avatar from "../assets/portfolio.png";

const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen container mx-auto px-4 py-24 md:py-32"
    >
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-10 text-center">
          About Me
        </h2>

        <div className="flex flex-col md:flex-row gap-8 md:gap-10 items-center md:items-stretch">
          <div className="w-56 md:w-72 shrink-0">
            <img
              src={avatar}
              alt="Profile"
              className="w-full h-auto rounded-xl border border-slate-200"
            />
          </div>

          {/* Text card */}
          <div className="w-full rounded-xl border border-slate-200 bg-white shadow-sm p-6 md:p-8 flex flex-col justify-center">
            <p className="text-base text-slate-700 leading-relaxed mb-4">
              I am <b>Muhammad Syafiq Bin Wahinudin</b>, a Singapore-based and
              recent graduate specializing in backend languages such as
              <b> Javascript (NodeJs) and Java (Spring Boot)</b>.
            </p>

            <p className="text-base text-slate-700 leading-relaxed">
              I{" "}
              <span className="font-medium text-slate-900">take ownership</span>{" "}
              of my work,{" "}
              <span className="font-medium text-slate-900">
                actively seek feedback
              </span>
              , and continuously refine my skills through real-world projects.
              These days, you can find me continously refining my skills and
              creating Java Spring boot projects which can be found in my
              Github!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
