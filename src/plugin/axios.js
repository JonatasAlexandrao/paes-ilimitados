import Vue from 'vue'
import axios from 'axios'


axios.defaults.baseURL = 'https://paes-vo-cema-default-rtdb.firebaseio.com/'


Vue.use({
  install(Vue) {
    Vue.prototype.$http = axios
  }
})