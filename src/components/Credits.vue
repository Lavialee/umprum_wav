<script setup lang="ts">
// @ts-ignore
import { useI18n } from 'vue-i18n'
const { t } = useI18n() // call `useI18n`, and spread `t` from  `useI18n` returning
</script>
<template>
  <section id="credits">
    <div id="gradient7"></div>
    <section class="flexbox_column margin96">
      <header class="header_bold_monument" style="margin-bottom: 64px">
        THIS PROJECT WOULD NOT EXIST WITHOUT
      </header>
      <section class="flexbox_column">
        <section class="flexbox_row credits_part">
          <div class="position">PROJECT MANAGEMENT</div>
          <img src="svgs/symbol1.svg" class="credits_symbol" />
          <div class="names">
            Michal&nbsp;Froněk, Jan&nbsp;Němeček, Jan&nbsp;Netušil, Jiří&nbsp;Hölzel
          </div>
        </section>
        <section class="flexbox_row credits_part">
          <div class="position">INSTALLATION</div>
          <img src="svgs/symbol2.svg" class="credits_symbol" />
          <div class="names">
            Jan&nbsp;Lechner, Sofia&nbsp;Artemeva, Ivo&nbsp;Jedlička, Miloslav&nbsp;Chytil,
            Theodor&nbsp;Hozák, Adam&nbsp;Kvaček
          </div>
        </section>
        <section class="flexbox_row credits_part">
          <div class="position">EXHIBITING AUTHORS</div>
          <img src="svgs/symbol3.svg" class="credits_symbol" />
          <div class="names">
            Ivo&nbsp;Jedlička, Karolína&nbsp;Vintrová, Miloslav&nbsp;Chytil, Theodor&nbsp;Hozák,
            Natália&nbsp;Krišťáková
          </div>
        </section>
        <section class="flexbox_row credits_part">
          <div class="position">PRODUCTION</div>
          <img src="svgs/symbol4.svg" class="credits_symbol" />
          <div class="names">Michaela&nbsp;Kaplánková</div>
        </section>
        <section class="flexbox_row credits_part">
          <div class="position">GRAPHIC DESIGN</div>
          <img src="svgs/symbol5.svg" class="credits_symbol" />
          <div class="names">Oskar&nbsp;Koutný, Kateřina&nbsp;Pravdová</div>
        </section>
        <section class="flexbox_row credits_part">
          <div class="position">WEB DEVELOPMENT</div>
          <img src="svgs/symbol6.svg" class="credits_symbol" />
          <div class="names">Alžběta&nbsp;Volhejnová</div>
        </section>
        <section class="flexbox_row credits_part">
          <div class="position">TEXTS</div>
          <img src="svgs/symbol7.svg" class="credits_symbol" />
          <div class="names">Vít&nbsp;Novák, Zuzana&nbsp;Řičářová</div>
        </section>
        <section class="flexbox_row credits_part">
          <div class="position">ANIMATION</div>
          <img src="svgs/symbol8.svg" class="credits_symbol" />
          <div class="names">
            Alžběta&nbsp;Horňáková, Jakub&nbsp;Žanony, Klára&nbsp;Vlachová, Natálie&nbsp;Portíková
          </div>
        </section>
        <section class="flexbox_row credits_part">
          <div class="position">MUSIC AND SOUND DESIGN</div>
          <img src="svgs/symbol9.svg" class="credits_symbol" />
          <div class="names">Sára&nbsp;Vondrášková, Sarah&nbsp;Jedličková</div>
        </section>
        <section class="flexbox_row credits_part">
          <div class="position">TECHNICAL SUPPORT</div>
          <img src="svgs/symbol10.svg" class="credits_symbol" />
          <div class="names">Karim&nbsp;Tarakji, Štěpán&nbsp;Kovář, Matyáš&nbsp;Černý</div>
        </section>
        <section class="flexbox_row credits_part">
          <div class="position">RECORDING STUDIO</div>
          <img src="svgs/symbol11.svg" class="credits_symbol" />
          <div class="names">Soundsquare</div>
        </section>
        <section class="flexbox_row credits_part">
          <div class="position">EQUIPMENT</div>
          <img src="svgs/symbol12.svg" class="credits_symbol" />
          <div class="names">Quix</div>
        </section>
        <section class="flexbox_row credits_part">
          <div class="position">PARTNER</div>
          <img src="svgs/symbol13.svg" class="credits_symbol" />
          <div class="names">Faculty of Education of Charles University</div>
        </section>
      </section>
    </section>
  </section>
</template>
