<script setup>
import { ref, computed } from 'vue'

const props = defineProps(['folderImages'])
const slide = ref(props.folderImages[0])
const fullscreen = ref(false)
const customFullscreen = ref(false)

// Compute custom size styles based on fullscreen state
const customSizeStyles = computed(() => {
  if (customFullscreen.value) {
    return {
      width: '90vw', // 90% of viewport width
      height: '80vh', // 80% of viewport height
      position: 'fixed',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      zIndex: 5000,
      backgroundColor: '#000',
    }
  }
  return {}
})
</script>

<template>
  <div class="carousel-container" :style="customFullscreen ? 'position: relative;' : ''">
    <!-- Normal view when not in customFullscreen mode -->
    <q-responsive :ratio="1" v-if="!customFullscreen">
      <q-carousel
        swipeable
        animated
        v-model="slide"
        v-model:fullscreen="fullscreen"
        infinite
        ref="carousel"
      >
        <q-carousel-slide
          v-for="(image, index) in props.folderImages"
          :key="index"
          :name="image"
          :img-src="`images/${image}`"
        />

        <template v-slot:control>
          <q-carousel-control position="bottom-right" :offset="[18, 18]">
            <q-btn
              push
              round
              dense
              color="warning"
              text-color="secondary"
              icon="fullscreen"
              @click="customFullscreen = true"
            />
            <q-btn
              push
              round
              dense
              color="warning"
              text-color="secondary"
              icon="arrow_left"
              @click="$refs.carousel.previous()"
            />
            <q-btn
              push
              round
              dense
              color="warning"
              text-color="secondary"
              icon="arrow_right"
              @click="$refs.carousel.next()"
            />
          </q-carousel-control>
        </template>
      </q-carousel>
    </q-responsive>

    <!-- Custom fullscreen mode -->
    <div v-if="customFullscreen" :style="customSizeStyles" class="custom-fullscreen">
      <q-carousel
        swipeable
        animated
        v-model="slide"
        infinite
        ref="carouselCustom"
        class="full-height"
      >
        <q-carousel-slide
          v-for="(image, index) in props.folderImages"
          :key="index"
          :name="image"
          :img-src="`images/${image}`"
          class="custom-slide"
        />

        <template v-slot:control>
          <q-carousel-control position="bottom-right" :offset="[18, 18]">
            <q-btn
              push
              round
              dense
              color="warning"
              text-color="secondary"
              icon="fullscreen_exit"
              @click="customFullscreen = false"
            />

            <q-btn
              push
              round
              dense
              color="warning"
              text-color="secondary"
              icon="arrow_left"
              @click="$refs.carouselCustom.previous()"
            />
            <q-btn
              push
              round
              dense
              color="warning"
              text-color="secondary"
              icon="arrow_right"
              @click="$refs.carouselCustom.next()"
            />
          </q-carousel-control>
        </template>
      </q-carousel>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.custom-fullscreen {
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.5);
  border-radius: 8px;
  overflow: hidden;
}

.custom-slide {
  background-size: contain !important;
  background-position: center !important;
  background-repeat: no-repeat !important;
  background-color: #13132a;
}

/* Optional backdrop overlay for the custom fullscreen mode */
.custom-fullscreen::before {
  content: '';
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.7);
  z-index: -1;
}
</style>
