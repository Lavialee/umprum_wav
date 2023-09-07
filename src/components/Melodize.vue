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
      <header id="about_melodize">{{ t('melodize.header') }}</header>
      <section>
        <section id="perex_melodize">{{ t('melodize.perex_1') }}</section>
        <section id="perex_melodize">
          {{ t('melodize.perex_2_1') }}<br />{{ t('melodize.perex_2_2') }}
        </section>
        <section>
          <section id="perex2_melodize">
            {{ t('melodize.perex_3_1') }} <br />{{ t('melodize.perex_3_2') }}
          </section>
          <section id="catchphrase_melodize">{{ t('melodize.slogan') }}</section>
        </section>
      </section>
      <section id="info_melodize">
        <div>
          <header id="info_header">{{ t('melodize.oecd_header') }}</header>
          <div class="melodize_text">{{ t('melodize.oecd_text') }}</div>
        </div>
        <div>
          <header id="info_header">{{ t('melodize.ec_header') }}</header>
          <div class="melodize_text">{{ t('melodize.ec_text_1') }}</div>
          <div class="melodize_text" style="padding-top: 20px">{{ t('melodize.ec_text_2') }}</div>
        </div>
        <div>
          <header id="info_header">{{ t('melodize.friendly') }}</header>
        </div>
      </section>
    </section>
  </section>
</template>
