import { getUser } from './storage.js';
import { THEMES } from './data.js';

let currentMode = 'toeic';
let activeTab = 'quick'; // 'quick' or 'custom'
let selectedTime = 75;

// Elements
const userNameEl = document.getElementById('user-name');
const userAvatarEl = document.getElementById('user-avatar');

const modeCards = document.querySelectorAll('.mode-card');
const partsCustom = document.getElementById('parts-custom');
const partsToeic = document.getElementById('parts-toeic');
const themesSection = document.getElementById('themes-section');

const tabQuick = document.getElementById('tab-quick');
const tabCustom = document.getElementById('tab-custom');
const themeGrid = document.getElementById('theme-grid');
const themeCountEl = document.getElementById('theme-count');
const btnSelectAll = document.getElementById('btn-select-all');
const btnDeselectAll = document.getElementById('btn-deselect-all');

const timeSlider = document.getElementById('time-slider');
const presetBtns = document.querySelectorAll('.preset-btn');
const timeValue = document.getElementById('time-value');
const qEstimate = document.getElementById('q-estimate');
const btnStart = document.getElementById('btn-start');
const startError = document.getElementById('start-error');

const partCheckboxes = partsCustom.querySelectorAll('input[type="checkbox"]');

// State
let selectedThemes = new Set();
let selectedSubtopics = new Set();

function init() {
  const user = getUser();
  if (!user || !user.name) {
    window.location.href = 'index.html';
    return;
  }
  userNameEl.textContent = user.name;
  userAvatarEl.textContent = user.name.charAt(0).toUpperCase();

  const params = new URLSearchParams(window.location.search);
  const initialMode = params.get('mode') || 'toeic';
  setMode(initialMode);
  
  initThemes();
  setupEventListeners();
  updateTimeEstimate();
}

function setMode(mode) {
  currentMode = mode;
  modeCards.forEach(card => {
    if (card.dataset.mode === mode) {
      card.classList.add('selected');
    } else {
      card.classList.remove('selected');
    }
  });

  if (mode === 'toeic') {
    partsCustom.classList.add('hidden');
    partsToeic.classList.remove('hidden');
    themesSection.classList.add('hidden');
    setTime(75);
  } else {
    partsCustom.classList.remove('hidden');
    partsToeic.classList.add('hidden');
    themesSection.classList.remove('hidden');
  }
  updateTimeEstimate();
}

function initThemes() {
  selectedThemes.clear();
  selectedSubtopics.clear();
  // select all by default
  Object.keys(THEMES).forEach(themeKey => {
    selectedThemes.add(themeKey);
    Object.keys(THEMES[themeKey].subtopics).forEach(subKey => {
      selectedSubtopics.add(subKey);
    });
  });
  renderThemes();
}

function renderThemes() {
  themeGrid.innerHTML = '';
  
  Object.entries(THEMES).forEach(([themeKey, themeData]) => {
    const isThemeSelected = selectedThemes.has(themeKey);
    
    const themeItem = document.createElement('div');
    themeItem.className = `theme-item card ${isThemeSelected ? 'selected' : ''}`;
    themeItem.style.padding = '1rem';
    
    // Header
    const header = document.createElement('div');
    header.className = 'theme-header flex-between';
    header.style.cursor = 'pointer';
    
    const leftGroup = document.createElement('div');
    leftGroup.className = 'theme-title-group';
    leftGroup.style.display = 'flex';
    leftGroup.style.alignItems = 'center';
    leftGroup.style.gap = '10px';
    
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.checked = isThemeSelected;
    
    const titleSpan = document.createElement('span');
    titleSpan.className = 'theme-name';
    titleSpan.innerHTML = `${themeData.icon} ${themeData.label}`;
    
    leftGroup.appendChild(checkbox);
    leftGroup.appendChild(titleSpan);
    
    const subCount = document.createElement('span');
    subCount.className = 'theme-count badge badge-violet';
    subCount.textContent = `${Object.keys(themeData.subtopics).length} topics`;
    
    header.appendChild(leftGroup);
    header.appendChild(subCount);
    themeItem.appendChild(header);
    
    // Subtopics panel (only in custom mode)
    const panel = document.createElement('div');
    panel.className = 'subtopics-panel mt-4';
    panel.style.display = activeTab === 'custom' ? 'block' : 'none';
    
    Object.entries(themeData.subtopics).forEach(([subKey, subLabel]) => {
      const subItem = document.createElement('label');
      subItem.className = 'subtopic-item custom-checkbox';
      subItem.style.display = 'flex';
      subItem.style.alignItems = 'center';
      subItem.style.gap = '8px';
      subItem.style.marginTop = '8px';
      subItem.style.marginLeft = '24px';
      subItem.style.cursor = 'pointer';
      
      const subCheck = document.createElement('input');
      subCheck.type = 'checkbox';
      subCheck.checked = selectedSubtopics.has(subKey);
      
      const subSpan = document.createElement('span');
      subSpan.textContent = subLabel;
      
      subItem.appendChild(subCheck);
      subItem.appendChild(subSpan);
      
      subCheck.addEventListener('change', (e) => {
        e.stopPropagation();
        if (subCheck.checked) {
          selectedSubtopics.add(subKey);
        } else {
          selectedSubtopics.delete(subKey);
        }
        updateThemeCheckboxState(themeKey, checkbox);
        updateThemeCount();
      });
      
      panel.appendChild(subItem);
    });
    
    themeItem.appendChild(panel);
    
    // Theme level interaction
    const toggleTheme = () => {
      const newState = !selectedThemes.has(themeKey);
      if (newState) {
        selectedThemes.add(themeKey);
        Object.keys(themeData.subtopics).forEach(k => selectedSubtopics.add(k));
      } else {
        selectedThemes.delete(themeKey);
        Object.keys(themeData.subtopics).forEach(k => selectedSubtopics.delete(k));
      }
      renderThemes();
    };
    
    header.addEventListener('click', (e) => {
      if (e.target.type !== 'checkbox') {
        toggleTheme();
      }
    });
    checkbox.addEventListener('change', () => {
      toggleTheme();
    });
    
    updateThemeCheckboxState(themeKey, checkbox);
    themeGrid.appendChild(themeItem);
  });
  
  updateThemeCount();
}

