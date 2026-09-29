// Keys
const KEYS = {
  USER: 'toeic_user',
  SESSIONS: 'toeic_sessions',
};

// ============================================================================
// USER API
// ============================================================================

export function getUser() {
  try {
    const data = localStorage.getItem(KEYS.USER);
    return data ? JSON.parse(data) : null;
  } catch (e) {
    console.error("Failed to parse user data:", e);
    return null;
  }
}

export function setUser(name) {
  try {
    const user = { name };
    localStorage.setItem(KEYS.USER, JSON.stringify(user));
    return user;
  } catch (e) {
    console.error("Failed to save user data:", e);
    return null;
  }
}

export function clearUser() {
  localStorage.removeItem(KEYS.USER);
}

// ============================================================================
// SESSIONS API
// ============================================================================

export function getSessions() {
  try {
    const data = localStorage.getItem(KEYS.SESSIONS);
    if (!data) return [];
    
    const sessions = JSON.parse(data);
    // Return newest first
    return sessions.sort((a, b) => new Date(b.date) - new Date(a.date));
  } catch (e) {
    console.error("Failed to parse sessions data:", e);
    return [];
  }
}

export function getSessionById(id) {
  const sessions = getSessions();
  return sessions.find(s => s.id === id) || null;
}

export function saveSession(session) {
  try {
    const sessions = getSessions();
    sessions.push(session);
    localStorage.setItem(KEYS.SESSIONS, JSON.stringify(sessions));
    return true;
  } catch (e) {
    console.error("Failed to save session:", e);
    return false;
  }
}

export function clearSessions() {
  localStorage.removeItem(KEYS.SESSIONS);
}

// ============================================================================
// COMPUTED STATS API
// ============================================================================

export function getGlobalStats() {
  const sessions = getSessions();
  
  if (sessions.length === 0) {
    return {
      totalSessions: 0,
      avgScore: 0,
      bestScore: 0,
      totalQAnswered: 0,
      streak: 0,
      lastSessionDate: null
    };
  }
  
  let totalScore = 0;
  let bestScore = 0;
  let totalQAnswered = 0;
  
  sessions.forEach(s => {
    totalScore += s.score;
    if (s.score > bestScore) bestScore = s.score;
    totalQAnswered += (s.results ? s.results.length : s.totalQ);
  });
  
  const avgScore = Math.round(totalScore / sessions.length);
  const streak = calculateStreak(sessions);
  const lastSessionDate = sessions.length > 0 ? sessions[0].date : null;
  
  return {
    totalSessions: sessions.length,
    avgScore,
    bestScore,
    totalQAnswered,
    streak,
    lastSessionDate
  };
}

export function getThemeStats() {
  const sessions = getSessions();
  const themeStats = {};
  
  sessions.forEach(s => {
    if (!s.results) return;
    
    s.results.forEach(r => {
      // Skip if not answered
      if (r.userAnswer === -1) return;
      
      const theme = r.theme;
      const subtopic = r.subtopic;
      
      if (!themeStats[theme]) {
        themeStats[theme] = { correct: 0, total: 0, pct: 0, subtopics: {} };
      }
      
      themeStats[theme].total++;
      if (r.correct) themeStats[theme].correct++;
      
      themeStats[theme].pct = Math.round((themeStats[theme].correct / themeStats[theme].total) * 100);
      
      if (subtopic) {
        if (!themeStats[theme].subtopics[subtopic]) {
          themeStats[theme].subtopics[subtopic] = { correct: 0, total: 0, pct: 0 };
        }
        
        themeStats[theme].subtopics[subtopic].total++;
        if (r.correct) themeStats[theme].subtopics[subtopic].correct++;
        
        themeStats[theme].subtopics[subtopic].pct = Math.round(
          (themeStats[theme].subtopics[subtopic].correct / themeStats[theme].subtopics[subtopic].total) * 100
        );
      }
    });
  });
  
  return themeStats;
}

export function getPartStats() {
  const sessions = getSessions();
  const partStats = {};
  
  sessions.forEach(s => {
    if (!s.results) return;
    
    s.results.forEach(r => {
      // Skip if not answered
      if (r.userAnswer === -1) return;
      
      const part = r.part;
      
      if (!partStats[part]) {
        partStats[part] = { correct: 0, total: 0, pct: 0 };
      }
      
      partStats[part].total++;
      if (r.correct) partStats[part].correct++;
      
      partStats[part].pct = Math.round((partStats[part].correct / partStats[part].total) * 100);
    });
  });
  
  return partStats;
}

export function getScoreTrend() {
  const sessions = getSessions();
  // Get last 20 sessions, reverse so it's chronological (oldest to newest)
  return sessions
    .slice(0, 20)
    .reverse()
    .map(s => ({
      date: s.date,
      score: s.score
    }));
}

// ============================================================================
// HELPERS
// ============================================================================

function calculateStreak(sessions) {
  if (!sessions || sessions.length === 0) return 0;
  
  // Extract unique dates as YYYY-MM-DD
  const dateStrings = sessions.map(s => {
    const d = new Date(s.date);
    return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
  });
  
  const uniqueDates = [...new Set(dateStrings)].sort((a, b) => new Date(b) - new Date(a));
  
  if (uniqueDates.length === 0) return 0;
  
  const today = new Date();
  const todayStr = `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, '0')}-${String(today.getDate()).padStart(2, '0')}`;
  
  const yesterday = new Date(today);
  yesterday.setDate(yesterday.getDate() - 1);
  const yesterdayStr = `${yesterday.getFullYear()}-${String(yesterday.getMonth() + 1).padStart(2, '0')}-${String(yesterday.getDate()).padStart(2, '0')}`;
  
  // If the last session is neither today nor yesterday, streak is broken
  if (uniqueDates[0] !== todayStr && uniqueDates[0] !== yesterdayStr) {
    return 0;
  }
  
  let streak = 1;
  let currentDate = new Date(uniqueDates[0]);
  
  for (let i = 1; i < uniqueDates.length; i++) {
    const expectedPrevDate = new Date(currentDate);
    expectedPrevDate.setDate(expectedPrevDate.getDate() - 1);
    const expectedStr = `${expectedPrevDate.getFullYear()}-${String(expectedPrevDate.getMonth() + 1).padStart(2, '0')}-${String(expectedPrevDate.getDate()).padStart(2, '0')}`;
    
    if (uniqueDates[i] === expectedStr) {
      streak++;
      currentDate = expectedPrevDate;
    } else {
      break;
    }
  }
  
  return streak;
}
