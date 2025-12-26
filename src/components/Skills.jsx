import { motion } from 'framer-motion';
import { skills } from '../data';

const Skills = () => {
  return (
    <section id="skills" className="section skills-section">
      <div className="container">
        <h2 className="section-title">Technical Skills</h2>

        <div className="skills-grid">
          {Object.entries(skills).map(([category, items], index) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="glass-card skill-category"
            >
              <h3 className="category-title">{category}</h3>
              <div className="skill-tags">
                {items.map((skill) => (
                  <span key={skill} className="skill-tag">{skill}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        .skills-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
        }

        .skill-category {
          height: 100%;
        }

        .category-title {
          font-size: 1.25rem;
          color: var(--accent-secondary);
          margin-bottom: 1.5rem;
          text-align: center;
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        .skill-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 1rem;
          justify-content: center;
        }

        .skill-tag {
          padding: 0.5rem 1rem;
          background: var(--bg-secondary);
          border: 1px solid var(--border-color);
          border-radius: 50px;
          color: var(--text-primary);
          font-size: 0.9rem;
          transition: all 0.3s ease;
        }

        .skill-tag:hover {
          background: var(--accent-gradient);
          border-color: transparent;
          transform: translateY(-2px);
          box-shadow: 0 4px 10px rgba(14, 165, 233, 0.3);
        }
      `}</style>
    </section>
  );
};

export default Skills;
