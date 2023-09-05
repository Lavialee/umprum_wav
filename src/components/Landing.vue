<script setup lang="ts">
// @ts-ignore
import { useI18n } from 'vue-i18n'

const { t } = useI18n() // call `useI18n`, and spread `t` from  `useI18n` returning
</script>

<template>
  <section class="flexbox_column" id="landing">
    <!--landing page-->
    <header class="flexbox_row dots" id="first_header">
      <!--audiovisual experience...-->
      <div>{{ t('message.audiovisual') }}</div>
      <div><img src="svgs/target.svg" class="coda" /></div>
      <div>MILAN DESIGN WEEK 2023</div>
    </header>
    <section class="flexbox_column" id="logo_perex">
      <!--Perex 1 + název-->
      <p id="first_perex">
        For the Tortona Design Week, <br />
        UMPRUM is bringing the worlds <br />
        of design and music together!
      </p>
      <img src="svgs/umprumwav.svg" id="logo" />
    </section>
    <section id="adress_perex">
      <p class="dots" id="adress">
        Via Savona 57 - 20144 - Milano<span class="only_pc"> - Italy </span>
      </p>
      <p id="second_perex">
        UMPRUM.wav invites you to enjoy both the visual and acoustic qualities of the unique musical
        instruments created by the students. The interactive installation will allow you to mix and
        match the samples and compose your own sound composition.
      </p>
    </section>
    <section id="arrows">
      <a href="#first_links"
        ><span class="arrow down-narrow"></span><span class="arrow down-narrow"></span
        ><span class="arrow down-narrow"></span
      ></a>
    </section>
  </section>
</template>
