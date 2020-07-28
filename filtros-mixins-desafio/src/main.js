import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false
Vue.filter('conta', function(valor){
	return valor + ' ' + valor.length
})

new Vue({
	render: h => h(App),
}).$mount('#app')
