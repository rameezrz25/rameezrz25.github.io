import { motion } from 'framer-motion';
import { profile } from '../data';

const About = () => {
  return (
    <section id="about" className="section about-section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="glass-card about-card"
        >
          <h2 className="section-title" style={{ textAlign: 'left', marginBottom: '1rem' }}>About Me</h2>
          <p className="about-text">
            I am a passionate <strong>{profile.title}</strong> currently based in {profile.location}.
            {profile.summary}
          </p>
          <p className="about-text">
            With a strong foundation in Computer Science and Information Technology, I love solving complex system-level problems
            and optimizing performance for large-scale applications. My journey from academia to industry at Intel has been driven
            by curiosity and a commitement to excellence.
          </p>
        </motion.div>
      </div>

      <style>{`
        .about-card {
          max-width: 800px;
          margin: 0 auto;
          background: var(--bg-glass);
          border: 1px solid var(--border-color);
          padding: 2rem;
          border-radius: var(--radius-md);
        }

        .about-text {
          font-size: 1.1rem;
          color: var(--text-secondary);
          margin-bottom: 1.5rem;
          line-height: 1.8;
        }

        .about-text strong {
          color: var(--text-primary);
          color: var(--accent-primary);
        }
      `}</style>
    </section>
  );
};

export default About;
