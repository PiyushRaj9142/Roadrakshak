import React, { useState } from 'react';
import { Navigation, ShieldCheck, Zap, AlertTriangle, ArrowRight, CheckCircle2, Clock, MapPin, Compass } from 'lucide-react';
import { sampleRoutes } from '../data/mockData';

export default function SafeRoutes() {
  const [origin, setOrigin] = useState('Connaught Place, New Delhi');
  const [destination, setDestination] = useState('Cyber Hub, Gurugram');
  const [selectedRoute, setSelectedRoute] = useState(sampleRoutes[0]);
  const [activeTab, setActiveTab] = useState('safest');

  return (
    <div style={{ padding: '0 20px', marginBottom: '40px' }}>
      
      {/* Route Header */}
      <div className="glass-panel" style={{ padding: '28px', borderRadius: '24px', marginBottom: '24px', border: '1px solid rgba(0, 242, 254, 0.3)' }}>
        <h2 style={{ fontSize: '1.8rem', fontWeight: 800, marginBottom: '8px', display: 'flex', alignItems: 'center', gap: '10px' }}>
          <Navigation color="#00f2fe" size={26} />
          <span>AI Safe Navigation <span className="gradient-text">Planner</span></span>
        </h2>
        <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '24px' }}>
          Calculates real-time route safety indices based on pothole density, night illumination, and live accident feeds.
        </p>

        {/* Origin & Destination Bar */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr auto', gap: '12px', alignItems: 'center' }}>
          <div style={{ position: 'relative' }}>
            <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 700, color: 'var(--text-muted)', marginBottom: '4px' }}>START POINT</label>
            <input
              type="text"
              value={origin}
              onChange={(e) => setOrigin(e.target.value)}
              style={{
                width: '100%',
                background: 'rgba(255,255,255,0.06)',
                border: '1px solid var(--border-color)',
                padding: '10px 14px',
                borderRadius: '10px',
                color: 'white',
                fontSize: '0.9rem',
                outline: 'none'
              }}
            />
          </div>

          <div style={{ position: 'relative' }}>
            <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 700, color: 'var(--text-muted)', marginBottom: '4px' }}>DESTINATION</label>
            <input
              type="text"
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
              style={{
                width: '100%',
                background: 'rgba(255,255,255,0.06)',
                border: '1px solid var(--border-color)',
                padding: '10px 14px',
                borderRadius: '10px',
                color: 'white',
                fontSize: '0.9rem',
                outline: 'none'
              }}
            />
          </div>

          <button
            className="btn-primary"
            style={{ padding: '12px 24px', marginTop: '18px', borderRadius: '10px', fontSize: '0.9rem' }}
          >
            <Compass size={18} />
            <span>Recalculate Safe Paths</span>
          </button>
        </div>
      </div>

      {/* Route Options Comparison */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
        
        {/* Safest Route Card */}
        <div
          onClick={() => setActiveTab('safest')}
          className="glass-panel"
          style={{
            padding: '24px',
            borderRadius: '20px',
            border: activeTab === 'safest' ? '2px solid #00f2fe' : '1px solid var(--border-color)',
            cursor: 'pointer',
            background: activeTab === 'safest' ? 'rgba(0, 242, 254, 0.08)' : undefined
          }}
        >
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '14px' }}>
            <span className="badge-live" style={{ background: 'rgba(0, 230, 118, 0.15)', color: '#00e676', border: '1px solid #00e676' }}>
              <ShieldCheck size={14} /> RECOMMENDED SAFEST ROUTE
            </span>
            <span style={{ fontSize: '1.4rem', fontWeight: 800, color: '#00e676' }}>
              {selectedRoute.safestScore}/100
            </span>
          </div>

          <h3 style={{ fontSize: '1.2rem', fontWeight: 800, marginBottom: '6px' }}>{selectedRoute.name}</h3>
          <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '16px' }}>
            Via Vasant Kunj Corridor • {selectedRoute.distance}
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '10px', marginBottom: '20px' }}>
            <div style={{ background: 'rgba(255,255,255,0.04)', padding: '10px', borderRadius: '10px', textAlign: 'center' }}>
              <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)' }}>EST. TIME</div>
              <div style={{ fontWeight: 800, color: 'white' }}>{selectedRoute.safestTime}</div>
            </div>
            <div style={{ background: 'rgba(0, 230, 118, 0.1)', padding: '10px', borderRadius: '10px', textAlign: 'center' }}>
              <div style={{ fontSize: '0.7rem', color: '#00e676' }}>HAZARDS AVOIDED</div>
              <div style={{ fontWeight: 800, color: '#00e676' }}>{selectedRoute.hazardsAvoided} Hazards</div>
            </div>
            <div style={{ background: 'rgba(255,255,255,0.04)', padding: '10px', borderRadius: '10px', textAlign: 'center' }}>
              <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)' }}>LIGHTING</div>
              <div style={{ fontWeight: 800, color: '#00f2fe' }}>98% Lit</div>
            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            {selectedRoute.features.map((feat, idx) => (
              <div key={idx} style={{ fontSize: '0.82rem', color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <CheckCircle2 size={14} color="#00e676" />
                <span>{feat}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Standard Fastest Route Card */}
        <div
          onClick={() => setActiveTab('fastest')}
          className="glass-panel"
          style={{
            padding: '24px',
            borderRadius: '20px',
            border: activeTab === 'fastest' ? '2px solid #ff5e36' : '1px solid var(--border-color)',
            cursor: 'pointer',
            background: activeTab === 'fastest' ? 'rgba(255, 94, 54, 0.08)' : undefined
          }}
        >
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '14px' }}>
            <span className="badge-live" style={{ background: 'rgba(255, 94, 54, 0.15)', color: '#ff5e36', border: '1px solid #ff5e36' }}>
              <Clock size={14} /> STANDARD FASTEST ROUTE
            </span>
            <span style={{ fontSize: '1.4rem', fontWeight: 800, color: '#ff5e36' }}>
              {selectedRoute.fastestScore}/100
            </span>
          </div>

          <h3 style={{ fontSize: '1.2rem', fontWeight: 800, marginBottom: '6px' }}>Via Outer Ring Rd & Moti Bagh</h3>
          <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '16px' }}>
            Direct Expressway • 26.2 km
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '10px', marginBottom: '20px' }}>
            <div style={{ background: 'rgba(255,255,255,0.04)', padding: '10px', borderRadius: '10px', textAlign: 'center' }}>
              <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)' }}>EST. TIME</div>
              <div style={{ fontWeight: 800, color: 'white' }}>{selectedRoute.fastestTime}</div>
            </div>
            <div style={{ background: 'rgba(255, 42, 95, 0.1)', padding: '10px', borderRadius: '10px', textAlign: 'center' }}>
              <div style={{ fontSize: '0.7rem', color: '#ff2a5f' }}>ACTIVE HAZARDS</div>
              <div style={{ fontWeight: 800, color: '#ff2a5f' }}>3 Active</div>
            </div>
            <div style={{ background: 'rgba(255,255,255,0.04)', padding: '10px', borderRadius: '10px', textAlign: 'center' }}>
              <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)' }}>LIGHTING</div>
              <div style={{ fontWeight: 800, color: '#ffb703' }}>72% Lit</div>
            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <div style={{ fontSize: '0.82rem', color: '#ff2a5f', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <AlertTriangle size={14} />
              <span>Passes deep pothole zone near Chirag Delhi</span>
            </div>
            <div style={{ fontSize: '0.82rem', color: '#ffb703', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <AlertTriangle size={14} />
              <span>Waterlogging reported under subway</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
