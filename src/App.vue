<script setup lang="ts">
import Navigation from './components/Navigation.vue'
import Landing from './components/Landing.vue'
import Explore from './components/Explore.vue'
import Carousel from './components/Carousel.vue'
import About_wav from './components/About_wav.vue'
import Instruments from './components/Instruments.vue'
import About_umprum from './components/About_umprum.vue'
import Melodize from './components/Melodize.vue'
import Socials from './components/Socials.vue'
import Credits from './components/Credits.vue'
import Footer from './components/Footer.vue'
// @ts-ignore
import { useI18n } from 'vue-i18n'

const { t, locale, availableLocales } = useI18n() // call `useI18n`, and spread `t` from  `useI18n` returning
</script>

<template>
  <Navigation />
  <div class="locale-changer">
    <select v-model="locale">
      <option v-for="locale in availableLocales" :key="`locale-${locale}`" :value="locale">
        {{ locale }}
      </option>
    </select>
  </div>
  <Landing />
  <Explore />
  <Carousel />
  <About_wav />
  <Instruments />
  <About_umprum />
  <Melodize />
  <Socials />
  <Credits />
  <Footer />
</template>
