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
      <header class="header_bold_monument" style="margin-bottom: 32px">FOLLOW US ON SOCIALS</header>
      <div class="flexbox_column dots" style="width: 90%; align-self: center">
        <div
          class="flexbox_row"
          style="justify-content: space-evenly; width: 100%; align-items: center"
        >
          <img class="coda" src="svgs/icon1.svg" style="padding-right: 20px; padding-top: 32px" />
          <a class="black_blob_wide" href="https://www.facebook.com/UMPRUM">UMPRUM ACADEMY</a>
          <img class="coda" src="svgs/icon1.svg" style="padding-left: 20px; padding-top: 32px" />
        </div>
      </div>
      <header class="monument txt20" style="margin-top: 42px; margin-bottom: -8px">
        OUR STUDIOS
      </header>
      <div class="flexbox_column dots" style="width: 90%; align-self: center">
        <div
          class="flexbox_row"
          style="justify-content: space-evenly; width: 100%; align-items: center"
        >
          <img class="coda" src="svgs/icon2.svg" style="padding-right: 20px; padding-top: 10px" />
          <a class="black_blob_wide" href="https://www.instagram.com/d3_umprum">Product design</a>
          <img class="coda" src="svgs/icon2.svg" style="padding-left: 20px; padding-top: 32px" />
        </div>
        <div
          class="flexbox_row"
          style="justify-content: space-evenly; width: 100%; align-items: center"
        >
          <img class="coda" src="svgs/icon3.svg" style="padding-right: 20px; padding-top: 32px" />
          <a class="black_blob_wide" href="https://www.instagram.com/atelier_notfound"
            >Design and digital technology</a
          >
          <img
            class="coda"
            src="svgs/icon3.svg"
            style="transform: rotate(180deg); padding-right: 20px; padding-bottom: 32px"
          />
        </div>
        <div
          class="flexbox_row"
          style="justify-content: space-evenly; width: 100%; align-items: center"
        >
          <img class="coda" src="svgs/icon4.svg" style="padding-right: 20px; padding-top: 32px" />
          <a class="black_blob_wide" href="https://www.instagram.com/gdvk_umprum/"
            >graphic design</a
          >
          <img class="coda" src="svgs/icon4.svg" style="padding-left: 20px; padding-top: 32px" />
        </div>
      </div>
    </section>
  </section>
</template>
