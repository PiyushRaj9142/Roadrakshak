import React from 'react';
import { CloudRain, Wind, Eye, Thermometer, AlertTriangle } from 'lucide-react';

export default function WeatherAlerts() {
  return (
    <div style={{ padding: '0 20px', marginBottom: '24px' }}>
      <div className="glass-panel" style={{
        padding: '16px 24px',
        borderRadius: '16px',
        background: 'linear-gradient(90deg, rgba(0, 242, 254, 0.08) 0%, rgba(157, 78, 221, 0.08) 100%)',
        border: '1px solid rgba(0, 242, 254, 0.2)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: '16px'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <div style={{ background: 'rgba(0, 242, 254, 0.15)', padding: '10px', borderRadius: '12px', color: '#00f2fe' }}>
            <CloudRain size={22} />
          </div>
          <div>
            <div style={{ fontWeight: 800, fontSize: '0.92rem', display: 'flex', alignItems: 'center', gap: '6px' }}>
              <span>Delhi-NCR Weather Advisory: Moderate Heavy Rain</span>
              <span className="tag-medium" style={{ fontSize: '0.68rem', padding: '1px 6px' }}>Aquaplaning Risk</span>
            </div>
            <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>
              Visibility: 3.2 km • Road Slickness Index: 68% (Drive below 50 km/h on flyovers)
            </div>
          </div>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '18px', fontSize: '0.8rem', color: 'var(--text-muted)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
            <Eye size={14} color="#00f2fe" />
            <span>Vis: <strong>Good</strong></span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
            <Thermometer size={14} color="#ffb703" />
            <span>Temp: <strong>26°C</strong></span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
            <Wind size={14} color="#00e676" />
            <span>Wind: <strong>14 km/h</strong></span>
          </div>
        </div>
      </div>
    </div>
  );
}
