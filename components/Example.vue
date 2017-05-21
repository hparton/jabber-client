<template>
	<div class="example">
		<h3>{{message}}</h3>
		<input type="text" v-model="message">
		<p v-if="!message.length">Input is empty.</p>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				message: 'Vue Component'
			}
		}
	}
</script>

<style>

</style>