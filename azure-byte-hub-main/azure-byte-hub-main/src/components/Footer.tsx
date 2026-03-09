import { Github } from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative py-12 px-6 border-t border-white/5 bg-[#02040a]/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto flex flex-col items-center gap-6">
        <a href="#home" className="group relative" style={{ filter: "drop-shadow(0 0 10px rgba(0, 188, 212, 0.4))" }}>
          <div className="w-10 h-10 rounded-xl border border-primary/20 bg-primary/5 flex items-center justify-center transition-all duration-300 group-hover:border-primary/50 group-hover:bg-primary/10 group-hover:scale-105">
            <span className="text-xl font-bold gradient-text tracking-tight">BK</span>
          </div>
        </a>
        <p className="text-[10px] text-muted-foreground font-black uppercase tracking-[0.2em] opacity-50">
          © {new Date().getFullYear()} Botta Kartheek. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
