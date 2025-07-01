<template>
  <q-page class="text-primary" style="max-width: 1200px; margin: auto">
    <!---Introduction-->
    <IntroductionSection :introClass="introClass" :contactInfo="contactInfo"
      v-bind:style="`margin-top:${separatorHeight};margin-bottom:${separatorHeight}`" />

    <!---Skills-->
    <SkillSection v-model="sectionClass" v-bind:style="`margin-bottom:${separatorHeight}`" id="skills" />
    <ProjectSection v-model:projectClass="projectClass" v-model:screenSize="screenSize"
      v-model:projectList="projectList" v-bind:style="`margin-bottom:${separatorHeight}`" id="projects" />
    <!--- About Me -->
    <AboutMeSection v-model:aboutClass="aboutClass" v-model:projectListSize="projectList.length"
      v-bind:style="`margin-bottom:${separatorHeight}`" id="about" />

    <!--Contact-->
    <ContactSection :contactClass="contactClass" :contactInfo="contactInfo"
      v-bind:style="`margin-bottom:${separatorHeight}`" id="contact" />
    <div class="flex flex-center q-mb-xl">{{ footNote }}</div>

    <q-page-scroller position="bottom-right" :scroll-offset="150" :offset="[18, 18]">
      <q-btn fab icon="keyboard_arrow_up" color="secondary" />
    </q-page-scroller>
  </q-page>
</template>

<script setup>
import { ref, watch, computed, onMounted, defineAsyncComponent } from 'vue'
import { useQuasar } from 'quasar'

const IntroductionSection = defineAsyncComponent(
  () => import('src/components/IntroductionSection.vue'),
)
const AboutMeSection = defineAsyncComponent(() => import('src/components/AboutMeSection.vue'))
const SkillSection = defineAsyncComponent(() => import('src/components/SkillSection.vue'))
const ProjectSection = defineAsyncComponent(() => import('src/components/ProjectSection.vue'))
const ContactSection = defineAsyncComponent(() => import('src/components/ContactSection.vue'))

const $q = useQuasar()

const screenSize = computed(() => $q.screen.name)

const date = new Date()
const currentYear = date.getFullYear()
const footNote = `© ${currentYear} ${document.querySelector('title').innerHTML}. All rights reserved.`

const separatorHeight = ref('10rem')
const introClass = ref('flex justify-evenly items-center bg-transparent')
const aboutClass = ref('flex bg-transparent q-pt-xl')
const sectionClass = ref('flex justify-center bg-transparent q-pt-xl q-mx-auto')
const projectClass = ref('flex column flex-center')
const contactClass = ref('flex items-start justify-evenly bg-transparent bg-warning ')

const contactInfo = [
  { label: 'Phone', value: '+63951-366-4700', icon: 'phone', link: '#' },
  {
    label: 'Facebook',
    value: 'fb.com/nolipernes',
    icon: 'mdi-facebook',
    link: 'https://www.facebook.com/nolipernes03',
  },
  {
    label: 'GitHub',
    value: 'github.com/Zenara12',
    icon: 'mdi-github',
    link: 'https://github.com/Zenara12',
  },
  {
    label: 'LinkedIn',
    value: 'linkedin.com/nolipernes',
    icon: 'mdi-linkedin',
    link: 'https://www.linkedin.com/in/noli-pernes/',
  },
  {
    label: 'Email',
    value: 'nolipernes@gmail.com',
    icon: 'mdi-google',
    link: 'mailto:nolipernes@gmail.com',
  },
]

