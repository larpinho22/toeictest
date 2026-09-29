import { getUser, setUser, clearUser, getGlobalStats, getSessions } from './storage.js'

function init() {
  const user = getUser()
  const modal = document.getElementById('pseudo-modal')
  
  if (!user) {
    showModal()
  } else {
    initPage(user)
  }

  const submitBtn = document.getElementById('pseudo-submit')
  const inputEl = document.getElementById('pseudo-input')
  const errorEl = document.getElementById('pseudo-error')

  function handleLogin() {
    const name = inputEl.value.trim()
    if (name.length < 2) {
      inputEl.classList.add('shake')
      errorEl.classList.remove('hidden')
      setTimeout(() => inputEl.classList.remove('shake'), 400)
      return
    }
    errorEl.classList.add('hidden')
    setUser(name)
    hideModal()
    initPage({ name })
  }

  submitBtn.addEventListener('click', handleLogin)
  inputEl.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') handleLogin()
  })

  // Dropdown
  const userChip = document.getElementById('user-chip')
  const userDropdown = document.getElementById('user-dropdown')
  const switchUserBtn = document.getElementById('btn-switch-user')

  userChip.addEventListener('click', (e) => {
    e.stopPropagation()
    userDropdown.classList.toggle('hidden')
  })

  document.addEventListener('click', () => {
    userDropdown.classList.add('hidden')
  })

  switchUserBtn.addEventListener('click', () => {
    clearUser()
    location.reload()
  })

  function showModal() {
    modal.classList.add('active')
    // Fallback if no CSS class handles this
    modal.style.display = 'flex';
  }

  function hideModal() {
    modal.classList.remove('active')
    // Fallback if no CSS class handles this
    modal.style.display = 'none';
  }
  
  function animateValue(obj, start, end, duration, formatter = (v) => v) {
    if (start === end) {
        obj.textContent = formatter(end);
        return;
    }
    let startTimestamp = null;
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      const current = Math.floor(progress * (end - start) + start);
      obj.textContent = formatter(current);
      if (progress < 1) {
        window.requestAnimationFrame(step);
      } else {
        obj.textContent = formatter(end);
      }
    };
    window.requestAnimationFrame(step);
  }

  function initPage(user) {
    // Update user chip
    document.getElementById('user-avatar').textContent = user.name.charAt(0).toUpperCase()
    document.getElementById('user-name').textContent = user.name

    const stats = getGlobalStats ? getGlobalStats() : { totalSessions: 0, avgScore: 0, bestScore: 0, totalQAnswered: 0, streak: 0 }
    
    // Animate stats
    if (stats.totalSessions > 0) {
      animateValue(document.getElementById('stat-sessions'), 0, stats.totalSessions, 1000)
      animateValue(document.getElementById('stat-avg'), 0, Math.round(stats.avgScore), 1000, v => `${v}%`)
      animateValue(document.getElementById('stat-best'), 0, Math.round(stats.bestScore), 1000, v => `${v}%`)
      animateValue(document.getElementById('stat-questions'), 0, stats.totalQAnswered, 1000)
    }

    if (stats.streak > 0) {
      const streakContainer = document.getElementById('streak-container')
      streakContainer.classList.remove('hidden')
      document.getElementById('streak-value').textContent = stats.streak
    }

    const sessions = getSessions() || []
    const recentSessions = sessions.slice(0, 3)
    const container = document.getElementById('recent-sessions-container')

    if (recentSessions.length > 0) {
      document.getElementById('view-all-link').classList.remove('hidden')
      container.innerHTML = ''
      recentSessions.forEach(session => {
        const d = new Date(session.date)
        const dateStr = `${d.toLocaleDateString()} ${d.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}`
        
        const card = document.createElement('div')
        card.className = 'card mb-4 flex-between'
        card.style.padding = '1rem';
        card.innerHTML = `
          <div>
            <div style="font-weight:600; margin-bottom:0.25rem;">${dateStr}</div>
            <span class="badge ${session.mode === 'toeic' ? 'badge-violet' : 'badge-cyan'}">
              ${session.mode === 'toeic' ? 'TOEIC Test' : 'Custom'}
            </span>
          </div>
          <div class="text-right">
            <div style="font-size:1.25rem; font-weight:700; color:${session.score >= 80 ? 'var(--success)' : (session.score >= 50 ? 'var(--warning)' : 'var(--error)')}">${Math.round(session.score)}%</div>
            <div class="text-muted" style="font-size:0.8rem;">${session.totalQ || 0} questions</div>
          </div>
        `
        container.appendChild(card)
      })
    }
  }
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
