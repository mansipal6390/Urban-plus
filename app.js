
const INITIAL_STATE = {
  currentRole: 'citizen',
  user: {
    name: 'Aarav Sharma',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80',
    points: 840,
    level: 'Active Citizen',
    reportsCount: 7,
    verifiedCount: 6,
    resolvedCount: 5
  },
  issues: [
    {
      id: 'UP-2026-00125',
      category: 'Pothole',
      title: 'Deep asphalt crater near Metro Pillar 42',
      description: 'Severe pothole approximately 15cm deep causing two-wheeler skids on 100ft road.',
      location: '100 Ft Rd, Indiranagar',
      coords: [12.9716, 77.6412],
      severity: 'High',
      status: 'In Progress', 
      date: 'Today, 09:30 IST',
      reportedBy: 'Aarav Sharma',
      evidenceImg: 'https://images.unsplash.com/photo-1515162816999-a0c47dc192f7?w=600&auto=format&fit=crop&q=80',
      resolvedImg: null,
      aiConfidence: 96.4,
      aiVerdict: 'AI Verified',
      assignedDept: 'Roads & Infrastructure',
      assignedWorker: 'Rajesh Kumar',
      deadline: 'Today, 20:00 IST',
      upvotes: 18,
      isUserReport: true,
      blockHash: '0x7f83b1657ff1fc53b92dc18148a1d65dfc2d4b1fa3d677284addd200126d9069'
    },
    {
      id: 'UP-2026-00126',
      category: 'Garbage overflow',
      title: 'Overflowing Municipal Bin & Waste Dumping',
      description: 'Secondary waste bin spilling onto pedestrian footpath near market gate 2.',
      location: 'BDA Complex, Sector 4',
      coords: [12.9780, 77.6380],
      severity: 'High',
      status: 'Assigned',
      date: 'Today, 11:15 IST',
      reportedBy: 'Sneha Patil',
      evidenceImg: 'https://images.unsplash.com/photo-1618477461853-cf6ed80faba5?w=600&auto=format&fit=crop&q=80',
      resolvedImg: null,
      aiConfidence: 94.8,
      aiVerdict: 'AI Verified',
      assignedDept: 'Solid Waste & Sanitation',
      assignedWorker: 'Vikram Singh',
      deadline: 'Today, 23:00 IST',
      upvotes: 12,
      isUserReport: false,
      blockHash: '0x3a4b9c1d8e2f5a6b7c8d9e0f1a2b3c4d5e6f7a8b9c0d1e2f3a4b5c6d7e8f9a0b'
    },
    {
      id: 'UP-2026-00127',
      category: 'Waterlogging',
      title: 'Stormwater backflow under Railway Underpass',
      description: 'Water standing at 35cm depth blocking small vehicles after flash rain.',
      location: 'Railway Bridge 9, Old Airport Rd',
      coords: [12.9620, 77.6520],
      severity: 'Critical',
      status: 'Reported',
      date: 'Today, 13:40 IST',
      reportedBy: 'Kavita Menon',
      evidenceImg: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=600&auto=format&fit=crop&q=80',
      resolvedImg: null,
      aiConfidence: 98.1,
      aiVerdict: 'AI Verified',
      assignedDept: 'Water Supply & Drainage',
      assignedWorker: 'Deepak Verma',
      deadline: 'Today, 18:00 IST',
      upvotes: 34,
      isUserReport: false,
      blockHash: '0x9e8d7c6b5a4f3e2d1c0b9a8f7e6d5c4b3a2f1e0d9c8b7a6f5e4d3c2b1a0f9e8d'
    },
    {
      id: 'UP-2026-00124',
      category: 'Broken streetlight',
      title: 'Dark Corridor: 3 consecutive poles dead',
      description: 'LED streetlights flickering and completely dark between 12th Main & 14th Main.',
      location: '12th Main Rd, HAL 2nd Stage',
      coords: [12.9690, 77.6450],
      severity: 'Medium',
      status: 'Resolved',
      date: 'Yesterday, 18:20 IST',
      reportedBy: 'Aarav Sharma',
      evidenceImg: 'https://images.unsplash.com/photo-1517646287270-a5a9ca602e5c?w=600&auto=format&fit=crop&q=80',
      resolvedImg: 'https://images.unsplash.com/photo-1509228468518-180dd4864904?w=600&auto=format&fit=crop&q=80',
      aiConfidence: 92.5,
      aiVerdict: 'AI Verified',
      assignedDept: 'Electrical & Street Lighting',
      assignedWorker: 'Pooja Sharma',
      deadline: 'Yesterday, 22:00 IST',
      upvotes: 9,
      isUserReport: true,
      blockHash: '0x4f5e6d7c8b9a0f1e2d3c4b5a6f7e8d9c0b1a2f3e4d5c6b7a8f9e0d1c2b3a4f5e',
      resolutionNotes: 'Burnout driver replaced with 90W Philips LED luminaire. Earthing checked.'
    },
    {
      id: 'UP-2026-00128',
      category: 'Pothole',
      title: 'Tire hazard pothole on 80 Feet Main Road',
      description: 'Edge disintegration on right vehicle lane causing traffic bottlenecks.',
      location: '80 Feet Road, Junction 4',
      coords: [12.9740, 77.6350],
      severity: 'High',
      status: 'In Progress',
      date: 'Today, 08:10 IST',
      reportedBy: 'Ramesh Sundaram',
      evidenceImg: 'https://images.unsplash.com/photo-1515162816999-a0c47dc192f7?w=600&auto=format&fit=crop&q=80',
      resolvedImg: null,
      aiConfidence: 95.7,
      aiVerdict: 'AI Verified',
      assignedDept: 'Roads & Infrastructure',
      assignedWorker: 'Rajesh Kumar',
      deadline: 'Today, 19:30 IST',
      upvotes: 21,
      isUserReport: false,
      blockHash: '0x1a2b3c4d5e6f7a8b9c0d1e2f3a4b5c6d7e8f9a0b1c2d3e4f5a6b7c8d9e0f1a2b'
    }
  ],
  sensors: [
    { id: 'IOT-AQI-01', type: 'Pollution (AQI)', value: 168, unit: 'PM2.5 AQI', location: 'Indiranagar Metro', status: 'Moderate', coords: [12.9785, 77.6405] },
    { id: 'IOT-DRN-04', type: 'Water Drainage', value: 88, unit: '% Level', location: '80ft Road Culvert', status: 'High Alert', coords: [12.9735, 77.6340] },
    { id: 'IOT-BIN-12', type: 'Smart Waste Bin', value: 92, unit: '% Full', location: 'Market Plaza', status: 'Overflow Warning', coords: [12.9775, 77.6375] },
    { id: 'IOT-NOI-09', type: 'Noise Sensor', value: 78, unit: 'dB', location: '100ft Road Intersection', status: 'Elevated', coords: [12.9710, 77.6410] },
    { id: 'IOT-TRF-02', type: 'Traffic Speed Sensor', value: 12, unit: 'km/h (Congested)', location: 'Old Airport Junction', status: 'Bottleneck', coords: [12.9610, 77.6510] }
  ],
  blockchain: [
    { block: 1478, time: 'Yesterday, 14:10 IST', action: 'REPORT_FILED', issueId: 'UP-2026-00124', actor: 'Citizen (Aarav Sharma)', hash: '0x4f5e6d7c8b9a0f1e2d3c4b5a6f7e8d9c0b1a2f3e4d5c6b7a8f9e0d1c2b3a4f5e', prevHash: '0x0000a9b8c7d6e5f4a3b2c1d0e9f8a7b6c5d4e3f2a1b0c9d8e7f6a5b4c3d2e1f0' },
    { block: 1479, time: 'Yesterday, 14:11 IST', action: 'AI_VERIFIED', issueId: 'UP-2026-00124', actor: 'Neural Model v2.4 (Confidence 92.5%)', hash: '0x99a1b2c3d4e5f6a7b8c9d0e1f2a3b4c5d6e7f8a9b0c1d2e3f4a5b6c7d8e9f0a1', prevHash: '0x4f5e6d7c8b9a0f1e2d3c4b5a6f7e8d9c0b1a2f3e4d5c6b7a8f9e0d1c2b3a4f5e' },
    { block: 1480, time: 'Yesterday, 18:20 IST', action: 'WORKER_ASSIGNED', issueId: 'UP-2026-00124', actor: 'Officer V. Murthy -> Pooja Sharma', hash: '0x22b3c4d5e6f7a8b9c0d1e2f3a4b5c6d7e8f9a0b1c2d3e4f5a6b7c8d9e0f1a2b3', prevHash: '0x99a1b2c3d4e5f6a7b8c9d0e1f2a3b4c5d6e7f8a9b0c1d2e3f4a5b6c7d8e9f0a1' },
    { block: 1481, time: 'Yesterday, 21:45 IST', action: 'RESOLVED_COMPLETED', issueId: 'UP-2026-00124', actor: 'Worker Pooja Sharma (After Photo attached)', hash: '0x77c4d5e6f7a8b9c0d1e2f3a4b5c6d7e8f9a0b1c2d3e4f5a6b7c8d9e0f1a2b3c4', prevHash: '0x22b3c4d5e6f7a8b9c0d1e2f3a4b5c6d7e8f9a0b1c2d3e4f5a6b7c8d9e0f1a2b3' },
    { block: 1482, time: 'Today, 09:30 IST', action: 'REPORT_FILED', issueId: 'UP-2026-00125', actor: 'Citizen (Aarav Sharma)', hash: '0x7f83b1657ff1fc53b92dc18148a1d65dfc2d4b1fa3d677284addd200126d9069', prevHash: '0x77c4d5e6f7a8b9c0d1e2f3a4b5c6d7e8f9a0b1c2d3e4f5a6b7c8d9e0f1a2b3c4' }
  ],
  notifications: [
    { id: 1, title: 'Report AI Verified', message: 'Your pothole report UP-2026-00125 has been verified with 96.4% confidence and assigned to Roads Department.', time: '2h ago', read: false, type: 'ai' },
    { id: 2, title: 'Worker Dispatched', message: 'Field Engineer Rajesh Kumar has accepted ticket UP-2026-00125 and is en route.', time: '1h ago', read: false, type: 'worker' },
    { id: 3, title: 'XP Rewards Credited', message: '+50 XP awarded for valid civic report! Keep up the great civic work.', time: '2h ago', read: false, type: 'reward' },
    { id: 4, title: 'Flash Flood Risk Detected', message: 'Sensor IOT-DRN-04 exceeded 85% water capacity near 80ft Road Junction.', time: '30m ago', read: false, type: 'alert' }
  ],
  leaderboard: [
    { rank: 1, name: 'Priya Narayanan', points: 1420, badge: '👑 Urban Guardian', reports: 19 },
    { rank: 2, name: 'Aarav Sharma (You)', points: 840, badge: '🏅 Active Citizen', reports: 7 },
    { rank: 3, name: 'Siddharth Roy', points: 790, badge: '🤝 Community Helper', reports: 8 },
    { rank: 4, name: 'Ananya Deshmukh', points: 610, badge: '🌱 New Contributor', reports: 5 }
  ]
};

