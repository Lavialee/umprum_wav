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

  <nav class="bot_nav">
    <a href="#landing"><img src="/svgs/to_top.svg" style="z-index: 100" /></a>
  </nav>
</template>
<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useI18n } from 'vue-i18n'

const { t, locale, availableLocales } = useI18n()
const toggleLanguage = () => {
  if (locale.value === 'en') {
    locale.value = 'cs'
  } else {
    locale.value = 'en'
  }
}

onMounted(() => {
  // Access DOM elements after the component is mounted
  const menuToggle = document.getElementById('menu-toggle')
  const menuIcon = document.querySelector('.menu-button')
  const menu = document.querySelector('.menu')

  if (menuToggle && menuIcon) {
    // Add a click event listener to the menu icon
    menuIcon.addEventListener('click', () => {
      menuIcon.classList.toggle('menu-open')
      menuToggle.checked = !menuToggle.checked
    })
  }

  // Add a click event listener to close the menu when a menu item is clicked
  const menuItems = document.querySelectorAll('.menu li a')
  menuItems.forEach((item) => {
    item.addEventListener('click', () => {
      menuToggle.checked = false
      menuIcon.classList.remove('menu-open')
    })
  })
})
</script>
