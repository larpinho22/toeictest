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
  irregularVerbs: [
  {
    "inf": "to fall",
    "past": "fell",
    "pp": "fallen",
    "fr": "tomber, chuter (température)"
  },
  {
    "inf": "to rise",
    "past": "rose",
    "pp": "risen",
    "fr": "augmenter, monter"
  },
  {
    "inf": "to lead",
    "past": "led",
    "pp": "led",
    "fr": "mener, diriger"
  },
  {
    "inf": "to freeze",
    "past": "froze",
    "pp": "frozen",
    "fr": "geler"
  },
  {
    "inf": "to break",
    "past": "broke",
    "pp": "broken",
    "fr": "casser, tomber en panne"
  },
  {
    "inf": "to blow",
    "past": "blew",
    "pp": "blown",
    "fr": "souffler (vent)"
  },
  {
    "inf": "to grow",
    "past": "grew",
    "pp": "grown",
    "fr": "croître, grandir"
  },
  {
    "inf": "to spend",
    "past": "spent",
    "pp": "spent",
    "fr": "dépenser, passer du temps"
  },
  {
    "inf": "to build",
    "past": "built",
    "pp": "built",
    "fr": "construire"
  },
  {
    "inf": "to find",
    "past": "found",
    "pp": "found",
    "fr": "trouver"
  },
  {
    "inf": "to meet",
    "past": "met",
    "pp": "met",
    "fr": "rencontrer, satisfaire (norme)"
  },
  {
    "inf": "to understand",
    "past": "understood",
    "pp": "understood",
    "fr": "comprendre"
  },
  {
    "inf": "to buy",
    "past": "bought",
    "pp": "bought",
    "fr": "acheter"
  },
  {
    "inf": "to run",
    "past": "ran",
    "pp": "run",
    "fr": "fonctionner, tourner (moteur)"
  },
  {
    "inf": "to shut",
    "past": "shut",
    "pp": "shut",
    "fr": "fermer, arrêter (centrale)"
  },
  {
    "inf": "to lose",
    "past": "lost",
    "pp": "lost",
    "fr": "perdre (chaleur)"
  },
  {
    "inf": "to choose",
    "past": "chose",
    "pp": "chosen",
    "fr": "choisir"
  },
  {
    "inf": "to pay",
    "past": "paid",
    "pp": "paid",
    "fr": "payer"
  },
  {
    "inf": "to cut",
    "past": "cut",
    "pp": "cut",
    "fr": "couper, réduire"
  },
  {
    "inf": "to hear",
    "past": "heard",
    "pp": "heard",
    "fr": "entendre"
  },
  {
    "inf": "to sell",
    "past": "sold",
    "pp": "sold",
    "fr": "vendre"
  },
  {
    "inf": "to take",
    "past": "took",
    "pp": "taken",
    "fr": "prendre, nécessiter"
  },
  {
    "inf": "to write",
    "past": "wrote",
    "pp": "written",
    "fr": "écrire"
  },
  {
    "inf": "to send",
    "past": "sent",
    "pp": "sent",
    "fr": "envoyer"
  },
  {
    "inf": "to see",
    "past": "saw",
    "pp": "seen",
    "fr": "voir"
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
    prompt: "Give the English verb matching this definition: \"To say that something is true, especially when you have no proof.\"",
    answers: ["claim","to claim"],
    explanation: "<strong>To claim</strong> means to assert or declare something as a fact without providing actual evidence.",
    hint: "Starts with C (5 letters)"
  },
  {
    id: 'll_002',
    moduleId: 'liar-liar',
    prompt: "Give the English verb matching this definition: \"To successfully complete a university degree or college course.\"",
    answers: ["graduate","to graduate"],
    explanation: "<strong>To graduate</strong>: to successfully finish studies and obtain an academic degree.",
    hint: "Starts with G (8 letters)"
  },
  {
    id: 'll_003',
    moduleId: 'liar-liar',
    prompt: "Give the informal English verb meaning: \"To dismiss someone from their job, often because they did something wrong.\"",
    answers: ["sack","to sack","fire","to fire"],
    explanation: "<strong>To sack</strong> (or to fire) is the informal term for dismissing an employee.",
    hint: "Starts with S (4 letters)"
  },
  {
    id: 'll_004',
    moduleId: 'liar-liar',
    prompt: "Give the English verb matching this definition: \"To employ someone / give someone a job.\"",
    answers: ["hire","to hire","employ","to employ"],
    explanation: "<strong>To hire</strong>: to take someone on as an employee.",
    hint: "Starts with H (4 letters)"
  },
  {
    id: 'll_005',
    moduleId: 'liar-liar',
    prompt: "Give the English verb matching this definition: \"To officially tell your employer that you are leaving your job.\"",
    answers: ["resign","to resign"],
    explanation: "<strong>To resign</strong>: to hand in your notice and step down from your post.",
    hint: "Starts with R (6 letters)"
  },
  {
    id: 'll_006',
    moduleId: 'liar-liar',
    prompt: "Give the English verb matching this definition: \"To check a candidate’s background, qualifications, and criminal records before hiring.\"",
    answers: ["screen","to screen"],
    explanation: "<strong>To screen</strong> candidates means to check their background thoroughly.",
    hint: "Starts with S (6 letters)"
  },
  {
    id: 'll_007',
    moduleId: 'liar-liar',
    prompt: "Give the English verb matching this definition: \"To make something seem more attractive or impressive by adding details that are not true (embellir / enjoliver).\"",
    answers: ["embellish","to embellish"],
    explanation: "<strong>To embellish</strong> a CV means to exaggerate or fabricate details to look more qualified.",
    hint: "Starts with E (9 letters)"
  },
  {
    id: 'll_008',
    moduleId: 'liar-liar',
    prompt: "Complete the sentence with the correct verb: \"Many job applicants ________ their CVs by claiming diplomas they never earned.\"",
    answers: ["embellish","pad"],
    explanation: "Applicants often <strong>embellish</strong> (or pad) their CVs with exaggerated or false credentials.",
    hint: "Synonym of exaggerate / beautify"
  },
  {
    id: 'll_009',
    moduleId: 'liar-liar',
    prompt: "Complete the sentence with the past simple of the verb: \"The manager was caught lying on his resume and was immediately ________ (renvoyé).\"",
    answers: ["sacked","fired","dismissed"],
    explanation: "The past participle is <strong>sacked</strong> (or fired).",
    hint: "Passive past of sack (6 letters)"
  },
  {
    id: 'll_010',
    moduleId: 'liar-liar',
    prompt: "What British English term is used for a document summarising your career, while American English often uses \"resume\"?",
    answers: ["curriculum vitae","cv"],
    explanation: "British English uses <strong>Curriculum Vitae</strong> (or CV), whereas American English usually uses <strong>resume</strong>.",
    hint: "Two Latin words abbreviated as CV"
  },
  {
    id: 'll_011',
    moduleId: 'liar-liar',
    prompt: "Complete the sentence: \"During the job interview, the applicant ________ (affirmer sans preuve) that he had five years of experience in solar panel installation, but he had no references.\"",
    answers: ["claimed","claim"],
    explanation: "To <strong>claim</strong> means to assert something as a fact without proof. In the past simple: <strong>claimed</strong>.",
    hint: "Past simple of claim (starts with c, 7 letters)"
  },
  {
    id: 'll_012',
    moduleId: 'liar-liar',
    prompt: "Complete the sentence: \"Be careful with statistics in your report; you cannot make a bold ________ (affirmation / allégation) without citing reliable sources.\"",
    answers: ["claim"],
    explanation: "As a noun, a <strong>claim</strong> is an assertion that something is true, often unsubstantiated.",
    hint: "Noun form (5 letters)"
  },
  {
    id: 'll_013',
    moduleId: 'liar-liar',
    prompt: "Complete the sentence with the correct form of the verb: \"All students enrolled in the BUT MT2E will ________ (obtenir leur diplôme) at the end of their third year.\"",
    answers: ["graduate"],
    explanation: "After the modal 'will', use the bare infinitive: <strong>graduate</strong> (to finish a degree program).",
    hint: "Infinitive verb (8 letters)"
  },
  {
    id: 'll_014',
    moduleId: 'liar-liar',
    prompt: "Complete the sentence with the past simple: \"My older sister ________ (sortir diplômée) from an engineering school in 2021.\"",
    answers: ["graduated"],
    explanation: "The past simple is <strong>graduated</strong>.",
    hint: "Add -d to graduate (9 letters)"
  },
  {
    id: 'll_015',
    moduleId: 'liar-liar',
    prompt: "Complete the sentence: \"In British English, to dismiss an employee who stole confidential energy audit data is to ________ them.\"",
    answers: ["sack","fire","dismiss"],
    explanation: "British English frequently uses <strong>sack</strong> (or fire/dismiss) for employee termination.",
    hint: "Starts with S (4 letters)"
  },
  {
    id: 'll_016',
    moduleId: 'liar-liar',
    prompt: "Complete the sentence: \"He was ________ (renvoyé / licencié) from the thermal plant after violating safety protocols three times.\"",
    answers: ["fired","sacked","dismissed"],
    explanation: "Passive past participle: was <strong>fired</strong> / was <strong>sacked</strong> / was <strong>dismissed</strong>.",
    hint: "Past participle (starts with f or s)"
  },
  {
    id: 'll_017',
    moduleId: 'liar-liar',
    prompt: "Complete the sentence: \"With the growth of offshore wind energy, our consultancy needs to ________ (embaucher) ten renewable energy technicians.\"",
    answers: ["hire","recruit","employ"],
    explanation: "To <strong>hire</strong> or <strong>recruit</strong> means to employ new personnel.",
    hint: "Starts with H (4 letters)"
  },
  {
    id: 'll_018',
    moduleId: 'liar-liar',
    prompt: "Complete the sentence with the verb in the present continuous: \"GreenTech Solutions is currently ________ (recruter) junior engineers for thermal auditing projects.\"",
    answers: ["hiring","recruiting"],
    explanation: "Present continuous: is currently <strong>hiring</strong> (or recruiting).",
    hint: "hire + ing (6 letters)"
  },
  {
    id: 'll_019',
    moduleId: 'liar-liar',
    prompt: "Complete the sentence: \"Due to severe disagreements with the new environmental director, the chief engineer decided to ________ (démissionner).\"",
    answers: ["resign","step down","quit"],
    explanation: "To <strong>resign</strong> means to voluntarily give up a position or job.",
    hint: "Starts with R (6 letters)"
  },
  {
    id: 'll_020',
    moduleId: 'liar-liar',
    prompt: "What noun refers to the formal notice an employee submits when leaving their job? \"She handed in her letter of ________.\"",
    answers: ["resignation"],
    explanation: "The noun form of resign is <strong>resignation</strong> (letter of resignation).",
    hint: "Noun ending in -ation (11 letters)"
  },
  {
    id: 'll_021',
    moduleId: 'liar-liar',
    prompt: "Complete the sentence: \"Recruitment teams routinely ________ (vérifier / filtrer) candidates' social media profiles and diplomas before scheduling an interview.\"",
    answers: ["screen","vet","check"],
    explanation: "To <strong>screen</strong> applicants means to examine their backgrounds, qualifications, and suitability.",
    hint: "Starts with S (6 letters)"
  },
  {
    id: 'll_022',
    moduleId: 'liar-liar',
    prompt: "What term describes the preliminary process of checking a candidate's credentials and references? \"Background ________.\"",
    answers: ["check","screening","checks"],
    explanation: "A background <strong>check</strong> (or background <strong>screening</strong>) verifies an applicant's past employment and qualifications.",
    hint: "5 letters (c...) or 9 letters (s...)"
  },
  {
    id: 'll_023',
    moduleId: 'liar-liar',
    prompt: "Complete the sentence with the past simple: \"A recent survey showed that 40% of applicants ________ (ont enjolivé / exagéré) their technical competencies on their resume.\"",
    answers: ["embellished","exaggerated"],
    explanation: "Past simple of embellish is <strong>embellished</strong>.",
    hint: "Add -ed to embellish (11 letters)"
  },
  {
    id: 'll_024',
    moduleId: 'liar-liar',
    prompt: "Give the English word for a person who officially submits an application for an open position: \"A job ________.\"",
    answers: ["applicant","candidate"],
    explanation: "A person applying for a job is a job <strong>applicant</strong> (or candidate).",
    hint: "Starts with A (9 letters)"
  },
  {
    id: 'll_025',
    moduleId: 'liar-liar',
    prompt: "What specific term is used in British English for a person who provides a professional reference for you on your CV?",
    answers: ["referee","reference"],
    explanation: "In the UK, a person providing a reference is called a <strong>referee</strong> (in US English, also reference).",
    hint: "Starts with R (7 letters)"
  },
  {
    id: 'll_026',
    moduleId: 'liar-liar',
    prompt: "What word describes an unfilled position or job opening within an organization? \"The engineering office currently has a job ________ for an HVAC designer.\"",
    answers: ["vacancy","opening"],
    explanation: "A job <strong>vacancy</strong> (or job opening) is an available post waiting to be filled.",
    hint: "Starts with V (7 letters)"
  },
  {
    id: 'll_027',
    moduleId: 'liar-liar',
    prompt: "Complete the quote from the course article: \"Research proves that candidates often ________ (mentent) about their past salaries and degrees.\"",
    answers: ["lie"],
    explanation: "To <strong>lie</strong> means to make an untrue statement deliberately.",
    hint: "3 letters (starts with L)"
  },
  {
    id: 'll_028',
    moduleId: 'liar-liar',
    prompt: "Give the English verb meaning to give someone a false impression or make them believe something that is not true: \"To ________ an interviewer.\"",
    answers: ["mislead","deceive"],
    explanation: "To <strong>mislead</strong> (or deceive) means to cause someone to believe an untruth.",
    hint: "Starts with M (7 letters)"
  },
  {
    id: 'll_029',
    moduleId: 'liar-liar',
    prompt: "What is the trial period called when you start a new job, during which your employer evaluates your performance? \"A ________ period.\"",
    answers: ["probation","probationary","trial"],
    explanation: "A <strong>probation</strong> period (or probationary period) is the introductory trial phase of a job.",
    hint: "Starts with P (9 letters)"
  },
  {
    id: 'll_030',
    moduleId: 'liar-liar',
    prompt: "What English word refers to documents or qualifications proving someone's competence, background, or identity? \"Academic ________.\"",
    answers: ["credentials","qualifications"],
    explanation: "<strong>Credentials</strong> are certificates or qualifications verifying one's abilities.",
    hint: "Starts with C (11 letters)"
  },
  // --------------------------------------------------------------------------
  // MODULE 2: CV SECTIONS, TRANSLATIONS, IT & SOFT SKILLS
  // --------------------------------------------------------------------------
  {
    id: 'cv_001',
    moduleId: 'cv-vocab',
    prompt: "Translate into English: \"Baccalauréat\"",
    answers: ["a-levels","a levels","a-level","a level","alevels","high school diploma"],
    explanation: "In the UK, the equivalent of the French Baccalauréat is <strong>A-levels</strong> (or High school diploma in the US).",
    hint: "Hyphenated letter + plural word"
  },
  {
    id: 'cv_002',
    moduleId: 'cv-vocab',
    prompt: "Translate into English: \"Avec mention\" (e.g., Baccalauréat avec mention)",
    answers: ["with honours","with distinction","with honors","honours","honors","distinction"],
    explanation: "<strong>With honours</strong> (UK) or <strong>with distinction</strong> is the standard academic translation.",
    hint: "with h..."
  },
  {
    id: 'cv_003',
    moduleId: 'cv-vocab',
    prompt: "Translate into English: \"BUT (Bachelor Universitaire de Technologie)\"",
    answers: ["bachelor of technology","bachelor in technology","vocational bachelor","bachelor of technology in energy transition and efficiency"],
    explanation: "The official academic translation for a BUT is <strong>Bachelor of Technology</strong>.",
    hint: "Bachelor of T..."
  },
  {
    id: 'cv_004',
    moduleId: 'cv-vocab',
    prompt: "Translate the department acronym MT2E into English: \"Métiers de la Transition et de l'Efficacité Énergétiques\"",
    answers: ["energy transition and efficiency","energy transition and energy efficiency","energy transition & efficiency"],
    explanation: "MT2E stands for <strong>Energy Transition and Efficiency</strong>.",
    hint: "Energy T... and E..."
  },
  {
    id: 'cv_005',
    moduleId: 'cv-vocab',
    prompt: "Translate into English: \"IUT (Institut Universitaire de Technologie)\"",
    answers: ["university institute of technology","institute of technology"],
    explanation: "IUT translates to <strong>University Institute of Technology</strong>.",
    hint: "3 words: University I... of T..."
  },
  {
    id: 'cv_006',
    moduleId: 'cv-vocab',
    prompt: "Translate into English: \"Stage\" (in a company)",
    answers: ["internship","work placement","an internship","intern"],
    explanation: "<strong>Internship</strong> (US) or <strong>work placement</strong> (UK) is the professional translation.",
    hint: "Starts with I (10 letters)"
  },
  {
    id: 'cv_007',
    moduleId: 'cv-vocab',
    prompt: "Translate into English: \"Stage rémunéré\"",
    answers: ["paid internship","paid work placement","paid stage"],
    explanation: "A remunerated stage is a <strong>paid internship</strong>.",
    hint: "paid i..."
  },
  {
    id: 'cv_008',
    moduleId: 'cv-vocab',
    prompt: "Translate into English: \"Temps partiel\" (as in part-time work)",
    answers: ["part-time","part time","part-time job","part time job","part-time work","part time work"],
    explanation: "<strong>Part-time</strong> is opposed to full-time.",
    hint: "Opposite of full-time"
  },
  {
    id: 'cv_009',
    moduleId: 'cv-vocab',
    prompt: "Translate into English: \"Bénévolat\"",
    answers: ["volunteering","voluntary work","volunteer work","volunteer"],
    explanation: "<strong>Volunteering</strong> or <strong>voluntary work</strong> is the standard CV term.",
    hint: "Starts with V (12 letters)"
  },
  {
    id: 'cv_010',
    moduleId: 'cv-vocab',
    prompt: "Complete the IT skills expression for \"Avoir les bases / des notions de\": \"To have a ________ knowledge of Python.\"",
    answers: ["working","working knowledge","working knowledge of"],
    explanation: "In CV terminology, \"avoir les bases\" translates to having a <strong>working knowledge of</strong>.",
    hint: "Starts with W (7 letters)"
  },
  {
    id: 'cv_011',
    moduleId: 'cv-vocab',
    prompt: "Complete the IT skills expression for \"Très bien maîtriser\": \"To be ________ with AutoCAD.\"",
    answers: ["proficient","proficient with","proficient in"],
    explanation: "To express advanced mastery on a CV, use <strong>proficient with</strong> (or in).",
    hint: "Starts with P (10 letters)"
  },
  {
    id: 'cv_012',
    moduleId: 'cv-vocab',
    prompt: "Translate into English: \"Langue maternelle\"",
    answers: ["mother tongue","native speaker","native language","first language"],
    explanation: "<strong>Mother tongue</strong> or <strong>native speaker</strong> is used for your first language.",
    hint: "M... tongue"
  },
  {
    id: 'cv_013',
    moduleId: 'cv-vocab',
    prompt: "Which key soft skill is typically demonstrated by playing team sports (rugby, football, basketball)?",
    answers: ["leadership","teamwork","interpersonal skills","communication","team player","team work"],
    explanation: "Team sports demonstrate <strong>leadership</strong>, <strong>teamwork</strong>, or <strong>interpersonal skills</strong>.",
    hint: "Think of leading a group or working in a team"
  },
  {
    id: 'cv_014',
    moduleId: 'cv-vocab',
    prompt: "Which key soft skill is demonstrated by practicing individual endurance sports (running, swimming, cycling)?",
    answers: ["determination","self-motivation","discipline","resilience","self motivation","motivation"],
    explanation: "Individual sports highlight <strong>determination</strong>, <strong>self-motivation</strong>, and <strong>discipline</strong>.",
    hint: "Starts with D (determination) or S (self-motivation)"
  },
  {
    id: 'cv_015',
    moduleId: 'cv-vocab',
    prompt: "Which soft skill is demonstrated by travelling abroad to different cultures?",
    answers: ["intercultural awareness","adaptability","open-mindedness","language skills","cultural awareness"],
    explanation: "Travelling shows <strong>intercultural awareness</strong>, <strong>adaptability</strong>, and openness to others.",
    hint: "Intercultural a..."
  },
  {
    id: 'cv_016',
    moduleId: 'cv-vocab',
    prompt: "Which skill is demonstrated by playing mind sports and strategy games (chess, puzzles)?",
    answers: ["analytical skills","intelligence","strategic thinking","problem-solving","analytical","problem solving"],
    explanation: "Mind sports develop <strong>analytical skills</strong>, <strong>intelligence</strong>, and strategic thinking.",
    hint: "A... skills"
  },
  {
    id: 'cv_017',
    moduleId: 'cv-vocab',
    prompt: "Which skill is demonstrated by artistic interests (photography, theater, painting)?",
    answers: ["creativity","resourcefulness","creativity / resourcefulness","creative"],
    explanation: "Artistic hobbies show <strong>creativity</strong> and <strong>resourcefulness</strong>.",
    hint: "Starts with C (10 letters)"
  },
  {
    id: 'cv_018',
    moduleId: 'cv-vocab',
    prompt: "Which section of a British CV is an introductory paragraph placed at the top that summarizes your career objective and strengths?",
    answers: ["personal statement","profile","career objective","professional profile"],
    explanation: "The <strong>Personal Statement</strong> (or Profile) is the introductory hook on a British CV.",
    hint: "Two words: Personal S..."
  },
  {
    id: 'cv_019',
    moduleId: 'cv-vocab',
    prompt: "In which section of your CV do you detail your BUT MT2E, your A-levels, and your technical coursework?",
    answers: ["education","education & qualifications","education and qualifications","qualifications"],
    explanation: "Diplomas and academic coursework belong in <strong>Education & Qualifications</strong>.",
    hint: "Starts with E (9 letters)"
  },
  {
    id: 'cv_020',
    moduleId: 'cv-vocab',
    prompt: "Under which CV section do you list summer jobs, work placements, and student technical projects?",
    answers: ["work experience","employment history","experience","professional experience"],
    explanation: "Jobs and internships are listed under <strong>Work Experience</strong> (or Employment History).",
    hint: "Two words: Work E..."
  },
  {
    id: 'cv_021',
    moduleId: 'cv-vocab',
    prompt: "What is the final section of a standard British CV, where you state whether contact details of past employers can be provided?",
    answers: ["references","referees"],
    explanation: "The final section is <strong>References</strong>.",
    hint: "Starts with R (10 letters)"
  },
  {
    id: 'cv_022',
    moduleId: 'cv-vocab',
    prompt: "What standard phrase is traditionally written under the References section of a student CV?",
    answers: ["references available upon request","available upon request"],
    explanation: "The standard phrase is <strong>\"References available upon request\"</strong>.",
    hint: "References a... u... r..."
  },
  {
    id: 'cv_023',
    moduleId: 'cv-vocab',
    prompt: "Under which section of a CV do you mention competitive sports, travelling, or playing musical instruments?",
    answers: ["interests","interests & activities","interests and activities","hobbies","activities"],
    explanation: "Leisure activities are listed under <strong>Interests & Activities</strong> (or Hobbies).",
    hint: "Starts with I (9 letters)"
  },
  {
    id: 'cv_024',
    moduleId: 'cv-vocab',
    prompt: "Translate 'École d'ingénieurs' into English for an academic CV:",
    answers: ["engineering school","graduate engineering school","school of engineering"],
    explanation: "The English equivalent is an <strong>engineering school</strong> (or school of engineering).",
    hint: "Two words: E... school"
  },
  {
    id: 'cv_025',
    moduleId: 'cv-vocab',
    prompt: "Translate 'Relevé de notes officiel' into English (document showing exam marks across semesters):",
    answers: ["transcript","official transcript","academic transcript","transcript of records"],
    explanation: "An official record of academic results is a <strong>transcript</strong> (or transcript of records).",
    hint: "Starts with T (10 letters)"
  },
  {
    id: 'cv_026',
    moduleId: 'cv-vocab',
    prompt: "Translate into British English: 'Baccalauréat mention très bien':",
    answers: ["with high honours","with highest honours","with distinction","first class honours"],
    explanation: "'Mention très bien' is translated as <strong>with high honours</strong> or <strong>with distinction</strong>.",
    hint: "with high h..."
  },
  {
    id: 'cv_027',
    moduleId: 'cv-vocab',
    prompt: "Why is writing the word 'stage' on an English CV an absolute error? What is the correct English word?",
    answers: ["internship","work placement","it is a false friend","intern"],
    explanation: "'Stage' in English means a platform/theatre or a phase. An internship is an <strong>internship</strong> (US) or <strong>work placement</strong> (UK).",
    hint: "Starts with I (10 letters)"
  },
  {
    id: 'cv_028',
    moduleId: 'cv-vocab',
    prompt: "On an English CV, what should you write instead of the French word 'formation' for your university studies?",
    answers: ["education","degree","academic background","coursework","qualifications"],
    explanation: "Never use the false friend 'formation'. Use <strong>education</strong>, <strong>degree</strong>, or <strong>qualifications</strong>.",
    hint: "Starts with E (9 letters)"
  },
  {
    id: 'cv_029',
    moduleId: 'cv-vocab',
    prompt: "Complete the IT skill description for an intermediate user: '________ knowledge of Python and MATLAB.'",
    answers: ["working","working knowledge","a working"],
    explanation: "Having practical foundational skills is expressed as a <strong>working knowledge</strong> of a software.",
    hint: "Starts with W (7 letters)"
  },
  {
    id: 'cv_030',
    moduleId: 'cv-vocab',
    prompt: "Complete the IT skill description for advanced mastery: 'Highly ________ with Microsoft Excel and AutoCAD.'",
    answers: ["proficient","skilled"],
    explanation: "Expert command on a CV is written as <strong>proficient with</strong> (or in).",
    hint: "Starts with P (10 letters)"
  },
  {
    id: 'cv_031',
    moduleId: 'cv-vocab',
    prompt: "What English adjective denotes having complete mastery of a foreign language (speaking and writing with ease)?",
    answers: ["fluent","proficient","advanced"],
    explanation: "Speaking easily and accurately is being <strong>fluent</strong> (or advanced / C1-C2).",
    hint: "Starts with F (6 letters)"
  },
  {
    id: 'cv_032',
    moduleId: 'cv-vocab',
    prompt: "What word should you use on a CV to denote a basic / starter level in a foreign language like Spanish or German?",
    answers: ["beginner","basic","elementary","a1","a2"],
    explanation: "A starter level is listed as <strong>Beginner</strong> (or Elementary / Basic).",
    hint: "Starts with B (8 letters)"
  },
  {
    id: 'cv_033',
    moduleId: 'cv-vocab',
    prompt: "If you play competitive handball or row in a crew, which two key soft skills can you highlight on your CV?",
    answers: ["teamwork","teamwork and leadership","communication","leadership","team player","collaboration"],
    explanation: "Crew sports demonstrate <strong>teamwork</strong>, <strong>leadership</strong>, and collaboration.",
    hint: "Team..."
  },
  {
    id: 'cv_034',
    moduleId: 'cv-vocab',
    prompt: "Which soft skill is demonstrated by training for a half-marathon or cycling long distances?",
    answers: ["discipline","determination","perseverance","resilience","self-motivation","endurance"],
    explanation: "Endurance athletics highlight <strong>discipline</strong>, <strong>determination</strong>, and <strong>resilience</strong>.",
    hint: "Starts with D (discipline) or P (perseverance)"
  },
  {
    id: 'cv_035',
    moduleId: 'cv-vocab',
    prompt: "Which soft skill is evidenced by regularly playing tournament chess or coding algorithmic scripts?",
    answers: ["problem-solving","analytical skills","problem solving","analytical thinking","strategic thinking"],
    explanation: "Strategy games demonstrate <strong>analytical skills</strong> and <strong>problem-solving</strong>.",
    hint: "P... solving or A... skills"
  },
  {
    id: 'cv_036',
    moduleId: 'cv-vocab',
    prompt: "Which soft skill does an employer deduce when you mention volunteering in an NGO or food shelter?",
    answers: ["empathy","social skills","interpersonal skills","communication","solidarity","altruism"],
    explanation: "Volunteering shows strong <strong>interpersonal skills</strong>, <strong>empathy</strong>, and civic commitment.",
    hint: "E... or Interpersonal s..."
  },
  {
    id: 'cv_037',
    moduleId: 'cv-vocab',
    prompt: "Which soft skill is demonstrated by restoring vintage electronics or doing automotive mechanics?",
    answers: ["attention to detail","practical skills","problem-solving","manual dexterity","rigour","patience"],
    explanation: "Hands-on tinkering displays <strong>attention to detail</strong> and practical <strong>problem-solving</strong>.",
    hint: "Attention to d..."
  },
  {
    id: 'cv_038',
    moduleId: 'cv-vocab',
    prompt: "Translate 'Emploi à plein temps' into English:",
    answers: ["full-time job","full-time","full time job","full time"],
    explanation: "A standard 35+ hour schedule is a <strong>full-time job</strong>.",
    hint: "Opposite of part-time"
  },
  {
    id: 'cv_039',
    moduleId: 'cv-vocab',
    prompt: "Translate 'Job d'été' into English for the experience section of a CV:",
    answers: ["summer job","summer work"],
    explanation: "Seasonal work is referred to as a <strong>summer job</strong>.",
    hint: "Two words: S... job"
  },
  {
    id: 'cv_040',
    moduleId: 'cv-vocab',
    prompt: "According to British recruitment standards, should you include a photo and your age on a UK CV? (Answer 'Yes' or 'No')",
    answers: ["no","never"],
    explanation: "In the UK, to prevent unconscious discrimination, CVs should <strong>never</strong> include a photo, age, or marital status.",
    hint: "2 letters (N...)"
  },
  // --------------------------------------------------------------------------
  // MODULE 3: TENSES (PRESENT CONTINUOUS, PAST SIMPLE, PRESENT PERFECT SIMPLE)
  // --------------------------------------------------------------------------
  {
    id: 'ts_001',
    moduleId: 'tenses',
    prompt: "Type the verb in the correct tense: \"Look at the thermometer! The temperature ________ (rise) rapidly right now.\"",
    answers: ["is rising"],
    explanation: "The marker <strong>right now</strong> and the imperative <strong>Look!</strong> require the <strong>Present Continuous</strong> (is rising).",
    hint: "be + V-ing"
  },
  {
    id: 'ts_002',
    moduleId: 'tenses',
    prompt: "Type the verb in the correct tense: \"The engineer ________ (submit) his technical report to the board yesterday.\"",
    answers: ["submitted"],
    explanation: "The time marker <strong>yesterday</strong> specifies a completed past action: use <strong>Past Simple</strong> (submitted). Note the double \"t\".",
    hint: "Past simple of submit (ends with -tted)"
  },
  {
    id: 'ts_003',
    moduleId: 'tenses',
    prompt: "Type the verb in the correct tense: \"We ________ (already / test) the new heat pump system three times this week.\"",
    answers: ["have already tested","have tested"],
    explanation: "The adverb <strong>already</strong> signals a finished action with present relevance: use <strong>Present Perfect Simple</strong> (have already tested).",
    hint: "have + already + past participle"
  },
  {
    id: 'ts_004',
    moduleId: 'tenses',
    prompt: "Type the verb in the correct tense: \"The technician hasn't finished calibrating the sensors ________ (encore / pas encore). Type the time marker.\"",
    answers: ["yet"],
    explanation: "In negative present perfect sentences, the time marker at the end is <strong>yet</strong>.",
    hint: "3 letters starting with Y"
  },
  {
    id: 'ts_005',
    moduleId: 'tenses',
    prompt: "Type the verb in the correct tense: \"In 2022, our university ________ (install) fifty new photovoltaic solar panels on the roof.\"",
    answers: ["installed"],
    explanation: "<strong>In 2022</strong> is a specific, completed date in the past: use <strong>Past Simple</strong> (installed).",
    hint: "Past simple of install"
  },
  {
    id: 'ts_006',
    moduleId: 'tenses',
    prompt: "Type the verb in the correct tense: \"Eliot ________ (work) at this energy consulting firm since last September.\"",
    answers: ["has worked","has been working"],
    explanation: "The time marker <strong>since</strong> indicates an action that started in the past and continues today: use <strong>Present Perfect</strong> (has worked).",
    hint: "has + past participle"
  },
  {
    id: 'ts_007',
    moduleId: 'tenses',
    prompt: "Type the verb in the correct tense: \"At the moment, our research team ________ (develop) a new thermal insulation prototype.\"",
    answers: ["is developing"],
    explanation: "The marker <strong>At the moment</strong> indicates an ongoing temporary activity: use <strong>Present Continuous</strong> (is developing).",
    hint: "be + develop + ing"
  },
  {
    id: 'ts_008',
    moduleId: 'tenses',
    prompt: "Type the verb in the correct tense: \"How long ________ (you / know) about the boiler leak?\"",
    answers: ["have you known"],
    explanation: "With <strong>How long</strong> asking about duration up to the present, use <strong>Present Perfect</strong> (have you known).",
    hint: "have you + irregular past participle of know"
  },
  {
    id: 'ts_009',
    moduleId: 'tenses',
    prompt: "Type the verb in the correct tense: \"Two weeks ago, the maintenance crew ________ (repair) the geothermal pipe.\"",
    answers: ["repaired"],
    explanation: "The time marker <strong>ago</strong> demands the <strong>Past Simple</strong> (repaired).",
    hint: "Past simple of repair"
  },
  {
    id: 'ts_010',
    moduleId: 'tenses',
    prompt: "Type the verb in the correct tense: \"Energy prices ________ (increase) continuously these days.\"",
    answers: ["are increasing"],
    explanation: "The marker <strong>these days</strong> describes an ongoing trend or changing situation: use <strong>Present Continuous</strong> (are increasing).",
    hint: "are + increase (drop e) + ing"
  },
  {
    id: 'ts_011',
    moduleId: 'tenses',
    prompt: "Type the verb in the correct tense: \"Last semester, Eliot ________ (conduct) an energy audit on the campus library.\"",
    answers: ["conducted"],
    explanation: "'Last semester' specifies a completed past time: use <strong>Past Simple</strong> (conducted).",
    hint: "conduct + ed"
  },
  {
    id: 'ts_012',
    moduleId: 'tenses',
    prompt: "Type the verb in the correct tense: \"Look! The digital display ________ (show) a significant increase in solar production.\"",
    answers: ["is showing"],
    explanation: "'Look!' indicates an action occurring right now: use <strong>Present Continuous</strong> (is showing).",
    hint: "be + show + ing"
  },
  {
    id: 'ts_013',
    moduleId: 'tenses',
    prompt: "Type the verb in the correct tense: \"The engineering firm ________ (already / install) twenty geothermal heat pumps across the city.\"",
    answers: ["has already installed","has installed"],
    explanation: "With 'already' referring to life experience / current achievement, use <strong>Present Perfect</strong> (has already installed).",
    hint: "has + already + installed"
  },
  {
    id: 'ts_014',
    moduleId: 'tenses',
    prompt: "Type the verb in the correct tense: \"France ________ (reduce) its greenhouse gas emissions by 4% since 2022.\"",
    answers: ["has reduced"],
    explanation: "'Since 2022' links the past to the present: use <strong>Present Perfect Simple</strong> (has reduced).",
    hint: "has + past participle"
  },
  {
    id: 'ts_015',
    moduleId: 'tenses',
    prompt: "Type the verb in the correct tense: \"The European Union ________ (adopt) the Green Deal framework in 2019.\"",
    answers: ["adopted"],
    explanation: "'In 2019' is a finished past date: use <strong>Past Simple</strong> (adopted).",
    hint: "adopt + ed"
  },
  {
    id: 'ts_016',
    moduleId: 'tenses',
    prompt: "Type the verb in the correct tense: \"Our university lab ________ (currently / design) an innovative wind turbine blade.\"",
    answers: ["is currently designing","is designing"],
    explanation: "'Currently' marks an ongoing project in progress: use <strong>Present Continuous</strong> (is currently designing).",
    hint: "is + designing"
  },
  {
    id: 'ts_017',
    moduleId: 'tenses',
    prompt: "Type the verb in the correct tense: \"I ________ (never / operate) an industrial biomass boiler before.\"",
    answers: ["have never operated","have not operated"],
    explanation: "'Never' with past life experience up to now requires <strong>Present Perfect</strong> (have never operated).",
    hint: "have + never + operated"
  },
  {
    id: 'ts_018',
    moduleId: 'tenses',
    prompt: "Type the verb in the correct tense: \"The safety inspector ________ (shut) down the thermal circuit yesterday afternoon.\"",
    answers: ["shut"],
    explanation: "'Shut' is an irregular verb: past simple of shut is <strong>shut</strong> (shut-shut-shut).",
    hint: "Irregular verb: identical form"
  },
  {
    id: 'ts_019',
    moduleId: 'tenses',
    prompt: "Type the verb in the correct tense: \"Electric vehicle sales ________ (grow) rapidly throughout Europe this year.\"",
    answers: ["are growing"],
    explanation: "An evolving current trend takes the <strong>Present Continuous</strong> (are growing).",
    hint: "are + grow + ing"
  },
  {
    id: 'ts_020',
    moduleId: 'tenses',
    prompt: "Type the verb in the correct tense: \"She ________ (work) as an HVAC project manager for six years now.\"",
    answers: ["has worked","has been working"],
    explanation: "'For six years now' indicates a state continuing into the present: use <strong>Present Perfect</strong> (has worked).",
    hint: "has + worked"
  },
  {
    id: 'ts_021',
    moduleId: 'tenses',
    prompt: "Type the verb in the correct tense: \"The research team ________ (publish) their breakthrough paper on thermal storage two months ago.\"",
    answers: ["published"],
    explanation: "'Ago' demands the <strong>Past Simple</strong> (published).",
    hint: "publish + ed"
  },
  {
    id: 'ts_022',
    moduleId: 'tenses',
    prompt: "Type the verb in the correct tense: \"Please be quiet, the students ________ (take) an English exam right now!\"",
    answers: ["are taking"],
    explanation: "'Right now' takes the <strong>Present Continuous</strong>: are taking.",
    hint: "are + take (drop e) + ing"
  },
  {
    id: 'ts_023',
    moduleId: 'tenses',
    prompt: "Type the full verb phrase: \"________ (you / ever / see) an anaerobic digestion biogas plant?\"",
    answers: ["have you ever seen","have you seen"],
    explanation: "Question about life experience: <strong>Have you ever seen</strong> (Present Perfect).",
    hint: "have you ever + past participle of see"
  },
  {
    id: 'ts_024',
    moduleId: 'tenses',
    prompt: "Type the negative past simple form: \"The technician ________ (not / find) any leaks during the pipe inspection yesterday.\"",
    answers: ["did not find","didn't find"],
    explanation: "Negative past simple: <strong>did not find</strong> (auxiliary did + bare infinitive).",
    hint: "did not + find"
  },
  {
    id: 'ts_025',
    moduleId: 'tenses',
    prompt: "Type the verb in the correct tense: \"Be careful! The technician ________ (just / connect) the high-voltage inverter.\"",
    answers: ["has just connected","has connected"],
    explanation: "'Just' indicates a very recent action connected to now: use <strong>Present Perfect</strong> (has just connected).",
    hint: "has + just + connected"
  },
  {
    id: 'ts_026',
    moduleId: 'tenses',
    prompt: "Type the past simple of 'choose': \"Last year, the campus ________ (choose) renewable energy over gas heating.\"",
    answers: ["chose"],
    explanation: "The irregular past simple of choose is <strong>chose</strong> (with a single 'o').",
    hint: "One 'o' (5 letters)"
  },
  {
    id: 'ts_027',
    moduleId: 'tenses',
    prompt: "Type the verb in the correct tense: \"So far this semester, we ________ (complete) four laboratory projects in fluid mechanics.\"",
    answers: ["have completed"],
    explanation: "'So far' indicates progress up to the present moment: use <strong>Present Perfect</strong> (have completed).",
    hint: "have + completed"
  },
  {
    id: 'ts_028',
    moduleId: 'tenses',
    prompt: "Type the past simple of 'write': \"In 2023, she ________ (write) a comprehensive guide on building insulation.\"",
    answers: ["wrote"],
    explanation: "Past simple of write is <strong>wrote</strong>.",
    hint: "Starts with w (5 letters)"
  },
  {
    id: 'ts_029',
    moduleId: 'tenses',
    prompt: "Type the verb in the correct tense: \"This week, Eliot ________ (do) a training seminar on Climawin software.\"",
    answers: ["is doing"],
    explanation: "'This week' indicates a temporary ongoing situation: use <strong>Present Continuous</strong> (is doing).",
    hint: "is + doing"
  },
  {
    id: 'ts_030',
    moduleId: 'tenses',
    prompt: "Type the verb in the correct tense: \"The city council ________ (not / approve) the budget for solar streetlights yet.\"",
    answers: ["has not approved","hasn't approved"],
    explanation: "'Yet' in a negative sentence demands the <strong>Present Perfect</strong> (has not approved).",
    hint: "has not + approved"
  },
  {
    id: 'ts_031',
    moduleId: 'tenses',
    prompt: "Type the verb in the correct tense: \"When the technician turned on the generator, it ________ (make) a strange rattling sound.\"",
    answers: ["made"],
    explanation: "A completed consecutive action in the past: <strong>made</strong> (Past Simple of make).",
    hint: "Irregular past of make (4 letters)"
  },
  {
    id: 'ts_032',
    moduleId: 'tenses',
    prompt: "Type the verb in the correct tense: \"Listen! The ventilation system ________ (make) an unusual noise.\"",
    answers: ["is making"],
    explanation: "'Listen!' signals an action happening in real time: use <strong>Present Continuous</strong> (is making).",
    hint: "is + make (drop e) + ing"
  },
  {
    id: 'ts_033',
    moduleId: 'tenses',
    prompt: "Type the verb in the correct tense: \"Our university ________ (build) three zero-emission buildings since 2018.\"",
    answers: ["has built"],
    explanation: "Since 2018 + irregular verb build: <strong>has built</strong>.",
    hint: "has + past participle of build (ends in -t)"
  },
  {
    id: 'ts_034',
    moduleId: 'tenses',
    prompt: "Type the question in the past simple: \"________ (you / attend) the energy conference in Paris last month?\"",
    answers: ["did you attend"],
    explanation: "Past simple question with did: <strong>Did you attend</strong>.",
    hint: "did + subject + attend"
  },
  {
    id: 'ts_035',
    moduleId: 'tenses',
    prompt: "Type the verb in the correct tense: \"We ________ (save) over 500 kWh of electricity this month.\"",
    answers: ["have saved"],
    explanation: "'This month' is an unfinished period: use <strong>Present Perfect</strong> (have saved).",
    hint: "have + saved"
  },
  {
    id: 'ts_036',
    moduleId: 'tenses',
    prompt: "Type the verb in the correct tense: \"During the cold snap last December, the outside temperature ________ (fall) to minus ten degrees Celsius.\"",
    answers: ["fell"],
    explanation: "The irregular past simple of fall is <strong>fell</strong> (fall-fell-fallen). 'Last December' marks a finished past action.",
    hint: "Past simple of fall (4 letters)"
  },
  {
    id: 'ts_037',
    moduleId: 'tenses',
    prompt: "Type the verb in the correct tense: \"Look at the barometer! Atmospheric pressure ________ (drop) very quickly.\"",
    answers: ["is dropping"],
    explanation: "'Look!' indicates an action in progress right now: use <strong>Present Continuous</strong> (is dropping). Note the double 'p' (consonant-vowel-consonant rule).",
    hint: "be + drop (double p) + ing"
  },
  {
    id: 'ts_038',
    moduleId: 'tenses',
    prompt: "Type the verb in the correct tense: \"The share of wind and solar energy in France ________ (grow) significantly over the last five years.\"",
    answers: ["has grown"],
    explanation: "The irregular past participle of grow is <strong>grown</strong> (grow-grew-grown). With 'over the last five years' (unfinished period connected to present), use <strong>Present Perfect</strong> (has grown).",
    hint: "has + irregular past participle of grow"
  },
  {
    id: 'ts_039',
    moduleId: 'tenses',
    prompt: "Type the verb in the correct tense: \"Last year, the chief technician ________ (lead) the project to replace the campus gas boilers.\"",
    answers: ["led"],
    explanation: "The past simple of lead is <strong>led</strong> (single 'e', not 'leaded').",
    hint: "3 letters (starts with L)"
  },
  {
    id: 'ts_040',
    moduleId: 'tenses',
    prompt: "Type the verb in the correct tense: \"Careful! Steam ________ (leak) from the main valve right now.\"",
    answers: ["is leaking"],
    explanation: "'Right now' indicates an action occurring this instant: use <strong>Present Continuous</strong> (is leaking).",
    hint: "is + leak + ing"
  },
  {
    id: 'ts_041',
    moduleId: 'tenses',
    prompt: "Type the verb in the correct tense: \"Since installing the heat recovery unit, our factory ________ (cut) its natural gas consumption by 30%.\"",
    answers: ["has cut"],
    explanation: "'Cut' is an invariable irregular verb (cut-cut-cut). 'Since' demands the <strong>Present Perfect</strong> (has cut).",
    hint: "has + cut"
  },
  {
    id: 'ts_042',
    moduleId: 'tenses',
    prompt: "Type the verb in the correct tense: \"Two winters ago, the external drainage pipe ________ (freeze) during the polar vortex.\"",
    answers: ["froze"],
    explanation: "The irregular past simple of freeze is <strong>froze</strong> (freeze-froze-frozen).",
    hint: "5 letters (starts with F)"
  },
  {
    id: 'ts_043',
    moduleId: 'tenses',
    prompt: "Type the verb in the correct tense: \"The geothermal fluid ________ (already / freeze) inside the heat exchanger, so we must stop the pump immediately.\"",
    answers: ["has already frozen","has frozen"],
    explanation: "Present perfect with already: <strong>has already frozen</strong> (past participle of freeze is frozen).",
    hint: "has + already + frozen"
  },
  {
    id: 'ts_044',
    moduleId: 'tenses',
    prompt: "Type the verb in the correct tense: \"In 2023, the municipality ________ (spend) 150,000 euros on double-glazed window retrofits.\"",
    answers: ["spent"],
    explanation: "The irregular past simple of spend is <strong>spent</strong> (ends with 't').",
    hint: "5 letters (ends with -t)"
  },
  {
    id: 'ts_045',
    moduleId: 'tenses',
    prompt: "Type the verb in the correct tense: \"According to recent sensor data, thermal losses ________ (decrease) steadily this month.\"",
    answers: ["are decreasing"],
    explanation: "An ongoing trend in an active period takes the <strong>Present Continuous</strong> (are decreasing). Drop the 'e' before adding -ing.",
    hint: "are + decrease (drop e) + ing"
  },
  {
    id: 'ts_046',
    moduleId: 'tenses',
    prompt: "Type the verb in the correct tense: \"During yesterday's building inspection, the thermal auditors ________ (find) three major cold air leaks in the roof.\"",
    answers: ["found"],
    explanation: "The past simple of find is <strong>found</strong>.",
    hint: "5 letters (starts with F)"
  },
  {
    id: 'ts_047',
    moduleId: 'tenses',
    prompt: "Type the verb in the correct tense: \"Our HVAC installation ________ (already / meet) all European energy performance standards.\"",
    answers: ["has already met","has met"],
    explanation: "The irregular past participle of meet is <strong>met</strong>. With 'already', use <strong>Present Perfect</strong> (has already met).",
    hint: "has already + met (single e)"
  },
  {
    id: 'ts_048',
    moduleId: 'tenses',
    prompt: "Type the verb in the correct tense: \"A pressure surge ________ (break) the mechanical seal of the pump three days ago.\"",
    answers: ["broke"],
    explanation: "Past simple of break is <strong>broke</strong>. 'Ago' requires the Past Simple.",
    hint: "5 letters (starts with B)"
  },
  {
    id: 'ts_049',
    moduleId: 'tenses',
    prompt: "Type the verb in the correct tense: \"The primary circulation fan ________ (just / break) down, so the building is getting cold.\"",
    answers: ["has just broken","has broken"],
    explanation: "'Just' indicates a recent action with a direct impact on the present: use <strong>Present Perfect</strong> (has just broken).",
    hint: "has just + broken"
  },
  {
    id: 'ts_050',
    moduleId: 'tenses',
    prompt: "Type the verb in the correct tense: \"Last term, our IUT department ________ (buy) a new FLIR thermal imaging camera.\"",
    answers: ["bought"],
    explanation: "The irregular past simple of buy is <strong>bought</strong>.",
    hint: "b-o-u-g-h-t"
  },
  {
    id: 'ts_051',
    moduleId: 'tenses',
    prompt: "Type the verb in the correct tense: \"Listen! The emergency backup generator ________ (run) right now.\"",
    answers: ["is running"],
    explanation: "'Listen!' and 'right now' require the <strong>Present Continuous</strong> (is running). Note the double 'n'.",
    hint: "is + run (double n) + ing"
  },
  {
    id: 'ts_052',
    moduleId: 'tenses',
    prompt: "Type the verb in the correct tense: \"Yesterday, the diesel generator ________ (run) continuously for six hours during the blackout.\"",
    answers: ["ran"],
    explanation: "The past simple of run is <strong>ran</strong>.",
    hint: "3 letters: r-a-n"
  },
  {
    id: 'ts_053',
    moduleId: 'tenses',
    prompt: "Type the verb in the correct tense: \"The strong gale force wind ________ (blow) at 90 km/h yesterday, generating record electrical power.\"",
    answers: ["blew"],
    explanation: "The irregular past simple of blow is <strong>blew</strong> (blow-blew-blown).",
    hint: "4 letters: b-l-e-w"
  },
  {
    id: 'ts_054',
    moduleId: 'tenses',
    prompt: "Type the verb in the correct tense: \"The wind ________ (blow) steadily since this morning, keeping the turbines spinning at top speed.\"",
    answers: ["has blown","has been blowing"],
    explanation: "'Since this morning' indicates continuity up to the present: use <strong>Present Perfect</strong> (has blown).",
    hint: "has + blown"
  },
  {
    id: 'ts_055',
    moduleId: 'tenses',
    prompt: "Type the verb in the correct tense: \"Before retrofitting the insulation, the uninsulated house ________ (lose) over 35% of its heat through the roof.\"",
    answers: ["lost"],
    explanation: "The past simple of lose is <strong>lost</strong> (single 'o').",
    hint: "4 letters (l-o-s-t)"
  },
  {
    id: 'ts_056',
    moduleId: 'tenses',
    prompt: "Type the verb in the correct tense: \"The district heating network ________ (never / lose) so much thermal energy in a single week.\"",
    answers: ["has never lost"],
    explanation: "'Never' with experience up to now demands <strong>Present Perfect</strong> (has never lost).",
    hint: "has never + lost"
  },
  {
    id: 'ts_057',
    moduleId: 'tenses',
    prompt: "Type the verb in the correct tense: \"The client ________ (pay) the invoice for the heating maintenance yesterday.\"",
    answers: ["paid"],
    explanation: "The irregular past simple of pay is <strong>paid</strong> (not 'payed').",
    hint: "4 letters (p-a-i-d)"
  },
  {
    id: 'ts_058',
    moduleId: 'tenses',
    prompt: "Type the verb in the correct tense: \"At present, the solar plant ________ (operate) at 95% of its peak capacity.\"",
    answers: ["is operating"],
    explanation: "'At present' indicates current operation: use <strong>Present Continuous</strong> (is operating).",
    hint: "is + operate (drop e) + ing"
  },
  {
    id: 'ts_059',
    moduleId: 'tenses',
    prompt: "Type the verb in the correct tense: \"It ________ (take) the technicians three hours to balance the hydraulic circuit yesterday.\"",
    answers: ["took"],
    explanation: "The past simple of take is <strong>took</strong>.",
    hint: "4 letters (t-o-o-k)"
  },
  {
    id: 'ts_060',
    moduleId: 'tenses',
    prompt: "Type the verb in the correct tense: \"Eliot and his team ________ (maintain) this biomass heating facility for five years now.\"",
    answers: ["have maintained","have been maintaining"],
    explanation: "'For five years now' indicates an ongoing duration up to the present: use <strong>Present Perfect</strong> (have maintained).",
    hint: "have + maintained"
  },
  {
    id: 'ts_061',
    moduleId: 'tenses',
    prompt: "Type the verb in the correct tense: \"After the practical lab session, the students finally ________ (understand) the Carnot thermodynamic efficiency cycle.\"",
    answers: ["understood"],
    explanation: "The past simple of understand is <strong>understood</strong>.",
    hint: "ends with -stood"
  },
  {
    id: 'ts_062',
    moduleId: 'tenses',
    prompt: "Type the verb in the correct tense: \"Look at the water tank gauge! The water level ________ (rise) rapidly.\"",
    answers: ["is rising"],
    explanation: "'Look!' + action in real time = <strong>Present Continuous</strong> (is rising). Drop the final 'e' before -ing.",
    hint: "is + rise (drop e) + ing"
  },
  {
    id: 'ts_063',
    moduleId: 'tenses',
    prompt: "Type the verb in the correct tense: \"Between 2021 and 2023, electricity rates ________ (rise) by 28% in our region.\"",
    answers: ["rose"],
    explanation: "The irregular past simple of rise is <strong>rose</strong>.",
    hint: "4 letters (r-o-s-e)"
  },
  {
    id: 'ts_064',
    moduleId: 'tenses',
    prompt: "Type the verb in the correct tense: \"Global energy demand ________ (rise) to historic levels this year.\"",
    answers: ["has risen"],
    explanation: "Unfinished period (this year): use <strong>Present Perfect</strong> (has risen). Past participle of rise is risen.",
    hint: "has + risen"
  },
  {
    id: 'ts_065',
    moduleId: 'tenses',
    prompt: "Type the verb in the correct tense: \"In 2020, the factory ________ (sell) its old fuel-oil generators to transition to green electricity.\"",
    answers: ["sold"],
    explanation: "The irregular past simple of sell is <strong>sold</strong>.",
    hint: "4 letters (s-o-l-d)"
  },
  {
    id: 'ts_066',
    moduleId: 'tenses',
    prompt: "Type the verb in the correct tense: \"The safety board ________ (not / publish) the official report on the turbine fire yet.\"",
    answers: ["has not published","hasn't published"],
    explanation: "'Yet' in a negative sentence demands the <strong>Present Perfect</strong>: has not published.",
    hint: "has not + published"
  },
  {
    id: 'ts_067',
    moduleId: 'tenses',
    prompt: "Type the verb in the correct tense: \"While checking the boiler room, the night guard ________ (hear) an alarm beeping.\"",
    answers: ["heard"],
    explanation: "The past simple of hear is <strong>heard</strong> (add 'd', pronounced /hɜːd/).",
    hint: "5 letters (h-e-a-r-d)"
  },
  {
    id: 'ts_068',
    moduleId: 'tenses',
    prompt: "Type the verb in the correct tense: \"Currently, our engineering firm ________ (plan) the construction of a district heating network.\"",
    answers: ["is planning"],
    explanation: "'Currently' takes the <strong>Present Continuous</strong> (is planning). Note the double 'n'.",
    hint: "is + plan (double n) + ing"
  },
  {
    id: 'ts_069',
    moduleId: 'tenses',
    prompt: "Type the negative past simple form: \"The building ________ (not / consume) any gas last month because the solar panels were sufficient.\"",
    answers: ["did not consume","didn't consume"],
    explanation: "Negative past simple: <strong>did not consume</strong> (did not + base verb).",
    hint: "did not + consume"
  },
  {
    id: 'ts_070',
    moduleId: 'tenses',
    prompt: "Type the verb in the correct tense: \"We ________ (already / inspect) fifty thermal substations this quarter.\"",
    answers: ["have already inspected","have inspected"],
    explanation: "'Already' with current quarterly progress: use <strong>Present Perfect</strong> (have already inspected).",
    hint: "have already + inspected"
  },
  // --------------------------------------------------------------------------
  // MODULE 4: ACTIVE VS PASSIVE VOICE
  // --------------------------------------------------------------------------
  {
    id: 'pv_001',
    moduleId: 'passive',
    prompt: "Rewrite in the passive voice: \"They will shut down the coal-fired power station next month.\"",
    answers: ["the coal-fired power station will be shut down next month","the coal fired power station will be shut down next month","next month, the coal-fired power station will be shut down"],
    explanation: "Future modal passive: will + be + past participle (shut). <strong>\"The coal-fired power station will be shut down next month.\"</strong>",
    hint: "Start with \"The coal-fired power station will be...\""
  },
  {
    id: 'pv_002',
    moduleId: 'passive',
    prompt: "Rewrite in the passive voice: \"Engineers are monitoring the air quality levels carefully.\"",
    answers: ["the air quality levels are being monitored carefully","the air quality levels are being monitored carefully by engineers","the air quality levels are carefully being monitored"],
    explanation: "Present continuous passive: are + being + past participle (monitored). <strong>\"The air quality levels are being monitored carefully (by engineers).\"</strong>",
    hint: "Start with \"The air quality levels are being...\""
  },
  {
    id: 'pv_003',
    moduleId: 'passive',
    prompt: "Rewrite in the passive voice: \"They have installed new wave energy generators off the coast.\"",
    answers: ["new wave energy generators have been installed off the coast","new wave energy generators have been installed off the coast by them"],
    explanation: "Present perfect passive: have + been + past participle (installed). <strong>\"New wave energy generators have been installed off the coast.\"</strong>",
    hint: "Start with \"New wave energy generators have been...\""
  },
  {
    id: 'pv_004',
    moduleId: 'passive',
    prompt: "Rewrite in the passive voice: \"The technician inspected the solar panels yesterday.\"",
    answers: ["the solar panels were inspected yesterday","the solar panels were inspected yesterday by the technician","the solar panels were inspected by the technician yesterday","yesterday, the solar panels were inspected by the technician"],
    explanation: "Past simple passive: were (plural) + past participle (inspected). <strong>\"The solar panels were inspected yesterday (by the technician).\"</strong>",
    hint: "Start with \"The solar panels were...\""
  },
  {
    id: 'pv_005',
    moduleId: 'passive',
    prompt: "Rewrite in the passive voice: \"They must complete the safety inspection before Friday.\"",
    answers: ["the safety inspection must be completed before friday","the safety inspection must be completed before friday by them"],
    explanation: "Modal passive: must + be + past participle (completed). <strong>\"The safety inspection must be completed before Friday.\"</strong>",
    hint: "Start with \"The safety inspection must be...\""
  },
  {
    id: 'pv_006',
    moduleId: 'passive',
    prompt: "Rewrite in the passive voice: \"The company produces geothermal energy in this region.\"",
    answers: ["geothermal energy is produced in this region by the company","geothermal energy is produced by the company in this region","geothermal energy is produced in this region"],
    explanation: "Present simple passive: is (uncountable) + produced. <strong>\"Geothermal energy is produced by the company in this region.\"</strong>",
    hint: "Start with \"Geothermal energy is produced...\""
  },
  {
    id: 'pv_007',
    moduleId: 'passive',
    prompt: "Complete the passive sentence with the verb in the correct form: \"Dangerous chemical emissions ________ (prohibit) by European regulations since 2015.\"",
    answers: ["have been prohibited"],
    explanation: "Since 2015 + passive = <strong>have been prohibited</strong> (Present perfect passive plural).",
    hint: "have been + past participle"
  },
  {
    id: 'pv_008',
    moduleId: 'passive',
    prompt: "When transforming an active sentence to passive, under which conditions do we usually OMIT the agent (by...)?",
    answers: ["when the agent is unknown, obvious, or unimportant","unknown, obvious, or unimportant","when unknown or obvious","when it is unknown or obvious"],
    explanation: "We omit \"by [agent]\" when the person doing the action is <strong>unknown</strong>, <strong>obvious</strong>, or <strong>unimportant</strong>.",
    hint: "Three words: unknown, obvious, unimportant"
  },
  {
    id: 'pv_009',
    moduleId: 'passive',
    prompt: "Rewrite in the passive voice: \"Workers clean the solar panels every morning.\"",
    answers: ["the solar panels are cleaned every morning","the solar panels are cleaned every morning by workers","the solar panels are cleaned by workers every morning","every morning the solar panels are cleaned"],
    explanation: "Present simple passive: are (plural) + cleaned. <strong>\"The solar panels are cleaned every morning (by workers).\"</strong>",
    hint: "Start with \"The solar panels are cleaned...\""
  },
  {
    id: 'pv_010',
    moduleId: 'passive',
    prompt: "Rewrite in the passive voice: \"They are constructing a new offshore wind farm near the coast.\"",
    answers: ["a new offshore wind farm is being constructed near the coast","a new offshore wind farm is being constructed near the coast by them"],
    explanation: "Present continuous passive: is + being + past participle (constructed). <strong>\"A new offshore wind farm is being constructed near the coast.\"</strong>",
    hint: "Start with \"A new offshore wind farm is being...\""
  },
  {
    id: 'pv_011',
    moduleId: 'passive',
    prompt: "Rewrite in the passive voice: \"A Danish company designed these wind turbines in 2020.\"",
    answers: ["these wind turbines were designed in 2020 by a danish company","these wind turbines were designed by a danish company in 2020","in 2020 these wind turbines were designed by a danish company"],
    explanation: "Past simple passive: were (plural) + designed + by [agent]. <strong>\"These wind turbines were designed in 2020 by a Danish company.\"</strong>",
    hint: "Start with \"These wind turbines were designed...\""
  },
  {
    id: 'pv_012',
    moduleId: 'passive',
    prompt: "Rewrite in the passive voice: \"The government has banned fossil-fuel heating in new residential buildings.\"",
    answers: ["fossil-fuel heating has been banned in new residential buildings","fossil-fuel heating has been banned in new residential buildings by the government","fossil fuel heating has been banned in new residential buildings"],
    explanation: "Present perfect passive: has + been + banned. <strong>\"Fossil-fuel heating has been banned in new residential buildings (by the government).\"</strong>",
    hint: "Start with \"Fossil-fuel heating has been banned...\""
  },
  {
    id: 'pv_013',
    moduleId: 'passive',
    prompt: "Rewrite in the passive voice: \"The director will announce the audit results next Monday.\"",
    answers: ["the audit results will be announced next monday","the audit results will be announced next monday by the director","the audit results will be announced by the director next monday"],
    explanation: "Future passive: will + be + announced. <strong>\"The audit results will be announced next Monday (by the director).\"</strong>",
    hint: "Start with \"The audit results will be announced...\""
  },
  {
    id: 'pv_014',
    moduleId: 'passive',
    prompt: "Rewrite in the passive voice: \"Engineers can integrate heat pumps into older buildings.\"",
    answers: ["heat pumps can be integrated into older buildings","heat pumps can be integrated into older buildings by engineers"],
    explanation: "Modal passive: can + be + integrated. <strong>\"Heat pumps can be integrated into older buildings (by engineers).\"</strong>",
    hint: "Start with \"Heat pumps can be integrated...\""
  },
  {
    id: 'pv_015',
    moduleId: 'passive',
    prompt: "Complete the sentence with the passive form of the verb in brackets: \"In our laboratory, air temperature ________ (measure) by digital sensors every ten seconds.\"",
    answers: ["is measured"],
    explanation: "Present simple passive: <strong>is measured</strong> (air temperature is uncountable).",
    hint: "is + past participle of measure"
  },
  {
    id: 'pv_016',
    moduleId: 'passive',
    prompt: "Complete the sentence with the passive form: \"Over 2,000 smart meters ________ (install) in our city since last summer.\"",
    answers: ["have been installed"],
    explanation: "Since last summer + passive = <strong>have been installed</strong> (Present perfect passive plural).",
    hint: "have been + installed"
  },
  {
    id: 'pv_017',
    moduleId: 'passive',
    prompt: "Complete the sentence with the passive form: \"Yesterday, the damaged electrical cable ________ (replace) by the maintenance technician.\"",
    answers: ["was replaced"],
    explanation: "Yesterday + passive singular = <strong>was replaced</strong> (Past simple passive).",
    hint: "was + replaced"
  },
  {
    id: 'pv_018',
    moduleId: 'passive',
    prompt: "Complete the sentence with the passive form: \"Look through the window! The solar panels ________ (install) on the roof right now.\"",
    answers: ["are being installed"],
    explanation: "'Right now' + plural passive = <strong>are being installed</strong> (Present continuous passive).",
    hint: "are being + installed"
  },
  {
    id: 'pv_019',
    moduleId: 'passive',
    prompt: "Complete the sentence with the modal passive: \"All hazardous chemicals ________ (must / store) in a temperature-controlled room.\"",
    answers: ["must be stored"],
    explanation: "Modal passive: <strong>must be stored</strong> (must + be + past participle).",
    hint: "must be + stored"
  },
  {
    id: 'pv_020',
    moduleId: 'passive',
    prompt: "Turn this active question into a passive question: \"Did the team test the pressure valve?\" -> \"Was the pressure valve ________?\"",
    answers: ["tested","tested by the team"],
    explanation: "Past simple passive question: Was + subject + <strong>tested</strong>?",
    hint: "Past participle of test (6 letters)"
  },
  {
    id: 'pv_021',
    moduleId: 'passive',
    prompt: "When rewriting an active sentence into the passive voice, what preposition is used to introduce the agent (who performed the action)?",
    answers: ["by"],
    explanation: "The agent in a passive sentence is introduced by the preposition <strong>by</strong> (e.g., 'designed by engineers').",
    hint: "2 letters (b...)"
  },
  {
    id: 'pv_022',
    moduleId: 'passive',
    prompt: "Rewrite in the passive: \"Someone stole the copper pipes from the construction site last night.\"",
    answers: ["the copper pipes were stolen from the construction site last night","the copper pipes were stolen last night from the construction site"],
    explanation: "The agent 'someone' is vague and omitted: <strong>\"The copper pipes were stolen from the construction site last night.\"</strong>",
    hint: "Start with \"The copper pipes were stolen...\""
  },
  {
    id: 'pv_023',
    moduleId: 'passive',
    prompt: "Rewrite in the passive: \"You should replace old halogen light bulbs with LEDs.\"",
    answers: ["old halogen light bulbs should be replaced with leds","old halogen light bulbs should be replaced by leds"],
    explanation: "Modal passive: should + be + replaced. <strong>\"Old halogen light bulbs should be replaced with LEDs.\"</strong>",
    hint: "Start with \"Old halogen light bulbs should be replaced...\""
  },
  {
    id: 'pv_024',
    moduleId: 'passive',
    prompt: "Rewrite in the passive voice: \"The heat pump produces hot water efficiently.\"",
    answers: ["hot water is produced efficiently by the heat pump","hot water is produced by the heat pump efficiently","hot water is produced efficiently"],
    explanation: "Present simple passive: is + produced. <strong>\"Hot water is produced efficiently by the heat pump.\"</strong>",
    hint: "Start with \"Hot water is produced...\""
  },
  {
    id: 'pv_025',
    moduleId: 'passive',
    prompt: "Rewrite in the passive voice: \"Engineers will overhaul the ventilation network next summer.\"",
    answers: ["the ventilation network will be overhauled next summer by engineers","the ventilation network will be overhauled by engineers next summer","the ventilation network will be overhauled next summer","next summer the ventilation network will be overhauled by engineers"],
    explanation: "Future passive: will + be + overhauled. <strong>\"The ventilation network will be overhauled next summer (by engineers).\"</strong>",
    hint: "Start with \"The ventilation network will be overhauled...\""
  },
  {
    id: 'pv_026',
    moduleId: 'passive',
    prompt: "Rewrite in the passive voice: \"The laboratory has calibrated all digital thermometers.\"",
    answers: ["all digital thermometers have been calibrated by the laboratory","all digital thermometers have been calibrated"],
    explanation: "Present perfect passive: have + been + calibrated. <strong>\"All digital thermometers have been calibrated by the laboratory.\"</strong>",
    hint: "Start with \"All digital thermometers have been calibrated...\""
  },
  {
    id: 'pv_027',
    moduleId: 'passive',
    prompt: "Rewrite in the passive voice: \"They are testing the new biomass generator today.\"",
    answers: ["the new biomass generator is being tested today","the new biomass generator is being tested today by them","today the new biomass generator is being tested"],
    explanation: "Present continuous passive: is + being + tested. <strong>\"The new biomass generator is being tested today.\"</strong>",
    hint: "Start with \"The new biomass generator is being tested...\""
  },
  {
    id: 'pv_028',
    moduleId: 'passive',
    prompt: "Rewrite in the passive voice: \"The city built a modern geothermal plant in 2019.\"",
    answers: ["a modern geothermal plant was built in 2019 by the city","a modern geothermal plant was built by the city in 2019","in 2019 a modern geothermal plant was built by the city"],
    explanation: "Past simple passive: was + built (irregular past participle of build). <strong>\"A modern geothermal plant was built in 2019 by the city.\"</strong>",
    hint: "Start with \"A modern geothermal plant was built...\""
  },
  {
    id: 'pv_029',
    moduleId: 'passive',
    prompt: "Rewrite in the passive voice: \"We must reduce industrial energy consumption immediately.\"",
    answers: ["industrial energy consumption must be reduced immediately","industrial energy consumption must be reduced immediately by us"],
    explanation: "Modal passive: must + be + reduced. <strong>\"Industrial energy consumption must be reduced immediately.\"</strong>",
    hint: "Start with \"Industrial energy consumption must be reduced...\""
  },
  {
    id: 'pv_030',
    moduleId: 'passive',
    prompt: "Rewrite in the passive voice: \"Technicians were repairing the solar array when the thunderstorm began.\"",
    answers: ["the solar array was being repaired by technicians when the thunderstorm began","the solar array was being repaired when the thunderstorm began"],
    explanation: "Past continuous passive: was + being + repaired. <strong>\"The solar array was being repaired (by technicians) when the thunderstorm began.\"</strong>",
    hint: "Start with \"The solar array was being repaired...\""
  },
  {
    id: 'pv_031',
    moduleId: 'passive',
    prompt: "Rewrite in the passive voice: \"The technician replaced the blown fuse yesterday.\"",
    answers: ["the blown fuse was replaced yesterday by the technician","the blown fuse was replaced by the technician yesterday","the blown fuse was replaced yesterday","yesterday the blown fuse was replaced by the technician"],
    explanation: "Past simple passive: was + replaced. <strong>\"The blown fuse was replaced yesterday by the technician.\"</strong>",
    hint: "Start with \"The blown fuse was replaced...\""
  },
  {
    id: 'pv_032',
    moduleId: 'passive',
    prompt: "Rewrite in the passive voice: \"They have cut heating costs by 30%.\"",
    answers: ["heating costs have been cut by 30%","heating costs have been cut by 30% by them"],
    explanation: "Present perfect passive: have + been + cut. <strong>\"Heating costs have been cut by 30%.\"</strong>",
    hint: "Start with \"Heating costs have been cut...\""
  },
  {
    id: 'pv_033',
    moduleId: 'passive',
    prompt: "Rewrite in the passive voice: \"French regulations prohibit single-glazed windows in new buildings.\"",
    answers: ["single-glazed windows are prohibited in new buildings by french regulations","single-glazed windows are prohibited in new buildings","single glazed windows are prohibited in new buildings"],
    explanation: "Present simple passive: are + prohibited. <strong>\"Single-glazed windows are prohibited in new buildings (by French regulations).\"</strong>",
    hint: "Start with \"Single-glazed windows are prohibited...\""
  },
  {
    id: 'pv_034',
    moduleId: 'passive',
    prompt: "Rewrite in the passive voice: \"The audit team found several thermal bridges in the ceiling.\"",
    answers: ["several thermal bridges were found in the ceiling by the audit team","several thermal bridges were found in the ceiling"],
    explanation: "Past simple passive: were (plural) + found. <strong>\"Several thermal bridges were found in the ceiling by the audit team.\"</strong>",
    hint: "Start with \"Several thermal bridges were found...\""
  },
  {
    id: 'pv_035',
    moduleId: 'passive',
    prompt: "Rewrite in the passive voice: \"A qualified technician should service the air conditioner annually.\"",
    answers: ["the air conditioner should be serviced annually by a qualified technician","the air conditioner should be serviced annually","the air conditioner should be serviced by a qualified technician annually"],
    explanation: "Modal passive: should + be + serviced. <strong>\"The air conditioner should be serviced annually by a qualified technician.\"</strong>",
    hint: "Start with \"The air conditioner should be serviced...\""
  },
  {
    id: 'pv_036',
    moduleId: 'passive',
    prompt: "Rewrite in the passive voice: \"The firm operates five major wind farms across northern France.\"",
    answers: ["five major wind farms are operated across northern france by the firm","five major wind farms are operated by the firm across northern france","five major wind farms are operated across northern france"],
    explanation: "Present simple passive: are + operated. <strong>\"Five major wind farms are operated across northern France by the firm.\"</strong>",
    hint: "Start with \"Five major wind farms are operated...\""
  },
  {
    id: 'pv_037',
    moduleId: 'passive',
    prompt: "Rewrite in the passive voice: \"The supplier will deliver the photovoltaic inverters next Tuesday.\"",
    answers: ["the photovoltaic inverters will be delivered next tuesday by the supplier","the photovoltaic inverters will be delivered next tuesday","next tuesday the photovoltaic inverters will be delivered"],
    explanation: "Future passive: will + be + delivered. <strong>\"The photovoltaic inverters will be delivered next Tuesday (by the supplier).\"</strong>",
    hint: "Start with \"The photovoltaic inverters will be delivered...\""
  },
  {
    id: 'pv_038',
    moduleId: 'passive',
    prompt: "Rewrite in the passive voice: \"The site manager has approved the new safety procedures.\"",
    answers: ["the new safety procedures have been approved by the site manager","the new safety procedures have been approved"],
    explanation: "Present perfect passive: have + been + approved. <strong>\"The new safety procedures have been approved by the site manager.\"</strong>",
    hint: "Start with \"The new safety procedures have been approved...\""
  },
  {
    id: 'pv_039',
    moduleId: 'passive',
    prompt: "Complete the passive sentence with the verb in brackets: \"Look out! The hot water pipe ________ (weld) by the technician right now.\"",
    answers: ["is being welded"],
    explanation: "'Right now' + singular passive: <strong>is being welded</strong> (Present Continuous Passive).",
    hint: "is being + welded"
  },
  {
    id: 'pv_040',
    moduleId: 'passive',
    prompt: "Complete the passive sentence with the verb in brackets: \"Since 2020, over three million euros ________ (invest) in renewable energies by the region.\"",
    answers: ["have been invested","has been invested"],
    explanation: "'Since 2020' + passive: <strong>have been invested</strong> (Present Perfect Passive).",
    hint: "have been + invested"
  },
  {
    id: 'pv_041',
    moduleId: 'passive',
    prompt: "Complete the passive sentence with the past simple passive: \"The old coal power plant ________ (shut) down permanently three years ago.\"",
    answers: ["was shut"],
    explanation: "'Three years ago' + passive of shut: <strong>was shut</strong> (shut is invariable: shut-shut-shut).",
    hint: "was + shut"
  },
  {
    id: 'pv_042',
    moduleId: 'passive',
    prompt: "Complete the passive sentence with the present simple passive: \"Electricity consumption data ________ (send) directly to the central server every minute.\"",
    answers: ["is sent","are sent"],
    explanation: "Present simple passive of send: <strong>is sent</strong> (data can be singular/uncountable in English).",
    hint: "is + irregular past participle of send (ends in -t)"
  },
  {
    id: 'pv_043',
    moduleId: 'passive',
    prompt: "Complete the passive sentence with the modal passive: \"Excess solar power ________ (can / store) in lithium-ion battery packs.\"",
    answers: ["can be stored"],
    explanation: "Modal passive: <strong>can be stored</strong> (can + be + past participle).",
    hint: "can be + stored"
  },
  {
    id: 'pv_044',
    moduleId: 'passive',
    prompt: "Complete the passive sentence with the past simple passive: \"The pressure regulator ________ (break) during yesterday's stress test.\"",
    answers: ["was broken"],
    explanation: "Past simple passive of break: <strong>was broken</strong> (was + past participle broken).",
    hint: "was + broken"
  },
  {
    id: 'pv_045',
    moduleId: 'passive',
    prompt: "Complete the passive sentence: \"Such extreme thermal efficiency ________ (never / see) in this building before.\"",
    answers: ["has never been seen","was never seen"],
    explanation: "Present perfect passive with never: <strong>has never been seen</strong> (has been + past participle seen).",
    hint: "has never been + seen"
  },
  // --------------------------------------------------------------------------
  // MODULE 5: CV DOCTOR & COVER LETTER
  // --------------------------------------------------------------------------
  {
    id: 'wr_001',
    moduleId: 'cv-writing',
    prompt: "In the CV critique of \"Mandy Poor\", why was the email address \"mandy_partygirl99@hotmail.com\" criticized?",
    answers: ["it is unprofessional","unprofessional email","unprofessional","not professional","unprofessional address","informal"],
    explanation: "Email addresses on a CV must be professional (e.g., firstname.lastname@email.com), avoiding nicknames and party references.",
    hint: "One word: unp..."
  },
  {
    id: 'wr_002',
    moduleId: 'cv-writing',
    prompt: "Instead of weak descriptions like \"did stuff with customers\", what kind of strong verbs should you use on a CV? (Give the term)",
    answers: ["action verbs","power verbs","action words","action verb","power verb"],
    explanation: "You must use <strong>action verbs</strong> (or power verbs) like \"managed\", \"coordinated\", \"implemented\", \"developed\".",
    hint: "A... verbs"
  },
  {
    id: 'wr_003',
    moduleId: 'cv-writing',
    prompt: "What formal sign-off should you use at the end of a cover letter if you addressed it to a named person (\"Dear Mr. Smith\")?",
    answers: ["yours sincerely","sincerely","sincerely yours"],
    explanation: "When writing to a named recipient (Dear Mr. Smith), use <strong>Yours sincerely</strong>. (If Dear Sir/Madam, use Yours faithfully).",
    hint: "Yours s..."
  },
  {
    id: 'wr_004',
    moduleId: 'cv-writing',
    prompt: "What formal sign-off should you use if you do NOT know the recipient's name (\"Dear Sir or Madam\")?",
    answers: ["yours faithfully","faithfully"],
    explanation: "When the letter begins with \"Dear Sir or Madam\", the traditional formal closing is <strong>Yours faithfully</strong>.",
    hint: "Yours f..."
  },
  {
    id: 'wr_005',
    moduleId: 'cv-writing',
    prompt: "Complete this standard cover letter opening sentence: \"I am writing to ________ for the position of Assistant Energy Manager advertised on LinkedIn.\"",
    answers: ["apply","apply for","to apply","to apply for"],
    explanation: "The standard formal formula is <strong>to apply for</strong> a position. (Note that \"for\" was already placed after the blank).",
    hint: "Verb starting with A (5 letters)"
  },
  {
    id: 'wr_006',
    moduleId: 'cv-writing',
    prompt: "In the Education section of your CV as a 2nd year MT2E student, what is your current degree called in English?",
    answers: ["bachelor of technology in energy transition and efficiency","bachelor of technology","bachelor in technology","but mt2e","bachelor of technology mt2e"],
    explanation: "Your degree is the <strong>Bachelor of Technology in Energy Transition and Efficiency</strong> (BUT MT2E).",
    hint: "Bachelor of Technology..."
  },
  {
    id: 'wr_007',
    moduleId: 'cv-writing',
    prompt: "If you start a cover letter with \"Dear Ms. Jenkins,\", what formal sign-off MUST you conclude with?",
    answers: ["yours sincerely","sincerely"],
    explanation: "Golden Rule: A named person (Dear Ms. Jenkins) requires <strong>Yours sincerely</strong>.",
    hint: "Yours s..."
  },
  {
    id: 'wr_008',
    moduleId: 'cv-writing',
    prompt: "If you start a cover letter with \"Dear Sir or Madam,\", what formal sign-off MUST you conclude with?",
    answers: ["yours faithfully","faithfully"],
    explanation: "Golden Rule: An unnamed person (Dear Sir or Madam) requires <strong>Yours faithfully</strong>.",
    hint: "Yours f..."
  },
  {
    id: 'wr_009',
    moduleId: 'cv-writing',
    prompt: "Complete the formal cover letter sentence referring to your CV: \"Please find ________ my CV for your consideration.\"",
    answers: ["enclosed","attached"],
    explanation: "The formal British formula is <strong>Please find enclosed my CV</strong> (or attached).",
    hint: "Starts with E (8 letters)"
  },
  {
    id: 'wr_010',
    moduleId: 'cv-writing',
    prompt: "Correct the grammar mistake in this sentence: \"I look forward to hear from you soon.\" -> \"I look forward to ________ from you.\"",
    answers: ["hearing"],
    explanation: "After the preposition 'to' in 'look forward to', you must use the gerund (-ing): <strong>hearing</strong>.",
    hint: "hear + ing"
  },
  {
    id: 'wr_011',
    moduleId: 'cv-writing',
    prompt: "In formal business letters and exam writing, why are contractions like \"I'm\" or \"don't\" forbidden?",
    answers: ["they are informal","informal","too informal","not formal","they are too informal","colloquial"],
    explanation: "Contractions are considered <strong>informal</strong> and colloquial; in formal writing, write full forms ('I am', 'do not').",
    hint: "One word: in..."
  },
  {
    id: 'wr_012',
    moduleId: 'cv-writing',
    prompt: "Complete this formal cover letter sentence: \"I am writing to express my strong ________ in the internship position advertised on your website.\"",
    answers: ["interest"],
    explanation: "Standard formal phrasing: <strong>to express my strong interest in</strong>.",
    hint: "Starts with I (8 letters)"
  },
  {
    id: 'wr_013',
    moduleId: 'cv-writing',
    prompt: "Replace the weak verb \"did\" with a powerful professional action verb: \"I ________ a comprehensive thermal audit of a sports hall.\"",
    answers: ["conducted","performed","carried out","executed","completed","led"],
    explanation: "Use action verbs like <strong>conducted</strong>, <strong>performed</strong>, or <strong>carried out</strong>.",
    hint: "Starts with C (conducted) or P (performed)"
  },
  {
    id: 'wr_014',
    moduleId: 'cv-writing',
    prompt: "Replace the weak verb \"made\" with a strong technical action verb: \"I ________ an automated Excel model to simulate heat pump savings.\"",
    answers: ["developed","designed","created","built","programmed"],
    explanation: "Technical projects require verbs like <strong>developed</strong>, <strong>designed</strong>, or <strong>created</strong>.",
    hint: "Starts with D (developed/designed)"
  },
  {
    id: 'wr_015',
    moduleId: 'cv-writing',
    prompt: "What is the main objective of Paragraph 1 in a 4-paragraph cover letter?",
    answers: ["state the purpose of the letter and position applied for","state the position","purpose of the letter","introduce yourself and the position","state the position applied for"],
    explanation: "Paragraph 1 clearly states the <strong>purpose of the letter</strong>, the specific role applied for, and how you found the advert.",
    hint: "State the position applied for"
  },
  {
    id: 'wr_016',
    moduleId: 'cv-writing',
    prompt: "In a cover letter for an engineering internship, what should you primarily focus on in Paragraph 2?",
    answers: ["academic qualifications and technical skills","technical skills","studies and skills","education and technical skills","qualifications"],
    explanation: "Paragraph 2 highlights your <strong>academic background</strong> (BUT MT2E) and key <strong>technical skills</strong> (AutoCAD, thermodynamics...).",
    hint: "Academic qualifications and technical skills"
  },
  {
    id: 'wr_017',
    moduleId: 'cv-writing',
    prompt: "What should you emphasize in Paragraph 3 of your cover letter?",
    answers: ["work experience and soft skills","experience and soft skills","motivation and experience","soft skills and motivation"],
    explanation: "Paragraph 3 discusses your <strong>past experience</strong>, relevant <strong>soft skills</strong>, and motivation for the specific company.",
    hint: "Past experience and soft skills"
  },
  {
    id: 'wr_018',
    moduleId: 'cv-writing',
    prompt: "What two key things should always be included in the concluding Paragraph 4 of a cover letter?",
    answers: ["mention the enclosed cv and request an interview","enclosed cv and interview","interview and cv","interview request and enclosed cv"],
    explanation: "The final paragraph mentions the <strong>enclosed CV</strong>, requests an <strong>interview</strong>, and includes a polite closing expectation.",
    hint: "CV and interview"
  },
  {
    id: 'wr_019',
    moduleId: 'cv-writing',
    prompt: "In the Mandy Poor CV critique, give an example of what an email address SHOULD look like:",
    answers: ["firstname.lastname@email.com","firstname.name@gmail.com","first.last@email.com","professional email","name@email.com"],
    explanation: "Professional emails must follow a clean format such as <strong>firstname.lastname@email.com</strong> without nicknames.",
    hint: "firstname.lastname@..."
  },
  {
    id: 'wr_020',
    moduleId: 'cv-writing',
    prompt: "Why was Mandy Poor's CV criticized regarding its visual formatting and length?",
    answers: ["it was poorly formatted and disorganized","poor formatting","too long","disorganized","bad formatting","unorganized"],
    explanation: "Her CV suffered from inconsistent fonts, poor alignment, lack of clear sections, and messy visual hierarchy.",
    hint: "Formatting or organization"
  },
  {
    id: 'wr_021',
    moduleId: 'cv-writing',
    prompt: "Complete this polite interview offer in a cover letter: \"I would welcome the ________ to discuss my application further in an interview.\"",
    answers: ["opportunity","chance"],
    explanation: "The classic formal phrase is <strong>to welcome the opportunity</strong> to discuss your application.",
    hint: "Starts with O (11 letters)"
  }
];
