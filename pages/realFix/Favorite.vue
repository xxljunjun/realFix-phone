<template>
	<view class="favorite">
		<TopBack title="Favorite"/>
		<view class="detailbox" v-for="item in detailArr" :key="item.id" @tap="toDetail(item.id)">
			<Box
				:items="item"
				:canDelete="canDelete"
			/>
		</view>
	</view>
</template>

<script>
import Box from "./component/Box"
import TopBack from "./component/topBack/topBack"
	export default {
		data(){
			return{
				detailArr:[],
				dialogIsShow:false,
				canDelete:true,
			}
		},
		mounted(){
			this.getBoxDetail()
		},
		components:{
			TopBack,
			Box,
		},
		methods:{
			toDetail(id){
				console.log("todetaol",id)
				// this.$router.push("/")
				//跳转到详情页
			},
			getBoxDetail(){
				this.detailArr = [
					{
						id:1,detail:{
							title:"19 ercedes-Benz GLS450 steering systems failed",
							Vehicle:"2003 BMW 530i 3.0L",
							dtcarr:["P0171","P0174","P0101"],
							text:"The customer states the check engine light is on and the vehicle exhibits a hard start ",
							author:"Milan Collier",
							num1:"22",
							num2:"33",
							imgsrc:[
								"/static/daotong/img_1.png",
								"/static/daotong/img_2.png",
								"/static/daotong/img_3.png",
							]
						}
					},
					{
						id:2,detail:{
							title:"19 ercedes-Benz GLS450 steering systems failed",
							Vehicle:"2003 BMW 530i 3.0L",
							dtcarr:["P0171","P0174","P0101"],
							text:"The customer states the check engine light is on and the vehicle exhibits a hard start ",
							author:"Milan Collier",
							num1:"22",
							num2:"33",
							imgsrc:[
								"/static/daotong/img_3.png",
								"/static/daotong/img_2.png",
								"/static/daotong/img_1.png",
							]
						}
					},
					{
						id:3,detail:{
							title:"19 ercedes-Benz GLS450 steering systems failed",
							Vehicle:"2003 BMW 530i 3.0L",
							dtcarr:["P0171","P0174","P0101"],
							text:"The customer states the check engine light is on and the vehicle exhibits a hard start ",
							author:"Milan Collier",
							num1:"22",
							num2:"33",
							imgsrc:[
								"/static/daotong/img_2.png",
								"/static/daotong/img_3.png",
								"/static/daotong/img_1.png",
							]
						}
					},
				]
			}
		}
	}
</script>

<style lang="scss" scoped>
.favorite{
	padding-top:88rpx ;
	width:750px;
	background:rgba(224,224,224,1);
	.detailbox{
		padding: 30rpx 0 0 30rpx;
	}
}
</style>