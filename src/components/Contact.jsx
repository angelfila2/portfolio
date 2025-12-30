import { Mail } from "lucide-react";

const Contact = () => {
  return (
    <section
      id="contact"
      className="min-h-screen flex flex-col justify-center container mx-auto px-4 py-16 md:py-20 bg-gradient-to-br from-blue-600 to-blue-700"
    >
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 text-balance">
          Let's Collaborate!
        </h2>

        <p className="text-xl text-blue-100 mb-8 text-balance leading-relaxed">
          I am currently seeking opportunities to contribute to innovative
          projects and grow as a backend developer. Feel free to contact me
          anytime!
        </p>

        <div className="flex flex-wrap gap-4 justify-center">
          <a
            href="mailto:syafiq2023@gmail.com"
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-white px-6 py-3 text-blue-600 font-medium shadow-sm transition hover:bg-blue-50"
          >
            <Mail className="h-5 w-5" />
            Email Me
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
