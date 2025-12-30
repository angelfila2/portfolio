import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="container mx-auto px-4 py-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Left */}
          <div className="text-center md:text-left">
            <p className="text-sm text-slate-600">
              © {new Date().getFullYear()} • Built by{" "}
              <span className="font-medium text-slate-800">
                Syafiq Wahinudin (angelfila2)
              </span>
            </p>
            <p className="text-xs text-slate-500 mt-1">
              Backend-focused Full Stack Developer
            </p>
          </div>

          {/* Right */}
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/angelfila2"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-600 hover:text-slate-900 transition"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5" />
            </a>

            <a
              href="https://linkedin.com/in/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-600 hover:text-slate-900 transition"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>

            <a
              href="mailto:syafiqwork2023@gmail.com"
              className="text-slate-600 hover:text-slate-900 transition"
              aria-label="Email"
            >
              <Mail className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
