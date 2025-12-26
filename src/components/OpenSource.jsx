import { motion } from 'framer-motion';
import { openSource } from '../data';
import { FaCodeBranch, FaExternalLinkAlt } from 'react-icons/fa';

const OpenSource = () => {
    return (
        <section id="opensource" className="section bg-secondary-alpha">
            <div className="container">
                <h2 className="section-title">Open Source Contributions</h2>

                <div className="os-grid">
                    {openSource.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="glass-card os-card"
                        >
                            <div className="os-icon">
                                <FaCodeBranch />
                            </div>
                            <div className="os-content">
                                <h3 className="os-repo">{item.repo}</h3>
                                <span className="os-role">{item.role}</span>
                                <p className="os-desc">{item.description}</p>
                                <a href={item.prLink} target="_blank" rel="noopener noreferrer" className="os-link">
                                    View Pull Request <FaExternalLinkAlt size={12} />
                                </a>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            <style>{`
        .bg-secondary-alpha {
          background: rgba(var(--bg-secondary), 0.3);
        }

        .os-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 1.5rem;
        }

        .os-card {
          display: flex;
          gap: 1.5rem;
          align-items: flex-start;
          background: var(--bg-glass);
        }

        .os-icon {
          font-size: 1.5rem;
          color: var(--accent-secondary);
          margin-top: 0.2rem;
        }

        .os-repo {
          font-size: 1.25rem;
          color: var(--text-primary);
          margin-bottom: 0.2rem;
          font-family: monospace;
        }

        .os-role {
          display: inline-block;
          font-size: 0.8rem;
          padding: 0.2rem 0.8rem;
          border-radius: 20px;
          background: rgba(14, 165, 233, 0.1);
          color: var(--accent-primary);
          margin-bottom: 0.8rem;
        }

        .os-desc {
          color: var(--text-secondary);
          margin-bottom: 1rem;
          font-size: 0.95rem;
        }

        .os-link {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.9rem;
          color: var(--text-primary);
          font-weight: 500;
        }

        .os-link:hover {
          color: var(--accent-primary);
          text-decoration: underline;
        }
      `}</style>
        </section>
    );
};

export default OpenSource;
