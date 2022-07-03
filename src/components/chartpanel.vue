<template>
	<div class="chart">
		<div class="chart_title" v-if="title">{{title}}</div>
		<div>
			<slot></slot>
		</div>
		<div class="border_line topleft1"></div>
		<div class="border_line topleft2"></div>
		<div class="border_line topright1"></div>
		<div class="border_line topright2"></div>
		<div class="border_line bottomleft1"></div>
		<div class="border_line bottomleft2"></div>
		<div class="border_line bottomright1"></div>
		<div class="border_line bottomright2"></div>
	</div>
</template>

<script setup>
	import {
		ref,
		reactive,
		defineEmits,
		defineProps
	} from 'vue'

	//外部参数
	const props = defineProps({
		title: String
	})
</script>

<style>
	
</style>
