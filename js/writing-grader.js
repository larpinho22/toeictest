// ============================================================================
// WRITING GRADER & EVALUATOR (EXPRESSION ÉCRITE : CV & COVER LETTER)
// Système de notation intelligente /20 basé sur les critères du partiel d'anglais
// ============================================================================

export const WRITING_TASKS = {
  'cv': {
    id: 'cv',
    type: 'cv',
    title: 'Curriculum Vitae (CV / Resume)',
    badge: 'Expression Écrite 1',
    icon: '📄',
    targetWordCount: { min: 140, ideal: '180 - 280 mots' },
    prompt: `Vous êtes étudiant en 2ème année de <strong>BUT MT2E</strong> (Bachelor of Technology in Energy Transition and Efficiency) à l'IUT. 
    Rédigez votre <strong>CV complet en anglais</strong> pour postuler à un <strong>stage de 2 mois</strong> (summer work placement) dans une entreprise du secteur de l'énergie (bureaux d'études, audit thermique, énergies renouvelables).
    <br><br>
    <strong>Critères impératifs du partiel :</strong>
    <ul style="margin: 0.5rem 0 0 1.25rem; font-size: 0.95rem; line-height: 1.6;">
      <li>Respecter les <strong>7 sections officielles</strong> : Personal Information, Personal Statement / Profile, Education, Work Experience, Skills (IT & Languages), Interests / Activities, References.</li>
      <li>Traduire exactement les diplômes (<em>A-levels</em>, <em>with honours</em>, <em>Bachelor of Technology MT2E</em>, <em>University Institute of Technology</em>).</li>
      <li>Employer les bonnes qualifications IT (<em>proficient with...</em>, <em>working knowledge of...</em>) et niveaux de langues (<em>Mother tongue</em>, <em>Fluent</em>...).</li>
      <li>Valoriser les loisirs en montrant les <em>soft skills</em> associées (sports d'équipe, sports individuels, voyages, etc.).</li>
      <li>Éviter impérativement les faux-amis et erreurs de "Mandy Poor" (email non professionnel, mot <em>stage</em>, mot <em>mention</em>, mot <em>formation</em>).</li>
    </ul>`,
    sampleTemplate: `[Your Full Name]
[Address: Number, Street, Postcode, City, Country]
Phone: +33 (0)6 XX XX XX XX
Email: firstname.lastname@gmail.com
LinkedIn: linkedin.com/in/yourname

PERSONAL STATEMENT
Dynamic and dedicated 2nd-year undergraduate student in Energy Transition and Efficiency (BUT MT2E), seeking a challenging 2-month summer internship in an energy engineering consultancy. Highly motivated to apply technical knowledge in HVAC systems and thermal efficiency to real-world renewable projects.

EDUCATION & QUALIFICATIONS
Sept. 2023 - Present: Bachelor of Technology in Energy Transition and Efficiency (BUT MT2E)
University Institute of Technology (IUT), France
Key modules: Thermodynamics, Building Energy Audits, Renewable Energy Systems, Fluid Mechanics.

June 2023: Baccalauréat (Equivalent to A-Levels) - With Honours
Lycée General, France
Specialisms: Mathematics and Physics.

WORK EXPERIENCE
June 2023 - August 2023 (8 weeks): Summer Job - Assistant Operations Technician
EcoHeat Solutions, Rennes, France
- Assisted senior engineers in monitoring boiler room performances.
- Conducted daily temperature and pressure checks across three district heating units.
- Maintained inspection logs and reported anomalies to the site manager.

July 2022 (4 weeks): Volunteering - Community Energy Awareness Campaign
CleanCity Association, France
- Coordinated workshops to promote domestic energy-saving habits to over 150 residents.

SKILLS
IT Skills:
- Proficient with Microsoft Office (Word, Excel, PowerPoint).
- Working knowledge of AutoCAD, Climawin, and Python for data analysis.

Languages:
- French: Mother tongue / Native speaker.
- English: Upper-Intermediate (B2), TOEIC score: 780.
- Spanish: Beginner (A2).

INTERESTS & ACTIVITIES
- Team Sports (Rugby / Football): Playing weekly in a university league; developed strong leadership, teamwork, and communication skills under pressure.
- Travelling: Backpacking across southern Europe; enhanced adaptability, open-mindedness, and intercultural awareness.
- Mind Sports (Chess): Practising analytical reasoning and strategic problem-solving.

REFERENCES
References available upon request.`,
    modelAnswer: `Thibault GUERREC
14 Avenue de la République, 75011 Paris, France
Phone: +33 (0)6 12 34 56 78 | Email: thibault.guerrec@etudiant.univ.fr
LinkedIn: linkedin.com/in/thibault-guerrec

PERSONAL STATEMENT
Proactive and ambitious 2nd-year undergraduate student in Energy Transition and Efficiency (BUT MT2E) at the University Institute of Technology. Looking for a 2-month work placement starting in June 2024 in a renewable energy firm or thermal engineering office. Eager to contribute practical skills in energy auditing, fluid mechanics, and CAD design while expanding professional expertise.

EDUCATION & QUALIFICATIONS
2023 - 2025: Bachelor of Technology in Energy Transition and Efficiency (BUT MT2E)
University Institute of Technology (IUT)
- Relevant coursework: Building Thermodynamics, HVAC Technologies, Solar and Wind Energy, Energy Management Regulations.
- Practical projects: Conducted an energy audit of a 500m² educational facility and simulated building insulation improvements.

June 2023: Baccalauréat (Equivalent to A-Levels) - With Honours
Victor Hugo High School, Nantes
- Specialisms: Physics-Chemistry and Mathematics.

WORK EXPERIENCE
June - August 2023 (8 weeks): Summer Job - Junior Technical Assistant
GreenPower Systems, Nantes, France
- Monitored solar photovoltaic array outputs and performed routine maintenance diagnostics.
- Recorded electrical efficiency data in Excel and drafted weekly technical summaries.
- Collaborated with field technicians to resolve inverter safety faults.

July 2022 (4 weeks): Work Placement - Facility Maintenance
Atlantic Thermal Services, France
- Shadowed heating engineers during industrial boiler installations and safety compliance checks.

SKILLS
IT & Software:
- Proficient with Word, Excel, PowerPoint.
- Working knowledge of AutoCAD and Climawin.
- Familiar with thermal simulation tools and Python.

Languages:
- French: Mother tongue.
- English: Fluent / Advanced (C1) - TOEIC 860.
- German: Intermediate (B1).

INTERESTS & SOFT SKILLS
- Team sports (Rowing & Handball): Member of university crew; demonstrated strong teamwork, resilience, and coordination.
- Individual sports (Long-distance running): Competed in half-marathons; demonstrates self-motivation, endurance, and discipline.
- DIY and Electronics: Restoring vintage audio amplifiers; sharp attention to detail and hands-on problem-solving.

REFERENCES
References available upon request.`
  },

  'cover-letter': {
    id: 'cover-letter',
    type: 'cover-letter',
    title: 'Lettre de Motivation (Cover Letter)',
    badge: 'Expression Écrite 2',
    icon: '✉️',
    targetWordCount: { min: 140, ideal: '160 - 260 mots' },
    prompt: `Rédigez une <strong>lettre de motivation formelle en anglais</strong> (150 à 250 mots) pour postuler à une offre de stage d'<strong>assistant en transition énergétique</strong> chez <em>GreenTech Energy Solutions</em>.
    <br><br>
    <strong>Critères impératifs du partiel :</strong>
    <ul style="margin: 0.5rem 0 0 1.25rem; font-size: 0.95rem; line-height: 1.6;">
      <li>Respecter la <strong>Règle d'or Salutation / Formule de politesse</strong> :
        <ul>
          <li>Si vous écrivez à un destinataire nommé (ex: <em>Dear Mr. Harrison</em>), terminez impérativement par <strong>Yours sincerely</strong>.</li>
          <li>Si vous écrivez à un destinataire inconnu (<em>Dear Sir or Madam</em>), terminez impérativement par <strong>Yours faithfully</strong>.</li>
        </ul>
      </li>
      <li>Structurer en <strong>4 paragraphes clairs</strong> :
        <ol style="margin-left: 1.25rem;">
          <li><strong>Paragraphe 1 :</strong> Objet, mention de l'annonce, et présentation de votre statut (étudiant 2ème année BUT MT2E). Formule d'ouverture officielle : <em>"I am writing to apply for the position of..."</em></li>
          <li><strong>Paragraphe 2 :</strong> Votre formation académique et vos compétences techniques en énergie (thermodynamique, efficacité, AutoCAD, Climawin).</li>
          <li><strong>Paragraphe 3 :</strong> Vos expériences passées, vos <em>soft skills</em> (travail d'équipe, rigueur) et votre motivation pour GreenTech Energy.</li>
          <li><strong>Paragraphe 4 :</strong> Conclusion polie, mention du CV joint (<em>"Please find enclosed my CV"</em>), disponibilité pour un entretien et formule d'attente (<em>"I look forward to hearing from you"</em>).</li>
        </ol>
      </li>
      <li>Éviter les erreurs classiques : faux-amis (<em>stage</em>, <em>formation</em>, <em>candidature</em>), contractions informelles (<em>I'm</em>, <em>don't</em>) et formules familières (<em>Best regards</em>, <em>Hi</em>).</li>
    </ul>`,
    sampleTemplate: `[Your Full Name]
12 Rue de l'Université
75005 Paris, France
Phone: +33 (0)6 12 34 56 78
Email: your.email@etudiant.univ.fr

25 October 2024

Mr. David Harrison
Human Resources Manager
GreenTech Energy Solutions
45 Park Lane, London, W1K 1PN
United Kingdom

Dear Mr. Harrison,

I am writing to apply for the position of Assistant Energy Efficiency Intern advertised on your company website. Currently a second-year undergraduate student enrolled in the Bachelor of Technology in Energy Transition and Efficiency (BUT MT2E) at the University Institute of Technology, I am eager to contribute to GreenTech Energy Solutions during a two-month summer work placement.

During my studies, I have gained substantial theoretical and practical knowledge in building thermodynamics, renewable energy technologies, and energy auditing. Furthermore, I am proficient with Microsoft Excel for performance modeling and have acquired a solid working knowledge of AutoCAD and Climawin. My recent academic project involved assessing heat loss and proposing sustainable HVAC solutions for a municipal facility, which solidified my interest in clean energy optimization.

In addition to my technical background, my previous work experience as a summer assistant has helped me develop strong interpersonal, organizational, and teamwork skills. I am autonomous, detail-oriented, and highly motivated by GreenTech Energy's commitment to reducing industrial carbon emissions.

Please find enclosed my CV for your consideration. I would welcome the opportunity to discuss my application further in an interview. 

I look forward to hearing from you.

Yours sincerely,

[Your Name]`,
    modelAnswer: `Alexandre DUPONT
8 Rue des Énergies
44000 Nantes, France
alexandre.dupont@univ-nantes.fr | +33 (0)6 98 76 54 32

15 November 2024

Ms. Sarah Jenkins
Head of Talent Acquisition
CleanPower Engineering Ltd
100 High Street, Bristol, BS1 2EB
United Kingdom

Dear Ms. Jenkins,

I am writing to express my strong interest in applying for the two-month Energy Efficiency Internship advertised on LinkedIn. Currently in my second year of the Bachelor of Technology in Energy Transition and Efficiency (BUT MT2E) at the University Institute of Technology in Nantes, I am seeking a rigorous work placement starting in June 2024 to apply my engineering skills in a dynamic environment.

My academic curriculum has provided me with comprehensive training in thermal analysis, renewable energy integration, and fluid mechanics. In our laboratory workshops, I successfully performed energy audits and simulated heating consumption reduction using specialized software. Furthermore, I am proficient with Microsoft Office tools and possess a solid working knowledge of AutoCAD and Climawin. These technical competencies enable me to immediately assist your engineering team in monitoring energy data and drafting compliance reports.

Beyond my academic credentials, my previous experience in a summer job within a technical team strengthened my communication, adaptability, and problem-solving skills. As a competitive rugby player, I thrive in collaborative settings where reliability and discipline are paramount. I am especially inspired by CleanPower Engineering’s pioneering solar district projects and would be honored to contribute to your sustainability mission.

Please find enclosed my CV for your review. I remain at your disposal should you require any additional information and would welcome the opportunity to discuss my qualifications during an interview.

I look forward to hearing from you.

Yours sincerely,

Alexandre Dupont`
  }
};

