export interface Skill {
  label: string;
  startYear: number;
  endYear: number | null;
  rating: number;
  tags: string[];
}

export interface SkillCategory {
  category: string;
  items: Skill[];
}
