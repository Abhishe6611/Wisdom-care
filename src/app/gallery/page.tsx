import Image from 'next/image';

export default function Gallery() {
  const images = [
    "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=2070&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=2132&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=2070&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1546410531-ea4ca67efce9?q=80&w=2070&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=2022&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop",
  ];

  return (
    <div className="container" style={{ paddingTop: '150px', paddingBottom: '100px', minHeight: '80vh' }}>
      <h1 className="section-title">Campus Gallery</h1>
      <p style={{ textAlign: 'center', color: 'var(--text-muted)', marginBottom: '3rem', fontSize: '1.2rem' }}>
        Take a glimpse into the vibrant life and world-class facilities at Wisdom Care.
      </p>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
        {images.map((src, index) => (
          <div key={index} style={{ position: 'relative', width: '100%', height: '300px', borderRadius: 'var(--radius-lg)', overflow: 'hidden', boxShadow: 'var(--shadow-md)' }}>
            <Image 
              src={src}
              alt=""
              fill
              style={{ objectFit: 'cover', transition: 'transform 0.3s ease' }}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
