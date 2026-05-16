export const site = {
  title: 'TechDirectory — Best SaaS Tools for Creators & Freelancers',
  description: 'Curated reviews and comparisons of the best software tools for creators, freelancers, and solopreneurs.',
  url: 'https://techdirectory.site',
  locale: 'en-US',
  // TODO: update these when ready
  author: 'TechDirectory Team',
  twitterHandle: '@techdirectory',
} as const;

export const navigation = {
  navItems: [
    { label: 'Home', href: '/' },
    { label: 'Categories', href: '/categories' },
    { label: 'About', href: '/about' },
  ],
};

export const footerLinks = [
  { label: 'Privacy Policy', href: '/privacy' },
  { label: 'Terms of Use', href: '/terms' },
];
