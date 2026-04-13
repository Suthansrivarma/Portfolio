function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState(null); // null | 'loading' | 'success' | 'error'
  const [msg, setMsg] = useState('');
  const apiBase =
    window.PORTFOLIO_API_BASE ||
    (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1'
      ? 'http://localhost:5000'
      : '');

  const handleChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      setStatus('error'); setMsg('Please fill in all fields.'); return;
    }
    setStatus('loading');
    try {
      const res = await fetch(`${apiBase}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (res.ok) {
        setStatus('success');
        setMsg(data.message || 'Message sent! I\'ll get back to you within 24 hours.');
        setForm({ name: '', email: '', message: '' });
      } else {
        setStatus('error');
        setMsg(data.message || 'Something went wrong. Try again.');
      }
    } catch (err) {
      setStatus('error');
      setMsg('Could not connect to backend. Please check API URL and server status.');
    }
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <label className="form-label">Your name</label>
        <input className="form-input" name="name" placeholder="John Doe" value={form.name} onChange={handleChange} />
      </div>
      <div className="form-group">
        <label className="form-label">Email address</label>
        <input className="form-input" name="email" type="email" placeholder="john@company.com" value={form.email} onChange={handleChange} />
      </div>
      <div className="form-group">
        <label className="form-label">Message</label>
        <textarea className="form-textarea" name="message" placeholder="Tell me about the opportunity or project..." value={form.message} onChange={handleChange} />
      </div>
      {status && status !== 'loading' && (
        <div className={`form-msg ${status}`}>{msg}</div>
      )}
      <button className="form-submit" type="submit" disabled={status === 'loading'}>
        {status === 'loading' ? (
          <><span style={{display:'inline-block',animation:'spin 0.8s linear infinite',marginRight:8}}>⟳</span> Sending…</>
        ) : (
          <>Send Message <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg></>
        )}
      </button>
    </form>
  );
}

/* MAIN APP */
