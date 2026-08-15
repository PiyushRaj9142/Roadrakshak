import React, { useState } from 'react';
import { 
  PhoneCall, Siren, ShieldAlert, Ambulance, Flame, Wrench, Car, 
  MapPin, Radio, CheckCircle2, HeartPulse, HelpCircle, Volume2, VolumeX, Navigation
} from 'lucide-react';
import { emergencyHotlines } from '../data/mockData';

export default function EmergencySOS() {
  const [sosActive, setSosActive] = useState(false);
  const [sirenSound, setSirenSound] = useState(false);
  const [activeGuideTab, setActiveGuideTab] = useState('cpr');
  const [dispatchedUnits, setDispatchedUnits] = useState(false);

  const toggleSosAlert = () => {
    if (!sosActive) {
      setSosActive(true);
      setSirenSound(true);
      setTimeout(() => {
        setDispatchedUnits(true);
      }, 3000);
    } else {
      setSosActive(false);
      setSirenSound(false);
      setDispatchedUnits(false);
    }
  };

  return (
    <div style={{ padding: '0 20px', marginBottom: '40px' }}>
      
      {/* SOS Alert Top Header */}
      <div className="glass-panel" style={{
        padding: '30px',
        borderRadius: '24px',
        marginBottom: '24px',
        background: sosActive 
          ? 'linear-gradient(135deg, rgba(255, 42, 95, 0.3) 0%, rgba(18, 26, 43, 0.95) 100%)' 
          : 'linear-gradient(135deg, rgba(255, 42, 95, 0.1) 0%, rgba(18, 26, 43, 0.8) 100%)',
        border: sosActive ? '2px solid #ff2a5f' : '1px solid rgba(255, 42, 95, 0.3)',
        boxShadow: sosActive ? 'var(--shadow-red)' : 'none',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 0.8fr', gap: '30px', alignItems: 'center' }}>
          <div>
            <div className="badge-live" style={{ background: '#ff2a5f22', color: '#ff2a5f', border: '1px solid #ff2a5f55', marginBottom: '12px' }}>
              <Siren size={14} /> INSTANT DISPATCH PROTOCOL
            </div>
            <h2 style={{ fontSize: '2.2rem', fontWeight: 800, marginBottom: '12px' }}>
              RoadRakshak <span style={{ color: '#ff2a5f' }}>Emergency SOS</span>
            </h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', marginBottom: '20px' }}>
              Tap below to broadcast your live GPS location to Highway Patrol 112 & nearest Ambulance units instantly.
            </p>

            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flexWrap: 'wrap' }}>
              <button
                onClick={toggleSosAlert}
                className={sosActive ? 'btn-sos' : 'btn-sos animate-sos-pulse'}
                style={{
                  padding: '16px 32px',
                  fontSize: '1.1rem',
                  borderRadius: '16px',
                  background: sosActive ? '#00e676' : undefined,
                  boxShadow: sosActive ? '0 0 30px rgba(0, 230, 118, 0.6)' : undefined
                }}
              >
                <Siren size={24} />
                <span>{sosActive ? 'CANCEL SOS BROADCAST' : 'ACTIVATE HIGHWAY SOS'}</span>
              </button>

              <button
                onClick={() => setSirenSound(!sirenSound)}
                className="btn-secondary"
                style={{ padding: '14px 18px', borderRadius: '16px' }}
              >
                {sirenSound ? <Volume2 size={20} color="#ff2a5f" /> : <VolumeX size={20} />}
                <span>{sirenSound ? 'Siren Audio On' : 'Mute Sound'}</span>
              </button>
            </div>
          </div>

          {/* SOS Dispatch Status Card */}
          <div className="glass-panel" style={{
            padding: '24px',
            background: 'rgba(0, 0, 0, 0.4)',
            borderRadius: '18px',
            border: '1px solid rgba(255, 255, 255, 0.1)'
          }}>
            <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)', fontWeight: 700, marginBottom: '12px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <span>LIVE TELEMETRY BEACON</span>
              <span className="live-dot" />
            </div>

            {sosActive ? (
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#ff2a5f', fontWeight: 800, fontSize: '1.1rem', marginBottom: '8px' }}>
                  <Radio size={20} className="animate-sos-pulse" />
                  <span>GPS BROADCAST ACTIVE</span>
                </div>
                <div style={{ fontSize: '0.85rem', color: '#00f2fe', marginBottom: '14px' }}>
                  📍 Lat: 28.5355° N, Lng: 77.1557° E (Outer Ring Rd)
                </div>

                {dispatchedUnits ? (
                  <div style={{ background: 'rgba(0, 230, 118, 0.15)', border: '1px solid #00e676', padding: '12px', borderRadius: '12px' }}>
                    <div style={{ color: '#00e676', fontWeight: 700, fontSize: '0.88rem', display: 'flex', alignItems: 'center', gap: '6px' }}>
                      <CheckCircle2 size={16} /> Ambulance #DEL-402 En Route
                    </div>
                    <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)', marginTop: '4px' }}>
                      Estimated Arrival: <strong>3 mins 40 secs</strong>
                    </div>
                  </div>
                ) : (
                  <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                    Pinging nearest 3 emergency units...
                  </div>
                )}
              </div>
            ) : (
              <div>
                <div style={{ fontSize: '0.9rem', fontWeight: 700, color: 'white', marginBottom: '6px' }}>
                  System Standby Mode
                </div>
                <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                  Press Activate SOS above in case of accident, medical crisis, or highway threat.
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Emergency Hotlines Grid */}
      <h3 style={{ fontSize: '1.4rem', fontWeight: 800, marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '10px' }}>
        <PhoneCall color="#00f2fe" size={22} />
        <span>One-Tap Direct <span className="gradient-text">Emergency Hotlines</span></span>
      </h3>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '16px', marginBottom: '36px' }}>
        {emergencyHotlines.map((h, i) => (
          <a
            key={i}
            href={`tel:${h.number}`}
            className="glass-panel glass-panel-hover"
            style={{
              padding: '20px',
              borderRadius: '16px',
              textDecoration: 'none',
              color: 'white',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              border: `1px solid ${h.color}44`
            }}
          >
            <div>
              <div style={{
                width: '40px', height: '40px', borderRadius: '10px',
                background: `${h.color}22`, border: `1px solid ${h.color}55`,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                color: h.color, marginBottom: '12px'
              }}>
                <PhoneCall size={20} />
              </div>
              <div style={{ fontSize: '1.1rem', fontWeight: 800, marginBottom: '4px' }}>{h.name}</div>
              <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>{h.type}</div>
            </div>

            <div style={{
              marginTop: '16px',
              padding: '8px 12px',
              background: 'rgba(255,255,255,0.06)',
              borderRadius: '8px',
              textAlign: 'center',
              fontWeight: 800,
              fontSize: '1.1rem',
              color: h.color,
              letterSpacing: '0.05em'
            }}>
              📞 {h.number}
            </div>
          </a>
        ))}
      </div>

      {/* First Aid Emergency Guide */}
      <div className="glass-panel" style={{ padding: '28px', borderRadius: '20px', border: '1px solid rgba(0, 242, 254, 0.2)' }}>
        <h3 style={{ fontSize: '1.3rem', fontWeight: 800, marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '10px' }}>
          <HeartPulse color="#ff2a5f" size={24} />
          <span>Accident Scene <span className="gradient-text">First-Aid Guide</span></span>
        </h3>

        {/* Tabs */}
        <div style={{ display: 'flex', gap: '8px', marginBottom: '20px', overflowX: 'auto' }}>
          {[
            { id: 'cpr', label: '🫀 CPR Protocol' },
            { id: 'bleeding', label: '🩸 Severe Bleeding Control' },
            { id: 'helmet', label: '⛑️ Helmet Removal Rule' },
            { id: 'fire', label: '🔥 Vehicle Fire Escape' }
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveGuideTab(tab.id)}
              style={{
                background: activeGuideTab === tab.id ? 'rgba(0, 242, 254, 0.2)' : 'rgba(255,255,255,0.04)',
                color: activeGuideTab === tab.id ? '#00f2fe' : 'var(--text-muted)',
                border: activeGuideTab === tab.id ? '1px solid #00f2fe' : '1px solid var(--border-color)',
                padding: '8px 16px',
                borderRadius: '12px',
                fontWeight: 700,
                fontSize: '0.85rem',
                cursor: 'pointer'
              }}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Guide Content */}
        <div style={{ background: 'rgba(0,0,0,0.3)', padding: '20px', borderRadius: '14px', border: '1px solid var(--border-color)' }}>
          {activeGuideTab === 'cpr' && (
            <div>
              <h4 style={{ fontSize: '1.1rem', fontWeight: 800, color: '#00f2fe', marginBottom: '8px' }}>Hands-Only CPR Steps</h4>
              <ol style={{ paddingLeft: '20px', color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: 1.7 }}>
                <li>Place victim on a firm, flat surface. Check for responsiveness & breathing.</li>
                <li>Place heel of one hand in the center of the chest; place second hand over the first.</li>
                <li>Push hard & fast at 100-120 compressions per minute (to the beat of "Staying Alive").</li>
                <li>Do not stop until emergency paramedics take over.</li>
              </ol>
            </div>
          )}

          {activeGuideTab === 'bleeding' && (
            <div>
              <h4 style={{ fontSize: '1.1rem', fontWeight: 800, color: '#ff2a5f', marginBottom: '8px' }}>Direct Pressure Technique</h4>
              <ol style={{ paddingLeft: '20px', color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: 1.7 }}>
                <li>Apply firm, direct pressure over the wound using a clean cloth or bandage.</li>
                <li>Elevate the injured limb above heart level if no bone fracture is suspected.</li>
                <li>Do not remove soaked bandages; add more layers on top to allow clotting.</li>
              </ol>
            </div>
          )}

          {activeGuideTab === 'helmet' && (
            <div>
              <h4 style={{ fontSize: '1.1rem', fontWeight: 800, color: '#ffb703', marginBottom: '8px' }}>Spine Safety Helmet Rule</h4>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: 1.6 }}>
                ⚠️ <strong>CRITICAL:</strong> Do NOT remove a rider's helmet unless they are not breathing or vomiting! Removing the helmet improperly can cause permanent spinal paralysis. Support the neck in a neutral alignment.
              </p>
            </div>
          )}

          {activeGuideTab === 'fire' && (
            <div>
              <h4 style={{ fontSize: '1.1rem', fontWeight: 800, color: '#ff5e36', marginBottom: '8px' }}>Vehicle Fire Safety</h4>
              <ol style={{ paddingLeft: '20px', color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: 1.7 }}>
                <li>Turn off engine immediately to cut fuel line flow.</li>
                <li>Evacuate all passengers at least 100 feet upwind from the vehicle.</li>
                <li>Do not open the hood fully if smoke is billowing (opening feeds oxygen).</li>
              </ol>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
