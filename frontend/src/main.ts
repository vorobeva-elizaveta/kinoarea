import '@/app/styles/main.css'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import Components from '@/app/libs/components.conf'

import App from './App.vue'
import router from './app/router'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'
import fontaweomeconfig from '@/app/libs/fontawesome.config'

/* add icons to the library */
library.add(faUserSecret)

const app = createApp(App)

app.use(createPinia())
app.use(router)

Components.forEach((component: any) => {
  app.component(component.name, component.path)
})
app.component('i-fa', FontAwesomeIcon)

library.add(...fontaweomeconfig)

app.mount('#app')
