import React from 'react';
import { Award, Trophy, Star, Shield, Gift, Sparkles, UserCheck, Flame } from 'lucide-react';
import { mockLeaderboard } from '../data/mockData';

export default function CommunityLeaderboard({ userPoints }) {
  const coupons = [
    { title: '₹150 Off Fuel Voucher', points: 500, provider: 'IndianOil / HPCL', code: 'RAKSHAK150' },
    { title: 'Free 25-Point Vehicle Safety Check', points: 800, provider: 'GoMechanic', code: 'SAFETYCHECK' },
    { title: '100% Toll Cashback Pass', points: 1200, provider: 'FASTag Partner', code: 'TOLLFREE' }
  ];

  return (
    <div style={{ padding: '0 20px', marginBottom: '40px' }}>
      
      {/* Top Banner with User Points */}
      <div className="glass-panel" style={{ padding: '30px', borderRadius: '24px', marginBottom: '24px', background: 'linear-gradient(135deg, rgba(157, 78, 221, 0.2) 0%, rgba(18, 26, 43, 0.95) 100%)', border: '1px solid rgba(157, 78, 221, 0.4)' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '20px' }}>
          <div>
            <div className="badge-live" style={{ background: 'rgba(157, 78, 221, 0.2)', color: '#9d4edd', border: '1px solid #9d4edd', marginBottom: '10px' }}>
              <Trophy size={14} /> COMMUNITY GUARDIAN NETWORK
            </div>
            <h2 style={{ fontSize: '2.2rem', fontWeight: 800 }}>
              Rakshak <span className="gradient-text">Rewards & Leaderboard</span>
            </h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>
              Earn points for every verified road hazard reported or confirmed. Save lives while unlocking highway perks.
            </p>
          </div>

          {/* User Score Card */}
          <div className="glass-panel" style={{ padding: '20px 30px', background: 'rgba(0,0,0,0.5)', borderRadius: '18px', textAlign: 'center', border: '1px solid rgba(0, 242, 254, 0.3)' }}>
            <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', fontWeight: 700 }}>YOUR RAKSHAK BALANCE</div>
            <div style={{ fontSize: '2.5rem', fontWeight: 800, color: '#00f2fe' }}>{userPoints} <span style={{ fontSize: '1rem', color: 'var(--text-muted)' }}>PTS</span></div>
            <div style={{ fontSize: '0.75rem', color: '#00e676', fontWeight: 700 }}>Rank #142 in Delhi-NCR</div>
          </div>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 0.8fr', gap: '24px' }}>
        
        {/* Leaderboard Table */}
        <div className="glass-panel" style={{ padding: '24px', borderRadius: '20px', border: '1px solid rgba(0, 242, 254, 0.2)' }}>
          <h3 style={{ fontSize: '1.3rem', fontWeight: 800, marginBottom: '18px', display: 'flex', alignItems: 'center', gap: '10px' }}>
            <Trophy color="#ffb703" size={22} />
            <span>Top Rakshak Champions</span>
          </h3>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {mockLeaderboard.map((user, idx) => (
              <div
                key={user.id}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  background: 'rgba(255,255,255,0.03)',
                  padding: '12px 16px',
                  borderRadius: '14px',
                  border: idx === 0 ? '1px solid rgba(255, 183, 3, 0.4)' : '1px solid var(--border-color)'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                  <div style={{
                    width: '32px', height: '32px', borderRadius: '50%',
                    background: idx === 0 ? '#ffb703' : idx === 1 ? '#e2e8f0' : idx === 2 ? '#cd7f32' : 'rgba(255,255,255,0.1)',
                    color: idx < 3 ? '#051329' : 'white',
                    fontWeight: 800, fontSize: '0.9rem',
                    display: 'flex', alignItems: 'center', justifyContent: 'center'
                  }}>
                    #{idx + 1}
                  </div>

                  <img src={user.avatar} alt={user.name} style={{ width: '40px', height: '40px', borderRadius: '50%', objectFit: 'cover' }} />

                  <div>
                    <div style={{ fontWeight: 800, fontSize: '0.95rem' }}>{user.name}</div>
                    <div style={{ fontSize: '0.75rem', color: '#00f2fe', fontWeight: 600 }}>{user.badge}</div>
                  </div>
                </div>

                <div style={{ textAlign: 'right' }}>
                  <div style={{ fontWeight: 800, color: '#ffb703', fontSize: '1.05rem' }}>{user.points} PTS</div>
                  <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>{user.reports} Reports ({user.verifiedPct} Acc)</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Redeem Perks Section */}
        <div className="glass-panel" style={{ padding: '24px', borderRadius: '20px', border: '1px solid rgba(0, 242, 254, 0.2)' }}>
          <h3 style={{ fontSize: '1.3rem', fontWeight: 800, marginBottom: '18px', display: 'flex', alignItems: 'center', gap: '10px' }}>
            <Gift color="#00f2fe" size={22} />
            <span>Redeem Rewards</span>
          </h3>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
            {coupons.map((c, i) => {
              const canAfford = userPoints >= c.points;
              return (
                <div key={i} style={{ background: 'rgba(255,255,255,0.04)', padding: '16px', borderRadius: '14px', border: '1px solid var(--border-color)' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '8px' }}>
                    <div>
                      <div style={{ fontWeight: 800, fontSize: '0.95rem' }}>{c.title}</div>
                      <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>{c.provider}</div>
                    </div>
                    <div style={{ fontWeight: 800, color: '#00f2fe', fontSize: '0.9rem' }}>{c.points} PTS</div>
                  </div>

                  <button
                    disabled={!canAfford}
                    onClick={() => alert(`Reward Unlocked! Code: ${c.code}`)}
                    style={{
                      width: '100%',
                      background: canAfford ? 'linear-gradient(135deg, #00f2fe 0%, #4facfe 100%)' : 'rgba(255,255,255,0.08)',
                      color: canAfford ? '#051329' : 'var(--text-muted)',
                      border: 'none',
                      padding: '8px',
                      borderRadius: '8px',
                      fontWeight: 700,
                      fontSize: '0.8rem',
                      cursor: canAfford ? 'pointer' : 'not-allowed',
                      marginTop: '8px'
                    }}
                  >
                    {canAfford ? 'Claim Voucher Code' : `Need ${c.points - userPoints} More Points`}
                  </button>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </div>
  );
}
