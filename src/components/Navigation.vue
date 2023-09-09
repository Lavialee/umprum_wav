<script setup lang="ts">
// @ts-ignore
import { useI18n } from 'vue-i18n'
const { t, locale, availableLocales } = useI18n() // call `useI18n`, and spread `t` from  `useI18n` returning
</script>
<template>
  <nav class="top-nav">
    <input id="menu-toggle" type="checkbox" />
    <label class="menu-button-container" for="menu-toggle">
      <div class="menu-button"></div>
    </label>
    <ul class="menu">
      <li><a href="#milano">PERFORMANCES</a></li>
      <li><a href="#about_wav">ABOUT.wav</a></li>
      <li><a href="#instruments">INSTRUMENTS</a></li>
      <li><a href="#about_UMPRUM">UMPRUM</a></li>
      <li><a href="#socials">LINKS</a></li>
      <li><a href="#credits">CREDITS</a></li>
      <li>
        <div class="locale-changer">
          <select v-model="locale">
            <option v-for="locale in availableLocales" :key="`locale-${locale}`" :value="locale">
              {{ locale }}
            </option>
          </select>
        </div>
      </li>
      <li>
        <button size="sm" class="my-2 my-sm-0 btn-info" type="submit" onclick="i18n.locale = 'en'">
          {{ $t('english') }}
        </button>
      </li>
    </ul>
  </nav>
</template>
