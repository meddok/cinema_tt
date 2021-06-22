<template>
	<div class="input-group flex-nowrap">
		<span class="input-group-text" id="addon-wrapping">@</span>
		<input type="text" class="form-control" placeholder="Поиск фильмов" aria-label="Username" aria-describedby="addon-wrapping"
				 :value = "fieldValue"
				 @blur="onFieldBlur($event)"
				 @keyup="onKeyUp($event)"
		>
	</div>
</template>

<script>
export default {
	name: 'search',
	data() {
		return {
			fieldValue: ''
		}
	},
	methods: {
		onFieldBlur(e) {
			console.log(e.target.value)
		},

		onKeyUp(e) {
			//Знаю что можно было использовать v-model, но у него есть проблемы на андроид смартфонах
			//Значение измениться только если отловит blur
			this.fieldValue = e.target.value;
		}
	}
}
</script>