// Global reactive state
let appState = JSON.parse(localStorage.getItem('urban_pulse_state')) || INITIAL_STATE;

function saveState() {
  localStorage.setItem('urban_pulse_state', JSON.stringify(appState));
}

// Global map instances
let miniMap = null;
let fullCityMap = null;
let pickerMap = null;
let pickerMarker = null;
let mapMarkersGroup = null;
let riskCirclesGroup = null;
let selectedTicketForAssignment = null;
let selectedTicketForResolution = null;

// ==========================================================================
// 2. INITIALIZATION ON DOM READY
// ==========================================================================
document.addEventListener('DOMContentLoaded', () => {
  renderHeaderUser();
  renderCitizenView();
  renderAuthorityView();
  renderWorkerView();
  renderAdminView();
  renderNotifications();
  initMiniMap();
  initCharts();
  startSensorSimulationTicker();
  lucide.createIcons();
});

// ==========================================================================
// 3. ROLE SWITCHING (Section 2 & 16)
// ==========================================================================
function switchRole(role) {
  appState.currentRole = role;
  saveState();

  const roles = ['citizen', 'authority', 'worker', 'admin'];
  roles.forEach(r => {
    const view = document.getElementById(`view-${r}`);
    const btn = document.getElementById(`btn-role-${r}`);
    if (r === role) {
      view.classList.remove('hidden');
      btn.className = 'role-tab px-3 py-1.5 rounded-lg transition-all flex items-center gap-1.5 bg-sky-500 text-white shadow-md shadow-sky-500/25';
    } else {
      view.classList.add('hidden');
      btn.className = 'role-tab px-3 py-1.5 rounded-lg text-slate-400 hover:text-white transition-all flex items-center gap-1.5';
    }
  });

  // Role specific user badge update
  const rewardBadge = document.getElementById('header-reward-badge');
  const userRoleLabel = document.getElementById('user-role-label');
  const userNameDisplay = document.getElementById('user-name-display');

  if (role === 'citizen') {
    rewardBadge.classList.remove('hidden');
    if (userNameDisplay) userNameDisplay.innerText = 'Aarav Sharma';
    if (userRoleLabel) userRoleLabel.innerText = 'Citizen Contributor';
    renderCitizenView();
  } else if (role === 'authority') {
    rewardBadge.classList.add('hidden');
    if (userNameDisplay) userNameDisplay.innerText = 'Officer V. Murthy';
    if (userRoleLabel) userRoleLabel.innerText = 'Municipal Authority';
    renderAuthorityView();
  } else if (role === 'worker') {
    rewardBadge.classList.add('hidden');
    if (userNameDisplay) userNameDisplay.innerText = 'Rajesh Kumar';
    if (userRoleLabel) userRoleLabel.innerText = 'Field Engineer (Roads)';
    renderWorkerView();
  } else if (role === 'admin') {
    rewardBadge.classList.add('hidden');
    if (userNameDisplay) userNameDisplay.innerText = 'Admin Command';
    if (userRoleLabel) userRoleLabel.innerText = 'System Administrator';
    renderAdminView();
  }

  showToast(`Switched view to ${role.toUpperCase()} Mode`);
  lucide.createIcons();
}

function renderHeaderUser() {
  document.getElementById('user-reward-points').innerText = appState.user.points;
}

// ==========================================================================
// 4. CITIZEN VIEW RENDERING (Section 3)
// ==========================================================================
let currentCitizenFilter = 'all'; // 'all', 'Pothole', 'my', 'nearby'