function updateThemeCheckboxState(themeKey, checkbox) {
  const subKeys = Object.keys(THEMES[themeKey].subtopics);
  let checkedCount = 0;
  subKeys.forEach(k => {
    if (selectedSubtopics.has(k)) checkedCount++;
  });
  
  if (checkedCount === 0) {
    checkbox.checked = false;
    checkbox.indeterminate = false;
    selectedThemes.delete(themeKey);
  } else if (checkedCount === subKeys.length) {
    checkbox.checked = true;
    checkbox.indeterminate = false;
    selectedThemes.add(themeKey);
  } else {
    checkbox.checked = false;
    checkbox.indeterminate = true;
    selectedThemes.add(themeKey);
  }
  
  const card = checkbox.closest('.theme-item');
  if (selectedThemes.has(themeKey)) {
    card.classList.add('selected');
  } else {
    card.classList.remove('selected');
  }
}

function updateThemeCount() {
  themeCountEl.textContent = `${selectedThemes.size} Selected`;
}

function setupEventListeners() {
  modeCards.forEach(card => {
    card.addEventListener('click', () => {
      setMode(card.dataset.mode);
    });
  });

  tabQuick.addEventListener('click', () => {
    activeTab = 'quick';
    tabQuick.classList.add('btn-primary');
    tabQuick.classList.remove('btn-ghost');
    tabCustom.classList.remove('btn-primary');
    tabCustom.classList.add('btn-ghost');
    renderThemes();
  });

  tabCustom.addEventListener('click', () => {
    activeTab = 'custom';
    tabCustom.classList.add('btn-primary');
    tabCustom.classList.remove('btn-ghost');
    tabQuick.classList.remove('btn-primary');
    tabQuick.classList.add('btn-ghost');
    renderThemes();
  });

  btnSelectAll.addEventListener('click', () => {
    Object.keys(THEMES).forEach(themeKey => {
      selectedThemes.add(themeKey);
      Object.keys(THEMES[themeKey].subtopics).forEach(subKey => {
        selectedSubtopics.add(subKey);
      });
    });
    renderThemes();
  });

  btnDeselectAll.addEventListener('click', () => {
    selectedThemes.clear();
    selectedSubtopics.clear();
    renderThemes();
  });

  timeSlider.addEventListener('input', (e) => {
    setTime(parseInt(e.target.value));
  });

  presetBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      setTime(parseInt(btn.dataset.time));
    });
  });

  partCheckboxes.forEach(cb => {
    cb.addEventListener('change', updateTimeEstimate);
  });

  btnStart.addEventListener('click', handleStart);
}

function setTime(minutes) {
  selectedTime = minutes;
  timeSlider.value = minutes;
  timeValue.textContent = minutes;
  
  presetBtns.forEach(btn => {
    if (parseInt(btn.dataset.time) === minutes) {
      btn.classList.add('active', 'btn-primary');
      btn.classList.remove('btn-ghost');
    } else {
      btn.classList.remove('active', 'btn-primary');
      btn.classList.add('btn-ghost');
    }
  });
  
  updateTimeEstimate();
}

function getSelectedParts() {
  if (currentMode === 'toeic') {
    return [5, 6, 7];
  }
  const parts = [];
  partCheckboxes.forEach(cb => {
    if (cb.checked) parts.push(parseInt(cb.value));
  });
  return parts;
}

function estimateQuestions(timeMinutes, parts, mode) {
  const totalSeconds = timeMinutes * 60;
  if (mode === 'toeic') {
    return Math.round((timeMinutes / 75) * 100);
  }
  
  let avg = 0;
  let count = 0;
  if (parts.includes(5)) { avg += 35; count++; }
  if (parts.includes(6)) { avg += 45; count++; }
  if (parts.includes(7)) { avg += 75; count++; }
  
  if (count === 0) return 0;
  avg = avg / count;
  return Math.round(totalSeconds / avg);
}

function updateTimeEstimate() {
  const parts = getSelectedParts();
  const est = estimateQuestions(selectedTime, parts, currentMode);
  qEstimate.textContent = est;
}

function buildConfig(mode, parts, themes, subtopics, timeMinutes) {
  return {
    mode,
    parts,
    themes,
    subtopics,
    timeMinutes,
    drillMistakes: false,
    missedQuestionIds: []
  };
}

function handleStart() {
  startError.classList.add('hidden');
  const parts = getSelectedParts();
  
  if (currentMode === 'custom') {
    if (parts.length === 0) {
      startError.textContent = 'Please select at least one part.';
      startError.classList.remove('hidden');
      return;
    }
    if (selectedThemes.size === 0) {
      startError.textContent = 'Please select at least one theme.';
      startError.classList.remove('hidden');
      return;
    }
  }

  const themesArr = Array.from(selectedThemes);
  const subtopicsArr = Array.from(selectedSubtopics);
  
  const config = buildConfig(
    currentMode,
    parts,
    themesArr,
    subtopicsArr,
    selectedTime
  );

  sessionStorage.setItem('toeic_quiz_config', JSON.stringify(config));
  window.location.href = 'quiz.html';
}

// Fix for DOMContentLoaded race condition with large ES module imports:
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}

