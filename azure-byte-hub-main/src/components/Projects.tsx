import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import projectPlacementsNew from "@/assets/Placements Connect.png";
import projectAnimalNew from "@/assets/Animal Intrusion.jpeg";
import projectCollab from "@/assets/project-collaboration.svg";

interface Project {
  title: string;
  description: string;
  tech: string[];
  image: string;
  github?: string;
  demo?: string;
}

const projects: Project[] = [
  {
    title: "Placements Connect",
    description:
      "A full-stack campus placement management platform enabling students and recruiters to streamline the hiring pipeline with real-time analytics and role matching.",
    tech: ["Python", "FastAPI", "SQLAlchemy", "MySQL", "JWT", "React.js"],
    image: projectPlacementsNew,
    github: "https://github.com/Kartheek4007/Placements-Connect",
    demo: "https://placements-connect.vercel.app/login",
  },
  {
    title: "Animal Intrusion Detection System",
    description:
      "Computer vision-powered system using YOLO for real-time detection of animal intrusions in agricultural fields, reducing crop damage with instant alerts.",
    tech: ["YOLOv8", "TensorFlow", "OpenCV", "Python"],
    image: projectAnimalNew,
    github: "https://github.com/BottaKartheek",
    demo: "#",
  },
  {
    title: "Project Collaboration System",
    description:
      "A collaborative workspace for teams to manage projects, assign tasks, track progress, and communicate — built with modern web technologies.",
    tech: ["FastAPI", "SQLAlchemy", "MySQL", "React.js", "TypeScript"],
    image: projectCollab,
    github: "https://github.com/Kartheek4007/Project-Collaboration-System",
    demo: "https://project-collaboration-system.vercel.app",
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const Projects = () => {
  return (
    <section id="projects" className="relative section-padding">
      <div className="orb orb-secondary w-[300px] h-[300px] -bottom-20 -left-20 animate-pulse-glow" />
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-2">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <div className="neon-line w-20 mt-2" />
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {projects.map((p) => (
            <motion.div
              key={p.title}
              variants={item}
              className="glow-border-card group"
            >
              <div className="glow-border-card-smoke-layer" />
              <div className="glow-border-card-smoke-layer-2" />
              <div className="vertical-edge-glow" />
              <motion.div
                className="glow-border-card-content"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <div className="relative w-full h-56 overflow-hidden">
                  <motion.img
                    src={p.image}
                    alt={p.title}
                    whileHover={{
                      scale: 1.1,
                      filter: "brightness(1.3) contrast(1.1) saturate(1.2)",
                    }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                    className="w-full h-full object-cover transition-all duration-300"
                    style={{ filter: "brightness(1.1) contrast(1.05) saturate(1.1)" }}
                    loading="lazy"
                  />
                </div>
                <div className="p-7 flex-1 flex flex-col relative z-20">
                  <h3 className="text-xl font-bold text-white mb-4 group-hover:text-primary transition-colors duration-300">
                    {p.title}
                  </h3>
                  <p className="text-sm text-gray-400 leading-relaxed mb-6 flex-1 font-medium italic opacity-80">
                    {p.description}
                  </p>
                  <div className="flex flex-wrap gap-2.5 mb-7">
                    {p.tech.map((t) => (
                      <span
                        key={t}
                        className="text-[10px] font-black px-3 py-1.5 rounded-full bg-primary/10 text-primary border border-primary/20 uppercase tracking-[0.2em]"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  <div className="pt-5 flex items-center justify-between mt-auto border-t border-white/5">
                    {p.github && (
                      <motion.a
                        whileHover={{ x: 3, color: "hsl(var(--primary))" }}
                        href={p.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-white/70 hover:text-white transition-all duration-300"
                      >
                        <Github size={14} className="text-white/70 group-hover:text-white" />
                        <span>Source</span>
                      </motion.a>
                    )}
                    {p.demo && (
                      <motion.a
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        href={p.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-[10px] font-black bg-white/5 text-white border border-white/20 px-5 py-2.5 rounded-full hover:bg-white/10 hover:border-white/40 transition-all uppercase tracking-[0.2em]"
                      >
                        Deploy <ExternalLink size={12} />
                      </motion.a>
                    )}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
