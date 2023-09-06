<script setup lang="ts">
// @ts-ignore
import { useI18n } from 'vue-i18n'
const { t } = useI18n() // call `useI18n`, and spread `t` from  `useI18n` returning
</script>
<template>
  <nav class="top-nav">
    <input id="menu-toggle" type="checkbox" />
    <label class="menu-button-container" for="menu-toggle">
      <div class="menu-button"></div>
    </label>
    <ul class="menu">
      <li><a href="#performances">PERFORMANCES</a></li>
      <li><a href="#about_wav">ABOUT.wav</a></li>
      <li><a href="#instruments">INSTRUMENTS</a></li>
      <li><a href="#about_UMPRUM">UMPRUM</a></li>
      <li><a href="#about_melodize">MELODIZE</a></li>
      <li><a href="#socials">LINKS</a></li>
      <li><a href="#credits">CREDITS</a></li>
    </ul>
  </nav>    
</template>
