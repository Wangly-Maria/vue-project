
<template>
	<div>
		<h1>{{ name }}</h1>
		<p>{{ email }}</p>
	</div>
</template>
<script>
	import {EventBus} from '../../lib/event-bus.js';
	export default {
		name: "ShowProfile",
		data() {
			return {
				name: "W3cplus",
				email: "w3cplus@hotmail.com"
			};
		},
		created() {
			EventBus.$on("form-submitted",({ name, email }) => {
				this.name = name;
				this.email = email;
			})
		}
	}
</script>
