import { motion } from 'framer-motion';
import { projects } from '../data';
import { FaGithub, FaBoxOpen } from 'react-icons/fa';

const Projects = () => {
    return (
        <section id="projects" className="section projects-section">
            <div className="container">
                <h2 className="section-title">Featured Projects</h2>

                <div className="projects-grid">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="glass-card project-card"
                        >
                            <h3 className="project-title">{project.title}</h3>
                            <p className="project-description">{project.description}</p>

                            <div className="project-tags">
                                {project.tags.map((tag, i) => (
                                    <span key={i} className="project-tag">{tag}</span>
                                ))}
                            </div>

                            <div className="project-links">
                                {project.links.github && (
                                    <a href={project.links.github} target="_blank" rel="noopener noreferrer" className="project-link">
                                        <FaGithub /> GitHub
                                    </a>
                                )}
                                {project.links.pypi && (
                                    <a href={project.links.pypi} target="_blank" rel="noopener noreferrer" className="project-link">
                                        <FaBoxOpen /> PyPI
                                    </a>
                                )}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            <style>{`
        .projects-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
          gap: 2rem;
        }

        .project-card {
          display: flex;
          flex-direction: column;
          height: 100%;
          background: var(--bg-glass);
          border: 1px solid var(--border-color);
          transition: transform 0.3s ease, border-color 0.3s ease;
        }

        .project-card:hover {
          border-color: var(--accent-primary);
          transform: translateY(-5px);
        }

        .project-title {
          font-size: 1.5rem;
          color: var(--text-primary);
          margin-bottom: 0.8rem;
          font-weight: 600;
        }

        .project-description {
          color: var(--text-secondary);
          margin-bottom: 1.5rem;
          flex-grow: 1;
          font-size: 1rem;
          line-height: 1.6;
        }

        .project-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 0.8rem;
          margin-bottom: 1.5rem;
        }

        .project-tag {
          font-size: 0.85rem;
          background: var(--bg-secondary);
          color: var(--accent-primary);
          padding: 0.3rem 0.8rem;
          border-radius: 20px;
          border: 1px solid var(--border-color);
        }

        .project-links {
          display: flex;
          gap: 1.5rem;
          border-top: 1px solid var(--border-color);
          padding-top: 1.2rem;
        }

        .project-link {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.95rem;
          color: var(--text-primary);
          font-weight: 500;
          transition: var(--transition-fast);
        }

        .project-link:hover {
          color: var(--accent-secondary);
        }
      `}</style>
        </section>
    );
};

export default Projects;
