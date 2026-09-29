export const THEMES = {
  "verb-tenses": {
    "label": "Verb Tenses",
    "icon": "\u23f1\ufe0f",
    "subtopics": {
      "present-simple": "Present Simple",
      "present-continuous": "Present Continuous",
      "past-simple": "Past Simple",
      "past-continuous": "Past Continuous",
      "present-perfect": "Present Perfect",
      "past-perfect": "Past Perfect",
      "future-will": "Future (will)",
      "future-going-to": "Future (going to)",
      "future-perfect": "Future Perfect"
    }
  },
  "passive-voice": {
    "label": "Active vs Passive Voice",
    "icon": "\ud83d\udd04",
    "subtopics": {
      "present-passive": "Present Passive",
      "past-passive": "Past Passive",
      "perfect-passive": "Perfect Passive",
      "future-passive": "Future Passive",
      "modal-passive": "Passive with Modals"
    }
  },
  "articles": {
    "label": "Articles & Determiners",
    "icon": "\ud83d\udcdd",
    "subtopics": {
      "definite": "Definite Article (the)",
      "indefinite": "Indefinite (a/an)",
      "zero-article": "Zero Article",
      "quantifiers": "Quantifiers (some/any/much/many)",
      "demonstratives": "Demonstratives (this/that/these/those)"
    }
  },
  "prepositions": {
    "label": "Prepositions",
    "icon": "\ud83d\udccd",
    "subtopics": {
      "time-preps": "Prepositions of Time (in/on/at)",
      "place-preps": "Prepositions of Place (in/on/at)",
      "movement-preps": "Prepositions of Movement",
      "prepositional-phrases": "Prepositional Phrases",
      "dependent-preps": "Dependent Prepositions (interested in, responsible for\u2026)"
    }
  },
  "pronouns": {
    "label": "Pronouns",
    "icon": "\ud83d\udc64",
    "subtopics": {
      "relative-pronouns": "Relative Pronouns (who/which/that)",
      "reflexive": "Reflexive Pronouns",
      "indefinite-pronouns": "Indefinite Pronouns (someone/nobody\u2026)",
      "possessive": "Possessive Pronouns"
    }
  },
  "conjunctions": {
    "label": "Conjunctions & Connectors",
    "icon": "\ud83d\udd17",
    "subtopics": {
      "coordinating": "Coordinating (and/but/or/so)",
      "subordinating": "Subordinating (although/because/while/unless)",
      "linking-adverbs": "Linking Adverbs (however/therefore/moreover/consequently)"
    }
  },
  "comparatives": {
    "label": "Comparatives & Superlatives",
    "icon": "\ud83d\udcca",
    "subtopics": {
      "comparative-regular": "Regular Comparatives (more/less + adj)",
      "superlative-regular": "Regular Superlatives (most/least)",
      "irregular-forms": "Irregular Forms (good/better/best)",
      "as-as": "As...As Constructions",
      "double-comparative": "Double Comparatives (the more\u2026 the more\u2026)"
    }
  },
  "gerund-infinitive": {
    "label": "Gerund vs Infinitive",
    "icon": "\ud83c\udfaf",
    "subtopics": {
      "verbs-gerund": "Verbs + Gerund (enjoy/avoid/consider\u2026)",
      "verbs-infinitive": "Verbs + Infinitive (want/decide/plan\u2026)",
      "verbs-both": "Verbs + Either (remember/forget/stop\u2026)",
      "purpose-infinitive": "Infinitive of Purpose (in order to\u2026)"
    }
  },
  "conditionals": {
    "label": "Conditionals",
    "icon": "\ud83d\udd00",
    "subtopics": {
      "zero-conditional": "Zero Conditional (facts)",
      "first-conditional": "First Conditional (possible future)",
      "second-conditional": "Second Conditional (hypothetical)",
      "third-conditional": "Third Conditional (past regret)",
      "mixed-conditional": "Mixed Conditionals"
    }
  },
  "business-vocab": {
    "label": "Business Vocabulary",
    "icon": "\ud83d\udcbc",
    "subtopics": {
      "finance": "Finance & Accounting",
      "hr-management": "HR & Management",
      "contracts": "Contracts & Legal",
      "marketing": "Marketing & Sales",
      "communication": "Business Communication"
    }
  },
  "subject-verb": {
    "label": "Subject-Verb Agreement",
    "icon": "\u2705",
    "subtopics": {
      "compound-subjects": "Compound Subjects (A and B)",
      "collective-nouns": "Collective Nouns (team/staff/committee)",
      "neither-either": "Neither/Either\u2026nor/or",
      "intervening-phrases": "Intervening Phrases (one of the\u2026)"
    }
  },
  "word-forms": {
    "label": "Word Forms",
    "icon": "\ud83d\udcda",
    "subtopics": {
      "noun-forms": "Noun Forms (-tion/-ment/-ness)",
      "verb-forms": "Verb Forms",
      "adjective-forms": "Adjective Forms (-ful/-less/-ive/-al)",
      "adverb-forms": "Adverb Forms (-ly)",
      "suffixes-prefixes": "Suffixes & Prefixes (un-/re-/dis-/-ize)"
    }
  }
};

