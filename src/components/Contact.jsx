// src/components/Contact.jsx
import { Mail, ArrowUpRight } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-24 md:py-32 scroll-mt-16">
      <div className="max-w-4xl mx-auto px-4">
        <div className="rounded-3xl border border-slate-200 bg-white/80 backdrop-blur-sm p-10 md:p-16 text-center shadow-lg relative overflow-hidden">
          {/* Subtle decorative background glow */}
          <div className="absolute -top-24 -left-24 w-64 h-64 bg-blue-100 rounded-full blur-3xl pointer-events-none opacity-60" />
          <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-indigo-100 rounded-full blur-3xl pointer-events-none opacity-60" />

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 mb-4 tracking-tight">
            Let's Collaborate!
          </h2>

          <p className="text-slate-600 text-base sm:text-lg max-w-xl mx-auto mb-8 leading-relaxed">
            I am actively seeking opportunities where I can contribute to
            backend systems, learn from experienced engineers, and grow as a
            software developer. Feel free to reach out anytime!
          </p>

          <a
            href="mailto:syafiqwork2023@gmail.com"
            className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-8 py-3.5 text-white font-semibold shadow-md hover:bg-blue-700 hover:shadow-lg transition-all active:scale-95"
          >
            <Mail className="h-5 w-5" />
            <span>Email Me</span>
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
