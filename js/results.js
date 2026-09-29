import { getUser, getSessions, getSessionById } from './storage.js'
import { THEMES, questions, passages6, passages7 } from './data.js'

let session = null;

function init() {
  const user = getUser();
  if (!user) { window.location.href = 'index.html'; return; }
  
  const navUser = document.getElementById('nav-username');
  if (navUser) navUser.textContent = user.name || 'User';
  
  const avatar = document.querySelector('.user-avatar');
  if (avatar && user.name) avatar.textContent = user.name.charAt(0).toUpperCase();
  
  const lastId = sessionStorage.getItem('toeic_last_session_id');
  session = lastId ? getSessionById(lastId) : getSessions()[0];
  
  if (!session) { window.location.href = 'index.html'; return; }
  
  renderResults(session);
}

function resolveQuestion(r) {
  let qText = r.questionText;
  let corrText = r.correctAnswerText;
  let userText = r.userAnswerText;
  let expl = r.explanation;
  let options = r.options;
  let corrIdx = r.correctAnswer;
  let userIdx = r.userAnswer;
  
  if (!qText || !corrText || !expl || !options) {
    let qObj = questions.find(item => item.id === r.questionId);
    if (!qObj) {
      for (const p of passages6) {
        qObj = p.questions.find(item => item.id === r.questionId);
        if (qObj) break;
      }
    }
    if (!qObj) {
      for (const p of passages7) {
        qObj = p.questions.find(item => item.id === r.questionId);
        if (qObj) break;
      }
    }
    if (qObj) {
      qText = qText || qObj.question;
      options = options || qObj.options;
      corrIdx = (corrIdx !== undefined && corrIdx !== null) ? corrIdx : qObj.answer;
      if (options && options[corrIdx]) {
        corrText = corrText || options[corrIdx];
      }
      if (userIdx !== undefined && userIdx >= 0 && options && options[userIdx]) {
        userText = userText || options[userIdx];
      }
      expl = expl || qObj.explanation;
    }
  }
  
  return {
    ...r,
    questionText: qText || 'Sentence structure and grammar evaluation',
    correctAnswer: corrIdx !== undefined ? corrIdx : 0,
    correctAnswerText: corrText || '',
    userAnswer: userIdx !== undefined ? userIdx : -1,
    userAnswerText: userText,
    explanation: expl || 'Review this grammar topic for more details.',
    options: options || []
  };
}

function renderResults(session) {
  const isTimeout = session.actualDurationSeconds >= (session.durationMinutes * 60);
  const score = session.score || 0;
  
  const titleEl = document.getElementById('result-title');
  if (titleEl) {
    if (score >= 85) titleEl.textContent = "Outstanding Performance! 🏆";
    else if (score >= 70) titleEl.textContent = "Great Job! 🎉";
    else if (score >= 50) titleEl.textContent = "Good Practice Session! 👍";
    else titleEl.textContent = isTimeout ? "Time's up! ⏱" : "Keep Practicing! 💪";
  }
  
  const badgesContainer = document.getElementById('session-badges');
  if (badgesContainer) {
    badgesContainer.innerHTML = '';
    
    // Mode badge
    const modeBadge = document.createElement('span');
    modeBadge.className = session.mode === 'toeic' ? 'badge badge-violet' : 'badge badge-cyan';
    modeBadge.style.fontSize = '0.9rem';
    modeBadge.style.padding = '0.4rem 0.9rem';
    modeBadge.textContent = session.mode === 'toeic' ? '🎯 TOEIC Test' : '✏️ Custom Training';
    badgesContainer.appendChild(modeBadge);
    
    // Parts badges
    (session.parts || []).forEach(p => {
      const pBadge = document.createElement('span');
      pBadge.className = 'badge';
      pBadge.style.fontSize = '0.9rem';
      pBadge.style.padding = '0.4rem 0.9rem';
      pBadge.style.background = 'rgba(255,255,255,0.08)';
      pBadge.textContent = `Part ${p}`;
      badgesContainer.appendChild(pBadge);
    });
    
    // Score label pill
    const gradePill = document.createElement('span');
    gradePill.className = 'badge';
    gradePill.style.fontSize = '0.9rem';
    gradePill.style.padding = '0.4rem 0.9rem';
    if (score >= 75) {
      gradePill.style.background = 'rgba(16, 185, 129, 0.2)';
      gradePill.style.color = '#10b981';
      gradePill.textContent = '🌟 High Proficiency';
    } else if (score >= 50) {
      gradePill.style.background = 'rgba(245, 158, 11, 0.2)';
      gradePill.style.color = '#f59e0b';
      gradePill.textContent = '📈 Intermediate Level';
    } else {
      gradePill.style.background = 'rgba(239, 68, 68, 0.2)';
      gradePill.style.color = '#ef4444';
      gradePill.textContent = '⚠️ Needs Reinforcement';
    }
    badgesContainer.appendChild(gradePill);
  }
  
  animateGauge(score);
  
  // Quick Stats
  const statScore = document.getElementById('stat-score');
  if (statScore) statScore.textContent = `${score}%`;
  
  const statCorrect = document.getElementById('stat-correct');
  if (statCorrect) statCorrect.textContent = `${session.correctQ} / ${session.totalQ}`;
  
  const minutes = Math.floor(session.actualDurationSeconds / 60);
  const seconds = session.actualDurationSeconds % 60;
  const statTime = document.getElementById('stat-time');
  if (statTime) statTime.textContent = `${minutes}m ${seconds}s`;
  
  const avgPace = session.totalQ > 0 ? Math.round(session.actualDurationSeconds / session.totalQ) : 0;
  const statPace = document.getElementById('stat-pace');
  if (statPace) statPace.textContent = `${avgPace}s / q`;
  
  renderThemeBreakdown(session);
  renderMissedQuestions(session);
}

