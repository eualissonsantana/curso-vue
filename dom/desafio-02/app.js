new Vue({
    el: '#desafio',
    data: {
        valor: ''
    },
    methods: {
        exibeAlerta() {
            alert('Eu sou um alerta')
        },
        informaValor(e) {
            this.valor = e.target.value
        }
    }
})