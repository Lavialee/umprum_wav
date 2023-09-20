<script setup lang="ts">
// @ts-ignore
import { useI18n } from 'vue-i18n'
const { t } = useI18n() // call `useI18n`, and spread `t` from  `useI18n` returning
</script>
<template>
  <section id="credits">
    <div id="gradient7"></div>
    <section class="flexbox_column margin96">
      <header class="h2 center edges" style="margin-bottom: 64px">
        {{ t('credits.header') }}
      </header>
      <section class="flexbox_column">
        <section class="flexbox_row credits_part">
          <div class="position">{{ t('credits.project_management') }}</div>
          <img src="/svgs/symbol1.svg" class="credits_symbol" />
          <div class="names">
            {{ t('credits.project_management_names') }}
          </div>
        </section>
        <section class="flexbox_row credits_part">
          <div class="position">{{ t('credits.installation') }}</div>
          <img src="/svgs/symbol2.svg" class="credits_symbol" />
          <div class="names">{{ t('credits.installation_names') }}</div>
        </section>
        <section class="flexbox_row credits_part">
          <div class="position">{{ t('credits.exhibiting') }}</div>
          <img src="/svgs/symbol3.svg" class="credits_symbol" />
          <div class="names">
            {{ t('credits.exhibiting_names') }}
          </div>
        </section>
        <section class="flexbox_row credits_part">
          <div class="position">{{ t('credits.production') }}</div>
          <img src="/svgs/symbol4.svg" class="credits_symbol" />
          <div class="names">{{ t('credits.production_names') }}</div>
        </section>
        <section class="flexbox_row credits_part">
          <div class="position">{{ t('credits.graphic_design') }}</div>
          <img src="/svgs/symbol5.svg" class="credits_symbol" />
          <div class="names">{{ t('credits.graphic_design_names') }}</div>
        </section>
        <section class="flexbox_row credits_part">
          <div class="position">{{ t('credits.web') }}</div>
          <img src="/svgs/symbol6.svg" class="credits_symbol" />
          <div class="names">{{ t('credits.web_names') }}</div>
        </section>
        <section class="flexbox_row credits_part">
          <div class="position">{{ t('credits.texts') }}</div>
          <img src="/svgs/symbol7.svg" class="credits_symbol" />
          <div class="names">{{ t('credits.texts_names') }}</div>
        </section>
        <section class="flexbox_row credits_part">
          <div class="position">{{ t('credits.animation') }}</div>
          <img src="/svgs/symbol8.svg" class="credits_symbol" />
          <div class="names">{{ t('credits.animation_names') }}</div>
        </section>
        <section class="flexbox_row credits_part">
          <div class="position">{{ t('credits.music') }}</div>
          <img src="/svgs/symbol9.svg" class="credits_symbol" />
          <div class="names">{{ t('credits.music_names') }}</div>
        </section>
        <section class="flexbox_row credits_part">
          <div class="position">{{ t('credits.technical') }}</div>
          <img src="/svgs/symbol10.svg" class="credits_symbol" />
          <div class="names">{{ t('credits.technical_names') }}</div>
        </section>
        <section class="flexbox_row credits_part">
          <div class="position">{{ t('credits.recording') }}</div>
          <img src="/svgs/symbol11.svg" class="credits_symbol" />
          <div class="names">{{ t('credits.recording_names') }}</div>
        </section>
        <section class="flexbox_row credits_part">
          <div class="position">{{ t('credits.equipment') }}</div>
          <img src="/svgs/symbol12.svg" class="credits_symbol" />
          <div class="names">{{ t('credits.equipment_names') }}</div>
        </section>
        <section class="flexbox_row credits_part">
          <div class="position">{{ t('credits.partner') }}</div>
          <img src="/svgs/symbol13.svg" class="credits_symbol" />
          <div class="names">{{ t('credits.partner_names') }}</div>
        </section>
      </section>
    </section>
  </section>
</template>
