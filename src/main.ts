import './assets/style.css'

import { createApp } from 'vue'
import App from './App.vue'
// @ts-ignore
import { createI18n } from 'vue-i18n'
import { messages } from './lang'
const i18n = createI18n({
  // something vue-i18n options here ...
  legacy: false,
  messages,
  locale: 'cs',
  fallbackLocale: 'en'
})

const app = createApp(App)
const eventBus = createApp(App)
app.use(i18n)

app.mount('#app')
