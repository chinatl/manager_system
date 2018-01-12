<template>
<div>
	<div class="loading" alt=""v-show='loading'>
		<img :src='loadingImg' class="loadingImg" style='width:100px;height:100px'/>
	</div>
	<iframe :src='src' frameborder="0" @load="render"></iframe>
</div>
</template>


<script>
	import loadingImg from '../../assets/loading.gif'
	export default {
		data() {
			return {
				imgSrc: '',
				loading: true,
				timer:null,
				flag : true,
				loadingImg:''
			}
		},
		methods:{
			render(){
				this.loading = false;
				clearInterval(this.timer)
			}
		},
		props:['src'],
		created(){
			this.loadingImg  = loadingImg;
		}
		
 
	}

</script>

<style scoped>
	.loading {
		position: absolute;
		top:0;
		left:0;
		right:0;
		bottom: 0;
		background-color: rgba(0,0,0,.5);
		z-index: 40
	}
	.loadingImg {
		position: absolute;
		left: 50%;
		top:50%;
		z-index: 30;
		width: 100px;
		-webkit-transform: translate(-50%,-50%);
		-ms-transform: translate(-50%,-50%);
		-o-transform: translate(-50%,-50%);
		transform: translate(-50%,-50%);
	}
	iframe {
		background-color: transparent;
		position: absolute;
		z-index: 1;
		width: 100%;
		height: 100%;
		top: 0;
		left: 0;
		padding: 10px;
		margin: 0;
		-webkit-box-sizing: border-box;
		-moz-box-sizing: border-box;
		box-sizing: border-box;
	}

</style>
