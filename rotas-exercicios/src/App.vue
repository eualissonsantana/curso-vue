<template>
	<div id="app">
		<h1>Rotas com VueRouter</h1>
		<router-view name="menu"></router-view>
		<transition mode="out-in"
			enter-active-class="animated fadeIn"
			leave-active-class="animated fadeOut">
			<router-view />
		</transition>
		<router-view name="menuInferior"></router-view>
	</div>
</template>

<script>
export default {
	
}
</script>

<style>
	#app {
		display: flex;
		flex-direction: column;
		align-items: center;
	}
</style>
