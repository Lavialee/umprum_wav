<script setup lang="ts">
// @ts-ignore

import { useI18n } from 'vue-i18n'
const { t } = useI18n() // call `useI18n`, and spread `t` from  `useI18n` returning
import { VueperSlides, VueperSlide } from 'vueperslides'
import 'vueperslides/dist/vueperslides.css'

const slides = [
  {
    title: 'Slide #1',
    content: 'Slide 1 content.'
  },
  {
    title: 'Slide #2',
    content: 'Slide 2 content.'
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
    <div style="margin: 0 10%">
      <vueper-slides
        class="no-shadow"
        :visible-slides="1.5"
        arrowsOutside
        :dragging-distance="70"
        prevent-y-scroll
        :gap="3"
        :slide-ratio="1 / 3"
        :breakpoints="{ 800: { visibleSlides: 1, slideMultiple: 2 } }"
      >
        <template #arrow-left>
          <img class="coda_rotate" src="svgs/icon3.svg" style="padding-left: 1px" />
        </template>

        <template #arrow-right>
          <img class="coda" src="svgs/icon3.svg" />
        </template>
        <vueper-slide v-for="i in 10" :key="i" :title="i.toString()" style="border-radius: 24px" />
      </vueper-slides>
    </div>
  </section>
</template>
