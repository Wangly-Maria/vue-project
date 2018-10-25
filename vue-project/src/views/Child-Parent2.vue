
<template>
	<div class="message">
		<div class="message-header">
			<h5 v-text="theCardTitle"></h5>
		</div>
		<div class="message-body">
			<p class="message-text" v-html="theCardBody"></p>
			<p v-if="parentMessage" v-html="parentMessage"></p>
			<div v-if="parentMessage" @click="ok" class="btn"><button>Ok</button></div>
		</div>
	</div>
</template>
<script>
	export default {
		name: 'ChildCard',
		props: ['parentMessage','ok'], //接收父组件传过来的ok()
		data: () => ({
			theCardTitle: '子组件',
			theCardBody: '我是一个子组件~~'
		})
	}
</script>