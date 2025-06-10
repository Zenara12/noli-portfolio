<template>
  <div :class="`${projectClass}`">
    <!---->
    <div class="col">
      <h3 class="text-bold"><span class="text-gradient">Projects</span></h3>
    </div>
    <!---->
    <q-tabs v-model="tab" dense class="text-grey q-my-md" active-color="secondary" indicator-color="secondary"
      align="justify" narrow-indicator>
      <q-tab v-for="(tabs, index) in tabList" :key="index" :name="tabs.name" :label="tabs.name" />
    </q-tabs>
    <!---->
    <div class="col row flex items-start justify-center">
      <q-tab-panels v-model="tab" animated class="bg-transparent">
        <q-tab-panel v-for="(tabs, index) in tabList" :key="index" :name="tabs.name"
          class="bg-transparent row justify-center">
          <q-card v-for="(project, index) in projectList.filter(
            (project) => project.tabGroup === tabs.name || tabs.name === 'All',
          )" :key="index" class="card-size bg-warning shadow-19 q-ma-md" flat>
            <CarouselComponent :folderImages="project.folderImages"> </CarouselComponent>
            <q-card-section>
              <div class="text-h6">{{ project.name }}</div>
              <div class="text-subtitle2">{{ project.description }}</div>
            </q-card-section>

            <q-card-section class="q-pt-none">
              <q-badge v-for="(tag, index) in project.tags" :key="index" outline color="secondary" class="q-mr-sm"
                :label="tag" />
            </q-card-section>
            <q-card-actions align="right" :vertical="true">
              <a v-for="(item, index) in project.url" :key="index" class="q-mr-md q-mb-sm text-white" :href="item.link"
                target="_blank">{{
                  item.anchorName }}</a>
            </q-card-actions>
          </q-card>
        </q-tab-panel>
      </q-tab-panels>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import CarouselComponent from './CarouselComponent.vue'

const projectClass = defineModel('projectClass')

const tab = ref('All')
const tabList = [
  {
    name: 'All',
  },
  {
    name: 'Web',
  },
  {
    name: 'Mobile',
  },
]

const projectList = defineModel('projectList')
</script>

<style scoped>
.card-size {
  max-width: 20rem;
}

.gradient {
  background: linear-gradient(45deg, orange, pink);
}
</style>