function animateGauge(score) {
  const circle = document.querySelector('.score-gauge-progress');
  const circumference = 502;
  if (!circle) return;
  
  circle.style.strokeDasharray = circumference;
  circle.style.strokeDashoffset = circumference;
  
  setTimeout(() => {
    circle.style.transition = 'stroke-dashoffset 1.4s cubic-bezier(0.4, 0, 0.2, 1)';
    circle.style.strokeDashoffset = circumference * (1 - score / 100);
  }, 100);
  
  let current = 0;
  const valEl = document.querySelector('.score-gauge-val');
  if (!valEl) return;
  
  const interval = setInterval(() => {
    current = Math.min(current + 2, score);
    valEl.textContent = current + '%';
    if (current >= score) clearInterval(interval);
  }, 25);
}

function renderThemeBreakdown(session) {
  const themeMap = {};
  session.results.forEach(r => {
    if (r.userAnswer === -1) return;
    if (!themeMap[r.theme]) themeMap[r.theme] = { correct: 0, total: 0 };
    themeMap[r.theme].total++;
    if (r.correct) themeMap[r.theme].correct++;
  });
  
  const themes = Object.entries(themeMap).map(([key, val]) => ({
    key,
    label: THEMES[key]?.label || key,
    icon: THEMES[key]?.icon || '📌',
    pct: Math.round((val.correct / val.total) * 100),
    ...val
  })).sort((a, b) => b.pct - a.pct);
  
  const container = document.getElementById('theme-breakdown');
  if (!container) return;
  container.innerHTML = '';
  
  if (themes.length === 0) {
    container.innerHTML = '<div class="text-muted" style="padding:1.5rem; text-align:center;">No questions attempted in this session.</div>';
    return;
  }
  
  themes.forEach(t => {
    const item = document.createElement('div');
    item.className = 'theme-result-card';
    const statusColor = t.pct >= 75 ? '#10b981' : t.pct >= 50 ? '#f59e0b' : '#ef4444';
    const statusBg = t.pct >= 75 ? 'rgba(16, 185, 129, 0.15)' : t.pct >= 50 ? 'rgba(245, 158, 11, 0.15)' : 'rgba(239, 68, 68, 0.15)';
    
    item.innerHTML = `
      <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:0.6rem;">
        <span style="font-weight:600; font-size:0.95rem; color:#f8fafc; display:flex; align-items:center; gap:0.5rem;">
          <span style="font-size:1.1rem;">${t.icon}</span> <span>${t.label}</span>
        </span>
        <span style="font-size:0.85rem; font-weight:700; color:${statusColor}; background:${statusBg}; padding:3px 10px; border-radius:9999px;">
          ${t.correct}/${t.total} • ${t.pct}%
        </span>
      </div>
      <div style="height:10px; background:rgba(255,255,255,0.08); border-radius:9999px; overflow:hidden; position:relative;">
        <div style="width:${t.pct}%; height:100%; background:${statusColor}; border-radius:9999px; transition:width 1s ease-out;"></div>
      </div>
    `;
    container.appendChild(item);
  });
  
  const recoEl = document.getElementById('theme-recommendation');
  if (recoEl) {
    const weak = themes.filter(t => t.pct < 65);
    if (weak.length > 0) {
      const names = weak.map(w => `<strong style="color:#f1f5f9;">${w.label}</strong>`).join(', ');
      recoEl.innerHTML = `<div class="alert alert-info mt-4" style="font-size:0.9rem; border-radius:8px;">💡 <strong>Focus next session on:</strong> ${names} to raise your overall score!</div>`;
    } else {
      recoEl.innerHTML = `<div class="alert alert-success mt-4" style="font-size:0.9rem; border-radius:8px;">🌟 <strong>Balanced Excellence:</strong> Solid accuracy across all topics practiced.</div>`;
    }
  }

  // Radar or Insights card
  const radarWrapper = document.getElementById('radar-wrapper');
  if (radarWrapper) {
    const labels = themes.map(t => t.label);
    const values = themes.map(t => t.pct);
    
    if (labels.length >= 3) {
      radarWrapper.innerHTML = `
        <div class="radar-container" style="width: 100%; aspect-ratio: 1; max-width: 320px;">
          <canvas id="radar-chart"></canvas>
        </div>
      `;
      setTimeout(() => {
        const canvas = document.getElementById('radar-chart');
        if (canvas) drawRadarChart(canvas, labels, values);
      }, 50);
    } else {
      // Clean, rich Insights card instead of empty radar
      const best = themes[0];
      const avgPace = session.totalQ > 0 ? Math.round(session.actualDurationSeconds / session.totalQ) : 0;
      radarWrapper.innerHTML = `
        <div style="width:100%; display:flex; flex-direction:column; gap:1rem; padding:0.5rem 0;">
          <div style="padding:1rem; border-radius:10px; background:rgba(139, 92, 246, 0.1); border:1px solid rgba(139, 92, 246, 0.25);">
            <div style="font-size:0.8rem; font-weight:700; color:#a78bfa; text-transform:uppercase; margin-bottom:0.25rem;">🏆 Strongest Topic</div>
            <div style="font-size:1.1rem; font-weight:700; color:#f8fafc;">${best.label} (${best.pct}%)</div>
            <div style="font-size:0.85rem; color:#cbd5e1; margin-top:0.25rem;">You answered ${best.correct} out of ${best.total} questions correctly.</div>
          </div>
          <div style="padding:1rem; border-radius:10px; background:rgba(6, 182, 212, 0.1); border:1px solid rgba(6, 182, 212, 0.25);">
            <div style="font-size:0.8rem; font-weight:700; color:#22d3ee; text-transform:uppercase; margin-bottom:0.25rem;">⚡ Time Efficiency</div>
            <div style="font-size:1.1rem; font-weight:700; color:#f8fafc;">~${avgPace} seconds / question</div>
            <div style="font-size:0.85rem; color:#cbd5e1; margin-top:0.25rem;">${avgPace <= 35 ? 'Excellent speed for TOEIC Part 5!' : 'Steady pace. Practice helps you get faster.'}</div>
          </div>
          <div style="padding:1rem; border-radius:10px; background:rgba(255, 255, 255, 0.04); border:1px solid var(--border);">
            <div style="font-size:0.8rem; font-weight:700; color:var(--text-secondary); text-transform:uppercase; margin-bottom:0.25rem;">💡 Exam Tip</div>
            <div style="font-size:0.875rem; color:#cbd5e1;">Review your missed questions below to master the grammar traps before your next attempt!</div>
          </div>
        </div>
      `;
    }
  }
}

