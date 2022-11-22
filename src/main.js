import { createApp } from 'vue'
import { createStore } from 'vuex'
import App from './App.vue'
import vuex from 'vuex'
import axios from './axios'


const app = createApp(App)
app.mount('#app')
app.use(vuex)
const store = createStore(
    axios
)

app.use(store)


