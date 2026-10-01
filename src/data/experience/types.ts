export interface ExperienceJob {
  company: string;
  role: string;
  type: string;
  location: string;
  start: string;
  end: string | null;
  summary: string;
  achievements: string[];
  techStack: string[];
}
