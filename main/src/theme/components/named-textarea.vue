<template>
	<div>
		<div class="name">{{name}}</div>
		<textarea v-model="value" :placeholder="placeholder" @input="$emit('input', value)" :class="{error, small}"></textarea>
	</div>
</template>

<style lang="sass" scoped>
	.name
		display: block
		padding: 12px 14px 6px
		margin-bottom: -36px

		font-family: Verdana, Arial, sans-serif
		font-size: 16px
		color: #000
		font-weight: bold

	textarea
		display: block
		width: calc(100% - 26px)
		height: 200px
		resize: vertical

		font-family: Verdana, Arial, sans-serif
		font-size: 16px
		color: #222

		padding: 12px
		padding-top: 40px
		border: 1px solid #DDD

	.small
		height: 100px
		resize: none

	.error
		color: #803
</style>

<script type="text/javascript">
	export default {
		name: "named-input",
		props: ["name", "value", "error", "small", "placeholder"],
		data() {
			return {
				name: "",
				value: "",
				error: false
			};
		}
	};
</script>