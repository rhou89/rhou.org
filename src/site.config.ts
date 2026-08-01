// Edit this file to re-label the entire site. Header, Footer, the homepage
// and SEO defaults all read from here instead of hardcoding copy.
export const SITE = {
  name: 'Ryan (Junpeng) Hou',
  shortName: 'Ryan Hou',
  role: 'Technology Leader & Interdisciplinary Researcher',
  email: 'ryanhou94@gmail.com',
  tagline: 'From first principles to real-world impact.',
  description:
    'Ryan Hou is a technology leader and interdisciplinary researcher working across large-scale AI systems and quantum technologies.',
  intro:
    'My work spans large-scale AI systems and quantum technologies, combining interdisciplinary research, engineering excellence, and technical leadership to create measurable impact.',
  status:
    'Machine Learning Tech Lead at Pinterest · Visiting Researcher in Quantum Engineering at Washington University in St. Louis',
  social: [
    { label: 'Google Scholar', href: 'https://scholar.google.com/citations?user=mJJxP8EAAAAJ' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/ryanjhou/' },
  ],
  locale: 'en',
} as const;

export const NAV_LINKS = [
  { label: 'Publications', href: '/publications' },
  { label: 'News', href: '/news' },
  { label: 'About', href: '/about' },
  { label: 'CV', href: '/cv' },
] as const;
