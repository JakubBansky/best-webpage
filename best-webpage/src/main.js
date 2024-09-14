import '../src/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import SplitButton from 'primevue/splitbutton';
import { useToast } from 'primevue/usetoast';

const app = createApp(App)

app.use(router)

app.mount('#app')
