import React, { useState } from 'react';
import Navbar from './components/Navbar';
import HeroBanner from './components/HeroBanner';
import WeatherAlerts from './components/WeatherAlerts';
import LiveMap from './components/LiveMap';
import EmergencySOS from './components/EmergencySOS';
import SafeRoutes from './components/SafeRoutes';
import CommunityLeaderboard from './components/CommunityLeaderboard';
import AuthorityDashboard from './components/AuthorityDashboard';
import ReportModal from './components/ReportModal';
import Footer from './components/Footer';
import { initialHazards } from './data/mockData';

export default function App() {
  const [activeTab, setActiveTab] = useState('live-map');
  const [hazards, setHazards] = useState(initialHazards);
  const [userPoints, setUserPoints] = useState(850);
  const [isReportModalOpen, setIsReportModalOpen] = useState(false);
  const [notificationCount, setNotificationCount] = useState(2);

  // Upvote hazard
  const handleUpvote = (id) => {
    setHazards(prev => prev.map(h => {
      if (h.id === id) {
        return { ...h, upvotes: h.upvotes + 1, verificationCount: h.verificationCount + 1 };
      }
      return h;
    }));
    setUserPoints(pts => pts + 10);
  };

  // Downvote hazard
  const handleDownvote = (id) => {
    setHazards(prev => prev.map(h => {
      if (h.id === id) {
        return { ...h, downvotes: h.downvotes + 1 };
      }
      return h;
    }));
  };

  // Resolve hazard
  const handleResolve = (id) => {
    setHazards(prev => prev.map(h => {
      if (h.id === id) {
        return { ...h, status: 'Resolved' };
      }
      return h;
    }));
    setUserPoints(pts => pts + 30);
  };

  // Submit new hazard report
  const handleSubmitReport = (newHazard) => {
    setHazards(prev => [newHazard, ...prev]);
    setUserPoints(pts => pts + 50);
    setNotificationCount(count => count + 1);
  };

  const resolvedCount = hazards.filter(h => h.status === 'Resolved').length;
  const activeHazardsCount = hazards.filter(h => h.status !== 'Resolved').length;

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      {/* Top Navbar */}
      <Navbar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        onOpenReportModal={() => setIsReportModalOpen(true)}
        notificationCount={notificationCount}
      />

      {/* Main Content Area */}
      <main style={{ flex: 1 }}>
        {/* Hero Section */}
        <HeroBanner
          onOpenReportModal={() => setIsReportModalOpen(true)}
          onOpenSos={() => setActiveTab('emergency-sos')}
          onExploreMap={() => setActiveTab('live-map')}
          totalHazards={activeHazardsCount}
          resolvedCount={resolvedCount}
        />

        {/* Live Weather Ticker */}
        <WeatherAlerts />

        {/* View Switcher based on Tab */}
        {activeTab === 'live-map' && (
          <LiveMap
            hazards={hazards}
            onUpvote={handleUpvote}
            onDownvote={handleDownvote}
            onResolve={handleResolve}
            onOpenReportModal={() => setIsReportModalOpen(true)}
          />
        )}

        {activeTab === 'emergency-sos' && (
          <EmergencySOS />
        )}

        {activeTab === 'safe-routes' && (
          <SafeRoutes />
        )}

        {activeTab === 'community' && (
          <CommunityLeaderboard userPoints={userPoints} />
        )}

        {activeTab === 'authority' && (
          <AuthorityDashboard
            hazards={hazards}
            onResolve={handleResolve}
          />
        )}
      </main>

      {/* Report Modal */}
      <ReportModal
        isOpen={isReportModalOpen}
        onClose={() => setIsReportModalOpen(false)}
        onSubmitReport={handleSubmitReport}
      />

      {/* Footer */}
      <Footer />
    </div>
  );
}
