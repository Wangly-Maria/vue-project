
<template>
	<div class="message">
		<div class="message-header">
			<h5 v-text="theCardTitle"></h5>
		</div>
		<div class="message-body">
			<p class="message-text" v-html="theCardBody"></p>
			<div v-if="parentMessage" class="alert" v-html="parentMessage"></div>
			<button v-if="parentMessage" @click="ok" class="btn">Ok</button>
		</div>
	</div>
</template>
<script>
	export default {
		name: 'ChildCard',
		props: ['parentMessage'], //父组件向自组件通信，通过props
		data: () => ({
			theCardTitle: '自组件',
			theCardBody: '我是一个自组件~~'
		}),
		methods: {
			ok() {
				this.$emit('finished');//自组件发出自定义事件，给父组件通信
			}
		}
	}
</script>