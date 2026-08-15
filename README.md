# 🛡️ RoadRakshak | AI-Powered Road Safety & Hazard Network

**RoadRakshak** is a community-driven, AI-integrated road intelligence and safety web application designed to eliminate highway hazards, speed up emergency medical dispatch, and reward commuters for making roads safer.

---

## ✨ Features

- **🚨 Interactive Highway Hazard Grid**: Real-time vector radar map for tracking potholes, multi-vehicle collisions, waterlogged subways, and broken lighting.
- **🆘 Instant Emergency SOS**: One-tap dispatch trigger connecting to Highway Patrol (112), Medical Ambulance (108), and Towing Assistance with live GPS telemetry.
- **🗺️ AI Safe Navigation Planner**: Compares standard fastest routes with **Safest Routes** (prioritizing high safety scores, zero potholes, and lit streets).
- **🏆 Rakshak Rewards & Leaderboard**: Gamified point system for verified commuter hazard reports with redeemable fuel vouchers and toll discounts.
- **🏛️ Municipal & Highway Authority Hub**: Work order dispatch system for PWD engineers to assign repair crews and update ticket statuses.
- **🌤️ Weather & Slickness Index Ticker**: Live weather advisories for aquaplaning risk, fog visibility, and slick road warnings.

---

## 🛠️ Tech Stack

- **Frontend Core**: React 19, JavaScript (ES Module)
- **Bundler**: Vite 8
- **Styling**: Modern CSS3 (Glassmorphism design system, smooth dark mode gradients)
- **Icons**: Lucide React

---

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm

### Local Installation & Development

```bash
# Clone the repository
git clone https://github.com/rajpiyush9668-ops/Roadrakshak.git

# Navigate into project directory
cd Roadrakshak

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

---

## 📦 Building & GitHub Pages Deployment

### Manual Deployment via CLI

```bash
# Build & deploy to gh-pages branch
npm run deploy
```

### Automatic Deployment via GitHub Actions

This repository includes a preconfigured GitHub Actions workflow in `.github/workflows/deploy.yml`. 
Whenever you push to the `main` branch:

```bash
git add .
git commit -m "Update RoadRakshak app"
git push origin main
```

GitHub Actions will automatically build and deploy the app to **GitHub Pages**!

---

## 📜 License

MIT License. Designed with ❤️ for Highway Safety.
