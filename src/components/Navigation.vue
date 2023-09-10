<script setup lang="ts">
// @ts-ignore
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'
const { t, locale, availableLocales } = useI18n() // call `useI18n`, and spread `t` from  `useI18n` returning
const toggleLanguage = () => {
  // Toggle between 'en' and 'es' by checking the current locale
  if (locale.value === 'en') {
    locale.value = 'cs'
  } else {
    locale.value = 'en'
  }
}
</script>
<template>
  <nav class="top-nav">
    <input id="menu-toggle" type="checkbox" />
    <label class="menu-button-container" for="menu-toggle">
      <div class="menu-button"></div>
    </label>
    <ul class="menu">
      <li>
        <a href="#milano">{{ t('navigation.milan') }}</a>
      </li>
      <li>
        <a href="#about_wav">{{ t('navigation.about_wav') }}</a>
      </li>
      <li>
        <a href="#instruments">{{ t('navigation.instruments') }}</a>
      </li>
      <li>
        <a href="#about_UMPRUM">{{ t('navigation.about_umprum') }}</a>
      </li>
      <li>
        <a href="#socials">{{ t('navigation.links') }}</a>
      </li>
      <li>
        <a href="#credits">{{ t('navigation.credits') }}</a>
      </li>
      <li>
        <button @click="toggleLanguage" class="button">{{ t('navigation.lang') }}</button>
      </li>
    </ul>
  </nav>
</template>
