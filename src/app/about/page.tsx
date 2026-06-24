export default function About() {
  return (
    <div className="container" style={{ paddingTop: '150px', paddingBottom: '100px', minHeight: '80vh' }}>
      <h1 className="section-title">About Us</h1>
      <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
        <p style={{ fontSize: '1.2rem', color: 'var(--text-muted)', marginBottom: '2rem' }}>
          Wisdom Care Group of Institutions is committed to enriching lives through value education.
          Our mission is to nurture intellectual curiosity, critical thinking, and a lifelong love for learning.
        </p>
        <div className="glass" style={{ padding: '3rem', borderRadius: 'var(--radius-lg)' }}>
          <h2 style={{ marginBottom: '1.5rem', color: 'var(--primary)' }}>Our Vision</h2>
          <p style={{ color: 'var(--text-main)' }}>
            To be a premier educational institution that prepares students to be global citizens 
            and future leaders, equipped with knowledge, compassion, and resilience.
          </p>
        </div>
      </div>
    </div>
  );
}
