<script setup lang="ts">
// @ts-ignore
import { useI18n } from 'vue-i18n'
const { t } = useI18n() // call `useI18n`, and spread `t` from  `useI18n` returning
</script>

<template>
  <!--links to bandcamp and yt-->
  <section class="flexbox_column bg-grad-explore" id="explore">
    <div class="gradient1"></div>
    <div class="gradient1"></div>
    <div class="gradient1"></div>
    <section class="flexbox_column space_between margin96">
      <section class="edges">
        <header class="h2 centered">
          <!--explore the audiovisual-->
          <span class="only_pc">• </span>{{ t('explore.explore') }}<span class="only_pc"> •</span>
        </header>
        <nav class="flexbox_row space_between">
          <!--links audiovisual-->
          <section class="flexbox_column" id="experiment_with_the_sound">
            <header class="monument txt20 center">{{ t('explore.experiment') }}</header>
            <a
              class="black_blob dots"
              href="https://umprumwav.bandcamp.com/album/samples-wav"
              target="_blank"
              rel="noopener noreferrer"
            >
              BANDCAMP</a
            >
          </section>
          <section class="flexbox_column center" id="follow_our_shows">
            <header class="monument txt20">{{ t('explore.shows') }}</header>
            <a
              class="black_blob dots"
              href="https://www.youtube.com/@umprumpraha4303"
              target="_blank"
              rel="noopener noreferrer"
              >YOUTUBE</a
            >
          </section>
        </nav>
      </section>
    </section>
  </section>
</template>
