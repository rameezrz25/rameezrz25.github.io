import { motion } from 'framer-motion';
import { lifestyle } from '../data';

const Lifestyle = () => {
    return (
        <section id="lifestyle" className="section">
            <div className="container">
                <h2 className="section-title">Beyond Work</h2>
                <p className="section-subtitle">Explorations in Travel & Food</p>

                <div className="lifestyle-grid">
                    {lifestyle.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="lifestyle-card"
                        >
                            <div className="card-image-wrapper">
                                <img src={item.image} alt={item.title} className="card-image" loading="lazy" />
                                <span className="card-category">{item.category}</span>
                            </div>
                            <div className="card-content">
                                <h3 className="card-title">{item.title}</h3>
                                <p className="card-desc">{item.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            <style>{`
        .section-subtitle {
            text-align: center;
            color: var(--text-secondary);
            margin-top: -3rem;
            margin-bottom: 4rem;
            font-size: 1.2rem;
        }

        .lifestyle-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
          gap: 2rem;
        }

        .lifestyle-card {
          background: var(--bg-glass);
          border-radius: var(--radius-md);
          overflow: hidden;
          border: 1px solid var(--border-color);
          transition: transform 0.3s ease;
        }

        .lifestyle-card:hover {
          transform: translateY(-8px);
          box-shadow: var(--shadow-lg);
        }

        .card-image-wrapper {
          position: relative;
          height: 200px;
          overflow: hidden;
        }

        .card-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s ease;
        }

        .lifestyle-card:hover .card-image {
          transform: scale(1.1);
        }

        .card-category {
          position: absolute;
          top: 1rem;
          right: 1rem;
          background: rgba(0, 0, 0, 0.7);
          color: white;
          padding: 0.3rem 0.8rem;
          border-radius: 20px;
          font-size: 0.8rem;
          backdrop-filter: blur(4px);
        }

        .card-content {
          padding: 1.5rem;
        }

        .card-title {
          font-size: 1.2rem;
          color: var(--text-primary);
          margin-bottom: 0.5rem;
        }

        .card-desc {
          color: var(--text-secondary);
          font-size: 0.95rem;
          line-height: 1.5;
        }
      `}</style>
        </section>
    );
};

export default Lifestyle;
