<template>
  <q-card :class="`${contactClass} `">
    <q-card-section class="col-md-6 col-xs-12 column">
      <!-- Left Section: Contact Info -->
      <h3 class="text-bold text-gradient">Let's Connect</h3>
      <p class="text-grey-5">Get in touch with me through the following platforms.</p>
      <q-card class="row bg-transparent" flat>
        <q-card-section
          v-for="(item, index) in contactInfo"
          :key="index"
          class="q-ma-none q-pa-none"
        >
          <q-chip size="lt-md-md gt-sm-lg" :icon="item.icon" outline color="secondary">
            {{ item.label }}:
            <a :href="item.link" target="_blank" class="text-grey-5 no-decoration">{{
              item.value
            }}</a>
          </q-chip>
        </q-card-section>
      </q-card>
    </q-card-section>
  </q-card>
</template>

<script setup>
const contactClass = defineModel('contactClass')

const contactInfo = defineModel('contactInfo')
</script>

<style scoped>
.no-decoration {
  text-decoration: none;
}
</style>
