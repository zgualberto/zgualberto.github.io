import type { ExperienceJob } from './types';

export const midJobs: ExperienceJob[] = [
  {
    company: 'Microsourcing',
    role: 'Backend Developer',
    type: 'Project-based · Remote',
    location: 'Remote',
    start: 'Dec 2020',
    end: 'May 2022',
    summary: 'Backend microservices for integration platforms.',
    achievements: [
      'Implemented microservices with PHP and Node.js.',
      'Designed REST APIs consumed by internal services.',
      'Optimized MySQL schemas and queries.',
      'Integrated Azure Service Bus messaging.',
    ],
    techStack: ['PHP', 'Node.js', 'MySQL', 'Azure Service Bus'],
  },
  {
    company: 'Emapta',
    role: 'Full Stack Developer',
    type: 'Full-time · Client-based',
    location: 'Makati City',
    start: 'Oct 2019',
    end: 'Dec 2020',
    summary: 'E-commerce platform, backend to frontend.',
    achievements: [
      'Led e-commerce development from architecture to UI.',
      'Built reusable backend services and tuned performance.',
      'Designed secure schemas and integrated third-party services.',
      'Managed AWS hosting, backups and scaling.',
    ],
    techStack: ['PHP', 'Vue.js', 'Nuxt.js', 'WooCommerce', 'MySQL', 'AWS'],
  },
];
