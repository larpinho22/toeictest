import { getUser } from './storage.js';
import { EXAM_MODULES, EXAM_QUESTIONS, CHEATSHEET } from './exam-data.js';

// App state
let currentModuleId = null;
let isMockExam = false;
let quizQuestions = [];
let currentIndex = 0;
let userAnswers = []; // { question, userInput, isCorrect }
let hasAnsweredCurrent = false;

function init() {
  const user = getUser();
  if (!user) {
    window.location.href = 'index.html';
    return;
  }
  
  const navUser = document.getElementById('nav-username');
  if (navUser) navUser.textContent = user.name || 'User';
  const avatar = document.querySelector('.user-avatar');
  if (avatar && user.name) avatar.textContent = user.name.charAt(0).toUpperCase();

  renderModulesGrid();
  populateCheatsheet();
  setupEventListeners();
}

// ============================================================================
// VIEW 1: MODULES GRID
// ============================================================================
function renderModulesGrid() {
  const grid = document.getElementById('modules-grid');
  if (!grid) return;
  grid.innerHTML = '';

  Object.values(EXAM_MODULES).forEach(mod => {
    const questionsCount = EXAM_QUESTIONS.filter(q => q.moduleId === mod.id).length;
    
    const card = document.createElement('div');
    card.className = 'module-card';
    card.innerHTML = `
      <div>
        <div style="display:flex; justify-content:space-between; align-items:flex-start; margin-bottom:0.75rem;">
          <span style="font-size: 2rem;">${mod.icon}</span>
          <span class="badge badge-violet">${mod.badge}</span>
        </div>
        <h3 style="font-size: 1.15rem; color: #f8fafc; margin-bottom: 0.5rem;">${mod.title}</h3>
        <p style="color: var(--text-secondary); font-size: 0.875rem; line-height: 1.5; margin-bottom: 1rem;">
          ${mod.description}
        </p>
      </div>
      <div class="flex-between" style="border-top: 1px solid var(--border); padding-top: 0.75rem; margin-top: auto;">
        <span style="font-size: 0.8rem; color: var(--text-muted); font-weight: 500;">
          📝 ${questionsCount} questions
        </span>
        <span style="font-size: 0.85rem; color: var(--accent-cyan-light); font-weight: 600;">
          S'entraîner →
        </span>
      </div>
    `;
    card.addEventListener('click', () => startQuiz(mod.id, false));
    grid.appendChild(card);
  });
}

// ============================================================================
// QUIZ ENGINE
// ============================================================================
function startQuiz(moduleId, isMock = false) {
  currentModuleId = moduleId;
  isMockExam = isMock;
  userAnswers = [];
  currentIndex = 0;
  hasAnsweredCurrent = false;

  if (isMock) {
    // Pick 20 questions across all modules
    const allShuffled = shuffle([...EXAM_QUESTIONS]);
    quizQuestions = allShuffled.slice(0, 20);
  } else {
    // Pick all questions from selected module
    const filtered = EXAM_QUESTIONS.filter(q => q.moduleId === moduleId);
    quizQuestions = shuffle([...filtered]);
  }

  if (quizQuestions.length === 0) {
    alert("Aucune question trouvée pour ce module.");
    return;
  }

  // Switch Views
  document.getElementById('view-selector').classList.add('hidden');
  document.getElementById('view-results').classList.add('hidden');
  document.getElementById('view-quiz').classList.remove('hidden');

  const badge = document.getElementById('quiz-module-badge');
  if (badge) {
    badge.textContent = isMock ? '🏆 Examen Blanc (20Q)' : (EXAM_MODULES[moduleId]?.title || 'Module');
  }

  renderQuestion(0);
}

