import { getUser, getSessions, getGlobalStats, getThemeStats, getScoreTrend, clearSessions } from './storage.js'
import { THEMES } from './data.js'

function init() {
  const user = getUser()
  if (!user) { window.location.href = 'index.html'; return }
  document.getElementById('nav-username').textContent = user.name || 'User'
  
  const sessions = getSessions()
  const globalStats = getGlobalStats()
  const themeStats = getThemeStats()
  const scoreTrend = getScoreTrend()
  
  // Example streak calculation (mocked for now as we don't track logins)
  document.getElementById('streak-count').textContent = sessions.length > 0 ? 1 : 0;
  
  renderGlobalStats(globalStats)
  renderThemeStats(themeStats)
  renderSessionHistory(sessions)
  
  setTimeout(() => {
      if (scoreTrend.length > 1) {
        drawLineChart(document.getElementById('trend-chart'), scoreTrend)
      } else {
        const trendCanvas = document.getElementById('trend-chart');
        const ctx = trendCanvas.getContext('2d');
        ctx.clearRect(0,0,trendCanvas.width,trendCanvas.height);
        ctx.font = '14px Inter';
        ctx.fillStyle = '#64748b';
        ctx.textAlign = 'center';
        ctx.fillText('Not enough data (needs 2+ sessions)', trendCanvas.offsetWidth/2, trendCanvas.offsetHeight/2);
      }
      
      const themeKeys = Object.keys(themeStats)
      if (themeKeys.length > 2) {
        const labels = themeKeys.map(k => THEMES[k]?.label || k)
        const values = themeKeys.map(k => themeStats[k].pct)
        drawRadarChart(document.getElementById('radar-chart'), labels, values)
      } else {
          const radarContainer = document.querySelector('.radar-container');
          radarContainer.innerHTML = '<div class="flex-center h-100 text-muted" style="height:100%">Not enough data</div>';
      }
  }, 0)
}

function renderGlobalStats(stats) {
    document.getElementById('stat-sessions').textContent = stats.totalSessions;
    document.getElementById('stat-avg-score').textContent = `${Math.round(stats.averageScore)}%`;
    document.getElementById('stat-best-score').textContent = `${stats.bestScore}%`;
    document.getElementById('stat-total-q').textContent = stats.totalQuestions;
}

function renderThemeStats(themeStats) {
    const container = document.getElementById('theme-stats-container');
    const themes = Object.entries(themeStats).map(([key, val]) => ({
        key, label: THEMES[key]?.label || key,
        ...val
    })).sort((a, b) => a.pct - b.pct); // worst first
    
    if (themes.length === 0) {
        container.innerHTML = '<p class="text-muted text-center">No theme data available yet.</p>';
        return;
    }

    themes.forEach(t => {
        const cssClass = t.pct >= 75 ? 'good' : t.pct >= 50 ? 'avg' : 'poor';
        const row = document.createElement('div');
        row.className = 'theme-bar-row mb-4 flex-between';
        
        row.innerHTML = `
            <div class="theme-bar-label" style="flex: 1; margin-right: 1rem; min-width: 120px;">${t.label}</div>
            <div class="theme-bar-track" style="flex: 3; height: 10px; background: rgba(255,255,255,0.1); border-radius: 5px; overflow: hidden; position: relative;">
                <div class="theme-bar-fill ${cssClass}" style="width: ${t.pct}%; height: 100%; position: absolute; left: 0; top: 0; background: ${cssClass === 'good' ? '#10b981' : cssClass === 'avg' ? '#eab308' : '#ef4444'};"></div>
            </div>
            <div class="theme-bar-pct ml-4" style="width: 50px; text-align: right; font-weight: bold;">${Math.round(t.pct)}%</div>
        `;
        container.appendChild(row);
    });
}

