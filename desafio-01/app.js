new Vue ({
    el: '#desafio',
    data: {
        nome: 'Alisson Santana',
        idade: 24,
        linkImg: "https://instafamosos.ig.com.br/wp-content/uploads/2020/06/adriano-imperador.jpg"
    },

    methods: {
        multiplicaIdade () {
            novaIdade = this.idade * 3
            return novaIdade
        },

        numeroRandom() {
            return Math.random(0,1)
        }
    }
})