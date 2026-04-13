function AchievementsSection() {
  return (
    <section id="achievements">
      <div className="container">
        <div className="section-tag">Proof of work</div>
        <h2 className="section-title reveal">Certificates and Achievements.</h2>
        <p className="section-desc reveal">Credentials and milestones that back up practical development experience.</p>
        <div className="cert-grid">
          {ACHIEVEMENTS.map((item) => (
            <div className="cert-card reveal" key={`${item.title}-${item.issuer}`}>
              {item.image && (
                <div className="cert-media">
                  <img src={item.image} alt={item.title} loading="lazy" />
                </div>
              )}
              <span className="cert-tag">{item.tag}</span>
              <h3 className="cert-title">{item.title}</h3>
              <div className="cert-issuer">{item.issuer}</div>
              <p className="cert-note">{item.note}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
