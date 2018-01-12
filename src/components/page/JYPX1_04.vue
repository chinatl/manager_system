<template>
	<div>
		<my-frame :src='src'></my-frame>
	</div>
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
		var id = this.$route.path.slice(1);
		var uuuname = localStorage.getItem('uuuname');
		this.src = 'http://10.184.128.6/ereport/reportviewer.aspx?id='+id+'&uuusername='+uuuname;

	},
	methods:{
		
	},
	mounted(){
	}
}
</script>