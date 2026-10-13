import { ArrowDown } from "lucide-react";

const ScrollDownIndicator = ({ targetId, label }) => {
  const handleClick = () => {
    const target = document.getElementById(targetId);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <button
      onClick={handleClick}
      className="group flex flex-col items-center gap-2 text-slate-500 hover:text-slate-900 transition"
      aria-label={label}
    >
      <span className="text-sm tracking-wide">{label}</span>

      <div className="animate-bounce">
        <ArrowDown className="w-6 h-6" />
      </div>
    </button>
  );
};

export default ScrollDownIndicator;
