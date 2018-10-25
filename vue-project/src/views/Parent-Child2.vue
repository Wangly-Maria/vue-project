<!--通过回调函数实现子组件向父组件通讯-->
<template>
	<div class="card">
		<div class="card-header">
			<h5 v-text="theCardTitle"></h5>
			<button @click="sendMessage" class="btn">给子组件发送一个消息</button>
		</div>
		<div class="card-body">
			<ChildCard :parentMessage="parentMessage" @finished="finished" :ok="ok"></ChildCard>
		</div>
	</div>
</template>
<script>
	import ChildCard from './Child-Parent2';
	export default {
		name: 'ParentCard',
		data: () => ({
			theCardTitle: '父组件',
			parentMessage: ''
		}),
		components: {
			ChildCard
		},
		methods: {
			sendMessage() {
				this.parentMessage = `<b>消息来自父组件`
			},
			finished() {
				this.parentMessage = `<b>已经接收到消息了~~(回调函数)</b>`
			},
			ok() {
				this.finished();
			}
		}
	}
</script>