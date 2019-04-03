<script>
console.log('dd')
	export default{

		beforeCreate(){
console.log('ss')
			const { params, query } = this.$route 
			//this.$route.params获取动态路由的值
			//this.$route.query获取动态路由的值(get传值)
			const { path } = params
			console.log(path)
			this.$router.replace({ path: '/' + path, query})
		},
		render: function(h){
			return h()
		}
	}
</script>