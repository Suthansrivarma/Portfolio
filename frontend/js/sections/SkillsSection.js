function SkillsSection() {
  return (
    <section id="skills">
      <div className="container">
        <div className="section-tag">Toolbox</div>
        <h2 className="section-title reveal">Skills and Stack.</h2>
        <p className="section-desc reveal">Technologies I work with.</p>
        <div className="skills-grid">
          {SKILLS.map((cat) => (
            <div className="skill-category reveal" key={cat.category}>
              <div className="skill-cat-header">
                <div className="skill-cat-icon" style={{ background: cat.color, color: cat.iconColor, fontSize: 22 }}>{cat.icon}</div>
                <span className="skill-cat-title">{cat.category}</span>
              </div>
              <div className="skill-logo-grid">
                {cat.items.map((s) => (
                  <div className="skill-logo-item" key={s.name}>
                    <span className="skill-logo-badge" style={{ color: cat.iconColor, borderColor: cat.color }}>
                      {s.logo}
                    </span>
                    <span className="skill-logo-name">{s.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
