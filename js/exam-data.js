// ============================================================================
// EXAM DATA: English Partiel (Vocabulaire, CV, Verbes & Grammaire)
// Based directly on course documents & teacher's syllabus
// ============================================================================

export const EXAM_MODULES = {
  'liar-liar': {
    id: 'liar-liar',
    title: 'Recrutement & "Liar Liar"',
    icon: '🕵️',
    description: 'Les 7 verbes clés du recrutement (graduate, claim, sack, hire, resign, screen, embellish) et le vocabulaire du mensonge sur CV.',
    badge: 'Vocabulaire'
  },
  'cv-vocab': {
    id: 'cv-vocab',
    title: 'CV, Diplômes & Soft Skills',
    icon: '📄',
    description: 'Titres des sections du CV, équivalences des diplômes français (BUT MT2E, A-levels...), niveaux de langue, IT proficiency et soft skills des loisirs.',
    badge: 'Sections 2-6'
  },
  'tenses': {
    id: 'tenses',
    title: 'Les 3 Temps (Past, Present & Perfect)',
    icon: '⏱️',
    description: 'Present continuous, Past simple et Present perfect simple : conjugaison exacte au clavier selon les marqueurs de temps.',
    badge: 'Grammaire'
  },
  'passive': {
    id: 'passive',
    title: 'Voix Active vs Voix Passive',
    icon: '🔄',
    description: 'Règles de transformation, formes passives et réécriture complète de phrases réelles de la fiche.',
    badge: 'Grammaire'
  },
  'cv-writing': {
    id: 'cv-writing',
    title: 'CV Doctor & Cover Letter',
    icon: '✍️',
    description: 'Détection des erreurs de CV (Mandy Poor), formules clés pour lettre de motivation et verbes d\'action.',
    badge: 'Writing'
  }
};

