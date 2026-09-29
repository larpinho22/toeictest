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

function levenshtein(a, b) {
  const m = a.length, n = b.length;
  const dp = Array.from({ length: m + 1 }, () => new Array(n + 1).fill(0));
  for (let i = 0; i <= m; i++) dp[i][0] = i;
  for (let j = 0; j <= n; j++) dp[0][j] = j;
  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (a[i - 1] === b[j - 1]) dp[i][j] = dp[i - 1][j - 1];
      else dp[i][j] = 1 + Math.min(dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1]);
    }
  }
  return dp[m][n];
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

const TENSE_AUXILIARIES = new Set(['have', 'has', 'had', 'is', 'are', 'am', 'was', 'were', 'will', 'be', 'been', 'being']);

function cleanParticles(str) {
  return str
    .replace(/^(to|the|a|an)\s+/i, '')
    .replace(/\s+(for|of|with|in|at|on|by|to|job|work|skills)$/i, '')
    .replace(/s$/i, '')
    .trim();
}

function validateAnswer(userInput, validAnswers, moduleId) {
  const normUser = normalize(userInput);
  if (!normUser) return { isCorrect: false };

  // 1. Direct or normalized match
  for (const ans of validAnswers) {
    const normAns = normalize(ans);
    if (normUser === normAns) {
      return { isCorrect: true, matchedAnswer: ans, type: 'exact' };
    }
  }

  // Handle Contractions for tenses (e.g. hasn't -> has not, didn't -> did not)
  const expandedUser = normUser
    .replace(/\bhasn t\b/g, 'has not')
    .replace(/\bhaven t\b/g, 'have not')
    .replace(/\bdidn t\b/g, 'did not')
    .replace(/\bisn t\b/g, 'is not')
    .replace(/\baren t\b/g, 'are not');

  for (const ans of validAnswers) {
    const normAns = normalize(ans);
    if (expandedUser === normAns) return { isCorrect: true, matchedAnswer: ans, type: 'exact' };
  }

  // FOR TENSE DRILLS: Strict tense checking!
  // Prepending or removing an auxiliary (have/has/had/was/is) changes the tense completely!
  if (moduleId === 'tenses') {
    const userWords = normUser.split(' ');
    
    for (const ans of validAnswers) {
      const normAns = normalize(ans);
      const ansWords = normAns.split(' ');
      
      const userAux = userWords.filter(w => TENSE_AUXILIARIES.has(w));
      const ansAux = ansWords.filter(w => TENSE_AUXILIARIES.has(w));
      
      // If one has an auxiliary (e.g. "have") and the other doesn't -> DIFFERENT TENSE -> REJECT!
      if (userAux.join(' ') !== ansAux.join(' ')) {
        continue;
      }
      
      // Allow minor spelling typo on main verb (e.g., submited vs submitted, instaled vs installed)
      const dist = levenshtein(normUser, normAns);
      if (dist <= 1 && normAns.length >= 5) {
        return { isCorrect: true, matchedAnswer: ans, type: 'typo', dist };
      }
    }

    return { isCorrect: false, reason: 'tense-mismatch' };
  }

  // 2. Preposition / particle stripped match (for non-tense questions)
  const strippedUser = cleanParticles(normUser);
  for (const ans of validAnswers) {
    const normAns = normalize(ans);
    const strippedAns = cleanParticles(normAns);
    if (strippedUser && strippedAns && strippedUser === strippedAns) {
      return { isCorrect: true, matchedAnswer: ans, type: 'particle' };
    }
  }

  // 3. Subphrase & containment matching (for non-tense questions)
  for (const ans of validAnswers) {
    const normAns = normalize(ans);
    const ansWords = normAns.split(' ');
    const userWords = normUser.split(' ');
    
    // Check if user added an auxiliary like "have", "was" - only allow if target allows it
    const userHasAux = userWords.some(w => TENSE_AUXILIARIES.has(w));
    const ansHasAux = ansWords.some(w => TENSE_AUXILIARIES.has(w));
    if (userHasAux && !ansHasAux) continue;

    // User input contains target keyword (e.g. user: "apply for", target: "apply")
    if (ansWords.length <= 2 && userWords.length <= 4) {
      if (normUser.startsWith(normAns + ' ') || normUser.endsWith(' ' + normAns)) {
        return { isCorrect: true, matchedAnswer: ans, type: 'subphrase' };
      }
    }

    // Target contains user input (e.g. user: "honours", target: "with honours")
    if (userWords.length >= 1 && ansWords.length <= 4) {
      if (ansWords.includes(normUser) || normAns.includes(normUser)) {
        return { isCorrect: true, matchedAnswer: ans, type: 'subphrase' };
      }
    }
  }

  // 4. Fuzzy Levenshtein match (typo tolerance)
  for (const ans of validAnswers) {
    const normAns = normalize(ans);
    const dist = levenshtein(normUser, normAns);
    const maxLen = Math.max(normUser.length, normAns.length);
    
    let allowedDist = 0;
    if (maxLen >= 14) allowedDist = 3;
    else if (maxLen >= 7) allowedDist = 2;
    else if (maxLen >= 4) allowedDist = 1;

    if (dist <= allowedDist) {
      return { isCorrect: true, matchedAnswer: ans, type: 'typo', dist };
    }

    const strippedAns = cleanParticles(normAns);
    if (strippedUser && strippedAns) {
      const strippedDist = levenshtein(strippedUser, strippedAns);
      const sMaxLen = Math.max(strippedUser.length, strippedAns.length);
      let sAllowed = sMaxLen >= 12 ? 3 : sMaxLen >= 7 ? 2 : sMaxLen >= 4 ? 1 : 0;
      if (strippedDist <= sAllowed) {
        return { isCorrect: true, matchedAnswer: ans, type: 'typo', dist: strippedDist };
      }
    }
  }

  // 5. Sentence similarity (for passive voice rewrites)
  for (const ans of validAnswers) {
    const normAns = normalize(ans);
    if (normAns.split(' ').length >= 5) {
      const uWords = normUser.split(' ');
      const aWords = normAns.split(' ');
      const matchWords = uWords.filter(w => aWords.includes(w));
      const overlapRatio = (matchWords.length * 2) / (uWords.length + aWords.length);
      const dist = levenshtein(normUser, normAns);
      const charSimilarity = 1 - (dist / Math.max(normUser.length, normAns.length));
      
      if (overlapRatio >= 0.78 || charSimilarity >= 0.83) {
        return { isCorrect: true, matchedAnswer: ans, type: 'near-sentence' };
      }
    }
  }

  return { isCorrect: false };
}

