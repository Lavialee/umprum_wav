<script setup lang="ts">
// @ts-ignore

import { useI18n } from 'vue-i18n'
const { t } = useI18n() // call `useI18n`, and spread `t` from  `useI18n` returning
import { VueperSlides, VueperSlide } from 'vueperslides'
import 'vueperslides/dist/vueperslides.css'

const slides = [
  {
    image: 'public/photos/milano1.jpg'
  },
  {
    image: 'public/photos/milano2.jpg'
  },
  {
    image: 'public/photos/milano3.jpg'
  },
  {
    image: 'public/photos/milano4.jpg'
  },
  {
    image: 'public/photos/milano5.jpg'
  },
  {
    image: 'public/photos/milano6.jpg'
  },
  {
    image: 'public/photos/milano7.jpg'
  },
  {
    image: 'public/photos/milano8.jpg'
  }
]
</script>

<template>
  <section id="milano">
    <div id="gradient2"></div>
    <section class="flexbox_column space_between topmargin96">
      <header class="h2 edges centered">
        <span class="only_pc">• </span>{{ t('carousel.header') }}<span class="only_pc"> •</span>
      </header>
      <p class="txt20 centered edges">
        {{ t('carousel.perex_1') }}<br />{{ t('carousel.perex_2') }}
      </p>
    </section>
    <div class="carousel" >
      <vueper-slides
        class="no-shadow"
        style="z-index: 1;"
        :visible-slides="1.5"
        arrowsOutside
        :dragging-distance="70"
        prevent-y-scroll
        :gap="3"
        :slide-ratio="1 / 2"
        :bullets="false"
        :breakpoints="{
          800: { visibleSlides: 1, slideMultiple: 2, slideRatio: 1 / 1.5, bullets: true }
        }"
      >
        <template #arrow-left>
          <img class="coda_rotate" src="svgs/icon3.svg" style="padding-left: 1px" />
        </template>

        <template #arrow-right>
          <img class="coda" src="svgs/icon3.svg" />
        </template>
        <vueper-slide
          v-for="(slide, i) in slides"
          :key="i"
          :image="slide.image"
          style="border-radius: 24px"
        />
      </vueper-slides>
    </div>
  </section>
</template>
