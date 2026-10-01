import { computed, type Ref } from 'vue';
import type { SkillCategory } from 'src/data/skills/types';

export function useFilteredSkills(
  all: SkillCategory[],
  search: Ref<string>,
  precise: Ref<boolean>
) {
  return computed(() => {
    if (!search.value) return all;

    const term = search.value.toLowerCase();

    return all
      .map((group) => {
        const items = group.items.filter((skill) => hasMatch(skill.label, skill.tags, term, precise.value));

        if (items.length === 0) return null;

        return { ...group, items };
      })
      .filter((group): group is SkillCategory => group !== null);
  });
}

function hasMatch(label: string, tags: string[], term: string, precise: boolean): boolean {
  if (precise) return label.toLowerCase().includes(term);

  return tags.includes(term);
}
