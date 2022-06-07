import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'

Vue.config.productionTip = false

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAaR-eCBUn4WumUVohP4w4oAQ7utYYWs2g",
  authDomain: "arraysapp.firebaseapp.com",
  projectId: "arraysapp",
  storageBucket: "arraysapp.appspot.com",
  messagingSenderId: "616812865965",
  appId: "1:616812865965:web:ea87da2d867a3d2fdd5924"
};

// Initialize Firebase
initializeApp(firebaseConfig);

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
