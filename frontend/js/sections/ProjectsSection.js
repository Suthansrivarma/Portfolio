function ProjectsSection() {
  return (
    <section id="projects" style={{ background: 'var(--bg2)', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}>
      <div className="container">
        <div className="section-tag">What I've built</div>
        <h2 className="section-title reveal">Projects that <br />matter.</h2>
        <p className="section-desc reveal">Each project solves a real problem. Impact is measured, not assumed.</p>
        <div className="projects-grid">
          {PROJECTS.map((project, index) => <ProjectCard key={project.num} project={project} index={index} />)}
        </div>
      </div>
    </section>
  );
}