function renderCitizenView() {
  // Update Civic Status Cards
  const activeNearby = appState.issues.filter(i => i.status !== 'Resolved' && i.status !== 'Closed').length;
  const highPriority = appState.issues.filter(i => (i.severity === 'High' || i.severity === 'Critical') && i.status !== 'Resolved').length;
  const resolvedCount = appState.issues.filter(i => i.status === 'Resolved').length;
  const userReports = appState.issues.filter(i => i.isUserReport).length;

  document.getElementById('stat-active-nearby').innerText = activeNearby;
  document.getElementById('stat-high-priority').innerText = highPriority;
  document.getElementById('stat-resolved-month').innerText = 180 + resolvedCount;
  document.getElementById('stat-user-reports').innerText = userReports;

  // Render Live Sensor Alerts (Section 3.5 & 10)
  renderLiveAlerts();

  // Render Nearby Issues List
  renderCitizenIssuesList();

  // Render Leaderboard
  renderLeaderboard();
}

function renderLiveAlerts() {
  const container = document.getElementById('live-alerts-container');
  const alertSensors = appState.sensors.filter(s => s.status.includes('Alert') || s.status.includes('Warning') || s.status.includes('Bottleneck'));
  
  let html = '';
  alertSensors.forEach(sensor => {
    let icon = 'alert-triangle';
    let color = 'text-amber-400 border-amber-500/30 bg-amber-500/10';
    if (sensor.type.includes('Drainage')) {
      icon = 'waves';
      color = 'text-red-400 border-red-500/30 bg-red-500/10';
    } else if (sensor.type.includes('Bin')) {
      icon = 'trash-2';
    } else if (sensor.type.includes('Traffic')) {
      icon = 'traffic-cone';
    }

    html += `
      <div class="p-3 rounded-xl border ${color} flex items-center justify-between">
        <div class="flex items-center gap-2.5">
          <i data-lucide="${icon}" class="w-4 h-4"></i>
          <div>
            <p class="font-bold text-xs text-white">${sensor.type}: <span class="font-mono">${sensor.value} ${sensor.unit}</span></p>
            <p class="text-[10px] text-slate-300">${sensor.location} &middot; <strong class="uppercase">${sensor.status}</strong></p>
          </div>
        </div>
        <span class="text-[9px] px-2 py-0.5 bg-black/40 rounded-full font-mono">LIVE IoT</span>
      </div>
    `;
  });
  container.innerHTML = html;
}

function renderCitizenIssuesList() {
  const container = document.getElementById('citizen-issues-grid');
  let filtered = [...appState.issues];

  if (currentCitizenFilter === 'my') {
    filtered = filtered.filter(i => i.isUserReport);
    document.getElementById('issues-section-title').innerText = 'My Submitted Reports';
  } else if (currentCitizenFilter === 'nearby') {
    document.getElementById('issues-section-title').innerText = 'Nearby Ward Issues';
  } else if (currentCitizenFilter !== 'all') {
    filtered = filtered.filter(i => i.category.toLowerCase().includes(currentCitizenFilter.toLowerCase()));
    document.getElementById('issues-section-title').innerText = `${currentCitizenFilter} Reports`;
  } else {
    document.getElementById('issues-section-title').innerText = 'Nearby Civic Issues';
  }

  document.getElementById('issues-count-badge').innerText = filtered.length;

  if (filtered.length === 0) {
    container.innerHTML = `
      <div class="glass-card p-8 rounded-2xl text-center text-slate-400">
        <i data-lucide="check-circle" class="w-8 h-8 text-emerald-400 mx-auto mb-2"></i>
        <p class="text-sm font-bold text-white">No active issues in this category</p>
        <p class="text-xs mt-1">All clean! Be the first to report if you spot an issue.</p>
      </div>
    `;
    lucide.createIcons();
    return;
  }

  let html = '';
  filtered.forEach(issue => {
    const isResolved = issue.status === 'Resolved';
    const severityColor = issue.severity === 'Critical' ? 'bg-red-500/20 text-red-400 border-red-500/30' :
                          issue.severity === 'High' ? 'bg-amber-500/20 text-amber-400 border-amber-500/30' :
                          'bg-blue-500/20 text-blue-400 border-blue-500/30';
    
    const statusColor = isResolved ? 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30' :
                        issue.status === 'In Progress' ? 'bg-cyan-500/20 text-cyan-300 border-cyan-500/30' :
                        issue.status === 'Assigned' ? 'bg-purple-500/20 text-purple-300 border-purple-500/30' :
                        'bg-slate-700/40 text-slate-300 border-slate-600/40';

    html += `
      <div class="glass-card p-4 rounded-xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 group">
        <div class="flex items-start gap-3.5 flex-1">
          <img src="${issue.evidenceImg}" class="w-16 h-16 rounded-xl object-cover ring-1 ring-slate-700 shrink-0" alt="Issue Evidence">
          <div class="space-y-1 flex-1">
            <div class="flex flex-wrap items-center gap-2">
              <span class="font-mono text-[11px] font-extrabold text-sky-400 cursor-pointer hover:underline" onclick="openTrackModal('${issue.id}')">${issue.id}</span>
              <span class="px-2 py-0.5 text-[10px] font-bold rounded-md border ${severityColor}">${issue.severity}</span>
              <span class="px-2 py-0.5 text-[10px] font-semibold rounded-md border ${statusColor}">${issue.status}</span>
              <span class="text-[10px] text-emerald-400 flex items-center gap-1 font-semibold">
                <i data-lucide="sparkles" class="w-3 h-3"></i> AI ${issue.aiConfidence}%
              </span>
            </div>
            <h4 class="font-bold text-sm text-white group-hover:text-sky-300 transition cursor-pointer" onclick="openTrackModal('${issue.id}')">${issue.title}</h4>
            <p class="text-xs text-slate-400 flex items-center gap-1.5">
              <i data-lucide="map-pin" class="w-3 h-3 text-slate-500"></i> ${issue.location} &middot; <span class="text-slate-500">${issue.date}</span>
            </p>
          </div>
        </div>

        <div class="flex items-center gap-2 self-stretch sm:self-auto justify-between sm:justify-end border-t sm:border-t-0 pt-2 sm:pt-0 border-slate-800">
          <button onclick="upvoteIssue('${issue.id}')" class="px-3 py-1.5 text-xs font-semibold bg-slate-900 hover:bg-slate-800 text-slate-300 rounded-lg border border-slate-700/60 flex items-center gap-1.5 transition">
            <i data-lucide="thumbs-up" class="w-3.5 h-3.5 text-sky-400"></i>
            <span>${issue.upvotes}</span>
          </button>
          <button onclick="openTrackModal('${issue.id}')" class="px-3.5 py-1.5 text-xs font-bold bg-sky-500/10 hover:bg-sky-500/20 text-sky-400 rounded-lg border border-sky-500/30 flex items-center gap-1.5 transition">
            <span>Track</span>
            <i data-lucide="chevron-right" class="w-3.5 h-3.5"></i>
          </button>
        </div>
      </div>
    `;
  });

  container.innerHTML = html;
  lucide.createIcons();
}

function filterCategory(cat) {
  currentCitizenFilter = cat;
  renderCitizenIssuesList();
}

