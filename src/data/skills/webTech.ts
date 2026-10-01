import type { SkillCategory } from './types';

export const webTech: SkillCategory = {
  category: 'HTTP & Web Technologies',
  items: [
    { label: 'JSON', startYear: 2012, endYear: null, rating: 8, tags: ['json', 'api', 'http', 'web'] },
    { label: 'Axios', startYear: 2018, endYear: null, rating: 7, tags: ['axios', 'http', 'api', 'frontend'] },
    { label: 'Fetch API', startYear: 2018, endYear: null, rating: 7, tags: ['fetch', 'http', 'api', 'frontend'] },
    { label: 'Socket.io', startYear: 2022, endYear: 2023, rating: 4, tags: ['socket', 'realtime', 'websocket', 'node'] },
  ],
};
