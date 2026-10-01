import type { SkillCategory } from './types';

export const cloudDevOps: SkillCategory = {
  category: 'Cloud & DevOps',
  items: [
    { label: 'Docker', startYear: 2019, endYear: null, rating: 6, tags: ['docker', 'devops', 'container', 'deploy'] },
    { label: 'Docker Compose', startYear: 2019, endYear: null, rating: 6, tags: ['docker', 'compose', 'devops', 'container'] },
    { label: 'AWS S3', startYear: 2019, endYear: null, rating: 6, tags: ['aws', 's3', 'cloud', 'storage'] },
    { label: 'AWS Lightsail', startYear: 2019, endYear: 2020, rating: 6, tags: ['aws', 'lightsail', 'cloud', 'hosting'] },
    { label: 'AWS IAM / CLI', startYear: 2019, endYear: null, rating: 5, tags: ['aws', 'iam', 'cli', 'cloud'] },
    { label: 'Azure Pipelines', startYear: 2020, endYear: null, rating: 5, tags: ['azure', 'pipelines', 'devops', 'ci'] },
    { label: 'Azure App Service', startYear: 2022, endYear: 2025, rating: 5, tags: ['azure', 'cloud', 'deploy', 'paas'] },
    { label: 'Jenkins', startYear: 2018, endYear: 2019, rating: 3, tags: ['jenkins', 'ci', 'devops', 'pipeline'] },
  ],
};
