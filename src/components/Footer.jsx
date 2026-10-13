import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="container mx-auto px-4 py-4">
        <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-slate-600">
          <span>
            © {new Date().getFullYear()} ·{" "}
            <span className="font-medium text-slate-800">Syafiq Wahinudin</span>
          </span>

          <span className="hidden sm:inline text-slate-400">|</span>

          <div className="flex items-center gap-3">
            <a
              href="https://github.com/angelfila2"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-slate-900 transition"
              aria-label="GitHub"
            >
              <Github className="h-4 w-4" />
            </a>

            <a
              href="https://www.linkedin.com/in/syafiq-wahinudin-305664267/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-slate-900 transition"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-4 w-4" />
            </a>

            <a
              href="mailto:syafiqwork2023@gmail.com"
              className="hover:text-slate-900 transition"
              aria-label="Email"
            >
              <Mail className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
