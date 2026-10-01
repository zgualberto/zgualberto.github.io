import type { SkillCategory } from './types';

export const architecture: SkillCategory = {
  category: 'Architecture & Engineering',
  items: [
    { label: 'Microservices', startYear: 2018, endYear: null, rating: 7, tags: ['microservices', 'architecture', 'backend'] },
    { label: 'MVC', startYear: 2012, endYear: null, rating: 8, tags: ['mvc', 'architecture', 'backend', 'pattern'] },
    { label: 'SOLID', startYear: 2015, endYear: null, rating: 7, tags: ['solid', 'architecture', 'clean code'] },
    { label: 'Design Patterns', startYear: 2016, endYear: null, rating: 6, tags: ['patterns', 'architecture', 'design'] },
    { label: 'Agile / Scrum', startYear: 2015, endYear: null, rating: 7, tags: ['agile', 'scrum', 'team', 'sprint'] },
    { label: 'TDD', startYear: 2017, endYear: null, rating: 5, tags: ['tdd', 'testing', 'quality', 'unit'] },
  ],
};