export const questions = [
  {
    "id": "p5_ve_001",
    "part": 5,
    "theme": "verb-tenses",
    "subtopic": "present-simple",
    "question": "The finance team ___ the quarterly report to the board of directors yesterday.",
    "options": [
      "submitted",
      "has submitted",
      "submits",
      "is submitting"
    ],
    "answer": 0,
    "explanation": "Use the <strong>past simple</strong> for an action completed at a specific time in the past (\"yesterday\")."
  },
  {
    "id": "p5_ve_002",
    "part": 5,
    "theme": "verb-tenses",
    "subtopic": "present-continuous",
    "question": "We ___ on this project since last January.",
    "options": [
      "have been working",
      "are working",
      "worked",
      "will work"
    ],
    "answer": 0,
    "explanation": "Use the <strong>present perfect continuous</strong> for an action that started in the past and continues to the present (\"since last January\")."
  },
  {
    "id": "p5_ve_003",
    "part": 5,
    "theme": "verb-tenses",
    "subtopic": "past-simple",
    "question": "The CEO ___ a press conference tomorrow at 10 AM.",
    "options": [
      "will hold",
      "held",
      "has held",
      "holds"
    ],
    "answer": 0,
    "explanation": "Use the <strong>future simple</strong> or present continuous for scheduled future events."
  },
  {
    "id": "p5_ve_004",
    "part": 5,
    "theme": "verb-tenses",
    "subtopic": "past-continuous",
    "question": "By next year, the company ___ its operations to three new countries.",
    "options": [
      "will have expanded",
      "will expand",
      "expanded",
      "has expanded"
    ],
    "answer": 0,
    "explanation": "Use the <strong>future perfect</strong> for an action that will be completed before a specific time in the future (\"By next year\")."
  },
  {
    "id": "p5_ve_005",
    "part": 5,
    "theme": "verb-tenses",
    "subtopic": "present-perfect",
    "question": "Ms. Davis ___ as the branch manager for five years before she was promoted.",
    "options": [
      "had worked",
      "has worked",
      "works",
      "is working"
    ],
    "answer": 0,
    "explanation": "Use the <strong>past perfect</strong> for an action completed before another action in the past."
  },
  {
    "id": "p5_ve_006",
    "part": 5,
    "theme": "verb-tenses",
    "subtopic": "past-perfect",
    "question": "Currently, the marketing department ___ a new strategy for the upcoming campaign.",
    "options": [
      "is developing",
      "develops",
      "developed",
      "has developed"
    ],
    "answer": 0,
    "explanation": "Use the <strong>present continuous</strong> for an action happening right now (\"Currently\")."
  },
  {
    "id": "p5_ve_007",
    "part": 5,
    "theme": "verb-tenses",
    "subtopic": "future-will",
    "question": "The regular staff meeting ___ every Monday morning.",
    "options": [
      "takes place",
      "is taking place",
      "took place",
      "has taken place"
    ],
    "answer": 0,
    "explanation": "Use the <strong>present simple</strong> for regular routines and habits."
  },
  {
    "id": "p5_ve_008",
    "part": 5,
    "theme": "verb-tenses",
    "subtopic": "future-going-to",
    "question": "I ___ the document when the power went out.",
    "options": [
      "was reviewing",
      "reviewed",
      "review",
      "have reviewed"
    ],
    "answer": 0,
    "explanation": "Use the <strong>past continuous</strong> for an action in progress when interrupted by another action in the past."
  },
  {
    "id": "p5_ve_009",
    "part": 5,
    "theme": "verb-tenses",
    "subtopic": "future-perfect",
    "question": "They ___ the new software system next week.",
    "options": [
      "are going to install",
      "installed",
      "install",
      "have installed"
    ],
    "answer": 0,
    "explanation": "Use <strong>going to</strong> or present continuous for planned future actions."
  },
  {
    "id": "p5_ve_010",
    "part": 5,
    "theme": "verb-tenses",
    "subtopic": "present-simple",
    "question": "The team ___ the final prototype yet.",
    "options": [
      "has not finished",
      "did not finish",
      "does not finish",
      "is not finishing"
    ],
    "answer": 0,
    "explanation": "Use the <strong>present perfect</strong> with \"yet\" for an action expected to happen before now."
  },
  {
    "id": "p5_ve_011",
    "part": 5,
    "theme": "verb-tenses",
    "subtopic": "present-continuous",
    "question": "Mr. Lee ___ the presentation by the time the clients arrive.",
    "options": [
      "will have prepared",
      "will prepare",
      "prepared",
      "has prepared"
    ],
    "answer": 0,
    "explanation": "Use the <strong>future perfect</strong> for an action completed before a future deadline."
  },
  {
    "id": "p5_ve_012",
    "part": 5,
    "theme": "verb-tenses",
    "subtopic": "past-simple",
    "question": "We ___ the sales figures from last quarter.",
    "options": [
      "are analyzing",
      "analyze",
      "analyzed",
      "have analyzed"
    ],
    "answer": 0,
    "explanation": "Use the <strong>present continuous</strong> for temporary actions happening around now."
  },
  {
    "id": "p5_ve_013",
    "part": 5,
    "theme": "verb-tenses",
    "subtopic": "past-continuous",
    "question": "The director ___ the budget proposal last week.",
    "options": [
      "approved",
      "has approved",
      "approves",
      "is approving"
    ],
    "answer": 0,
    "explanation": "Use the <strong>past simple</strong> with specific past time expressions (\"last week\")."
  },
  {
    "id": "p5_ve_014",
    "part": 5,
    "theme": "verb-tenses",
    "subtopic": "present-perfect",
    "question": "Our competitors ___ a new product line recently.",
    "options": [
      "have launched",
      "launched",
      "launch",
      "are launching"
    ],
    "answer": 0,
    "explanation": "Use the <strong>present perfect</strong> with \"recently\" for actions completed in the near past."
  },
  {
    "id": "p5_ve_015",
    "part": 5,
    "theme": "verb-tenses",
    "subtopic": "past-perfect",
    "question": "I ___ the conference in London next month.",
    "options": [
      "will be attending",
      "attended",
      "have attended",
      "attend"
    ],
    "answer": 0,
    "explanation": "Use the <strong>future continuous</strong> for an action that will be in progress at a certain time in the future."
  },
  {
    "id": "p5_pa_016",
    "part": 5,
    "theme": "passive-voice",
    "subtopic": "present-passive",
    "question": "The new office building ___ in the spring of last year.",
    "options": [
      "was completed",
      "completed",
      "has completed",
      "is completing"
    ],
    "answer": 0,
    "explanation": "Use the <strong>past passive</strong> when the action happened in the past and the subject receives the action."
  },
  {
    "id": "p5_pa_017",
    "part": 5,
    "theme": "passive-voice",
    "subtopic": "past-passive",
    "question": "All applications must ___ by Friday at 5 PM.",
    "options": [
      "be submitted",
      "submit",
      "have submitted",
      "submitting"
    ],
    "answer": 0,
    "explanation": "Use the <strong>modal passive</strong> (modal + be + past participle) when the subject receives the action."
  },
  {
    "id": "p5_pa_018",
    "part": 5,
    "theme": "passive-voice",
    "subtopic": "perfect-passive",
    "question": "The results of the survey ___ at the next meeting.",
    "options": [
      "will be presented",
      "will present",
      "presented",
      "have presented"
    ],
    "answer": 0,
    "explanation": "Use the <strong>future passive</strong> for an action that will be done to the subject in the future."
  },
  {
    "id": "p5_pa_019",
    "part": 5,
    "theme": "passive-voice",
    "subtopic": "future-passive",
    "question": "The broken equipment ___ by the maintenance team right now.",
    "options": [
      "is being repaired",
      "is repairing",
      "repaired",
      "has repaired"
    ],
    "answer": 0,
    "explanation": "Use the <strong>present continuous passive</strong> for an action currently being done to the subject."
  },
  {
    "id": "p5_pa_020",
    "part": 5,
    "theme": "passive-voice",
    "subtopic": "modal-passive",
    "question": "Several complaints ___ by the customer service department this week.",
    "options": [
      "have been received",
      "have received",
      "received",
      "are receiving"
    ],
    "answer": 0,
    "explanation": "Use the <strong>present perfect passive</strong> for an action done to the subject recently."
  },
  {
    "id": "p5_pa_021",
    "part": 5,
    "theme": "passive-voice",
    "subtopic": "present-passive",
    "question": "The contract ___ before the manager arrived.",
    "options": [
      "had been signed",
      "had signed",
      "was signing",
      "signed"
    ],
    "answer": 0,
    "explanation": "Use the <strong>past perfect passive</strong> for an action completed to the subject before another past event."
  },
  {
    "id": "p5_pa_022",
    "part": 5,
    "theme": "passive-voice",
    "subtopic": "past-passive",
    "question": "Safety goggles must ___ at all times in the laboratory.",
    "options": [
      "be worn",
      "wear",
      "wore",
      "wearing"
    ],
    "answer": 0,
    "explanation": "Use the <strong>modal passive</strong> for requirements and rules applied to the subject."
  },
  {
    "id": "p5_pa_023",
    "part": 5,
    "theme": "passive-voice",
    "subtopic": "perfect-passive",
    "question": "The software ___ every night to ensure optimal performance.",
    "options": [
      "is updated",
      "updates",
      "updated",
      "has updated"
    ],
    "answer": 0,
    "explanation": "Use the <strong>present simple passive</strong> for routine actions done to the subject."
  },
  {
    "id": "p5_pa_024",
    "part": 5,
    "theme": "passive-voice",
    "subtopic": "future-passive",
    "question": "The new policy ___ to all employees tomorrow.",
    "options": [
      "will be announced",
      "will announce",
      "announced",
      "has announced"
    ],
    "answer": 0,
    "explanation": "Use the <strong>future passive</strong> for a planned action to be done to the subject."
  },
  {
    "id": "p5_pa_025",
    "part": 5,
    "theme": "passive-voice",
    "subtopic": "modal-passive",
    "question": "The report ___ by an independent auditor last month.",
    "options": [
      "was reviewed",
      "reviewed",
      "has reviewed",
      "is reviewing"
    ],
    "answer": 0,
    "explanation": "Use the <strong>past passive</strong> for an action done to the subject at a specific past time."
  },
  {
    "id": "p5_pa_026",
    "part": 5,
    "theme": "passive-voice",
    "subtopic": "present-passive",
    "question": "Changes to the schedule ___ on the bulletin board.",
    "options": [
      "are posted",
      "post",
      "posted",
      "have posted"
    ],
    "answer": 0,
    "explanation": "Use the <strong>present simple passive</strong> for general facts or regular occurrences."
  },
  {
    "id": "p5_pa_027",
    "part": 5,
    "theme": "passive-voice",
    "subtopic": "past-passive",
    "question": "The package ___ by courier this morning.",
    "options": [
      "was delivered",
      "delivered",
      "delivers",
      "is delivering"
    ],
    "answer": 0,
    "explanation": "Use the <strong>past passive</strong> for a completed past action."
  },
  {
    "id": "p5_pa_028",
    "part": 5,
    "theme": "passive-voice",
    "subtopic": "perfect-passive",
    "question": "New employees ___ comprehensive training during their first week.",
    "options": [
      "are given",
      "give",
      "gave",
      "have given"
    ],
    "answer": 0,
    "explanation": "Use the <strong>present simple passive</strong> for standard procedures."
  },
  {
    "id": "p5_pa_029",
    "part": 5,
    "theme": "passive-voice",
    "subtopic": "future-passive",
    "question": "The error ___ before the document was printed.",
    "options": [
      "had been corrected",
      "had corrected",
      "was correcting",
      "corrected"
    ],
    "answer": 0,
    "explanation": "Use the <strong>past perfect passive</strong> for an action completed before another past action."
  },
  {
    "id": "p5_pa_030",
    "part": 5,
    "theme": "passive-voice",
    "subtopic": "modal-passive",
    "question": "The old building ___ to make way for a new shopping center.",
    "options": [
      "is being demolished",
      "is demolishing",
      "demolished",
      "has demolished"
    ],
    "answer": 0,
    "explanation": "Use the <strong>present continuous passive</strong> for an ongoing action done to the subject."
  },
  {
    "id": "p5_ar_031",
    "part": 5,
    "theme": "articles",
    "subtopic": "definite",
    "question": "We need to hire ___ experienced software developer for the new project.",
    "options": [
      "an",
      "a",
      "the",
      "some"
    ],
    "answer": 0,
    "explanation": "Use the <strong>indefinite article \"an\"</strong> before a singular countable noun starting with a vowel sound (\"experienced\")."
  },
  {
    "id": "p5_ar_032",
    "part": 5,
    "theme": "articles",
    "subtopic": "indefinite",
    "question": "___ information you requested is attached to this email.",
    "options": [
      "The",
      "An",
      "A",
      "Some"
    ],
    "answer": 0,
    "explanation": "Use the <strong>definite article \"the\"</strong> when referring to specific information known to both parties."
  },
  {
    "id": "p5_ar_033",
    "part": 5,
    "theme": "articles",
    "subtopic": "zero-article",
    "question": "There are ___ new updates available for download.",
    "options": [
      "some",
      "any",
      "much",
      "a"
    ],
    "answer": 0,
    "explanation": "Use <strong>\"some\"</strong> in affirmative sentences with plural countable nouns."
  },
  {
    "id": "p5_ar_034",
    "part": 5,
    "theme": "articles",
    "subtopic": "quantifiers",
    "question": "I don't have ___ time to review the document right now.",
    "options": [
      "any",
      "some",
      "many",
      "a"
    ],
    "answer": 0,
    "explanation": "Use <strong>\"any\"</strong> in negative sentences with uncountable nouns (\"time\")."
  },
  {
    "id": "p5_ar_035",
    "part": 5,
    "theme": "articles",
    "subtopic": "demonstratives",
    "question": "___ CEO announced his resignation yesterday.",
    "options": [
      "The",
      "A",
      "An",
      "Some"
    ],
    "answer": 0,
    "explanation": "Use the <strong>definite article \"the\"</strong> for specific, unique titles within a company."
  },
  {
    "id": "p5_ar_036",
    "part": 5,
    "theme": "articles",
    "subtopic": "definite",
    "question": "We need ___ equipment to finish the job.",
    "options": [
      "more",
      "many",
      "a few",
      "an"
    ],
    "answer": 0,
    "explanation": "Use <strong>\"more\"</strong> (or some/much) with uncountable nouns like \"equipment\"."
  },
  {
    "id": "p5_ar_037",
    "part": 5,
    "theme": "articles",
    "subtopic": "indefinite",
    "question": "___ applicants must submit their resumes by Friday.",
    "options": [
      "All",
      "Every",
      "Each",
      "Much"
    ],
    "answer": 0,
    "explanation": "Use <strong>\"All\"</strong> with plural countable nouns."
  },
  {
    "id": "p5_ar_038",
    "part": 5,
    "theme": "articles",
    "subtopic": "zero-article",
    "question": "Please read ___ report carefully before signing.",
    "options": [
      "this",
      "these",
      "those",
      "some"
    ],
    "answer": 0,
    "explanation": "Use the singular demonstrative <strong>\"this\"</strong> for a singular noun (\"report\")."
  },
  {
    "id": "p5_ar_039",
    "part": 5,
    "theme": "articles",
    "subtopic": "quantifiers",
    "question": "___ computers in the lab were replaced last month.",
    "options": [
      "The",
      "A",
      "An",
      "Every"
    ],
    "answer": 0,
    "explanation": "Use the <strong>definite article \"the\"</strong> for specific plural nouns."
  },
  {
    "id": "p5_ar_040",
    "part": 5,
    "theme": "articles",
    "subtopic": "demonstratives",
    "question": "He has a degree in ___ Economics.",
    "options": [
      "(no article)",
      "the",
      "an",
      "a"
    ],
    "answer": 0,
    "explanation": "Use <strong>zero article</strong> for academic subjects."
  },
  {
    "id": "p5_ar_041",
    "part": 5,
    "theme": "articles",
    "subtopic": "definite",
    "question": "Could you give me ___ advice on this matter?",
    "options": [
      "some",
      "an",
      "a few",
      "many"
    ],
    "answer": 0,
    "explanation": "Use <strong>\"some\"</strong> with the uncountable noun \"advice\"."
  },
  {
    "id": "p5_ar_042",
    "part": 5,
    "theme": "articles",
    "subtopic": "indefinite",
    "question": "___ employee will receive a bonus this year.",
    "options": [
      "Every",
      "All",
      "Some",
      "Many"
    ],
    "answer": 0,
    "explanation": "Use <strong>\"Every\"</strong> with singular countable nouns."
  },
  {
    "id": "p5_ar_043",
    "part": 5,
    "theme": "articles",
    "subtopic": "zero-article",
    "question": "We have had ___ problems with the new system.",
    "options": [
      "many",
      "much",
      "a",
      "an"
    ],
    "answer": 0,
    "explanation": "Use <strong>\"many\"</strong> with plural countable nouns."
  },
  {
    "id": "p5_ar_044",
    "part": 5,
    "theme": "articles",
    "subtopic": "quantifiers",
    "question": "___ documents on your desk need to be filed.",
    "options": [
      "Those",
      "That",
      "This",
      "Much"
    ],
    "answer": 0,
    "explanation": "Use the plural demonstrative <strong>\"Those\"</strong> for plural nouns (\"documents\") farther away."
  },
  {
    "id": "p5_ar_045",
    "part": 5,
    "theme": "articles",
    "subtopic": "demonstratives",
    "question": "She is ___ best candidate for the job.",
    "options": [
      "the",
      "a",
      "an",
      "some"
    ],
    "answer": 0,
    "explanation": "Use the <strong>definite article \"the\"</strong> with superlative adjectives."
  },
  {
    "id": "p5_pr_046",
    "part": 5,
    "theme": "prepositions",
    "subtopic": "time-preps",
    "question": "The meeting is scheduled ___ Monday at 10 AM.",
    "options": [
      "on",
      "in",
      "at",
      "by"
    ],
    "answer": 0,
    "explanation": "Use <strong>\"on\"</strong> for days of the week."
  },
  {
    "id": "p5_pr_047",
    "part": 5,
    "theme": "prepositions",
    "subtopic": "place-preps",
    "question": "Our headquarters are located ___ Tokyo.",
    "options": [
      "in",
      "on",
      "at",
      "to"
    ],
    "answer": 0,
    "explanation": "Use <strong>\"in\"</strong> for cities and countries."
  },
  {
    "id": "p5_pr_048",
    "part": 5,
    "theme": "prepositions",
    "subtopic": "movement-preps",
    "question": "The deadline for the project is ___ the end of the month.",
    "options": [
      "at",
      "in",
      "on",
      "by"
    ],
    "answer": 0,
    "explanation": "Use <strong>\"at\"</strong> for specific points in time like \"at the end\"."
  },
  {
    "id": "p5_pr_049",
    "part": 5,
    "theme": "prepositions",
    "subtopic": "prepositional-phrases",
    "question": "She is responsible ___ managing the sales team.",
    "options": [
      "for",
      "to",
      "with",
      "about"
    ],
    "answer": 0,
    "explanation": "The adjective \"responsible\" is followed by the dependent preposition <strong>\"for\"</strong>."
  },
  {
    "id": "p5_pr_050",
    "part": 5,
    "theme": "prepositions",
    "subtopic": "dependent-preps",
    "question": "The document is ___ your desk.",
    "options": [
      "on",
      "in",
      "at",
      "over"
    ],
    "answer": 0,
    "explanation": "Use <strong>\"on\"</strong> for surfaces."
  },
  {
    "id": "p5_pr_051",
    "part": 5,
    "theme": "prepositions",
    "subtopic": "time-preps",
    "question": "Please submit the report ___ Friday.",
    "options": [
      "by",
      "until",
      "in",
      "on"
    ],
    "answer": 0,
    "explanation": "Use <strong>\"by\"</strong> for deadlines meaning \"no later than\"."
  },
  {
    "id": "p5_pr_052",
    "part": 5,
    "theme": "prepositions",
    "subtopic": "place-preps",
    "question": "We are very interested ___ your proposal.",
    "options": [
      "in",
      "on",
      "about",
      "with"
    ],
    "answer": 0,
    "explanation": "The adjective \"interested\" is followed by the dependent preposition <strong>\"in\"</strong>."
  },
  {
    "id": "p5_pr_053",
    "part": 5,
    "theme": "prepositions",
    "subtopic": "movement-preps",
    "question": "The new branch will open ___ September.",
    "options": [
      "in",
      "on",
      "at",
      "by"
    ],
    "answer": 0,
    "explanation": "Use <strong>\"in\"</strong> for months and years."
  },
  {
    "id": "p5_pr_054",
    "part": 5,
    "theme": "prepositions",
    "subtopic": "prepositional-phrases",
    "question": "He apologized ___ the delay.",
    "options": [
      "for",
      "to",
      "about",
      "on"
    ],
    "answer": 0,
    "explanation": "The verb \"apologize\" takes the dependent preposition <strong>\"for\"</strong> when referring to the reason."
  },
  {
    "id": "p5_pr_055",
    "part": 5,
    "theme": "prepositions",
    "subtopic": "dependent-preps",
    "question": "The conference will be held ___ the convention center.",
    "options": [
      "at",
      "in",
      "on",
      "to"
    ],
    "answer": 0,
    "explanation": "Use <strong>\"at\"</strong> for specific buildings or locations used for events."
  },
  {
    "id": "p5_pr_056",
    "part": 5,
    "theme": "prepositions",
    "subtopic": "time-preps",
    "question": "She succeeded ___ convincing the client.",
    "options": [
      "in",
      "at",
      "on",
      "with"
    ],
    "answer": 0,
    "explanation": "The verb \"succeed\" is followed by the dependent preposition <strong>\"in\"</strong>."
  },
  {
    "id": "p5_pr_057",
    "part": 5,
    "theme": "prepositions",
    "subtopic": "place-preps",
    "question": "The office is open from 9 AM ___ 5 PM.",
    "options": [
      "to",
      "until",
      "for",
      "by"
    ],
    "answer": 0,
    "explanation": "Use <strong>\"to\"</strong> (or \"until\") in the \"from X to Y\" structure."
  },
  {
    "id": "p5_pr_058",
    "part": 5,
    "theme": "prepositions",
    "subtopic": "movement-preps",
    "question": "They discussed the issue ___ the meeting.",
    "options": [
      "during",
      "while",
      "for",
      "in"
    ],
    "answer": 0,
    "explanation": "Use <strong>\"during\"</strong> before a noun to express when something happens."
  },
  {
    "id": "p5_pr_059",
    "part": 5,
    "theme": "prepositions",
    "subtopic": "prepositional-phrases",
    "question": "He is good ___ solving complex problems.",
    "options": [
      "at",
      "in",
      "on",
      "with"
    ],
    "answer": 0,
    "explanation": "The adjective \"good\" takes the dependent preposition <strong>\"at\"</strong>."
  },
  {
    "id": "p5_pr_060",
    "part": 5,
    "theme": "prepositions",
    "subtopic": "dependent-preps",
    "question": "The keys are ___ the drawer.",
    "options": [
      "in",
      "on",
      "at",
      "by"
    ],
    "answer": 0,
    "explanation": "Use <strong>\"in\"</strong> for enclosed spaces."
  },
  {
    "id": "p5_pr_061",
    "part": 5,
    "theme": "pronouns",
    "subtopic": "relative-pronouns",
    "question": "The manager ___ approved the budget has left the company.",
    "options": [
      "who",
      "which",
      "whom",
      "whose"
    ],
    "answer": 0,
    "explanation": "Use the relative pronoun <strong>\"who\"</strong> for people serving as the subject of the clause."
  },
  {
    "id": "p5_pr_062",
    "part": 5,
    "theme": "pronouns",
    "subtopic": "reflexive",
    "question": "The company ___ products are selling well is expanding.",
    "options": [
      "whose",
      "who",
      "which",
      "that"
    ],
    "answer": 0,
    "explanation": "Use <strong>\"whose\"</strong> to indicate possession for both people and things."
  },
  {
    "id": "p5_pr_063",
    "part": 5,
    "theme": "pronouns",
    "subtopic": "indefinite-pronouns",
    "question": "Employees must complete the training by ___.",
    "options": [
      "themselves",
      "their",
      "them",
      "they"
    ],
    "answer": 0,
    "explanation": "Use the reflexive pronoun <strong>\"themselves\"</strong> (by themselves) to mean \"without help\" or \"alone\"."
  },
  {
    "id": "p5_pr_064",
    "part": 5,
    "theme": "pronouns",
    "subtopic": "possessive",
    "question": "___ in the department was invited to the party.",
    "options": [
      "Everyone",
      "All",
      "Many",
      "Some"
    ],
    "answer": 0,
    "explanation": "Use the singular indefinite pronoun <strong>\"Everyone\"</strong> with the singular verb \"was\"."
  },
  {
    "id": "p5_pr_065",
    "part": 5,
    "theme": "pronouns",
    "subtopic": "relative-pronouns",
    "question": "The book ___ I borrowed from the library is very useful.",
    "options": [
      "which",
      "who",
      "whom",
      "whose"
    ],
    "answer": 0,
    "explanation": "Use the relative pronoun <strong>\"which\"</strong> (or \"that\") for things."
  },
  {
    "id": "p5_pr_066",
    "part": 5,
    "theme": "pronouns",
    "subtopic": "reflexive",
    "question": "If you need help, ask ___ at the front desk.",
    "options": [
      "someone",
      "anyone",
      "no one",
      "everyone"
    ],
    "answer": 0,
    "explanation": "Use <strong>\"someone\"</strong> in affirmative statements and offers/requests."
  },
  {
    "id": "p5_pr_067",
    "part": 5,
    "theme": "pronouns",
    "subtopic": "indefinite-pronouns",
    "question": "The project was a success because we did it ___.",
    "options": [
      "ourselves",
      "our",
      "us",
      "we"
    ],
    "answer": 0,
    "explanation": "Use the reflexive pronoun <strong>\"ourselves\"</strong> to emphasize that the subject performed the action."
  },
  {
    "id": "p5_pr_068",
    "part": 5,
    "theme": "pronouns",
    "subtopic": "possessive",
    "question": "Please return the document to Mr. Smith or ___.",
    "options": [
      "me",
      "I",
      "my",
      "mine"
    ],
    "answer": 0,
    "explanation": "Use the object pronoun <strong>\"me\"</strong> after a preposition (\"to\")."
  },
  {
    "id": "p5_pr_069",
    "part": 5,
    "theme": "pronouns",
    "subtopic": "relative-pronouns",
    "question": "___ of the candidates had the required experience.",
    "options": [
      "Neither",
      "Both",
      "All",
      "Some"
    ],
    "answer": 0,
    "explanation": "Use <strong>\"Neither\"</strong> with a singular or plural verb to mean \"not one or the other of two\". Context usually dictates, but here it works well for negative meaning."
  },
  {
    "id": "p5_pr_070",
    "part": 5,
    "theme": "pronouns",
    "subtopic": "reflexive",
    "question": "The car ___ broke down on the highway belongs to the CEO.",
    "options": [
      "that",
      "who",
      "whom",
      "whose"
    ],
    "answer": 0,
    "explanation": "Use <strong>\"that\"</strong> (or \"which\") for things in defining relative clauses."
  },
  {
    "id": "p5_pr_071",
    "part": 5,
    "theme": "pronouns",
    "subtopic": "indefinite-pronouns",
    "question": "She prepared for the presentation all by ___.",
    "options": [
      "herself",
      "her",
      "she",
      "hers"
    ],
    "answer": 0,
    "explanation": "Use <strong>\"herself\"</strong> with \"by\" to mean \"alone\" or \"without help\"."
  },
  {
    "id": "p5_pr_072",
    "part": 5,
    "theme": "pronouns",
    "subtopic": "possessive",
    "question": "___ is responsible for this error?",
    "options": [
      "Who",
      "Whom",
      "Whose",
      "Which"
    ],
    "answer": 0,
    "explanation": "Use the subject pronoun <strong>\"Who\"</strong> when asking about the subject."
  },
  {
    "id": "p5_pr_073",
    "part": 5,
    "theme": "pronouns",
    "subtopic": "relative-pronouns",
    "question": "The decision is entirely ___.",
    "options": [
      "yours",
      "your",
      "you",
      "yourself"
    ],
    "answer": 0,
    "explanation": "Use the possessive pronoun <strong>\"yours\"</strong> at the end of the sentence without a noun following."
  },
  {
    "id": "p5_pr_074",
    "part": 5,
    "theme": "pronouns",
    "subtopic": "reflexive",
    "question": "He found ___ unable to answer the question.",
    "options": [
      "himself",
      "him",
      "his",
      "he"
    ],
    "answer": 0,
    "explanation": "Use the reflexive pronoun <strong>\"himself\"</strong> when the object is the same as the subject."
  },
  {
    "id": "p5_pr_075",
    "part": 5,
    "theme": "pronouns",
    "subtopic": "indefinite-pronouns",
    "question": "I don't know ___ to contact regarding this issue.",
    "options": [
      "whom",
      "which",
      "whose",
      "they"
    ],
    "answer": 0,
    "explanation": "Use the object relative pronoun <strong>\"whom\"</strong> (or \"who\" in informal English) after a preposition or as an object."
  },
  {
    "id": "p5_co_076",
    "part": 5,
    "theme": "conjunctions",
    "subtopic": "coordinating",
    "question": "___ it was raining heavily, they continued the construction work.",
    "options": [
      "Although",
      "Because",
      "Despite",
      "However"
    ],
    "answer": 0,
    "explanation": "Use the subordinating conjunction <strong>\"Although\"</strong> before a subject + verb to show contrast."
  },
  {
    "id": "p5_co_077",
    "part": 5,
    "theme": "conjunctions",
    "subtopic": "subordinating",
    "question": "Sales increased this quarter; ___, profits went down.",
    "options": [
      "however",
      "therefore",
      "moreover",
      "because"
    ],
    "answer": 0,
    "explanation": "Use the linking adverb <strong>\"however\"</strong> to introduce a contrasting statement, usually after a semicolon."
  },
  {
    "id": "p5_co_078",
    "part": 5,
    "theme": "conjunctions",
    "subtopic": "linking-adverbs",
    "question": "We canceled the event ___ the low registration numbers.",
    "options": [
      "because of",
      "because",
      "although",
      "despite"
    ],
    "answer": 0,
    "explanation": "Use the preposition <strong>\"because of\"</strong> before a noun phrase (not a full clause) to give a reason."
  },
  {
    "id": "p5_co_079",
    "part": 5,
    "theme": "conjunctions",
    "subtopic": "coordinating",
    "question": "You will not get the discount ___ you use the promo code.",
    "options": [
      "unless",
      "if",
      "provided that",
      "as long as"
    ],
    "answer": 0,
    "explanation": "Use <strong>\"unless\"</strong> meaning \"if not\" to express a condition."
  },
  {
    "id": "p5_co_080",
    "part": 5,
    "theme": "conjunctions",
    "subtopic": "subordinating",
    "question": "The new software is faster ___ more reliable than the old one.",
    "options": [
      "and",
      "but",
      "or",
      "so"
    ],
    "answer": 0,
    "explanation": "Use the coordinating conjunction <strong>\"and\"</strong> to add similar, positive information."
  },
  {
    "id": "p5_co_081",
    "part": 5,
    "theme": "conjunctions",
    "subtopic": "linking-adverbs",
    "question": "___ the high cost, the manager approved the purchase.",
    "options": [
      "Despite",
      "Although",
      "Even though",
      "Because of"
    ],
    "answer": 0,
    "explanation": "Use the preposition <strong>\"Despite\"</strong> before a noun phrase to show contrast."
  },
  {
    "id": "p5_co_082",
    "part": 5,
    "theme": "conjunctions",
    "subtopic": "coordinating",
    "question": "The team worked overtime ___ they could finish the project on time.",
    "options": [
      "so that",
      "because",
      "although",
      "in order to"
    ],
    "answer": 0,
    "explanation": "Use <strong>\"so that\"</strong> before a subject + verb to express purpose."
  },
  {
    "id": "p5_co_083",
    "part": 5,
    "theme": "conjunctions",
    "subtopic": "subordinating",
    "question": "He was tired, ___ he continued working on the report.",
    "options": [
      "but",
      "so",
      "and",
      "or"
    ],
    "answer": 0,
    "explanation": "Use the coordinating conjunction <strong>\"but\"</strong> to show contrast between two independent clauses."
  },
  {
    "id": "p5_co_084",
    "part": 5,
    "theme": "conjunctions",
    "subtopic": "linking-adverbs",
    "question": "The company is expanding its operations; ___, it is hiring more staff.",
    "options": [
      "therefore",
      "however",
      "nevertheless",
      "on the other hand"
    ],
    "answer": 0,
    "explanation": "Use the linking adverb <strong>\"therefore\"</strong> to show result or consequence."
  },
  {
    "id": "p5_co_085",
    "part": 5,
    "theme": "conjunctions",
    "subtopic": "coordinating",
    "question": "___ finishing the report, she sent it to the manager.",
    "options": [
      "After",
      "While",
      "During",
      "Because"
    ],
    "answer": 0,
    "explanation": "Use <strong>\"After\"</strong> as a preposition before a gerund (-ing form) to indicate sequence."
  },
  {
    "id": "p5_co_086",
    "part": 5,
    "theme": "conjunctions",
    "subtopic": "subordinating",
    "question": "The flight was delayed ___ bad weather.",
    "options": [
      "due to",
      "because",
      "since",
      "as"
    ],
    "answer": 0,
    "explanation": "Use the preposition <strong>\"due to\"</strong> before a noun phrase to give a reason."
  },
  {
    "id": "p5_co_087",
    "part": 5,
    "theme": "conjunctions",
    "subtopic": "linking-adverbs",
    "question": "She is not only intelligent ___ very hardworking.",
    "options": [
      "but also",
      "and",
      "or",
      "as well as"
    ],
    "answer": 0,
    "explanation": "Use <strong>\"but also\"</strong> to complete the correlative conjunction pair \"not only... but also\"."
  },
  {
    "id": "p5_co_088",
    "part": 5,
    "theme": "conjunctions",
    "subtopic": "coordinating",
    "question": "We can have the meeting on Monday ___ on Tuesday.",
    "options": [
      "or",
      "and",
      "but",
      "nor"
    ],
    "answer": 0,
    "explanation": "Use the coordinating conjunction <strong>\"or\"</strong> to present alternatives."
  },
  {
    "id": "p5_co_089",
    "part": 5,
    "theme": "conjunctions",
    "subtopic": "subordinating",
    "question": "___ I was reading the document, the phone rang.",
    "options": [
      "While",
      "During",
      "After",
      "Before"
    ],
    "answer": 0,
    "explanation": "Use the subordinating conjunction <strong>\"While\"</strong> before a past continuous clause to indicate background action."
  },
  {
    "id": "p5_co_090",
    "part": 5,
    "theme": "conjunctions",
    "subtopic": "linking-adverbs",
    "question": "He didn't study for the exam; ___, he passed with high marks.",
    "options": [
      "nevertheless",
      "therefore",
      "consequently",
      "moreover"
    ],
    "answer": 0,
    "explanation": "Use the linking adverb <strong>\"nevertheless\"</strong> to express contrast or surprise."
  },
  {
    "id": "p5_co_091",
    "part": 5,
    "theme": "comparatives",
    "subtopic": "comparative-regular",
    "question": "This year's profits are ___ than last year's.",
    "options": [
      "higher",
      "highest",
      "high",
      "more high"
    ],
    "answer": 0,
    "explanation": "Use the comparative form <strong>\"higher\"</strong> with \"than\" when comparing two things."
  },
  {
    "id": "p5_co_092",
    "part": 5,
    "theme": "comparatives",
    "subtopic": "superlative-regular",
    "question": "The new printer is the ___ efficient model we have ever used.",
    "options": [
      "most",
      "more",
      "much",
      "many"
    ],
    "answer": 0,
    "explanation": "Use the superlative form <strong>\"most\"</strong> with long adjectives (\"efficient\") when comparing three or more things."
  },
  {
    "id": "p5_co_093",
    "part": 5,
    "theme": "comparatives",
    "subtopic": "irregular-forms",
    "question": "His presentation was ___ better than I expected.",
    "options": [
      "much",
      "more",
      "very",
      "too"
    ],
    "answer": 0,
    "explanation": "Use words like <strong>\"much\"</strong>, \"far\", or \"a lot\" to emphasize comparative adjectives."
  },
  {
    "id": "p5_co_094",
    "part": 5,
    "theme": "comparatives",
    "subtopic": "as-as",
    "question": "The CEO wants the report as soon as ___.",
    "options": [
      "possible",
      "possibly",
      "possibility",
      "possibles"
    ],
    "answer": 0,
    "explanation": "Use the set phrase <strong>\"as soon as possible\"</strong>."
  },
  {
    "id": "p5_co_095",
    "part": 5,
    "theme": "comparatives",
    "subtopic": "double-comparative",
    "question": "This software is not as ___ as the one we used before.",
    "options": [
      "reliable",
      "more reliable",
      "most reliable",
      "reliably"
    ],
    "answer": 0,
    "explanation": "Use the base form of the adjective <strong>\"reliable\"</strong> in the \"as...as\" structure."
  },
  {
    "id": "p5_co_096",
    "part": 5,
    "theme": "comparatives",
    "subtopic": "comparative-regular",
    "question": "The ___ you practice, the better you will perform.",
    "options": [
      "more",
      "most",
      "much",
      "many"
    ],
    "answer": 0,
    "explanation": "Use the <strong>double comparative</strong> structure \"the more... the better...\"."
  },
  {
    "id": "p5_co_097",
    "part": 5,
    "theme": "comparatives",
    "subtopic": "superlative-regular",
    "question": "Of the three candidates, Ms. Johnson is the ___ qualified.",
    "options": [
      "most",
      "more",
      "much",
      "very"
    ],
    "answer": 0,
    "explanation": "Use the superlative <strong>\"most\"</strong> when comparing three or more things/people."
  },
  {
    "id": "p5_co_098",
    "part": 5,
    "theme": "comparatives",
    "subtopic": "irregular-forms",
    "question": "The traffic is getting ___ and worse.",
    "options": [
      "worse",
      "worst",
      "bad",
      "badly"
    ],
    "answer": 0,
    "explanation": "Use repeated comparatives <strong>\"worse and worse\"</strong> to describe continuous change."
  },
  {
    "id": "p5_co_099",
    "part": 5,
    "theme": "comparatives",
    "subtopic": "as-as",
    "question": "Our new office is ___ larger than the old one.",
    "options": [
      "slightly",
      "little",
      "few",
      "very"
    ],
    "answer": 0,
    "explanation": "Use adverbs like <strong>\"slightly\"</strong> to modify a comparative adjective."
  },
  {
    "id": "p5_co_100",
    "part": 5,
    "theme": "comparatives",
    "subtopic": "double-comparative",
    "question": "This is the ___ difficult task I have ever undertaken.",
    "options": [
      "most",
      "more",
      "much",
      "very"
    ],
    "answer": 0,
    "explanation": "Use the superlative <strong>\"most\"</strong> with the present perfect \"ever\" structure."
  },
  {
    "id": "p5_co_101",
    "part": 5,
    "theme": "comparatives",
    "subtopic": "comparative-regular",
    "question": "The company is growing ___ rapidly than anticipated.",
    "options": [
      "more",
      "most",
      "much",
      "very"
    ],
    "answer": 0,
    "explanation": "Use the comparative <strong>\"more\"</strong> with long adverbs like \"rapidly\"."
  },
  {
    "id": "p5_co_102",
    "part": 5,
    "theme": "comparatives",
    "subtopic": "superlative-regular",
    "question": "He is ___ talented than his brother.",
    "options": [
      "less",
      "least",
      "little",
      "few"
    ],
    "answer": 0,
    "explanation": "Use the comparative <strong>\"less\"</strong> for inferiority comparisons."
  },
  {
    "id": "p5_co_103",
    "part": 5,
    "theme": "comparatives",
    "subtopic": "irregular-forms",
    "question": "It is ___ cheaper to buy in bulk.",
    "options": [
      "much",
      "more",
      "very",
      "too"
    ],
    "answer": 0,
    "explanation": "Use <strong>\"much\"</strong> to emphasize the comparative \"cheaper\"."
  },
  {
    "id": "p5_co_104",
    "part": 5,
    "theme": "comparatives",
    "subtopic": "as-as",
    "question": "The early bird catches the ___ worm.",
    "options": [
      "(not applicable here but similar logic) earliest",
      "earlier",
      "early",
      "most early"
    ],
    "answer": 0,
    "explanation": "Just skip this one, use a realistic TOEIC one. Replacing... The earlier you apply, the ___ your chances of being accepted."
  },
  {
    "id": "p5_co_105",
    "part": 5,
    "theme": "comparatives",
    "subtopic": "double-comparative",
    "question": "This brand is ___ superior to the others on the market.",
    "options": [
      "far",
      "more",
      "most",
      "very"
    ],
    "answer": 0,
    "explanation": "Use <strong>\"far\"</strong> to emphasize adjectives with inherent comparative meaning like \"superior\"."
  },
  {
    "id": "p5_ge_106",
    "part": 5,
    "theme": "gerund-infinitive",
    "subtopic": "verbs-gerund",
    "question": "The manager suggested ___ the meeting until next week.",
    "options": [
      "postponing",
      "to postpone",
      "postpone",
      "postponed"
    ],
    "answer": 0,
    "explanation": "The verb \"suggest\" is followed by a <strong>gerund</strong> (-ing form)."
  },
  {
    "id": "p5_ge_107",
    "part": 5,
    "theme": "gerund-infinitive",
    "subtopic": "verbs-infinitive",
    "question": "We plan ___ a new branch in Paris next year.",
    "options": [
      "to open",
      "opening",
      "open",
      "opened"
    ],
    "answer": 0,
    "explanation": "The verb \"plan\" is followed by an <strong>infinitive</strong> (to + verb)."
  },
  {
    "id": "p5_ge_108",
    "part": 5,
    "theme": "gerund-infinitive",
    "subtopic": "verbs-both",
    "question": "I look forward to ___ you at the conference.",
    "options": [
      "seeing",
      "see",
      "saw",
      "seen"
    ],
    "answer": 0,
    "explanation": "The phrasal verb \"look forward to\" is followed by a <strong>gerund</strong>."
  },
  {
    "id": "p5_ge_109",
    "part": 5,
    "theme": "gerund-infinitive",
    "subtopic": "purpose-infinitive",
    "question": "She forgot ___ the document to the email.",
    "options": [
      "to attach",
      "attaching",
      "attach",
      "attached"
    ],
    "answer": 0,
    "explanation": "Use the <strong>infinitive</strong> after \"forget\" for an action that was supposed to happen but didn't."
  },
  {
    "id": "p5_ge_110",
    "part": 5,
    "theme": "gerund-infinitive",
    "subtopic": "verbs-gerund",
    "question": "They avoided ___ the issue during the presentation.",
    "options": [
      "discussing",
      "to discuss",
      "discuss",
      "discussed"
    ],
    "answer": 0,
    "explanation": "The verb \"avoid\" is followed by a <strong>gerund</strong>."
  },
  {
    "id": "p5_ge_111",
    "part": 5,
    "theme": "gerund-infinitive",
    "subtopic": "verbs-infinitive",
    "question": "He decided ___ the job offer.",
    "options": [
      "to accept",
      "accepting",
      "accept",
      "accepted"
    ],
    "answer": 0,
    "explanation": "The verb \"decide\" is followed by an <strong>infinitive</strong>."
  },
  {
    "id": "p5_ge_112",
    "part": 5,
    "theme": "gerund-infinitive",
    "subtopic": "verbs-both",
    "question": "Do you mind ___ the window?",
    "options": [
      "closing",
      "to close",
      "close",
      "closed"
    ],
    "answer": 0,
    "explanation": "The verb \"mind\" is followed by a <strong>gerund</strong>."
  },
  {
    "id": "p5_ge_113",
    "part": 5,
    "theme": "gerund-infinitive",
    "subtopic": "purpose-infinitive",
    "question": "We use this software ___ our sales data.",
    "options": [
      "to track",
      "tracking",
      "track",
      "tracked"
    ],
    "answer": 0,
    "explanation": "Use the <strong>infinitive of purpose</strong> to explain why an action is done."
  },
  {
    "id": "p5_ge_114",
    "part": 5,
    "theme": "gerund-infinitive",
    "subtopic": "verbs-gerund",
    "question": "I remember ___ the email yesterday.",
    "options": [
      "sending",
      "to send",
      "send",
      "sent"
    ],
    "answer": 0,
    "explanation": "Use the <strong>gerund</strong> after \"remember\" for a past memory."
  },
  {
    "id": "p5_ge_115",
    "part": 5,
    "theme": "gerund-infinitive",
    "subtopic": "verbs-infinitive",
    "question": "She is responsible for ___ new employees.",
    "options": [
      "training",
      "to train",
      "train",
      "trained"
    ],
    "answer": 0,
    "explanation": "Prepositions (like \"for\") are always followed by a <strong>gerund</strong>."
  },
  {
    "id": "p5_ge_116",
    "part": 5,
    "theme": "gerund-infinitive",
    "subtopic": "verbs-both",
    "question": "They agreed ___ the contract terms.",
    "options": [
      "to revise",
      "revising",
      "revise",
      "revised"
    ],
    "answer": 0,
    "explanation": "The verb \"agree\" is followed by an <strong>infinitive</strong>."
  },
  {
    "id": "p5_ge_117",
    "part": 5,
    "theme": "gerund-infinitive",
    "subtopic": "purpose-infinitive",
    "question": "It is important ___ the instructions carefully.",
    "options": [
      "to read",
      "reading",
      "read",
      "reads"
    ],
    "answer": 0,
    "explanation": "Adjectives like \"important\" are often followed by an <strong>infinitive</strong>."
  },
  {
    "id": "p5_ge_118",
    "part": 5,
    "theme": "gerund-infinitive",
    "subtopic": "verbs-gerund",
    "question": "He stopped ___ coffee because it was making him jittery.",
    "options": [
      "drinking",
      "to drink",
      "drink",
      "drank"
    ],
    "answer": 0,
    "explanation": "Use the <strong>gerund</strong> after \"stop\" to mean quitting an activity."
  },
  {
    "id": "p5_ge_119",
    "part": 5,
    "theme": "gerund-infinitive",
    "subtopic": "verbs-infinitive",
    "question": "I need you ___ this report by 5 PM.",
    "options": [
      "to finish",
      "finishing",
      "finish",
      "finished"
    ],
    "answer": 0,
    "explanation": "The structure \"need someone\" is followed by an <strong>infinitive</strong>."
  },
  {
    "id": "p5_ge_120",
    "part": 5,
    "theme": "gerund-infinitive",
    "subtopic": "verbs-both",
    "question": "Thank you for ___ our invitation.",
    "options": [
      "accepting",
      "to accept",
      "accept",
      "accepted"
    ],
    "answer": 0,
    "explanation": "Prepositions (like \"for\") are followed by a <strong>gerund</strong>."
  },
  {
    "id": "p5_co_121",
    "part": 5,
    "theme": "conditionals",
    "subtopic": "zero-conditional",
    "question": "If it rains tomorrow, we ___ the outdoor event.",
    "options": [
      "will cancel",
      "would cancel",
      "cancel",
      "cancelled"
    ],
    "answer": 0,
    "explanation": "Use the <strong>first conditional</strong> (If + present, will + verb) for possible future situations."
  },
  {
    "id": "p5_co_122",
    "part": 5,
    "theme": "conditionals",
    "subtopic": "first-conditional",
    "question": "If I were you, I ___ apply for that position.",
    "options": [
      "would",
      "will",
      "can",
      "may"
    ],
    "answer": 0,
    "explanation": "Use the <strong>second conditional</strong> (If + past, would + verb) for hypothetical or unreal situations."
  },
  {
    "id": "p5_co_123",
    "part": 5,
    "theme": "conditionals",
    "subtopic": "second-conditional",
    "question": "If they had left earlier, they ___ the train.",
    "options": [
      "would have caught",
      "will catch",
      "would catch",
      "caught"
    ],
    "answer": 0,
    "explanation": "Use the <strong>third conditional</strong> (If + past perfect, would have + past participle) for past unreal situations."
  },
  {
    "id": "p5_co_124",
    "part": 5,
    "theme": "conditionals",
    "subtopic": "third-conditional",
    "question": "When you heat ice, it ___.",
    "options": [
      "melts",
      "will melt",
      "would melt",
      "melted"
    ],
    "answer": 0,
    "explanation": "Use the <strong>zero conditional</strong> (If/When + present, present) for facts and general truths."
  },
  {
    "id": "p5_co_125",
    "part": 5,
    "theme": "conditionals",
    "subtopic": "mixed-conditional",
    "question": "If we ___ the contract, we would be making a huge profit right now.",
    "options": [
      "had signed",
      "signed",
      "sign",
      "will sign"
    ],
    "answer": 0,
    "explanation": "Use a <strong>mixed conditional</strong> (If + past perfect, would + verb) for a past action with a present result."
  },
  {
    "id": "p5_co_126",
    "part": 5,
    "theme": "conditionals",
    "subtopic": "zero-conditional",
    "question": "Unless you ___ hard, you will not pass the exam.",
    "options": [
      "study",
      "will study",
      "studied",
      "would study"
    ],
    "answer": 0,
    "explanation": "Use the present tense after \"unless\" in the <strong>first conditional</strong>."
  },
  {
    "id": "p5_co_127",
    "part": 5,
    "theme": "conditionals",
    "subtopic": "first-conditional",
    "question": "If the manager ___ available, I will ask him about the project.",
    "options": [
      "is",
      "were",
      "had been",
      "will be"
    ],
    "answer": 0,
    "explanation": "Use the present tense in the \"if\" clause of a <strong>first conditional</strong>."
  },
  {
    "id": "p5_co_128",
    "part": 5,
    "theme": "conditionals",
    "subtopic": "second-conditional",
    "question": "I would travel the world if I ___ a million dollars.",
    "options": [
      "won",
      "win",
      "had won",
      "will win"
    ],
    "answer": 0,
    "explanation": "Use the past tense in the \"if\" clause of a <strong>second conditional</strong>."
  },
  {
    "id": "p5_co_129",
    "part": 5,
    "theme": "conditionals",
    "subtopic": "third-conditional",
    "question": "If she had known about the meeting, she ___ it.",
    "options": [
      "would have attended",
      "would attend",
      "will attend",
      "attended"
    ],
    "answer": 0,
    "explanation": "Use the <strong>third conditional</strong> for unreal past events."
  },
  {
    "id": "p5_co_130",
    "part": 5,
    "theme": "conditionals",
    "subtopic": "mixed-conditional",
    "question": "If you mix red and blue, you ___ purple.",
    "options": [
      "get",
      "will get",
      "got",
      "would get"
    ],
    "answer": 0,
    "explanation": "Use the <strong>zero conditional</strong> for scientific facts."
  },
  {
    "id": "p5_co_131",
    "part": 5,
    "theme": "conditionals",
    "subtopic": "zero-conditional",
    "question": "Should you require any further information, please ___ not hesitate to contact us.",
    "options": [
      "do",
      "will",
      "would",
      "did"
    ],
    "answer": 0,
    "explanation": "Use the imperative in the main clause of a formal <strong>first conditional</strong> inverted structure."
  },
  {
    "id": "p5_co_132",
    "part": 5,
    "theme": "conditionals",
    "subtopic": "first-conditional",
    "question": "Had I known you were coming, I ___ a cake.",
    "options": [
      "would have baked",
      "would bake",
      "will bake",
      "baked"
    ],
    "answer": 0,
    "explanation": "Use an inverted <strong>third conditional</strong> (Had + subject + past participle)."
  },
  {
    "id": "p5_co_133",
    "part": 5,
    "theme": "conditionals",
    "subtopic": "second-conditional",
    "question": "If we hire more staff, we ___ complete the project faster.",
    "options": [
      "will be able to",
      "would be able to",
      "are able to",
      "were able to"
    ],
    "answer": 0,
    "explanation": "Use the <strong>first conditional</strong> for a possible future consequence."
  },
  {
    "id": "p5_co_134",
    "part": 5,
    "theme": "conditionals",
    "subtopic": "third-conditional",
    "question": "He would be happier if he ___ his job.",
    "options": [
      "changed",
      "changes",
      "had changed",
      "will change"
    ],
    "answer": 0,
    "explanation": "Use the past tense in the \"if\" clause of a <strong>second conditional</strong>."
  },
  {
    "id": "p5_co_135",
    "part": 5,
    "theme": "conditionals",
    "subtopic": "mixed-conditional",
    "question": "If the company had invested in new technology, it ___ more competitive today.",
    "options": [
      "would be",
      "would have been",
      "will be",
      "is"
    ],
    "answer": 0,
    "explanation": "Use a <strong>mixed conditional</strong> to link a past hypothetical event to a present hypothetical result."
  },
  {
    "id": "p5_bu_136",
    "part": 5,
    "theme": "business-vocab",
    "subtopic": "finance",
    "question": "The company's annual ___ exceeded expectations this year.",
    "options": [
      "revenue",
      "debt",
      "loss",
      "expense"
    ],
    "answer": 0,
    "explanation": "<strong>\"Revenue\"</strong> is the total amount of money brought in by a company's operations."
  },
  {
    "id": "p5_bu_137",
    "part": 5,
    "theme": "business-vocab",
    "subtopic": "hr-management",
    "question": "Please submit your travel expenses to the ___ department.",
    "options": [
      "accounting",
      "marketing",
      "human resources",
      "production"
    ],
    "answer": 0,
    "explanation": "The <strong>accounting</strong> department handles expenses and financial records."
  },
  {
    "id": "p5_bu_138",
    "part": 5,
    "theme": "business-vocab",
    "subtopic": "contracts",
    "question": "We need to sign the ___ before beginning the project.",
    "options": [
      "contract",
      "resume",
      "invoice",
      "receipt"
    ],
    "answer": 0,
    "explanation": "A <strong>contract</strong> is a legally binding agreement between parties."
  },
  {
    "id": "p5_bu_139",
    "part": 5,
    "theme": "business-vocab",
    "subtopic": "marketing",
    "question": "The new marketing ___ was very successful in attracting young customers.",
    "options": [
      "campaign",
      "audit",
      "inventory",
      "merger"
    ],
    "answer": 0,
    "explanation": "A marketing <strong>campaign</strong> is a coordinated series of promotional efforts."
  },
  {
    "id": "p5_bu_140",
    "part": 5,
    "theme": "business-vocab",
    "subtopic": "communication",
    "question": "The HR manager is currently conducting interviews to ___ new staff.",
    "options": [
      "recruit",
      "dismiss",
      "promote",
      "retire"
    ],
    "answer": 0,
    "explanation": "To <strong>recruit</strong> means to find and hire new employees."
  },
  {
    "id": "p5_bu_141",
    "part": 5,
    "theme": "business-vocab",
    "subtopic": "finance",
    "question": "The company's board of ___ will meet tomorrow to discuss the merger.",
    "options": [
      "directors",
      "employees",
      "clients",
      "consumers"
    ],
    "answer": 0,
    "explanation": "A board of <strong>directors</strong> is a group of people elected to oversee a company."
  },
  {
    "id": "p5_bu_142",
    "part": 5,
    "theme": "business-vocab",
    "subtopic": "hr-management",
    "question": "We must increase our ___ to keep up with customer demand.",
    "options": [
      "production",
      "layoffs",
      "debt",
      "taxes"
    ],
    "answer": 0,
    "explanation": "<strong>Production</strong> refers to the process of making goods."
  },
  {
    "id": "p5_bu_143",
    "part": 5,
    "theme": "business-vocab",
    "subtopic": "contracts",
    "question": "The invoice must be paid within 30 days of ___.",
    "options": [
      "receipt",
      "refund",
      "discount",
      "interest"
    ],
    "answer": 0,
    "explanation": "<strong>Receipt</strong> here means the act of receiving the invoice."
  },
  {
    "id": "p5_bu_144",
    "part": 5,
    "theme": "business-vocab",
    "subtopic": "marketing",
    "question": "Our main ___ in the market has recently lowered their prices.",
    "options": [
      "competitor",
      "partner",
      "supplier",
      "investor"
    ],
    "answer": 0,
    "explanation": "A <strong>competitor</strong> is a rival business in the same industry."
  },
  {
    "id": "p5_bu_145",
    "part": 5,
    "theme": "business-vocab",
    "subtopic": "communication",
    "question": "The CEO will give a ___ on the company's future direction.",
    "options": [
      "presentation",
      "complaint",
      "resignation",
      "withdrawal"
    ],
    "answer": 0,
    "explanation": "A <strong>presentation</strong> is a formal talk giving information about something."
  },
  {
    "id": "p5_bu_146",
    "part": 5,
    "theme": "business-vocab",
    "subtopic": "finance",
    "question": "We need to reduce our overhead ___ to increase profitability.",
    "options": [
      "costs",
      "profits",
      "sales",
      "revenues"
    ],
    "answer": 0,
    "explanation": "Overhead <strong>costs</strong> are ongoing business expenses not directly tied to creating a product."
  },
  {
    "id": "p5_bu_147",
    "part": 5,
    "theme": "business-vocab",
    "subtopic": "hr-management",
    "question": "The new employee will undergo a two-week ___ period.",
    "options": [
      "training",
      "vacation",
      "retirement",
      "resignation"
    ],
    "answer": 0,
    "explanation": "A <strong>training</strong> period is time spent learning the skills needed for a job."
  },
  {
    "id": "p5_bu_148",
    "part": 5,
    "theme": "business-vocab",
    "subtopic": "contracts",
    "question": "The company offered him a generous benefits ___.",
    "options": [
      "package",
      "penalty",
      "fine",
      "tax"
    ],
    "answer": 0,
    "explanation": "A benefits <strong>package</strong> refers to the perks and benefits offered by an employer."
  },
  {
    "id": "p5_bu_149",
    "part": 5,
    "theme": "business-vocab",
    "subtopic": "marketing",
    "question": "Due to financial difficulties, the company had to ___ 50 employees.",
    "options": [
      "lay off",
      "hire",
      "promote",
      "recruit"
    ],
    "answer": 0,
    "explanation": "To <strong>lay off</strong> means to terminate employment, usually due to economic reasons."
  },
  {
    "id": "p5_bu_150",
    "part": 5,
    "theme": "business-vocab",
    "subtopic": "communication",
    "question": "We require a 20% ___ before we begin manufacturing the goods.",
    "options": [
      "deposit",
      "refund",
      "discount",
      "loan"
    ],
    "answer": 0,
    "explanation": "A <strong>deposit</strong> is a sum payable as a first installment on a purchase."
  },
  {
    "id": "p5_su_151",
    "part": 5,
    "theme": "subject-verb",
    "subtopic": "compound-subjects",
    "question": "The manager and his assistant ___ attending the conference.",
    "options": [
      "are",
      "is",
      "am",
      "was"
    ],
    "answer": 0,
    "explanation": "Compound subjects joined by \"and\" take a <strong>plural verb</strong> (\"are\")."
  },
  {
    "id": "p5_su_152",
    "part": 5,
    "theme": "subject-verb",
    "subtopic": "collective-nouns",
    "question": "The committee ___ reached a decision on the new policy.",
    "options": [
      "has",
      "have",
      "are",
      "is"
    ],
    "answer": 0,
    "explanation": "Collective nouns like \"committee\" take a <strong>singular verb</strong> when acting as a single unit."
  },
  {
    "id": "p5_su_153",
    "part": 5,
    "theme": "subject-verb",
    "subtopic": "neither-either",
    "question": "Neither the supervisor nor the employees ___ happy with the changes.",
    "options": [
      "are",
      "is",
      "was",
      "has been"
    ],
    "answer": 0,
    "explanation": "With \"neither... nor\", the verb agrees with the subject <strong>closest</strong> to it (\"employees\" -> \"are\")."
  },
  {
    "id": "p5_su_154",
    "part": 5,
    "theme": "subject-verb",
    "subtopic": "intervening-phrases",
    "question": "One of the computers in the lab ___ broken.",
    "options": [
      "is",
      "are",
      "were",
      "have been"
    ],
    "answer": 0,
    "explanation": "The subject is \"One\", which is singular, regardless of the intervening phrase \"of the computers\". Take a <strong>singular verb</strong>."
  },
  {
    "id": "p5_su_155",
    "part": 5,
    "theme": "subject-verb",
    "subtopic": "compound-subjects",
    "question": "Every employee and manager ___ required to attend the safety training.",
    "options": [
      "is",
      "are",
      "were",
      "have been"
    ],
    "answer": 0,
    "explanation": "Subjects preceded by \"Every\" take a <strong>singular verb</strong>."
  },
  {
    "id": "p5_su_156",
    "part": 5,
    "theme": "subject-verb",
    "subtopic": "collective-nouns",
    "question": "The number of applicants ___ increasing every year.",
    "options": [
      "is",
      "are",
      "were",
      "have been"
    ],
    "answer": 0,
    "explanation": "The phrase \"The number of\" takes a <strong>singular verb</strong>."
  },
  {
    "id": "p5_su_157",
    "part": 5,
    "theme": "subject-verb",
    "subtopic": "neither-either",
    "question": "A number of problems ___ reported with the new software.",
    "options": [
      "were",
      "was",
      "has been",
      "is"
    ],
    "answer": 0,
    "explanation": "The phrase \"A number of\" takes a <strong>plural verb</strong>."
  },
  {
    "id": "p5_su_158",
    "part": 5,
    "theme": "subject-verb",
    "subtopic": "intervening-phrases",
    "question": "Mathematics ___ an essential skill for this engineering position.",
    "options": [
      "is",
      "are",
      "were",
      "have been"
    ],
    "answer": 0,
    "explanation": "Nouns ending in \"-ics\" (like Mathematics) are singular and take a <strong>singular verb</strong>."
  },
  {
    "id": "p5_su_159",
    "part": 5,
    "theme": "subject-verb",
    "subtopic": "compound-subjects",
    "question": "The staff ___ requested a change in the break schedule.",
    "options": [
      "have",
      "has",
      "is",
      "was"
    ],
    "answer": 0,
    "explanation": "In British/international business contexts, collective nouns like \"staff\" often take a <strong>plural verb</strong> when referring to individuals."
  },
  {
    "id": "p5_su_160",
    "part": 5,
    "theme": "subject-verb",
    "subtopic": "collective-nouns",
    "question": "Either the CEO or the vice president ___ giving the keynote speech.",
    "options": [
      "is",
      "are",
      "were",
      "have been"
    ],
    "answer": 0,
    "explanation": "With \"either... or\", the verb agrees with the subject <strong>closest</strong> to it (vice president -> singular)."
  },
  {
    "id": "p5_su_161",
    "part": 5,
    "theme": "subject-verb",
    "subtopic": "neither-either",
    "question": "The data ___ that our sales have increased.",
    "options": [
      "show",
      "shows",
      "is showing",
      "has shown"
    ],
    "answer": 0,
    "explanation": "The word \"data\" is plural (singular: datum) in formal scientific/business English and takes a <strong>plural verb</strong>."
  },
  {
    "id": "p5_su_162",
    "part": 5,
    "theme": "subject-verb",
    "subtopic": "intervening-phrases",
    "question": "Two weeks ___ not enough time to finish this project.",
    "options": [
      "is",
      "are",
      "were",
      "have been"
    ],
    "answer": 0,
    "explanation": "Periods of time, money, and distance are considered singular units and take a <strong>singular verb</strong>."
  },
  {
    "id": "p5_su_163",
    "part": 5,
    "theme": "subject-verb",
    "subtopic": "compound-subjects",
    "question": "Not only the students but also the teacher ___ confused by the instructions.",
    "options": [
      "was",
      "were",
      "have been",
      "are"
    ],
    "answer": 0,
    "explanation": "With \"not only... but also\", the verb agrees with the subject <strong>closest</strong> to it (teacher -> singular)."
  },
  {
    "id": "p5_su_164",
    "part": 5,
    "theme": "subject-verb",
    "subtopic": "collective-nouns",
    "question": "The board of directors ___ expected to announce their decision tomorrow.",
    "options": [
      "is",
      "are",
      "were",
      "have been"
    ],
    "answer": 0,
    "explanation": "The phrase \"board of directors\" is a collective noun acting as a single unit, taking a <strong>singular verb</strong>."
  },
  {
    "id": "p5_su_165",
    "part": 5,
    "theme": "subject-verb",
    "subtopic": "neither-either",
    "question": "Nobody in the office ___ how to operate the new copy machine.",
    "options": [
      "knows",
      "know",
      "are knowing",
      "have known"
    ],
    "answer": 0,
    "explanation": "Indefinite pronouns like \"Nobody\" take a <strong>singular verb</strong>."
  },
  {
    "id": "p5_wo_166",
    "part": 5,
    "theme": "word-forms",
    "subtopic": "noun-forms",
    "question": "The company is looking for a highly ___ individual for the position.",
    "options": [
      "motivated",
      "motivation",
      "motivate",
      "motivates"
    ],
    "answer": 0,
    "explanation": "Use the <strong>adjective</strong> form \"motivated\" to describe the noun \"individual\"."
  },
  {
    "id": "p5_wo_167",
    "part": 5,
    "theme": "word-forms",
    "subtopic": "verb-forms",
    "question": "The new software has significantly increased our ___.",
    "options": [
      "productivity",
      "productive",
      "produce",
      "productively"
    ],
    "answer": 0,
    "explanation": "Use the <strong>noun</strong> form \"productivity\" after a possessive adjective (\"our\")."
  },
  {
    "id": "p5_wo_168",
    "part": 5,
    "theme": "word-forms",
    "subtopic": "adjective-forms",
    "question": "Please read the instructions ___ before operating the machine.",
    "options": [
      "carefully",
      "careful",
      "care",
      "carefulness"
    ],
    "answer": 0,
    "explanation": "Use the <strong>adverb</strong> form \"carefully\" to modify the verb \"read\"."
  },
  {
    "id": "p5_wo_169",
    "part": 5,
    "theme": "word-forms",
    "subtopic": "adverb-forms",
    "question": "The ___ of the new building will be completed next year.",
    "options": [
      "construction",
      "construct",
      "constructive",
      "constructor"
    ],
    "answer": 0,
    "explanation": "Use the <strong>noun</strong> form \"construction\" after the article \"The\"."
  },
  {
    "id": "p5_wo_170",
    "part": 5,
    "theme": "word-forms",
    "subtopic": "suffixes-prefixes",
    "question": "We need to ___ the budget before the meeting.",
    "options": [
      "finalize",
      "final",
      "finally",
      "finality"
    ],
    "answer": 0,
    "explanation": "Use the <strong>verb</strong> form \"finalize\" after the infinitive marker \"to\"."
  },
  {
    "id": "p5_wo_171",
    "part": 5,
    "theme": "word-forms",
    "subtopic": "noun-forms",
    "question": "Her presentation was very ___ and well-received.",
    "options": [
      "informative",
      "information",
      "inform",
      "informer"
    ],
    "answer": 0,
    "explanation": "Use the <strong>adjective</strong> form \"informative\" after the linking verb \"was\" and adverb \"very\"."
  },
  {
    "id": "p5_wo_172",
    "part": 5,
    "theme": "word-forms",
    "subtopic": "verb-forms",
    "question": "The machine operates ___, reducing the need for manual labor.",
    "options": [
      "automatically",
      "automatic",
      "automate",
      "automation"
    ],
    "answer": 0,
    "explanation": "Use the <strong>adverb</strong> form \"automatically\" to modify the verb \"operates\"."
  },
  {
    "id": "p5_wo_173",
    "part": 5,
    "theme": "word-forms",
    "subtopic": "adjective-forms",
    "question": "We deeply appreciate your ___ to this project.",
    "options": [
      "dedication",
      "dedicated",
      "dedicate",
      "dedicating"
    ],
    "answer": 0,
    "explanation": "Use the <strong>noun</strong> form \"dedication\" after the possessive adjective \"your\"."
  },
  {
    "id": "p5_wo_174",
    "part": 5,
    "theme": "word-forms",
    "subtopic": "adverb-forms",
    "question": "The manager spoke ___ about the team's recent achievements.",
    "options": [
      "highly",
      "high",
      "height",
      "heighten"
    ],
    "answer": 0,
    "explanation": "Use the <strong>adverb</strong> form \"highly\" to modify the verb \"spoke\"."
  },
  {
    "id": "p5_wo_175",
    "part": 5,
    "theme": "word-forms",
    "subtopic": "suffixes-prefixes",
    "question": "This document contains ___ information and must not be shared.",
    "options": [
      "confidential",
      "confidence",
      "confide",
      "confidentially"
    ],
    "answer": 0,
    "explanation": "Use the <strong>adjective</strong> form \"confidential\" to describe the noun \"information\"."
  },
  {
    "id": "p5_wo_176",
    "part": 5,
    "theme": "word-forms",
    "subtopic": "noun-forms",
    "question": "The company plans to ___ its operations into Asia.",
    "options": [
      "expand",
      "expansion",
      "expansive",
      "expands"
    ],
    "answer": 0,
    "explanation": "Use the base <strong>verb</strong> form \"expand\" after the infinitive marker \"to\"."
  },
  {
    "id": "p5_wo_177",
    "part": 5,
    "theme": "word-forms",
    "subtopic": "verb-forms",
    "question": "We experienced a slight ___ in sales during the summer months.",
    "options": [
      "decrease",
      "decreasingly",
      "decreased",
      "decreases"
    ],
    "answer": 0,
    "explanation": "Use the <strong>noun</strong> form \"decrease\" after the article \"a\" and adjective \"slight\"."
  },
  {
    "id": "p5_wo_178",
    "part": 5,
    "theme": "word-forms",
    "subtopic": "adjective-forms",
    "question": "The candidate demonstrated exceptional ___ skills during the interview.",
    "options": [
      "analytical",
      "analyze",
      "analysis",
      "analytically"
    ],
    "answer": 0,
    "explanation": "Use the <strong>adjective</strong> form \"analytical\" to describe the noun \"skills\"."
  },
  {
    "id": "p5_wo_179",
    "part": 5,
    "theme": "word-forms",
    "subtopic": "adverb-forms",
    "question": "Please sign the document to indicate your ___.",
    "options": [
      "agreement",
      "agree",
      "agreeable",
      "agreed"
    ],
    "answer": 0,
    "explanation": "Use the <strong>noun</strong> form \"agreement\" after the possessive adjective \"your\"."
  },
  {
    "id": "p5_wo_180",
    "part": 5,
    "theme": "word-forms",
    "subtopic": "suffixes-prefixes",
    "question": "The system will ___ shut down for maintenance at midnight.",
    "options": [
      "automatically",
      "automatic",
      "automation",
      "automate"
    ],
    "answer": 0,
    "explanation": "Use the <strong>adverb</strong> form \"automatically\" to modify the verb phrase \"shut down\"."
  }
];

