import React, { useState } from 'react';
import { Shield, AlertTriangle, Navigation, PhoneCall, Award, Building2, Plus, Bell, Radio } from 'lucide-react';

export default function Navbar({ activeTab, setActiveTab, onOpenReportModal, openNotification, notificationCount }) {
  const [showNotifications, setShowNotifications] = useState(false);

  const navItems = [
    { id: 'live-map', label: 'Live Hazard Map', icon: AlertTriangle },
    { id: 'safe-routes', label: 'Safe Navigation', icon: Navigation },
    { id: 'emergency-sos', label: 'Emergency SOS', icon: PhoneCall, isSos: true },
    { id: 'community', label: 'Rakshak Rewards', icon: Award },
    { id: 'authority', label: 'Authority Hub', icon: Building2 },
  ];

  return (
    <header className="glass-panel" style={{
      position: 'sticky',
      top: '12px',
      zIndex: 900,
      margin: '12px 20px 20px 20px',
      padding: '12px 24px',
      borderRadius: '20px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: '20px',
      border: '1px solid rgba(0, 242, 254, 0.2)'
    }}>
      {/* Brand Logo */}
      <div 
        onClick={() => setActiveTab('live-map')} 
        style={{ display: 'flex', alignItems: 'center', gap: '12px', cursor: 'pointer' }}
      >
        <div style={{
          position: 'relative',
          width: '42px',
          height: '42px',
          borderRadius: '12px',
          background: 'linear-gradient(135deg, #00f2fe 0%, #4facfe 100%)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 0 20px rgba(0, 242, 254, 0.4)'
        }}>
          <Shield size={26} color="#090d16" strokeWidth={2.5} />
        </div>
        <div>
          <div style={{ fontSize: '1.4rem', fontWeight: 800, letterSpacing: '-0.03em', display: 'flex', alignItems: 'center', gap: '6px' }}>
            <span>ROAD<span className="gradient-text">RAKSHAK</span></span>
            <span style={{
              fontSize: '0.65rem',
              background: 'rgba(0, 242, 254, 0.15)',
              color: '#00f2fe',
              border: '1px solid rgba(0, 242, 254, 0.4)',
              padding: '2px 6px',
              borderRadius: '6px',
              fontWeight: 700
            }}>AI v2.4</span>
          </div>
          <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '6px' }}>
            <span className="live-dot" style={{ width: '6px', height: '6px' }}></span>
            <span>Connected: Delhi-NCR Grid</span>
          </div>
        </div>
      </div>

      {/* Nav Navigation Tabs */}
      <nav style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeTab === item.id;
          
          if (item.isSos) {
            return (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className="btn-sos animate-sos-pulse"
                style={{
                  fontSize: '0.85rem',
                  padding: '8px 16px',
                  borderRadius: '12px'
                }}
              >
                <Icon size={18} />
                <span>{item.label}</span>
              </button>
            );
          }

          return (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              style={{
                background: isActive ? 'rgba(0, 242, 254, 0.12)' : 'transparent',
                color: isActive ? '#00f2fe' : 'var(--text-muted)',
                border: isActive ? '1px solid rgba(0, 242, 254, 0.4)' : '1px solid transparent',
                borderRadius: '12px',
                padding: '8px 14px',
                fontSize: '0.85rem',
                fontWeight: isActive ? 700 : 600,
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                transition: 'all 0.2s ease'
              }}
            >
              <Icon size={16} color={isActive ? '#00f2fe' : 'currentColor'} />
              <span>{item.label}</span>
            </button>
          );
        })}
      </nav>

      {/* Right Actions */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
        {/* Report Button */}
        <button 
          onClick={onOpenReportModal}
          className="btn-primary"
          style={{ fontSize: '0.85rem', padding: '9px 16px', borderRadius: '12px' }}
        >
          <Plus size={18} strokeWidth={2.5} />
          <span>Report Hazard</span>
        </button>

        {/* Notifications Dropdown Toggle */}
        <div style={{ position: 'relative' }}>
          <button
            onClick={() => setShowNotifications(!showNotifications)}
            style={{
              background: 'rgba(255, 255, 255, 0.05)',
              border: '1px solid var(--border-color)',
              color: 'var(--text-main)',
              width: '40px',
              height: '40px',
              borderRadius: '12px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              position: 'relative'
            }}
          >
            <Bell size={18} />
            {notificationCount > 0 && (
              <span style={{
                position: 'absolute',
                top: '-4px',
                right: '-4px',
                background: 'var(--accent-red)',
                color: 'white',
                fontSize: '0.65rem',
                fontWeight: 800,
                width: '18px',
                height: '18px',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 0 8px rgba(255, 42, 95, 0.8)'
              }}>
                {notificationCount}
              </span>
            )}
          </button>

          {showNotifications && (
            <div className="glass-panel" style={{
              position: 'absolute',
              top: '50px',
              right: 0,
              width: '320px',
              padding: '16px',
              zIndex: 1000,
              border: '1px solid rgba(0, 242, 254, 0.3)',
              boxShadow: '0 15px 35px rgba(0,0,0,0.6)'
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '12px', borderBottom: '1px solid var(--border-color)', paddingBottom: '8px' }}>
                <span style={{ fontWeight: 700, fontSize: '0.9rem' }}>Live Alert Feed</span>
                <span style={{ fontSize: '0.75rem', color: '#00f2fe', cursor: 'pointer' }} onClick={() => setShowNotifications(false)}>Close</span>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <div style={{ fontSize: '0.8rem', background: 'rgba(255, 42, 95, 0.1)', borderLeft: '3px solid #ff2a5f', padding: '8px 10px', borderRadius: '4px' }}>
                  <div style={{ fontWeight: 700, color: '#ff2a5f' }}>⚠️ Accident Warning</div>
                  <div style={{ color: 'var(--text-muted)', fontSize: '0.75rem' }}>Delhi-Gurugram Expy KM 24 (5 mins ago)</div>
                </div>
                <div style={{ fontSize: '0.8rem', background: 'rgba(0, 230, 118, 0.1)', borderLeft: '3px solid #00e676', padding: '8px 10px', borderRadius: '4px' }}>
                  <div style={{ fontWeight: 700, color: '#00e676' }}>✅ Pothole Repaired</div>
                  <div style={{ color: 'var(--text-muted)', fontSize: '0.75rem' }}>IJI Airport T3 signal restored (+50 PTS)</div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
