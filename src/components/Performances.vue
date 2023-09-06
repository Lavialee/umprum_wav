<script setup lang="ts">
// @ts-ignore
import { useI18n } from 'vue-i18n'
const { t } = useI18n() // call `useI18n`, and spread `t` from  `useI18n` returning
</script>

<template>
  <section id="performances">
    <div id="gradient2"></div>
    <section class="flexbox_column space_between topmargin96">
      <header class="header_bold_monument">
        <span class="only_pc">• </span>PERFORMANCES SCHEDULE<span class="only_pc"> •</span>
      </header>
      <section class="monument txt20 center" style="padding-top: 30px; width: 80%">
        <span class="only_pc">||: </span>SHORT PERFORMANCES EVERY DAY<span class="only_pc">
          :||</span
        >
      </section>
      <section class="monument txt20 center">AT 11 AM AND 4 PM</section>
      <section class="topmargin96" style="width: 85%; max-width: 1200px">
        <header class="monument txt20">| JAM SESSIONS |</header>
        <div class="parent monument txt20 center" id="jam_sessions">
          <div class="div1 date">16.4</div>
          <div class="div2 time">7 PM</div>
          <div class="div3 interpret">NEVER SOL, SARAH&nbsp;JEDLIČKOVÁ</div>
          <div class="div4 date">18.4</div>
          <div class="div5 time">4 PM</div>
          <div class="div6 interpret">DANILLO GALLO, KATHYA&nbsp;WEST</div>
          <div class="div7 date">21.4</div>
          <div class="div8 time">4 PM</div>
          <div class="div9 interpret">ALINA KALANCEA, NEVER&nbsp;SOL, SARAH&nbsp;JEDLIČKOVÁ</div>
        </div>
        <header class="monument txt20 topmargin96">|&nbsp;BRUNCH JAM SESSIONS&nbsp;|</header>
        <div class="parent monument txt20 center" id="brunch_jam_sessions">
          <div class="div1 date">22.4</div>
          <div class="div2 time">7 PM</div>
          <div class="div3 interpret">NEVER&nbsp;SOL, SARAH&nbsp;JEDLIČKOVÁ</div>
        </div>
      </section>
    </section>
  </section>
</template>
