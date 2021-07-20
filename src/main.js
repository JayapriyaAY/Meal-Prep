import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import firebase from 'firebase'

Vue.config.productionTip = false;

var firebaseConfig = {
  apiKey: "AIzaSyC6LB0umPpX2jcy-C0nDwpiz2L9AyxcWJI",
  authDomain: "meal-prep-af588.firebaseapp.com",
  projectId: "meal-prep-af588",
  storageBucket: "meal-prep-af588.appspot.com",
  messagingSenderId: "667944833218",
  appId: "1:667944833218:web:a0373ef60eb31ec2216b5b",
  measurementId: "G-Y6KGZ056YV"
};
firebase.initializeApp(firebaseConfig);
firebase.analytics();

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