function renderQuestion(index) {
  currentIndex = index;
  hasAnsweredCurrent = false;
  const q = quizQuestions[index];

  // Update progress
  const progressPct = ((index) / quizQuestions.length) * 100;
  document.getElementById('quiz-progress-bar').style.width = `${progressPct}%`;
  document.getElementById('quiz-counter').textContent = `Question ${index + 1} / ${quizQuestions.length}`;
  
  const correctSoFar = userAnswers.filter(a => a.isCorrect).length;
  document.getElementById('quiz-score-live').textContent = `Score : ${correctSoFar} / ${userAnswers.length}`;

  // Question Prompt
  document.getElementById('quiz-prompt').innerHTML = q.prompt;

  // Hint Box
  const hintBox = document.getElementById('quiz-hint-box');
  const hintText = document.getElementById('quiz-hint-text');
  if (q.hint) {
    hintText.textContent = q.hint;
    document.getElementById('btn-show-hint').classList.remove('hidden');
  } else {
    document.getElementById('btn-show-hint').classList.add('hidden');
  }
  hintBox.classList.add('hidden');

  // Input Field
  const input = document.getElementById('quiz-input');
  input.value = '';
  input.disabled = false;
  input.focus();

  // Reset Feedback Area
  document.getElementById('quiz-feedback').classList.add('hidden');
  document.getElementById('btn-submit-answer').disabled = false;
  document.getElementById('btn-skip-question').disabled = false;
}

