<script setup lang="ts">
// @ts-ignore
import { useI18n } from 'vue-i18n'
const { t } = useI18n() // call `useI18n`, and spread `t` from  `useI18n` returning
</script>

<template>
  <section class="flexbox_column" id="first_links">
    <!--links to bandcamp and yt-->
    <section class="gradient_box">
      <!--gradients-->
      <div class="gradient1"></div>
      <div class="gradient1"></div>
      <div class="gradient1"></div>
    </section>
    <section class="flexbox_column space_between margin96">
      <header class="header_bold_monument">
        <!--explore the audiovisual-->
        <span class="only_pc">• </span>{{ t('explore.explore') }}<span class="only_pc"> •</span>
      </header>
      <nav class="flexbox_row space_evenly">
        <!--links audiovisual-->
        <section class="flexbox_column" id="experiment_with_the_sound">
          <header class="monument txt20 center">{{ t('explore.experiment') }}</header>
          <a class="black_blob dots" href="https://umprumwav.bandcamp.com/album/samples-wav">
            BANDCAMP</a
          >
        </section>
        <section class="flexbox_column center" id="follow_our_shows">
          <header class="monument txt20">{{ t('explore.shows') }}</header>
          <a class="black_blob dots" href="https://www.youtube.com/@umprumpraha4303">YOUTUBE</a>
        </section>
      </nav>
    </section>
  </section>
</template>
