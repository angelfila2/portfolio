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
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original-wordmark.svg",
  },
  node: {
    label: "Node",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original-wordmark.svg",
  },
  git: {
    label: "Git",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original-wordmark.svg",
  },
  mongodb: {
    label: "MongoDB",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original-wordmark.svg",
  },
  mysql: {
    label: "MySQL",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original-wordmark.svg",
  },
  postgres: {
    label: "Postgres",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original-wordmark.svg",
  },

  spring: {
    label: "Spring Boot",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/spring/spring-original-wordmark.svg",
  },
};

const SkillCard = ({ language, size = "md" }) => {
  const skill = SKILLS[language];
  if (!skill) return null;

  const sizeStyles =
    size === "sm"
      ? {
          container: "px-3 py-2 gap-2 text-xs",
          icon: "h-4 w-4",
        }
      : {
          container: "px-4 py-3 gap-3 text-sm",
          icon: "h-6 w-6",
        };

  return (
    <div
      className={`flex items-center rounded-xl bg-slate-100 shadow-sm ring-1 ring-slate-200 transition hover:bg-slate-200 ${sizeStyles.container}`}
    >
      <img src={skill.icon} alt={skill.label} className={sizeStyles.icon} />
      <span className="font-medium text-gray-800">{skill.label}</span>
    </div>
  );
};

export default SkillCard;
