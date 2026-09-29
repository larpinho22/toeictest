import { getUser, saveSession } from './storage.js';
import { THEMES, questions, passages6, passages7 } from './data.js';

// DOM Elements
const timerBar = document.getElementById('timer-bar');
const timerBadge = document.getElementById('timer-badge');
const progressBar = document.getElementById('progress-bar');
const questionCounter = document.getElementById('question-counter');
const quizCard = document.getElementById('quiz-card');
const passageContainer = document.getElementById('passage-container');
const passageTitle = document.getElementById('passage-title');
const passageTextEl = document.getElementById('passage-text');
const togglePassageBtn = document.getElementById('toggle-passage');
const questionPartBadge = document.getElementById('question-part-badge');
const questionThemeBadge = document.getElementById('question-theme-badge');
const questionText = document.getElementById('question-text');
const optionsGrid = document.getElementById('options-grid');
const explanationBox = document.getElementById('explanation-box');
const explanationResult = document.getElementById('explanation-result');
const explanationText = document.getElementById('explanation-text');
const btnSkip = document.getElementById('btn-skip');
const btnPrev = document.getElementById('btn-prev');
const btnNext = document.getElementById('btn-next');
const finishContainer = document.getElementById('finish-container');
const btnFinish = document.getElementById('btn-finish');

// State
let config = null;
let items = [];
let currentIndex = 0;
const userAnswers = []; // array of {questionId, userAnswer, correct, theme, subtopic, part}
let pendingOption = null;
const questionConfirmed = [];
let timeRemaining = 0; // seconds
let timerInterval = null;

// Initialization
function init() {
  try {
    const user = getUser();
    if (!user) {
      window.location.href = 'index.html';
      return;
    }
    
    config = JSON.parse(sessionStorage.getItem('toeic_quiz_config') || 'null');
    if (!config) {
      window.location.href = 'selection.html';
      return;
    }
    
    // Update user chip in navbar
    document.getElementById('user-avatar').textContent = user.name[0].toUpperCase();
    document.getElementById('user-name').textContent = user.name;
    
    // Build question list
    items = buildQuestionList(config, questions, passages6, passages7);
    
    if (items.length === 0) {
      sessionStorage.setItem('toeic_selection_error', 'No questions match your selection. Try selecting more themes.');
      window.location.href = 'selection.html';
      return;
    }
    
    timeRemaining = config.timeMinutes * 60;
    
    // Event listeners
    btnNext.addEventListener('click', handleNextClick);
    btnPrev.addEventListener('click', goPrev);
    btnSkip.addEventListener('click', skipAnswer);
    btnFinish.addEventListener('click', finishQuiz);
    
    togglePassageBtn.addEventListener('click', () => {
      const isVisible = passageTextEl.style.display !== 'none';
      passageTextEl.style.display = isVisible ? 'none' : 'block';
      togglePassageBtn.textContent = isVisible ? 'Show passage ▼' : 'Hide passage ▲';
    });
    
    // Hide loading overlay
    const loadingEl = document.getElementById('quiz-loading');
    if (loadingEl) loadingEl.style.display = 'none';
    
    // Init timer and render first question
    startTimer();
    renderQuestion(0);
    
  } catch (err) {
    console.error('Quiz init error:', err);
    const loadingEl = document.getElementById('quiz-loading');
    if (loadingEl) {
      loadingEl.innerHTML = `
        <div style="text-align:center; color:var(--error);">
          <div style="font-size:3rem;">⚠️</div>
          <h2 style="margin:1rem 0;">Failed to load quiz</h2>
          <p style="color:var(--text-muted); margin-bottom:1.5rem;">${err.message}</p>
          <a href="selection.html" style="color:var(--accent-violet);">← Back to selection</a>
        </div>`;
    }
  }
}

// Fix for DOMContentLoaded race condition with large ES module imports:
// If data.js finishes loading after DOMContentLoaded fires, we call init() directly.
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}

// Helper functions

