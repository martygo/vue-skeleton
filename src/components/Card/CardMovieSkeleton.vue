<template>
	<div
		class="movie skeleton"
		v-show="!skeletonHidden"
		v-for="(skeleton, index) in skeletonValue"
		:key="index"
	>
		<div class="movie-image"></div>
		<div class="detail">
			<h3></h3>
			<div class="info">
				<span></span>
				<span></span>
				<span></span>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	props: {
		skeletonHidden: {
			type: Boolean,
			required: true,
			default: false
		},

		skeletonValue: {
			type: Number,
			required: true,
			default: 4
		}
	}
};
</script>