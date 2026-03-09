import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";

interface TimelineItem {
  title: string;
  institution: string;
  period: string;
  description: string;
}

const timeline: TimelineItem[] = [
  {
    title: "B.Tech CSE (AI & ML)",
    institution: "Kalasalingam University",
    period: "2022 – 2026",
    description:
      "Specializing in Artificial Intelligence & Machine Learning. Currently maintaining a CGPA of 7.87 with hands-on project experience in deep learning, computer vision, and full-stack development.",
  },
  {
    title: "Intermediate MPC",
    institution: "Aditya Junior College",
    period: "2020 – 2022",
    description:
      "Completed intermediate education with 76.2% (Grade A), focusing on Mathematics, Physics, and Chemistry to build a strong analytical foundation.",
  },
];

const Education = () => {
  return (
    <section id="education" className="relative section-padding">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-2">
            <span className="gradient-text">Education</span>
          </h2>
          <div className="neon-line w-20 mt-2" />
        </motion.div>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-[31px] top-0 bottom-0 w-[2px] bg-gradient-to-b from-primary/50 via-secondary/30 to-transparent" />

          <div className="flex flex-col gap-12">
            {timeline.map((t, i) => (
              <motion.div
                key={t.title}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.2 }}
                className="relative pl-20"
              >
                {/* Dot */}
                <div className="absolute left-0 top-0 w-16 h-16 flex items-center justify-center z-10">
                  <div className="w-8 h-8 rounded-full bg-[#020617] border-2 border-primary flex items-center justify-center shadow-[0_0_15px_rgba(0,188,212,0.3)]">
                    <GraduationCap size={14} className="text-primary" />
                  </div>
                </div>

                <motion.div
                  whileHover={{ x: 10, scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300, damping: 25 }}
                  className="glass rounded-xl p-7 border-l-4 border-primary/50 hover:border-primary transition-all duration-300 cursor-default group"
                >
                  <span className="text-[10px] font-black text-primary tracking-[0.2em] uppercase bg-primary/10 px-3 py-1.5 rounded-md">
                    {t.period}
                  </span>
                  <h3 className="text-xl font-black text-foreground mt-4 tracking-tight group-hover:text-primary transition-colors duration-300">
                    {t.title}
                  </h3>
                  <p className="text-sm font-bold text-secondary tracking-wide mt-1 uppercase opacity-80">
                    {t.institution}
                  </p>
                  <p className="text-sm text-muted-foreground leading-relaxed mt-4 font-medium opacity-90 group-hover:opacity-100 transition-opacity">
                    {t.description}
                  </p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
