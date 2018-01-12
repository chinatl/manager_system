<template>
	<div>页面正在建设中</div>
</template>

<script>
	import MyFrame from '../common/Iframe.vue'
export default {
	components:{
		MyFrame
	},
	data(){
		return {
			src:''
		}
	},
	created(){
		var id = this.$route.path;
		var uuuname = localStorage.getItem('uuumame');
		this.src = 'http://10.184.128.6/ereport/reportviewer.aspx?id='+id+'&uuusername='+uuuname;

	},
	methods:{
		
	},
	mounted(){
		console.log(this.$route.path);
	}
}
</script>