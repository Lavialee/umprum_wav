<script setup lang="ts">
// @ts-ignore
import { useI18n } from 'vue-i18n'
const { t } = useI18n() // call `useI18n`, and spread `t` from  `useI18n` returning
</script>
<template>
  <section>
    <!--ABOUT.WAV-->
    <section class="gradient_box">
      <!--gradients-->
      <div id="gradient3"></div>
      <div id="gradient4"></div>
    </section>
    <!--about wav-->
    <!--gradient a .wav projekt-->
    <header id="about_wav" class="edges">{{ t('about_wav.header') }}</header>
    <main>
      <!--text-->
      <!--Perex 1 + název-->
      <p id="wav_perex">
        {{ t('about_wav.perex') }}
      </p>
      <img src="photos/wav_all.jpg" alt=".wav instruments" id="whole_photo" class="margin96" />
      <div id="wav_text">
        {{ t('about_wav.text_1') }}
      </div>
      <div id="wav_text">
        {{ t('about_wav.text_2') }}
      </div>
      <div id="wav_text">
        {{ t('about_wav.text_3') }}
      </div>
    </main>
  </section>
</template>
