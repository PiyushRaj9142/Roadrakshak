import React from 'react';
import { Shield, AlertTriangle, Radio, Users, CheckCircle2, Clock, MapPin, Zap, ArrowRight, Siren } from 'lucide-react';

export default function HeroBanner({ onOpenReportModal, onOpenSos, onExploreMap, totalHazards, resolvedCount }) {
  return (
    <div style={{ padding: '0 20px', marginBottom: '24px' }}>
      {/* Ticker Banner */}
      <div style={{
        background: 'linear-gradient(90deg, rgba(255,42,95,0.15) 0%, rgba(0,242,254,0.15) 50%, rgba(0,230,118,0.15) 100%)',
        border: '1px solid rgba(255,255,255,0.12)',
        borderRadius: '12px',
        padding: '8px 16px',
        marginBottom: '20px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        fontSize: '0.82rem',
        overflow: 'hidden'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <span className="badge-live">
            <span className="live-dot"></span> LIVE SENSORS
          </span>
          <span style={{ color: 'var(--text-main)', fontWeight: 600 }}>
            🚨 Heavy rainfall warning across NH-48. Waterlogging active at Chirag Delhi & Moti Bagh subways.
          </span>
        </div>
        <div style={{ color: '#00f2fe', fontWeight: 700, whiteSpace: 'nowrap', cursor: 'pointer' }} onClick={onExploreMap}>
          View Live Feed ➔
        </div>
      </div>

      {/* Main Hero Card */}
      <div className="glass-panel" style={{
        padding: '36px 40px',
        borderRadius: '24px',
        position: 'relative',
        overflow: 'hidden',
        background: 'linear-gradient(135deg, rgba(18, 26, 43, 0.95) 0%, rgba(10, 16, 28, 0.98) 100%)',
        border: '1px solid rgba(0, 242, 254, 0.25)'
      }}>
        {/* Background Decorative Glow */}
        <div style={{
          position: 'absolute',
          top: '-100px',
          right: '-100px',
          width: '350px',
          height: '350px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(0, 242, 254, 0.15) 0%, transparent 70%)',
          pointerEvents: 'none'
        }} />
        <div style={{
          position: 'absolute',
          bottom: '-120px',
          left: '30%',
          width: '400px',
          height: '400px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(255, 42, 95, 0.1) 0%, transparent 70%)',
          pointerEvents: 'none'
        }} />

        <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 0.8fr', gap: '30px', alignItems: 'center' }}>
          {/* Left Text & CTAs */}
          <div>
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              background: 'rgba(0, 242, 254, 0.1)',
              border: '1px solid rgba(0, 242, 254, 0.3)',
              padding: '6px 14px',
              borderRadius: '20px',
              fontSize: '0.8rem',
              color: '#00f2fe',
              fontWeight: 700,
              marginBottom: '16px'
            }}>
              <Zap size={14} />
              <span>COMMUNITY-DRIVEN HIGHWAY INTELLIGENCE</span>
            </div>

            <h1 style={{ fontSize: '2.5rem', fontWeight: 800, lineHeight: 1.2, marginBottom: '14px' }}>
              Protecting Every Journey with <span className="gradient-text">Real-Time Road Intelligence</span>
            </h1>

            <p style={{ color: 'var(--text-muted)', fontSize: '1rem', marginBottom: '28px', maxWidth: '600px' }}>
              RoadRakshak connects commuter alerts, AI computer-vision sensors, and municipal authorities to map potholes, accidents, and hazards instantly — saving lives on every highway.
            </p>

            <div style={{ display: 'flex', alignItems: 'center', gap: '14px', flexWrap: 'wrap' }}>
              <button onClick={onOpenReportModal} className="btn-primary" style={{ padding: '12px 24px', fontSize: '0.95rem' }}>
                <AlertTriangle size={20} />
                <span>Report Road Hazard (+50 PTS)</span>
              </button>

              <button onClick={onOpenSos} className="btn-sos animate-sos-pulse" style={{ padding: '12px 22px', fontSize: '0.95rem' }}>
                <Siren size={20} />
                <span>Emergency SOS</span>
              </button>

              <button onClick={onExploreMap} className="btn-secondary" style={{ padding: '12px 20px', fontSize: '0.95rem' }}>
                <span>Explore Interactive Map</span>
                <ArrowRight size={18} />
              </button>
            </div>
          </div>

          {/* Right Metrics Grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: '14px'
          }}>
            <div className="glass-panel" style={{ padding: '18px', background: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(0, 242, 254, 0.2)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#00f2fe', marginBottom: '6px' }}>
                <AlertTriangle size={20} />
                <span style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--text-muted)' }}>ACTIVE HAZARDS</span>
              </div>
              <div style={{ fontSize: '2rem', fontWeight: 800 }}>{totalHazards}</div>
              <div style={{ fontSize: '0.75rem', color: '#00e676' }}>↑ 14 mapped in last hour</div>
            </div>

            <div className="glass-panel" style={{ padding: '18px', background: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(0, 230, 118, 0.2)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#00e676', marginBottom: '6px' }}>
                <CheckCircle2 size={20} />
                <span style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--text-muted)' }}>REPAIRED TODAY</span>
              </div>
              <div style={{ fontSize: '2rem', fontWeight: 800 }}>{resolvedCount + 8}</div>
              <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>By Municipal PWD</div>
            </div>

            <div className="glass-panel" style={{ padding: '18px', background: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(255, 94, 54, 0.2)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#ff5e36', marginBottom: '6px' }}>
                <Clock size={20} />
                <span style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--text-muted)' }}>AVG SOS RESPONSE</span>
              </div>
              <div style={{ fontSize: '2rem', fontWeight: 800 }}>4.2 min</div>
              <div style={{ fontSize: '0.75rem', color: '#00f2fe' }}>Direct NHAI dispatch</div>
            </div>

            <div className="glass-panel" style={{ padding: '18px', background: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(157, 78, 221, 0.2)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#9d4edd', marginBottom: '6px' }}>
                <Users size={20} />
                <span style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--text-muted)' }}>ACTIVE RAKSHAKS</span>
              </div>
              <div style={{ fontSize: '2rem', fontWeight: 800 }}>14.8k</div>
              <div style={{ fontSize: '0.75rem', color: '#ffb703' }}>Verified commuters</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
