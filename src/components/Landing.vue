<script setup lang="ts">
// @ts-ignore
import { useI18n } from 'vue-i18n'
const { t } = useI18n() // call `useI18n`, and spread `t` from  `useI18n` returning
</script>

<template>
  <div id="background"></div>
  <!--landing page-->
  <section class="flexbox_column" id="landing">
    <!--audiovisual experience...-->
    <header class="flexbox_row dots" id="first_header">
      <div>{{ t('landing.audiovisual') }}</div>
      <div><img src="svgs/target.svg" class="coda" /></div>
      <div>{{ t('landing.event') }}</div>
    </header>
    <!--Perex 1 + název-->
    <section class="flexbox_column" id="logo_perex">
      <p id="first_perex">
        {{ t('landing.perex_1_1') }} <br />
        {{ t('landing.perex_1_2') }} <br />
        {{ t('landing.perex_1_3') }} <br />
      </p>
      <img src="svgs/umprumwav.svg" id="logo" />
    </section>
    <!--adresa + Perex 2-->
    <section id="adress_perex">
      <p id="adress">
        {{ t('landing.adress') }}
      </p>
      <p id="second_perex">
        {{ t('landing.perex_2') }}
      </p>
    </section>
    <!--arrows-->
    <section id="arrows">
      <a href="#first_links"
        ><span class="arrow down-narrow"></span><span class="arrow down-narrow"></span
        ><span class="arrow down-narrow"></span
      ></a>
    </section>
  </section>
</template>
