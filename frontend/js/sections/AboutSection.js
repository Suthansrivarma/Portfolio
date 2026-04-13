function AboutSection() {
  const highlights = [
    { icon: 'EDU', bg: 'rgba(228,255,61,0.1)', title: 'B.E. CSE', desc: 'Dr. Mahalingam College of Engineering and Technology, Pollachi, CGPA 8.2, Graduating 2026' },
    { icon: 'INT', bg: 'rgba(45,212,191,0.1)', title: 'Software Engineer Intern', desc: 'Istreams ERP Solutions, Pollachi, Jun 2024 to Jul 2024' },
    { icon: 'ACT', bg: 'rgba(167,139,250,0.1)', title: 'Clubs and Service', desc: 'NSS member (2022-2024) and Tamil Club member (2022-Present)' },
  ];

  return (
    <section id="about">
      <div className="container">
        <div className="section-tag">Who I am</div>
        <h2 className="section-title reveal">Focused on building <br />real solutions.</h2>
        <div className="about-grid">
          <div className="about-text reveal">
            <p>
              I'm <strong>Suthansrivarma K</strong>, a final-year Computer Science and Engineering student.
              I enjoy building reliable full-stack applications that solve practical problems.
            </p>
            <p>
              I have hands-on experience in <strong>React, Node.js, Express, MongoDB, and REST APIs</strong>,
              and I also work with Java, Python, SQL, and IoT-based systems.
            </p>
            <p>
              My interests include web development, database systems, and software testing.
              I am currently looking for opportunities to contribute and grow as a software engineer.
            </p>
            <div className="about-highlights">
              {highlights.map((item) => (
                <div className="about-highlight" key={item.title}>
                  <div className="about-highlight-icon" style={{ background: item.bg }}>{item.icon}</div>
                  <div className="about-highlight-text">
                    <strong>{item.title}</strong>
                    {item.desc}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="about-visual">
            <div className="about-card-main">
              <img className="about-photo" src="./assets/profile.jpeg" alt="Suthansrivarma K" />
              <div className="name">Suthansrivarma K</div>
              <div className="role">Aspiring Software Engineer</div>
              {['MERN', 'Java', 'MongoDB', 'Problem Solving'].map((tag) => (
                <span className="about-card-tag" key={tag}>{tag}</span>
              ))}
              <div style={{ marginTop: 20, paddingTop: 16, borderTop: '1px solid var(--border)', fontSize: 13, color: 'var(--muted)' }}>
               Pollachi, Tamil Nadu - Available for internships and entry-level roles
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
