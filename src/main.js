import { createApp } from 'vue'
import App from './App.vue'
import router from './router'    // your router file
import './style.css'
createApp(App)
  .use(router)                  // register router
  .mount('#app')