function filterCitizenReports(filterType) {
  currentCitizenFilter = filterType;
  renderCitizenIssuesList();
}

function renderLeaderboard() {
  const container = document.getElementById('leaderboard-list');
  let html = '';
  appState.leaderboard.forEach(champ => {
    html += `
      <div class="flex items-center justify-between p-2 rounded-lg bg-slate-900/50 border border-slate-800">
        <div class="flex items-center gap-2.5">
          <span class="w-5 h-5 rounded-full flex items-center justify-center font-mono font-bold text-[10px] ${champ.rank === 1 ? 'bg-amber-400 text-black' : champ.rank === 2 ? 'bg-sky-500 text-white' : 'bg-slate-800 text-slate-400'}">${champ.rank}</span>
          <div>
            <p class="font-bold text-slate-200 text-xs">${champ.name}</p>
            <p class="text-[10px] text-slate-400">${champ.badge}</p>
          </div>
        </div>
        <div class="text-right">
          <span class="font-black text-amber-400 text-xs">${champ.points} XP</span>
          <p class="text-[10px] text-slate-500">${champ.reports} verified</p>
        </div>
      </div>
    `;
  });
  container.innerHTML = html;
}

function upvoteIssue(issueId) {
  const issue = appState.issues.find(i => i.id === issueId);
  if (issue) {
    issue.upvotes += 1;
    appState.user.points += 10;
    saveState();
    renderHeaderUser();
    renderCitizenIssuesList();
    showToast(`Confirmed report ${issueId}! Earned +10 XP for civic verification.`);
  }
}

// ==========================================================================
// 5. AUTHORITY VIEW RENDERING (Section 12)
// ==========================================================================
function renderAuthorityView() {
  const total = appState.issues.length;
  const pending = appState.issues.filter(i => i.status === 'Reported').length;
  const critical = appState.issues.filter(i => i.severity === 'Critical' || i.severity === 'High').length;
  const progress = appState.issues.filter(i => i.status === 'In Progress' || i.status === 'Assigned').length;
  const resolved = appState.issues.filter(i => i.status === 'Resolved').length;

  document.getElementById('auth-kpi-total').innerText = total;
  document.getElementById('auth-kpi-pending').innerText = pending;
  document.getElementById('auth-kpi-critical').innerText = critical;
  document.getElementById('auth-kpi-progress').innerText = progress;
  document.getElementById('auth-kpi-resolved').innerText = resolved;

  renderAuthorityTable(appState.issues);
}

function renderAuthorityTable(issues) {
  const tbody = document.getElementById('auth-issues-table-body');
  let html = '';

  issues.forEach(issue => {
    const isResolved = issue.status === 'Resolved';
    const severityBadge = issue.severity === 'Critical' ? '<span class="text-red-400 font-bold">● Critical</span>' :
                          issue.severity === 'High' ? '<span class="text-amber-400 font-bold">● High</span>' :
                          '<span class="text-blue-400 font-bold">● Medium</span>';
    
    const statusClass = isResolved ? 'text-emerald-400 bg-emerald-500/10 border-emerald-500/30' :
                        issue.status === 'In Progress' ? 'text-cyan-300 bg-cyan-500/10 border-cyan-500/30' :
                        issue.status === 'Assigned' ? 'text-purple-300 bg-purple-500/10 border-purple-500/30' :
                        'text-amber-400 bg-amber-500/10 border-amber-500/30';

    html += `
      <tr class="hover:bg-slate-900/60 transition">
        <td class="p-3.5 font-mono font-bold text-sky-400 cursor-pointer hover:underline" onclick="openTrackModal('${issue.id}')">${issue.id}</td>
        <td class="p-3.5">
          <img src="${issue.evidenceImg}" class="w-10 h-10 rounded-lg object-cover ring-1 ring-slate-700" alt="Evidence">
        </td>
        <td class="p-3.5">
          <p class="font-bold text-white text-xs">${issue.category}</p>
          <p class="text-[11px] text-slate-400 truncate max-w-xs">${issue.title}</p>
        </td>
        <td class="p-3.5 text-[11px] text-slate-300">${issue.location}</td>
        <td class="p-3.5 text-xs">${severityBadge}</td>
        <td class="p-3.5">
          <span class="px-2 py-0.5 text-[10px] rounded-full bg-sky-500/10 text-sky-300 border border-sky-500/20 font-mono">${issue.aiConfidence}% Verified</span>
        </td>
        <td class="p-3.5 text-xs text-slate-300">${issue.assignedWorker || '<span class="text-slate-500">Unassigned</span>'}</td>
        <td class="p-3.5">
          <span class="px-2 py-0.5 text-[10px] font-bold rounded-md border ${statusClass}">${issue.status}</span>
        </td>
        <td class="p-3.5 text-right space-x-2">
          ${!isResolved ? `
            <button onclick="openAssignModal('${issue.id}')" class="px-2.5 py-1 text-[11px] font-bold bg-sky-500 hover:bg-sky-600 text-white rounded-lg transition">Assign</button>
          ` : `
            <span class="text-[11px] text-emerald-400 font-semibold">Closed</span>
          `}
          <button onclick="openTrackModal('${issue.id}')" class="px-2.5 py-1 text-[11px] bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-lg transition">Inspect</button>
        </td>
      </tr>
    `;
  });

  tbody.innerHTML = html;
}

function searchAuthorityIssues() {
  const query = document.getElementById('auth-search-input').value.toLowerCase();
  const status = document.getElementById('auth-filter-status').value;

  let filtered = appState.issues.filter(i => {
    const matchesQuery = i.id.toLowerCase().includes(query) || i.location.toLowerCase().includes(query) || i.category.toLowerCase().includes(query) || i.title.toLowerCase().includes(query);
    const matchesStatus = status === 'all' || i.status === status;
    return matchesQuery && matchesStatus;
  });

  renderAuthorityTable(filtered);
}

function assignPreventiveAction() {
  showToast('Dispatched High-Capacity Dewatering Pump Unit to 80ft Road Junction');
  addBlockchainBlock('PREVENTIVE_DISPATCH', 'IOT-DRN-04', 'Municipal Authority Automated Dispatch');
}

