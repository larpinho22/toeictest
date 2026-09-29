import { getUser, getSessions, getSessionById } from './storage.js'
import { THEMES } from './data.js'

let session = null;

function init() {
  const user = getUser()
  if (!user) { window.location.href = 'index.html'; return }
  document.getElementById('nav-username').textContent = user.name || 'User'
  
  const lastId = sessionStorage.getItem('toeic_last_session_id')
  session = lastId ? getSessionById(lastId) : getSessions()[0]
  
  if (!session) { window.location.href = 'index.html'; return }
  
  renderResults(session)
}

function renderResults(session) {
    const isTimeout = session.actualDurationSeconds >= (session.totalDurationSeconds || Infinity);
    document.getElementById('result-title').textContent = isTimeout ? "Time's up! ⏱" : "Session Complete! 🎉";
    
    // Header Stats
    const score = session.score;
    document.getElementById('score-details').textContent = `${session.correctQ} / ${session.totalQ} correct • ${Math.round(session.actualDurationSeconds / 60)}m ${session.actualDurationSeconds % 60}s`;
    
    // Badges
    const badgeContainer = document.getElementById('session-badges');
    const modeBadge = document.createElement('span');
    modeBadge.className = session.mode === 'toeic' ? 'badge badge-violet' : 'badge badge-cyan';
    modeBadge.textContent = session.mode === 'toeic' ? 'TOEIC' : 'Custom';
    badgeContainer.appendChild(modeBadge);
    
    (session.parts || []).forEach(p => {
        const pBadge = document.createElement('span');
        pBadge.className = 'badge';
        pBadge.textContent = `Part ${p}`;
        badgeContainer.appendChild(pBadge);
    });

    animateGauge(score);
    renderThemeBreakdown(session);
    
    // Quick Stats
    document.getElementById('stat-score').textContent = `${score}%`;
    document.getElementById('stat-correct').textContent = session.correctQ;
    document.getElementById('stat-time').textContent = `${Math.floor(session.actualDurationSeconds / 60)}m ${session.actualDurationSeconds % 60}s`;
    document.getElementById('stat-skipped').textContent = session.results.filter(r => r.userAnswer === -1).length;
    
    // Missed Questions
    renderMissedQuestions(session);
}

function animateGauge(score) {
  const circle = document.querySelector('.score-gauge-progress')
  const circumference = 502
  circle.style.strokeDasharray = circumference;
  circle.style.strokeDashoffset = circumference;
  
  setTimeout(() => {
    circle.style.transition = 'stroke-dashoffset 1s ease-out';
    circle.style.strokeDashoffset = circumference * (1 - score / 100)
  }, 100)
  
  let current = 0
  const interval = setInterval(() => {
    current = Math.min(current + 2, score)
    document.querySelector('.score-gauge-val').textContent = current + '%'
    if (current >= score) clearInterval(interval)
  }, 20)
}

function renderThemeBreakdown(session) {
  const themeMap = {}
  session.results.forEach(r => {
    if (r.userAnswer === -1) return
    if (!themeMap[r.theme]) themeMap[r.theme] = { correct: 0, total: 0 }
    themeMap[r.theme].total++
    if (r.correct) themeMap[r.theme].correct++
  })
  
  const themes = Object.entries(themeMap).map(([key, val]) => ({
    key, label: THEMES[key]?.label || key,
    pct: Math.round((val.correct / val.total) * 100),
    ...val
  })).sort((a, b) => b.pct - a.pct)
  
  const container = document.getElementById('theme-breakdown');
  
  const strong = themes.filter(t => t.pct >= 75)
  const medium = themes.filter(t => t.pct >= 50 && t.pct < 75)
  const weak = themes.filter(t => t.pct < 50)
  
  if (strong.length) appendThemeGroup(container, '✅ Strong (≥75%)', strong, 'good');
  if (medium.length) appendThemeGroup(container, '⚠️ Work on (50-74%)', medium, 'avg');
  if (weak.length) appendThemeGroup(container, '❌ Focus here (<50%)', weak, 'poor');
  
  if (weak.length > 0) {
    const reco = weak.slice(0, 3).map(t => t.label).join(', ')
    document.getElementById('theme-recommendation').innerHTML = `<strong>🎯 Next time, train on:</strong> ${reco}`
  }

  // Draw Radar Chart
  setTimeout(() => {
      const labels = themes.map(t => t.label);
      const values = themes.map(t => t.pct);
      if (labels.length > 2) {
          drawRadarChart(document.getElementById('radar-chart'), labels, values);
      } else {
          document.querySelector('.radar-container').innerHTML = '<div class="flex-center h-100 text-muted">Not enough data for radar chart</div>';
      }
  }, 0);
}