function normalize(str) {
  if (!str) return '';
  return str
    .toLowerCase()
    .trim()
    .replace(/[.,\/#!$%\^&\*;:{}=\-_`~()?"']/g, ' ') // replace punctuation with space
    .replace(/\s+/g, ' ')                           // collapse multiple spaces
    .trim();
}

function validateAnswer(userInput, validAnswers) {
  const normUser = normalize(userInput);
  if (!normUser) return false;

  return validAnswers.some(ans => {
    const normAns = normalize(ans);
    if (normUser === normAns) return true;
    
    // Check if user omitted "to " for verbs (e.g., "claim" instead of "to claim")
    if (normAns.startsWith('to ') && normUser === normAns.substring(3)) return true;
    if (normUser.startsWith('to ') && normUser.substring(3) === normAns) return true;
    
    // Check with/without "by [agent]" if sentence contains "by"
    const ansWithoutBy = normAns.replace(/\s+by\s+[a-z\s]+$/i, '').trim();
    if (normUser === ansWithoutBy) return true;

    return false;
  });
}

function submitAnswer() {
  if (hasAnsweredCurrent) {
    nextQuestion();
    return;
  }

  const input = document.getElementById('quiz-input');
  const rawInput = input.value.trim();
  if (!rawInput) {
    input.focus();
    return;
  }

  hasAnsweredCurrent = true;
  const q = quizQuestions[currentIndex];
  const isCorrect = validateAnswer(rawInput, q.answers);

  userAnswers[currentIndex] = {
    question: q,
    userInput: rawInput,
    isCorrect
  };

  input.disabled = true;
  document.getElementById('btn-submit-answer').disabled = true;
  document.getElementById('btn-skip-question').disabled = true;

  // Show Feedback
  const feedbackContainer = document.getElementById('quiz-feedback');
  const banner = document.getElementById('feedback-banner');
  const header = document.getElementById('feedback-header');
  const expected = document.getElementById('feedback-expected');
  const explanation = document.getElementById('feedback-explanation');

  feedbackContainer.classList.remove('hidden');
  banner.className = `feedback-banner ${isCorrect ? 'correct' : 'incorrect'}`;

  if (isCorrect) {
    header.innerHTML = '🎉 Exactement ! Excellente réponse.';
    header.style.color = '#10b981';
    expected.innerHTML = '';
  } else {
    header.innerHTML = '❌ Pas tout à fait.';
    header.style.color = '#ef4444';
    expected.innerHTML = `<strong>Réponse attendue :</strong> <span style="color:#10b981; font-weight:700;">${q.answers[0]}</span>`;
  }

  explanation.innerHTML = `<strong>💡 Règle / Explication :</strong> ${q.explanation}`;

  const nextBtn = document.getElementById('btn-next-question');
  const isLast = (currentIndex === quizQuestions.length - 1);
  nextBtn.textContent = isLast ? 'Voir le Bilan Final 🎯' : 'Question suivante →';
  nextBtn.focus();
}

function skipQuestion() {
  if (hasAnsweredCurrent) return;
  hasAnsweredCurrent = true;

  const q = quizQuestions[currentIndex];
  userAnswers[currentIndex] = {
    question: q,
    userInput: '(Passée)',
    isCorrect: false
  };

  const input = document.getElementById('quiz-input');
  input.disabled = true;
  document.getElementById('btn-submit-answer').disabled = true;
  document.getElementById('btn-skip-question').disabled = true;

  const feedbackContainer = document.getElementById('quiz-feedback');
  const banner = document.getElementById('feedback-banner');
  const header = document.getElementById('feedback-header');
  const expected = document.getElementById('feedback-expected');
  const explanation = document.getElementById('feedback-explanation');

  feedbackContainer.classList.remove('hidden');
  banner.className = 'feedback-banner incorrect';
  header.innerHTML = '⚠️ Question passée.';
  header.style.color = '#f59e0b';
  expected.innerHTML = `<strong>Réponse attendue :</strong> <span style="color:#10b981; font-weight:700;">${q.answers[0]}</span>`;
  explanation.innerHTML = `<strong>💡 Règle / Explication :</strong> ${q.explanation}`;

  const nextBtn = document.getElementById('btn-next-question');
  const isLast = (currentIndex === quizQuestions.length - 1);
  nextBtn.textContent = isLast ? 'Voir le Bilan Final 🎯' : 'Question suivante →';
  nextBtn.focus();
}

function nextQuestion() {
  if (currentIndex < quizQuestions.length - 1) {
    renderQuestion(currentIndex + 1);
  } else {
    finishExam();
  }
}

// ============================================================================
// VIEW 3: RESULTS SUMMARY
// ============================================================================
function finishExam() {
  document.getElementById('view-quiz').classList.add('hidden');
  document.getElementById('view-results').classList.remove('hidden');

  const total = quizQuestions.length;
  const correctCount = userAnswers.filter(a => a.isCorrect).length;
  const grade20 = Math.round((correctCount / total) * 20);
  const pct = Math.round((correctCount / total) * 100);

  document.getElementById('results-grade').textContent = `${grade20}/20`;
  document.getElementById('results-pct').textContent = `${pct}% (${correctCount}/${total} correctes)`;

  const iconEl = document.getElementById('results-icon');
  const titleEl = document.getElementById('results-title');
  const subtitleEl = document.getElementById('results-subtitle');
  const badgeContainer = document.getElementById('results-badge');
  badgeContainer.innerHTML = '';

  if (grade20 >= 16) {
    iconEl.textContent = '🏆';
    titleEl.textContent = 'Performance Remarquable !';
    subtitleEl.textContent = 'Tu maîtrises parfaitement ces notions pour ton partiel.';
    badgeContainer.innerHTML = '<span class="badge badge-green" style="font-size:1rem; padding:0.4rem 1rem;">🌟 Très Bien / Prêt pour le partiel</span>';
  } else if (grade20 >= 12) {
    iconEl.textContent = '👍';
    titleEl.textContent = 'Bon Travail !';
    subtitleEl.textContent = 'Des bases solides, encore quelques détails à peaufiner ci-dessous.';
    badgeContainer.innerHTML = '<span class="badge badge-cyan" style="font-size:1rem; padding:0.4rem 1rem;">📈 Assez Bien / Bon niveau</span>';
  } else {
    iconEl.textContent = '💪';
    titleEl.textContent = 'Continue de t\'entraîner !';
    subtitleEl.textContent = 'Révise les erreurs ci-dessous et consulte la fiche mémo pour consolider tes acquis.';
    badgeContainer.innerHTML = '<span class="badge badge-red" style="font-size:1rem; padding:0.4rem 1rem;">⚠️ À réviser avant l\'examen</span>';
  }

  // Detailed Review List
  const list = document.getElementById('results-questions-list');
  list.innerHTML = '';

  userAnswers.forEach((ans, idx) => {
    const item = document.createElement('div');
    item.className = 'card';
    item.style.borderLeft = ans.isCorrect ? '4px solid #10b981' : '4px solid #ef4444';
    item.style.padding = '1.25rem 1.5rem';

    item.innerHTML = `
      <div class="flex-between mb-2" style="flex-wrap:wrap; gap:0.5rem;">
        <span style="font-weight:700; color:#cbd5e1; font-size:0.85rem;">Question ${idx + 1}</span>
        <span class="badge" style="font-size:0.8rem; background:${ans.isCorrect ? 'rgba(16,185,129,0.15)' : 'rgba(239,68,68,0.15)'}; color:${ans.isCorrect ? '#10b981' : '#ef4444'};">
          ${ans.isCorrect ? '✅ Correct' : '❌ Erreur'}
        </span>
      </div>
      <div style="font-size:1.05rem; font-weight:500; color:#f8fafc; line-height:1.5; margin-bottom:1rem;">
        ${ans.question.prompt}
      </div>
      <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(240px, 1fr)); gap:0.75rem; margin-bottom:0.75rem;">
        <div style="padding:0.6rem 0.9rem; border-radius:6px; background:${ans.isCorrect ? 'rgba(16,185,129,0.08)' : 'rgba(239,68,68,0.08)'}; border:1px solid ${ans.isCorrect ? 'rgba(16,185,129,0.25)' : 'rgba(239,68,68,0.25)'};">
          <div style="font-size:0.75rem; font-weight:700; color:${ans.isCorrect ? '#10b981' : '#ef4444'}; text-transform:uppercase;">Ta réponse :</div>
          <div style="font-weight:600; color:#f8fafc; font-size:0.95rem;">${ans.userInput || '(Vide)'}</div>
        </div>
        <div style="padding:0.6rem 0.9rem; border-radius:6px; background:rgba(16,185,129,0.08); border:1px solid rgba(16,185,129,0.25);">
          <div style="font-size:0.75rem; font-weight:700; color:#10b981; text-transform:uppercase;">Réponse attendue :</div>
          <div style="font-weight:600; color:#10b981; font-size:0.95rem;">${ans.question.answers[0]}</div>
        </div>
      </div>
      <div style="font-size:0.9rem; color:#cbd5e1; background:rgba(255,255,255,0.03); padding:0.75rem 1rem; border-radius:6px;">
        💡 ${ans.question.explanation}
      </div>
    `;
    list.appendChild(item);
  });
}

// ============================================================================
// CHEATSHEET MODAL
// ============================================================================
function populateCheatsheet() {
  // Liar Liar
  const liarTbody = document.getElementById('cheat-liar-tbody');
  if (liarTbody) {
    liarTbody.innerHTML = CHEATSHEET.liarLiar.map(item => `
      <tr>
        <td style="font-weight:700; color:#a78bfa;">${item.word}</td>
        <td style="color:#cbd5e1;">${item.def}</td>
      </tr>
    `).join('');
  }

  // Translations
  const transTbody = document.getElementById('cheat-trans-tbody');
  if (transTbody) {
    transTbody.innerHTML = CHEATSHEET.translations.map(item => `
      <tr>
        <td style="color:#f8fafc; font-weight:500;">${item.fr}</td>
        <td style="color:#22d3ee; font-weight:600;">${item.en}</td>
      </tr>
    `).join('');
  }

  // Soft Skills
  const skillsTbody = document.getElementById('cheat-skills-tbody');
  if (skillsTbody) {
    skillsTbody.innerHTML = CHEATSHEET.softSkills.map(item => `
      <tr>
        <td style="color:#f8fafc; font-weight:600;">${item.activity}</td>
        <td style="color:#f59e0b; font-weight:500;">${item.skills}</td>
      </tr>
    `).join('');
  }

  // Tenses
  const tensesTbody = document.getElementById('cheat-tenses-tbody');
  if (tensesTbody) {
    tensesTbody.innerHTML = CHEATSHEET.tenses.map(item => `
      <tr>
        <td style="color:#10b981; font-weight:700;">${item.tense}</td>
        <td style="color:#cbd5e1;">${item.usage}</td>
        <td style="color:#a78bfa; font-family:'Fira Code', monospace; font-size:0.85rem;">${item.markers}</td>
      </tr>
    `).join('');
  }

  // Passive
  const passiveTbody = document.getElementById('cheat-passive-tbody');
  if (passiveTbody) {
    passiveTbody.innerHTML = CHEATSHEET.passiveVoice.map(item => `
      <tr>
        <td style="color:#ec4899; font-weight:700;">${item.rule}</td>
        <td style="color:#cbd5e1;">${item.explanation}</td>
      </tr>
    `).join('');
  }
}

function openCheatsheet() {
  document.getElementById('cheatsheet-modal').classList.add('active');
}

function closeCheatsheet() {
  document.getElementById('cheatsheet-modal').classList.remove('active');
}

// ============================================================================
// EVENT LISTENERS & SETUP
// ============================================================================
function setupEventListeners() {
  // Cheatsheet modal
  const openHero = document.getElementById('btn-open-cheatsheet-hero');
  if (openHero) openHero.addEventListener('click', openCheatsheet);

  const openQuiz = document.getElementById('btn-open-cheatsheet-quiz');
  if (openQuiz) openQuiz.addEventListener('click', openCheatsheet);

  const closeBtn = document.getElementById('btn-close-cheatsheet');
  if (closeBtn) closeBtn.addEventListener('click', closeCheatsheet);

  const closeBottom = document.getElementById('btn-close-cheatsheet-bottom');
  if (closeBottom) closeBottom.addEventListener('click', closeCheatsheet);

  const modal = document.getElementById('cheatsheet-modal');
  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) closeCheatsheet();
    });
  }

  // Mock Exam button
  const mockBtn = document.getElementById('btn-start-mock-exam');
  if (mockBtn) {
    mockBtn.addEventListener('click', () => startQuiz(null, true));
  }

  // Form submit & Keyboard Enter
  const quizForm = document.getElementById('quiz-form');
  if (quizForm) {
    quizForm.addEventListener('submit', (e) => {
      e.preventDefault();
      submitAnswer();
    });
  }

  const nextBtn = document.getElementById('btn-next-question');
  if (nextBtn) nextBtn.addEventListener('click', nextQuestion);

  const skipBtn = document.getElementById('btn-skip-question');
  if (skipBtn) skipBtn.addEventListener('click', skipQuestion);

  const hintBtn = document.getElementById('btn-show-hint');
  if (hintBtn) {
    hintBtn.addEventListener('click', () => {
      document.getElementById('quiz-hint-box').classList.remove('hidden');
    });
  }

  const quitBtn = document.getElementById('btn-quit-quiz');
  if (quitBtn) {
    quitBtn.addEventListener('click', () => {
      if (confirm('Voulez-vous vraiment quitter ce module et revenir au menu ?')) {
        document.getElementById('view-quiz').classList.add('hidden');
        document.getElementById('view-selector').classList.remove('hidden');
      }
    });
  }

  const retryBtn = document.getElementById('btn-retry-module');
  if (retryBtn) {
    retryBtn.addEventListener('click', () => {
      startQuiz(currentModuleId, isMockExam);
    });
  }

  const backBtn = document.getElementById('btn-back-to-modules');
  if (backBtn) {
    backBtn.addEventListener('click', () => {
      document.getElementById('view-results').classList.add('hidden');
      document.getElementById('view-selector').classList.remove('hidden');
    });
  }

  // Global keydown for Enter and Escape
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeCheatsheet();
    }
  });
}

function shuffle(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
