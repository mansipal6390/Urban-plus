# URBAN PULSE
## AI-Powered Digital Nervous System for Cities

> **Sense. Verify. Predict. Respond. Reward.**

Urban Pulse is a unified AI-powered platform that connects **sensors, citizens, and authorities** to detect civic problems in real time, verify them using AI, predict future risks, coordinate field response, and maintain a transparent tamper-evident record of civic actions through blockchain.

---

## 🚀 Quick Start (Instant Launch)

You can run Urban Pulse with Python, Node.js, or simply by opening `index.html` in your browser.

### Option 1: Python (Recommended)
```bash
cd C:\Users\mansi\.gemini\antigravity\scratch\urban-pulse
python server.py
```
Open **`http://localhost:8080`** in any web browser.

### Option 2: Node.js / NPM
```bash
npm start
```

### Option 3: Direct Browser
Simply double-click [`index.html`](file:///C:/Users/mansi/.gemini/antigravity/scratch/urban-pulse/index.html) or open it directly in Chrome/Edge/Firefox.

---

## 🏛️ System Features & User Roles

### 1. Citizen / User Portal
- **Location Status Bar**: Real-time GPS coordinate detection and ward civic risk advisory.
- **Report an Issue**:
  - Category selector: Pothole, Broken streetlight, Garbage overflow, Waterlogging, Pollution, Traffic, Noise, Other.
  - Interactive map pin location capture.
  - Photo/Video evidence upload with sample presets.
  - **Live AI Scanner Overlay**: Simulates neural computer vision classification with confidence score (e.g. 96.4%), duplicate detection algorithm within 250m radius, and automated severity grading.
- **Civic Status Cards**: Active issues nearby, high-priority hazards, resolved count, and personal submitted reports.
- **Live Alerts Feed**: Real-time warnings from IoT sensors (drainage levels, AQI, garbage overflow, traffic bottlenecks).
- **Nearby Issues Feed**: Filter by category, view status badges, upvote duplicate reports, and launch interactive tracker.
- **Rewards & Recognition**:
  - Points system (+50 XP per valid report, +10 XP per verification, +100 XP upon resolution).
  - Four Contributor Tiers: *🌱 New Contributor*, *🏅 Active Citizen*, *🤝 Community Helper*, *👑 Urban Guardian*.
  - Ward Leaderboard with top civic champions.
- **Mini Map Preview**: Quick interactive Leaflet map widget.

### 2. Authority / Municipal Officer Command Center
- **Key Performance Indicators**: Total active reports, pending AI reviews, critical SLA tickets, in-progress jobs, and resolved counts.
- **Predictive Risk Detection Engine**: Integrates historical waterlogging records with real-time drainage IoT telemetry to predict flash flood zones 90 minutes in advance, providing automated one-click preventive unit dispatch.
- **Incident Management Datatable**:
  - Filter by category, status, severity, and text search.
  - One-click worker assignment workflow across municipal departments (Roads, Sanitation, Electrical, Drainage, Traffic).
  - Inspection modal with citizen photo evidence and AI confidence verdict.
- **Municipal Analytics**:
  - Interactive Chart.js donut chart of issues by category.
  - Department turnaround time performance bar chart.
  - Weekly citizen participation and verification rate line chart.

### 3. Field Worker Dashboard
- **Duty Queue**: Assigned tasks filtered specifically for the logged-in field worker (Rajesh Kumar).
- **Task Detail Card**: Citizen photo evidence, GPS location with map link, priority badge, and target SLA deadline.
- **Resolution Flow**:
  - Inspect citizen's original "before" evidence.
  - Attach completed "after" repair snapshot.
  - Enter resolution notes (materials used, compaction, safety clearance).
  - Commit resolution directly to the blockchain ledger.

### 4. Admin Control Center
- **System Governance**: Platform health metrics, latency, IoT sensor uptime, and registered user counts.
- **Municipal Departments**: Structure and lead management for civic departments.
- **Active IoT Sensor Nodes**: Live telemetry viewer for AQI, drainage ultrasonic, waste bin, and acoustic decibel sensors.
- **Audit & Governance**: Direct link to inspect the immutable blockchain action chain.

---

## ⛓️ Blockchain Transparency Layer

Urban Pulse records every critical civic event in a chained, tamper-evident cryptographic block:
- `REPORT_FILED`: Citizen report creation with GPS coordinates.
- `AI_VERIFIED`: Automated neural classification and confidence score.
- `WORKER_ASSIGNED`: Department and field officer dispatch with timestamp.
- `WORK_STARTED`: Field engineer on-site check-in.
- `RESOLVED_COMPLETED`: Before/After evidence and resolution sign-off.

Each block contains:
- `Block #`
- `Timestamp`
- `Action Type`
- `Issue ID`
- `Actor (Citizen / AI Model / Authority / Worker)`
- `SHA-256 Hash`
- `Previous Block Hash`

Click **"Blockchain"** in the top navigation bar to inspect the live chain of blocks.

---

## 🗺️ Live Spatial Intelligence Map

Click **"Live Map"** to open the full-screen interactive Leaflet map:
- **Citizen Reports**: Color-coded markers (Red = Critical, Amber = High, Blue = Medium, Green = Resolved).
- **IoT Sensors**: Cyan markers showing real-time telemetry readouts upon click.
- **Predicted Risk Polygons**: Semi-transparent red warning circles indicating predicted flood zones and hotspots.
- **Layer Toggle Controls**: Instantly filter map layers.

---

## 🔄 7-Step Issue Lifecycle Tracking

Every ticket follows the complete transparent flow:
```
1. Reported ➔ 2. AI Verification ➔ 3. Verified ➔ 4. Assigned ➔ 5. In Progress ➔ 6. Resolved ➔ 7. Closed
```
Click **"Track"** on any card or datatable row to inspect the interactive 7-step stepper and cryptographic transaction proof.

---

## 📁 Project Structure

```
urban-pulse/
├── index.html        # Complete Single Page Application UI with all 4 roles & modals
├── app.js            # Core application state, AI engine, IoT sensors, blockchain & Leaflet maps
├── style.css         # Modern dark design system, glassmorphism, animations & map styling
├── server.py         # Lightweight Python HTTP server
├── package.json      # NPM scripts and configuration
└── README.md         # Documentation and system guide
```

---

## 🌐 The Civic Loop

```
SENSE
Sensors + Citizens
       ↓
VERIFY
AI + Human Review
       ↓
PREDICT
Historical + Live Data
       ↓
RESPOND
Authority + Field Worker
       ↓
REWARD
Citizen Recognition
       ↓
TRANSPARENT RECORD
Action History (Blockchain)
```
