<script setup lang="ts">
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
const { locale } = useI18n()

import { ref, watch } from 'vue'

// Define a ref for imageClass
const imageClass = ref(`sponsors-${locale.value}`)

// Watch for changes in the locale
watch(locale, (newLocale) => {
  imageClass.value = `sponsors-${newLocale}`
})
</script>


<template>
  <section class="flexbox_column">
    <div id="gradient8"></div>
  </section>
  <footer>
    <img :class="imageClass" id="sponsors" />
  </footer>
</template>
