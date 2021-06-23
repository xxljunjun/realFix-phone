<template>
	<div class="myLoading"  v-if="loadingStatus">
		<image src="/static/loading.png" class="loadingImg"/>
	</div>
</template>

<script>
	export default {
		props:{
			loadingStatus:{
				type:Boolean,
				default:true,
			}
		},
		data(){
			return{
				
			}
		},
		components:{

		},
		mehtods:{

		}
	}
</script>

<style lang="scss" scoped>
/* 
	使用animation实现loading效果
	@keyframes
	animation-name
	animation-duration
	animation-delay
	animation-iteration-count
	animation-direction
	animation-timing-function
	animation-fill-mode
	animation
 */

 /* 
	使用transform实现交互动画
		translate()
		scale()
		rotate(360deg)
 
  */
  /* 
	使用transition实现交互动画
		transition-property
		transition-duration
		transition-timing-function
		transition-delay
   */
 @keyframes junloading {
	 from {transform:rotate(0deg) ;} to{transform:rotate(360deg) ;}
// 	0%  {transform:rotate(0deg);}
// 	25% {transform:rotate(180deg);}
// 	50% {transform:rotate(270deg);}
// 	75% {transform:rotate(360deg);}
// 	100% {transform:rotate(-0deg);}
}
.myLoading{
	width:300rpx;
	height:300rpx;
	background:rgba(0,0,0,0.6);
	position:fixed;
	top:0;
	bottom:0;
	right:0;
	left:0;
	margin:auto;
	z-index:999;
	border-radius:10rpx;
	display:flex;
	align-items:center;
	justify-content:center;
	.loadingImg{
		height:100rpx;
		width:100rpx;
		animation: junloading .7s linear infinite forwards;
	}
}
</style>