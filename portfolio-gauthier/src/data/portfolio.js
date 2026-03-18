export const navLinks = [
  { label: 'À propos', href: '#about' },
  { label: 'Compétences', href: '#skills' },
  { label: 'Expérience', href: '#experience' },
  { label: 'Projets', href: '#projects' },
  { label: 'Formation', href: '#education' },
  { label: 'Contact', href: '#contact' }
];

export const heroHighlights = [
  'Bachelor Développement Fullstack — Metz Numeric School',
  '2 stages chez Sogeti Capgemini Luxembourg',
  'Vue.js · Java · Spring Boot · SQL'
];

export const heroMetrics = [
  { value: '2', label: 'stages fullstack réalisés' },
  { value: 'Java 17', label: 'Spring Boot côté back' },
  { value: 'Vue 3', label: 'stack front principale' },
  { value: '2026', label: 'alternance recherchée' }
];

export const aboutParagraphs = [
  "Étudiant en Bachelor Développeur Fullstack à Metz Numeric School, je conçois des interfaces utilisateur avec Vue.js et des APIs robustes avec Java et Spring Boot. Je m'investis pleinement dans chaque projet avec une approche sérieuse et concrète.",
  "Deux stages chez Sogeti Capgemini à Bertrange (Luxembourg) m'ont permis de travailler sur des applications web en production pour le CTIE, en méthodologie agile avec Vue.js, Java et SQL.",
  "Je recherche une alternance d'un an à partir de 2026. Basé à Coin-sur-Seille, je suis mobile sur le Grand Est et le Luxembourg. Permis B."
];

export const aboutStats = [
  { value: '3+', label: 'projets concrets' },
  { value: '11', label: 'tickets livrés en équipe' },
  { value: '7+', label: 'technologies maîtrisées' },
  { value: '1 an', label: "d'alternance recherchée" }
];

export const skills = [
  { name: 'Vue.js', category: 'Frontend', context: 'Utilisé en stage & projets', level: 82 },
  { name: 'JavaScript', category: 'Frontend', context: 'Base de tous mes projets front', level: 84 },
  { name: 'HTML / CSS', category: 'Frontend', context: 'Intégration & responsive design', level: 91 },
  { name: 'Java', category: 'Backend', context: 'Utilisé en stage chez Sogeti', level: 78 },
  { name: 'Spring Boot', category: 'Backend', context: 'APIs REST & sécurité', level: 74 },
  { name: 'SQL', category: 'Database', context: 'Requêtes & modélisation en stage', level: 79 },
  { name: 'Git / GitLab', category: 'Workflow', context: 'Branches, MR & CI/CD', level: 76 },
  { name: 'Docker', category: 'Ops', context: 'Conteneurisation de projets', level: 63 }
];

export const strengths = [
  { title: 'Esprit d\'équipe', description: 'Travail en sprints agile, revues de code et communication avec les métiers chez Sogeti Capgemini.' },
  { title: 'Autonomie', description: 'Projets personnels menés de bout en bout : conception, développement, déploiement.' },
  { title: 'Rigueur', description: 'Code propre, validations, tests et documentation. Une approche sérieuse sur chaque projet.' },
  { title: 'Adaptabilité', description: 'Reconversion du commerce vers le développement, montée en compétences rapide sur de nouvelles technologies.' }
];

export const experiences = [
  {
    date: 'Mai — Juillet 2026',
    company: 'Sogeti Capgemini',
    role: 'Développeur Fullstack — Stage',
    description:
      "Second stage au sein de la même équipe. Développement d'applications web pour le CTIE, participation aux sprints agile, corrections de bugs et évolutions fonctionnelles côté front et back.",
    tags: ['Vue.js', 'Java', 'SQL', 'Scrum']
  },
  {
    date: 'Mai — Juillet 2025',
    company: 'Sogeti Capgemini',
    role: 'Développeur Fullstack — Stage',
    description:
      "Premier stage fullstack. Réalisation d'un projet complet pour le CTIE avec Vue.js, Java et SQL. Travail en équipe avec GitLab et suivi de tickets en méthodologie agile.",
    tags: ['Vue.js', 'Java', 'SQL', 'GitLab']
  },
  {
    date: '2024',
    company: 'Castorama',
    role: 'Employé polyvalent',
    description:
      "Expérience terrain qui m'a apporté le sens du service client, la rigueur et la capacité à m'organiser au quotidien.",
    tags: ['Relation client', 'Organisation']
  }
];

