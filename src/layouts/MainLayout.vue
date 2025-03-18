<template>
  <q-layout view="lHh Lpr lFf">
    <q-header flat class="gt-sm">
      <q-toolbar class="content-between q-pa-lg" flat>
        <q-toolbar-title>
          <q-avatar>
            <q-img :src="noriLogo" :ratio="1" loading="lazy" spinner-color="secondary" />
          </q-avatar>
        </q-toolbar-title>
        <q-btn
          v-for="(nav, index) in navS"
          :label="nav.name"
          :icon="nav.icon"
          :key="index"
          :ripple="false"
          :class="btnHover === index ? 'text-secondary' : 'text-primary'"
          class="bg-transparent"
          @mouseover="btnHover = index"
          @mouseleave="btnHover = null"
          @click="scrollToSection(nav.to)"
          flat
          unelevated
        />
      </q-toolbar>
    </q-header>

    <q-footer elevated class="lt-md">
      <q-toolbar class="flex justify-evenly items-center">
        <q-btn
          v-for="(nav, index) in navS"
          :icon="nav.icon"
          :key="index"
          :ripple="false"
          :label="nav.name"
          :class="btnHover === index ? 'text-secondary' : 'text-primary'"
          class="bg-transparent"
          @mouseover="btnHover = index"
          @mouseleave="btnHover = null"
          @click="scrollToSection(nav.to)"
          flat
          unelevated
        />
      </q-toolbar>
    </q-footer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup>
import { ref } from 'vue'

const scrollToSection = (href) => {
  const section = document.querySelector(href)
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' })
  }
}
const noriLogo = `icons/favicon-96x96.png`
const btnHover = ref(false)
const navS = [
  {
    name: 'Skills',
    to: '#skills',
    icon: 'mdi-code-braces-box',
  },
  {
    name: 'Projects',
    to: '#projects',
    icon: 'mdi-file-document-multiple-outline',
  },
  {
    name: 'About',
    to: '#about',
    icon: 'person',
  },
  {
    name: 'Contact',
    to: '#contact',
    icon: 'contact_phone',
  },
]
</script>

<style lang="scss">
/* width */
::-webkit-scrollbar {
  width: 5px;
}

/* Track */
::-webkit-scrollbar-track {
  box-shadow: inset 0 0 5px grey;
  border-radius: 5px;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: $secondary;
  border-radius: 5px;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #ffae00c2;
}
body {
  background: linear-gradient(to right, #0f0f0f, #121238);
}
.q-toolbar {
  background: linear-gradient(to right, #0f0f0f, #121238);
}
</style>
