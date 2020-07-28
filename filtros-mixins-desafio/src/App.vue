<template>
	<div id="app">
		<h1>Filtros & Mixins (Desafio)</h1>
		<input type="text" v-model="frase">	
		<h3>Palavra com vírgula:</h3>
		<p> {{frase |  virgula}} </p>
		<hr>
		<h3>Exercicio 2</h3>
		<input type="text" v-model="palavra">
		<p v-if="palavra.length">{{palavra | conta}}</p>
		
		<!-- Exercício 2 -->
		<!-- Filtro global que conta o tamanho de cada palavra e adiciona o 
			valor na string final -->
		<!-- "Pedro é legal" => "Pedro (5) é (1) legal (5)" -->

		<!-- Exercício 3 -->
		<!-- Implementar os exercicios 1 e 2 com propriedade computada -->
		<hr>
		<input type="text" v-model="frase">	
		<h3>Palavra com vírgula:</h3>
		<p> {{frase |  virgula}} </p>
		<hr>
		<!-- Exercício 4 -->
		<!-- Compartilhe a propriedade computada via mixin -->
	</div>
</template>

<script>
export default {
	filters: {
		virgula(valor) {
			const arr = valor.replace(/ /g, ",")
			return arr
		}
	},
	data() {
		return {
			frase: '',
			palavra: ''
		}
	},
	computed: {
		virgula(valor) {
			this.frase.replace(/ /g, ",")
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
	font-size: 2.5rem;
}

input {
	font-size: 2.3rem;
}
</style>
