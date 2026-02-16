import { Github, Linkedin, } from "lucide-react";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-24 border-t border-white/20 bg-white/5 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Left */}
        <p className="text-sm text-slate-400">
          © {year}{" "}
          <span className="text-white font-medium">
            Chelvin Ramadani Yulianto
          </span>
          . All rights reserved.
        </p>

        {/* Right - Social Icons */}
        <div className="flex items-center gap-5">
          <a
            href="https://github.com/chelvinramadani"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 hover:text-white transition"
          >
            <Github size={20} />
          </a>

          <a
            href="https://www.linkedin.com/in/chelvin-ramadani-yulianto-3ab462286/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 hover:text-white transition"
          >
            <Linkedin size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;