export const projects = [
  {
    name: 'RENLA',
    type: 'Vue / Java',
    color: '#5cf7c5',
    context: 'Projet client — CTIE (confidentiel)',
    description:
      "Back-office national de gestion de logements abordables. Travail sur les droits d'accès, les tickets de maintenance et les évolutions fonctionnelles en équipe agile.",
    tags: ['Vue.js', 'Java', 'SQL', 'Docker', 'GitLab CI/CD'],
    github: null,
    confidential: true
  },
  {
    name: 'Portfolio Fullstack',
    type: 'Vue / Spring Boot',
    color: '#19c2ff',
    context: 'Projet personnel',
    description:
      'Portfolio avec frontend Vue 3, backend Spring Boot, formulaire de contact persisté en base de données et envoi de mails automatisé.',
    tags: ['Vue 3', 'Vite', 'Spring Boot', 'PostgreSQL'],
    confidential: false
  },
  {
    name: 'AlertMNS',
    type: 'Vue / Spring Boot',
    color: '#19c2ff',
    context: 'Projet école',
    description:
      "Application de messagerie interne en temps réel avec authentification JWT, notifications WebSocket, réunions, pointage et administration.",
    tags: ['Vue 3', 'Pinia', 'Spring Boot', 'MySQL', 'WebSocket', 'Docker'],
    github: 'https://github.com/GauthierDEBRA/ALERTMNS.git',
    confidential: false
  },
  {
    name: 'PSG Fan App',
    type: 'Vue',
    color: '#5cf7c5',
    context: 'Projet personnel',
    description:
      "Application web autour du football avec actualités, statistiques et résultats via des APIs externes.",
    tags: ['Vue.js', 'API', 'JavaScript'],
    github: null,
    confidential: false
  },
  {
    name: 'Fichier Doublon',
    type: 'Python',
    color: '#ff8f5c',
    context: 'Projet personnel',
    description:
      "Script de détection de fichiers doublons par hash pour automatiser le nettoyage de répertoires.",
    tags: ['Python', 'Scripting', 'CLI'],
    github: 'https://github.com/GauthierDEBRA/fichier-doublon',
    confidential: false
  },
  {
    name: 'Democtek MVC',
    type: 'JavaScript',
    color: '#f7df1e',
    context: 'Projet école',
    description:
      "Application web en architecture MVC avec intégration front complète, responsive design et interactions utilisateur.",
    tags: ['JavaScript', 'MVC', 'Bootstrap'],
    github: 'https://github.com/NMayerOnyx/Democtek_MVC_Projet',
    confidential: false
  }
];

export const education = [
  {
    period: '2024 — 2027',
    title: 'Bachelor Informatique Développeur Fullstack',
    school: 'Metz Numeric School',
    badge: 'Bachelor en cours'
  },
  {
    period: '2021 — 2023',
    title: 'BTS Management Commercial Opérationnel',
    school: 'NBS Metz',
    badge: 'Alternance'
  },
  {
    period: '2020',
    title: 'Bac STMG Gestion et Finance',
    school: 'Lycée Robert Schuman — Metz',
    badge: 'Obtenu'
  }
];

export const contactDetails = [
  {
    label: 'Email',
    value: 'gauthier.debra@outlook.fr',
    href: 'mailto:gauthier.debra@outlook.fr'
  },
  {
    label: 'Téléphone',
    value: '+33 6 14 88 18 73',
    href: 'tel:+33614881873'
  },
  {
    label: 'GitHub',
    value: 'github.com/GauthierDEBRA',
    href: 'https://github.com/GauthierDEBRA'
  },
  {
    label: 'LinkedIn',
    value: 'Gauthier DEBRA',
    href: 'https://www.linkedin.com/in/gauthier-debra-774a4b33b/'
  },
  {
    label: 'Localisation',
    value: 'Coin-sur-Seille — Grand Est / Luxembourg',
    href: null
  }
];
