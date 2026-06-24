export default function Academics() {
  return (
    <div className="container" style={{ paddingTop: '150px', paddingBottom: '100px', minHeight: '80vh' }}>
      <h1 className="section-title">Academics</h1>
      <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
        <p style={{ fontSize: '1.2rem', color: 'var(--text-muted)', marginBottom: '3rem' }}>
          Explore our comprehensive educational programs designed to foster excellence from early education through pre-university.
        </p>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          <div className="glass" id="e-techno" style={{ padding: '2rem', borderRadius: 'var(--radius-lg)', textAlign: 'left' }}>
            <h2 style={{ marginBottom: '1rem', color: 'var(--accent)' }}>e-Techno School</h2>
            <p>Our e-Techno program integrates modern technology with traditional learning to prepare students for the digital age.</p>
          </div>
          
          <div className="glass" id="pu-college" style={{ padding: '2rem', borderRadius: 'var(--radius-lg)', textAlign: 'left' }}>
            <h2 style={{ marginBottom: '1rem', color: 'var(--primary)' }}>PU College</h2>
            <p>We offer Science and Commerce streams with expert coaching for competitive exams like JEE, NEET, and KCET.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
