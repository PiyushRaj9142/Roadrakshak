import React, { useState } from 'react';
import { 
  AlertTriangle, Search, Filter, ThumbsUp, ThumbsDown, CheckCircle2, 
  MapPin, Shield, Eye, Layers, Navigation, Clock, User, Share2, MessageSquare, Plus, ExternalLink
} from 'lucide-react';

export default function LiveMap({ hazards, onUpvote, onDownvote, onResolve, onOpenReportModal }) {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedSeverity, setSelectedSeverity] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeHazardId, setActiveHazardId] = useState(hazards[0]?.id || null);
  const [mapStyle, setMapStyle] = useState('radar'); // 'radar', 'satellite', 'traffic'
  const [commentInput, setCommentInput] = useState('');
  const [comments, setComments] = useState({
    'HZ-101': ['Caution: Left lane has the deepest trench.', 'Tow truck standing nearby.'],
    'HZ-102': ['Subway flooded completely. Take DND bypass.'],
    'HZ-103': ['Ambulance reached site. Avoid 1 km radius.']
  });

  const categories = ['All', 'Pothole', 'Accident', 'Waterlogging', 'Lighting', 'Oil Spill', 'Signal Defect'];
  const severities = ['All', 'Critical', 'High', 'Medium', 'Low'];

  // Filter logic
  const filteredHazards = hazards.filter(h => {
    const matchesCat = selectedCategory === 'All' || h.category === selectedCategory;
    const matchesSev = selectedSeverity === 'All' || h.severity === selectedSeverity;
    const matchesSearch = h.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          h.locationName.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesSev && matchesSearch;
  });

  const selectedHazard = hazards.find(h => h.id === activeHazardId) || filteredHazards[0];

  const handleAddComment = (e) => {
    e.preventDefault();
    if (!commentInput.trim() || !activeHazardId) return;
    setComments(prev => ({
      ...prev,
      [activeHazardId]: [...(prev[activeHazardId] || []), commentInput.trim()]
    }));
    setCommentInput('');
  };

  const getSeverityBadgeClass = (severity) => {
    if (severity === 'Critical') return 'tag-critical';
    if (severity === 'High') return 'tag-critical';
    if (severity === 'Medium') return 'tag-medium';
    return 'tag-low';
  };

  const getCategoryIconColor = (category) => {
    switch (category) {
      case 'Accident': return '#ff2a5f';
      case 'Waterlogging': return '#00f2fe';
      case 'Pothole': return '#ff5e36';
      case 'Oil Spill': return '#ffb703';
      case 'Lighting': return '#9d4edd';
      default: return '#00e676';
    }
  };

  return (
    <div style={{ padding: '0 20px', marginBottom: '40px' }}>
      {/* Header & Controls Bar */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px', flexWrap: 'wrap', gap: '12px' }}>
        <div>
          <h2 style={{ fontSize: '1.6rem', fontWeight: 800, display: 'flex', alignItems: 'center', gap: '10px' }}>
            <AlertTriangle color="#00f2fe" size={26} />
            <span>Interactive Highway <span className="gradient-text">Hazard Grid</span></span>
          </h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>
            Live geospatial vector feed • Showing {filteredHazards.length} active road incidents
          </p>
        </div>

        {/* Map Layer Mode Toggle */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', background: 'rgba(255,255,255,0.05)', padding: '4px', borderRadius: '12px', border: '1px solid var(--border-color)' }}>
          <button 
            onClick={() => setMapStyle('radar')}
            style={{
              background: mapStyle === 'radar' ? '#00f2fe' : 'transparent',
              color: mapStyle === 'radar' ? '#051329' : 'var(--text-muted)',
              border: 'none', padding: '6px 12px', borderRadius: '8px', fontSize: '0.8rem', fontWeight: 700, cursor: 'pointer'
            }}
          >
            Radar Grid
          </button>
          <button 
            onClick={() => setMapStyle('satellite')}
            style={{
              background: mapStyle === 'satellite' ? '#00f2fe' : 'transparent',
              color: mapStyle === 'satellite' ? '#051329' : 'var(--text-muted)',
              border: 'none', padding: '6px 12px', borderRadius: '8px', fontSize: '0.8rem', fontWeight: 700, cursor: 'pointer'
            }}
          >
            Satellite GIS
          </button>
          <button 
            onClick={() => setMapStyle('traffic')}
            style={{
              background: mapStyle === 'traffic' ? '#00f2fe' : 'transparent',
              color: mapStyle === 'traffic' ? '#051329' : 'var(--text-muted)',
              border: 'none', padding: '6px 12px', borderRadius: '8px', fontSize: '0.8rem', fontWeight: 700, cursor: 'pointer'
            }}
          >
            Traffic Heatmap
          </button>
        </div>
      </div>

      {/* Filter & Search Toolbar */}
      <div className="glass-panel" style={{ padding: '14px 20px', borderRadius: '16px', marginBottom: '20px', border: '1px solid rgba(0, 242, 254, 0.2)' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px', flexWrap: 'wrap' }}>
          {/* Search Box */}
          <div style={{ position: 'relative', flex: '1 1 250px' }}>
            <Search size={16} color="var(--text-muted)" style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)' }} />
            <input
              type="text"
              placeholder="Search by street, landmark, or hazard type..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={{
                width: '100%',
                background: 'rgba(255, 255, 255, 0.06)',
                border: '1px solid var(--border-color)',
                borderRadius: '10px',
                padding: '8px 12px 8px 36px',
                color: 'white',
                fontSize: '0.85rem',
                outline: 'none'
              }}
            />
          </div>

          {/* Category Filter Pills */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px', overflowX: 'auto', paddingBottom: '2px' }}>
            <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '4px' }}>
              <Filter size={12} /> Category:
            </span>
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                style={{
                  background: selectedCategory === cat ? 'rgba(0, 242, 254, 0.2)' : 'rgba(255, 255, 255, 0.04)',
                  color: selectedCategory === cat ? '#00f2fe' : 'var(--text-muted)',
                  border: selectedCategory === cat ? '1px solid #00f2fe' : '1px solid transparent',
                  padding: '4px 10px',
                  borderRadius: '16px',
                  fontSize: '0.75rem',
                  fontWeight: 600,
                  cursor: 'pointer',
                  whiteSpace: 'nowrap'
                }}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Severity Select */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontWeight: 700 }}>Severity:</span>
            {severities.map(sev => (
              <button
                key={sev}
                onClick={() => setSelectedSeverity(sev)}
                style={{
                  background: selectedSeverity === sev ? 'rgba(255, 94, 54, 0.2)' : 'rgba(255, 255, 255, 0.04)',
                  color: selectedSeverity === sev ? '#ff5e36' : 'var(--text-muted)',
                  border: selectedSeverity === sev ? '1px solid #ff5e36' : '1px solid transparent',
                  padding: '4px 10px',
                  borderRadius: '16px',
                  fontSize: '0.75rem',
                  fontWeight: 600,
                  cursor: 'pointer'
                }}
              >
                {sev}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Main Map View & Details Split View */}
      <div style={{ display: 'grid', gridTemplateColumns: '1.4fr 0.9fr', gap: '20px' }}>
        
        {/* Interactive Map Visual Box */}
        <div className="glass-panel" style={{
          height: '620px',
          position: 'relative',
          borderRadius: '20px',
          overflow: 'hidden',
          border: '1px solid rgba(0, 242, 254, 0.3)',
          background: mapStyle === 'satellite' 
            ? 'radial-gradient(circle at 50% 50%, #0d1e2e 0%, #050b14 100%)' 
            : mapStyle === 'traffic'
            ? 'radial-gradient(circle at 50% 50%, #1a0f26 0%, #090611 100%)'
            : '#090e1a'
        }}>
          {/* SVG Map Highway Grid Background */}
          <svg width="100%" height="100%" style={{ position: 'absolute', top: 0, left: 0 }}>
            <defs>
              <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(255, 255, 255, 0.05)" strokeWidth="1"/>
              </pattern>
              <linearGradient id="roadGlow" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#00f2fe" stopOpacity="0.6"/>
                <stop offset="100%" stopColor="#4facfe" stopOpacity="0.2"/>
              </linearGradient>
            </defs>

            {/* Grid Pattern */}
            <rect width="100%" height="100%" fill="url(#grid)" />

            {/* Simulated Expressway Highways */}
            {/* NH-48 Expressway Line */}
            <path d="M 50 100 Q 200 250 400 300 T 800 550" fill="none" stroke="rgba(0, 242, 254, 0.3)" strokeWidth="12" strokeLinecap="round" />
            <path d="M 50 100 Q 200 250 400 300 T 800 550" fill="none" stroke="#00f2fe" strokeWidth="2" strokeDasharray="8 6" />

            {/* Outer Ring Road Ring */}
            <path d="M 120 450 Q 300 120 650 200 T 700 500" fill="none" stroke="rgba(255, 94, 54, 0.25)" strokeWidth="10" />
            <path d="M 120 450 Q 300 120 650 200 T 700 500" fill="none" stroke="#ff5e36" strokeWidth="2" strokeDasharray="10 6" />

            {/* DND Flyway */}
            <path d="M 400 300 L 750 320" fill="none" stroke="rgba(157, 78, 221, 0.4)" strokeWidth="8" />

            {/* Traffic Heatmap Overlays (if enabled) */}
            {mapStyle === 'traffic' && (
              <>
                <circle cx="38%" cy="42%" r="50" fill="rgba(255, 42, 95, 0.3)" filter="blur(10px)" />
                <circle cx="72%" cy="30%" r="70" fill="rgba(255, 42, 95, 0.4)" filter="blur(12px)" />
                <circle cx="55%" cy="68%" r="60" fill="rgba(255, 183, 3, 0.3)" filter="blur(10px)" />
              </>
            )}

            {/* Landmark City Labels */}
            <text x="5%" y="15%" fill="rgba(255,255,255,0.4)" fontSize="11" fontWeight="700">T3 AIRPORT HUB</text>
            <text x="42%" y="12%" fill="rgba(255,255,255,0.4)" fontSize="11" fontWeight="700">CONNAUGHT PLACE</text>
            <text x="75%" y="22%" fill="rgba(255,255,255,0.4)" fontSize="11" fontWeight="700">CYBER CITY GURUGRAM</text>
            <text x="75%" y="60%" fill="rgba(255,255,255,0.4)" fontSize="11" fontWeight="700">NOIDA SECTOR 62</text>
          </svg>

          {/* Compass Radar Overlay */}
          <div style={{ position: 'absolute', top: '16px', left: '16px', display: 'flex', gap: '8px', alignItems: 'center' }}>
            <span className="badge-live" style={{ background: 'rgba(0,0,0,0.6)', border: '1px solid rgba(0, 242, 254, 0.4)' }}>
              <Navigation size={12} color="#00f2fe" /> SENSOR RADAR ONLINE
            </span>
          </div>

          {/* Map Controls */}
          <div style={{ position: 'absolute', bottom: '16px', right: '16px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <button 
              onClick={() => alert("Simulating GPS Location centering on user's current coordinates...")}
              style={{
                background: 'rgba(18, 26, 43, 0.9)',
                border: '1px solid var(--border-glow)',
                color: '#00f2fe',
                padding: '10px 14px',
                borderRadius: '12px',
                cursor: 'pointer',
                fontWeight: 700,
                fontSize: '0.8rem',
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                boxShadow: '0 4px 15px rgba(0,0,0,0.5)'
              }}
            >
              <Navigation size={16} />
              <span>Center GPS</span>
            </button>
          </div>

          {/* Interactive Pins on Map */}
          {filteredHazards.map((h) => {
            const isSelected = h.id === activeHazardId;
            const color = getCategoryIconColor(h.category);
            
            return (
              <div
                key={h.id}
                onClick={() => setActiveHazardId(h.id)}
                style={{
                  position: 'absolute',
                  top: `${h.coords.y}%`,
                  left: `${h.coords.x}%`,
                  transform: 'translate(-50%, -50%)',
                  cursor: 'pointer',
                  zIndex: isSelected ? 50 : 10,
                  transition: 'all 0.3s ease'
                }}
              >
                {/* Pulsating Ring */}
                <div style={{
                  position: 'absolute',
                  top: '-8px', left: '-8px', right: '-8px', bottom: '-8px',
                  borderRadius: '50%',
                  border: `2px solid ${color}`,
                  animation: 'ping 2s cubic-bezier(0, 0, 0.2, 1) infinite',
                  opacity: 0.7
                }} />

                {/* Marker Button */}
                <div style={{
                  width: isSelected ? '46px' : '36px',
                  height: isSelected ? '46px' : '36px',
                  borderRadius: '50%',
                  background: isSelected ? color : 'rgba(18, 26, 43, 0.95)',
                  border: `2px solid ${color}`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: isSelected ? `0 0 20px ${color}` : '0 4px 10px rgba(0,0,0,0.5)',
                  transition: 'all 0.2s ease'
                }}>
                  <AlertTriangle size={isSelected ? 22 : 18} color={isSelected ? '#051329' : color} />
                </div>

                {/* Pin Tooltip Tag */}
                <div style={{
                  position: 'absolute',
                  top: '100%',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  marginTop: '4px',
                  background: 'rgba(9, 13, 22, 0.92)',
                  border: `1px solid ${color}`,
                  color: 'white',
                  padding: '2px 8px',
                  borderRadius: '6px',
                  fontSize: '0.68rem',
                  fontWeight: 700,
                  whiteSpace: 'nowrap',
                  boxShadow: '0 4px 12px rgba(0,0,0,0.6)'
                }}>
                  {h.category}: {h.id}
                </div>
              </div>
            );
          })}
        </div>

        {/* Right Details Panel */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {selectedHazard ? (
            <div className="glass-panel" style={{ padding: '24px', borderRadius: '20px', border: '1px solid rgba(0, 242, 254, 0.25)' }}>
              
              {/* Top Header of Hazard */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '14px' }}>
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px' }}>
                    <span className={getSeverityBadgeClass(selectedHazard.severity)}>
                      {selectedHazard.severity} Severity
                    </span>
                    <span style={{ fontSize: '0.75rem', background: 'rgba(255,255,255,0.08)', padding: '2px 8px', borderRadius: '10px', color: 'var(--text-muted)' }}>
                      {selectedHazard.category}
                    </span>
                    {selectedHazard.verified && (
                      <span style={{ fontSize: '0.75rem', color: '#00e676', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '4px' }}>
                        <CheckCircle2 size={12} /> Verified
                      </span>
                    )}
                  </div>
                  <h3 style={{ fontSize: '1.25rem', fontWeight: 800, lineHeight: 1.3 }}>{selectedHazard.title}</h3>
                </div>
                <div style={{ fontSize: '0.75rem', color: 'var(--text-dim)', textAlign: 'right' }}>
                  <Clock size={12} inline style={{ marginRight: '4px' }} />
                  {selectedHazard.timestamp}
                </div>
              </div>

              {/* Location Badge */}
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                background: 'rgba(0, 242, 254, 0.06)',
                border: '1px solid rgba(0, 242, 254, 0.15)',
                padding: '8px 12px',
                borderRadius: '10px',
                marginBottom: '16px',
                fontSize: '0.82rem',
                color: '#00f2fe'
              }}>
                <MapPin size={16} />
                <span>{selectedHazard.locationName}</span>
              </div>

              {/* Image Preview */}
              {selectedHazard.image && (
                <div style={{ borderRadius: '12px', overflow: 'hidden', height: '160px', marginBottom: '16px', position: 'relative' }}>
                  <img 
                    src={selectedHazard.image} 
                    alt={selectedHazard.title} 
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                  <div style={{
                    position: 'absolute', bottom: '8px', right: '8px',
                    background: 'rgba(0,0,0,0.7)', padding: '4px 8px', borderRadius: '6px', fontSize: '0.7rem', color: 'white'
                  }}>
                    📷 Commuter Photo Evidence
                  </div>
                </div>
              )}

              {/* Description */}
              <p style={{ color: 'var(--text-muted)', fontSize: '0.88rem', marginBottom: '20px', lineHeight: 1.5 }}>
                {selectedHazard.description}
              </p>

              {/* Reporter Info */}
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderTop: '1px solid var(--border-color)', borderBottom: '1px solid var(--border-color)', padding: '10px 0', marginBottom: '20px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                  <User size={14} color="#00f2fe" />
                  <span>Reported by: <strong style={{ color: 'white' }}>{selectedHazard.reportedBy}</strong></span>
                </div>
                <span style={{ fontSize: '0.75rem', color: '#00e676', fontWeight: 600 }}>
                  Status: {selectedHazard.status}
                </span>
              </div>

              {/* Action Upvote / Downvote / Resolve */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '20px' }}>
                <button
                  onClick={() => onUpvote(selectedHazard.id)}
                  style={{
                    flex: 1,
                    background: 'rgba(0, 242, 254, 0.1)',
                    border: '1px solid rgba(0, 242, 254, 0.3)',
                    color: '#00f2fe',
                    padding: '10px',
                    borderRadius: '10px',
                    fontWeight: 700,
                    fontSize: '0.85rem',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '6px'
                  }}
                >
                  <ThumbsUp size={16} />
                  <span>Confirm ({selectedHazard.upvotes})</span>
                </button>

                <button
                  onClick={() => onDownvote(selectedHazard.id)}
                  style={{
                    background: 'rgba(255, 255, 255, 0.05)',
                    border: '1px solid var(--border-color)',
                    color: 'var(--text-muted)',
                    padding: '10px 14px',
                    borderRadius: '10px',
                    fontWeight: 600,
                    fontSize: '0.85rem',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '4px'
                  }}
                >
                  <ThumbsDown size={16} />
                  <span>({selectedHazard.downvotes})</span>
                </button>

                <button
                  onClick={() => onResolve(selectedHazard.id)}
                  style={{
                    background: 'rgba(0, 230, 118, 0.15)',
                    border: '1px solid rgba(0, 230, 118, 0.4)',
                    color: '#00e676',
                    padding: '10px 14px',
                    borderRadius: '10px',
                    fontWeight: 700,
                    fontSize: '0.85rem',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px'
                  }}
                >
                  <CheckCircle2 size={16} />
                  <span>Mark Resolved</span>
                </button>
              </div>

              {/* Comments Section */}
              <div>
                <div style={{ fontSize: '0.85rem', fontWeight: 700, marginBottom: '10px', display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <MessageSquare size={14} color="#00f2fe" />
                  <span>Commuter Notes ({comments[selectedHazard.id]?.length || 0})</span>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', maxHeight: '120px', overflowY: 'auto', marginBottom: '10px' }}>
                  {(comments[selectedHazard.id] || ['Be careful around this turn!']).map((cmt, idx) => (
                    <div key={idx} style={{ background: 'rgba(255,255,255,0.03)', padding: '6px 10px', borderRadius: '8px', fontSize: '0.78rem', color: 'var(--text-muted)' }}>
                      💬 {cmt}
                    </div>
                  ))}
                </div>

                <form onSubmit={handleAddComment} style={{ display: 'flex', gap: '8px' }}>
                  <input
                    type="text"
                    placeholder="Add quick driver update..."
                    value={commentInput}
                    onChange={(e) => setCommentInput(e.target.value)}
                    style={{
                      flex: 1,
                      background: 'rgba(255,255,255,0.05)',
                      border: '1px solid var(--border-color)',
                      borderRadius: '8px',
                      padding: '6px 10px',
                      color: 'white',
                      fontSize: '0.78rem'
                    }}
                  />
                  <button type="submit" style={{ background: '#00f2fe', color: '#051329', border: 'none', padding: '6px 12px', borderRadius: '8px', fontWeight: 700, fontSize: '0.78rem', cursor: 'pointer' }}>
                    Post
                  </button>
                </form>
              </div>

            </div>
          ) : (
            <div className="glass-panel" style={{ padding: '40px', textAlign: 'center', color: 'var(--text-muted)' }}>
              Select a hazard pin on the map to view details.
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
