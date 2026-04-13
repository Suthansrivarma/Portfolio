function ExperienceSection() {
  return (
    <section id="experience" style={{ background: 'var(--bg2)', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}>
      <div className="container">
        <div className="section-tag">Work journey</div>
        <h2 className="section-title reveal">Experience.</h2>
        <p className="section-desc reveal">Hands-on work where I shipped features, solved production issues, and improved delivery speed.</p>
        <div className="timeline">
          {EXPERIENCE.map((exp) => (
            <div className="timeline-item reveal" key={`${exp.role}-${exp.company}`}>
              <div className="timeline-top">
                <div>
                  <div className="timeline-role">{exp.role}</div>
                  <div className="timeline-company">{exp.company}</div>
                </div>
                <div className="timeline-date">{exp.date}</div>
              </div>
              <p className="timeline-desc">{exp.desc}</p>
              <div className="timeline-bullets">
                {exp.highlights.map((h) => (
                  <span className="timeline-bullet" key={h}>{h}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
