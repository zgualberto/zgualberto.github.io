<template>
  <div class="row items-center justify-center" style="min-height: calc(100vh - 220px)">
    <div class="drac-surface q-pa-xl text-center" style="max-width: 720px; width: 100%">
      <div class="font-mono text-left q-mb-md" style="color: #6272a4">
        <span style="color: #ff5555">●</span>
        <span style="color: #ffb86c"> ●</span>
        <span style="color: #50fa7b"> ●</span>
        <span class="q-ml-md">~/portfolio — zsh</span>
      </div>
      <div
        class="col-12 font-mono"
        :class="{
          'text-h4': !$q.screen.lt.sm,
          'text-h5': $q.screen.lt.sm,
        }"
      >
        Hi! I'm <span class="text-drac-purple text-weight-bold">Ziegfrid</span>
      </div>
      <div
        class="col-12 text-center row justify-center items-center q-mt-md"
        :class="{
          'text-h5': !$q.screen.lt.sm,
          'text-h6': $q.screen.lt.sm,
        }"
      >
        <div class="q-pr-sm font-mono" style="color: #9aa3c7">$ I am a</div>
        <v-typical :steps="roles" :loop="Infinity" :wrapper="'div'" class="font-mono text-drac-pink"></v-typical>
        <div class="blink self-center" style=""></div>
      </div>
      <div class="row q-gutter-sm justify-center q-mt-lg">
        <q-btn
          unelevated
          no-caps
          to="/projects"
          label="View work →"
          class="font-mono text-weight-bold"
          style="background: #8be9fd; color: #282a36"
        />
        <q-btn
          outline
          no-caps
          href="https://freelance-guy.github.io/"
          target="_blank"
          rel="noopener"
          label="Hire me ↗"
          class="font-mono"
          style="border-color: #44475a; color: #f8f8f2"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import VTypical from 'vue-typical';

const roles = [
  'Backend Developer',
  1000,
  'Full-Stack Developer',
  1000,
  'Software Consultant',
  1000,
];
</script>

<style lang="scss">
.blink {
  margin-bottom: 3px;
}
.blink::after {
  content: '▊';
  color: #50fa7b;
  animation: blink 1s infinite step-start;
}

@keyframes blink {
  50% {
    opacity: 0;
  }
}

@media only screen and (max-width: var(--q-size-sm)) {
  .blink {
    margin-bottom: 0px;
  }
}
</style>
