import { motion } from 'framer-motion';
import { profile } from '../data';

const Hero = () => {
  return (
    <section className="hero">
      <div className="container hero-content">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="hero-text"
        >
          <span className="greeting">Hello, I'm</span>
          <h1 className="name">{profile.name}</h1>
          <h2 className="title">{profile.title}</h2>
          <p className="description">{profile.summary}</p>

          <div className="cta-group">
            <a href="mailto:rameezrz25@gmail.com" className="btn btn-primary">Get In Touch</a>
            <a
              href="#experience"
              className="btn btn-outline"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#experience')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              View Work
            </a>
          </div>

          <div className="social-links">
            {profile.social.map((link, index) => (
              <a key={index} href={link.url} target="_blank" rel="noopener noreferrer" className="social-icon" aria-label={link.label}>
                {link.icon}
              </a>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="hero-visual"
        >
          <div className="blob"></div>
          <div className="blob blob-2"></div>
        </motion.div>
      </div>

      <style>{`
        .hero {
          min-height: 100vh;
          display: flex;
          align-items: center;
          position: relative;
          overflow: hidden;
          padding-top: 80px; /* Offset fixed header */
        }

        .hero-content {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          align-items: center;
          position: relative;
          z-index: 1;
        }

        .greeting {
          font-size: 1.25rem;
          color: var(--accent-primary);
          font-weight: 500;
          margin-bottom: 0.5rem;
          display: block;
        }

        .name {
          font-size: 4.5rem;
          font-weight: 700;
          line-height: 1.1;
          margin-bottom: 1rem;
          background: linear-gradient(to right, #f3f4f6, #9ca3af);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .title {
          font-size: 2rem;
          color: var(--text-secondary);
          margin-bottom: 1.5rem;
          font-weight: 400;
        }

        .description {
          font-size: 1.125rem;
          color: var(--text-secondary);
          max-width: 500px;
          margin-bottom: 2rem;
        }

        .cta-group {
          display: flex;
          gap: 1rem;
          margin-bottom: 3rem;
        }

        .social-links {
          display: flex;
          gap: 1.5rem;
        }

        .social-icon {
          font-size: 1.5rem;
          color: var(--text-secondary);
          transition: var(--transition-normal);
        }

        .social-icon:hover {
          color: var(--accent-primary);
          transform: translateY(-3px);
        }

        /* Abstract Visuals */
        .hero-visual {
            position: relative;
            height: 400px;
            display: flex;
            justify-content: center;
            align-items: center;
        }

        .blob {
            position: absolute;
            width: 300px;
            height: 300px;
            background: linear-gradient(135deg, var(--accent-primary), var(--accent-secondary));
            border-radius: 50%;
            filter: blur(80px);
            opacity: 0.4;
            animation: move 10s infinite alternate;
        }

        .blob-2 {
            width: 200px;
            height: 200px;
            background: var(--accent-primary);
            right: 0;
            top: 0;
            filter: blur(60px);
            animation: move-reverse 12s infinite alternate;
        }

        @keyframes move {
            from { transform: translate(0, 0); }
            to { transform: translate(20px, -20px); }
        }

        @keyframes move-reverse {
            from { transform: translate(0, 0); }
            to { transform: translate(-30px, 30px); }
        }

        @media (max-width: 768px) {
            .hero-content {
                grid-template-columns: 1fr;
                text-align: center;
                gap: 2rem;
            }
            
            .name {
                font-size: 3rem;
            }

            .description, .cta-group, .social-links {
                margin-left: auto;
                margin-right: auto;
            }

            .cta-group {
                justify-content: center;
            }
        }
      `}</style>
    </section>
  );
};

export default Hero;
