import { getUser, getSessions, getGlobalStats, getThemeStats, getScoreTrend, clearSessions } from './storage.js'
import { THEMES } from './data.js'

function init() {
  const user = getUser();
  if (!user) { window.location.href = 'index.html'; return; }
  
  const navUser = document.getElementById('nav-username');
  if (navUser) navUser.textContent = user.name || 'User';
  
  const avatar = document.querySelector('.user-avatar');
  if (avatar && user.name) avatar.textContent = user.name.charAt(0).toUpperCase();
  
  const sessions = getSessions();
  const globalStats = getGlobalStats();
  const themeStats = getThemeStats();
  const scoreTrend = getScoreTrend();
  
  const streakEl = document.getElementById('streak-count');
  if (streakEl) streakEl.textContent = globalStats.streak || (sessions.length > 0 ? 1 : 0);
  
  renderGlobalStats(globalStats);
  renderThemeStats(themeStats);
  renderSessionHistory(sessions);
  
  setTimeout(() => {
    if (scoreTrend.length > 1) {
      drawLineChart(document.getElementById('trend-chart'), scoreTrend);
    } else {
      const trendCanvas = document.getElementById('trend-chart');
      if (trendCanvas) {
        const ctx = trendCanvas.getContext('2d');
        const W = trendCanvas.offsetWidth || 300;
        const H = trendCanvas.offsetHeight || 200;
        trendCanvas.width = W;
        trendCanvas.height = H;
        ctx.clearRect(0, 0, W, H);
        ctx.font = '500 13px Inter, sans-serif';
        ctx.fillStyle = '#94a3b8';
        ctx.textAlign = 'center';
        ctx.fillText('Complete 2+ sessions to see your score trend graph', W / 2, H / 2);
      }
    }
    
    const themeKeys = Object.keys(themeStats);
    const radarContainer = document.querySelector('.radar-container');
    if (themeKeys.length >= 3) {
      const labels = themeKeys.map(k => THEMES[k]?.label || k);
      const values = themeKeys.map(k => themeStats[k].pct);
      drawRadarChart(document.getElementById('radar-chart'), labels, values);
    } else if (radarContainer) {
      radarContainer.innerHTML = `
        <div class="flex-center text-muted" style="height:100%; text-align:center; padding:1.5rem; font-size:0.9rem;">
          <div>
            <div style="font-size:2rem; margin-bottom:0.5rem;">🎯</div>
            Practice across at least 3 distinct grammar topics to generate your mastery radar!
          </div>
        </div>
      `;
    }
  }, 100);
}

function renderGlobalStats(stats) {
  const avg = stats.avgScore !== undefined ? stats.avgScore : (stats.averageScore || 0);
  const totalQ = stats.totalQAnswered !== undefined ? stats.totalQAnswered : (stats.totalQuestions || 0);
  
  const statSessions = document.getElementById('stat-sessions');
  if (statSessions) statSessions.textContent = stats.totalSessions || 0;
  
  const statAvg = document.getElementById('stat-avg-score');
  if (statAvg) statAvg.textContent = `${Math.round(avg)}%`;
  
  const statBest = document.getElementById('stat-best-score');
  if (statBest) statBest.textContent = `${stats.bestScore || 0}%`;
  
  const statTotalQ = document.getElementById('stat-total-q');
  if (statTotalQ) statTotalQ.textContent = totalQ;
}

function renderThemeStats(themeStats) {
  const container = document.getElementById('theme-stats-container');
  if (!container) return;
  
  const themes = Object.entries(themeStats).map(([key, val]) => ({
    key,
    label: THEMES[key]?.label || key,
    icon: THEMES[key]?.icon || '📌',
    ...val
  })).sort((a, b) => a.pct - b.pct); // worst first so you see where to improve
  
  if (themes.length === 0) {
    container.innerHTML = '<p class="text-muted text-center" style="padding:2rem;">No theme performance data recorded yet. Train on specific topics to populate your stats!</p>';
    return;
  }

  container.innerHTML = '';
  themes.forEach(t => {
    const statusColor = t.pct >= 75 ? '#10b981' : t.pct >= 50 ? '#f59e0b' : '#ef4444';
    const statusBg = t.pct >= 75 ? 'rgba(16, 185, 129, 0.15)' : t.pct >= 50 ? 'rgba(245, 158, 11, 0.15)' : 'rgba(239, 68, 68, 0.15)';
    
    const row = document.createElement('div');
    row.style.background = 'rgba(255,255,255,0.03)';
    row.style.border = '1px solid var(--border)';
    row.style.borderRadius = 'var(--radius-md)';
    row.style.padding = '0.9rem 1.25rem';
    row.style.marginBottom = '0.75rem';
    
    row.innerHTML = `
      <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:0.5rem; flex-wrap:wrap; gap:0.5rem;">
        <span style="font-weight:600; font-size:0.95rem; color:#f8fafc; display:flex; align-items:center; gap:0.5rem;">
          <span>${t.icon}</span> <span>${t.label}</span>
        </span>
        <span style="font-size:0.85rem; font-weight:700; color:${statusColor}; background:${statusBg}; padding:3px 10px; border-radius:9999px;">
          ${t.correct} / ${t.total} (${Math.round(t.pct)}%)
        </span>
      </div>
      <div style="height:8px; background:rgba(255,255,255,0.08); border-radius:9999px; overflow:hidden; position:relative;">
        <div style="width:${t.pct}%; height:100%; background:${statusColor}; border-radius:9999px; transition:width 1s ease-out;"></div>
      </div>
    `;
    container.appendChild(row);
  });
}

