import type { SkillCategory } from './types';

export const tools: SkillCategory = {
  category: 'Development Tools',
  items: [
    { label: 'Git', startYear: 2015, endYear: null, rating: 7, tags: ['git', 'vcs', 'devops', 'github'] },
    { label: 'GitHub', startYear: 2015, endYear: null, rating: 7, tags: ['github', 'git', 'devops', 'ci'] },
    { label: 'GitLab', startYear: 2016, endYear: null, rating: 6, tags: ['gitlab', 'git', 'devops', 'ci'] },
    { label: 'Linux (Debian)', startYear: 2015, endYear: null, rating: 7, tags: ['linux', 'debian', 'devops', 'server'] },
    { label: 'WSL', startYear: 2020, endYear: null, rating: 6, tags: ['wsl', 'windows', 'linux', 'dev'] },
  ],
};
