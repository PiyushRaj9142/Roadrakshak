import React, { useState } from 'react';
import { X, AlertTriangle, Camera, MapPin, ShieldAlert, Sparkles, CheckCircle2 } from 'lucide-react';

export default function ReportModal({ isOpen, onClose, onSubmitReport }) {
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('Pothole');
  const [severity, setSeverity] = useState('High');
  const [locationName, setLocationName] = useState('');
  const [description, setDescription] = useState('');
  const [selectedPhoto, setSelectedPhoto] = useState('https://images.unsplash.com/photo-1515162816999-a0c47dc192f7?w=600&auto=format&fit=crop&q=60');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedSuccess, setSubmittedSuccess] = useState(false);

  if (!isOpen) return null;

  const samplePhotos = [
    { label: 'Pothole Trench', url: 'https://images.unsplash.com/photo-1515162816999-a0c47dc192f7?w=600&auto=format&fit=crop&q=60' },
    { label: 'Waterlogging Flood', url: 'https://images.unsplash.com/photo-1541888946425-d0fbb186a5b2?w=600&auto=format&fit=crop&q=60' },
    { label: 'Road Crash Hazard', url: 'https://images.unsplash.com/photo-1563720223185-11003d516935?w=600&auto=format&fit=crop&q=60' },
    { label: 'Broken Lighting', url: 'https://images.unsplash.com/photo-1509114397022-ed747cca3f65?w=600&auto=format&fit=crop&q=60' }
  ];

  const handleDetectGPS = () => {
    setLocationName('NH-48 Flyover, Near Mahipalpur Crossing (GPS Lock)');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !locationName) {
      alert("Please provide a hazard title and location!");
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      const newHazard = {
        id: `HZ-${Math.floor(100 + Math.random() * 900)}`,
        title,
        category,
        severity,
        locationName,
        coords: { x: Math.floor(25 + Math.random() * 50), y: Math.floor(25 + Math.random() * 50) },
        timestamp: 'Just now',
        upvotes: 1,
        downvotes: 0,
        status: 'Open',
        reportedBy: 'You (Level 1 Rakshak)',
        description: description || 'Reported via RoadRakshak mobile web portal.',
        verified: true,
        verificationCount: 1,
        image: selectedPhoto
      };

      onSubmitReport(newHazard);
      setIsSubmitting(false);
      setSubmittedSuccess(true);

      setTimeout(() => {
        setSubmittedSuccess(false);
        onClose();
      }, 1500);
    }, 800);
  };

  return (
    <div className="modal-overlay">
      <div className="glass-panel" style={{
        width: '100%',
        maxWidth: '560px',
        maxHeight: '90vh',
        overflowY: 'auto',
        borderRadius: '24px',
        padding: '28px',
        border: '1px solid rgba(0, 242, 254, 0.4)',
        position: 'relative'
      }}>
        {/* Close button */}
        <button
          onClick={onClose}
          style={{
            position: 'absolute', top: '20px', right: '20px',
            background: 'rgba(255,255,255,0.06)', border: '1px solid var(--border-color)',
            color: 'white', width: '32px', height: '32px', borderRadius: '50%',
            cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center'
          }}
        >
          <X size={18} />
        </button>

        {submittedSuccess ? (
          <div style={{ textAlign: 'center', padding: '40px 20px' }}>
            <div style={{
              width: '70px', height: '70px', borderRadius: '50%',
              background: 'rgba(0, 230, 118, 0.2)', border: '2px solid #00e676',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              margin: '0 auto 20px auto'
            }}>
              <CheckCircle2 size={40} color="#00e676" />
            </div>
            <h2 style={{ fontSize: '1.8rem', fontWeight: 800, marginBottom: '10px' }}>Hazard Live Broadcasted!</h2>
            <p style={{ color: 'var(--text-muted)', marginBottom: '20px' }}>
              Your report has been pinned to the Live Grid & routed to NHAI Authority response teams.
            </p>
            <div className="badge-live" style={{ background: 'rgba(0, 242, 254, 0.15)', color: '#00f2fe', border: '1px solid #00f2fe', padding: '8px 16px', fontSize: '0.85rem' }}>
              <Sparkles size={16} /> You earned +50 Rakshak Points!
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
              <AlertTriangle color="#00f2fe" size={24} />
              <h2 style={{ fontSize: '1.5rem', fontWeight: 800 }}>Report Road Hazard</h2>
            </div>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.82rem', marginBottom: '24px' }}>
              Help fellow commuters avoid accidents by submitting real-time road conditions.
            </p>

            {/* Category Select */}
            <div style={{ marginBottom: '18px' }}>
              <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 700, color: 'var(--text-muted)', marginBottom: '8px' }}>
                HAZARD CATEGORY
              </label>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '8px' }}>
                {['Pothole', 'Accident', 'Waterlogging', 'Lighting', 'Oil Spill', 'Signal Defect'].map(cat => (
                  <button
                    key={cat}
                    type="button"
                    onClick={() => setCategory(cat)}
                    style={{
                      background: category === cat ? 'rgba(0, 242, 254, 0.18)' : 'rgba(255,255,255,0.04)',
                      color: category === cat ? '#00f2fe' : 'var(--text-muted)',
                      border: category === cat ? '1px solid #00f2fe' : '1px solid var(--border-color)',
                      padding: '10px',
                      borderRadius: '10px',
                      fontSize: '0.8rem',
                      fontWeight: 700,
                      cursor: 'pointer'
                    }}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            {/* Severity Select */}
            <div style={{ marginBottom: '18px' }}>
              <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 700, color: 'var(--text-muted)', marginBottom: '8px' }}>
                SEVERITY LEVEL
              </label>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '8px' }}>
                {[
                  { level: 'Critical', color: '#ff2a5f', desc: 'Immediate Crash Risk' },
                  { level: 'High', color: '#ff5e36', desc: 'Rim / Vehicle Damage' },
                  { level: 'Medium', color: '#ffb703', desc: 'Slow Down Warning' }
                ].map(item => (
                  <button
                    key={item.level}
                    type="button"
                    onClick={() => setSeverity(item.level)}
                    style={{
                      background: severity === item.level ? `${item.color}25` : 'rgba(255,255,255,0.04)',
                      color: severity === item.level ? item.color : 'var(--text-muted)',
                      border: severity === item.level ? `1px solid ${item.color}` : '1px solid var(--border-color)',
                      padding: '10px',
                      borderRadius: '10px',
                      textAlign: 'left',
                      cursor: 'pointer'
                    }}
                  >
                    <div style={{ fontWeight: 800, fontSize: '0.85rem' }}>{item.level}</div>
                    <div style={{ fontSize: '0.68rem', opacity: 0.8 }}>{item.desc}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Title */}
            <div style={{ marginBottom: '16px' }}>
              <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 700, color: 'var(--text-muted)', marginBottom: '6px' }}>
                HAZARD TITLE
              </label>
              <input
                type="text"
                required
                placeholder="e.g., Deep open pothole in middle lane"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                style={{
                  width: '100%',
                  background: 'rgba(255,255,255,0.06)',
                  border: '1px solid var(--border-color)',
                  borderRadius: '10px',
                  padding: '10px 14px',
                  color: 'white',
                  fontSize: '0.9rem',
                  outline: 'none'
                }}
              />
            </div>

            {/* Location */}
            <div style={{ marginBottom: '16px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '6px' }}>
                <label style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--text-muted)' }}>
                  LOCATION / STRETCH
                </label>
                <button
                  type="button"
                  onClick={handleDetectGPS}
                  style={{
                    background: 'none', border: 'none', color: '#00f2fe', fontSize: '0.75rem', fontWeight: 700, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '4px'
                  }}
                >
                  <MapPin size={12} /> Auto-Detect GPS
                </button>
              </div>
              <input
                type="text"
                required
                placeholder="e.g., Outer Ring Rd near Chirag Delhi Flyover"
                value={locationName}
                onChange={(e) => setLocationName(e.target.value)}
                style={{
                  width: '100%',
                  background: 'rgba(255,255,255,0.06)',
                  border: '1px solid var(--border-color)',
                  borderRadius: '10px',
                  padding: '10px 14px',
                  color: 'white',
                  fontSize: '0.9rem',
                  outline: 'none'
                }}
              />
            </div>

            {/* Description */}
            <div style={{ marginBottom: '18px' }}>
              <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 700, color: 'var(--text-muted)', marginBottom: '6px' }}>
                DESCRIPTION & ADVISORY
              </label>
              <textarea
                rows={2}
                placeholder="Add helpful details for commuters (e.g. depth, lane affected, night visibility)..."
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                style={{
                  width: '100%',
                  background: 'rgba(255,255,255,0.06)',
                  border: '1px solid var(--border-color)',
                  borderRadius: '10px',
                  padding: '10px 14px',
                  color: 'white',
                  fontSize: '0.85rem',
                  outline: 'none',
                  resize: 'none'
                }}
              />
            </div>

            {/* Photo Attachment Picker */}
            <div style={{ marginBottom: '24px' }}>
              <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 700, color: 'var(--text-muted)', marginBottom: '8px' }}>
                PHOTO EVIDENCE ATTACHMENT
              </label>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '8px' }}>
                {samplePhotos.map((p, idx) => (
                  <div
                    key={idx}
                    onClick={() => setSelectedPhoto(p.url)}
                    style={{
                      height: '70px',
                      borderRadius: '10px',
                      overflow: 'hidden',
                      border: selectedPhoto === p.url ? '2px solid #00f2fe' : '1px solid var(--border-color)',
                      cursor: 'pointer',
                      position: 'relative'
                    }}
                  >
                    <img src={p.url} alt={p.label} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    {selectedPhoto === p.url && (
                      <div style={{ position: 'absolute', top: '4px', right: '4px', background: '#00f2fe', borderRadius: '50%', padding: '2px' }}>
                        <CheckCircle2 size={12} color="#051329" />
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Submit Action */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="btn-primary"
              style={{ width: '100%', padding: '14px', justifyContent: 'center', fontSize: '1rem', borderRadius: '12px' }}
            >
              {isSubmitting ? 'Broadcasting to Grid...' : 'Submit & Pin Hazard to Live Map (+50 PTS)'}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
