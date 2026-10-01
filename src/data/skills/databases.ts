import type { SkillCategory } from './types';

export const databases: SkillCategory = {
  category: 'Databases & ORM',
  items: [
    { label: 'MySQL', startYear: 2012, endYear: null, rating: 7, tags: ['mysql', 'sql', 'database', 'backend'] },
    { label: 'MSSQL', startYear: 2022, endYear: 2025, rating: 5, tags: ['mssql', 'sql', 'database', 'backend'] },
    { label: 'SQLite', startYear: 2024, endYear: null, rating: 6, tags: ['sqlite', 'sql', 'database', 'mobile'] },
    { label: 'Redis', startYear: 2016, endYear: null, rating: 6, tags: ['redis', 'cache', 'nosql', 'backend'] },
    { label: 'TypeORM', startYear: 2022, endYear: null, rating: 6, tags: ['typeorm', 'orm', 'database', 'node'] },
    { label: 'Sequelize', startYear: 2018, endYear: 2019, rating: 5, tags: ['sequelize', 'orm', 'database', 'node'] },
    { label: 'Eloquent', startYear: 2016, endYear: 2020, rating: 6, tags: ['eloquent', 'orm', 'laravel', 'php'] },
  ],
};
