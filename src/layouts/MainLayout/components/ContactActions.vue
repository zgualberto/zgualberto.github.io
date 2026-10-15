<template>
  <div class="row items-center no-wrap" :class="compact ? 'q-gutter-xs' : 'q-gutter-sm'">
    <q-btn
      v-for="action in actions"
      :key="action.icon"
      flat
      dense
      round
      :icon="action.icon"
      :href="action.href"
      :target="action.target"
      class="btn--no-hover"
      size="sm"
    />
  </div>
</template>

<script setup lang="ts">
defineProps<{ compact?: boolean }>();

const actions = [
  { icon: 'fa-brands fa-viber', href: 'viber://add?number=639176523658', target: undefined },
  { icon: 'fa-brands fa-whatsapp', href: 'https://wa.me/639176523658', target: '_blank' },
  { icon: 'fa-solid fa-comment-sms', href: 'sms://+639524676204', target: undefined },
  { icon: 'fa-brands fa-linkedin', href: 'https://www.linkedin.com/in/ziegfrid-gualberto/', target: '_blank' },
];
</script>
