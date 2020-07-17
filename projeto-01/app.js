new Vue({
    el: '#jogo',
    data: {
        porcentJogador: 100,
        porcentMonstro: 100,
        rodando: false,
        logs: []
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
            this.porcentMonstro = 100,
            this.logs= []
        },
        ataque(especial){
            this.dano('porcentMonstro', 5, 10, especial, 'Jogador', 'Monstro', 'jogador')
            if(this.porcentMonstro > 0) {
                this.dano('porcentJogador', 7, 12, false, 'Monstro', 'Jogador', 'monstro')
            }
            
        },
        dano(atr, min, max, especial, origem, alvo, cls) {
            const plus = especial ? 5 : 0
            const dano = this.geraNumero(min + plus, max + plus)
            this[atr] = Math.max(this[atr] - dano, 0)
            this.registraLog(`${origem} atingiu ${alvo} com ${dano}.`, cls)
        },
        curaEAtaca() {
            this.curar(10, 15)
            this.dano('porcentJogador', 7, 12, false, 'Monstro', 'Jogador', 'monstro')
        },
        curar(min, max) {
            const cura = this.geraNumero(min, max)
            this.porcentJogador = Math.min(this.porcentJogador + cura, 100)
            this.registraLog(`Jogador ganhou força de ${cura}.`, 'jogador')
        },
        geraNumero(min, max){
            const value = Math.random() * (max - min) + min
            return Math.round(value)
        },
        registraLog(text, cls) {
            this.logs.unshift({text, cls})
        }


    }
})