function drawLineChart(canvas, dataPoints) {
  const dpr = window.devicePixelRatio || 1
  canvas.width = canvas.offsetWidth * dpr
  canvas.height = canvas.offsetHeight * dpr
  const ctx = canvas.getContext('2d')
  ctx.scale(dpr, dpr)
  
  const W = canvas.offsetWidth
  const H = canvas.offsetHeight
  const pad = { top: 20, right: 20, bottom: 40, left: 40 }
  const chartW = W - pad.left - pad.right
  const chartH = H - pad.top - pad.bottom
  
  const toX = i => pad.left + (i / (dataPoints.length - 1)) * chartW
  const toY = score => pad.top + chartH - (score / 100) * chartH
  
  // Gradient fill
  const gradient = ctx.createLinearGradient(0, pad.top, 0, pad.top + chartH)
  gradient.addColorStop(0, 'rgba(139, 92, 246, 0.3)')
  gradient.addColorStop(1, 'rgba(139, 92, 246, 0)')
  
  ctx.beginPath()
  dataPoints.forEach((d, i) => {
    const x = toX(i)
    const y = toY(d.score)
    i === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y)
  })
  ctx.lineTo(toX(dataPoints.length - 1), pad.top + chartH)
  ctx.lineTo(toX(0), pad.top + chartH)
  ctx.closePath()
  ctx.fillStyle = gradient
  ctx.fill()
  
  // Line
  ctx.beginPath()
  dataPoints.forEach((d, i) => {
    const x = toX(i)
    const y = toY(d.score)
    i === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y)
  })
  ctx.strokeStyle = '#8b5cf6'
  ctx.lineWidth = 2
  ctx.stroke()
  
  // Dots
  dataPoints.forEach((d, i) => {
    ctx.beginPath()
    ctx.arc(toX(i), toY(d.score), 4, 0, Math.PI * 2)
    ctx.fillStyle = '#a78bfa'
    ctx.fill()
  })
  
  // Y-axis labels
  ctx.fillStyle = '#64748b'
  ctx.font = '11px Inter'
  ctx.textAlign = 'right'
  ctx.textBaseline = 'middle';
  [0, 25, 50, 75, 100].forEach(pct => {
    const y = toY(pct)
    ctx.fillText(pct + '%', pad.left - 8, y)
    ctx.beginPath()
    ctx.moveTo(pad.left, y)
    ctx.lineTo(pad.left + chartW, y)
    ctx.strokeStyle = 'rgba(255,255,255,0.06)'
    ctx.lineWidth = 1
    ctx.stroke()
  })
  
  // X-axis labels
  ctx.textAlign = 'center'
  ctx.textBaseline = 'top';
  ctx.fillStyle = '#64748b'
  dataPoints.forEach((d, i) => {
    if (i % Math.max(1, Math.ceil(dataPoints.length / 5)) === 0 || i === dataPoints.length - 1) {
      const date = new Date(d.date)
      const label = `${date.getMonth() + 1}/${date.getDate()}`
      ctx.fillText(label, toX(i), pad.top + chartH + 10)
    }
  })
}

