import React, { useState } from 'react';
import { Building2, Wrench, CheckCircle2, AlertOctagon, Clock, User, ShieldAlert, BarChart3 } from 'lucide-react';

export default function AuthorityDashboard({ hazards, onResolve }) {
  const [filterStatus, setFilterStatus] = useState('All');

  const filtered = hazards.filter(h => filterStatus === 'All' || h.status === filterStatus);

  return (
    <div style={{ padding: '0 20px', marginBottom: '40px' }}>
      
      {/* Header Banner */}
      <div className="glass-panel" style={{ padding: '28px', borderRadius: '24px', marginBottom: '24px', border: '1px solid rgba(0, 242, 254, 0.3)' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px' }}>
          <div>
            <div className="badge-live" style={{ background: 'rgba(0, 242, 254, 0.15)', color: '#00f2fe', border: '1px solid #00f2fe', marginBottom: '8px' }}>
              <Building2 size={14} /> MUNICIPAL & HIGHWAY AUTHORITY PORTAL
            </div>
            <h2 style={{ fontSize: '2rem', fontWeight: 800 }}>
              PWD & Traffic Police <span className="gradient-text">Dispatch Hub</span>
            </h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.88rem' }}>
              Direct municipal dashboard to inspect commuter reports, dispatch repair crews, and clear hazards.
            </p>
          </div>

          <div style={{ display: 'flex', gap: '12px' }}>
            <div style={{ background: 'rgba(255, 42, 95, 0.1)', border: '1px solid rgba(255, 42, 95, 0.3)', padding: '12px 18px', borderRadius: '14px', textAlign: 'center' }}>
              <div style={{ fontSize: '0.75rem', color: '#ff2a5f', fontWeight: 700 }}>CRITICAL TICKETS</div>
              <div style={{ fontSize: '1.4rem', fontWeight: 800 }}>{hazards.filter(h => h.severity === 'Critical').length}</div>
            </div>
            <div style={{ background: 'rgba(0, 230, 118, 0.1)', border: '1px solid rgba(0, 230, 118, 0.3)', padding: '12px 18px', borderRadius: '14px', textAlign: 'center' }}>
              <div style={{ fontSize: '0.75rem', color: '#00e676', fontWeight: 700 }}>AVG REPAIR SPEED</div>
              <div style={{ fontSize: '1.4rem', fontWeight: 800 }}>14.2 hrs</div>
            </div>
          </div>
        </div>
      </div>

      {/* Ticket List */}
      <div className="glass-panel" style={{ padding: '24px', borderRadius: '20px', border: '1px solid rgba(0, 242, 254, 0.2)' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px', flexWrap: 'wrap', gap: '12px' }}>
          <h3 style={{ fontSize: '1.25rem', fontWeight: 800 }}>Active Public Work Orders ({filtered.length})</h3>
          
          <div style={{ display: 'flex', gap: '8px' }}>
            {['All', 'Open', 'In Progress', 'Resolved'].map(st => (
              <button
                key={st}
                onClick={() => setFilterStatus(st)}
                style={{
                  background: filterStatus === st ? 'rgba(0, 242, 254, 0.2)' : 'rgba(255,255,255,0.04)',
                  color: filterStatus === st ? '#00f2fe' : 'var(--text-muted)',
                  border: filterStatus === st ? '1px solid #00f2fe' : '1px solid var(--border-color)',
                  padding: '6px 14px',
                  borderRadius: '10px',
                  fontSize: '0.8rem',
                  fontWeight: 700,
                  cursor: 'pointer'
                }}
              >
                {st}
              </button>
            ))}
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
          {filtered.map(ticket => (
            <div
              key={ticket.id}
              style={{
                background: 'rgba(255,255,255,0.03)',
                border: '1px solid var(--border-color)',
                borderRadius: '14px',
                padding: '18px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                flexWrap: 'wrap',
                gap: '16px'
              }}
            >
              <div style={{ flex: '1 1 300px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px' }}>
                  <span style={{ fontWeight: 800, fontSize: '0.85rem', color: '#00f2fe' }}>[{ticket.id}]</span>
                  <span className={ticket.severity === 'Critical' ? 'tag-critical' : 'tag-medium'}>{ticket.severity}</span>
                  <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>• Reported {ticket.timestamp}</span>
                </div>
                <h4 style={{ fontSize: '1.05rem', fontWeight: 800, marginBottom: '4px' }}>{ticket.title}</h4>
                <div style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>📍 {ticket.locationName}</div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                <div style={{ textAlign: 'right' }}>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-dim)' }}>Status</div>
                  <div style={{ fontWeight: 700, color: ticket.status === 'Resolved' ? '#00e676' : '#ffb703', fontSize: '0.9rem' }}>
                    {ticket.status}
                  </div>
                </div>

                {ticket.status !== 'Resolved' && (
                  <button
                    onClick={() => onResolve(ticket.id)}
                    className="btn-primary"
                    style={{ padding: '8px 14px', fontSize: '0.8rem', borderRadius: '10px' }}
                  >
                    <Wrench size={14} />
                    <span>Dispatch Crew & Mark Fixed</span>
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
