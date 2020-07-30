import Vue from 'vue'
import axios from'axios'

//axios.defaults.baseURL = 'https://curso-vue-1d6ce.firebaseio.com/'

Vue.use({
    install(Vue) {
        //Vue.prototype.$http = axios

        Vue.prototype.$http = axios.create({
            baseURL: 'https://news.ycombinator.com/',
            headers: {
                "Authorization": "abc123"
            }
        })

        Vue.prototype.$http.interceptors.request.use(config => {
            console.log(config.method)
            return config
        }, error => Promiss.reject(error))

        Vue.prototype.$http.interceptors.response.use(res => {
            //const array = []
            //for(let chave in res.data) {
            //    array.push({ id: chave, ...res.data[chave]}) // nome: res.data[chave.nome] & email: res.data[chave.email]
            //}

            //res.data = array
            return res
        }, error => Promise.reject(error))
    }
})