function shuffle(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

function buildQuestionList(config, questions, passages6, passages7) {
  // Returns flat array of "items" each being:
  // { questionData, passageText (or null), passageTitle (or null), indexInPassage, totalInPassage }
  
  const items = [];
  
  // Part 5
  if (config.parts.includes(5)) {
    const p5 = questions.filter(q => {
      if (config.drillMistakes) return config.missedQuestionIds.includes(q.id);
      if (config.themes && config.themes.length > 0 && !config.themes.includes(q.theme)) return false;
      if (config.subtopics && config.subtopics.length > 0 && !config.subtopics.includes(q.subtopic)) return false;
      return true;
    });
    shuffle(p5);
    items.push(...p5.map(q => ({ questionData: q, passageText: null, passageTitle: null, indexInPassage: 1, totalInPassage: 1 })));
  }
  
  // Part 6
  if (config.parts.includes(6)) {
    let p6passages = [...passages6];
    if (config.drillMistakes) {
      p6passages = p6passages.map(p => ({ ...p, questions: p.questions.filter(q => config.missedQuestionIds.includes(q.id)) })).filter(p => p.questions.length > 0);
    }
    shuffle(p6passages);
    p6passages.forEach(passage => {
      passage.questions.forEach((q, idx) => {
        items.push({ questionData: q, passageText: passage.text, passageTitle: passage.title, indexInPassage: idx + 1, totalInPassage: passage.questions.length });
      });
    });
  }
  
  // Part 7
  if (config.parts.includes(7)) {
    let p7passages = [...passages7];
    if (config.drillMistakes) {
      p7passages = p7passages.map(p => ({ ...p, questions: p.questions.filter(q => config.missedQuestionIds.includes(q.id)) })).filter(p => p.questions.length > 0);
    }
    shuffle(p7passages);
    p7passages.forEach(passage => {
      passage.questions.forEach((q, idx) => {
        items.push({ questionData: q, passageText: passage.text, passageTitle: passage.title, indexInPassage: idx + 1, totalInPassage: passage.questions.length });
      });
    });
  }
  
  // Limit by time budget
  const timeSeconds = config.timeMinutes * 60;
  let totalTime = 0;
  const limited = [];
  for (const item of items) {
    const qTime = item.questionData.part === 5 ? 35 : item.questionData.part === 6 ? 45 : 75;
    if (totalTime + qTime > timeSeconds && limited.length > 0) break;
    limited.push(item);
    totalTime += qTime;
  }
  
  return limited.length > 0 ? limited : items.slice(0, 10); // fallback
}

// Timer Logic

function startTimer() {
  timerInterval = setInterval(() => {
    timeRemaining--;
    updateTimerDisplay();
    if (timeRemaining <= 0) {
      clearInterval(timerInterval);
      finishQuiz();
    }
  }, 1000);
}

function updateTimerDisplay() {
  const min = Math.floor(timeRemaining / 60);
  const sec = timeRemaining % 60;
  const display = `⏱ ${String(min).padStart(2,'0')}:${String(sec).padStart(2,'0')}`;
  timerBadge.textContent = display;
  
  const pct = timeRemaining / (config.timeMinutes * 60);
  timerBar.style.width = (pct * 100) + '%';
  
  if (pct < 0.1) {
    timerBadge.classList.add('low');
    timerBar.classList.add('low');
  }
}

// Rendering Logic

function renderQuestion(index) {
  const item = items[index];
  const q = item.questionData;
  
  // Update progress
  progressBar.style.width = `${((index) / items.length) * 100}%`;
  questionCounter.textContent = `Question ${index + 1} / ${items.length}`;
  
  // Part badge
  questionPartBadge.textContent = `Part ${q.part}`;
  questionThemeBadge.textContent = (THEMES && THEMES[q.theme]?.label) || q.theme;
  
  // Passage
  if (item.passageText) {
    passageContainer.classList.remove('hidden');
    passageTitle.textContent = item.passageTitle || 'Reading Passage';
    
    // For Part 6: highlight current blank in passage text
    let passageHtml = item.passageText;
    if (q.part === 6) {
      // Highlight current blank using simple string replace (avoids regex escaping issues)
      if (q.blank) {
        const placeholder = '[' + q.blank + ']';
        const highlighted = '<mark style="background:rgba(139,92,246,0.35); color:var(--accent-violet-light); padding:2px 6px; border-radius:4px; font-weight:600;">[' + q.blank + ']</mark>';
        passageHtml = passageHtml.split(placeholder).join(highlighted);
      }
    }
    passageTextEl.innerHTML = passageHtml.replace(/\n|\\n/g, '<br>');
  } else {
    passageContainer.classList.add('hidden');
  }
  
  // Question text
  questionText.innerHTML = q.question;
  
  // Options
  optionsGrid.innerHTML = '';
  const labels = ['A', 'B', 'C', 'D'];
  const isConfirmed = !!questionConfirmed[index];
  const isLast = (index === items.length - 1);
  
  q.options.forEach((opt, i) => {
    const btn = document.createElement('button');
    btn.className = 'option';
    btn.innerHTML = `<span class="option-prefix">${labels[i]}</span><span>${opt}</span>`;
    
    if (config.mode === 'toeic') {
      if (userAnswers[index]?.userAnswer === i) {
        btn.classList.add('selected');
      }
      btn.addEventListener('click', () => toggleOptionToeic(i));
    } else {
      // Custom mode
      if (isConfirmed) {
        btn.disabled = true;
        const ans = userAnswers[index];
        if (ans && ans.userAnswer === i) {
          btn.classList.add(ans.correct ? 'correct' : 'wrong');
        }
        if (ans && !ans.correct && i === q.answer) {
          btn.classList.add('reveal-correct');
        }
      } else {
        if (pendingOption === i) {
          btn.classList.add('selected');
        }
        btn.addEventListener('click', () => toggleOptionCustom(i));
      }
    }
    optionsGrid.appendChild(btn);
  });
  
  // Explanation & Buttons
  if (config.mode === 'toeic') {
    explanationBox.classList.remove('visible', 'is-correct', 'is-wrong');
    btnNext.disabled = false;
    btnNext.textContent = isLast ? 'Finish & See Results 🎯' : 'Next →';
    btnPrev.style.display = index > 0 ? 'block' : 'none';
  } else {
    // Custom mode
    btnPrev.style.display = index > 0 ? 'block' : 'none';
    if (isConfirmed) {
      const ans = userAnswers[index];
      explanationBox.classList.add('visible');
      explanationBox.classList.remove('is-correct', 'is-wrong');
      explanationBox.classList.add(ans && ans.correct ? 'is-correct' : 'is-wrong');
      explanationResult.textContent = ans && ans.userAnswer === -1 ? '⏭ Skipped' : (ans && ans.correct ? '✅ Correct!' : '❌ Incorrect');
      explanationText.innerHTML = q.explanation;
      btnNext.disabled = false;
      btnNext.textContent = isLast ? 'Finish & See Results 🎯' : 'Next Question →';
    } else {
      explanationBox.classList.remove('visible', 'is-correct', 'is-wrong');
      btnNext.disabled = (pendingOption === null);
      btnNext.textContent = 'Check Answer ✓';
    }
  }
  
  // Hide separate finish container since btnNext handles finishing
  finishContainer.style.display = 'none';
  btnNext.style.display = 'block';
  btnSkip.style.display = 'block';
  
  // Animate card
  quizCard.classList.remove('animate-fade-in');
  void quizCard.offsetWidth; // trigger reflow
  quizCard.classList.add('animate-fade-in');
}

// Option Interaction Logic

function toggleOptionToeic(optionIndex) {
  const q = items[currentIndex].questionData;
  const options = optionsGrid.querySelectorAll('.option');
  
  if (userAnswers[currentIndex]?.userAnswer === optionIndex) {
    // Deselect
    delete userAnswers[currentIndex];
    options[optionIndex].classList.remove('selected');
  } else {
    // Select this option
    options.forEach(opt => opt.classList.remove('selected'));
    options[optionIndex].classList.add('selected');
    userAnswers[currentIndex] = {
      questionId: q.id,
      userAnswer: optionIndex,
      correct: optionIndex === q.answer,
      theme: q.theme,
      subtopic: q.subtopic,
      part: q.part
    };
  }
}

function toggleOptionCustom(optionIndex) {
  if (questionConfirmed[currentIndex]) return;
  const options = optionsGrid.querySelectorAll('.option');
  
  if (pendingOption === optionIndex) {
    // Deselect!
    pendingOption = null;
    options[optionIndex].classList.remove('selected');
    btnNext.disabled = true;
  } else {
    // Select option
    options.forEach(opt => opt.classList.remove('selected'));
    options[optionIndex].classList.add('selected');
    pendingOption = optionIndex;
    btnNext.disabled = false;
  }
}

function confirmCustomAnswer() {
  if (pendingOption === null) return;
  const q = items[currentIndex].questionData;
  const correct = pendingOption === q.answer;
  const isLast = (currentIndex === items.length - 1);
  
  userAnswers[currentIndex] = {
    questionId: q.id,
    userAnswer: pendingOption,
    correct,
    theme: q.theme,
    subtopic: q.subtopic,
    part: q.part
  };
  questionConfirmed[currentIndex] = true;
  
  // Visual feedback
  const options = optionsGrid.querySelectorAll('.option');
  options.forEach((opt, i) => {
    opt.disabled = true;
    if (i === pendingOption) {
      opt.classList.remove('selected');
      opt.classList.add(correct ? 'correct' : 'wrong');
    }
    if (!correct && i === q.answer) {
      opt.classList.add('reveal-correct');
    }
  });
  
  // Show explanation
  explanationBox.classList.add('visible');
  explanationBox.classList.remove('is-correct', 'is-wrong');
  explanationBox.classList.add(correct ? 'is-correct' : 'is-wrong');
  explanationResult.textContent = correct ? '✅ Correct!' : '❌ Incorrect';
  explanationText.innerHTML = q.explanation;
  
  // Transition button to Next
  btnNext.disabled = false;
  btnNext.textContent = isLast ? 'Finish & See Results 🎯' : 'Next Question →';
}

function handleNextClick() {
  const isLast = (currentIndex === items.length - 1);
  
  if (config.mode === 'toeic') {
    if (isLast) finishQuiz();
    else goNext();
  } else {
    // Custom mode
    if (!questionConfirmed[currentIndex]) {
      confirmCustomAnswer();
    } else {
      if (isLast) finishQuiz();
      else goNext();
    }
  }
}

function skipAnswer() {
  const q = items[currentIndex].questionData;
  const isLast = (currentIndex === items.length - 1);
  
  if (config.mode === 'toeic') {
    userAnswers[currentIndex] = {
      questionId: q.id,
      userAnswer: -1,
      correct: false,
      theme: q.theme,
      subtopic: q.subtopic,
      part: q.part
    };
    if (isLast) finishQuiz();
    else goNext();
  } else {
    // In Custom mode: show explanation for the skipped question
    userAnswers[currentIndex] = {
      questionId: q.id,
      userAnswer: -1,
      correct: false,
      theme: q.theme,
      subtopic: q.subtopic,
      part: q.part
    };
    questionConfirmed[currentIndex] = true;
    
    const options = optionsGrid.querySelectorAll('.option');
    options.forEach((opt, i) => {
      opt.disabled = true;
      if (i === q.answer) opt.classList.add('reveal-correct');
    });
    
    explanationBox.classList.add('visible');
    explanationBox.classList.remove('is-correct', 'is-wrong');
    explanationBox.classList.add('is-wrong');
    explanationResult.textContent = '⏭ Skipped';
    explanationText.innerHTML = q.explanation;
    
    btnNext.disabled = false;
    btnNext.textContent = isLast ? 'Finish & See Results 🎯' : 'Next Question →';
  }
}

function goNext() {
  if (currentIndex < items.length - 1) {
    currentIndex++;
    pendingOption = null;
    renderQuestion(currentIndex);
  }
}

function goPrev() {
  if (currentIndex > 0) {
    currentIndex--;
    pendingOption = null;
    renderQuestion(currentIndex);
  }
}

function finishQuiz() {
  clearInterval(timerInterval);
  
  const finalResults = items.map((item, i) => {
    const q = item.questionData;
    const ans = userAnswers[i];
    const uIdx = (ans && ans.userAnswer !== undefined && ans.userAnswer !== null) ? ans.userAnswer : -1;
    return {
      questionId: q.id,
      userAnswer: uIdx,
      userAnswerText: uIdx >= 0 && q.options && q.options[uIdx] ? q.options[uIdx] : null,
      correct: uIdx === q.answer,
      correctAnswer: q.answer,
      correctAnswerText: q.options ? q.options[q.answer] : '',
      questionText: q.question,
      options: q.options,
      explanation: q.explanation,
      theme: q.theme,
      subtopic: q.subtopic,
      part: q.part
    };
  });
  
  const correctCount = finalResults.filter(a => a.correct).length;
  const score = items.length > 0 ? Math.round((correctCount / items.length) * 100) : 0;
  
  const session = {
    id: Date.now().toString(),
    date: new Date().toISOString(),
    mode: config.mode,
    durationMinutes: config.timeMinutes,
    actualDurationSeconds: (config.timeMinutes * 60) - timeRemaining,
    score,
    totalQ: items.length,
    correctQ: correctCount,
    parts: config.parts,
    themes: config.themes,
    subtopics: config.subtopics,
    results: finalResults
  };
  
  saveSession(session);
  sessionStorage.setItem('toeic_last_session_id', session.id);
  window.location.href = 'results.html';
}
