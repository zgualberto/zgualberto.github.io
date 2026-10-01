import type { SkillCategory } from './types';

export const aiTools: SkillCategory = {
  category: 'AI Development Tools',
  items: [
    { label: 'ChatGPT', startYear: 2023, endYear: null, rating: 7, tags: ['ai', 'chatgpt', 'productivity', 'llm'] },
    { label: 'GitHub Copilot', startYear: 2023, endYear: null, rating: 7, tags: ['ai', 'copilot', 'productivity', 'code'] },
    { label: 'Cursor', startYear: 2024, endYear: null, rating: 6, tags: ['ai', 'cursor', 'ide', 'productivity'] },
    { label: 'Ollama', startYear: 2024, endYear: null, rating: 5, tags: ['ai', 'ollama', 'llm', 'local'] },
    { label: 'LM Studio', startYear: 2024, endYear: null, rating: 5, tags: ['ai', 'lmstudio', 'llm', 'local'] },
  ],
};
