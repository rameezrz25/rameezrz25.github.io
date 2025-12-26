import { useState, useEffect } from 'react';
import { FaCode } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Skills', href: '#skills' },
    { name: 'Education', href: '#education' },
    { name: 'Achievements', href: '#achievements' },
  ];

  const scrollToSection = (e, id) => {
    e.preventDefault();
    const element = document.querySelector(id);
    if (element) {
      const offset = 80; // height of header
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <div className="container header-content">
        <Link to="/" className="logo" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <FaCode className="logo-icon" />
          <span>Rameez Raza</span>
        </Link>
        <nav className="nav-desktop">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="nav-link"
              onClick={(e) => scrollToSection(e, link.href)}
            >
              {link.name}
            </a>
          ))}
          <a
            href="#projects"
            className="btn btn-primary btn-sm"
            onClick={(e) => scrollToSection(e, '#projects')}
          >
            Projects
          </a>
          <a
            href="#opensource"
            className="btn btn-primary btn-sm"
            style={{ marginLeft: '0.5rem' }}
            onClick={(e) => scrollToSection(e, '#opensource')}
          >
            Open Source
          </a>
          <a
            href="#lifestyle"
            className="btn btn-primary btn-sm"
            style={{ marginLeft: '0.5rem' }}
            onClick={(e) => scrollToSection(e, '#lifestyle')}
          >
            Lifestyle
          </a>
        </nav>
      </div>

      <style>{`
        .header {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          z-index: 1000;
          padding: 1.5rem 0;
          transition: all 0.3s ease;
        }

        .header.scrolled {
          padding: 1rem 0;
          background: var(--bg-glass);
          backdrop-filter: blur(10px);
          border-bottom: 1px solid var(--border-color);
        }

        .header-content {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .logo {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 1.5rem;
          font-weight: 700;
          color: var(--text-primary);
        }

        .logo-icon {
          color: var(--accent-secondary);
        }

        .nav-desktop {
          display: flex;
          align-items: center;
          gap: 2rem;
        }

        .nav-link {
          font-weight: 500;
          color: var(--text-secondary);
          position: relative;
        }

        .nav-link:hover {
          color: var(--text-primary);
        }

        .nav-link::after {
          content: '';
          position: absolute;
          bottom: -5px;
          left: 0;
          width: 0;
          height: 2px;
          background: var(--accent-gradient);
          transition: width 0.3s ease;
        }

        .nav-link:hover::after {
          width: 100%;
        }

        .btn-sm {
          padding: 0.5rem 1.5rem;
          font-size: 0.9rem;
        }
      `}</style>
    </header>
  );
};

export default Header;
