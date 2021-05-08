<template>
	<view class="myDialog" v-if="dialogIsShow">
		<view class="content">
			<view class="title">Information</view>
			<view class="text">Are you sure to remove it from favorite</view>
			<view class="btn_box">
				<view class="Cancel" @tap="cancel">Cancel</view>
				<view class="Confirm" @tap="Confirm">Confirm</view>
			</view>
		</view>
		<view class="mask"></view>
	</view>
</template>

<script>
	export default {
		data(){
			return{	
				
			}
		},
		props:{
			dialogIsShow:Boolean,
		},
		methods:{
			cancel(){
				this.$emit("cancel",false)
			},
			Confirm(){
				this.$emit("confirm")
			}
		}
	}
</script>

<style lang="scss" scoped>
.myDialog{
	width: 750rpx;
	height: 100%;
}
.mask{
	width: 750rpx;
	height: 100%;
	background: rgba(0,0,0,0.4);
	position: fixed;
	top: 0;
	left: 0;
	z-index: 999;
}
.content{
	width:580rpx;
	height:317rpx;
	background:rgba(245,245,245,1);
	border-radius:14rpx;
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	margin: auto;
	z-index: 9999;
	.btn_box{
		display: flex;
		position: absolute;
		bottom: 0;
		border-top: 1rpx solid #D2D2D2;
		.Cancel{
			width: 290rpx;
			height: 100rpx;
			text-align: center;
			line-height: 100rpx;
			border-right: 1rpx solid #D2D2D2;
		}
		.Confirm{
			width: 290rpx;
			height: 100rpx;
			text-align: center;
			line-height: 100rpx;
			color:#0D7EFF;
		}
	}
	.title{
		margin-top:60rpx;
		margin-bottom: 16rpx;
		width:100%;
		height:42rpx;
		font-size:34rpx;
		font-family:HelveticaNeue-Medium,HelveticaNeue;
		font-weight:bold;
		color:rgba(0,0,0,1);
		line-height:42rpx;
		text-align: center;
	}
	.text{
		width:100%;
		height:38rpx;
		font-size:30rpx;
		font-family:HelveticaNeue;
		color:rgba(85,85,85,1);
		line-height:38rpx;
		text-align: center;
	}
}
</style>