<script setup lang="ts">
// @ts-ignore
import { useI18n } from 'vue-i18n'
const { t } = useI18n() // call `useI18n`, and spread `t` from  `useI18n` returning
</script>

<template>
  <!--landing page-->
  <section class="flexbox_column" id="landing">
    <!--audiovisual experience...-->
    <header class="flexbox_row dots" id="first_header">
      <img src="svgs/target_small.svg" class="only_phone coda_phone_small" />
      <div class="flexbox_row width_phone" id="first_header">
        <div>{{ t('landing.audiovisual') }}</div>
        <img src="svgs/target.svg" class="only_pc" />
        <div>{{ t('landing.event') }}</div>
      </div>
      <img src="svgs/target_small.svg" class="only_phone coda_phone_small" />
    </header>
    <!--Perex 1 + název-->
    <section class="flexbox_column perex" id="logo_perex">
      <p>
        {{ t('landing.perex_1_1') }} <br />
        {{ t('landing.perex_1_2') }} <br />
        {{ t('landing.perex_1_3') }} <br />
      </p>
      <img src="svgs/umprumwav.svg" id="logo" />
    </section>
    <!--adresa + Perex 2-->
    <p id="adress">
      {{ t('landing.adress') }}
    </p>
    <section class="perex" id="adress_perex">
      <p class="perex" id="second_perex">
        {{ t('landing.perex_2') }}
      </p>
    </section>
    <!--arrows-->
    <section id="arrows">
      <a href="#explore"
        ><span class="arrow down-narrow"></span><span class="arrow down-narrow"></span
        ><span class="arrow down-narrow"></span
      ></a>
    </section>
  </section>
</template>
