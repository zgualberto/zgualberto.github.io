import type { SkillCategory } from './types';

export const languages: SkillCategory = {
  category: 'Programming Languages',
  items: [
    {
      label: 'JavaScript',
      startYear: 2012,
      endYear: null,
      rating: 7,
      tags: ['javascript', 'js', 'web', 'frontend'],
    },
    {
      label: 'TypeScript',
      startYear: 2022,
      endYear: null,
      rating: 6.5,
      tags: ['typescript', 'ts', 'node', 'web'],
    },
    {
      label: 'PHP',
      startYear: 2012,
      endYear: null,
      rating: 8,
      tags: ['php', 'backend', 'laravel', 'api'],
    },
    {
      label: 'SQL',
      startYear: 2012,
      endYear: null,
      rating: 7,
      tags: ['sql', 'mysql', 'database', 'backend'],
    },
    {
      label: 'Python (basic knowledge)',
      startYear: new Date().getFullYear(),
      endYear: null,
      rating: 3,
      tags: ['python', 'backend', 'scripting'],
    },
  ],
};
