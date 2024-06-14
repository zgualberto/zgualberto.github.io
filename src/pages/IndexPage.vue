<template>
  <div class="row items-center justify-center full-height">
    <div class="row justify-center items-center">
      <div
        class="col-12 text-center q-pb-lg"
        :class="{
          'text-h4': !$q.screen.lt.sm,
          'text-h5': $q.screen.lt.sm,
        }"
      >
        Hi! I'm Ziegfrid N. Gualberto
      </div>
      <div
        class="col-12 text-center row justify-center items-center"
        :class="{
          'text-h5': !$q.screen.lt.sm,
          'text-h6': $q.screen.lt.sm,
        }"
      >
        <div class="q-pr-sm">I am a</div>
        <v-typical :steps="roles" :loop="Infinity" :wrapper="'div'"></v-typical>
        <div class="blink self-center" style=""></div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import VTypical from 'vue-typical';

const roles = [
  'Web Developer',
  1000,
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
  content: '|';
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
