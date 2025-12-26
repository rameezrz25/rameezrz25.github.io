import { motion } from 'framer-motion';
import { achievements } from '../data';
import { FaTrophy } from 'react-icons/fa';

const Achievements = () => {
    return (
        <section id="achievements" className="section achievements-section">
            <div className="container">
                <h2 className="section-title">Honors & Achievements</h2>

                <div className="achievements-grid">
                    {achievements.map((group, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="glass-card achievement-group"
                        >
                            <div className="group-header">
                                <FaTrophy className="trophy-icon" />
                                <h3 className="group-title">{group.title}</h3>
                            </div>
                            <ul className="achievement-list">
                                {group.items.map((item, i) => (
                                    <li key={i}>{item}</li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>
            </div>

            <style>{`
        .achievements-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
          gap: 2rem;
        }

        .group-header {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin-bottom: 1.5rem;
        }

        .trophy-icon {
          color: #fbbf24;
          font-size: 1.5rem;
        }

        .group-title {
          font-size: 1.5rem;
          color: var(--text-primary);
        }

        .achievement-list {
          list-style: none;
        }

        .achievement-list li {
          position: relative;
          padding-left: 1.5rem;
          margin-bottom: 0.8rem;
          color: var(--text-secondary);
        }

        .achievement-list li::before {
          content: '▹';
          position: absolute;
          left: 0;
          color: var(--accent-primary);
        }
        
        @media (max-width: 600px) {
            .achievements-grid {
                grid-template-columns: 1fr;
            }
        }
      `}</style>
        </section>
    );
};

export default Achievements;