function drawLineChart(canvas, dataPoints) {
  if (!canvas) return;
  const dpr = window.devicePixelRatio || 1;
  const W = canvas.offsetWidth || 300;
  const H = canvas.offsetHeight || 280;
  canvas.width = W * dpr;
  canvas.height = H * dpr;
  canvas.style.width = W + 'px';
  canvas.style.height = H + 'px';
  
  const ctx = canvas.getContext('2d');
  ctx.scale(dpr, dpr);
  
  const pad = { top: 25, right: 25, bottom: 40, left: 45 };
  const chartW = W - pad.left - pad.right;
  const chartH = H - pad.top - pad.bottom;
  
  const toX = i => pad.left + (i / (dataPoints.length - 1)) * chartW;
  const toY = score => pad.top + chartH - (score / 100) * chartH;
  
  // Gradient fill under line
  const gradient = ctx.createLinearGradient(0, pad.top, 0, pad.top + chartH);
  gradient.addColorStop(0, 'rgba(139, 92, 246, 0.35)');
  gradient.addColorStop(1, 'rgba(139, 92, 246, 0)');
  
  ctx.beginPath();
  dataPoints.forEach((d, i) => {
    const x = toX(i);
    const y = toY(d.score);
    i === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
  });
  ctx.lineTo(toX(dataPoints.length - 1), pad.top + chartH);
  ctx.lineTo(toX(0), pad.top + chartH);
  ctx.closePath();
  ctx.fillStyle = gradient;
  ctx.fill();
  
  // Trend line
  ctx.beginPath();
  dataPoints.forEach((d, i) => {
    const x = toX(i);
    const y = toY(d.score);
    i === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
  });
  ctx.strokeStyle = '#8b5cf6';
  ctx.lineWidth = 2.5;
  ctx.stroke();
  
  // Data dots
  dataPoints.forEach((d, i) => {
    const x = toX(i);
    const y = toY(d.score);
    ctx.beginPath();
    ctx.arc(x, y, 4.5, 0, Math.PI * 2);
    ctx.fillStyle = '#22d3ee';
    ctx.fill();
    ctx.strokeStyle = '#ffffff';
    ctx.lineWidth = 1.5;
    ctx.stroke();
  });
  
  // Y-axis gridlines and percentages
  ctx.fillStyle = '#94a3b8';
  ctx.font = '600 11px Inter, sans-serif';
  ctx.textAlign = 'right';
  ctx.textBaseline = 'middle';
  [0, 25, 50, 75, 100].forEach(pct => {
    const y = toY(pct);
    ctx.fillText(pct + '%', pad.left - 10, y);
    ctx.beginPath();
    ctx.moveTo(pad.left, y);
    ctx.lineTo(pad.left + chartW, y);
    ctx.strokeStyle = pct === 0 ? 'rgba(255,255,255,0.15)' : 'rgba(255,255,255,0.06)';
    ctx.lineWidth = 1;
    ctx.stroke();
  });
  
  // X-axis dates
  ctx.textAlign = 'center';
  dataPoints.forEach((d, i) => {
    if (i % Math.max(1, Math.floor(dataPoints.length / 5)) === 0 || i === dataPoints.length - 1) {
      const date = new Date(d.date);
      const label = `${date.getMonth() + 1}/${date.getDate()}`;
      ctx.fillText(label, toX(i), pad.top + chartH + 20);
    }
  });
}

