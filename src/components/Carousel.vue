<script setup lang="ts">
// @ts-ignore
import { useI18n } from 'vue-i18n'
const { t } = useI18n() // call `useI18n`, and spread `t` from  `useI18n` returning
</script>

<template>
  <section id="milano">
    <div id="gradient2"></div>
    <section class="flexbox_column space_between topmargin96">
      <header class="header_bold_monument">
        <span class="only_pc">• </span>{{ t('carousel.header') }}<span class="only_pc"> •</span>
      </header>
    </section>
  </section>
</template>
