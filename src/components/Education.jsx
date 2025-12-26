import { motion } from 'framer-motion';
import { education } from '../data';
import { FaGraduationCap } from 'react-icons/fa';

const Education = () => {
  return (
    <section id="education" className="section education-section">
      <div className="container">
        <h2 className="section-title">Education</h2>

        <div className="education-grid">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="glass-card education-card"
            >
              <div className="edu-icon">
                <FaGraduationCap />
              </div>
              <div className="edu-content">
                <h3 className="school">{edu.school}</h3>
                <h4 className="degree">{edu.degree}</h4>
                <div className="edu-meta">
                  <span>{edu.year}</span> | <span>{edu.location}</span>
                </div>
                <p className="edu-details">{edu.details}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        .education-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: 2rem;
        }

        .education-card {
          display: flex;
          gap: 1.5rem;
          align-items: flex-start;
        }

        .edu-icon {
          font-size: 2rem;
          color: var(--accent-primary);
          padding: 0.5rem;
          background: rgba(14, 165, 233, 0.1);
          border-radius: var(--radius-sm);
        }

        .school {
          font-size: 1.25rem;
          color: var(--text-primary);
          margin-bottom: 0.5rem;
        }

        .degree {
          font-size: 1rem;
          color: var(--accent-secondary);
          margin-bottom: 0.5rem;
          font-weight: 500;
        }

        .edu-meta {
          color: var(--text-secondary);
          font-size: 0.9rem;
          margin-bottom: 1rem;
        }

        .edu-details {
          color: var(--text-secondary);
          font-size: 0.95rem;
          line-height: 1.5;
        }

        @media (max-width: 600px) {
          .education-card {
            flex-direction: column;
            gap: 1rem;
          }
        }
      `}</style>
    </section>
  );
};

export default Education;
