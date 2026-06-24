import { MapPin, Phone, Mail } from 'lucide-react';

export default function Contact() {
  return (
    <div className="container" style={{ paddingTop: '150px', paddingBottom: '100px', minHeight: '80vh' }}>
      <h1 className="section-title">Contact Us</h1>
      
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem', maxWidth: '1000px', margin: '0 auto' }}>
        <div className="glass" style={{ padding: '3rem', borderRadius: 'var(--radius-lg)' }}>
          <h2 style={{ marginBottom: '2rem', color: 'var(--primary)' }}>Get in Touch</h2>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
              <MapPin style={{ color: 'var(--accent)', marginTop: '4px' }} />
              <div>
                <strong style={{ display: 'block', marginBottom: '0.25rem' }}>Visit Us</strong>
                <p style={{ color: 'var(--text-muted)' }}>QJ7X+2W2, 40 Feet Venus County Rd, Madapatna, Karnataka 560105</p>
              </div>
            </div>
            
            <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
              <Phone style={{ color: 'var(--accent)', marginTop: '4px' }} />
              <div>
                <strong style={{ display: 'block', marginBottom: '0.25rem' }}>Call Us</strong>
                <p style={{ color: 'var(--text-muted)' }}>+91 XXXXX XXXXX</p>
              </div>
            </div>
            
            <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
              <Mail style={{ color: 'var(--accent)', marginTop: '4px' }} />
              <div>
                <strong style={{ display: 'block', marginBottom: '0.25rem' }}>Email Us</strong>
                <p style={{ color: 'var(--text-muted)' }}>info@wisdomcaregroupofinstitutions.com</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="glass" style={{ padding: '3rem', borderRadius: 'var(--radius-lg)' }}>
          <h2 style={{ marginBottom: '2rem', color: 'var(--primary)' }}>Send a Message</h2>
          <form style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <input type="text" style={{ width: '100%', padding: '1rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)' }} placeholder="Your Name" />
            <input type="email" style={{ width: '100%', padding: '1rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)' }} placeholder="Your Email" />
            <textarea style={{ width: '100%', padding: '1rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)', minHeight: '150px', resize: 'vertical' }} placeholder="Your Message"></textarea>
            <button type="button" className="btn-primary" style={{ marginTop: '0.5rem' }}>Send Message</button>
          </form>
        </div>
      </div>
    </div>
  );
}