// ============================================================================
// CORE INTELLIGENT GRADING ENGINE
// ============================================================================

export function gradeWriting(taskType, rawText) {
  const text = (rawText || '').trim();
  const lowerText = text.toLowerCase();
  const words = text.split(/\s+/).filter(w => w.length > 0);
  const wordCount = words.length;

  const result = taskType === 'cv'
    ? gradeCV(text, lowerText, words, wordCount)
    : gradeCoverLetter(text, lowerText, words, wordCount);

  if (wordCount < 15) {
    result.score = 0;
    result.wordCount = wordCount;
    result.appreciation = 'Texte vide ou trop court pour être évalué';
    result.color = '#ef4444';
    result.strengths = [];
    result.mistakes = [
      {
        penalty: 20,
        title: 'Longueur insuffisante',
        explanation: 'Rédige au moins 100 mots pour obtenir une notation complète.',
        fix: 'Développe tes sections ou charge la trame guidée pour démarrer.'
      }
    ];
  }

  return result;
}

// ============================================================================
// CV GRADING LOGIC
// ============================================================================
function gradeCV(text, lowerText, words, wordCount) {
  let scoreStruct = 5.0;
  let scoreVocab = 5.0;
  let scoreGrammar = 5.0;
  let scorePro = 5.0;

  const strengths = [];
  const mistakes = [];
  const checklist = [];

  // --------------------------------------------------------------------------
  // 1. STRUCTURE & SECTIONS (5 pts)
  // --------------------------------------------------------------------------
  const sections = [
    {
      id: 'contact',
      name: 'Contact / Personal Details',
      regex: /(contact|personal details|personal information|phone|email|e-mail|linkedin)/i,
      found: false,
      hint: 'Nom, adresse, téléphone international, email pro'
    },
    {
      id: 'profile',
      name: 'Personal Statement / Profile / Objective',
      regex: /(personal statement|career objective|profile|professional profile|summary|about me)/i,
      found: false,
      hint: 'Accroche claire : étudiant 2e année BUT MT2E cherchant stage'
    },
    {
      id: 'education',
      name: 'Education & Qualifications',
      regex: /(education|qualifications|academic background|formation)/i,
      found: false,
      hint: 'Diplômes en anglais (Bachelor of Technology, A-levels...)'
    },
    {
      id: 'experience',
      name: 'Work Experience / Employment History',
      regex: /(work experience|employment history|experience|professional experience)/i,
      found: false,
      hint: 'Stages, jobs d\'été ou bénévolat avec verbes d\'action'
    },
    {
      id: 'skills',
      name: 'Skills (IT & Languages)',
      regex: /(skills|technical skills|key skills|it skills|languages|compétences)/i,
      found: false,
      hint: 'Logiciels (proficient with...), langues (Mother tongue...)'
    },
    {
      id: 'interests',
      name: 'Interests / Activities / Hobbies',
      regex: /(interests|activities|hobbies|centres d'intérêt|extracurricular)/i,
      found: false,
      hint: 'Sports, voyages ou loisirs liés à des soft skills'
    },
    {
      id: 'references',
      name: 'References',
      regex: /(references|références|referees)/i,
      found: false,
      hint: '"References available upon request"'
    }
  ];

  let detectedSectionsCount = 0;
  sections.forEach(sec => {
    sec.found = sec.regex.test(text);
    if (sec.found) detectedSectionsCount++;
    checklist.push({
      label: `Section : ${sec.name}`,
      done: sec.found,
      hint: sec.hint
    });
  });

  if (detectedSectionsCount === 7) {
    strengths.push('Les 7 sections officielles du CV britannique sont toutes parfaitement identifiées et structurées.');
  } else if (detectedSectionsCount >= 5) {
    const missing = sections.filter(s => !s.found).map(s => s.name).join(', ');
    const penalty = (7 - detectedSectionsCount) * 0.75;
    scoreStruct = Math.max(1, scoreStruct - penalty);
    mistakes.push({
      penalty: Number(penalty.toFixed(2)),
      title: 'Sections de CV manquantes',
      explanation: `Il te manque ${7 - detectedSectionsCount} section(s) clé(s) : <strong>${missing}</strong>.`,
      fix: 'Ajoute des titres clairs en majuscules pour chaque section (ex: EDUCATION & QUALIFICATIONS, REFERENCES).'
    });
  } else {
    scoreStruct = Math.max(0.5, scoreStruct - 3.0);
    mistakes.push({
      penalty: 3.0,
      title: 'Structure de CV incomplète',
      explanation: 'Trop de sections standard du CV sont absentes. Ton CV doit obligatoirement avoir les titres officiels du cours.',
      fix: 'Ajoute les 7 sections du cours (Personal Statement, Education, Experience, Skills, Interests, References).'
    });
  }

  // Word count check for CV
  if (wordCount < 120) {
    scoreStruct = Math.max(0, scoreStruct - 1.0);
    mistakes.push({
      penalty: 1.0,
      title: 'CV un peu court',
      explanation: `Ton CV ne compte que ${wordCount} mots. Un bon CV d'étudiant comporte au moins 160 à 250 mots détaillés.`,
      fix: 'Détaille tes missions dans Work Experience et précise tes modules dans Education.'
    });
  } else if (wordCount >= 160) {
    strengths.push(`Longueur de CV excellente (${wordCount} mots) avec un bon niveau de détail.`);
  }

  // --------------------------------------------------------------------------
  // 2. VOCABULARY & DIPLOMAS (5 pts)
  // --------------------------------------------------------------------------
  // BUT MT2E
  const hasBachelor = /bachelor of technology/i.test(lowerText) || /bachelor in technology/i.test(lowerText);
  const hasEnergy = /energy transition/i.test(lowerText) || /efficiency/i.test(lowerText) || /mt2e/i.test(lowerText);
  if (hasBachelor && hasEnergy) {
    strengths.push('Traduction officielle impeccable du diplôme : <em>Bachelor of Technology in Energy Transition and Efficiency</em>.');
  } else if (hasBachelor || /but/i.test(lowerText)) {
    strengths.push('Le diplôme du BUT est mentionné.');
  } else {
    scoreVocab = Math.max(0.5, scoreVocab - 1.25);
    mistakes.push({
      penalty: 1.25,
      title: 'Traduction du BUT MT2E absente',
      explanation: 'Tu n\'as pas indiqué l\'équivalence exacte de ton diplôme.',
      fix: 'Écris : <em>Bachelor of Technology in Energy Transition and Efficiency (BUT MT2E)</em>.'
    });
  }

  // Baccalauréat -> A-levels
  const hasAlevels = /a[- ]levels/i.test(lowerText) || /high school diploma/i.test(lowerText);
  const hasBaccalaurat = /baccalaur[ée]at/i.test(lowerText) || /\bbac\b/i.test(lowerText);
  if (hasAlevels) {
    strengths.push('Équivalence britannique du Baccalauréat bien utilisée (<em>A-levels</em>).');
  } else if (hasBaccalaurat && !hasAlevels) {
    scoreVocab = Math.max(0.5, scoreVocab - 1.25);
    mistakes.push({
      penalty: 1.25,
      title: 'Faux-ami : "Baccalauréat"',
      explanation: 'Le mot français "Baccalauréat" ne doit jamais être laissé seul sur un CV en anglais sans son équivalence.',
      fix: 'Écris : <em>Baccalauréat (Equivalent to A-Levels)</em>.'
    });
  }

  // Mention -> With honours
  const hasHonours = /with honours/i.test(lowerText) || /with distinction/i.test(lowerText) || /honors/i.test(lowerText);
  const hasMention = /\bmention\b/i.test(lowerText);
  if (hasHonours) {
    strengths.push('Excellente traduction de la mention : <em>with honours / distinction</em>.');
  }
  if (hasMention && !hasHonours) {
    scoreVocab = Math.max(0.5, scoreVocab - 0.75);
    mistakes.push({
      penalty: 0.75,
      title: 'Faux-ami : "mention"',
      explanation: '"Mention" est un anglicisme erroné ici. On dit <em>with honours</em> (UK) ou <em>with distinction</em>.',
      fix: 'Remplace "mention" par <em>with honours</em>.'
    });
  }

  // IUT translation
  if (/university institute of technology/i.test(lowerText) || /iut/i.test(lowerText)) {
    strengths.push('Établissement IUT bien traduit (<em>University Institute of Technology</em>).');
  }

  // Stage -> internship / work placement
  const hasStage = /\bstage\b/i.test(lowerText) || /\bstages\b/i.test(lowerText);
  const hasInternship = /internship/i.test(lowerText) || /work placement/i.test(lowerText) || /summer job/i.test(lowerText);
  if (hasInternship) {
    strengths.push('Vocabulaire de stage professionnel exact (<em>internship / work placement / summer job</em>).');
  }
  if (hasStage) {
    scoreVocab = Math.max(0.5, scoreVocab - 1.5);
    mistakes.push({
      penalty: 1.5,
      title: 'Erreur éliminatoire : mot français "stage"',
      explanation: 'Le mot français "stage" n\'existe pas en anglais dans ce sens !',
      fix: 'Utilise <em>internship</em> (US/international) ou <em>work placement</em> (UK).'
    });
  }

  // Banned French words check
  const frenchWords = [
    { word: 'formation', fix: 'Education / Training' },
    { word: 'lycee', fix: 'High school / Secondary school' },
    { word: 'lycée', fix: 'High school' },
    { word: 'competences', fix: 'Skills' },
    { word: 'compétences', fix: 'Skills' },
    { word: 'anglais', fix: 'English' },
    { word: 'francais', fix: 'French' },
    { word: 'français', fix: 'French' },
    { word: 'benevolat', fix: 'Volunteering' },
    { word: 'bénévolat', fix: 'Volunteering' }
  ];
  const detectedFrench = frenchWords.filter(f => new RegExp('\\b' + f.word + '\\b', 'i').test(text));
  if (detectedFrench.length > 0) {
    const p = Math.min(1.5, detectedFrench.length * 0.5);
    scoreVocab = Math.max(0, scoreVocab - p);
    mistakes.push({
      penalty: p,
      title: 'Mots français non traduits',
      explanation: `Attention, certains termes français sont restés dans ta copie : ${detectedFrench.map(d => `<em>"${d.word}"</em>`).join(', ')}.`,
      fix: `Traduis-les en anglais (${detectedFrench.map(d => `${d.word} → <strong>${d.fix}</strong>`).join(', ')}).`
    });
  }

  // --------------------------------------------------------------------------
  // 3. GRAMMAR, ACTION VERBS & FORMULAS (5 pts)
  // --------------------------------------------------------------------------
  // Mandy Poor email check
  const emailMatch = text.match(/[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/);
  if (emailMatch) {
    const email = emailMatch[0].toLowerCase();
    if (/(party|sexy|floozy|gamer|beast|boy|girl[0-9]|tqt|bg|cool)/.test(email)) {
      scoreGrammar = Math.max(0.5, scoreGrammar - 1.0);
      mistakes.push({
        penalty: 1.0,
        title: 'Email non professionnel (Piège de Mandy Poor)',
        explanation: `Ton adresse (${email}) est trop familière pour un CV officiel.`,
        fix: 'Utilise une adresse neutre : <em>firstname.lastname@gmail.com</em>.'
      });
    } else {
      strengths.push('Adresse email professionnelle et coordonnées bien formatées.');
    }
  }

  // Action verbs in Experience
  const actionVerbs = [
    'assisted', 'monitored', 'installed', 'conducted', 'maintained', 'developed',
    'coordinated', 'designed', 'tested', 'managed', 'recorded', 'participated',
    'supported', 'collaborated', 'organized', 'operated', 'inspected', 'analyzed'
  ];
  const foundActionVerbs = actionVerbs.filter(v => lowerText.includes(v));
  if (foundActionVerbs.length >= 4) {
    strengths.push(`Excellente utilisation de verbes d'action au passé (${foundActionVerbs.slice(0, 5).join(', ')}...).`);
  } else if (foundActionVerbs.length >= 2) {
    strengths.push(`Quelques verbes d'action présents (${foundActionVerbs.join(', ')}).`);
  } else {
    scoreGrammar = Math.max(1, scoreGrammar - 1.25);
    mistakes.push({
      penalty: 1.25,
      title: 'Manque de verbes d\'action percutants',
      explanation: 'Dans l\'expérience professionnelle, évite les descriptions vagues comme "did stuff" ou "was in charge of".',
      fix: 'Utilise des <em>action verbs</em> au Past Simple : <em>conducted, monitored, assisted, maintained, installed</em>.'
    });
  }

  // References line check
  if (/references available upon request/i.test(lowerText) || /available on request/i.test(lowerText)) {
    strengths.push('Formule officielle de fin de CV parfaite : <em>"References available upon request"</em>.');
  } else if (/reference/i.test(lowerText)) {
    // found something about references
  } else {
    scoreGrammar = Math.max(1, scoreGrammar - 0.75);
    mistakes.push({
      penalty: 0.75,
      title: 'Mention des références manquante',
      explanation: 'Sur un CV anglophone, la dernière section standard doit obligatoirement mentionner les références.',
      fix: 'Ajoute en fin de CV : <em>"References available upon request."</em>'
    });
  }

  // --------------------------------------------------------------------------
  // 4. SOFT SKILLS, IT SKILLS & PROFESSIONAL IMPACT (5 pts)
  // --------------------------------------------------------------------------
  // IT Skills level wording
  const hasProficient = /proficient with/i.test(lowerText) || /proficient in/i.test(lowerText);
  const hasWorkingKnowledge = /working knowledge of/i.test(lowerText) || /working knowledge in/i.test(lowerText);
  if (hasProficient && hasWorkingKnowledge) {
    strengths.push('Excellente nuance du cours dans les compétences IT : <em>"proficient with..."</em> (maîtrise) et <em>"working knowledge of..."</em> (bases).');
  } else if (hasProficient || hasWorkingKnowledge) {
    strengths.push('Bonne formulation des compétences informatiques.');
  } else {
    scorePro = Math.max(1, scorePro - 1.0);
    mistakes.push({
      penalty: 1.0,
      title: 'Formulations IT du cours non utilisées',
      explanation: 'Pour qualifier tes compétences logicielles, la prof attend les expressions exactes de la fiche.',
      fix: 'Utilise : <em>"Proficient with Word, Excel"</em> et <em>"Working knowledge of AutoCAD, Climawin"</em>.'
    });
  }

  // Soft skills detection
  const softSkills = [
    'teamwork', 'leadership', 'communication', 'interpersonal skills',
    'determination', 'self-motivation', 'discipline', 'resilience',
    'intercultural awareness', 'adaptability', 'open-mindedness',
    'analytical skills', 'problem-solving', 'creativity', 'resourcefulness'
  ];
  const detectedSoftSkills = softSkills.filter(s => lowerText.includes(s));
  if (detectedSoftSkills.length >= 3) {
    strengths.push(`Très bonne mise en valeur des soft skills (${detectedSoftSkills.slice(0, 4).join(', ')}).`);
  } else if (detectedSoftSkills.length >= 1) {
    strengths.push(`Soft skills mentionnées (${detectedSoftSkills.join(', ')}).`);
  } else {
    scorePro = Math.max(1, scorePro - 1.25);
    mistakes.push({
      penalty: 1.25,
      title: 'Soft skills non explicitées dans les loisirs',
      explanation: 'Dans la section Interests, ne te contente pas de lister un sport ou un loisir : montre ce qu\'il apporte professionnellement !',
      fix: 'Ex: <em>"Team sports (Rugby): developed leadership, teamwork and communication skills."</em>'
    });
  }

  // Languages levels check
  const hasNative = /mother tongue/i.test(lowerText) || /native speaker/i.test(lowerText);
  const hasLevel = /fluent/i.test(lowerText) || /intermediate/i.test(lowerText) || /advanced/i.test(lowerText) || /toeic/i.test(lowerText);
  if (hasNative && hasLevel) {
    strengths.push('Niveaux de langues bien précisés (Mother tongue, Fluent, Intermediate...).');
  }

  // Calculate final score /20
  scoreStruct = Math.round(scoreStruct * 10) / 10;
  scoreVocab = Math.round(scoreVocab * 10) / 10;
  scoreGrammar = Math.round(scoreGrammar * 10) / 10;
  scorePro = Math.round(scorePro * 10) / 10;

  const totalScore = Math.max(0, Math.min(20, Math.round((scoreStruct + scoreVocab + scoreGrammar + scorePro) * 2) / 2));

  let appreciation = '';
  let color = '#10b981';
  if (totalScore >= 18) {
    appreciation = 'Excellentissime ! Copie remarquable, prête pour le partiel.';
  } else if (totalScore >= 15) {
    appreciation = 'Très bon travail ! Quelques petits réglages de vocabulaire et ce sera parfait.';
  } else if (totalScore >= 12) {
    appreciation = 'Bonne copie, mais attention aux pièges classiques (faux-amis, sections manquantes).';
    color = '#22d3ee';
  } else if (totalScore >= 10) {
    appreciation = 'Moyenne atteinte. Revois les équivalences de diplômes et la structure en 7 sections.';
    color = '#f59e0b';
  } else {
    appreciation = 'Insuffisant. Trop d\'erreurs éliminatoires ou structure incomplète. Étudie le modèle type !';
    color = '#ef4444';
  }

  return {
    score: totalScore,
    totalMax: 20,
    wordCount,
    appreciation,
    color,
    categoryScores: {
      structure: { score: scoreStruct, max: 5, label: 'Structure & 7 Sections', details: `${detectedSectionsCount}/7 sections reconnues` },
      vocabulary: { score: scoreVocab, max: 5, label: 'Vocabulaire & Diplômes', details: 'Traductions officielles & faux-amis' },
      grammar: { score: scoreGrammar, max: 5, label: 'Verbes d\'action & Clarté', details: 'Past simple, action verbs & formules' },
      professionalism: { score: scorePro, max: 5, label: 'Soft Skills & IT Skills', details: 'Proficient with, working knowledge, soft skills' }
    },
    strengths,
    mistakes,
    checklist
  };
}

// ============================================================================
// COVER LETTER GRADING LOGIC
// ============================================================================
function gradeCoverLetter(text, lowerText, words, wordCount) {
  let scoreStruct = 5.0;
  let scoreVocab = 5.0;
  let scoreGrammar = 5.0;
  let scorePro = 5.0;

  const strengths = [];
  const mistakes = [];
  const checklist = [];

  // --------------------------------------------------------------------------
  // 1. LAYOUT & 4-PARAGRAPH STRUCTURE (5 pts)
  // --------------------------------------------------------------------------
  const paragraphs = text.split(/\n\s*\n/).filter(p => p.trim().length > 0);
  
  // Header detection
  const hasDate = /(january|february|march|april|may|june|july|august|september|october|november|december|\b202[3-6]\b)/i.test(text);
  const hasRecipientOrSender = /(dear|mr\.|ms\.|mrs\.|dr\.|avenue|street|road|lane|paris|london|nantes|france|uk)/i.test(text);
  
  checklist.push({
    label: 'En-tête formel (Coordonnées & Date)',
    done: hasDate && hasRecipientOrSender,
    hint: 'Adresse expéditeur, date en anglais, coordonnées entreprise'
  });

  // Salutation check
  const salutationMatch = text.match(/dear\s+(mr\.?|ms\.?|mrs\.?|dr\.?)\s+[a-zA-Z]+/i) ||
                          text.match(/dear\s+sir\s+or\s+madam/i) ||
                          text.match(/dear\s+sir\/madam/i) ||
                          text.match(/dear\s+hiring\s+manager/i) ||
                          text.match(/dear\s+[a-zA-Z]+/i);

  const isSalutationPresent = Boolean(salutationMatch);
  checklist.push({
    label: 'Formule d\'ouverture formelle (Dear...)',
    done: isSalutationPresent,
    hint: 'Dear Mr. Harrison OU Dear Sir or Madam'
  });

  // Closing formula check
  const closingMatch = text.match(/yours\s+sincerely/i) ||
                       text.match(/yours\s+faithfully/i) ||
                       text.match(/sincerely\s+yours/i) ||
                       text.match(/best\s+regards/i) ||
                       text.match(/warm\s+regards/i) ||
                       text.match(/sincerely/i);

  const isClosingPresent = Boolean(closingMatch);
  checklist.push({
    label: 'Formule de congé finale (Yours sincerely / faithfully)',
    done: isClosingPresent,
    hint: 'Attention à la règle d\'or du partiel !'
  });

  // Paragraph count
  if (paragraphs.length >= 4) {
    strengths.push(`Très bonne mise en page en paragraphes distincts (${paragraphs.length} blocs identifiés).`);
    checklist.push({ label: 'Structure en 4 paragraphes distincts', done: true, hint: 'Introduction, Technique, Soft Skills, Conclusion' });
  } else {
    scoreStruct = Math.max(1, scoreStruct - 1.5);
    mistakes.push({
      penalty: 1.5,
      title: 'Mise en page : découpage en paragraphes insuffisant',
      explanation: 'Une lettre de motivation doit impérativement être aérée en <strong>4 paragraphes distincts</strong> sautés par une ligne.',
      fix: 'Sépare bien : 1) Objet & statut, 2) Compétences techniques & BUT, 3) Expériences & motivation, 4) Entretien & CV joint.'
    });
    checklist.push({ label: 'Structure en 4 paragraphes distincts', done: false, hint: 'Sépare tes paragraphes avec une ligne vide.' });
  }

  // Word count check
  if (wordCount < 120) {
    scoreStruct = Math.max(0.5, scoreStruct - 1.25);
    mistakes.push({
      penalty: 1.25,
      title: 'Lettre trop courte',
      explanation: `Ta lettre ne fait que ${wordCount} mots. La consigne officielle exige entre 150 et 250 mots.`,
      fix: 'Développe tes réalisations de BUT MT2E et ta motivation pour l\'entreprise.'
    });
  } else if (wordCount > 330) {
    scoreStruct = Math.max(1, scoreStruct - 0.5);
    mistakes.push({
      penalty: 0.5,
      title: 'Lettre un peu trop longue',
      explanation: `Ta lettre fait ${wordCount} mots. Une lettre de motivation en anglais doit tenir sur une seule page (environ 180-250 mots).`,
      fix: 'Sois plus concis et synthétique.'
    });
  } else {
    strengths.push(`Longueur idéale (${wordCount} mots) parfaitement calibrée pour l'examen.`);
  }

  // --------------------------------------------------------------------------
  // 2. THE GOLDEN SALUTATION & CLOSING RULE (CRITICAL CRITERION) (5 pts)
  // --------------------------------------------------------------------------
  const isNamed = /dear\s+(mr\.?|ms\.?|mrs\.?|dr\.?)\s+[a-zA-Z]+/i.test(text);
  const isUnnamed = /dear\s+sir\s+or\s+madam/i.test(lowerText) || /dear\s+sir\/madam/i.test(lowerText);
  const hasSincerely = /yours\s+sincerely/i.test(lowerText) || /sincerely\s+yours/i.test(lowerText) || /\bsincerely\b/i.test(lowerText);
  const hasFaithfully = /yours\s+faithfully/i.test(lowerText) || /\bfaithfully\b/i.test(lowerText);
  const hasInformalClosing = /best\s+regards/i.test(lowerText) || /warm\s+regards/i.test(lowerText) || /\bcheers\b/i.test(lowerText);

  if (isNamed) {
    if (hasSincerely && !hasFaithfully) {
      strengths.push('Règle d\'or respectée à 100% : Destinataire nommé (<em>"Dear Mr./Ms..."</em>) associé à <strong>"Yours sincerely"</strong>.');
    } else if (hasFaithfully) {
      scoreGrammar = Math.max(0, scoreGrammar - 2.0);
      mistakes.push({
        penalty: 2.0,
        title: 'Erreur majeure du partiel : Salutation / Formule de congé',
        explanation: 'Tu as commencé par une personne nommée (<em>"Dear Mr./Ms..."</em>) mais tu as conclu par <em>"Yours faithfully"</em> !',
        fix: 'La règle britannique impose obligatoirement : <strong>Dear Mr./Ms. [Nom] → Yours sincerely</strong>.'
      });
    } else if (hasInformalClosing) {
      scoreGrammar = Math.max(0.5, scoreGrammar - 1.25);
      mistakes.push({
        penalty: 1.25,
        title: 'Formule de congé trop informelle',
        explanation: '<em>"Best regards"</em> est acceptable dans un simple email, mais dans une lettre de motivation formelle d\'examen, la prof attend <strong>Yours sincerely</strong>.',
        fix: 'Termine par <strong>Yours sincerely</strong> suivi de ton prénom et nom.'
      });
    }
  } else if (isUnnamed) {
    if (hasFaithfully && !hasSincerely) {
      strengths.push('Règle d\'or respectée à 100% : Destinataire non nommé (<em>"Dear Sir or Madam"</em>) associé à <strong>"Yours faithfully"</strong>.');
    } else if (hasSincerely) {
      scoreGrammar = Math.max(0, scoreGrammar - 2.0);
      mistakes.push({
        penalty: 2.0,
        title: 'Erreur majeure du partiel : Salutation / Formule de congé',
        explanation: 'Tu as commencé par <em>"Dear Sir or Madam"</em> mais tu as terminé par <em>"Yours sincerely"</em> !',
        fix: 'La règle britannique impose obligatoirement : <strong>Dear Sir or Madam → Yours faithfully</strong>.'
      });
    }
  } else {
    // Neither clearly detected or informal salutation
    if (!isSalutationPresent) {
      scoreGrammar = Math.max(0.5, scoreGrammar - 1.5);
      mistakes.push({
        penalty: 1.5,
        title: 'Formule de salutation absente',
        explanation: 'Ta lettre doit commencer par une formule de politesse officielle.',
        fix: 'Commence par <em>"Dear Mr. Harrison,"</em> ou <em>"Dear Sir or Madam,"</em>.'
      });
    }
    if (!isClosingPresent) {
      scoreGrammar = Math.max(0.5, scoreGrammar - 1.5);
      mistakes.push({
        penalty: 1.5,
        title: 'Formule de congé absente',
        explanation: 'Ta lettre se termine sans signature formelle.',
        fix: 'Termine par <em>"Yours sincerely,"</em> ou <em>"Yours faithfully,"</em> suivi de ton nom.'
      });
    }
  }

  // --------------------------------------------------------------------------
  // 3. VOCABULARY & EXAM FORMULAS (5 pts)
  // --------------------------------------------------------------------------
  // Opening formula: I am writing to apply for...
  const hasOpeningFormula = /i am writing to (express my (strong )?interest in (applying for|the position)|apply for)/i.test(lowerText) ||
                            /i would like to apply for/i.test(lowerText);
  if (hasOpeningFormula) {
    strengths.push('Formule d\'ouverture d\'application irréprochable (<em>"I am writing to apply for..."</em>).');
    checklist.push({ label: 'Formule d\'ouverture officielle', done: true, hint: 'I am writing to apply for...' });
  } else {
    scoreVocab = Math.max(1, scoreVocab - 1.25);
    mistakes.push({
      penalty: 1.25,
      title: 'Formule d\'accroche officielle absente',
      explanation: 'Dès la première phrase, utilise la formule consacrée attendue par les correcteurs.',
      fix: 'Commence le 1er paragraphe par : <em>"I am writing to apply for the position of Assistant Energy Manager advertised on..."</em>.'
    });
    checklist.push({ label: 'Formule d\'ouverture officielle', done: false, hint: 'Utilise : "I am writing to apply for..."' });
  }

  // MT2E Degree mention
  const hasDegree = /bachelor of technology/i.test(lowerText) || /energy transition/i.test(lowerText) || /but mt2e/i.test(lowerText);
  if (hasDegree) {
    strengths.push('Diplôme BUT MT2E clairement mis en avant dans la lettre.');
    checklist.push({ label: 'Mention du BUT MT2E en anglais', done: true, hint: 'Bachelor of Technology...' });
  } else {
    scoreVocab = Math.max(1, scoreVocab - 1.25);
    mistakes.push({
      penalty: 1.25,
      title: 'Diplôme BUT non traduit ou absent',
      explanation: 'Présente clairement ton statut académique dans le 1er paragraphe.',
      fix: 'Ex: <em>"Currently a 2nd-year undergraduate student enrolled in the Bachelor of Technology in Energy Transition and Efficiency (BUT MT2E)..."</em>.'
    });
    checklist.push({ label: 'Mention du BUT MT2E en anglais', done: false, hint: 'Traduis BUT MT2E.' });
  }

  // Technical terms
  const techTerms = [
    'energy efficiency', 'thermodynamics', 'renewable energy', 'solar', 'wind',
    'hvac', 'thermal', 'consumption', 'audit', 'autocad', 'climawin', 'fluid mechanics'
  ];
  const foundTechTerms = techTerms.filter(t => lowerText.includes(t));
  if (foundTechTerms.length >= 3) {
    strengths.push(`Très bon vocabulaire technique MT2E (${foundTechTerms.slice(0, 4).join(', ')}).`);
    checklist.push({ label: 'Vocabulaire technique MT2E (3+ termes)', done: true, hint: 'Audit, thermodynamics, HVAC, AutoCAD...' });
  } else {
    scoreVocab = Math.max(1, scoreVocab - 1.0);
    mistakes.push({
      penalty: 1.0,
      title: 'Vocabulaire technique insuffisant',
      explanation: 'Démontre tes connaissances en citant au moins 3 termes du domaine de l\'énergie.',
      fix: 'Intègre des mots comme <em>energy efficiency, building thermodynamics, renewable energy, AutoCAD</em> ou <em>Climawin</em>.'
    });
    checklist.push({ label: 'Vocabulaire technique MT2E (3+ termes)', done: false, hint: 'Ajoute des termes techniques.' });
  }

  // Banned French words in Cover Letter
  const frenchWords = [
    { word: 'stage', fix: 'internship / work placement' },
    { word: 'formation', fix: 'degree / academic curriculum' },
    { word: 'candidature', fix: 'application' },
    { word: 'société', fix: 'company / firm' },
    { word: 'societe', fix: 'company' },
    { word: 'poste', fix: 'position / role' },
    { word: 'cv joint', fix: 'enclosed CV' }
  ];
  const detectedFrench = frenchWords.filter(f => new RegExp('\\b' + f.word + '\\b', 'i').test(text));
  if (detectedFrench.length > 0) {
    const p = Math.min(1.5, detectedFrench.length * 0.5);
    scoreVocab = Math.max(0, scoreVocab - p);
    mistakes.push({
      penalty: p,
      title: 'Mots français non traduits',
      explanation: `Tu as laissé des mots français dans ta lettre : ${detectedFrench.map(d => `<em>"${d.word}"</em>`).join(', ')}.`,
      fix: `Remplace par les termes anglais : ${detectedFrench.map(d => `${d.word} → <strong>${d.fix}</strong>`).join(', ')}.`
    });
  }

  // --------------------------------------------------------------------------
  // 4. CALL TO ACTION, CLOSING FORMULAS & FORMAL TONE (5 pts)
  // --------------------------------------------------------------------------
  // Enclosure formula: Please find enclosed my CV...
  const hasEnclosedCV = /please find enclosed/i.test(lowerText) ||
                        /enclosed (my|a copy of my) cv/i.test(lowerText) ||
                        /attached (my|a copy of my) cv/i.test(lowerText);
  if (hasEnclosedCV) {
    strengths.push('Mention formelle de la pièce jointe impeccable (<em>"Please find enclosed my CV..."</em>).');
    checklist.push({ label: 'Mention du CV joint (Enclosed CV)', done: true, hint: 'Please find enclosed my CV...' });
  } else {
    scorePro = Math.max(1, scorePro - 1.0);
    mistakes.push({
      penalty: 1.0,
      title: 'Mention du CV joint oubliée',
      explanation: 'Dans le dernier paragraphe, il faut toujours mentionner ton CV.',
      fix: 'Ajoute : <em>"Please find enclosed my CV for your consideration."</em>'
    });
    checklist.push({ label: 'Mention du CV joint (Enclosed CV)', done: false, hint: 'Ajoute la phrase du CV joint.' });
  }

  // Interview request
  const hasInterview = /interview/i.test(lowerText) || /discuss my application/i.test(lowerText);
  if (hasInterview) {
    strengths.push('Demande d\'entretien courtoise et professionnelle présente.');
    checklist.push({ label: 'Demande d\'entretien (Interview)', done: true, hint: 'Opportunity to discuss in an interview' });
  } else {
    scorePro = Math.max(1, scorePro - 0.75);
    mistakes.push({
      penalty: 0.75,
      title: 'Appel à l\'entretien manquant',
      explanation: 'Propose toujours un échange oral en conclusion.',
      fix: 'Écris : <em>"I would welcome the opportunity to discuss my application further in an interview."</em>'
    });
    checklist.push({ label: 'Demande d\'entretien (Interview)', done: false, hint: 'Propose un entretien.' });
  }

  // Look forward to hearing from you (classic trap: "look forward to hear")
  const hasLookForwardWrong = /look forward to hear\b/i.test(lowerText);
  const hasLookForwardCorrect = /look forward to hearing\b/i.test(lowerText);

  if (hasLookForwardWrong) {
    scoreGrammar = Math.max(0.5, scoreGrammar - 1.25);
    mistakes.push({
      penalty: 1.25,
      title: 'Piège de grammaire : "look forward to hearing"',
      explanation: 'Après l\'expression "look forward to", le verbe se met obligatoirement en <strong>-ING</strong> car "to" est une préposition !',
      fix: 'Écris : <em>"I look forward to <strong>hearing</strong> from you."</em> (et non <em>to hear</em>).'
    });
  } else if (hasLookForwardCorrect) {
    strengths.push('Formule d\'attente parfaite avec gérondif : <em>"I look forward to hearing from you."</em>');
    checklist.push({ label: 'Formule d\'attente (I look forward to hearing...)', done: true, hint: 'I look forward to hearing from you' });
  } else {
    checklist.push({ label: 'Formule d\'attente (I look forward to hearing...)', done: false, hint: 'Ajoute la formule d\'attente avant la signature.' });
  }

  // Check for informal contractions in a formal letter (I'm, don't, can't)
  const contractions = (text.match(/\b(i'm|don't|can't|won't|didn't|it's|we've|you're)\b/gi) || []);
  if (contractions.length >= 2) {
    scorePro = Math.max(1, scorePro - 0.75);
    mistakes.push({
      penalty: 0.75,
      title: 'Contractions informelles détectées',
      explanation: `Dans une lettre de motivation formelle, on n'utilise jamais de contractions (${contractions.slice(0, 3).join(', ')}).`,
      fix: 'Écris les formes pleines : <em>I am, do not, cannot, will not</em>.'
    });
  }

  // Formal connectors
  const connectors = ['furthermore', 'moreover', 'in addition', 'consequently', 'therefore', 'during my studies'];
  const foundConnectors = connectors.filter(c => lowerText.includes(c));
  if (foundConnectors.length >= 2) {
    strengths.push(`Très bonnes transitions formelles employées (${foundConnectors.join(', ')}).`);
  }

  // Calculate final score /20
  scoreStruct = Math.round(scoreStruct * 10) / 10;
  scoreVocab = Math.round(scoreVocab * 10) / 10;
  scoreGrammar = Math.round(scoreGrammar * 10) / 10;
  scorePro = Math.round(scorePro * 10) / 10;

  const totalScore = Math.max(0, Math.min(20, Math.round((scoreStruct + scoreVocab + scoreGrammar + scorePro) * 2) / 2));

  let appreciation = '';
  let color = '#10b981';
  if (totalScore >= 18) {
    appreciation = 'Remarquable ! Lettre d\'un niveau d\'excellence, digne d\'un 20/20 au partiel.';
  } else if (totalScore >= 15) {
    appreciation = 'Très bonne lettre de motivation, formelle et convaincante.';
  } else if (totalScore >= 12) {
    appreciation = 'Bon niveau, mais vérifie les formules types et la règle d\'or salutation/closing.';
    color = '#22d3ee';
  } else if (totalScore >= 10) {
    appreciation = 'Moyenne atteinte. Corrige les fautes de formule et développe ton argumentation.';
    color = '#f59e0b';
  } else {
    appreciation = 'Insuffisant. Trop d\'erreurs formelles ou formule de salutation inversée. Étudie le modèle type !';
    color = '#ef4444';
  }

  return {
    score: totalScore,
    totalMax: 20,
    wordCount,
    appreciation,
    color,
    categoryScores: {
      structure: { score: scoreStruct, max: 5, label: 'Mise en page & 4 Paragraphes', details: `${paragraphs.length} paragraphes détectés` },
      vocabulary: { score: scoreVocab, max: 5, label: 'Vocabulaire & BUT MT2E', details: 'Formules officielles, BUT MT2E & termes d\'énergie' },
      grammar: { score: scoreGrammar, max: 5, label: 'Règle d\'or & Formules types', details: 'Dear/Yours match, I am writing to apply...' },
      professionalism: { score: scorePro, max: 5, label: 'CV joint, Entretien & Ton', details: 'Enclosed CV, interview request & absence de contractions' }
    },
    strengths,
    mistakes,
    checklist
  };
}
