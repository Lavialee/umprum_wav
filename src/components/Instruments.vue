<script setup lang="ts">
// @ts-ignore
import { useI18n } from 'vue-i18n'
const { t } = useI18n() // call `useI18n`, and spread `t` from  `useI18n` returning
</script>
<template>
  <section id="instruments" class="botpad96">
    <header class="flexbox_row topmargin96" style="justify-content: center">
      <!--gradient a .wav projekt-->
      <header id="instruments_header">
        {{ t('instruments.header_1') }}<br />{{ t('instruments.header_2') }}
      </header>
    </header>
    <section class="flexbox_row topmargin96" style="width: 100%; justify-content: center">
      <section class="one_instrument_section">
        <section class="flexbox_row space_between">
          <img src="svgs/target.svg" class="coda_phone" /><img
            src="svgs/target.svg"
            class="coda_phone"
          />
        </section>
        <main class="flexbox_instruments_right">
          <div class="flexbox_column instrument_texts">
            <header class="instrument_name">Monochord<!--Instrument name--></header>
            <div class="author">[&nbsp;IVO JEDLIČKA&nbsp;]<!--author--></div>
            <a
              href="https://www.instagram.com/jedl_ivo/"
              class="instagram"
              target="_blank"
              rel="noopener noreferrer"
            >
              @jedl_ivo
            </a>
            <article>{{ t('instruments.ivo_monochord') }}</article>
          </div>
          <img src="photos/monochord.jpg" alt="monochord" class="instrument_photo" />
        </main>
      </section>
    </section>
    <section class="flexbox_row topmargin96" style="width: 100%; justify-content: center">
      <section class="one_instrument_section">
        <section class="flexbox_row space_between">
          <img src="svgs/target.svg" class="coda_phone" /><img
            src="svgs/target.svg"
            class="coda_phone"
          />
        </section>
        <main class="flexbox_instruments_left">
          <img src="photos/1000x600.jpg" alt="monochord" class="instrument_photo" />
          <div class="flexbox_column instrument_texts">
            <header class="instrument_name">1000x600<!--Instrument name--></header>
            <div class="author">[&nbsp;NATÁLIA KRIŠŤÁKOVÁ&nbsp;]<!--author--></div>
            <a
              href="https://www.instagram.com/uhm.nnn/"
              class="instagram"
              target="_blank"
              rel="noopener noreferrer"
              >@uhm.nnn<!--author--></a
            >
            <article>{{ t('instruments.natalia_numbers') }}</article>
          </div>
        </main>
      </section>
    </section>
    <section class="flexbox_row topmargin96" style="width: 100%; justify-content: center">
      <section class="one_instrument_section">
        <section class="flexbox_row space_between">
          <img src="svgs/target.svg" class="coda_phone" /><img
            src="svgs/target.svg"
            class="coda_phone"
          />
        </section>
        <main class="flexbox_instruments_right">
          <div class="flexbox_column instrument_texts">
            <header class="instrument_name">Didj<!--Instrument name--></header>
            <div class="author">[&nbsp;KAROLÍNA VINTROVÁ&nbsp;]<!--author--></div>
            <a
              href="https://www.instagram.com/vintrovakarolina/"
              class="instagram"
              target="_blank"
              rel="noopener noreferrer"
              >@vintrovakarolina<!--author--></a
            >
            <article>{{ t('instruments.karolina_didj') }}</article>
          </div>
          <img src="photos/didj.jpg" alt="monochord" class="instrument_photo" />
        </main>
      </section>
    </section>
    <section class="flexbox_row topmargin96" style="width: 100%; justify-content: center">
      <section class="one_instrument_section">
        <section class="flexbox_row space_between">
          <img src="svgs/target.svg" class="coda_phone" /><img
            src="svgs/target.svg"
            class="coda_phone"
          />
        </section>
        <main class="flexbox_instruments_left">
          <img src="photos/organ.jpg" alt="monochord" class="instrument_photo" />
          <div class="flexbox_column instrument_texts">
            <header class="instrument_name">Organ<!--Instrument name--></header>
            <div class="author">[&nbsp;MILOSLAV CHYTIL&nbsp;]<!--author--></div>
            <a
              href="https://www.instagram.com/harxmar/"
              class="instagram"
              target="_blank"
              rel="noopener noreferrer"
              >@harxmar<!--author--></a
            >
            <article>{{ t('instruments.miroslav_organ') }}</article>
          </div>
        </main>
      </section>
    </section>
    <section class="flexbox_row topmargin96" style="width: 100%; justify-content: center">
      <section class="one_instrument_section">
        <section class="flexbox_row space_between">
          <img src="svgs/target.svg" class="coda_phone" /><img
            src="svgs/target.svg"
            class="coda_phone"
          />
        </section>
        <main class="flexbox_instruments_right">
          <div class="flexbox_column instrument_texts">
            <header class="instrument_name">Mora<!--Instrument name--></header>
            <div class="author">[&nbsp;THEODOR HOZÁK&nbsp;]<!--author--></div>
            <a
              href="https://www.instagram.com/t.h.e.o.d.o.r.h/"
              class="instagram"
              target="_blank"
              rel="noopener noreferrer"
              >@t.h.e.o.d.o.r.h<!--author--></a
            >
            <article>
              {{ t('instruments.theodor_mora') }}
            </article>
          </div>
          <img src="photos/mora.jpg" alt="monochord" class="instrument_photo" />
        </main>
      </section>
    </section>
    <section class="flexbox_row topmargin96" style="width: 100%; justify-content: center">
      <section class="one_instrument_section">
        <section
          class="flexbox_row space_between"
          style="align-items: flex-start; margin-top: 20px"
        >
          <div>
            <div style="font-weight: bold">{{ t('instruments.photography') }}</div>
            <div style="margin-bottom: 20px">MARKÉTA SLANÁ, LUKÁŠ HLAVÍN</div>
            <div style="font-weight: bold">{{ t('instruments.location') }}</div>
            <div style="margin-bottom: 20px; max-width: 570px">
              {{ t('instruments.location_credit') }}
            </div>
            <div style="font-weight: bold">{{ t('instruments.architects') }}</div>
            <div>0,5 STUDIO</div>
          </div>
          <img src="svgs/target.svg" class="coda_phone" />
        </section>
      </section>
    </section>
  </section>
</template>