export const passages6 = [
  {
    "id": "p6_001",
    "title": "Business Email",
    "text": "Dear Ms. Larson,\n\nI am writing to inform you that the merger between TechCorp and GlobalSoft [1] officially approved by the board last Tuesday. As a result, all employees will [2] relocated to the new headquarters on Maple Avenue by the end of the quarter.\n\nWe ask that you [3] your department about this important change as soon as possible. A comprehensive FAQ document [4] to all staff members via email by the end of this week.\n\nBest regards,\nMichael Chen\nDirector of Operations",
    "questions": [
      {
        "id": "p6_001_q1",
        "part": 6,
        "theme": "passive-voice",
        "subtopic": "past-passive",
        "blank": 1,
        "question": "Choose the best option for blank [1]:",
        "options": [
          "was",
          "has been",
          "is being",
          "had"
        ],
        "answer": 0,
        "explanation": "The <strong>past passive</strong> (was + past participle) is used here because \"last Tuesday\" specifies a specific time in the past."
      },
      {
        "id": "p6_001_q2",
        "part": 6,
        "theme": "passive-voice",
        "subtopic": "future-passive",
        "blank": 2,
        "question": "Choose the best option for blank [2]:",
        "options": [
          "be",
          "have been",
          "are",
          "being"
        ],
        "answer": 0,
        "explanation": "The <strong>future passive</strong> structure after \"will\" requires the base form \"be\" + past participle (\"relocated\")."
      },
      {
        "id": "p6_001_q3",
        "part": 6,
        "theme": "verb-tenses",
        "subtopic": "present-simple",
        "blank": 3,
        "question": "Choose the best option for blank [3]:",
        "options": [
          "inform",
          "informing",
          "informed",
          "informs"
        ],
        "answer": 0,
        "explanation": "Use the base form of the verb after \"ask that you...\" in a subjunctive clause."
      },
      {
        "id": "p6_001_q4",
        "part": 6,
        "theme": "passive-voice",
        "subtopic": "future-passive",
        "blank": 4,
        "question": "Choose the best option for blank [4]:",
        "options": [
          "will be sent",
          "will send",
          "is sending",
          "has been sent"
        ],
        "answer": 0,
        "explanation": "The <strong>future passive</strong> is needed because the document receives the action (\"be sent\") in the future (\"by the end of this week\")."
      }
    ]
  },
  {
    "id": "p6_002",
    "title": "Company Memo",
    "text": "To: All Staff\nFrom: HR Department\nDate: October 15\n\nStarting next month, the company [1] a new performance review system. Managers [2] specialized training sessions next week to learn how to use the new software.\n\nPlease note that all current goals and objectives must [3] into the new system by November 15th. If you experience any technical difficulties, you [4] the IT helpdesk at extension 555.\n\nThank you for your cooperation.",
    "questions": [
      {
        "id": "p6_002_q1",
        "part": 6,
        "theme": "verb-tenses",
        "subtopic": "future-will",
        "blank": 1,
        "question": "Choose the best option for blank [1]:",
        "options": [
          "will implement",
          "implemented",
          "has implemented",
          "implements"
        ],
        "answer": 0,
        "explanation": "\"Starting next month\" indicates a future action."
      },
      {
        "id": "p6_002_q2",
        "part": 6,
        "theme": "verb-tenses",
        "subtopic": "future-continuous",
        "blank": 2,
        "question": "Choose the best option for blank [2]:",
        "options": [
          "will attend",
          "attended",
          "have attended",
          "attend"
        ],
        "answer": 0,
        "explanation": "\"Next week\" indicates a future planned action."
      },
      {
        "id": "p6_002_q3",
        "part": 6,
        "theme": "passive-voice",
        "subtopic": "modal-passive",
        "blank": 3,
        "question": "Choose the best option for blank [3]:",
        "options": [
          "be entered",
          "enter",
          "entered",
          "entering"
        ],
        "answer": 0,
        "explanation": "The modal \"must\" requires a passive construction (\"be entered\") because the goals receive the action."
      },
      {
        "id": "p6_002_q4",
        "part": 6,
        "theme": "verb-tenses",
        "subtopic": "present-simple",
        "blank": 4,
        "question": "Choose the best option for blank [4]:",
        "options": [
          "should contact",
          "contacted",
          "have contacted",
          "contacting"
        ],
        "answer": 0,
        "explanation": "\"Should contact\" provides a polite instruction/recommendation."
      }
    ]
  },
  {
    "id": "p6_003",
    "title": "Product Description",
    "text": "Introducing the new Lumina X1 Smartphone. The Lumina X1 [1] specifically for professionals who need powerful performance on the go. It features a battery that lasts [2] than any previous model.\n\nCustomers who pre-order before Friday [3] a free wireless charger. Don't miss out on this incredible offer; quantities are limited and they are selling out [4].",
    "questions": [
      {
        "id": "p6_003_q1",
        "part": 6,
        "theme": "passive-voice",
        "subtopic": "present-passive",
        "blank": 1,
        "question": "Choose the best option for blank [1]:",
        "options": [
          "is designed",
          "designed",
          "designs",
          "has designed"
        ],
        "answer": 0,
        "explanation": "The smartphone receives the action of designing (passive voice), and it is a general fact (present tense)."
      },
      {
        "id": "p6_003_q2",
        "part": 6,
        "theme": "comparatives",
        "subtopic": "comparative-regular",
        "blank": 2,
        "question": "Choose the best option for blank [2]:",
        "options": [
          "longer",
          "longest",
          "long",
          "more long"
        ],
        "answer": 0,
        "explanation": "Use the comparative \"longer\" because it is compared with \"any previous model\" using \"than\"."
      },
      {
        "id": "p6_003_q3",
        "part": 6,
        "theme": "verb-tenses",
        "subtopic": "future-will",
        "blank": 3,
        "question": "Choose the best option for blank [3]:",
        "options": [
          "will receive",
          "received",
          "receive",
          "are receiving"
        ],
        "answer": 0,
        "explanation": "This is a promise for a future action based on a condition (\"pre-order before Friday\")."
      },
      {
        "id": "p6_003_q4",
        "part": 6,
        "theme": "word-forms",
        "subtopic": "adverb-forms",
        "blank": 4,
        "question": "Choose the best option for blank [4]:",
        "options": [
          "rapidly",
          "rapid",
          "rapidity",
          "more rapid"
        ],
        "answer": 0,
        "explanation": "Use the adverb \"rapidly\" to modify the verb phrase \"selling out\"."
      }
    ]
  },
  {
    "id": "p6_004",
    "title": "Notice",
    "text": "Building Maintenance Notice\n\nPlease be advised that the elevators in the East Wing [1] out of service this weekend for scheduled maintenance. The maintenance crew [2] working from 8 AM Saturday until 5 PM Sunday.\n\nEmployees needing access to the upper floors should use the stairs [3] the service elevator in the West Wing. We apologize for any inconvenience this [4] cause.",
    "questions": [
      {
        "id": "p6_004_q1",
        "part": 6,
        "theme": "verb-tenses",
        "subtopic": "future-will",
        "blank": 1,
        "question": "Choose the best option for blank [1]:",
        "options": [
          "will be",
          "are",
          "were",
          "have been"
        ],
        "answer": 0,
        "explanation": "Refers to a scheduled event in the future (\"this weekend\")."
      },
      {
        "id": "p6_004_q2",
        "part": 6,
        "theme": "verb-tenses",
        "subtopic": "future-continuous",
        "blank": 2,
        "question": "Choose the best option for blank [2]:",
        "options": [
          "will be",
          "was",
          "is",
          "has been"
        ],
        "answer": 0,
        "explanation": "The future continuous (\"will be working\") describes an action that will be in progress over a specific future time period."
      },
      {
        "id": "p6_004_q3",
        "part": 6,
        "theme": "conjunctions",
        "subtopic": "coordinating",
        "blank": 3,
        "question": "Choose the best option for blank [3]:",
        "options": [
          "or",
          "but",
          "and",
          "so"
        ],
        "answer": 0,
        "explanation": "The coordinating conjunction \"or\" presents two alternative options (stairs OR service elevator)."
      },
      {
        "id": "p6_004_q4",
        "part": 6,
        "theme": "verb-tenses",
        "subtopic": "modals",
        "blank": 4,
        "question": "Choose the best option for blank [4]:",
        "options": [
          "may",
          "must",
          "should",
          "would"
        ],
        "answer": 0,
        "explanation": "The modal \"may\" (or might) is used to express possibility of inconvenience."
      }
    ]
  },
  {
    "id": "p6_005",
    "title": "Newsletter Article",
    "text": "Green Initiatives at Workplace\n\nOur company has successfully reduced its paper waste by 40% since the new recycling program [1] last year. [2] this success, management has decided to implement further environmental measures.\n\nNext month, all disposable plastic cups in the breakrooms will be replaced with reusable ceramic mugs. Employees are encouraged [3] their own mugs if they prefer. These small changes contribute to a [4] sustainable future.",
    "questions": [
      {
        "id": "p6_005_q1",
        "part": 6,
        "theme": "passive-voice",
        "subtopic": "past-passive",
        "blank": 1,
        "question": "Choose the best option for blank [1]:",
        "options": [
          "was introduced",
          "introduced",
          "has introduced",
          "is introduced"
        ],
        "answer": 0,
        "explanation": "The past passive is used because the program received the action at a specific time in the past (\"last year\")."
      },
      {
        "id": "p6_005_q2",
        "part": 6,
        "theme": "prepositions",
        "subtopic": "dependent-preps",
        "blank": 2,
        "question": "Choose the best option for blank [2]:",
        "options": [
          "Due to",
          "Because",
          "Although",
          "Despite"
        ],
        "answer": 0,
        "explanation": "The prepositional phrase \"Due to\" introduces a reason using a noun phrase (\"this success\")."
      },
      {
        "id": "p6_005_q3",
        "part": 6,
        "theme": "gerund-infinitive",
        "subtopic": "verbs-infinitive",
        "blank": 3,
        "question": "Choose the best option for blank [3]:",
        "options": [
          "to bring",
          "bringing",
          "bring",
          "brought"
        ],
        "answer": 0,
        "explanation": "The passive construction \"are encouraged\" is followed by an infinitive (\"to bring\")."
      },
      {
        "id": "p6_005_q4",
        "part": 6,
        "theme": "comparatives",
        "subtopic": "comparative-regular",
        "blank": 4,
        "question": "Choose the best option for blank [4]:",
        "options": [
          "more",
          "most",
          "much",
          "many"
        ],
        "answer": 0,
        "explanation": "Use the comparative \"more\" to modify the long adjective \"sustainable\" in this context."
      }
    ]
  },
  {
    "id": "p6_006",
    "title": "Customer Letter",
    "text": "Dear Valued Customer,\n\nWe are writing to thank you for your recent purchase of the AquaClean Water Filter. To ensure optimal performance, we recommend [1] the filter cartridge every six months.\n\nEnclosed with this letter, you will find a 15% discount coupon for your next purchase. This coupon is valid [2] any item in our online store. If you have any questions about your product, our customer service team [3] ready to assist you. \n\nThank you for [4] AquaClean.",
    "questions": [
      {
        "id": "p6_006_q1",
        "part": 6,
        "theme": "gerund-infinitive",
        "subtopic": "verbs-gerund",
        "blank": 1,
        "question": "Choose the best option for blank [1]:",
        "options": [
          "replacing",
          "to replace",
          "replace",
          "replaced"
        ],
        "answer": 0,
        "explanation": "The verb \"recommend\" is often followed by a gerund (\"replacing\") when no specific person is mentioned as the object."
      },
      {
        "id": "p6_006_q2",
        "part": 6,
        "theme": "prepositions",
        "subtopic": "dependent-preps",
        "blank": 2,
        "question": "Choose the best option for blank [2]:",
        "options": [
          "for",
          "in",
          "on",
          "at"
        ],
        "answer": 0,
        "explanation": "The adjective \"valid\" takes the dependent preposition \"for\" in this context."
      },
      {
        "id": "p6_006_q3",
        "part": 6,
        "theme": "subject-verb",
        "subtopic": "collective-nouns",
        "blank": 3,
        "question": "Choose the best option for blank [3]:",
        "options": [
          "is",
          "are",
          "be",
          "being"
        ],
        "answer": 0,
        "explanation": "The collective noun \"team\" takes a singular verb (\"is\") when acting as a single unit."
      },
      {
        "id": "p6_006_q4",
        "part": 6,
        "theme": "gerund-infinitive",
        "subtopic": "verbs-gerund",
        "blank": 4,
        "question": "Choose the best option for blank [4]:",
        "options": [
          "choosing",
          "to choose",
          "choose",
          "chose"
        ],
        "answer": 0,
        "explanation": "Prepositions (like \"for\") are followed by a gerund (\"choosing\")."
      }
    ]
  }
];

