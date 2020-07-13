new Vue({
    el: '#jogo',
    data: {
        porcentJogador: 100,
        porcentMonstro: 100,
        rodando: false 
    },
    computed: {
        hasResult() {
            return this.porcentJogador == 0 || this.porcentMonstro == 0
        }
    },
    watch: {
        hasResult(value) {
            if (value) this.rodando = false
        }
    },
    methods: {
        iniciarJogo(){
            this.rodando = true,
            this.porcentJogador = 100,
            this.porcentMonstro = 100
        },
        ataque(especial){
            this.dano('porcentJogador', 7, 12, false)
            this.dano('porcentMonstro', 5, 10, especial)
        },
        dano(atr, min, max, especial) {
            const plus = especial ? 5 : 0
            const dano = this.geraNumero(min + plus, max + plus)
            this[atr] = Math.max(this[atr] - dano, 0)
        },
        curar() {

        },
        geraNumero(min, max){
            const value = Math.random() * (max - min) + min
            return Math.round(value)
        }


    }
})