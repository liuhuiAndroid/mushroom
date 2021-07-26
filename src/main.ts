import { createApp } from 'vue'
import App from './App.vue'
import 'normalize.css/normalize.css'
import './style/index.scss';
import Mui from './components'

createApp(App).use(Mui).mount('#app')