function drawRadarChart(canvas, labels, values) {
  if (!canvas) return;
  const dpr = window.devicePixelRatio || 1;
  const W = canvas.offsetWidth || 300;
  const H = canvas.offsetHeight || 300;
  canvas.width = W * dpr;
  canvas.height = H * dpr;
  canvas.style.width = W + 'px';
  canvas.style.height = H + 'px';
  
  const ctx = canvas.getContext('2d');
  ctx.scale(dpr, dpr);
  
  const cx = W / 2;
  const cy = H / 2;
  const r = Math.min(cx, cy) * 0.62;
  const n = labels.length;
  
  ctx.clearRect(0, 0, W, H);
  
  for (let ring = 1; ring <= 5; ring++) {
    ctx.beginPath();
    for (let i = 0; i < n; i++) {
      const angle = (i / n) * Math.PI * 2 - Math.PI / 2;
      const x = cx + Math.cos(angle) * r * (ring / 5);
      const y = cy + Math.sin(angle) * r * (ring / 5);
      i === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
    }
    ctx.closePath();
    ctx.strokeStyle = ring === 5 ? 'rgba(255,255,255,0.18)' : 'rgba(255,255,255,0.07)';
    ctx.lineWidth = 1;
    ctx.stroke();
  }
  
  for (let i = 0; i < n; i++) {
    const angle = (i / n) * Math.PI * 2 - Math.PI / 2;
    ctx.beginPath();
    ctx.moveTo(cx, cy);
    ctx.lineTo(cx + Math.cos(angle) * r, cy + Math.sin(angle) * r);
    ctx.strokeStyle = 'rgba(255,255,255,0.12)';
    ctx.lineWidth = 1;
    ctx.stroke();
  }
  
  ctx.beginPath();
  values.forEach((val, i) => {
    const angle = (i / n) * Math.PI * 2 - Math.PI / 2;
    const dist = r * Math.max(0.08, val / 100);
    const x = cx + Math.cos(angle) * dist;
    const y = cy + Math.sin(angle) * dist;
    i === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
  });
  ctx.closePath();
  ctx.fillStyle = 'rgba(139, 92, 246, 0.25)';
  ctx.fill();
  ctx.strokeStyle = '#8b5cf6';
  ctx.lineWidth = 2.5;
  ctx.stroke();
  
  values.forEach((val, i) => {
    const angle = (i / n) * Math.PI * 2 - Math.PI / 2;
    const dist = r * Math.max(0.08, val / 100);
    const x = cx + Math.cos(angle) * dist;
    const y = cy + Math.sin(angle) * dist;
    ctx.beginPath();
    ctx.arc(x, y, 4.5, 0, Math.PI * 2);
    ctx.fillStyle = '#22d3ee';
    ctx.fill();
    ctx.strokeStyle = '#ffffff';
    ctx.lineWidth = 1.5;
    ctx.stroke();
  });
  
  ctx.font = '600 11px Inter, sans-serif';
  ctx.fillStyle = '#cbd5e1';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  labels.forEach((label, i) => {
    const angle = (i / n) * Math.PI * 2 - Math.PI / 2;
    const dist = r * 1.25;
    const x = cx + Math.cos(angle) * dist;
    const y = cy + Math.sin(angle) * dist;
    const shortLabel = label.length > 14 ? label.slice(0, 12) + '…' : label;
    ctx.fillText(shortLabel, x, y);
  });
}

const resetBtn = document.getElementById('btn-reset');
if (resetBtn) {
  resetBtn.addEventListener('click', () => {
    if (confirm('Are you sure you want to reset ALL your training history? This cannot be undone.')) {
      clearSessions();
      window.location.reload();
    }
  });
}

function renderSessionHistory(sessions) {
  const tbody = document.getElementById('session-tbody');
  const emptyState = document.getElementById('history-empty');
  if (!tbody) return;
  
  if (sessions.length === 0) {
    if (emptyState) emptyState.classList.remove('hidden');
    return;
  }
  
  tbody.innerHTML = '';
  sessions.slice(0, 25).forEach(s => {
    const date = new Date(s.date);
    const dateStr = date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' });
    const timeStr = Math.round(s.actualDurationSeconds / 60) + ' min';
    const modeBadge = s.mode === 'toeic' ? '<span class="badge badge-violet">TOEIC</span>' : '<span class="badge badge-cyan">Custom</span>';
    const partsBadges = (s.parts || []).map(p => `<span class="badge" style="background:rgba(255,255,255,0.08);">P${p}</span>`).join(' ');
    const scoreColor = s.score >= 75 ? 'text-success' : s.score >= 50 ? 'text-warning' : 'text-error';
    
    const tr = document.createElement('tr');
    tr.style.borderBottom = '1px solid rgba(255,255,255,0.06)';
    tr.innerHTML = `
      <td class="p-3" style="color:#cbd5e1; font-size:0.9rem;">${dateStr}</td>
      <td class="p-3">${modeBadge}</td>
      <td class="p-3">${partsBadges}</td>
      <td class="p-3 ${scoreColor}" style="font-weight:700; font-size:1.05rem;">${s.score}%</td>
      <td class="p-3" style="color:#94a3b8;">${timeStr}</td>
      <td class="p-3" style="color:#f1f5f9; font-weight:500;">${s.correctQ} / ${s.totalQ}</td>
    `;
    tbody.appendChild(tr);
  });
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