const projectList = ref([
  {
    name: 'Dishlicious',
    url: [
      {
        link: 'https://dishlicious.vercel.app/',
        anchorName: 'Dishlicious',
      },
    ],
    tabGroup: 'Web',
    description: 'Dish recipes for you to cook!',
    imgPath: 'dishlicious/dish1.png',
    folderImages: [
      'dishlicious/dish1.png',
      'dishlicious/dish2.png',
      'dishlicious/dish3.png',
      'dishlicious/dish4.png',
    ],
    tags: ['NuxtJS', 'VueJS', 'Typescript', 'Tailwind', 'SEO'],
  },
  {
    name: 'Alon',
    url: [
      {
        link: 'https://github.com/Zenara12/alonMentalTracker',
        anchorName: 'github.com/Alon',
      },
      {
        link: 'https://drive.google.com/drive/folders/1zEvrarYrLo7qc_YvKSSwTePKtyV0Nenu?usp=sharing',
        anchorName: 'alon.apk',
      }
    ],
    tabGroup: 'Mobile',
    description: `Mental tracker mobile app`,
    imgPath: 'alon/alon.jpg',
    folderImages: [
      'alon/LoadingScreen.jpg',
      'alon/Home.jpg',
      'alon/Profile.jpg',
      'alon/Settings.jpg',
      'alon/Breathing.jpg',
      'alon/Excercise.jpg',
      'alon/Mood.jpg',
      'alon/Motivation.jpg',
      'alon/Journal.jpg',
      'alon/JournalCamera.jpg',
      'alon/JournalAudio.jpg',
      'alon/JournalNote.jpg',
    ],
    tags: ['Quasar', 'VueJS', 'Pinia', 'Capacitor', 'AndroidStudio'],
  },
  {
    name: 'React-Expo Task App',
    url: [
      {
        link: 'https://github.com/Zenara12/todo-expo.git',
        anchorName: 'github.com/expo-taskapp',
      }
    ],
    tabGroup: 'Mobile',
    description: `Task App using React Native and Expo and Zustand for State Management`,
    imgPath: 'taskapp/home.png',
    folderImages: [
      'taskapp/home.png',
      'taskapp/add.png',
      'taskapp/viewupdate.png',
      'taskapp/delete.png',
    ],
    tags: ['React Native', 'TypeScript', 'Expo', 'Zustand'],
  },
  {
    name: 'BarterDito',
    url: [{
      link: 'https://barterdito.com',
      anchorName: 'barterdito.com',
    }],
    tabGroup: 'Web',
    description: `A web app that is Specifically for trade/barter of items`,
    imgPath: 'barterdito/barterdito.png',
    folderImages: ['barterdito/barterdito.png'],
    tags: ['NuxtJS', 'Pinia', 'VueJS', 'Tailwind', 'Node', 'ExpressJS'],
  },
  {
    name: 'NextJS Blog',
    url: [{
      link: 'https://github.com/Zenara12/codebility-assessment/tree/noli-pernes/fullstack-1-2',
      anchorName: 'github.com/NextJS-Blog',
    }],
    tabGroup: 'Web',
    description: `A Blog App using NextJS Navigation, API, Form Actions, and ModuleCSS for responsiveness for codebility assessment`,
    imgPath: 'nextjsblogcodebility/DesktopDisplay.png',
    folderImages: [
      'nextjsblogcodebility/DesktopDisplay.png',
      'nextjsblogcodebility/MobileDisplay.png',
      'nextjsblogcodebility/SingleDestktop.png',
      'nextjsblogcodebility/SingleMobile.png',
    ],
    tags: ['NextJS', 'CSS', 'TypeScript'],
  },
  {
    name: 'Task Web App',
    url: [
      {
        link: 'https://github.com/Zenara12/react-sprobe',
        anchorName: 'github.com/FE',
      },
      {
        link: 'https://github.com/Zenara12/laravel-api',
        anchorName: 'github.com/BE',
      },
    ],
    tabGroup: 'Web',
    description: `Task Web App with ReactJS with Tailwind as Frontend and LaravelAPI MySQL as backend`,
    imgPath: 'task-react-laravel-api/dashboard.png',
    folderImages: [
      'task-react-laravel-api/dashboard.png',
      'task-react-laravel-api/sign-in.png',
      'task-react-laravel-api/sign-up.png',
      'task-react-laravel-api/task.png',
    ],
    tags: ['React', 'Tailwind', 'Laravel', 'MySQL', 'Axios', 'Vite'],
  },
  {
    name: 'Online Alumni Tracer',
    url: [{
      link: 'https://github.com/Zenara12/alumnitracer-main',
      anchorName: 'github.com/alumnitracer',
    }],
    tabGroup: 'Web',
    description: `A website that gathers the where about's and career's of alumni's  `,
    imgPath: 'onlinealumnitracer/alumnitracer.png',
    folderImages: [
      'onlinealumnitracer/Signin.png',
      'onlinealumnitracer/Signup.png',
      'onlinealumnitracer/ProfilePage.png',
      'onlinealumnitracer/HomePage.png',
      'onlinealumnitracer/AnnouncementPage.png',
      'onlinealumnitracer/JobOfferPage.png',
      'onlinealumnitracer/ForumPage.png',
      'onlinealumnitracer/DeanDashBoard.png',
      'onlinealumnitracer/Degreetable.png',
      'onlinealumnitracer/AlumniTable.png',
      'onlinealumnitracer/User-UserTable.png',
      'onlinealumnitracer/ReportsCharts.png',
    ],
    tags: ['VueJS', 'TypeScript', 'Pinia', 'Supabase', 'Vuetify'],
  },
  {
    name: 'Genshin Drafting',
    url: [{
      link: 'https://github.com/Zenara12/genshin-drafting',
      anchorName: 'github.com/genshin-drafting',
    }],
    tabGroup: 'Web',
    description: `Drafting System for Genshin Game custom tournaments `,
    imgPath: 'genshindrafting/genshindrafting.png',
    folderImages: ['genshindrafting/genshindrafting.png'],
    tags: ['VueJS', 'Supabase', 'CSS'],
  },
  {
    name: 'Where Are You Now:Alumni Tracer Management System',
    url: [{
      link: 'https://github.com/Zenara12/wayn',
      anchorName: 'github.com/wayn',
    }],
    tabGroup: 'Web',
    description: `WAYN an Alumni Tracer Management System`,
    imgPath: 'atmwlc/Profile.png',
    folderImages: [
      'atmwlc/Login.png',
      'atmwlc/Profile.png',
      'atmwlc/AccountSettings.png',
      'atmwlc/Home.png',
      'atmwlc/AcademicYear.png',
    ],
    tags: ['HTML', 'Javascript', 'CSS', 'Ajax', 'JQuery', 'PHP', 'MySQL'],
  },
])

const checkHeight = (value) => {
  if (value === 'xs') return (separatorHeight.value = '6rem')
  else if (value === 'sm') return (separatorHeight.value = '12rem')
  else if (value === 'md') return (separatorHeight.value = '10rem')
  else if (value === 'lg') return (separatorHeight.value = '13rem')
  else if (value === 'xl') return (separatorHeight.value = '15rem')
}

onMounted(() => {
  checkHeight(screenSize.value)
})

watch(
  () => screenSize.value,
  (value) => {
    checkHeight(value)
  },
)
</script>

<style scoped>
.card-item {
  height: 300px;
  max-width: 1200px;
}
</style>
