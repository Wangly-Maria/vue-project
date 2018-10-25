
<template>
	<div>
		<h3>Enter your details below</h3>
		<form @submit.prevent="handSubmit">
			<div>
				<label for="name">Name</label>
				<input type="text" v-model="user.name" id="name" />
			</div>
			<div>
				<label for="email">Email</label>
				<input type="email" v-model="user.email" id="email" />
			</div>
			<div>
				<button>Submit</button>
			</div>
		</form>
	</div>
</template>
<script>
	import { EventBus } from '../../lib/event-bus.js';
	export default {
		name: 'EditProfile',
		data() {
			return {
				user: {
					name: "",
					email: ""
				}
			}
		},
		methods:{
			handSubmit() {
				EventBus.$emit("form-submitted", this.user);
				this.user = {};
			}
		}
	}
</script>