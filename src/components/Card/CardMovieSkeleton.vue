<template>
	<div
		class="movie skeleton"
		v-show="!skeletonHidden"
		v-for="skeleton in 4"
		:key="skeleton"
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
		}
	}
};
</script>