import React from 'react';
import { Shield, Heart, Radio, ExternalLink } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="glass-panel" style={{
      margin: '40px 20px 20px 20px',
      padding: '30px',
      borderRadius: '20px',
      border: '1px solid rgba(255, 255, 255, 0.1)',
      textAlign: 'center',
      fontSize: '0.85rem',
      color: 'var(--text-muted)'
    }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '20px', marginBottom: '20px', borderBottom: '1px solid var(--border-color)', paddingBottom: '20px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <Shield size={22} color="#00f2fe" />
          <span style={{ fontWeight: 800, color: 'white', fontSize: '1.1rem' }}>RoadRakshak Network</span>
        </div>

        <div style={{ display: 'flex', gap: '20px', fontSize: '0.82rem' }}>
          <a href="#map" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>Live Grid</a>
          <a href="#sos" style={{ color: '#ff2a5f', fontWeight: 700, textDecoration: 'none' }}>Emergency SOS</a>
          <a href="#safety" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>Safe Routes</a>
          <a href="#nhai" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>NHAI Integration</a>
        </div>
      </div>

      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '10px', fontSize: '0.78rem' }}>
        <div>
          © 2026 RoadRakshak AI. Built for Smart Highways & Commuter Safety.
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
          <span className="live-dot" />
          <span>Server Status: Operational (100% Uptime)</span>
        </div>
      </div>
    </footer>
  );
}
