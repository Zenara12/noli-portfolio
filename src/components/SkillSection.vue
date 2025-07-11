<template>
  <q-card :class="$q.screen.lt.md ? `${skillClass} column` : `${skillClass}`" flat>
    <q-card-section class="col">
      <h3 class="text-bold">My <span class="text-gradient">Skills</span></h3>
      <q-card class="q-mb-md bg-warning w-full">
        <q-card-section>
          <div class="text-h6 text-gradient">Front-end</div>
          <div class="row justify-beetwen">
            <q-chip outline :ripple="false" color="primary" text-color="white" :size="avatarSize"
              v-for="(skill, index) in frontEndTechnologies" :key="index">
              <q-avatar class="gradient">
                <q-img :src="'images/' + skill.icon">
                  <q-tooltip>
                    {{ skill.name }}
                  </q-tooltip>
                </q-img>
              </q-avatar>
              {{ skill.name }}
            </q-chip>
          </div>
        </q-card-section>
        <q-card-section>
          <div class="text-h6 text-gradient">Back-end</div>
          <div class="row justify-beetwen">
            <q-chip outline :ripple="false" color="primary" text-color="white" :size="avatarSize"
              v-for="(skill, index) in backEndTechnologies" :key="index">
              <q-avatar class="gradient">
                <q-img :src="'images/' + skill.icon">
                  <q-tooltip>
                    {{ skill.name }}
                  </q-tooltip>
                </q-img>
              </q-avatar>
              {{ skill.name }}
            </q-chip>
          </div>
        </q-card-section>
        <q-card-section>
          <div class="text-h6 text-gradient">Tools</div>
          <div class="row justify-beetwen">
            <q-chip outline :ripple="false" color="primary" text-color="white" :size="avatarSize"
              v-for="(skill, index) in tools" :key="index">
              <q-avatar class="gradient">
                <q-img :src="'images/' + skill.icon">
                  <q-tooltip>
                    {{ skill.name }}
                  </q-tooltip>
                </q-img>
              </q-avatar>
              {{ skill.name }}
            </q-chip>
          </div>
        </q-card-section>
      </q-card>
    </q-card-section>

    <q-card-section class="col">
      <h3 class="text-bold">My Experiences</h3>
      <q-card v-for="exp in experiences" :key="exp.title" class="q-mb-md bg-warning text-white w-full">
        <q-card-section>
          <q-icon name="work" size="xl" color="white" />
          <div class="row items-center justify-between">
            <div class="text-h6 text-gradient">{{ exp.title }}</div>
            <div class="text-grey-5">{{ exp.period }}</div>
          </div>
          <div class="text-orange">{{ exp.company }}</div>
          <div class="text-grey-5" v-html="exp.description"></div>
        </q-card-section>
      </q-card>
    </q-card-section>
  </q-card>
</template>

<script setup>
import { computed, ref } from 'vue'
import { useQuasar } from 'quasar'

const $q = useQuasar()

const skillClass = defineModel()

const avatarSize = computed(() => ($q.screen.lt.md ? 'sm' : 'lg'))

const frontEndTechnologies = [
  { name: 'Html', icon: 'html.png' },
  { name: 'Css', icon: 'css.png' },
  { name: 'Javascript', icon: 'javascript.png' },
  { name: 'JQuery', icon: 'jquery.png' },
  { name: 'TypeScript', icon: 'typescript.png' },
  { name: 'Vue', icon: 'vue.png' },
  { name: 'Nuxt', icon: 'nuxt.svg' },
  { name: 'Quasar', icon: 'quasar.png' },
  { name: 'React', icon: 'reactjs.png' },
  { name: 'ReactNative', icon: 'react-native.png' },
  { name: 'NextJS', icon: 'nextjs.png' },
  { name: 'Bootstrap', icon: 'bootstrap.png' },
  { name: 'Tailwind', icon: 'tailwind.png' },
]

const backEndTechnologies = [
  { name: 'Php', icon: 'php.png' },
  { name: 'NodeJS', icon: 'nodeexpress.png' },
  { name: 'ExpressJS', icon: 'express-js.png' },
  { name: 'Laravel', icon: 'laravel.png' },
  { name: 'Mysql', icon: 'mysql.png' },
  { name: 'Sqlite', icon: 'sqlite.png' },
  { name: 'Supabase', icon: 'supabase.png' },
]

const tools = [
  { name: 'Git', icon: 'git.png' },
  { name: 'Github', icon: 'github.png' },
  { name: 'Android studio', icon: 'androidstudio.png' },
  { name: 'Capacitor', icon: 'capacitor.png' },
  { name: 'Postman', icon: 'postman.png' },
  { name: 'Vscode', icon: 'vsc.png' },
  { name: 'Xampp', icon: 'xampp.png' },
  { name: 'Canva', icon: 'canva.png' },

  { name: 'Figma', icon: 'figma.png' },
]

const experiences = ref([
  {
    title: 'Freelance',
    company: '',
    description: `Web Developer
                  <ul>
                      <li>Designed and developed responsive websites and web applications tailored to client requirements, ensuring functionality, performance, and user experience.</li>
                      <li>Delivered end-to-end solutions across multiple freelance projects, including mobile wellness apps, bartering
                      platforms, academic systems, and data-driven dashboards. </li>
                      <li> Ensured optimal performance, intuitive UX/UI, and seamless integration with back-end services using tools
like NuxtJS, Quasar, Supabase, and NodeJS. </li>
                  </ul>`,
    period: 'Apr 2023 – Present',
  },
  {
    title: 'IT Instructor',
    company: 'Saint Aloysius Institute of Technology',
    description: `
    <ul>
      <li>Instructed Grade 11 students in Java programming, from fundamentals to OOP, with emphasis on problem-solving.</li>
      <li>Trained Grade 12 students in Computer System Servicing (NC II), covering troubleshooting, diagnostics, and networking.</li>
      <li>Developed a simple questionnaire program used for student quizzes and entrance examinations.</li>
      <li>Organized and maintained the computer laboratory, ensuring readiness for programming classes and computer system servicing activities.</li>
      </ul>
    `,
    period: 'June 2019 - July 2020',
  },
])
</script>

<style scoped>
.gradient {
  background: linear-gradient(45deg, orange, pink);
}
</style>
