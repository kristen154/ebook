<template>
	<div class="app-wrapper">
		<el-container class="main-wrapper">
			<el-aside>
				<sidebar />
			</el-aside>
			<el-container>
				<el-header></el-header>
				<el-main></el-main>
			</el-container>
		</el-container>
	</div>
</template>
<script>
	import Sidebar from './SideBar'
	export default {
		name:'layout',
		components: {
			Sidebar,
		}
	}
</script>
<style>
.app-wrapper,.main-wrapper{
	height:100%;
	width:100%;
}
 .el-header, .el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }
  
  .el-aside {
  height:100%;
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 200px;
  }
  
  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 160px;
    height:100%;
  }
  

</style>