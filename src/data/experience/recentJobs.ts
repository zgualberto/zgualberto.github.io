import type { ExperienceJob } from './types';

export const recentJobs: ExperienceJob[] = [
  {
    company: 'Eyeball',
    role: 'Senior Full Stack Developer',
    type: 'Project-based · Remote',
    location: 'Remote',
    start: 'Mar 2025',
    end: null,
    summary: 'Scalable backend APIs and cloud-native apps.',
    achievements: [
      'Design and build API and data solutions with Node.js and TypeScript.',
      'Deliver end-to-end features from design to deployment with React and MySQL.',
      'Contribute to solution architecture on AWS and mentor teammates.',
      'Translate business requirements into technical solutions with stakeholders.',
    ],
    techStack: ['Node.js', 'TypeScript', 'React', 'MySQL', 'AWS', 'GitLab'],
  },
  {
    company: 'Surf Life Saving Australia',
    role: 'Senior Software Engineer',
    type: 'Full-time · Remote',
    location: 'Remote',
    start: 'May 2022',
    end: 'Feb 2025',
    summary: 'Members Portal platform and API layer.',
    achievements: [
      'Designed RESTful APIs with NestJS and TypeScript for Members Portal.',
      'Built internal frontends with Vue 3 and Quasar Framework.',
      'Managed deployments via Azure Pipelines and Container Registry.',
      'Delivered production-ready software with cross-functional teams.',
    ],
    techStack: ['NestJS', 'Vue 3', 'Quasar', 'MSSQL', 'Docker', 'Azure'],
  },
];