// ============================================================================
// CHEATSHEET / FICHE MÉMO RAPIDE
// ============================================================================
export const CHEATSHEET = {
  liarLiar: [
    { word: 'to graduate', def: 'To successfully complete a degree or course at a university/college.' },
    { word: 'to claim', def: 'To say that something is true, often without proof.' },
    { word: 'to sack / to fire', def: 'To dismiss someone from their job (often for doing something wrong).' },
    { word: 'to hire / to employ', def: 'To give someone a job / employ someone.' },
    { word: 'to resign', def: 'To state officially that you have decided to leave your job.' },
    { word: 'to screen', def: 'To check a candidate’s background, qualifications, and suitability.' },
    { word: 'to embellish', def: 'To exaggerate or make something seem more attractive/impressive by adding untrue details.' }
  ],
  cvSections: [
    { fr: 'Coordonnées', en: 'Contact Details / Personal Information' },
    { fr: 'Profil / Objectif professionnel', en: 'Personal Statement / Career Objective' },
    { fr: 'Formation / Diplômes', en: 'Education & Qualifications' },
    { fr: 'Expérience professionnelle', en: 'Work Experience / Employment History' },
    { fr: 'Compétences (langues, IT, soft skills)', en: 'Skills (Languages, IT Skills, Key Skills)' },
    { fr: 'Centres d\'intérêt / Loisirs', en: 'Interests / Hobbies / Activities' },
    { fr: 'Références', en: 'References (Available upon request)' }
  ],
  translations: [
    { fr: 'Baccalauréat', en: 'A-levels (UK) / High school diploma (US)' },
    { fr: 'Avec mention', en: 'With honours / with distinction' },
    { fr: 'BUT (Bachelor Universitaire de Technologie)', en: 'Bachelor of Technology' },
    { fr: 'IUT', en: 'University Institute of Technology' },
    { fr: 'MT2E', en: 'Energy Transition and Efficiency' },
    { fr: 'Master', en: 'Master\'s degree' },
    { fr: 'École d\'ingénieurs', en: 'Engineering school / Higher national diploma' },
    { fr: 'Temps partiel / plein', en: 'Part-time / Full-time' },
    { fr: 'Stage / Stage rémunéré', en: 'Internship / Paid internship (work placement)' },
    { fr: 'Job d\'été / Bénévolat', en: 'Summer job / Volunteering' },
    { fr: 'Langue maternelle', en: 'Mother tongue / Native speaker' },
    { fr: 'Courant / Avancé', en: 'Fluent / Advanced' },
    { fr: 'Intermédiaire / Débutant', en: 'Intermediate / Beginner' },
    { fr: 'Avoir des notions / les bases en IT', en: 'To have a working knowledge of...' },
    { fr: 'Très bien maîtriser un logiciel en IT', en: 'To be proficient with...' }
  ],
  softSkills: [
    { activity: 'Team sports (football, rugby...)', skills: 'Leadership, teamwork, interpersonal skills, communication' },
    { activity: 'Individual sports (running, swimming...)', skills: 'Determination, self-motivation, discipline, resilience' },
    { activity: 'Travelling', skills: 'Intercultural awareness, adaptability, open-mindedness, language skills' },
    { activity: 'Mind sports (chess, puzzles...)', skills: 'Analytical skills, intelligence, strategic problem-solving' },
    { activity: 'Artistic interests (music, theater...)', skills: 'Creativity, resourcefulness, attention to detail' }
  ],
  tenses: [
    {
      tense: 'Present Continuous (am/is/are + V-ing)',
      usage: 'Action happening now, temporary situations, evolving trends, fixed future arrangements.',
      markers: 'right now, at the moment, currently, this week, Look!, Listen!'
    },
    {
      tense: 'Past Simple (V-ed or irregular past)',
      usage: 'Action completed at a specific, finished time in the past.',
      markers: 'yesterday, ago, last week/year, in 2020, when I was...'
    },
    {
      tense: 'Present Perfect Simple (have/has + past participle)',
      usage: 'Action completed with a result in the present; lifetime experience; action starting in the past and continuing now.',
      markers: 'already, yet, just, ever, never, since, for, so far, recently, lately'
    }
  ],
  passiveVoice: [
    { rule: 'Formation', explanation: 'Subject + BE (conjugé au bon temps) + Past Participle (+ by agent)' },
    { rule: 'Present Simple', explanation: 'Active: "They produce energy" → Passive: "Energy is produced"' },
    { rule: 'Past Simple', explanation: 'Active: "He inspected the panels" → Passive: "The panels were inspected"' },
    { rule: 'Present Continuous', explanation: 'Active: "They are monitoring levels" → Passive: "Levels are being monitored"' },
    { rule: 'Present Perfect', explanation: 'Active: "They have installed generators" → Passive: "Generators have been installed"' },
    { rule: 'Future (will)', explanation: 'Active: "They will shut down the station" → Passive: "The station will be shut down"' },
    { rule: 'Modals (must/can/should)', explanation: 'Active: "They must complete the test" → Passive: "The test must be completed"' },
    { rule: 'Agent', explanation: 'Omit "by..." if the agent is unknown, obvious, or unimportant.' }
  ]
};

