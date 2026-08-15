export const initialHazards = [
  {
    id: 'HZ-101',
    title: 'Deep Pothole Cluster on Outer Ring Rd',
    category: 'Pothole',
    severity: 'High',
    locationName: 'Outer Ring Road, near Chirag Delhi Flyover',
    coords: { x: 38, y: 42 }, // percentage on SVG map
    timestamp: '15 mins ago',
    upvotes: 24,
    downvotes: 1,
    status: 'Open',
    reportedBy: 'Rahul M. (Level 4 Rakshak)',
    description: 'Multiple deep 8-inch potholes right near the flyover descent. Danger of rim damage & 2-wheeler skidding.',
    verified: true,
    verificationCount: 18,
    image: 'https://images.unsplash.com/photo-1515162816999-a0c47dc192f7?w=600&auto=format&fit=crop&q=60'
  },
  {
    id: 'HZ-102',
    title: 'Severe Waterlogging Under Subway',
    category: 'Waterlogging',
    severity: 'Critical',
    locationName: 'Moti Bagh Subway Crossing',
    coords: { x: 55, y: 68 },
    timestamp: '32 mins ago',
    upvotes: 42,
    downvotes: 0,
    status: 'In Progress',
    reportedBy: 'Priya Sharma',
    description: 'Water accumulation above 2.5 feet due to heavy rain. Small cars stalling. Avoid lane 2 & 3.',
    verified: true,
    verificationCount: 35,
    image: 'https://images.unsplash.com/photo-1541888946425-d0fbb186a5b2?w=600&auto=format&fit=crop&q=60'
  },
  {
    id: 'HZ-103',
    title: 'Major Multi-Vehicle Collision',
    category: 'Accident',
    severity: 'Critical',
    locationName: 'Delhi-Gurugram Expressway (KM 24)',
    coords: { x: 72, y: 30 },
    timestamp: '5 mins ago',
    upvotes: 68,
    downvotes: 2,
    status: 'Open',
    reportedBy: 'Traffic Patrol Cam #14',
    description: 'Truck breakdown collided with SUV. Emergency vehicles en route. Traffic backed up 1.5 km.',
    verified: true,
    verificationCount: 52,
    image: 'https://images.unsplash.com/photo-1563720223185-11003d516935?w=600&auto=format&fit=crop&q=60'
  },
  {
    id: 'HZ-104',
    title: 'Non-Functional Streetlights for 1.2 KM',
    category: 'Lighting',
    severity: 'Medium',
    locationName: 'Vasant Kunj Main Sector B Boulevard',
    coords: { x: 22, y: 75 },
    timestamp: '2 hours ago',
    upvotes: 15,
    downvotes: 0,
    status: 'Open',
    reportedBy: 'Amit Kumar',
    description: 'Complete pitch dark corridor at night. High pedestrian crossing risk.',
    verified: true,
    verificationCount: 12,
    image: 'https://images.unsplash.com/photo-1509114397022-ed747cca3f65?w=600&auto=format&fit=crop&q=60'
  },
  {
    id: 'HZ-105',
    title: 'Oil Spill across 3 Lanes',
    category: 'Oil Spill',
    severity: 'High',
    locationName: 'DND Flyway Entry Toll',
    coords: { x: 80, y: 55 },
    timestamp: '45 mins ago',
    upvotes: 31,
    downvotes: 1,
    status: 'In Progress',
    reportedBy: 'Vikram S.',
    description: 'Slippery diesel spill from commercial tanker. Fire brigade spreading sand.',
    verified: true,
    verificationCount: 27,
    image: 'https://images.unsplash.com/photo-1617886801167-9e3949d6b565?w=600&auto=format&fit=crop&q=60'
  },
  {
    id: 'HZ-106',
    title: 'Broken Traffic Signal Flashing Yellow',
    category: 'Signal Defect',
    severity: 'Low',
    locationName: 'IJI Airport Terminal 3 Junction',
    coords: { x: 18, y: 25 },
    timestamp: '4 hours ago',
    upvotes: 9,
    downvotes: 0,
    status: 'Resolved',
    reportedBy: 'System Auto-Sensor',
    description: 'Signal controller rebooting. Traffic cops manually managing flow.',
    verified: true,
    verificationCount: 9,
    image: 'https://images.unsplash.com/photo-1508873696983-2df515122519?w=600&auto=format&fit=crop&q=60'
  }
];

export const emergencyHotlines = [
  { name: 'National Emergency SOS', number: '112', type: 'Police & General', icon: 'ShieldAlert', color: '#ff2a5f' },
  { name: 'Medical Ambulance', number: '108', type: 'Instant Dispatch', icon: 'Ambulance', color: '#ff5e36' },
  { name: 'Highway Patrol Hotline', number: '1033', type: 'NHAI Emergency', icon: 'Car', color: '#00f2fe' },
  { name: 'Fire & Rescue Service', number: '101', type: 'Fire Hazard', icon: 'Flame', color: '#ff9e00' },
  { name: 'Roadside Towing Help', number: '1800-102-444', type: '24/7 Mechanical', icon: 'Wrench', color: '#00e676' }
];

export const mockLeaderboard = [
  { id: 1, name: 'Vikramaditya Roy', points: 4250, reports: 68, verifiedPct: '98%', badge: 'Master Rakshak', avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80' },
  { id: 2, name: 'Ananya Deshmukh', points: 3890, reports: 54, verifiedPct: '96%', badge: 'Pothole Hunter', avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150&auto=format&fit=crop&q=80' },
  { id: 3, name: 'Karan Malhotra', points: 3410, reports: 49, verifiedPct: '94%', badge: 'Night Sentinel', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80' },
  { id: 4, name: 'Siddharth Verma', points: 2950, reports: 39, verifiedPct: '92%', badge: 'First Responder', avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80' },
  { id: 5, name: 'Meera Nair', points: 2600, reports: 31, verifiedPct: '95%', badge: 'Safety Champion', avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&auto=format&fit=crop&q=80' }
];

export const sampleRoutes = [
  {
    id: 'R-1',
    name: 'Connaught Place ➔ Cyber Hub, Gurugram',
    distance: '28.4 km',
    fastestTime: '38 mins',
    safestTime: '42 mins',
    fastestScore: 68,
    safestScore: 96,
    hazardsAvoided: 5,
    lightingRating: '98% Well Lit',
    features: ['Avoids Moti Bagh flooded subway', 'Zero pothole stretches', 'Continuous CCTV coverage']
  },
  {
    id: 'R-2',
    name: 'Noida Sector 62 ➔ Airport Terminal 3',
    distance: '34.1 km',
    fastestTime: '45 mins',
    safestTime: '49 mins',
    fastestScore: 72,
    safestScore: 94,
    hazardsAvoided: 3,
    lightingRating: '95% Well Lit',
    features: ['Bypasses DND oil spill detour', 'Dedicated 24/7 SOS phone booths', 'Smooth asphalt corridor']
  }
];
