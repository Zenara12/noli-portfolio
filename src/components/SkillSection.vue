<template>
  <q-card :class="$q.screen.lt.md ? `${skillClass} column` : `${skillClass}`" flat>
    <q-card-section class="col">
      <h3 class="text-bold">My <span class="text-gradient">Skills</span></h3>
      <div class="row justify-evenly">
        <q-avatar
          v-for="(skill, index) in skills"
          :key="index"
          :size="avatarSize"
          square
          class="gradient rounded-borders q-ma-sm"
        >
          <q-img :src="'images/' + skill.icon">
            <q-tooltip>
              {{ skill.name }}
            </q-tooltip>
          </q-img>
        </q-avatar>
      </div>
    </q-card-section>

    <q-card-section class="col">
      <h3 class="text-bold">My Experiences</h3>
      <q-card
        v-for="exp in experiences"
        :key="exp.title"
        class="q-mb-md bg-warning text-white w-full"
      >
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
import { ref } from 'vue'
import { useQuasar } from 'quasar'

const $q = useQuasar()

const skillClass = defineModel()

const avatarSize = '4rem'

const skills = ref([
  { name: 'HTML', icon: 'html.png' },
  { name: 'CSS', icon: 'css.png' },
  { name: 'JAVASCRIPT', icon: 'javascript.png' },
  { name: 'JQUERY', icon: 'jquery.png' },
  { name: 'PHP', icon: 'php.png' },
  { name: 'PYTHON', icon: 'python.png' },
  { name: 'JAVA', icon: 'java.png' },
  { name: 'VUE', icon: 'vue.png' },
  { name: 'QUASAR', icon: 'quasar.png' },
  { name: 'NODE EXPRESS', icon: 'nodeexpress.png' },
  { name: 'LARAVEL', icon: 'laravel.png' },
  { name: 'BOOTSTRAP', icon: 'bootstrap.png' },
  { name: 'TAILWIND', icon: 'tailwind.png' },
  { name: 'MYSQL', icon: 'mysql.png' },
  { name: 'SQLITE', icon: 'sqlite.png' },
  { name: 'SUPABASE', icon: 'supabase.png' },
  { name: 'GIT', icon: 'git.png' },
  { name: 'GITHUB', icon: 'github.png' },
  { name: 'ANDROID STUDIO', icon: 'androidstudio.png' },
  { name: 'CAPACITOR', icon: 'capacitor.png' },
  { name: 'ARDUINO', icon: 'arduino.png' },
  { name: 'POSTMAN', icon: 'postman.png' },
  { name: 'VSCODE', icon: 'vsc.png' },
  { name: 'XAMPP', icon: 'xampp.png' },
  { name: 'CANVA', icon: 'canva.png' },
  { name: 'FIGMA', icon: 'figma.png' },
])
const experiences = ref([
  {
    title: 'Freelance',
    company: '',
    description: `Web Developer: Apr 2023 – Present
                  <ul>
                      <li>Designed and developed responsive websites and web applications tailored to client requirements, ensuring functionality, performance, and user experience.</li>
                  </ul>
                  IT Technician & Content Developer: Mar 2020 – Present
                  <ul>
                    <li>Provided professional photo and video editing services for various clients through online job platforms and in the locality, enhancing visual content for marketing, social media, and personal projects.</li>
                  </ul>`,
    period: '',
  },
  {
    title: 'IT Instructor',
    company: 'Saint Aloysius Institute of Technology',
    description: `
    <ul>
      <li>
        Taught Grade 11 Students Java Programming from Basic to OOP principles, and trained them to enhance their      problem-solving skills.
      </li>
      <li>
        Trained Gr. 12 Students on how to perform Computer System Servicing – NC II / Computer Trouble Shooting & Networking
      </li>
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
