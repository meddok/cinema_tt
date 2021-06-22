<template>
	<div class="card card--modify" v-if="filmInfo">
      <div class="card-img-wrapper">
		   <img :src="filmInfo.image" class="card-img-top" :alt="filmInfo.name">
      </div>
		<div class="card-body">
			<h5 class="card-title">{{ filmInfo.name }}</h5>
			<p class="card-text">{{ filmInfo.descr }}</p>
		</div>
	</div>
</template>

<script>
export default {
	name: 'cFilmItem',
	props: {
		filmInfo: {
			type: Object,
			required: true,
			default: () => {}
		}
	}
}
</script>