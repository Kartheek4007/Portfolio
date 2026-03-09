import { motion } from "framer-motion";
import { Brain, Code, Eye, Lightbulb } from "lucide-react";

const highlights = [
  { icon: Brain, label: "AI / ML Specialization" },
  { icon: Eye, label: "Computer Vision" },
  { icon: Code, label: "Full Stack Development" },
  { icon: Lightbulb, label: "Problem Solver" },
];

const About = () => {
  return (
    <section id="about" className="relative section-padding">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-2">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="neon-line w-20 mt-2" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="text-muted-foreground leading-relaxed mb-4">
              I am a highly motivated <span className="text-primary font-semibold">Computer Science student</span> specializing in
              Artificial Intelligence and Machine Learning at <span className="text-primary font-semibold">Kalasalingam University</span> (CGPA: 7.87).
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              With a strong foundation in Python programming, data structures, and machine learning algorithms,
              I am passionate about developing intelligent, data-driven systems that address real-world challenges.
              My expertise spans across Deep Learning, Computer Vision, and Full-Stack Development.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              I enjoy architecting end-to-end solutions — from training ML models to deploying them with robust APIs
              and modern frontends. I'm continuously expanding my technical toolkit to stay ahead in the rapidly
              evolving AI landscape.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="grid grid-cols-2 gap-4"
          >
            {highlights.map((h, i) => (
              <motion.div
                key={h.label}
                whileHover={{ y: -5, scale: 1.02 }}
                className="skill-card flex flex-col items-center text-center gap-3 border-white/5"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shadow-[0_0_15px_rgba(0,188,212,0.1)]">
                  <h.icon className="text-primary" size={24} />
                </div>
                <span className="text-xs font-black text-foreground uppercase tracking-wide">{h.label}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