function diagnoseError(userInput, q) {
  const normUser = normalize(userInput);
  const userLower = (userInput || '').toLowerCase().trim();
  const qId = q.id;
  const mod = q.moduleId;

  // 1. Specific Question Diagnostics (high priority exact traps)
  if (qId === 'ts_010') {
    if (userLower.includes('have') || userLower.includes('has')) {
      return `Tu as utilisé le <strong>Present Perfect</strong> (<em>"${userInput}"</em>). Or, le marqueur <strong>"these days"</strong> (ces temps-ci) et l'adverbe <strong>"continuously"</strong> décrivent une <strong>tendance en pleine évolution en ce moment</strong>. En anglais, une situation qui évolue actuellement nécessite le <strong>Present Continuous</strong> (<em>are increasing</em>), et non le Present Perfect.`;
    }
    if (userLower.includes('increased')) {
      return `Tu as utilisé le <strong>Past Simple</strong> (<em>"${userInput}"</em>). Or, <strong>"these days"</strong> (ces jours-ci) ne fait pas référence au passé, mais à la période actuelle en cours : il faut donc le <strong>Present Continuous</strong> (<em>are increasing</em>).`;
    }
  }

  if (qId === 'ts_005') {
    if (userLower.includes('have') || userLower.includes('has')) {
      return `Tu as utilisé le <strong>Present Perfect</strong> (<em>"${userInput}"</em>). Or, la phrase précise <strong>"In 2022"</strong> : c'est une <strong>date passée précise et terminée</strong>. En anglais, il est strictement interdit d'utiliser le Present Perfect avec une date passée précise. Il faut obligatoirement utiliser le <strong>Past Simple</strong> (<em>installed</em>).`;
    }
    if (userLower.includes('installing')) {
      return `Tu as utilisé une forme continue, mais <strong>"In 2022"</strong> indique un événement ponctuel terminé dans le passé : il faut le <strong>Past Simple</strong> (<em>installed</em>).`;
    }
  }

  if (qId === 'ts_002') {
    if (userLower.includes('have') || userLower.includes('has')) {
      return `Tu as utilisé le <strong>Present Perfect</strong> (<em>"${userInput}"</em>). Or, la phrase contient le marqueur <strong>"yesterday"</strong> (hier). Une action passée datée exige obligatoirement le <strong>Past Simple</strong> (<em>submitted</em>).`;
    }
  }

  if (qId === 'ts_009') {
    if (userLower.includes('have') || userLower.includes('has')) {
      return `Tu as utilisé le <strong>Present Perfect</strong> (<em>"${userInput}"</em>). Or, le marqueur <strong>"Two weeks ago"</strong> (il y a deux semaines) exprime un moment révolu dans le passé : il faut le <strong>Past Simple</strong> (<em>repaired</em>).`;
    }
  }

  if (qId === 'ts_001') {
    if (!userLower.includes('is') && !userLower.includes('are') && userLower.includes('rise')) {
      return `Tu as mis du Present Simple (<em>"${userInput}"</em>). Or, <strong>"Look!"</strong> et <strong>"right now"</strong> indiquent une action en train de se produire sous nos yeux à cet instant précis : il faut utiliser le <strong>Present Continuous</strong> (<em>be + V-ing</em> → <em>is rising</em>).`;
    }
  }

  if (qId === 'ts_006') {
    if (!userLower.includes('has') && !userLower.includes('have')) {
      return `Tu as utilisé le <strong>Past Simple</strong> (<em>"${userInput}"</em>). Or, le marqueur <strong>"since last September"</strong> (depuis septembre dernier) indique une action qui a commencé dans le passé et <strong>qui continue aujourd'hui</strong>. En anglais, cette notion de continuité jusqu'au présent exige le <strong>Present Perfect</strong> (<em>has worked</em>).`;
    }
  }

  if (qId === 'ts_003') {
    if (!userLower.includes('have') && !userLower.includes('has')) {
      return `Tu as utilisé le <strong>Past Simple</strong> (<em>"${userInput}"</em>). Or, l'adverbe <strong>"already"</strong> (déjà) fait un bilan dans la période en cours ("this week") : il faut le <strong>Present Perfect</strong> (<em>have already tested</em>).`;
    }
  }

  if (qId === 'ts_007') {
    if (!userLower.includes('is') && !userLower.includes('are')) {
      return `Tu n'as pas utilisé la forme continue. Le marqueur <strong>"At the moment"</strong> (en ce moment) indique une activité temporaire en cours : il faut le <strong>Present Continuous</strong> (<em>is developing</em>).`;
    }
  }

  if (qId === 'cv_002') {
    if (userLower.includes('mention')) {
      return `Attention au faux-ami : <em>"mention"</em> ne se traduit pas par "mention" sur un CV anglophone ! L'équivalent officiel est <strong>"with honours"</strong> (UK) ou <strong>"with distinction"</strong>.`;
    }
  }

  if (qId === 'cv_001') {
    if (userLower.includes('bac')) {
      return `Attention : le diplôme du <em>Baccalauréat</em> ne se traduit pas par "baccalaureate" en anglais professionnel courant, mais par <strong>"A-levels"</strong> (au Royaume-Uni) ou <strong>"High school diploma"</strong> (aux USA).`;
    }
  }

  if (qId === 'cv_006') {
    if (userLower.includes('training') || userLower.includes('formation')) {
      return `Attention au faux-ami : un stage en entreprise se traduit par <strong>"internship"</strong> (US) ou <strong>"work placement"</strong> (UK). <em>"Training"</em> désigne une formation technique ou un entraînement, pas un poste de stagiaire.`;
    }
  }

  if (qId === 'cv_010' && userLower.includes('proficient')) {
    return `Attention : <em>"proficient"</em> signifie <strong>très bien maîtriser</strong>. Pour exprimer <strong>avoir les bases / des notions</strong>, on emploie l'expression <strong>"working knowledge of"</strong>.`;
  }

  if (qId === 'cv_011' && userLower.includes('working')) {
    return `Attention : <em>"working knowledge"</em> signifie seulement <strong>avoir les bases</strong>. Pour exprimer le fait de <strong>très bien maîtriser</strong> un logiciel, on emploie <strong>"proficient with"</strong>.`;
  }

  if (qId === 'wr_003' && userLower.includes('faithfully')) {
    return `Tu as confondu les formules de politesse : comme la lettre s'adresse à une personne nommée (<em>"Dear Mr. Smith"</em>), il faut obligatoirement conclure par <strong>"Yours sincerely"</strong>. <em>"Yours faithfully"</em> n'est utilisé que lorsque tu ne connais pas le nom (<em>"Dear Sir or Madam"</em>).`;
  }

  if (qId === 'wr_004' && userLower.includes('sincerely')) {
    return `Tu as confondu les formules de politesse : lorsque la lettre commence par <em>"Dear Sir or Madam"</em> (destinataire inconnu), la formule officielle britannique est <strong>"Yours faithfully"</strong>. <em>"Yours sincerely"</em> est réservé aux destinataires nommés.`;
  }

  if (mod === 'passive') {
    if (!userLower.includes('be') && !userLower.includes('is') && !userLower.includes('are') && !userLower.includes('was') && !userLower.includes('were') && !userLower.includes('been') && !userLower.includes('being')) {
      return `Tu as oublié l'auxiliaire <strong>BE</strong> ! Pour former la voix passive en anglais, la structure est obligatoirement : <strong>Sujet + BE (au bon temps) + Participe Passé</strong>.`;
    }
    if (qId === 'pv_002' && !userLower.includes('being')) {
      return `Attention au temps : la phrase active est au Present Continuous (<em>are monitoring</em>). À la voix passive, il ne faut pas oublier <strong>BEING</strong> → <em>are <strong>being</strong> monitored</em>.`;
    }
    if (qId === 'pv_003' && !userLower.includes('been')) {
      return `Attention au temps : la phrase active est au Present Perfect (<em>have installed</em>). À la voix passive, il faut insérer <strong>BEEN</strong> → <em>have <strong>been</strong> installed</em>.`;
    }
  }

  // 2. Generic heuristics for tenses
  if (mod === 'tenses') {
    const userWords = normUser.split(' ');
    const hasHaveHas = userWords.some(w => w === 'have' || w === 'has');
    const hasBe = userWords.some(w => w === 'is' || w === 'are' || w === 'am' || w === 'was' || w === 'were');
    const targetHasHave = q.answers.some(a => a.includes('have') || a.includes('has'));
    const targetHasBe = q.answers.some(a => a.includes('is') || a.includes('are') || a.includes('am') || a.includes('was') || a.includes('were'));

    if (hasHaveHas && !targetHasHave) {
      return `Tu as utilisé le <strong>Present Perfect</strong> (<em>"${userInput}"</em>). Or, cette phrase n'exprime pas un bilan ou une action liée au présent : regarde bien les marqueurs temporels dans l'énoncé.`;
    }
    if (!hasHaveHas && targetHasHave) {
      return `Tu n'as pas utilisé le <strong>Present Perfect</strong>. Les marqueurs de bilan ou de continuité (comme <em>since</em>, <em>for</em>, <em>already</em>, <em>yet</em>) exigent <strong>have/has + participe passé</strong>.`;
    }
    if (hasBe && !targetHasBe) {
      return `Tu as utilisé une forme continue (<em>"${userInput}"</em>). Or, cette phrase nécessite une action simple terminée ou habituelle, et non une action temporaire en cours.`;
    }
    if (!hasBe && targetHasBe) {
      return `Tu as oublié la forme continue (<em>be + V-ing</em>). L'énoncé indique une action se déroulant en ce moment ou une tendance actuelle.`;
    }
  }

  return null;
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
  const evalResult = validateAnswer(rawInput, q.answers, q.moduleId);
  const isCorrect = evalResult.isCorrect;
  const diagnostic = !isCorrect ? diagnoseError(rawInput, q) : null;

  userAnswers[currentIndex] = {
    question: q,
    userInput: rawInput,
    isCorrect,
    evalResult,
    diagnostic
  };

  input.disabled = true;
  document.getElementById('btn-submit-answer').disabled = true;
  document.getElementById('btn-skip-question').disabled = true;

  // Show Feedback
  const feedbackContainer = document.getElementById('quiz-feedback');
  const banner = document.getElementById('feedback-banner');
  const header = document.getElementById('feedback-header');
  const expected = document.getElementById('feedback-expected');
  const diagEl = document.getElementById('feedback-diagnostic');
  const explanation = document.getElementById('feedback-explanation');

  feedbackContainer.classList.remove('hidden');
  banner.className = `feedback-banner ${isCorrect ? 'correct' : 'incorrect'}`;

  if (isCorrect) {
    if (diagEl) diagEl.classList.add('hidden');
    if (evalResult.type === 'exact') {
      header.innerHTML = '🎉 Exactement ! Excellente réponse.';
      header.style.color = '#10b981';
      expected.innerHTML = '';
    } else if (evalResult.type === 'typo') {
      header.innerHTML = '✅ Accepté ! (Presque parfait)';
      header.style.color = '#10b981';
      expected.innerHTML = `<span style="color:#f59e0b; font-size:0.95rem;">⚠️ Attention à la petite faute d'orthographe : <strong>${evalResult.matchedAnswer}</strong></span>`;
    } else if (evalResult.type === 'particle' || evalResult.type === 'subphrase') {
      header.innerHTML = '✅ Accepté ! C\'est la bonne réponse.';
      header.style.color = '#10b981';
      expected.innerHTML = `<span style="color:#22d3ee; font-size:0.95rem;">💡 Bien vu ! (Formulation attendue : <strong>${evalResult.matchedAnswer}</strong>)</span>`;
    } else if (evalResult.type === 'near-sentence') {
      header.innerHTML = '✅ Accepté ! Bonne structure passive.';
      header.style.color = '#10b981';
      expected.innerHTML = `<span style="color:#22d3ee; font-size:0.95rem;">💡 Phrase type : <strong>${evalResult.matchedAnswer}</strong></span>`;
    }
  } else {
    header.innerHTML = '❌ Pas tout à fait.';
    header.style.color = '#ef4444';
    expected.innerHTML = `<strong>Réponse attendue :</strong> <span style="color:#10b981; font-weight:700;">${q.answers[0]}</span>`;

    if (diagEl) {
      if (diagnostic) {
        diagEl.innerHTML = `<strong>🔎 Pourquoi ta réponse ("${rawInput}") est fausse :</strong><br>${diagnostic}`;
        diagEl.classList.remove('hidden');
      } else {
        diagEl.classList.add('hidden');
      }
    }
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

    const diag = !ans.isCorrect ? diagnoseError(ans.userInput, ans.question) : null;
    const diagHtml = diag ? `
      <div style="font-size:0.9rem; color:#fed7aa; background:rgba(245, 158, 11, 0.12); padding:0.75rem 1rem; border-radius:6px; border-left:3px solid #f59e0b; margin-bottom:0.75rem; line-height:1.55;">
        <strong style="color:#fbbf24;">🔎 Pourquoi ta réponse était fausse :</strong><br>${diag}
      </div>
    ` : '';

    item.innerHTML = `
      <div class="flex-between mb-2" style="flex-wrap:wrap; gap:0.5rem;">
        <span style="font-weight:700; color:#cbd5e1; font-size:0.85rem;">Question ${idx + 1}</span>
        <span class="badge" style="font-size:0.8rem; background:${ans.isCorrect ? 'rgba(16,185,129,0.15)' : 'rgba(239,68,68,0.15)'}; color:${ans.isCorrect ? '#10b981' : '#ef4444'};">
          ${ans.isCorrect ? (ans.evalResult?.type === 'exact' ? '✅ Correct' : '✅ Correct (Accepté)') : '❌ Erreur'}
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
      ${diagHtml}
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