function drawRadarChart(canvas, labels, values) {
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
  
  // Background concentric rings
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
  
  // Axis rays
  for (let i = 0; i < n; i++) {
    const angle = (i / n) * Math.PI * 2 - Math.PI / 2;
    ctx.beginPath();
    ctx.moveTo(cx, cy);
    ctx.lineTo(cx + Math.cos(angle) * r, cy + Math.sin(angle) * r);
    ctx.strokeStyle = 'rgba(255,255,255,0.12)';
    ctx.lineWidth = 1;
    ctx.stroke();
  }
  
  // Data polygon fill
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
  
  // Vertex dots
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
  
  // Labels
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

function renderMissedQuestions(session) {
  const missed = session.results.filter(r => !r.correct).map(resolveQuestion);
  const badgeEl = document.getElementById('missed-count-badge');
  if (badgeEl) {
    badgeEl.textContent = `${missed.length} ${missed.length === 1 ? 'error' : 'errors'}`;
    if (missed.length === 0) {
      badgeEl.className = 'badge badge-green';
      badgeEl.textContent = '0 errors 🎉';
    }
  }
  
  const drillBtn = document.getElementById('btn-drill');
  if (drillBtn) {
    if (missed.length > 0) drillBtn.classList.remove('hidden');
    else drillBtn.classList.add('hidden');
  }

  const header = document.getElementById('missed-header');
  const container = document.getElementById('missed-questions-container');
  const toggleIcon = document.getElementById('missed-toggle');
  
  if (header && container && toggleIcon) {
    header.onclick = () => {
      container.classList.toggle('hidden');
      toggleIcon.textContent = container.classList.contains('hidden') ? '▼' : '▲';
    };
  }
  
  container.innerHTML = '';
  
  if (missed.length === 0) {
    container.innerHTML = `
      <div class="card text-center" style="padding: 2.5rem; border-color: rgba(16, 185, 129, 0.3); background: rgba(16, 185, 129, 0.05);">
        <div style="font-size: 3rem; margin-bottom: 0.5rem;">🎉</div>
        <h3 style="color: #10b981; margin-bottom: 0.5rem; font-size: 1.4rem;">Flawless Session!</h3>
        <p style="color: #cbd5e1; font-size: 1rem; margin: 0;">You answered all questions correctly. Keep up this level of precision!</p>
      </div>
    `;
    return;
  }
  
  const labels = ['A', 'B', 'C', 'D'];
  missed.forEach((r, idx) => {
    const card = document.createElement('div');
    card.className = 'review-question-card animate-slide-up';
    card.style.borderLeft = '4px solid #ef4444';
    
    const themeLabel = THEMES[r.theme]?.label || r.theme;
    
    let yourAnswerHtml = '';
    if (r.userAnswer === -1 || r.userAnswer === null || r.userAnswer === undefined) {
      yourAnswerHtml = `<span style="color:#ef4444; font-weight:600;">⚠️ Question skipped</span>`;
    } else {
      const userLetter = labels[r.userAnswer] || '';
      const userTxt = r.userAnswerText || (r.options && r.options[r.userAnswer]) || `Option ${userLetter}`;
      yourAnswerHtml = `<span style="font-weight:600; color:#ef4444;">(${userLetter}) ${userTxt}</span>`;
    }
    
    const corrLetter = labels[r.correctAnswer] !== undefined ? labels[r.correctAnswer] : '';
    const corrTxt = r.correctAnswerText || (r.options && r.options[r.correctAnswer]) || `Option ${corrLetter}`;
    const corrAnswerHtml = `<span style="font-weight:600; color:#10b981;">(${corrLetter}) ${corrTxt}</span>`;
    
    card.innerHTML = `
      <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:1rem; flex-wrap:wrap; gap:0.5rem;">
        <span class="badge badge-violet" style="font-size:0.8rem; font-weight:600;">Part ${r.part || 5}</span>
        <span class="badge" style="font-size:0.8rem; background:rgba(255,255,255,0.08); color:#cbd5e1;">${themeLabel}</span>
      </div>
      
      <div style="font-size:1.08rem; font-weight:500; color:#f8fafc; line-height:1.6; margin-bottom:1.25rem; background:rgba(255,255,255,0.03); padding:1rem 1.25rem; border-radius:8px; border:1px solid rgba(255,255,255,0.07);">
        ${r.questionText}
      </div>
      
      <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(260px, 1fr)); gap:0.75rem; margin-bottom:1rem;">
        <div style="padding:0.85rem 1rem; border-radius:8px; background:rgba(239, 68, 68, 0.1); border:1px solid rgba(239, 68, 68, 0.35);">
          <div style="font-size:0.75rem; text-transform:uppercase; letter-spacing:0.5px; color:#ef4444; font-weight:700; margin-bottom:0.35rem;">❌ Your Answer</div>
          <div>${yourAnswerHtml}</div>
        </div>
        <div style="padding:0.85rem 1rem; border-radius:8px; background:rgba(16, 185, 129, 0.1); border:1px solid rgba(16, 185, 129, 0.35);">
          <div style="font-size:0.75rem; text-transform:uppercase; letter-spacing:0.5px; color:#10b981; font-weight:700; margin-bottom:0.35rem;">✅ Correct Answer</div>
          <div>${corrAnswerHtml}</div>
        </div>
      </div>
      
      <div style="padding:1rem 1.25rem; border-radius:8px; background:rgba(139, 92, 246, 0.1); border-left:3px solid #8b5cf6;">
        <div style="font-size:0.85rem; font-weight:700; color:#a78bfa; margin-bottom:0.35rem; display:flex; align-items:center; gap:0.4rem;">
          <span>💡</span> <span>Grammar Rule & Explanation</span>
        </div>
        <div style="color:#e2e8f0; font-size:0.95rem; line-height:1.6;">
          ${r.explanation}
        </div>
      </div>
    `;
    container.appendChild(card);
  });
}

const drillBtn = document.getElementById('btn-drill');
if (drillBtn) {
  drillBtn.addEventListener('click', () => {
    if (!session || !session.results) return;
    const missed = session.results.filter(r => !r.correct && r.userAnswer !== -1);
    const config = {
      mode: 'custom',
      parts: [...new Set(missed.map(r => r.part || 5))],
      themes: [],
      subtopics: [],
      timeMinutes: Math.max(5, Math.ceil(missed.length * 45 / 60)),
      drillMistakes: true,
      missedQuestionIds: missed.map(r => r.questionId)
    };
    sessionStorage.setItem('toeic_quiz_config', JSON.stringify(config));
    window.location.href = 'quiz.html';
  });
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
