function HeroSection() {
  return (
    <section className="hero" id="home">
      <div className="hero-glow hero-glow-1" />
      <div className="hero-glow hero-glow-2" />
      <div className="container">
        <div className="hero-badge animate-fade-up">
          <span className="hero-badge-dot" />
          Open to internships and entry-level software roles
        </div>
        <h1 className="animate-fade-up delay-1">
          <span className="line1">Suthansrivarma<br /></span>
          <span className="line2">K</span>
        </h1>
        <p className="hero-sub animate-fade-up delay-2">
          Final-year Computer Science student focused on <strong>MERN development and real-world projects</strong>.
          Interested in <strong>web development, databases, and software testing</strong>.
        </p>
        <div className="hero-actions animate-fade-up delay-3">
          <a href="#projects" className="btn-primary">
            View Projects
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>
          </a>
          <a href="#contact" className="btn-secondary">Let's talk</a>
        </div>
        <div className="hero-stats animate-fade-up delay-4">
          <div><div className="hero-stat-num">3+</div><div className="hero-stat-label">Major projects</div></div>
          <div><div className="hero-stat-num">8.2</div><div className="hero-stat-label">CGPA</div></div>
          <div><div className="hero-stat-num">MERN</div><div className="hero-stat-label">Primary stack</div></div>
          <div><div className="hero-stat-num">2026</div><div className="hero-stat-label">Graduation year</div></div>
        </div>
      </div>
    </section>
  );
}
