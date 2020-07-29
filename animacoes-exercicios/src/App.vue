<template>
	<div id="app" class="container-fluid">
		<div v-if="!esconder">
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
			<hr>

			<div class="m4">
				<b-button class="m-2" variant="primary" 
					@click="componenteSelecionado = 'AlertaInfo'">Info</b-button>
				<b-button class="m-2" variant="secondary" 
					@click="componenteSelecionado = 'AlertaAdvertencia'">Advertência</b-button>

				<transition name="slide" mode="out-in">
					<component :is="componenteSelecionado"></component>
				</transition>

				<transition-group>

				</transition-group>
			</div>
		</div>

		<h1>Animações</h1>
		<hr>
		<b-button class="m-4" @click="adicionarAluno">Adicionar Aluno</b-button>
		<transition-group name="slide">
			<b-list-group v-for="(aluno, i) in alunos" :key="aluno">
				<b-list-group-item class="mb-2" variant="primary" @click="removerAluno(i)">{{aluno}}</b-list-group-item>
			</b-list-group>
		</transition-group>
	</div>
</template>

<script>
import AlertaAdvertencia from './AlertaAdvertencia'
import AlertaInfo from './AlertaInfo'

export default {
	components: {AlertaAdvertencia, AlertaInfo},
	data() {
		return {
			alunos: ['Roberto', 'Julia', 'Teresa', 'Paulo' ],
			msg: 'Uma mensagem de informação para o usuário!',
			exibir: false,
			exibir2: true,
			tipoAnimacao: 'fade',
			larguraBase: 0,
			componenteSelecionado: 'AlertaInfo',
			esconder: true
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
		},
		adicionarAluno() {
			const s = Math.random().toString(36).substring(2)
			this.alunos.push(s)
		},
		removerAluno(indice) {
			this.alunos.splice(indice, 1)
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
	position: absolute;
	width: 100%;
	animation: slide-out 2s ease;
	transition: opacity 2s;
}

.slide-enter, .slide-leave-to {
	opacity: 0;
}

.slide-move {
	transition: transform 1s;
}


</style>
