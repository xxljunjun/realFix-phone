<template>
	<view class="box">
		<view class="title">
			{{items.detail.title}}
		</view>
		<view class="Vehicle">
			{{items.detail.Vehicle}}
		</view>
		<view class="dtcBox">
			<view class="dtc" v-for="(val,index) in items.detail.dtcarr" :key="index">
				{{val}}
			</view>
		</view>
		<view class="detext">
			{{items.detail.text}}
		</view>
		<view class="img_Box">
			<view v-for="(item,index) in items.detail.imgsrc" :key="index" class="img_inbox">
				<image :src="item" class="comimg"/>
			</view>
		</view>
		<view class="author_Box">
			<text class="author">{{items.detail.author}}</text>
			<image src="/static/daotong/zan.png" class="zan"/>
			<text>{{items.detail.num1}}</text>
			<image src="/static/daotong/yan.png" class="yan"/>
			<text>{{items.detail.num2}}</text>
		</view>
		<view class="close_box" @tap="toClose" v-if="canDelete">
			<image src="/static/daotong/close_1.png" class="close"/>
		</view>
		<MyDialog 
			:dialogIsShow="dialogIsShow"
			@cancel="toclosemask"
			@confirm="toConfirm"
		/>
	</view>
</template>

<script>
import MyDialog from "./myDialog"
	export default {
		data(){
			return{
				dialogIsShow:false,
			}
		},
		mounted(){
			console.log(this.items)
		},
		components:{
			MyDialog,
		},
		props:{
			items:{
				type:Object,
				default:()=>{
					return {}
				},
				required:true
			},
			canDelete:{
				type:Boolean,
			}
		},
		methods:{
			toClose(){
				//调接口删除
				console.log("删除")
				this.dialogIsShow = true
			},
			toclosemask(){
				this.dialogIsShow = false
			},
			toConfirm(){
				this.dialogIsShow = false
			}
		}
	}
</script>

<style lang="scss" scoped>
.box{
	width:690rpx;
	height:541rpx;
	background:#fff;
	box-shadow:0px 2rpx 6rpx 0px rgba(0,0,0,0.08);
	border-radius:14rpx;
	position: relative;
	padding: 30rpx 0 0 30rpx;
	box-sizing: border-box;
	.title{
		width:630rpx;
		height:84rpx;
		font-size:34rpx;
		font-family:HelveticaNeue-Medium,HelveticaNeue;
		font-weight:border;
		color:rgba(0,0,0,1);
		line-height:42rpx;
		margin-bottom:16rpx;
	}
	.Vehicle{
		margin-bottom: 16rpx;
		color: #000;
	}
	.dtcBox{
		display: flex;
		margin-bottom: 16rpx;
		.dtc{
			min-width:93rpx;
			height:38rpx;
			background:rgba(221,221,221,1);
			border-radius:4rpx;
			padding: 0 12rpx;
			font-size:24rpx;
			font-family:HelveticaNeue;
			color:rgba(68,68,68,1);
			line-height:24rpx;
			display: flex;
			align-items: center;
			margin-right: 8rpx;
			justify-content: center;
		}
	}
	.detext{
		width:630rpx;
		height:76rpx;
		font-size:30rpx;
		font-family:HelveticaNeue;
		color:rgba(85,85,85,1);
		line-height:30rpx;
	}
	.img_Box{
		display: flex;
		margin: 10rpx 0 20rpx 0;
		.img_inbox{
			width: 205rpx;
			height: 115rpx;
			margin-right: 8rpx;
			.comimg{
				width: 205rpx;
				height: 115rpx;
			}
		}
	}
	.author_Box{
		color:rgba(136,136,136,1);
		.author{
			margin-right: 30rpx;
			color: #555555;
		}
		.zan{
			width: 36rpx;
			height: 36rpx;
			margin-right: 8rpx;
			position: relative;
			top: 8rpx;
		}
		.yan{
			width: 36rpx;
			height: 36rpx;
			margin: 0 8rpx 0 30rpx;
			position: relative;
			top: 8rpx;
		}
	}
	.close_box{
		.close{
			width: 48rpx;
			height: 30rpx;
			position: absolute;
			right: 30rpx;
			bottom: 30rpx;
		}
	}
}

</style>