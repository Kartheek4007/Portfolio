import { motion } from "framer-motion";
import { ArrowDown, FileDown } from "lucide-react";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden section-padding pt-28"
    >
      {/* Orbs */}
      <div className="orb orb-primary w-[400px] h-[400px] -top-20 -left-40 animate-pulse-glow" />
      <div className="orb orb-secondary w-[300px] h-[300px] bottom-20 right-10 animate-pulse-glow" />

      <div className="relative z-10 max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-12 items-center">
        {/* Text Area */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-primary font-medium text-sm tracking-[0.2em] uppercase mb-4 opacity-80"
          >
            Welcome to my portfolio
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-5xl sm:text-7xl lg:text-8xl font-black leading-[1.1] mb-6 tracking-tight"
          >
            Hi, I'm{" "}
            <span className="gradient-text italic tracking-[0.02em]" style={{ fontFamily: "'Times New Roman', Times, serif" }}>Botta Kartheek</span>
          </motion.h1>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-2xl sm:text-3xl font-bold text-muted-foreground/90 mb-8 tracking-tight"
          >
            Python Developer / Machine Learning Enthusiast
          </motion.h2>
          <p className="text-muted-foreground/90 leading-relaxed max-w-xl mb-10 text-lg">
            I am a highly motivated Computer Science student specializing in AI & ML.
            Developing intelligent, data-driven systems to solve real-world challenges.
          </p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-wrap gap-4"
          >
            <motion.a
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              href="#projects"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-semibold text-sm hover:glow-primary transition-all duration-300"
            >
              <ArrowDown size={16} />
              View Projects
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg glass gradient-border font-semibold text-sm text-foreground transition-all duration-300"
            >
              <FileDown size={16} />
              Download Resume
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Spline Robot Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 20,
            delay: 0.3
          }}
          className="w-full h-[300px] sm:h-[400px] lg:h-[500px] relative group z-50"
          style={{ clipPath: "inset(-200vw -200vw 56px -200vw)" }}
        >
          <iframe
            src="https://my.spline.design/genkubgreetingrobot-Qov38G0AFrPhI5HzNE2GKvE7/"
            frameBorder="0"
            title="3D Robot"
            style={{
              position: "absolute",
              top: "-10px",
              left: 0,
              width: "100%",
              height: "calc(100% + 56px)",
              pointerEvents: "auto"
            }}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
