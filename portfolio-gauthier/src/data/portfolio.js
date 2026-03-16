export const navLinks = [
  { label: 'A propos', href: '#about' },
  { label: 'Stack', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projets', href: '#projects' },
  { label: 'Formation', href: '#education' },
  { label: 'Contact', href: '#contact' }
];

export const heroHighlights = [
  'Bachelor developpement fullstack a Metz Numeric School',
  '2 experiences chez Sogeti Capgemini Luxembourg',
  'Vue.js au front, Java et SQL au back'
];

export const heroMetrics = [
  { value: '2+', label: 'stages fullstack' },
  { value: 'Java 17', label: 'Spring Boot au back' },
  { value: 'Vue 3', label: 'stack front cible' },
  { value: '2026-2027', label: 'alternance recherchee' }
];

export const aboutParagraphs = [
  "Je suis etudiant en Bachelor Informatique Developpeur Fullstack a Metz Numeric School. Mon objectif est simple : construire des interfaces propres cote front et des APIs solides cote back.",
  "J'ai effectue deux stages chez Sogeti Capgemini a Bertrange, au Luxembourg, sur des applications web pour le CTIE avec Vue.js, Java et SQL. C'est exactement le type de stack sur lequel je veux continuer a progresser.",
  "Je recherche une alternance d'un an pour 2026-2027. Je suis base a Coin-sur-Seille, mobile Grand Est et Luxembourg, avec permis B."
];

export const aboutStats = [
  { value: '1er', label: 'major de promo' },
  { value: '11', label: 'tickets livres en equipe' },
  { value: '7+', label: 'technos travaillees' },
  { value: '1 an', label: 'alternance visee' }
];

export const skills = [
  { name: 'Vue.js', category: 'Frontend', level: 82 },
  { name: 'JavaScript', category: 'Frontend', level: 84 },
  { name: 'HTML / CSS', category: 'Frontend', level: 91 },
  { name: 'Java', category: 'Backend', level: 78 },
  { name: 'Spring Boot', category: 'Backend', level: 74 },
  { name: 'SQL', category: 'Database', level: 79 },
  { name: 'Git / GitLab', category: 'Workflow', level: 76 },
  { name: 'Docker', category: 'Ops', level: 63 }
];

export const experiences = [
  {
    date: 'Mai 2026 - Juillet 2026',
    company: 'Sogeti Capgemini',
    role: 'Developpeur Fullstack stagiaire',
    description:
      "Travail au sein de la meme equipe qu'en 2025 sur des applications web pour le CTIE. Participation aux sprints agile, corrections de bugs et evolutions fonctionnelles cote front et back.",
    tags: ['Vue.js', 'Java', 'SQL', 'Scrum']
  },
  {
    date: 'Mai 2025 - Juillet 2025',
    company: 'Sogeti Capgemini',
    role: 'Developpeur Fullstack stagiaire',
    description:
      "Realisation d'un projet complet pour le CTIE avec une stack Vue.js, Java et SQL. Travail en contexte equipe avec GitLab et suivi de tickets.",
    tags: ['Vue.js', 'Java', 'SQL', 'GitLab']
  },
  {
    date: '2024',
    company: 'Castorama',
    role: 'Employe polyvalent',
    description:
      "Experience terrain utile pour le sens du service, la communication et la rigueur au quotidien.",
    tags: ['Relation client', 'Organisation']
  }
];

export const projects = [
  {
    name: 'RENLA',
    type: 'Vue / Java',
    context: 'Projet client confidentiel - CTIE',
    description:
      "Back-office national de gestion de logements abordables. Travail sur les droits, les tickets de maintenance et les evolutions fonctionnelles en equipe agile.",
    tags: ['Vue.js', 'Java', 'SQL', 'Docker', 'GitLab CI/CD'],
    github: null,
    confidential: true
  },
  {
    name: 'Portfolio Fullstack',
    type: 'Vue / Spring Boot',
    context: 'Projet personnel',
    description:
      'Portfolio avec front Vue 3, backend Spring Boot, formulaire de contact persiste en base et envoi de mail.',
    tags: ['Vue 3', 'Vite', 'Spring Boot', 'PostgreSQL'],
    github: null,
    confidential: false
  },
  {
    name: 'PSG Fan App',
    type: 'Vue',
    context: 'Projet personnel',
    description:
      "Application web orientee passion football avec actualites, statistiques et resultats. Projet utile pour travailler l'integration front et la consommation d'API.",
    tags: ['Vue.js', 'API', 'JavaScript'],
    github: null,
    confidential: false
  },
  {
    name: 'Fichier Doublon',
    type: 'Python',
    context: 'Projet personnel',
    description:
      "Script de detection de fichiers doublons par hash pour automatiser le nettoyage de repertoires.",
    tags: ['Python', 'Scripting', 'CLI'],
    github: 'https://github.com/GauthierDEBRA/fichier-doublon',
    confidential: false
  },
  {
    name: 'Democtek MVC',
    type: 'JavaScript',
    context: 'Projet ecole',
    description:
      "Application web en architecture MVC avec integration front complete, responsive design et interactions utilisateur.",
    tags: ['JavaScript', 'MVC', 'Bootstrap'],
    github: 'https://github.com/NMayerOnyx/Democtek_MVC_Projet',
    confidential: false
  }
];

export const education = [
  {
    period: '2024 - 2027',
    title: 'Bachelor Informatique Developpeur Fullstack',
    school: 'Metz Numeric School',
    badge: 'Major de promo 1re annee'
  },
  {
    period: '2021 - 2023',
    title: 'BTS Management Commercial Operationnel',
    school: 'NBS Metz',
    badge: 'Alternance'
  },
  {
    period: '2020',
    title: 'Bac STMG Gestion et Finance',
    school: 'Lycee Robert Schuman - Metz',
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
    label: 'Telephone',
    value: '+33 6 14 88 18 73',
    href: 'tel:+33614881873'
  },
  {
    label: 'GitHub',
    value: 'github.com/GauthierDEBRA',
    href: 'https://github.com/GauthierDEBRA'
  },
  {
    label: 'Localisation',
    value: 'Coin-sur-Seille - Grand Est / Luxembourg',
    href: null
  }
];