// ==========================================================================
// 6. FIELD WORKER VIEW RENDERING (Section 13)
// ==========================================================================
function renderWorkerView() {
  const container = document.getElementById('worker-tasks-container');
  const myTasks = appState.issues.filter(i => i.assignedWorker === 'Rajesh Kumar');
  document.getElementById('worker-task-count').innerText = `${myTasks.length} Assigned`;

  let html = '';
  myTasks.forEach(task => {
    const isDone = task.status === 'Resolved';
    html += `
      <div class="glass-card p-5 rounded-2xl space-y-3.5 border ${isDone ? 'border-emerald-500/30' : 'border-amber-500/30'} flex flex-col justify-between">
        <div class="space-y-2">
          <div class="flex items-center justify-between">
            <span class="font-mono text-xs font-bold text-sky-400">${task.id}</span>
            <span class="px-2 py-0.5 text-[10px] font-bold rounded ${task.severity === 'Critical' ? 'bg-red-500/20 text-red-300' : 'bg-amber-500/20 text-amber-300'}">${task.severity}</span>
          </div>

          <h4 class="font-bold text-sm text-white">${task.title}</h4>
          <p class="text-xs text-slate-400">${task.description}</p>
          
          <div class="h-32 rounded-xl overflow-hidden bg-black/60 border border-slate-800">
            <img src="${task.evidenceImg}" class="w-full h-full object-cover" alt="Task photo">
          </div>

          <div class="p-2.5 rounded-lg bg-slate-900 text-xs space-y-1 text-slate-300">
            <p class="flex items-center gap-1.5"><i data-lucide="map-pin" class="w-3.5 h-3.5 text-sky-400"></i> ${task.location}</p>
            <p class="flex items-center gap-1.5"><i data-lucide="clock" class="w-3.5 h-3.5 text-amber-400"></i> SLA Deadline: <strong class="text-white">${task.deadline}</strong></p>
          </div>
        </div>

        <div class="pt-2 border-t border-slate-800 flex items-center gap-2">
          ${!isDone ? `
            <button onclick="openResolveModal('${task.id}')" class="flex-1 py-2 bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 text-white font-bold text-xs rounded-xl transition flex items-center justify-center gap-1.5">
              <i data-lucide="check-circle" class="w-4 h-4"></i>
              <span>Mark as Resolved</span>
            </button>
          ` : `
            <div class="flex-1 py-2 text-center text-xs font-bold text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 rounded-xl">
              ✓ Resolved & Committed
            </div>
          `}
        </div>
      </div>
    `;
  });

  container.innerHTML = html;
  lucide.createIcons();
}

// ==========================================================================
// 7. ADMIN VIEW RENDERING (Section 15)
// ==========================================================================
function renderAdminView() {
  const container = document.getElementById('admin-sensor-nodes');
  let html = '';
  appState.sensors.forEach(sensor => {
    html += `
      <div class="flex items-center justify-between p-2.5 rounded-lg bg-slate-900/60 border border-slate-800">
        <div class="flex items-center gap-2.5">
          <span class="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
          <div>
            <p class="font-bold text-white text-xs">${sensor.id} &middot; <span class="text-slate-400">${sensor.type}</span></p>
            <p class="text-[10px] text-slate-400">${sensor.location} &middot; Current Value: <strong class="text-sky-300 font-mono">${sensor.value} ${sensor.unit}</strong></p>
          </div>
        </div>
        <span class="px-2 py-0.5 text-[10px] rounded bg-slate-800 text-slate-300 font-mono">${sensor.status}</span>
      </div>
    `;
  });
  container.innerHTML = html;
}

// ==========================================================================
// 8. INTERACTIVE LEAFLET MAPS (Section 6)
// ==========================================================================
function initMiniMap() {
  if (miniMap) return;
  const miniContainer = document.getElementById('mini-map');
  if (!miniContainer) return;

  miniMap = L.map('mini-map', { zoomControl: false, attributionControl: false }).setView([12.9716, 77.6412], 13);
  L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', { maxZoom: 19 }).addTo(miniMap);

  appState.issues.forEach(issue => {
    const markerColor = issue.severity === 'Critical' ? '#ef4444' : issue.severity === 'High' ? '#f59e0b' : '#10b981';
    L.circleMarker(issue.coords, {
      radius: 6,
      fillColor: markerColor,
      color: '#ffffff',
      weight: 1.5,
      opacity: 1,
      fillOpacity: 0.9
    }).addTo(miniMap);
  });
}

function openFullMapModal() {
  const modal = document.getElementById('modal-map');
  modal.classList.remove('hidden');

  setTimeout(() => {
    if (!fullCityMap) {
      fullCityMap = L.map('full-city-map').setView([12.9716, 77.6412], 14);
      L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
        attribution: '&copy; OpenStreetMap contributors &copy; CARTO'
      }).addTo(fullCityMap);

      mapMarkersGroup = L.layerGroup().addTo(fullCityMap);
      riskCirclesGroup = L.layerGroup().addTo(fullCityMap);
    }
    fullCityMap.invalidateSize();
    updateMapLayers();
  }, 200);
}

function closeFullMapModal() {
  document.getElementById('modal-map').classList.add('hidden');
}

function updateMapLayers() {
  if (!fullCityMap) return;
  mapMarkersGroup.clearLayers();
  riskCirclesGroup.clearLayers();

  const showReports = document.getElementById('layer-reports').checked;
  const showSensors = document.getElementById('layer-sensors').checked;
  const showRisks = document.getElementById('layer-risks').checked;
  const showResolved = document.getElementById('layer-resolved').checked;

  // Render Reports
  if (showReports) {
    appState.issues.forEach(issue => {
      if (!showResolved && issue.status === 'Resolved') return;

      const markerColor = issue.status === 'Resolved' ? '#10b981' :
                          issue.severity === 'Critical' ? '#ef4444' :
                          issue.severity === 'High' ? '#f59e0b' : '#0ea5e9';

      const icon = L.divIcon({
        className: 'custom-pin',
        html: `<div style="background-color:${markerColor}; width:28px; height:28px; border-radius:50%; display:flex; align-items:center; justify-content:center; border:2px solid white; box-shadow:0 0 10px ${markerColor}; color:white; font-size:12px;">📍</div>`,
        iconSize: [28, 28],
        iconAnchor: [14, 14]
      });

      const marker = L.marker(issue.coords, { icon }).addTo(mapMarkersGroup);
      marker.bindPopup(`
        <div class="text-xs space-y-1">
          <p class="font-bold text-white">${issue.category} &middot; <span class="font-mono text-sky-400">${issue.id}</span></p>
          <p class="text-slate-300">${issue.title}</p>
          <p class="text-slate-400">${issue.location}</p>
          <div class="pt-1 flex items-center justify-between">
            <span class="font-bold text-amber-400">${issue.severity} Priority</span>
            <button onclick="openTrackModal('${issue.id}')" style="background:#0ea5e9; color:white; padding:2px 8px; border-radius:4px; font-weight:bold;">Track</button>
          </div>
        </div>
      `);
    });
  }

  // Render IoT Sensors
  if (showSensors) {
    appState.sensors.forEach(sensor => {
      const sensorIcon = L.divIcon({
        className: 'sensor-pin',
        html: `<div style="background-color:#06b6d4; width:26px; height:26px; border-radius:8px; display:flex; align-items:center; justify-content:center; border:2px solid #a5f3fc; box-shadow:0 0 10px #06b6d4; color:black; font-size:12px; font-weight:bold;">📶</div>`,
        iconSize: [26, 26],
        iconAnchor: [13, 13]
      });

      const marker = L.marker(sensor.coords, { icon: sensorIcon }).addTo(mapMarkersGroup);
      marker.bindPopup(`
        <div class="text-xs space-y-1">
          <p class="font-bold text-cyan-400">${sensor.type}</p>
          <p class="font-mono text-white text-sm font-black">${sensor.value} ${sensor.unit}</p>
          <p class="text-slate-300">${sensor.location}</p>
          <p class="text-emerald-400 font-semibold">Status: ${sensor.status}</p>
        </div>
      `);
    });
  }

  // Render Predicted Risk Zones (Section 11)
  if (showRisks) {
    L.circle([12.9735, 77.6340], {
      color: '#ef4444',
      fillColor: '#dc2626',
      fillOpacity: 0.25,
      radius: 350
    }).addTo(riskCirclesGroup).bindPopup(`
      <div class="text-xs">
        <p class="font-bold text-red-400">⚠️ PREDICTED WATERLOGGING ZONE</p>
        <p class="text-slate-300">Culvert 80ft Road &middot; Predicted Flood Risk Index: 88%</p>
        <p class="text-slate-400 mt-1">AI Recommendation: Dispatch municipal suction pump unit.</p>
      </div>
    `);
  }
}

