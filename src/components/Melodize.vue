<script setup lang="ts">
// @ts-ignore
import { useI18n } from 'vue-i18n'
const { t } = useI18n() // call `useI18n`, and spread `t` from  `useI18n` returning
</script>
<template>
  <section>
    <!--ABOUT MELODIZE-->
    <div id="gradient5"></div>
    <section class="flexbox_column margin96">
      <header id="about_melodize">ABOUT MELODIZE PROJECT</header>
      <section>
        <section id="perex_melodize">
          As a part of umprum.wav installation in Milan, the Melodize project was presented for the
          first time.
        </section>
        <section id="perex_melodize">
          Can anyone become creative?<br />MELODIZE helps to reveal the magic of musical creation
        </section>
        <section>
          <section id="perex2_melodize">
            MELODIZE <br />Intuitive educative music editor for Android & iOS:
          </section>
          <section id="catchphrase_melodize">THE GAME - CREATIVITY - KNOWLEDGE</section>
        </section>
      </section>
      <section id="info_melodize">
        <div>
          <header id="info_header">OECD</header>
          <div class="melodize_text">
            innovation is a key driver of economic growth, and music education is seen as a means of
            fostering the skills and attitudes that innovation requires. Music creation strengthens
            attention, emotional intelligence and creative abilities.
          </div>
        </div>
        <div>
          <header id="info_header">EUROPEAN COMMISSION</header>
          <div class="melodize_text">
            More than 85% of teachers agree that digital technologies can be used to develop
            children's creativity, but only 23% know how to teach creativity.
          </div>
          <div class="melodize_text" style="padding-top: 20px">
            In the EU, around 25 million pupils are educated at primary school level each year.
            Everyone can develop as part of their compulsory school attendance as part of music
            education.
          </div>
        </div>
        <div>
          <header id="info_header">STUDENTS AND TEACHER FRIENDLY!</header>
        </div>
      </section>
    </section>
  </section>
</template>