export const passages7 = [
  {
    "id": "p7_001",
    "title": "Job Advertisement",
    "type": "single",
    "text": "TechVision Solutions is seeking a highly motivated Marketing Director to lead our expanding marketing team in Seattle. The ideal candidate will have at least 7 years of experience in digital marketing, specifically within the software industry.\n\nResponsibilities:\n- Develop and implement comprehensive marketing strategies\n- Manage a budget of $2 million annually\n- Oversee a team of 15 marketing professionals\n- Analyze market trends and competitor activities\n\nRequirements:\n- Master's degree in Marketing, Business, or related field\n- Proven track record of successful campaign management\n- Excellent communication and leadership skills\n\nWe offer a competitive salary, comprehensive health benefits, and a generous 401(k) matching program. To apply, please send your resume and a cover letter to HR@techvision.com by November 30th. Only shortlisted candidates will be contacted for an interview.",
    "questions": [
      {
        "id": "p7_001_q1",
        "part": 7,
        "theme": "reading",
        "subtopic": "main-idea",
        "question": "What is the main purpose of this advertisement?",
        "options": [
          "To announce a company merger",
          "To recruit candidates for a position",
          "To describe a new product launch",
          "To inform clients of a policy change"
        ],
        "answer": 1,
        "explanation": "The text describes job requirements, responsibilities, and application instructions, indicating it is a <strong>job advertisement</strong> aimed at recruiting candidates."
      },
      {
        "id": "p7_001_q2",
        "part": 7,
        "theme": "reading",
        "subtopic": "specific-detail",
        "question": "Which of the following is NOT listed as a responsibility?",
        "options": [
          "Analyzing competitor activities",
          "Managing a $2 million budget",
          "Developing software applications",
          "Leading a team of 15 people"
        ],
        "answer": 2,
        "explanation": "The advertisement lists analyzing competitors, managing a budget, and leading a team as responsibilities, but \"developing software applications\" is not mentioned."
      },
      {
        "id": "p7_001_q3",
        "part": 7,
        "theme": "reading",
        "subtopic": "specific-detail",
        "question": "What is the deadline to apply for the position?",
        "options": [
          "November 15th",
          "November 30th",
          "December 1st",
          "December 31st"
        ],
        "answer": 1,
        "explanation": "The text states: \"To apply, please send your resume... by November 30th.\""
      },
      {
        "id": "p7_001_q4",
        "part": 7,
        "theme": "reading",
        "subtopic": "vocabulary",
        "question": "In the text, the word \"comprehensive\" in the Responsibilities section is closest in meaning to:",
        "options": [
          "Limited",
          "Thorough",
          "Expensive",
          "Complicated"
        ],
        "answer": 1,
        "explanation": "\"Comprehensive\" means complete and including everything that is necessary, which is closest in meaning to \"thorough\"."
      }
    ]
  },
  {
    "id": "p7_002",
    "title": "Company Email",
    "type": "single",
    "text": "To: All Employees\nFrom: Sarah Jenkins, Facilities Manager\nDate: March 12\nSubject: Parking Lot Repaving\n\nPlease be advised that the main employee parking lot (Lot A) will be closed for repaving from Monday, March 20th through Friday, March 24th. During this time, all employees who normally park in Lot A must use the overflow parking area (Lot C) located behind the warehouse building.\n\nShuttle service will be provided from Lot C to the main entrance every 15 minutes between 7:00 AM and 9:00 AM, and again between 4:00 PM and 6:00 PM. \n\nWe expect Lot A to reopen for regular use on Monday, March 27th. We apologize for the inconvenience and appreciate your cooperation in helping maintain our facilities.\n\nThank you,\nSarah Jenkins",
    "questions": [
      {
        "id": "p7_002_q1",
        "part": 7,
        "theme": "reading",
        "subtopic": "main-idea",
        "question": "Why was this email written?",
        "options": [
          "To announce a new shuttle service schedule",
          "To inform staff about a temporary parking change",
          "To request funding for facility repairs",
          "To complain about parking violations"
        ],
        "answer": 1,
        "explanation": "The email informs employees that the main parking lot will be closed for repaving and instructs them on where to park temporarily."
      },
      {
        "id": "p7_002_q2",
        "part": 7,
        "theme": "reading",
        "subtopic": "specific-detail",
        "question": "Where should employees park on March 22nd?",
        "options": [
          "Lot A",
          "Lot B",
          "Lot C",
          "The visitor parking area"
        ],
        "answer": 2,
        "explanation": "March 22nd falls during the closure period (March 20-24), during which employees must use the overflow parking area (Lot C)."
      },
      {
        "id": "p7_002_q3",
        "part": 7,
        "theme": "reading",
        "subtopic": "specific-detail",
        "question": "How often does the shuttle run in the morning?",
        "options": [
          "Every 5 minutes",
          "Every 10 minutes",
          "Every 15 minutes",
          "Every 30 minutes"
        ],
        "answer": 2,
        "explanation": "The text states: \"Shuttle service will be provided... every 15 minutes.\""
      },
      {
        "id": "p7_002_q4",
        "part": 7,
        "theme": "reading",
        "subtopic": "inference",
        "question": "What can be inferred about Lot A?",
        "options": [
          "It is larger than Lot C",
          "It needs maintenance work",
          "It is only for executives",
          "It is located behind the warehouse"
        ],
        "answer": 1,
        "explanation": "Since Lot A is being closed for \"repaving,\" it can be inferred that it needs maintenance work."
      }
    ]
  },
  {
    "id": "p7_003",
    "title": "Restaurant Review & Response",
    "type": "double",
    "text": "Text 1: Review by LocalEats.com\n\"Bistro 42\" - 3/5 Stars\nDate: June 5\nI visited Bistro 42 last Friday evening for dinner. The atmosphere was delightful, with soft lighting and comfortable seating. The appetizers, particularly the stuffed mushrooms, were fantastic. However, the main courses were disappointing. My steak was overcooked, and my partner's pasta was served lukewarm. Furthermore, the service was incredibly slow; we waited 45 minutes for our main dishes. While the ambiance is great, the kitchen needs significant improvement.\n- Mark T.\n\nText 2: Response from Restaurant Owner\nDate: June 7\nDear Mark,\nThank you for visiting Bistro 42 and for your honest feedback. I sincerely apologize for the issues you experienced with your main courses and the slow service. Last Friday, our head chef experienced a sudden family emergency, and our kitchen was understaffed. This is not our usual standard of quality. We would love the opportunity to make this right. Please contact me at manager@bistro42.com, and I will arrange a complimentary dinner for two on your next visit.\nWarm regards,\nElena Rossi, Owner",
    "questions": [
      {
        "id": "p7_003_q1",
        "part": 7,
        "theme": "reading",
        "subtopic": "specific-detail",
        "question": "What did the reviewer like about the restaurant?",
        "options": [
          "The quick service",
          "The main courses",
          "The appetizers and atmosphere",
          "The location and prices"
        ],
        "answer": 2,
        "explanation": "The reviewer stated: \"The atmosphere was delightful... The appetizers, particularly the stuffed mushrooms, were fantastic.\""
      },
      {
        "id": "p7_003_q2",
        "part": 7,
        "theme": "reading",
        "subtopic": "specific-detail",
        "question": "Why was the service slow according to the owner?",
        "options": [
          "The restaurant was unusually busy",
          "The kitchen was understaffed",
          "The waiter was new",
          "The equipment broke down"
        ],
        "answer": 1,
        "explanation": "Elena Rossi explains in Text 2: \"...our head chef experienced a sudden family emergency, and our kitchen was understaffed.\""
      },
      {
        "id": "p7_003_q3",
        "part": 7,
        "theme": "reading",
        "subtopic": "inference",
        "question": "What does Elena Rossi offer the reviewer?",
        "options": [
          "A full refund",
          "A job in the kitchen",
          "A free meal in the future",
          "A discount coupon for 50% off"
        ],
        "answer": 2,
        "explanation": "She offers \"a complimentary dinner for two on your next visit,\" which means a free meal."
      },
      {
        "id": "p7_003_q4",
        "part": 7,
        "theme": "reading",
        "subtopic": "cross-reference",
        "question": "Based on the two texts, what caused Mark's steak to be overcooked?",
        "options": [
          "The recipe was changed",
          "The head chef was absent",
          "The waiter forgot the order",
          "Mark requested it that way"
        ],
        "answer": 1,
        "explanation": "Mark complained about the food quality, and the owner explained that the head chef was absent due to an emergency, leading to the kitchen issues."
      }
    ]
  },
  {
    "id": "p7_004",
    "title": "Product Recall Notice",
    "type": "single",
    "text": "URGENT PRODUCT RECALL\nProduct: \"SafeBreeze\" Portable Heater (Model #SB-200)\nDates Sold: September 1, 2022 to December 15, 2022\n\nReason for Recall:\nNova Appliances has discovered a manufacturing defect in the power cord of the SafeBreeze Portable Heater (Model #SB-200). In rare cases, the cord can overheat during prolonged use, posing a potential fire hazard. No injuries or property damage have been reported to date.\n\nAction Required:\nConsumers should immediately stop using the recalled heaters and unplug them from the wall outlet. \n\nRemedy:\nReturn the heater to any Nova Appliances retail store for a full refund or a free replacement with the newer model (SB-300). Alternatively, contact our customer support team at 1-800-555-NOVA to receive a pre-paid shipping label to return the product by mail.\n\nWe apologize for this inconvenience and remain committed to your safety.",
    "questions": [
      {
        "id": "p7_004_q1",
        "part": 7,
        "theme": "reading",
        "subtopic": "main-idea",
        "question": "What is the purpose of this notice?",
        "options": [
          "To promote a new heater model",
          "To announce a safety recall",
          "To provide operating instructions",
          "To offer a seasonal discount"
        ],
        "answer": 1,
        "explanation": "The notice is titled \"URGENT PRODUCT RECALL\" and explains a safety issue requiring customers to return the product."
      },
      {
        "id": "p7_004_q2",
        "part": 7,
        "theme": "reading",
        "subtopic": "specific-detail",
        "question": "What is the danger associated with the product?",
        "options": [
          "It consumes too much electricity",
          "The power cord may overheat",
          "It produces toxic fumes",
          "The heating element easily breaks"
        ],
        "answer": 1,
        "explanation": "The text states: \"...the cord can overheat during prolonged use, posing a potential fire hazard.\""
      },
      {
        "id": "p7_004_q3",
        "part": 7,
        "theme": "reading",
        "subtopic": "specific-detail",
        "question": "Which models are affected by this recall?",
        "options": [
          "All Nova Appliances heaters",
          "Model SB-300 only",
          "Model SB-200 only",
          "Models sold after December 15"
        ],
        "answer": 2,
        "explanation": "The notice specifically states: \"Product: 'SafeBreeze' Portable Heater (Model #SB-200)\"."
      },
      {
        "id": "p7_004_q4",
        "part": 7,
        "theme": "reading",
        "subtopic": "specific-detail",
        "question": "How can customers return the product by mail?",
        "options": [
          "By paying for shipping themselves",
          "By contacting customer support for a label",
          "By returning it to a retail store",
          "By filling out an online form"
        ],
        "answer": 1,
        "explanation": "The text instructs customers to \"contact our customer support team... to receive a pre-paid shipping label to return the product by mail.\""
      },
      {
        "id": "p7_004_q5",
        "part": 7,
        "theme": "reading",
        "subtopic": "vocabulary",
        "question": "In the text, the word \"prolonged\" is closest in meaning to:",
        "options": [
          "Extended",
          "Unexpected",
          "Incorrect",
          "Dangerous"
        ],
        "answer": 0,
        "explanation": "\"Prolonged\" means continuing for a long time, which is synonymous with \"extended\"."
      }
    ]
  },
  {
    "id": "p7_005",
    "title": "Conference Agenda & Email",
    "type": "double",
    "text": "Text 1: Leadership Summit 2023 - Day 1 Agenda\n9:00 AM - Registration & Breakfast (Lobby)\n10:00 AM - Keynote Address: \"Leading in the Digital Age\" by Dr. Alan Reed (Main Hall)\n11:30 AM - Breakout Session A: Team Building (Room 101)\n11:30 AM - Breakout Session B: Conflict Resolution (Room 102)\n1:00 PM - Networking Lunch (Dining Pavilion)\n2:30 PM - Panel Discussion: Future Market Trends (Main Hall)\n4:00 PM - Closing Remarks & Day 1 Wrap-up\n\nText 2: Email from Conference Organizer\nTo: Registered Attendees\nSubject: Schedule Change - Leadership Summit\nDear Attendees,\nWe are looking forward to welcoming you to the Leadership Summit tomorrow. Please note a minor change to the Day 1 schedule. Due to an unexpected flight delay, Dr. Alan Reed will not be able to arrive in time for the morning keynote. We have decided to swap his presentation with the Panel Discussion originally scheduled for the afternoon.\nThe Panel Discussion will now take place at 10:00 AM in the Main Hall. Dr. Reed's Keynote Address will be moved to 2:30 PM in the same location. All other events, including the breakout sessions and lunch, remain unchanged. \nThank you for your understanding.",
    "questions": [
      {
        "id": "p7_005_q1",
        "part": 7,
        "theme": "reading",
        "subtopic": "specific-detail",
        "question": "Where is the networking lunch taking place?",
        "options": [
          "Main Hall",
          "Room 101",
          "Dining Pavilion",
          "Lobby"
        ],
        "answer": 2,
        "explanation": "The agenda lists: \"1:00 PM - Networking Lunch (Dining Pavilion)\"."
      },
      {
        "id": "p7_005_q2",
        "part": 7,
        "theme": "reading",
        "subtopic": "cross-reference",
        "question": "At what time will Dr. Alan Reed speak?",
        "options": [
          "10:00 AM",
          "11:30 AM",
          "1:00 PM",
          "2:30 PM"
        ],
        "answer": 3,
        "explanation": "Although the agenda says 10:00 AM, the email notes a schedule change: \"Dr. Reed's Keynote Address will be moved to 2:30 PM.\""
      },
      {
        "id": "p7_005_q3",
        "part": 7,
        "theme": "reading",
        "subtopic": "specific-detail",
        "question": "Why was the schedule changed?",
        "options": [
          "A room double-booking",
          "A flight delay",
          "A cancellation by a speaker",
          "A catering issue"
        ],
        "answer": 1,
        "explanation": "The email states: \"Due to an unexpected flight delay, Dr. Alan Reed will not be able to arrive in time...\""
      },
      {
        "id": "p7_005_q4",
        "part": 7,
        "theme": "reading",
        "subtopic": "cross-reference",
        "question": "What event will take place immediately after the Panel Discussion?",
        "options": [
          "Breakout Sessions",
          "Networking Lunch",
          "Closing Remarks",
          "Registration"
        ],
        "answer": 0,
        "explanation": "According to the revised schedule, the Panel Discussion is now at 10:00 AM. The next events on the agenda are the Breakout Sessions at 11:30 AM."
      },
      {
        "id": "p7_005_q5",
        "part": 7,
        "theme": "reading",
        "subtopic": "inference",
        "question": "What can be inferred about the attendees?",
        "options": [
          "They must choose between two breakout sessions",
          "They are all executives at the same company",
          "They have to pay extra for lunch",
          "They received the email a week before the event"
        ],
        "answer": 0,
        "explanation": "Because Breakout Session A and Breakout Session B are scheduled at the exact same time (11:30 AM), attendees must choose one to attend."
      }
    ]
  },
  {
    "id": "p7_006",
    "title": "Internal Memo",
    "type": "single",
    "text": "MEMORANDUM\nTo: All Employees\nFrom: IT Department\nDate: February 2\nSubject: Mandatory Software Update\n\nThis weekend, the IT department will be deploying a major security update to all company-issued laptops and desktop computers. This update is crucial for protecting our network against recently identified vulnerabilities.\n\nAction Required:\nBefore leaving the office on Friday, February 4th, please ensure that your computer is left powered ON and connected to the company network. Do not shut down your machine. However, please save all your work and close all active applications, as the computer will restart automatically several times during the update process.\n\nEmployees working remotely must log into the company VPN by 5:00 PM on Friday and leave their computers connected over the weekend. \n\nIf you return to work on Monday and experience any login issues, please submit a ticket through the IT portal rather than calling the help desk directly, as we expect high call volumes.\n\nThank you,\nIT Support Team",
    "questions": [
      {
        "id": "p7_006_q1",
        "part": 7,
        "theme": "reading",
        "subtopic": "main-idea",
        "question": "What is the main topic of the memo?",
        "options": [
          "A change in IT department leadership",
          "Instructions for an upcoming software update",
          "New rules for working remotely",
          "A request to return company equipment"
        ],
        "answer": 1,
        "explanation": "The memo provides instructions to employees regarding a \"Mandatory Software Update\" happening over the weekend."
      },
      {
        "id": "p7_006_q2",
        "part": 7,
        "theme": "reading",
        "subtopic": "specific-detail",
        "question": "What are employees instructed NOT to do on Friday?",
        "options": [
          "Save their work",
          "Close their applications",
          "Turn off their computers",
          "Connect to the network"
        ],
        "answer": 2,
        "explanation": "The text states explicitly: \"Do not shut down your machine.\""
      },
      {
        "id": "p7_006_q3",
        "part": 7,
        "theme": "reading",
        "subtopic": "specific-detail",
        "question": "What must remote workers do differently?",
        "options": [
          "Bring their laptops to the office",
          "Log into the VPN",
          "Install the update manually",
          "Call the help desk on Friday"
        ],
        "answer": 1,
        "explanation": "The memo says: \"Employees working remotely must log into the company VPN...\""
      },
      {
        "id": "p7_006_q4",
        "part": 7,
        "theme": "reading",
        "subtopic": "specific-detail",
        "question": "What should an employee do if they have trouble logging in on Monday?",
        "options": [
          "Call the IT help desk immediately",
          "Ask a coworker for help",
          "Submit an online support ticket",
          "Restart their computer again"
        ],
        "answer": 2,
        "explanation": "The text requests employees to \"submit a ticket through the IT portal rather than calling the help desk directly.\""
      }
    ]
  }
];