// ==========================================================================
// 9. REPORT AN ISSUE MODAL & AI SCANNER (Section 4 & 5)
// ==========================================================================
let currentReportEvidenceUrl = 'https://images.unsplash.com/photo-1515162816999-a0c47dc192f7?w=600&auto=format&fit=crop&q=80';
let currentSelectedCoords = [12.9716, 77.5946];

function openReportModal() {
  document.getElementById('modal-report').classList.remove('hidden');

  setTimeout(() => {
    if (!pickerMap) {
      pickerMap = L.map('picker-map', { zoomControl: false }).setView(currentSelectedCoords, 14);
      L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png').addTo(pickerMap);

      pickerMarker = L.marker(currentSelectedCoords, { draggable: true }).addTo(pickerMap);
      pickerMarker.on('dragend', function (e) {
        const latlng = e.target.getLatLng();
        currentSelectedCoords = [latlng.lat, latlng.lng];
        document.getElementById('picker-coords').innerText = `${latlng.lat.toFixed(4)}° N, ${latlng.lng.toFixed(4)}° E`;
      });
    }
    pickerMap.invalidateSize();
  }, 200);

  // Auto load default sample
  selectPresetImage('pothole');
}

function closeReportModal() {
  document.getElementById('modal-report').classList.add('hidden');
}

function updateCategorySelect(radio) {
  document.querySelectorAll('#category-selector-grid label').forEach(label => {
    label.className = 'cursor-pointer border border-slate-800 bg-slate-900/60 p-2.5 rounded-xl flex items-center gap-2 transition hover:bg-slate-800';
  });
  radio.closest('label').className = 'cursor-pointer border border-sky-500 bg-sky-500/10 p-2.5 rounded-xl flex items-center gap-2 transition hover:bg-sky-500/20';
}

function selectPresetImage(type) {
  const images = {
    pothole: 'https://images.unsplash.com/photo-1515162816999-a0c47dc192f7?w=600&auto=format&fit=crop&q=80',
    garbage: 'https://images.unsplash.com/photo-1618477461853-cf6ed80faba5?w=600&auto=format&fit=crop&q=80',
    waterlog: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=600&auto=format&fit=crop&q=80'
  };

  currentReportEvidenceUrl = images[type] || images.pothole;
  simulateAiVerificationScan(type);
}

function handleFileSelection(e) {
  const file = e.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = function (event) {
      currentReportEvidenceUrl = event.target.result;
      simulateAiVerificationScan('custom');
    };
    reader.readAsDataURL(file);
  }
}

function simulateAiVerificationScan(type) {
  document.getElementById('preview-upload-placeholder').classList.add('hidden');
  const previewBox = document.getElementById('upload-preview-box');
  previewBox.classList.remove('hidden');

  const img = document.getElementById('uploaded-img-preview');
  img.src = currentReportEvidenceUrl;

  const overlay = document.getElementById('ai-scanner-overlay');
  overlay.classList.remove('hidden');

  setTimeout(() => {
    overlay.classList.add('hidden');
    const confidence = (94.0 + Math.random() * 5).toFixed(1);
    document.getElementById('ai-confidence-tag').innerText = `${confidence}% Confidence`;
    
    if (type === 'pothole') {
      document.getElementById('ai-detected-details').innerText = 'Detected: Asphalt crater & pavement crack &middot; Severity: HIGH';
    } else if (type === 'garbage') {
      document.getElementById('ai-detected-details').innerText = 'Detected: Organic & plastic waste spillage &middot; Severity: HIGH';
    } else if (type === 'waterlog') {
      document.getElementById('ai-detected-details').innerText = 'Detected: Standing rainwater depth > 20cm &middot; Severity: CRITICAL';
    } else {
      document.getElementById('ai-detected-details').innerText = 'Detected: Civic anomaly verified by computer vision &middot; Severity: HIGH';
    }
  }, 900);
}

function useCurrentGPS() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        currentSelectedCoords = [pos.coords.latitude, pos.coords.longitude];
        if (pickerMarker) pickerMarker.setLatLng(currentSelectedCoords);
        if (pickerMap) pickerMap.panTo(currentSelectedCoords);
        document.getElementById('picker-coords').innerText = `${pos.coords.latitude.toFixed(4)}° N, ${pos.coords.longitude.toFixed(4)}° E`;
        showToast('Acquired precise GPS location coordinates');
      },
      () => {
        showToast('Defaulting to simulated ward coordinates');
      }
    );
  }
}

function handleReportSubmit(e) {
  e.preventDefault();

  const category = document.querySelector('input[name="report_category"]:checked').value;
  const description = document.getElementById('report-description').value;
  const location = document.getElementById('report-location-input').value;
  const nextIdNum = 129 + appState.issues.length;
  const newId = `UP-2026-00${nextIdNum}`;

  const blockHash = '0x' + Array.from(crypto.getRandomValues(new Uint8Array(32)))
    .map(b => b.toString(16).padStart(2, '0')).join('');

  const newIssue = {
    id: newId,
    category,
    title: `${category} reported at ${location}`,
    description,
    location,
    coords: currentSelectedCoords,
    severity: category === 'Waterlogging' ? 'Critical' : 'High',
    status: 'AI Verified',
    date: 'Just now',
    reportedBy: appState.user.name,
    evidenceImg: currentReportEvidenceUrl,
    resolvedImg: null,
    aiConfidence: 96.8,
    aiVerdict: 'AI Verified',
    assignedDept: getDepartmentForCategory(category),
    assignedWorker: 'Rajesh Kumar',
    deadline: 'Within 12 hours',
    upvotes: 1,
    isUserReport: true,
    blockHash
  };

  appState.issues.unshift(newIssue);
  appState.user.points += 50;
  appState.user.reportsCount += 1;
  appState.user.verifiedCount += 1;

  // Append block to blockchain
  addBlockchainBlock('REPORT_FILED', newId, `Citizen (${appState.user.name})`);
  addBlockchainBlock('AI_VERIFIED', newId, `Neural Model 2.0 (Confidence 96.8%)`);

  // Append notification
  appState.notifications.unshift({
    id: Date.now(),
    title: 'Report Submitted & AI Verified',
    message: `Issue ${newId} has been classified as ${category} and broadcast to ${newIssue.assignedDept}.`,
    time: 'Just now',
    read: false,
    type: 'ai'
  });

  saveState();
  closeReportModal();
  renderHeaderUser();
  renderCitizenView();
  renderAuthorityView();
  renderWorkerView();
  renderNotifications();

  showToast(`🎉 Issue ${newId} filed! +50 XP Civic Rewards added.`);
  openTrackModal(newId);
}

function getDepartmentForCategory(cat) {
  if (cat === 'Pothole') return 'Roads & Infrastructure';
  if (cat === 'Garbage overflow') return 'Solid Waste & Sanitation';
  if (cat === 'Broken streetlight') return 'Electrical & Street Lighting';
  if (cat === 'Waterlogging') return 'Water Supply & Drainage';
  if (cat === 'Traffic') return 'Traffic Management';
  return 'General Municipal Works';
}

