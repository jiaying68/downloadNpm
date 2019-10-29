import Vue from 'vue'
import App from './App.vue'
import CustomSwitch from 'package-jiaying'

const Components = {
	CustomSwitch
}

Object.keys(Components).forEach(name=>{
	Vue.component(name,Components[name]);
});

new Vue({
  el: '#app',
  render: h => h(App)
})
