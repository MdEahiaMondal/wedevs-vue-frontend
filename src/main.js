import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

import Notify from './helpers/Notifications'

window.Notify = Notify

const app = createApp(App)

app.use(store).use(router).mount('#app')
