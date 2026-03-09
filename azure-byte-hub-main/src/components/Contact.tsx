import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { Mail, Send, Phone, MapPin, Github, Linkedin } from "lucide-react";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 3000);
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="relative section-padding">
      <div className="orb orb-primary w-[200px] h-[200px] top-10 right-10 animate-pulse-glow" />
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-2">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <div className="neon-line w-20 mt-2 mx-auto" />
          <p className="text-muted-foreground mt-4">
            Have a question or want to work together? Feel free to reach out.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-4"
          >
            <h3 className="text-xl font-bold text-foreground mb-6">Contact Information</h3>
            <a
              href="mailto:kartheekbota99@gmail.com"
              className="skill-card flex items-center gap-4 group block border-white/5"
            >
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary/20 transition-colors">
                <Mail size={20} />
              </div>
              <div>
                <p className="text-[10px] text-muted-foreground uppercase tracking-wider mb-1">Email</p>
                <p className="text-sm font-semibold text-foreground">kartheekbota99@gmail.com</p>
              </div>
            </a>
            <a
              href="tel:+919640012290"
              className="skill-card flex items-center gap-4 group block border-white/5"
            >
              <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center text-secondary group-hover:bg-secondary/20 transition-colors">
                <Phone size={20} />
              </div>
              <div>
                <p className="text-[10px] text-muted-foreground uppercase tracking-wider mb-1">Phone</p>
                <p className="text-sm font-semibold text-foreground">+91 96400 12290</p>
              </div>
            </a>
            <div
              className="skill-card flex items-center gap-4 group border-white/5"
            >
              <div className="w-12 h-12 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-400 group-hover:bg-blue-500/20 transition-colors">
                <MapPin size={20} />
              </div>
              <div>
                <p className="text-[10px] text-muted-foreground uppercase tracking-wider mb-1">Location</p>
                <p className="text-sm font-semibold text-foreground">Bhimavaram, Andhra Pradesh, India</p>
              </div>
            </div>

            <div className="pt-4">
              <h4 className="text-[10px] font-black text-foreground/50 uppercase tracking-[0.2em] mb-4">Follow Me On</h4>
              <div className="flex items-center gap-3">
                <a
                  href="https://github.com/Kartheek4007"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg glass border border-border flex items-center justify-center text-foreground hover:border-primary hover:text-primary transition-all duration-300"
                  aria-label="GitHub"
                >
                  <Github size={18} />
                </a>
                <a
                  href="https://www.linkedin.com/in/kartheek-botta-199746268/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg glass border border-[#0077b5]/30 flex items-center justify-center text-[#0077b5] hover:border-[#0077b5] bg-[#0077b5]/5 transition-all duration-300"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={18} />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            onSubmit={handleSubmit}
            className="skill-card p-8 space-y-6 border-white/5"
          >
            <div>
              <label className="text-[10px] font-black text-muted-foreground uppercase tracking-[0.2em] mb-3 block">Name</label>
              <input
                type="text"
                placeholder="Full Name"
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full bg-[#020617]/50 border border-white/10 rounded-xl px-4 py-4 text-sm text-foreground placeholder:text-muted-foreground/40 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all font-medium"
              />
            </div>
            <div>
              <label className="text-[10px] font-black text-muted-foreground uppercase tracking-[0.2em] mb-3 block">Email</label>
              <input
                type="email"
                placeholder="your@email.com"
                required
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full bg-[#020617]/50 border border-white/10 rounded-xl px-4 py-4 text-sm text-foreground placeholder:text-muted-foreground/40 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all font-medium"
              />
            </div>
            <div>
              <label className="text-[10px] font-black text-muted-foreground uppercase tracking-[0.2em] mb-3 block">Message</label>
              <textarea
                placeholder="Tell me about your project..."
                required
                rows={4}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full bg-[#020617]/50 border border-white/10 rounded-xl px-4 py-4 text-sm text-foreground placeholder:text-muted-foreground/40 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all resize-none font-medium"
              />
            </div>
            <button
              type="submit"
              className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-semibold text-sm hover:glow-primary transition-all duration-300 hover:scale-[1.02]"
            >
              {sent ? (
                <>
                  <Mail size={16} /> Sent!
                </>
              ) : (
                <>
                  Send Message <Send size={16} />
                </>
              )}
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
