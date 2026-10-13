const SKILLS = {
  javascript: {
    label: "JavaScript",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
  },
  java: {
    label: "Java",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg",
  },
  python: {
    label: "Python",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",
  },
  react: {
    label: "React",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
  },
  node: {
    label: "Node.js",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg",
  },
  spring: {
    label: "Spring Boot",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/spring/spring-original.svg",
  },
  langchain: {
    label: "LangChain (AI)",
    icon: "https://cdn.simpleicons.org/langchain/1C3C3C",
  },
  mongodb: {
    label: "MongoDB",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg",
  },
  mysql: {
    label: "MySQL",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg",
  },
  postgres: {
    label: "PostgreSQL",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg",
  },
  pega: {
    label: "Pega Systems",
    svg: (
      <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
        <rect width="24" height="24" rx="6" fill="#002855" />
        <path
          d="M7 17V7h4.8c2.2 0 3.7 1.4 3.7 3.5s-1.5 3.5-3.7 3.5H9.5V17H7zm2.5-5.5h2.2c1 0 1.6-.6 1.6-1.5s-.6-1.5-1.6-1.5H9.5v3z"
          fill="#FFFFFF"
        />
      </svg>
    ),
  },
  git: {
    label: "Git",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg",
  },
};

const SkillCard = ({ language, size = "md" }) => {
  const skill = SKILLS[language];
  if (!skill) return null;

  const sizeStyles =
    size === "sm"
      ? {
          container: "px-3 py-1.5 gap-2 text-xs",
          icon: "h-4 w-4 shrink-0",
        }
      : {
          container: "px-4 py-3 gap-3 text-sm",
          icon: "h-6 w-6 shrink-0",
        };

  return (
    <div
      className={`flex items-center rounded-xl bg-slate-50 border border-slate-200/80 shadow-2xs transition-all duration-150 hover:bg-slate-100/90 hover:border-slate-300 ${sizeStyles.container}`}
    >
      <div className={sizeStyles.icon}>
        {skill.svg ? (
          skill.svg
        ) : (
          <img
            src={skill.icon}
            alt={skill.label}
            className="w-full h-full object-contain"
            loading="lazy"
          />
        )}
      </div>
      <span className="font-medium text-slate-800">{skill.label}</span>
    </div>
  );
};

export default SkillCard;
