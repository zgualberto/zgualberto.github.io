import type { Project } from './types';

export const integrationProjects: Project[] = [
  {
    name: 'Order Integration Service',
    employer: 'Microsourcing',
    duration: 'Dec 2020 – May 2022',
    role: 'Backend Developer',
    teamSize: 1,
    stack: ['Node.js', 'TypeScript', 'MySQL', 'Azure Service Bus'],
    description: 'Microservice syncing orders across internal platforms.',
  },
  {
    name: 'Product Integration Service',
    employer: 'Microsourcing',
    duration: 'Dec 2020 – May 2022',
    role: 'Backend Developer',
    teamSize: 1,
    stack: ['Node.js', 'TypeScript', 'MySQL', 'Azure Service Bus'],
    description: 'Product catalog sync with messaging and optimized queries.',
  },
  {
    name: 'Photos On Canvas',
    employer: 'Emapta',
    duration: 'Oct 2019 – Dec 2020',
    role: 'Full Stack Lead Developer',
    teamSize: 2,
    stack: ['Vue.js', 'Nuxt.js', 'WooCommerce', 'PHP', 'AWS'],
    description: 'E-commerce platform from backend architecture to storefront.',
  },
];
