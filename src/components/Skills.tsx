import { motion } from "framer-motion";

interface SkillCategory {
  title: string;
  skills: string[];
}

const categories: SkillCategory[] = [
  {
    title: "PROGRAMMING",
    skills: ["Python", "Java", "SQL", "HTML", "CSS"],
  },
  {
    title: "AI / ML",
    skills: ["NumPy", "Pandas", "Scikit-learn", "Matplotlib", "TensorFlow", "YOLO", "Computer Vision"],
  },
  {
    title: "FRAMEWORKS",
    skills: ["FastAPI", "REST API"],
  },
  {
    title: "DATABASES",
    skills: ["MySQL", "MongoDB", "PostgreSQL", "Supabase"],
  },
  {
    title: "TOOLS & DEVOPS",
    skills: ["Git", "GitHub", "VS Code"],
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const item = {
  hidden: { opacity: 0, y: 15 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

const Skills = () => {
  return (
    <section id="skills" className="relative section-padding">
      <div className="orb orb-primary w-[250px] h-[250px] top-0 right-0 animate-pulse-glow" />
      <div className="max-w-7xl mx-auto relative z-10 text-left">


        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {categories.map((cat) => (
            <motion.div
              key={cat.title}
              variants={item}
              className="skill-card group"
            >
              <h3 className="text-[#00BCD4] font-extrabold text-sm tracking-[0.2em] mb-8 uppercase">
                {cat.title}
              </h3>
              <div className="flex flex-wrap gap-4">
                {cat.skills.map((s) => (
                  <motion.span
                    key={s}
                    whileHover={{ scale: 1.05, boxShadow: "0 0 15px rgba(0,188,212,0.3)" }}
                    className="text-[12px] font-medium px-5 py-2.5 rounded-full bg-black/40 text-[#00BCD4] border border-[#00BCD4]/30 backdrop-blur-sm transition-all duration-300"
                  >
                    {s}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