// ============================================================================
// QUESTIONS DATABASE (INPUT TEXT ORIENTED)
// ============================================================================
export const EXAM_QUESTIONS = [
  // --------------------------------------------------------------------------
  // MODULE 1: LIAR LIAR & RECRUITMENT VOCABULARY
  // --------------------------------------------------------------------------
  {
    id: 'll_001',
    moduleId: 'liar-liar',
    prompt: 'Give the English verb matching this definition: "To say that something is true, especially when you have no proof."',
    answers: ['claim', 'to claim'],
    explanation: '<strong>To claim</strong> means to assert or declare something as a fact without providing actual evidence.',
    hint: 'Starts with C (5 letters)'
  },
  {
    id: 'll_002',
    moduleId: 'liar-liar',
    prompt: 'Give the English verb matching this definition: "To successfully complete a university degree or college course."',
    answers: ['graduate', 'to graduate'],
    explanation: '<strong>To graduate</strong>: to successfully finish studies and obtain an academic degree.',
    hint: 'Starts with G (8 letters)'
  },
  {
    id: 'll_003',
    moduleId: 'liar-liar',
    prompt: 'Give the informal English verb meaning: "To dismiss someone from their job, often because they did something wrong."',
    answers: ['sack', 'to sack', 'fire', 'to fire'],
    explanation: '<strong>To sack</strong> (or to fire) is the informal term for dismissing an employee.',
    hint: 'Starts with S (4 letters)'
  },
  {
    id: 'll_004',
    moduleId: 'liar-liar',
    prompt: 'Give the English verb matching this definition: "To employ someone / give someone a job."',
    answers: ['hire', 'to hire', 'employ', 'to employ'],
    explanation: '<strong>To hire</strong>: to take someone on as an employee.',
    hint: 'Starts with H (4 letters)'
  },
  {
    id: 'll_005',
    moduleId: 'liar-liar',
    prompt: 'Give the English verb matching this definition: "To officially tell your employer that you are leaving your job."',
    answers: ['resign', 'to resign'],
    explanation: '<strong>To resign</strong>: to hand in your notice and step down from your post.',
    hint: 'Starts with R (6 letters)'
  },
  {
    id: 'll_006',
    moduleId: 'liar-liar',
    prompt: 'Give the English verb matching this definition: "To check a candidate’s background, qualifications, and criminal records before hiring."',
    answers: ['screen', 'to screen'],
    explanation: '<strong>To screen</strong> candidates means to check their background thoroughly.',
    hint: 'Starts with S (6 letters)'
  },
  {
    id: 'll_007',
    moduleId: 'liar-liar',
    prompt: 'Give the English verb matching this definition: "To make something seem more attractive or impressive by adding details that are not true (embellir / enjoliver)."',
    answers: ['embellish', 'to embellish'],
    explanation: '<strong>To embellish</strong> a CV means to exaggerate or fabricate details to look more qualified.',
    hint: 'Starts with E (9 letters)'
  },
  {
    id: 'll_008',
    moduleId: 'liar-liar',
    prompt: 'Complete the sentence with the correct verb: "Many job applicants ________ their CVs by claiming diplomas they never earned."',
    answers: ['embellish', 'pad'],
    explanation: 'Applicants often <strong>embellish</strong> (or pad) their CVs with exaggerated or false credentials.',
    hint: 'Synonym of exaggerate / beautify'
  },
  {
    id: 'll_009',
    moduleId: 'liar-liar',
    prompt: 'Complete the sentence with the past simple of the verb: "The manager was caught lying on his resume and was immediately ________ (renvoyé)."',
    answers: ['sacked', 'fired', 'dismissed'],
    explanation: 'The past participle is <strong>sacked</strong> (or fired).',
    hint: 'Passive past of sack (6 letters)'
  },
  {
    id: 'll_010',
    moduleId: 'liar-liar',
    prompt: 'What British English term is used for a document summarising your career, while American English often uses "resume"?',
    answers: ['curriculum vitae', 'cv'],
    explanation: 'British English uses <strong>Curriculum Vitae</strong> (or CV), whereas American English usually uses <strong>resume</strong>.',
    hint: 'Two Latin words abbreviated as CV'
  },

  // --------------------------------------------------------------------------
  // MODULE 2: CV SECTIONS, TRANSLATIONS, IT & SOFT SKILLS
  // --------------------------------------------------------------------------
  {
    id: 'cv_001',
    moduleId: 'cv-vocab',
    prompt: 'Translate into English: "Baccalauréat"',
    answers: ['a-levels', 'a levels', 'a-level', 'a level', 'alevels', 'high school diploma'],
    explanation: 'In the UK, the equivalent of the French Baccalauréat is <strong>A-levels</strong> (or High school diploma in the US).',
    hint: 'Hyphenated letter + plural word'
  },
  {
    id: 'cv_002',
    moduleId: 'cv-vocab',
    prompt: 'Translate into English: "Avec mention" (e.g., Baccalauréat avec mention)',
    answers: ['with honours', 'with distinction', 'with honors', 'honours', 'honors', 'distinction'],
    explanation: '<strong>With honours</strong> (UK) or <strong>with distinction</strong> is the standard academic translation.',
    hint: 'with h...'
  },
  {
    id: 'cv_003',
    moduleId: 'cv-vocab',
    prompt: 'Translate into English: "BUT (Bachelor Universitaire de Technologie)"',
    answers: ['bachelor of technology', 'bachelor in technology', 'vocational bachelor', 'bachelor of technology in energy transition and efficiency'],
    explanation: 'The official academic translation for a BUT is <strong>Bachelor of Technology</strong>.',
    hint: 'Bachelor of T...'
  },
  {
    id: 'cv_004',
    moduleId: 'cv-vocab',
    prompt: 'Translate the department acronym MT2E into English: "Métiers de la Transition et de l\'Efficacité Énergétiques"',
    answers: ['energy transition and efficiency', 'energy transition and energy efficiency', 'energy transition & efficiency'],
    explanation: 'MT2E stands for <strong>Energy Transition and Efficiency</strong>.',
    hint: 'Energy T... and E...'
  },
  {
    id: 'cv_005',
    moduleId: 'cv-vocab',
    prompt: 'Translate into English: "IUT (Institut Universitaire de Technologie)"',
    answers: ['university institute of technology', 'institute of technology'],
    explanation: 'IUT translates to <strong>University Institute of Technology</strong>.',
    hint: '3 words: University I... of T...'
  },
  {
    id: 'cv_006',
    moduleId: 'cv-vocab',
    prompt: 'Translate into English: "Stage" (in a company)',
    answers: ['internship', 'work placement', 'an internship', 'intern'],
    explanation: '<strong>Internship</strong> (US) or <strong>work placement</strong> (UK) is the professional translation.',
    hint: 'Starts with I (10 letters)'
  },
  {
    id: 'cv_007',
    moduleId: 'cv-vocab',
    prompt: 'Translate into English: "Stage rémunéré"',
    answers: ['paid internship', 'paid work placement', 'paid stage'],
    explanation: 'A remunerated stage is a <strong>paid internship</strong>.',
    hint: 'paid i...'
  },
  {
    id: 'cv_008',
    moduleId: 'cv-vocab',
    prompt: 'Translate into English: "Temps partiel" (as in part-time work)',
    answers: ['part-time', 'part time', 'part-time job', 'part time job', 'part-time work', 'part time work'],
    explanation: '<strong>Part-time</strong> is opposed to full-time.',
    hint: 'Opposite of full-time'
  },
  {
    id: 'cv_009',
    moduleId: 'cv-vocab',
    prompt: 'Translate into English: "Bénévolat"',
    answers: ['volunteering', 'voluntary work', 'volunteer work', 'volunteer'],
    explanation: '<strong>Volunteering</strong> or <strong>voluntary work</strong> is the standard CV term.',
    hint: 'Starts with V (12 letters)'
  },
  {
    id: 'cv_010',
    moduleId: 'cv-vocab',
    prompt: 'Complete the IT skills expression for "Avoir les bases / des notions de": "To have a ________ knowledge of Python."',
    answers: ['working', 'working knowledge', 'working knowledge of'],
    explanation: 'In CV terminology, "avoir les bases" translates to having a <strong>working knowledge of</strong>.',
    hint: 'Starts with W (7 letters)'
  },
  {
    id: 'cv_011',
    moduleId: 'cv-vocab',
    prompt: 'Complete the IT skills expression for "Très bien maîtriser": "To be ________ with AutoCAD."',
    answers: ['proficient', 'proficient with', 'proficient in'],
    explanation: 'To express advanced mastery on a CV, use <strong>proficient with</strong> (or in).',
    hint: 'Starts with P (10 letters)'
  },
  {
    id: 'cv_012',
    moduleId: 'cv-vocab',
    prompt: 'Translate into English: "Langue maternelle"',
    answers: ['mother tongue', 'native speaker', 'native language', 'first language'],
    explanation: '<strong>Mother tongue</strong> or <strong>native speaker</strong> is used for your first language.',
    hint: 'M... tongue'
  },
  {
    id: 'cv_013',
    moduleId: 'cv-vocab',
    prompt: 'Which key soft skill is typically demonstrated by playing team sports (rugby, football, basketball)?',
    answers: ['leadership', 'teamwork', 'interpersonal skills', 'communication', 'team player', 'team work'],
    explanation: 'Team sports demonstrate <strong>leadership</strong>, <strong>teamwork</strong>, or <strong>interpersonal skills</strong>.',
    hint: 'Think of leading a group or working in a team'
  },
  {
    id: 'cv_014',
    moduleId: 'cv-vocab',
    prompt: 'Which key soft skill is demonstrated by practicing individual endurance sports (running, swimming, cycling)?',
    answers: ['determination', 'self-motivation', 'discipline', 'resilience', 'self motivation', 'motivation'],
    explanation: 'Individual sports highlight <strong>determination</strong>, <strong>self-motivation</strong>, and <strong>discipline</strong>.',
    hint: 'Starts with D (determination) or S (self-motivation)'
  },
  {
    id: 'cv_015',
    moduleId: 'cv-vocab',
    prompt: 'Which soft skill is demonstrated by travelling abroad to different cultures?',
    answers: ['intercultural awareness', 'adaptability', 'open-mindedness', 'language skills', 'cultural awareness'],
    explanation: 'Travelling shows <strong>intercultural awareness</strong>, <strong>adaptability</strong>, and openness to others.',
    hint: 'Intercultural a...'
  },
  {
    id: 'cv_016',
    moduleId: 'cv-vocab',
    prompt: 'Which skill is demonstrated by playing mind sports and strategy games (chess, puzzles)?',
    answers: ['analytical skills', 'intelligence', 'strategic thinking', 'problem-solving', 'analytical', 'problem solving'],
    explanation: 'Mind sports develop <strong>analytical skills</strong>, <strong>intelligence</strong>, and strategic thinking.',
    hint: 'A... skills'
  },
  {
    id: 'cv_017',
    moduleId: 'cv-vocab',
    prompt: 'Which skill is demonstrated by artistic interests (photography, theater, painting)?',
    answers: ['creativity', 'resourcefulness', 'creativity / resourcefulness', 'creative'],
    explanation: 'Artistic hobbies show <strong>creativity</strong> and <strong>resourcefulness</strong>.',
    hint: 'Starts with C (10 letters)'
  },

  // --------------------------------------------------------------------------
  // MODULE 3: TENSES (PRESENT CONTINUOUS, PAST SIMPLE, PRESENT PERFECT SIMPLE)
  // --------------------------------------------------------------------------
  {
    id: 'ts_001',
    moduleId: 'tenses',
    prompt: 'Type the verb in the correct tense: "Look at the thermometer! The temperature ________ (rise) rapidly right now."',
    answers: ['is rising'],
    explanation: 'The marker <strong>right now</strong> and the imperative <strong>Look!</strong> require the <strong>Present Continuous</strong> (is rising).',
    hint: 'be + V-ing'
  },
  {
    id: 'ts_002',
    moduleId: 'tenses',
    prompt: 'Type the verb in the correct tense: "The engineer ________ (submit) his technical report to the board yesterday."',
    answers: ['submitted'],
    explanation: 'The time marker <strong>yesterday</strong> specifies a completed past action: use <strong>Past Simple</strong> (submitted). Note the double "t".',
    hint: 'Past simple of submit (ends with -tted)'
  },
  {
    id: 'ts_003',
    moduleId: 'tenses',
    prompt: 'Type the verb in the correct tense: "We ________ (already / test) the new heat pump system three times this week."',
    answers: ['have already tested', 'have tested'],
    explanation: 'The adverb <strong>already</strong> signals a finished action with present relevance: use <strong>Present Perfect Simple</strong> (have already tested).',
    hint: 'have + already + past participle'
  },
  {
    id: 'ts_004',
    moduleId: 'tenses',
    prompt: 'Type the verb in the correct tense: "The technician hasn\'t finished calibrating the sensors ________ (encore / pas encore). Type the time marker."',
    answers: ['yet'],
    explanation: 'In negative present perfect sentences, the time marker at the end is <strong>yet</strong>.',
    hint: '3 letters starting with Y'
  },
  {
    id: 'ts_005',
    moduleId: 'tenses',
    prompt: 'Type the verb in the correct tense: "In 2022, our university ________ (install) fifty new photovoltaic solar panels on the roof."',
    answers: ['installed'],
    explanation: '<strong>In 2022</strong> is a specific, completed date in the past: use <strong>Past Simple</strong> (installed).',
    hint: 'Past simple of install'
  },
  {
    id: 'ts_006',
    moduleId: 'tenses',
    prompt: 'Type the verb in the correct tense: "Eliot ________ (work) at this energy consulting firm since last September."',
    answers: ['has worked', 'has been working'],
    explanation: 'The time marker <strong>since</strong> indicates an action that started in the past and continues today: use <strong>Present Perfect</strong> (has worked).',
    hint: 'has + past participle'
  },
  {
    id: 'ts_007',
    moduleId: 'tenses',
    prompt: 'Type the verb in the correct tense: "At the moment, our research team ________ (develop) a new thermal insulation prototype."',
    answers: ['is developing'],
    explanation: 'The marker <strong>At the moment</strong> indicates an ongoing temporary activity: use <strong>Present Continuous</strong> (is developing).',
    hint: 'be + develop + ing'
  },
  {
    id: 'ts_008',
    moduleId: 'tenses',
    prompt: 'Type the verb in the correct tense: "How long ________ (you / know) about the boiler leak?"',
    answers: ['have you known'],
    explanation: 'With <strong>How long</strong> asking about duration up to the present, use <strong>Present Perfect</strong> (have you known).',
    hint: 'have you + irregular past participle of know'
  },
  {
    id: 'ts_009',
    moduleId: 'tenses',
    prompt: 'Type the verb in the correct tense: "Two weeks ago, the maintenance crew ________ (repair) the geothermal pipe."',
    answers: ['repaired'],
    explanation: 'The time marker <strong>ago</strong> demands the <strong>Past Simple</strong> (repaired).',
    hint: 'Past simple of repair'
  },
  {
    id: 'ts_010',
    moduleId: 'tenses',
    prompt: 'Type the verb in the correct tense: "Energy prices ________ (increase) continuously these days."',
    answers: ['are increasing'],
    explanation: 'The marker <strong>these days</strong> describes an ongoing trend or changing situation: use <strong>Present Continuous</strong> (are increasing).',
    hint: 'are + increase (drop e) + ing'
  },

  // --------------------------------------------------------------------------
  // MODULE 4: ACTIVE VS PASSIVE VOICE (DIRECT FROM WORKSHEET)
  // --------------------------------------------------------------------------
  {
    id: 'pv_001',
    moduleId: 'passive',
    prompt: 'Rewrite in the passive voice: "They will shut down the coal-fired power station next month."',
    answers: [
      'the coal-fired power station will be shut down next month',
      'the coal fired power station will be shut down next month',
      'next month, the coal-fired power station will be shut down'
    ],
    explanation: 'Future modal passive: will + be + past participle (shut). <strong>"The coal-fired power station will be shut down next month."</strong>',
    hint: 'Start with "The coal-fired power station will be..."'
  },
  {
    id: 'pv_002',
    moduleId: 'passive',
    prompt: 'Rewrite in the passive voice: "Engineers are monitoring the air quality levels carefully."',
    answers: [
      'the air quality levels are being monitored carefully',
      'the air quality levels are being monitored carefully by engineers',
      'the air quality levels are carefully being monitored'
    ],
    explanation: 'Present continuous passive: are + being + past participle (monitored). <strong>"The air quality levels are being monitored carefully (by engineers)."</strong>',
    hint: 'Start with "The air quality levels are being..."'
  },
  {
    id: 'pv_003',
    moduleId: 'passive',
    prompt: 'Rewrite in the passive voice: "They have installed new wave energy generators off the coast."',
    answers: [
      'new wave energy generators have been installed off the coast',
      'new wave energy generators have been installed off the coast by them'
    ],
    explanation: 'Present perfect passive: have + been + past participle (installed). <strong>"New wave energy generators have been installed off the coast."</strong>',
    hint: 'Start with "New wave energy generators have been..."'
  },
  {
    id: 'pv_004',
    moduleId: 'passive',
    prompt: 'Rewrite in the passive voice: "The technician inspected the solar panels yesterday."',
    answers: [
      'the solar panels were inspected yesterday',
      'the solar panels were inspected yesterday by the technician',
      'the solar panels were inspected by the technician yesterday',
      'yesterday, the solar panels were inspected by the technician'
    ],
    explanation: 'Past simple passive: were (plural) + past participle (inspected). <strong>"The solar panels were inspected yesterday (by the technician)."</strong>',
    hint: 'Start with "The solar panels were..."'
  },
  {
    id: 'pv_005',
    moduleId: 'passive',
    prompt: 'Rewrite in the passive voice: "They must complete the safety inspection before Friday."',
    answers: [
      'the safety inspection must be completed before friday',
      'the safety inspection must be completed before friday by them'
    ],
    explanation: 'Modal passive: must + be + past participle (completed). <strong>"The safety inspection must be completed before Friday."</strong>',
    hint: 'Start with "The safety inspection must be..."'
  },
  {
    id: 'pv_006',
    moduleId: 'passive',
    prompt: 'Rewrite in the passive voice: "The company produces geothermal energy in this region."',
    answers: [
      'geothermal energy is produced in this region by the company',
      'geothermal energy is produced by the company in this region',
      'geothermal energy is produced in this region'
    ],
    explanation: 'Present simple passive: is (uncountable) + produced. <strong>"Geothermal energy is produced by the company in this region."</strong>',
    hint: 'Start with "Geothermal energy is produced..."'
  },
  {
    id: 'pv_007',
    moduleId: 'passive',
    prompt: 'Complete the passive sentence with the verb in the correct form: "Dangerous chemical emissions ________ (prohibit) by European regulations since 2015."',
    answers: ['have been prohibited'],
    explanation: 'Since 2015 + passive = <strong>have been prohibited</strong> (Present perfect passive plural).',
    hint: 'have been + past participle'
  },
  {
    id: 'pv_008',
    moduleId: 'passive',
    prompt: 'When transforming an active sentence to passive, under which conditions do we usually OMIT the agent (by...)?',
    answers: [
      'when the agent is unknown, obvious, or unimportant',
      'unknown, obvious, or unimportant',
      'when unknown or obvious',
      'when it is unknown or obvious'
    ],
    explanation: 'We omit "by [agent]" when the person doing the action is <strong>unknown</strong>, <strong>obvious</strong>, or <strong>unimportant</strong>.',
    hint: 'Three words: unknown, obvious, unimportant'
  },

  // --------------------------------------------------------------------------
  // MODULE 5: CV DOCTOR & COVER LETTER (MANDY POOR & APPLICATION SKILLS)
  // --------------------------------------------------------------------------
  {
    id: 'wr_001',
    moduleId: 'cv-writing',
    prompt: 'In the CV critique of "Mandy Poor", why was the email address "mandy_partygirl99@hotmail.com" criticized?',
    answers: [
      'it is unprofessional',
      'unprofessional email',
      'unprofessional',
      'not professional',
      'unprofessional address',
      'informal'
    ],
    explanation: 'Email addresses on a CV must be professional (e.g., firstname.lastname@email.com), avoiding nicknames and party references.',
    hint: 'One word: unp...'
  },
  {
    id: 'wr_002',
    moduleId: 'cv-writing',
    prompt: 'Instead of weak descriptions like "did stuff with customers", what kind of strong verbs should you use on a CV? (Give the term)',
    answers: ['action verbs', 'power verbs', 'action words', 'action verb', 'power verb'],
    explanation: 'You must use <strong>action verbs</strong> (or power verbs) like "managed", "coordinated", "implemented", "developed".',
    hint: 'A... verbs'
  },
  {
    id: 'wr_003',
    moduleId: 'cv-writing',
    prompt: 'What formal sign-off should you use at the end of a cover letter if you addressed it to a named person ("Dear Mr. Smith")?',
    answers: ['yours sincerely', 'sincerely', 'sincerely yours'],
    explanation: 'When writing to a named recipient (Dear Mr. Smith), use <strong>Yours sincerely</strong>. (If Dear Sir/Madam, use Yours faithfully).',
    hint: 'Yours s...'
  },
  {
    id: 'wr_004',
    moduleId: 'cv-writing',
    prompt: 'What formal sign-off should you use if you do NOT know the recipient\'s name ("Dear Sir or Madam")?',
    answers: ['yours faithfully', 'faithfully'],
    explanation: 'When the letter begins with "Dear Sir or Madam", the traditional formal closing is <strong>Yours faithfully</strong>.',
    hint: 'Yours f...'
  },
  {
    id: 'wr_005',
    moduleId: 'cv-writing',
    prompt: 'Complete this standard cover letter opening sentence: "I am writing to ________ for the position of Assistant Energy Manager advertised on LinkedIn."',
    answers: ['apply', 'apply for', 'to apply', 'to apply for'],
    explanation: 'The standard formal formula is <strong>to apply for</strong> a position. (Note that "for" was already placed after the blank).',
    hint: 'Verb starting with A (5 letters)'
  },
  {
    id: 'wr_006',
    moduleId: 'cv-writing',
    prompt: 'In the Education section of your CV as a 2nd year MT2E student, what is your current degree called in English?',
    answers: [
      'bachelor of technology in energy transition and efficiency',
      'bachelor of technology',
      'bachelor in technology',
      'but mt2e',
      'bachelor of technology mt2e'
    ],
    explanation: 'Your degree is the <strong>Bachelor of Technology in Energy Transition and Efficiency</strong> (BUT MT2E).',
    hint: 'Bachelor of Technology...'
  }
];
