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
const value = 1 // @ts-ignore
import { useI18n } from 'vue-i18n'

const { t, locale, availableLocales } = useI18n() // call `useI18n`, and spread `t` from  `useI18n` returning
</script>

<template>
  <div id="background">
    <div id="bg_gradient"></div>
  </div>
  <Navigation />
  <Landing />
  <Explore />
  <Carousel />
  <About_wav />
  <Instruments />
  <About_umprum />
  <Melodize v-if="locale === 'en'" />
  <Socials />
  <Credits />
  <Footer />
</template>