// ==========================================================================
// 10. ISSUE TRACKING & 7-STEP TIMELINE (Section 7)
// ==========================================================================
function openTrackModal(issueId) {
  const issue = appState.issues.find(i => i.id === issueId);
  if (!issue) return;

  document.getElementById('modal-track').classList.remove('hidden');
  document.getElementById('track-issue-id').innerText = issue.id;
  document.getElementById('track-location').innerText = `${issue.location} &middot; Category: ${issue.category}`;
  document.getElementById('track-description').innerText = issue.description;
  document.getElementById('track-evidence-img').src = issue.evidenceImg;
  document.getElementById('track-tx-hash').innerText = issue.blockHash;

  // 7-step timeline status
  const steps = ['Reported', 'AI Verification', 'Verified', 'Assigned', 'In Progress', 'Resolved', 'Closed'];
  const currentStatusIndex = issue.status === 'Reported' ? 0 :
                             issue.status === 'AI Verified' ? 2 :
                             issue.status === 'Assigned' ? 3 :
                             issue.status === 'In Progress' ? 4 :
                             issue.status === 'Resolved' ? 5 : 6;

  let stepperHtml = '';
  steps.forEach((step, idx) => {
    let stateClass = idx < currentStatusIndex ? 'step-completed' :
                     idx === currentStatusIndex ? 'step-active font-bold text-sky-400' :
                     'step-inactive text-slate-500';

    let icon = idx < currentStatusIndex ? '✓' : (idx + 1);

    stepperHtml += `
      <div class="flex flex-col items-center gap-1">
        <div class="w-7 h-7 rounded-full border flex items-center justify-center font-bold text-xs ${stateClass}">
          ${icon}
        </div>
        <span class="text-[9px] truncate max-w-[48px]">${step}</span>
      </div>
    `;
  });

  document.getElementById('track-stepper-container').innerHTML = stepperHtml;

  // Resolution image preview
  const resolvedImg = document.getElementById('track-resolved-img');
  const resolvedPlaceholder = document.getElementById('track-resolved-placeholder');
  const notes = document.getElementById('track-resolution-notes');

  if (issue.status === 'Resolved' && issue.resolvedImg) {
    resolvedImg.src = issue.resolvedImg;
    resolvedImg.classList.remove('hidden');
    resolvedPlaceholder.classList.add('hidden');
    notes.innerText = issue.resolutionNotes || 'Repairs completed and validated by municipal engineer.';
  } else {
    resolvedImg.classList.add('hidden');
    resolvedPlaceholder.classList.remove('hidden');
    notes.innerText = '';
  }

  lucide.createIcons();
}

function closeTrackModal() {
  document.getElementById('modal-track').classList.add('hidden');
}

// ==========================================================================
// 11. AUTHORITY ASSIGNMENT MODAL (Section 12.4)
// ==========================================================================
function openAssignModal(issueId) {
  selectedTicketForAssignment = issueId;
  document.getElementById('assign-ticket-id').innerText = issueId;
  document.getElementById('modal-assign').classList.remove('hidden');
}

function closeAssignModal() {
  document.getElementById('modal-assign').classList.add('hidden');
}

function confirmAssignment() {
  const issue = appState.issues.find(i => i.id === selectedTicketForAssignment);
  if (!issue) return;

  const dept = document.getElementById('assign-dept-select').value;
  const worker = document.getElementById('assign-worker-select').value;
  const priority = document.getElementById('assign-priority-select').value;

  issue.assignedDept = dept;
  issue.assignedWorker = worker;
  issue.status = 'Assigned';
  issue.deadline = priority;

  addBlockchainBlock('WORKER_ASSIGNED', issue.id, `Municipal Authority -> ${worker}`);

  appState.notifications.unshift({
    id: Date.now(),
    title: 'Worker Assigned',
    message: `${worker} has been assigned to ticket ${issue.id}.`,
    time: 'Just now',
    read: false,
    type: 'worker'
  });

  saveState();
  closeAssignModal();
  renderAuthorityView();
  renderCitizenView();
  renderWorkerView();
  renderNotifications();
  showToast(`Assigned ${issue.id} to ${worker} (${dept})`);
}

// ==========================================================================
// 12. FIELD WORKER RESOLUTION MODAL (Section 13.3)
// ==========================================================================
let sampleResolvedImage = 'https://images.unsplash.com/photo-1509228468518-180dd4864904?w=600&auto=format&fit=crop&q=80';

function openResolveModal(issueId) {
  selectedTicketForResolution = issueId;
  const issue = appState.issues.find(i => i.id === issueId);
  if (!issue) return;

  document.getElementById('resolve-ticket-id').innerText = issueId;
  document.getElementById('resolve-before-img').src = issue.evidenceImg;
  document.getElementById('modal-resolve').classList.remove('hidden');
  selectSampleResolvedPhoto();
}

function closeResolveModal() {
  document.getElementById('modal-resolve').classList.add('hidden');
}

function selectSampleResolvedPhoto() {
  document.getElementById('resolve-upload-placeholder').classList.add('hidden');
  const preview = document.getElementById('resolve-after-preview');
  preview.src = sampleResolvedImage;
  preview.classList.remove('hidden');
}

function submitResolutionToBlockchain() {
  const issue = appState.issues.find(i => i.id === selectedTicketForResolution);
  if (!issue) return;

  const notes = document.getElementById('resolve-notes-input').value;
  issue.status = 'Resolved';
  issue.resolvedImg = sampleResolvedImage;
  issue.resolutionNotes = notes;

  appState.user.points += 100;
  appState.user.resolvedCount += 1;

  addBlockchainBlock('RESOLVED_COMPLETED', issue.id, `Field Worker (${issue.assignedWorker})`);

  appState.notifications.unshift({
    id: Date.now(),
    title: 'Issue Resolved & Verified',
    message: `Issue ${issue.id} has been marked resolved. Before & after photos logged on chain. +100 XP awarded!`,
    time: 'Just now',
    read: false,
    type: 'reward'
  });

  saveState();
  closeResolveModal();
  renderWorkerView();
  renderCitizenView();
  renderAuthorityView();
  renderHeaderUser();
  renderNotifications();
  showToast(`🎉 Task ${issue.id} marked completed! Block hash committed.`);
}

// ==========================================================================
// 13. BLOCKCHAIN TRANSPARENCY LAYER ENGINE (Section 14)
// ==========================================================================
function addBlockchainBlock(action, issueId, actor) {
  const lastBlock = appState.blockchain[appState.blockchain.length - 1];
  const newIndex = lastBlock ? lastBlock.block + 1 : 1;
  const prevHash = lastBlock ? lastBlock.hash : '0x0000000000000000000000000000000000000000000000000000000000000000';

  const newHash = '0x' + Array.from(crypto.getRandomValues(new Uint8Array(32)))
    .map(b => b.toString(16).padStart(2, '0')).join('');

  const blockObj = {
    block: newIndex,
    time: 'Just now',
    action,
    issueId,
    actor,
    hash: newHash,
    prevHash
  };

  appState.blockchain.unshift(blockObj);
  saveState();
}

