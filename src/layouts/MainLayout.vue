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
      <router-view v-model="titleSEO" />
    </q-page-container>
  </q-layout>
</template>

<script setup>
import { ref } from 'vue'
import { useMeta } from 'quasar'

const titleSEO = 'NoliDev'
const descriptionSEO = `Hello I'm Noli a web developer that delivers responsive web apps`
const tagsSEO =
  'html, css, javascript, php, Noli, Noli Pernes, Pernes, web, web developer, web development, app development, quasar, vue, seo'
const imageSEO = `${window.location.origin}/images/profilepic.png`
// SEO Optimization
useMeta({
  title: titleSEO,
  meta: [
    {
      name: 'description',
      content: descriptionSEO,
    },
    {
      name: 'keywords',
      content: tagsSEO,
    },
    { property: 'og:title', content: titleSEO },
    { property: 'og:description', content: descriptionSEO },
    { property: 'og:image', content: imageSEO },
    { property: 'og:image:width', content: '1200' },
    { property: 'og:image:height', content: '630' },
    { property: 'og:type', content: 'website' },
    { property: 'og:url', content: `${window.location.origin}` },
    { property: 'twitter:url', content: `${window.location.origin}` },
    { property: 'twitter:card', content: 'summary_large_image' },
    { property: 'twitter:title', content: titleSEO },
    {
      property: 'twitter:description',
      content: descriptionSEO,
    },
    { property: 'twitter:image', content: imageSEO },
  ],
})

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