function drawRadarChart(canvas, labels, values) {
  const ctx = canvas.getContext('2d')
  const W = canvas.width = canvas.offsetWidth * window.devicePixelRatio || 400
  const H = canvas.height = canvas.offsetHeight * window.devicePixelRatio || 400
  canvas.style.width = '100%'
  canvas.style.height = '100%'
  ctx.scale(window.devicePixelRatio, window.devicePixelRatio)
  
  const dW = canvas.offsetWidth
  const dH = canvas.offsetHeight
  const cx = dW / 2
  const cy = dH / 2
  const r = Math.min(cx, cy) * 0.65
  const n = labels.length
  
  ctx.clearRect(0, 0, dW, dH)
  
  for (let ring = 1; ring <= 5; ring++) {
    ctx.beginPath()
    for (let i = 0; i < n; i++) {
      const angle = (i / n) * Math.PI * 2 - Math.PI / 2
      const x = cx + Math.cos(angle) * r * (ring / 5)
      const y = cy + Math.sin(angle) * r * (ring / 5)
      i === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y)
    }
    ctx.closePath()
    ctx.strokeStyle = 'rgba(255,255,255,0.08)'
    ctx.lineWidth = 1
    ctx.stroke()
  }
  
  for (let i = 0; i < n; i++) {
    const angle = (i / n) * Math.PI * 2 - Math.PI / 2
    ctx.beginPath()
    ctx.moveTo(cx, cy)
    ctx.lineTo(cx + Math.cos(angle) * r, cy + Math.sin(angle) * r)
    ctx.strokeStyle = 'rgba(255,255,255,0.12)'
    ctx.lineWidth = 1
    ctx.stroke()
  }
  
  ctx.beginPath()
  values.forEach((val, i) => {
    const angle = (i / n) * Math.PI * 2 - Math.PI / 2
    const dist = r * (val / 100)
    const x = cx + Math.cos(angle) * dist
    const y = cy + Math.sin(angle) * dist
    i === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y)
  })
  ctx.closePath()
  ctx.fillStyle = 'rgba(139, 92, 246, 0.2)'
  ctx.fill()
  ctx.strokeStyle = '#8b5cf6'
  ctx.lineWidth = 2
  ctx.stroke()
  
  values.forEach((val, i) => {
    const angle = (i / n) * Math.PI * 2 - Math.PI / 2
    const dist = r * (val / 100)
    const x = cx + Math.cos(angle) * dist
    const y = cy + Math.sin(angle) * dist
    ctx.beginPath()
    ctx.arc(x, y, 4, 0, Math.PI * 2)
    ctx.fillStyle = '#a78bfa'
    ctx.fill()
  })
  
  ctx.font = '12px Inter, sans-serif'
  ctx.fillStyle = '#94a3b8'
  ctx.textAlign = 'center'
  ctx.textBaseline = 'middle'
  labels.forEach((label, i) => {
    const angle = (i / n) * Math.PI * 2 - Math.PI / 2
    const dist = r * 1.2
    const x = cx + Math.cos(angle) * dist
    const y = cy + Math.sin(angle) * dist
    const shortLabel = label.length > 12 ? label.slice(0, 10) + '…' : label
    ctx.fillText(shortLabel, x, y)
  })
}

document.getElementById('btn-reset').addEventListener('click', () => {
  if (confirm('Are you sure you want to reset ALL your progress? This cannot be undone.')) {
    clearSessions()
    window.location.reload()
  }
})

function renderSessionHistory(sessions) {
  const tbody = document.getElementById('session-tbody')
  const emptyState = document.getElementById('history-empty')
  
  if (sessions.length === 0) {
    emptyState.classList.remove('hidden')
    return
  }
  
  sessions.slice(0, 20).forEach(s => {
    const date = new Date(s.date)
    const dateStr = date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
    const timeStr = Math.round(s.actualDurationSeconds / 60) + ' min'
    const modeBadge = s.mode === 'toeic' ? '<span class="badge badge-violet">TOEIC</span>' : '<span class="badge badge-cyan">Custom</span>'
    const partsBadges = (s.parts || []).map(p => `<span class="badge">P${p}</span>`).join(' ')
    const scoreColor = s.score >= 75 ? 'text-success' : s.score >= 50 ? 'text-warning' : 'text-error'
    
    const tr = document.createElement('tr')
    tr.style.borderBottom = '1px solid rgba(255,255,255,0.05)'
    tr.innerHTML = `
      <td class="p-3">${dateStr}</td>
      <td class="p-3">${modeBadge}</td>
      <td class="p-3">${partsBadges}</td>
      <td class="p-3 ${scoreColor}" style="font-weight:700">${s.score}%</td>
      <td class="p-3">${timeStr}</td>
      <td class="p-3">${s.correctQ} / ${s.totalQ}</td>
    `
    tbody.appendChild(tr)
  })
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