function openBlockchainModal() {
  const modal = document.getElementById('modal-blockchain');
  modal.classList.remove('hidden');

  document.getElementById('chain-length-text').innerText = appState.blockchain.length;
  const container = document.getElementById('blockchain-list');

  let html = '';
  appState.blockchain.forEach((b, idx) => {
    html += `
      <div class="glass-card p-4 rounded-xl space-y-2 border border-purple-500/20">
        <div class="flex items-center justify-between">
          <div class="flex items-center gap-2">
            <span class="w-6 h-6 rounded-lg bg-purple-500/20 text-purple-300 font-mono font-bold text-xs flex items-center justify-center">#${b.block}</span>
            <span class="font-bold text-white text-xs">${b.action}</span>
            <span class="font-mono text-[10px] text-sky-400 font-semibold">${b.issueId}</span>
          </div>
          <span class="text-[10px] text-slate-400">${b.time}</span>
        </div>

        <div class="text-[10px] font-mono space-y-0.5 text-slate-400 bg-black/40 p-2.5 rounded-lg">
          <p><span class="text-slate-500">Actor:</span> <span class="text-slate-200">${b.actor}</span></p>
          <p class="break-all"><span class="text-slate-500">Block Hash:</span> <span class="text-purple-300 font-semibold">${b.hash}</span></p>
          <p class="break-all"><span class="text-slate-500">Prev Hash:</span> <span class="text-slate-500">${b.prevHash}</span></p>
        </div>
      </div>
    `;
  });

  container.innerHTML = html;
}

function closeBlockchainModal() {
  document.getElementById('modal-blockchain').classList.add('hidden');
}

// ==========================================================================
// 14. IOT SENSOR TELEMETRY SIMULATION LOOP (Section 10)
// ==========================================================================
function startSensorSimulationTicker() {
  setInterval(() => {
    simulateTelemetryFluctuations();
  }, 12000);
}

function triggerSensorSimulation() {
  simulateTelemetryFluctuations();
  showToast('Simulated real-time IoT sensory pulse packet');
}

function simulateTelemetryFluctuations() {
  appState.sensors.forEach(sensor => {
    if (sensor.type.includes('Pollution')) {
      sensor.value = Math.min(320, Math.max(80, sensor.value + Math.floor((Math.random() - 0.5) * 15)));
    } else if (sensor.type.includes('Drainage')) {
      sensor.value = Math.min(100, Math.max(40, sensor.value + Math.floor((Math.random() - 0.4) * 8)));
    } else if (sensor.type.includes('Bin')) {
      sensor.value = Math.min(100, Math.max(30, sensor.value + Math.floor((Math.random() - 0.3) * 6)));
    }
  });

  saveState();
  if (appState.currentRole === 'citizen') renderLiveAlerts();
  if (appState.currentRole === 'admin') renderAdminView();
}

// ==========================================================================
// 15. NOTIFICATIONS PANEL (Section 8)
// ==========================================================================
let notifOpen = false;

function toggleNotifications() {
  const panel = document.getElementById('notifications-panel');
  notifOpen = !notifOpen;
  if (notifOpen) {
    panel.classList.remove('translate-x-full');
  } else {
    panel.classList.add('translate-x-full');
  }
}

function renderNotifications() {
  const container = document.getElementById('notifications-list');
  const unreadCount = appState.notifications.filter(n => !n.read).length;

  document.getElementById('notif-badge').innerText = unreadCount;
  document.getElementById('notif-count-text').innerText = `${unreadCount} New`;

  let html = '';
  appState.notifications.forEach(n => {
    html += `
      <div class="p-3 rounded-xl bg-slate-900/80 border ${n.read ? 'border-slate-800' : 'border-sky-500/40 bg-sky-500/5'} space-y-1">
        <div class="flex items-center justify-between">
          <p class="font-bold text-xs text-white">${n.title}</p>
          <span class="text-[10px] text-slate-500">${n.time}</span>
        </div>
        <p class="text-[11px] text-slate-400">${n.message}</p>
      </div>
    `;
  });
  container.innerHTML = html;
}

function markAllNotificationsRead() {
  appState.notifications.forEach(n => n.read = true);
  saveState();
  renderNotifications();
  showToast('All notifications marked as read');
}

// ==========================================================================
// 16. MUNICIPAL ANALYTICS CHARTS (Section 12.5)
// ==========================================================================
function initCharts() {
  // Chart 1: Category Doughnut
  const ctxCat = document.getElementById('chart-category');
  if (ctxCat) {
    new Chart(ctxCat, {
      type: 'doughnut',
      data: {
        labels: ['Potholes', 'Garbage', 'Streetlight', 'Waterlog', 'Traffic'],
        datasets: [{
          data: [38, 24, 18, 12, 8],
          backgroundColor: ['#0ea5e9', '#f59e0b', '#10b981', '#ef4444', '#8b5cf6'],
          borderWidth: 0
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { position: 'bottom', labels: { color: '#94a3b8', font: { size: 10 } } }
        }
      }
    });
  }

  // Chart 2: Resolution Bar Chart
  const ctxRes = document.getElementById('chart-resolution');
  if (ctxRes) {
    new Chart(ctxRes, {
      type: 'bar',
      data: {
        labels: ['Roads', 'Sanitation', 'Electrical', 'Drainage', 'Traffic'],
        datasets: [{
          label: 'Avg Hours',
          data: [6.5, 3.8, 5.2, 2.4, 1.8],
          backgroundColor: '#0ea5e9',
          borderRadius: 6
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: { legend: { display: false } },
        scales: {
          x: { ticks: { color: '#94a3b8', font: { size: 9 } }, grid: { display: false } },
          y: { ticks: { color: '#94a3b8', font: { size: 9 } }, grid: { color: '#1e293b' } }
        }
      }
    });
  }

  // Chart 3: Participation Line Chart
  const ctxPart = document.getElementById('chart-participation');
  if (ctxPart) {
    new Chart(ctxPart, {
      type: 'line',
      data: {
        labels: ['W1', 'W2', 'W3', 'W4', 'W5', 'W6'],
        datasets: [{
          label: 'Reports Filed',
          data: [28, 45, 62, 78, 110, 142],
          borderColor: '#10b981',
          backgroundColor: 'rgba(16, 185, 129, 0.1)',
          fill: true,
          tension: 0.4
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: { legend: { display: false } },
        scales: {
          x: { ticks: { color: '#94a3b8', font: { size: 9 } }, grid: { display: false } },
          y: { ticks: { color: '#94a3b8', font: { size: 9 } }, grid: { color: '#1e293b' } }
        }
      }
    });
  }
}

// ==========================================================================
// 17. TOAST NOTIFICATIONS HELPER
// ==========================================================================
let toastTimer = null;
function showToast(message) {
  const toast = document.getElementById('toast-box');
  const toastMsg = document.getElementById('toast-message');
  toastMsg.innerText = message;

  toast.classList.remove('opacity-0', 'translate-y-20', 'pointer-events-none');
  toast.classList.add('opacity-100', 'translate-y-0');

  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => {
    toast.classList.add('opacity-0', 'translate-y-20', 'pointer-events-none');
    toast.classList.remove('opacity-100', 'translate-y-0');
  }, 3500);
}

function scrollToRewards() {
  switchRole('citizen');
  const el = document.getElementById('rewards-section');
  if (el) el.scrollIntoView({ behavior: 'smooth' });
}
