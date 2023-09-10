<script setup lang="ts">
// @ts-ignore
import { useI18n } from 'vue-i18n'
const { t } = useI18n() // call `useI18n`, and spread `t` from  `useI18n` returning
</script>
<template>
  <section id="socials" class="botpad96">
    <!--socials-->
    <section class="gradient_box">
      <!--gradients-->
      <div class="gradient6"></div>
      <div class="gradient6"></div>
      <div class="gradient6"></div>
    </section>
    <section class="flexbox_column margin96">
      <header class="h2 center edges" style="margin-bottom: 32px">
        {{ t('socials.follow') }}
      </header>
      <div class="flexbox_column dots" style="width: 90%; align-self: center">
        <div class="flexbox_row space_between" style="width: 100%; align-items: center">
          <img class="coda" src="/svgs/icon1.svg" />
          <a
            class="black_blob_wide"
            href="https://www.facebook.com/UMPRUM"
            target="_blank"
            rel="noopener noreferrer"
            >{{ t('socials.umprum') }}</a
          >
          <img class="coda" src="/svgs/icon1.svg" />
        </div>
      </div>
      <header class="txt20" style="margin-top: 42px; margin-bottom: 12px">
        {{ t('socials.studios') }}
      </header>
      <div class="flexbox_column dots" style="width: 90%; align-self: center">
        <div class="flexbox_row space_between" style="width: 100%; align-items: center; margin-bottom: 18px;">
          <img class="coda" src="/svgs/icon2.svg" />
          <a
            class="black_blob_wide"
            href="https://www.instagram.com/d3_umprum"
            target="_blank"
            rel="noopener noreferrer"
            >{{ t('socials.product') }}</a
          >
          <img class="coda" src="/svgs/icon2.svg" />
        </div>
        <div class="flexbox_row space_between" style="width: 100%; align-items: center; margin-bottom: 18px;">
          <img class="coda" src="/svgs/icon3.svg" />
          <a
            class="black_blob_wide"
            href="https://www.instagram.com/atelier_notfound"
            target="_blank"
            rel="noopener noreferrer"
            >{{ t('socials.ddt') }}</a
          >
          <img class="coda_rotate" src="/svgs/icon3.svg" />
        </div>
        <div class="flexbox_row space_between" style="width: 100%; align-items: center">
          <img class="coda" src="/svgs/icon4.svg" />
          <a
            class="black_blob_wide"
            href="https://www.instagram.com/gdvk_umprum/"
            target="_blank"
            rel="noopener noreferrer"
            >{{ t('socials.gdvk') }}</a
          >
          <img class="coda" src="/svgs/icon4.svg" />
        </div>
      </div>
    </section>
  </section>
</template>
