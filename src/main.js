import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import firebase from 'firebase/app'
import Vuelidate from 'vuelidate'
import 'materialize-css/dist/js/materialize.min'
import 'firebase/auth'
import 'firebase/database'

Vue.config.productionTip = false

Vue.use(Vuelidate)
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

firebase.initializeApp({
  apiKey: 'AIzaSyDi3hOCqtx-vWuWYfrXwdaNDTwayjKiKFU',
  authDomain: 'voice-assistant-looona.firebaseapp.com',
  projectId: 'voice-assistant-looona',
  storageBucket: 'voice-assistant-looona.appspot.com',
  messagingSenderId: '809479680739',
  appId: '1:809479680739:web:b796c36b5ce85ceea14bd6',
  measurementId: 'G-8YG88FR1KG',
})

let app

firebase.auth().onAuthStateChanged(() => {
  if (!app) {
    app = new Vue({
      router,
      store,
      render: (h) => h(App),
    }).$mount('#app')
  }
})
