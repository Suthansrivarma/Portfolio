function NavbarSection() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Experience', href: '#experience' },
    { label: 'Achievements', href: '#achievements' },
    { label: 'Projects', href: '#projects' },
    { label: 'Skills', href: '#skills' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <>
      <nav>
        <div className="container">
          <div className="nav-inner">
            <a href="#home" className="nav-logo">SK<span>.</span></a>
            <ul className="nav-links">
              {navLinks.map((link) => (
                <li key={link.href}><a href={link.href}>{link.label}</a></li>
              ))}
            </ul>
            <a href="#contact" className="nav-cta">Hire me</a>
            <button className="hamburger" onClick={() => setMenuOpen(true)} aria-label="Open menu">
              <span /><span /><span />
            </button>
          </div>
        </div>
      </nav>

      <div className={`mobile-menu ${menuOpen ? 'open' : ''}`}>
        <button className="close-btn" onClick={() => setMenuOpen(false)}>x</button>
        {navLinks.map((link) => (
          <a key={link.href} href={link.href} onClick={() => setMenuOpen(false)}>{link.label}</a>
        ))}
        <a href="#contact" onClick={() => setMenuOpen(false)} style={{ color: 'var(--accent)' }}>
          Hire me ->
        </a>
      </div>
    </>
  );
}

