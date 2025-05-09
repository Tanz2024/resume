import { useEffect, useRef, useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import './Navbar.css';

function Navbar(): JSX.Element {
  const [isOpen, setIsOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const menuRef = useRef<HTMLDivElement>(null);
  const lastScroll = useRef(0);

  const toggleMenu = () => setIsOpen(prev => !prev);
  const closeMenu = () => setIsOpen(false);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (isOpen && menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen]);

  useEffect(() => {
    const handleScroll = () => {
      const current = window.scrollY;
      const goingDown = current > lastScroll.current && current > 80;
      const atTop = current < 80;

      setHidden(goingDown && !atTop);
      setScrolled(current > 10);
      lastScroll.current = current;
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Active section tracking
  useEffect(() => {
    const sections = document.querySelectorAll('section[id]');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'timeline', label: 'Timeline' },
    { id: 'projects', label: 'Projects' },
    { id: 'skills', label: 'Skills' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <header className={`navbar ${hidden ? 'navbar--hidden' : ''} ${scrolled ? 'navbar--scrolled' : ''}`}>
      <div className="navbar-container">
        <h1 className="matrix-logo">
          <span className="logo-letter" style={{ '--delay': '0ms' } as React.CSSProperties}>T</span>
          <span className="logo-letter" style={{ '--delay': '120ms' } as React.CSSProperties}>A</span>
          <span className="logo-letter" style={{ '--delay': '240ms' } as React.CSSProperties}>N</span>
          <span className="logo-letter" style={{ '--delay': '360ms' } as React.CSSProperties}>Z</span>
        </h1>

        <nav className={`nav-menu ${isOpen ? 'open' : ''}`} ref={menuRef}>
          <ul className="nav-links">
            {navItems.map(({ id, label }) => (
              <li key={id}>
                <a
                  href={`#${id}`}
                  onClick={closeMenu}
                  className={activeSection === id ? 'active' : ''}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <button className="menu-toggle" onClick={toggleMenu}>
          {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>
    </header>
  );
}

export default Navbar;
