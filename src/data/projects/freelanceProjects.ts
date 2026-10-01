import type { Project } from './types';

export const freelanceProjects: Project[] = [
  {
    name: 'FCL Finance App',
    employer: 'Freelance',
    duration: 'Jan 2026 – Jun 2026',
    role: 'Full Stack Developer',
    teamSize: 2,
    stack: ['Vue 3', 'Quasar', 'Capacitor', 'SQLite'],
    description: 'Offline-first mobile finance app for field use.',
  },
  {
    name: 'Brewery JS Capability',
    employer: 'Stratpoint',
    duration: 'Aug 2018 – Apr 2019',
    role: 'Node.js Developer',
    teamSize: 20,
    stack: ['Node.js', 'Serverless', 'GraphQL', 'Cognito', 'React'],
    description: 'Serverless capability with CQRS, JWT and React clients.',
  },
];
