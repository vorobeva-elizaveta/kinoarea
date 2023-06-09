import '@/app/styles/main.css'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import Components from '@/app/libs/components.conf'

import App from './App.vue'
import router from './app/router'

const app = createApp(App)

app.use(createPinia())
app.use(router)

Components.forEach((component: any) => {
  app.component(component.name, component.path)
})

app.mount('#app')
