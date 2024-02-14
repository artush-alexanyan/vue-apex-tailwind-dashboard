import { createApp } from 'vue'
import App from './App.vue'
import './assets/tailwind.css'
import router from "./router/router"
import ClickOutside from "./directives/clickOutside"


const app = createApp(App)
app.directive('click-outside', ClickOutside);
app.use(router)
app.mount('#app')
