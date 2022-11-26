import { createApp } from 'vue'
import { createStore } from 'vuex'
import App from './App.vue'
import vuex from 'vuex'
import requests from './requests'


const app = createApp(App)
app.mount('#app')
app.use(vuex)
const store = createStore(
    requests
)

app.use(store)


