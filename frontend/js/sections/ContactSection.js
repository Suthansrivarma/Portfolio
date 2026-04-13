function ContactSection() {
  const socials = [
   
    { icon: '@', label: 'ssuthan866@gmail.com', href: 'mailto:ssuthan866@gmail.com' },
    { icon: 'LI', label: 'linkedin.com/in/suthansrivarma', href: 'https://linkedin.com/in/suthansrivarma' },
    { icon: 'GH', label: 'github.com/Suthansrivarma', href: 'https://github.com/Suthansrivarma' },
    { icon: 'LC', label: 'leetcode.com/Suthansrivarma', href: 'https://leetcode.com/Suthansrivarma' },
  ];

  return (
    <section id="contact" style={{ background: 'var(--bg2)', borderTop: '1px solid var(--border)' }}>
      <div className="container">
        <div className="section-tag">Get in touch</div>
        <h2 className="section-title reveal">Let's connect <br />and build.</h2>
        <div className="contact-wrapper">
          <div className="contact-info reveal">
            <p>
              I am looking for internship and entry-level software development opportunities.
              Feel free to reach out for collaboration, projects, or interview opportunities.
            </p>
            <div className="contact-socials">
              {socials.map((s) => (
                <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" className="contact-social">
                  <span className="contact-social-icon">{s.icon}</span>
                  {s.label}
                </a>
              ))}
            </div>
          </div>
          <div className="reveal">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
