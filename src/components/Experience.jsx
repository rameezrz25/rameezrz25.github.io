import { motion } from 'framer-motion';
import { experience } from '../data';

const Experience = () => {
  return (
    <section id="experience" className="section experience-section">
      <div className="container">
        <h2 className="section-title">Work Experience</h2>

        <div className="timeline">
          {experience.map((job, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="timeline-item"
            >
              <div className="timeline-marker"></div>
              <div className="glass-card timeline-content">
                <div className="job-header">
                  <div>
                    <h3 className="role">{job.role}</h3>
                    <h4 className="company">{job.company}</h4>
                  </div>
                  <div className="job-meta">
                    <span className="period">{job.duration}</span>
                    <span className="location">{job.location}</span>
                  </div>
                </div>

                <ul className="job-description">
                  {job.description.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        .timeline {
          position: relative;
          max-width: 900px;
          margin: 0 auto;
          padding-left: 2rem;
        }

        .timeline::before {
          content: '';
          position: absolute;
          left: 0;
          top: 0;
          height: 100%;
          width: 2px;
          background: linear-gradient(to bottom, var(--accent-primary), transparent);
        }

        .timeline-item {
          position: relative;
          margin-bottom: 3rem;
        }

        .timeline-marker {
          position: absolute;
          left: -2.35rem; /* Adjust for padding + line width */
          top: 1.5rem;
          width: 1rem;
          height: 1rem;
          background: var(--bg-primary);
          border: 2px solid var(--accent-primary);
          border-radius: 50%;
          z-index: 1;
        }

        .timeline-content {
          padding: 2rem;
        }

        .job-header {
          display: flex;
          justify-content: space-between;
          flex-wrap: wrap;
          margin-bottom: 1.5rem;
          border-bottom: 1px solid var(--border-color);
          padding-bottom: 1rem;
        }

        .role {
          font-size: 1.5rem;
          color: var(--text-primary);
          margin-bottom: 0.25rem;
        }

        .company {
          font-size: 1.125rem;
          color: var(--accent-primary);
        }

        .job-meta {
          text-align: right;
          display: flex;
          flex-direction: column;
          color: var(--text-secondary);
          font-size: 0.9rem;
        }

        .job-description {
          list-style: disc;
          padding-left: 1.5rem;
          color: var(--text-secondary);
        }

        .job-description li {
          margin-bottom: 0.5rem;
        }

        @media (max-width: 768px) {
          .timeline {
             padding-left: 1rem;
          }
          .timeline::before {
            left: 0.5rem;
          }
          .timeline-marker {
            left: 0.05rem;
          }
           .job-header {
            flex-direction: column;
            gap: 0.5rem;
          }
          .job-meta {
            text-align: left;
          }
        }
      `}</style>
    </section>
  );
};

export default Experience;
