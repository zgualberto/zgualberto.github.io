<template>
  <div class="self-end row justify-around full-width q-mb-md">
    <q-btn v-for="action in actions" :key="action.icon" flat :icon="action.icon" :href="action.href" :target="action.target" class="btn--no-hover" />
  </div>
</template>

<script setup lang="ts">
const actions = [
  { icon: 'fa-brands fa-viber', href: 'viber://add?number=639176523658', target: undefined },
  { icon: 'fa-brands fa-whatsapp', href: 'https://wa.me/639176523658', target: '_blank' },
  { icon: 'fa-solid fa-comment-sms', href: 'sms://+639176523658', target: undefined },
  { icon: 'fa-brands fa-linkedin', href: 'https://www.linkedin.com/in/ziegfrid-gualberto/', target: '_blank' },
  { icon: 'fa-brands fa-github', href: 'https://github.com/zgualberto', target: '_blank' },
];
</script>
