import type { SkillCategory } from './types';

export const backend: SkillCategory = {
  category: 'Backend Development',
  items: [
    { label: 'Node.js', startYear: 2018, endYear: null, rating: 6.5, tags: ['node', 'javascript', 'backend', 'api'] },
    { label: 'NestJS', startYear: 2022, endYear: null, rating: 6.5, tags: ['nestjs', 'node', 'backend', 'api'] },
    { label: 'Express.js', startYear: 2018, endYear: null, rating: 6.5, tags: ['express', 'node', 'backend', 'api'] },
    { label: 'Laravel', startYear: 2016, endYear: null, rating: 8, tags: ['laravel', 'php', 'backend', 'api'] },
    { label: 'REST API Design', startYear: 2015, endYear: null, rating: 8, tags: ['rest', 'api', 'restful', 'backend'] },
    { label: 'JWT Auth', startYear: 2018, endYear: null, rating: 7, tags: ['jwt', 'auth', 'security', 'api'] },
    { label: 'OAuth 2.0', startYear: 2019, endYear: null, rating: 6, tags: ['oauth', 'auth', 'security', 'api'] },
    { label: 'Swagger / OpenAPI', startYear: 2018, endYear: null, rating: 6, tags: ['swagger', 'openapi', 'api', 'docs'] },
  ],
};
