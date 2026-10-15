<template>
  <q-layout view="hHh lpR fFf" style="overflow-x: hidden">
    <q-header class="text-white" style="background: #282a36; border-bottom: 1px solid #44475a">
      <q-toolbar class="q-px-md q-py-xs">
        <q-toolbar-title class="font-mono text-weight-bold" shrink>
          <router-link to="/" class="text-white" style="text-decoration: none">
            <span class="text-drac-purple">~/</span>zgualberto<span class="text-drac-pink">▊</span>
          </router-link>
        </q-toolbar-title>
        <q-space />
        <div class="row items-center q-gutter-md gt-md">
          <q-btn flat no-caps to="/" label="Home" class="font-mono q-px-md" exact />
          <q-btn flat no-caps to="/skills" label="Skills" class="font-mono q-px-md" />
          <q-btn flat no-caps to="/experience" label="Experience" class="font-mono q-px-md" />
          <q-btn flat no-caps to="/projects" label="Projects" class="font-mono q-px-md" />
          <q-btn
            unelevated
            no-caps
            href="https://freelance-guy.github.io/"
            target="_blank"
            rel="noopener"
            label="Hire Me ↗"
            class="font-mono text-weight-bold q-px-md q-ml-md"
            style="background: #8be9fd; color: #282a36"
          />
        </div>
        <q-btn flat dense round icon="fa-solid fa-bars" class="lt-lg" aria-label="Menu">
          <q-menu dark style="background: #343746">
            <q-list style="min-width: 200px">
              <q-item clickable v-ripple to="/" exact v-close-popup>
                <q-item-section class="font-mono">Home</q-item-section>
              </q-item>
              <q-item clickable v-ripple to="/skills" v-close-popup>
                <q-item-section class="font-mono">Skills</q-item-section>
              </q-item>
              <q-item clickable v-ripple to="/experience" v-close-popup>
                <q-item-section class="font-mono">Experience</q-item-section>
              </q-item>
              <q-item clickable v-ripple to="/projects" v-close-popup>
                <q-item-section class="font-mono">Projects</q-item-section>
              </q-item>
              <q-separator dark />
              <q-item
                clickable
                v-ripple
                href="https://freelance-guy.github.io/"
                target="_blank"
                v-close-popup
              >
                <q-item-section class="font-mono text-drac-purple">Hire Me ↗</q-item-section>
              </q-item>
            </q-list>
          </q-menu>
        </q-btn>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <q-page
        class="q-py-md page-container"
        :class="{ 'q-px-md': !$q.screen.lt.sm, 'q-px-sm': $q.screen.lt.sm }"
      >
        <router-view />
      </q-page>
    </q-page-container>

    <q-footer style="background: #282a36; border-top: 1px solid #44475a">
      <div class="q-px-md q-py-sm font-mono text-caption" style="color: #9aa3c7">
        <div class="row items-center justify-between no-wrap q-col-gutter-sm">
          <span
            class="cursor-pointer ellipsis"
            @click="copyEmail"
            title="Click to copy email"
          >
            ziegfrid.gualberto@gmail.com
            <q-icon size="14px" class="q-pl-xs" :name="mailIcon" />
          </span>
          <div class="row items-center no-wrap q-gutter-xs">
            <ContactActions compact />
          </div>
        </div>
        <div class="text-center q-pt-xs" style="color: #6272a4">
          © {{ year }} · Built with Vue + Quasar ·
          <a
            href="https://freelance-guy.github.io/"
            target="_blank"
            rel="noopener"
            class="text-drac-purple"
            >freelance-guy</a
          >
        </div>
      </div>
    </q-footer>
  </q-layout>
</template>

<script setup lang="ts">
import { copyToClipboard } from 'quasar';
import { computed, ref } from 'vue';
import ContactActions from './MainLayout/components/ContactActions.vue';

defineOptions({ name: 'MainLayout' });

const year = computed(() => new Date().getFullYear());
const mailIcon = ref('fa-regular fa-copy');

function copyEmail() {
  copyToClipboard('ziegfrid.gualberto@gmail.com');
  mailIcon.value = 'fa-solid fa-clipboard-check';
}
</script>

<style lang="scss" scoped>
.page-container {
  max-width: 1100px;
  margin: 0 auto;
  width: 100%;
}
</style>
