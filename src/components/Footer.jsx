import { profile } from '../data';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container footer-content">
                <div className="footer-info">
                    <h3>{profile.name}</h3>
                    <p>Built with React & Vite</p>
                </div>

                <div className="footer-links">
                    {profile.social.map((link, index) => (
                        <a key={index} href={link.url} target="_blank" rel="noopener noreferrer" className="footer-link">
                            {link.label}
                        </a>
                    ))}
                </div>

                <div className="copyright">
                    &copy; {new Date().getFullYear()} All Rights Reserved.
                </div>
            </div>

            <style>{`
        .footer {
          padding: 3rem 0;
          background: var(--bg-secondary);
          border-top: 1px solid var(--border-color);
          margin-top: 4rem;
        }

        .footer-content {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1.5rem;
          text-align: center;
        }

        .footer-info h3 {
          font-size: 1.5rem;
          margin-bottom: 0.5rem;
          color: var(--text-primary);
        }

        .footer-info p {
          color: var(--text-secondary);
          font-size: 0.9rem;
        }

        .footer-links {
          display: flex;
          gap: 2rem;
        }

        .footer-link {
          color: var(--text-secondary);
          transition: var(--transition-fast);
        }

        .footer-link:hover {
          color: var(--accent-primary);
        }

        .copyright {
          font-size: 0.8rem;
          color: rgba(255, 255, 255, 0.3);
        }
      `}</style>
        </footer>
    );
};

export default Footer;
