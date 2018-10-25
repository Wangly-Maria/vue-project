import { EventBus } from "../../lib/event-bus.js";
<template>
	<div class="counter">
		<h3>{{ count }}</h3>
		<div>
			<button @click.prevent="handleIncrement">+</button>
			<input type="number" v-model="entry" />
			<button @click.prevent="handleDecrement">-</button>
		</div>
		<div class="form-help">{{ text }}</div>
	</div>
</template>
<script>
	import { EventBus } from '../../lib/event-bus.js'
	export default {
		name: "Counter",
		data() {
			return {
				count: 0,
				entry: 3,
				text: ''
			};
		},
		created() {
			EventBus.$on('count-incremented',()=>{
				this.text = `Count was increased`
				setTimeout(() => {
					this.text = ''
				},3000)
			})
			EventBus.$on('count-decremented',()=>{
				this.text = `Count was decreased`
				setTimeout(()=>{
					this.text = ''
				},3000)
			})
		},
		methods:{
			handleIncrement () {
				this.count += parseInt(this.entry, 10)
				EventBus.$emit('count-incremented')
				this.entry = 0
			},
			handleDecrement () {
				this.count -= parseInt(this.entry,10)
				EventBus.$emit('count-decremented');
				this.entry = 0
			}
		}
	}
</script>

