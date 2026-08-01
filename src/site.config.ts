// Edit this file to re-label the entire site. Header, Footer, the homepage
// and SEO defaults all read from here instead of hardcoding copy.
export const SITE = {
  name: 'Ryan Hou, Ph.D.',
  shortName: 'Ryan Hou',
  role: 'Technology Leader & Interdisciplinary Scientist',
  email: 'ryanhou94@gmail.com',
  tagline: 'From first principles to real-world impact.',
  description:
    'Ryan Hou is a technology leader and interdisciplinary scientist working across large-scale AI systems and quantum technologies.',
  intro:
    'My work spans large-scale AI systems and quantum technologies, combining interdisciplinary research, technical leadership, and real-world execution to create measurable impact.',
  status:
    'Machine Learning Tech Lead at Pinterest · Visiting Researcher in Quantum Computing at Washington University in St. Louis',
  social: [
    { label: 'Google Scholar', href: 'https://scholar.google.com/citations?user=mJJxP8EAAAAJ' },
    { label: 'GitHub', href: 'https://github.com/rhou89' },
  ],
  locale: 'en',
} as const;

export const NAV_LINKS = [
  { label: 'Research', href: '/research' },
  { label: 'About', href: '/about' },
  { label: 'CV', href: '/cv' },
] as const;