function appendThemeGroup(container, title, themes, cssClass) {
    const h4 = document.createElement('h4');
    h4.className = 'mt-4 mb-2 text-muted';
    h4.textContent = title;
    container.appendChild(h4);
    
    themes.forEach(t => {
        const row = document.createElement('div');
        row.className = 'theme-bar-row mb-2 flex-between';
        
        row.innerHTML = `
            <div class="theme-bar-label" style="flex: 1; margin-right: 1rem;">${t.label}</div>
            <div class="theme-bar-track" style="flex: 2; height: 8px; background: rgba(255,255,255,0.1); border-radius: 4px; overflow: hidden; position: relative;">
                <div class="theme-bar-fill ${cssClass}" style="width: ${t.pct}%; height: 100%; position: absolute; left: 0; top: 0; background: ${cssClass === 'good' ? '#10b981' : cssClass === 'avg' ? '#eab308' : '#ef4444'};"></div>
            </div>
            <div class="theme-bar-pct ml-2" style="width: 40px; text-align: right; font-size: 0.85rem;">${t.pct}%</div>
        `;
        container.appendChild(row);
    });
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
  
  // Draw background rings (5 rings)
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
  
  // Draw axes
  for (let i = 0; i < n; i++) {
    const angle = (i / n) * Math.PI * 2 - Math.PI / 2
    ctx.beginPath()
    ctx.moveTo(cx, cy)
    ctx.lineTo(cx + Math.cos(angle) * r, cy + Math.sin(angle) * r)
    ctx.strokeStyle = 'rgba(255,255,255,0.12)'
    ctx.lineWidth = 1
    ctx.stroke()
  }
  
  // Draw data polygon
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
  
  // Draw dots at each vertex
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
  
  // Draw labels
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

function renderMissedQuestions(session) {
    const missed = session.results.filter(r => !r.correct);
    document.getElementById('missed-count').textContent = missed.length;
    
    if (missed.length > 0) {
        document.getElementById('btn-drill').classList.remove('hidden');
    }

    const header = document.getElementById('missed-header');
    const container = document.getElementById('missed-questions-container');
    
    header.addEventListener('click', () => {
        container.classList.toggle('hidden');
        document.getElementById('missed-toggle').textContent = container.classList.contains('hidden') ? '▼' : '▲';
    });

    missed.forEach((r, idx) => {
        const card = document.createElement('div');
        card.className = 'card';
        
        let answerText = r.userAnswer === -1 ? 'Skipped' : `Option ${['A','B','C','D'][r.userAnswer]}`;
        const correctText = `Option ${['A','B','C','D'][r.correctAnswer]}`;

        card.innerHTML = `
            <div class="mb-2"><strong>Q:</strong> ${r.questionText}</div>
            <div class="text-error mb-1">❌ Your Answer: ${answerText}</div>
            <div class="text-success mb-2">✅ Correct Answer: ${correctText}</div>
            <div class="explanation-box p-3 bg-slate-800 rounded">
                <strong>Explanation:</strong> ${r.explanation || 'No explanation available.'}
            </div>
        `;
        container.appendChild(card);
    });
}

document.getElementById('btn-drill').addEventListener('click', () => {
  const missed = session.results.filter(r => !r.correct && r.userAnswer !== -1)
  const config = {
    mode: 'custom',
    parts: [...new Set(missed.map(r => r.part))],
    themes: [],
    subtopics: [],
    timeMinutes: Math.max(5, Math.ceil(missed.length * 45 / 60)),
    drillMistakes: true,
    missedQuestionIds: missed.map(r => r.questionId)
  }
  sessionStorage.setItem('toeic_quiz_config', JSON.stringify(config))
  window.location.href = 'quiz.html'
})

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
