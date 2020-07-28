<template>
	<div id="app" class="container-fluid">
		<h1>Animações</h1>
		<hr>
		<b-button variant=primary class="mb-1"
			@click="exibir = !exibir">Mostrar mensagem
		</b-button>
		
		<b-select class="cm-3" v-model="tipoAnimacao">
			<option value="fade">Fade</option>
			<option value="slide">Slide</option>
		</b-select>

		<transition :name="tipoAnimacao" mode="out-in">
			<b-alert class="m-3" variant="info" show v-if="exibir" key="info"> {{msg}}</b-alert>
			<b-alert class="m-3" variant="warning" show v-else key="warn"> {{msg}}</b-alert>
		</transition>

		<hr>
		<b-button variant="success" @click="exibir2 = !exibir2">Alternar</b-button>
		<transition
			:css="false"
			@before-enter="beforeEnter"
			@enter="enter"
			@after-enter="afterEnter"
			@enter-cancelled="enterCancelled"
			
			@before-leave="beforeLeave"
			@leave="leave"
			@after-leave="afterLeave"
			@leave-cancelled="leaveCancelled">
			<div class="caixa" v-if="exibir2"></div>
		</transition>
	</div>
</template>

<script>

export default {
	data() {
		return {
			msg: 'Uma mensagem de informação para o usuário!',
			exibir: false,
			exibir2: true,
			tipoAnimacao: 'fade',
			larguraBase: 0
		}
	},
	methods: {
		beforeEnter(el){
			this.larguraBase = 0
			el.style.width = `${this.larguraBase}`
		},
		enter(el, done) {
			let rodada = 1
			const temporizador = setInterval(() => {
				const novaLargura = this.larguraBase + rodada * 10
				el.style.width = `${novaLargura}px`
				rodada++
				if(rodada > 30) {
					clearInterval(temporizador)
					done()
				}
			}, 25)
		},
		afterEnter(el) {
			console.log('afterEnter')
		},
		enterCancelled() {
			console.log('enterCancelled')
		},

		beforeLeave(el){
			this.larguraBase = 300
			el.style.width = `${this.larguraBase}`
		},
		leave(el, done) {
			let rodada = 1
			const temporizador = setInterval(() => {
				const novaLargura = this.larguraBase - rodada * 10
				el.style.width = `${novaLargura}px`
				rodada++
				if(rodada > 30) {
					clearInterval(temporizador)
					done()
				}
			}, 25)
		},
		afterLeave(el) {
			console.log('afterLeave')
		},
		leaveCancelled() {
			console.log('leaveCancelled')
		}

	}
}
</script>

<style>
#app {
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	margin-top: 60px;
	font-size: 1.5rem;
}

.caixa {
	height: 100px;
	width: 300px;
	margin: 30px auto;
	background: lightgreen;
}



.fade-enter, .fade-leave-to {
	opacity: 0;
}

.fade-enter-active, .fade-leave-active {
	transition: opacity 2s;
}

@keyframes slide-in {
	from {transform: translateY(40px);}
	to {transform: translateY(0);}
}

@keyframes slide-out {
	from {transform: translateY(0);}
	to {transform: translateY(40px);}
}


.slide-enter-active {
	animation: slide-in 2s ease;
	transition: opacity 2s;
}

.slide-leave-active {
	animation: slide-out 2s ease;
	transition: opacity 2s;
}

.slide-enter, .slide-leave-to {
	opacity: 0;
}



</style>
