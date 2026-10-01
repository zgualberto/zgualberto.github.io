import type { Project } from './types';

export const slsaProjects: Project[] = [
  {
    name: 'Members Portal API',
    employer: 'Surf Life Saving Australia',
    duration: 'Feb 2024 – Feb 2025',
    role: 'Senior Software Engineer',
    teamSize: 7,
    stack: ['NestJS', 'TypeScript', 'TypeORM', 'MSSQL', 'Docker', 'Azure'],
    description: 'RESTful APIs for the national Members Portal platform.',
  },
  {
    name: 'Members Portal Frontend',
    employer: 'Surf Life Saving Australia',
    duration: 'Feb 2024 – Feb 2025',
    role: 'Senior Software Engineer',
    teamSize: 7,
    stack: ['Vue 3', 'Quasar', 'TypeScript', 'Pinia'],
    description: 'Internal member-facing apps with modern Vue and state management.',
  },
  {
    name: 'API Layer',
    employer: 'Surf Life Saving Australia',
    duration: 'May 2022 – Feb 2025',
    role: 'Senior Software Engineer',
    teamSize: 7,
    stack: ['NestJS', 'TypeScript', 'MSSQL', 'Docker', 'Azure'],
    description: 'Core API layer and dashboard serving multiple consumers.',
  },
];
