import '../src/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import 'primeicons/primeicons.css'

import Tooltip from "primevue/tooltip";

const app = createApp(App);
app.directive("tooltip", Tooltip);

app.use(router)

app.mount('#app')
