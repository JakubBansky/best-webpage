import '../src/main.css';
import { createApp } from 'vue';
import App from './App.vue';


import router from './router';

import PrimeVue from 'primevue/config';
import Tooltip from 'primevue/tooltip';
import ScrollPanel from 'primevue/scrollpanel';

import 'primeicons/primeicons.css'; // PrimeIcons

const app = createApp(App);

app.component('ScrollPanel', ScrollPanel);

app.directive('tooltip', Tooltip);
app.use(router);
app.use(PrimeVue);

app.mount('#app');
