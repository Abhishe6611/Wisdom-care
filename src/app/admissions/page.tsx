export default function Admissions() {
  return (
    <div className="container" style={{ paddingTop: '150px', paddingBottom: '100px', minHeight: '80vh' }}>
      <h1 className="section-title">Admissions</h1>
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        <p style={{ fontSize: '1.2rem', color: 'var(--text-muted)', marginBottom: '3rem', textAlign: 'center' }}>
          Join the Wisdom Care family. Our admissions process is designed to be seamless and straightforward.
        </p>
        
        <div className="glass" style={{ padding: '3rem', borderRadius: 'var(--radius-lg)' }}>
          <h2 style={{ marginBottom: '1.5rem', color: 'var(--primary)' }}>Application Inquiry</h2>
          <form style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <div>
              <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 500 }}>Student Name</label>
              <input type="text" style={{ width: '100%', padding: '1rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)' }} placeholder="Enter student name" />
            </div>
            <div>
              <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 500 }}>Email Address</label>
              <input type="email" style={{ width: '100%', padding: '1rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)' }} placeholder="Enter email address" />
            </div>
            <div>
              <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 500 }}>Program of Interest</label>
              <select style={{ width: '100%', padding: '1rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)', background: '#fff' }}>
                <option>e-Techno School</option>
                <option>PU Science</option>
                <option>PU Commerce</option>
              </select>
            </div>
            <button type="button" className="btn-primary" style={{ marginTop: '1rem' }}>Submit Inquiry</button>
          </form>
        </div>
      </div>
    </div>
  );
}
