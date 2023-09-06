<script setup lang="ts">
// @ts-ignore
import { useI18n } from 'vue-i18n'
const { t } = useI18n() // call `useI18n`, and spread `t` from  `useI18n` returning
</script>

<template>
  <section class="flexbox_row" style="gap: 20px; align-items: flex-start">
    <!--ABOUT UMPRUM-->
    <header id="about_UMPRUM">{{ t('about_umprum.header') }}</header>
    <article id="text_UMPRUM">{{ t('about_umprum.text') }}</article>
  </section>
</template>
