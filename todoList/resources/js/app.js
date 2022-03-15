require('./bootstrap');

import { createApp } from 'vue';
import App from './components/App.vue';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faPlusCircle,faUser,faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

library.add(faPlusCircle,faUser,faTrash);

const app = createApp(App);
app.component('fa',FontAwesomeIcon);
app.mount("#app");
