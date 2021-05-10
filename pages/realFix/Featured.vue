<template>
  <view class="home">
    <SearchTopBack :isBack="false" />
    <view
      class="detailbox"
      v-for="item in detailArr"
      :key="item.id"
      @tap="toDetail(item.id)"
    >
      <Box :items="item" :canDelete="canDelete" />
    </view>
    <image src="/static/daotong/point.png" class="sign_img" @tap="goToSign" v-if="imgStatus"/>
    <!-- 签到成功 -->
    <view class="succeed" v-if="isSign">
      <image src="/static/daotong/succeed.png" class="succeedImg"/>
      <view class="text">Received 100 Points</view>
      
    </view>
    <!-- 自定义底部导航栏 -->
    <BottomTabBar current="featured" />
  </view>
</template>

<script>
import Box from './component/Box'
import SearchTopBack from './component/topBack/searchTopBack'
import BottomTabBar from '../components/bottom-tabBar'
export default {
  data() {
    return {
      detailArr: [],
      canDelete: false,
      isSign:false,
      imgStatus:true,
    }
  },
  components: {
    SearchTopBack,
    Box,
    BottomTabBar,
  },
  mounted() {
    this.getHomeList()
  },
  methods: {
    goToSign() {
      console.log('签到')
      this.imgStatus = false
      this.isSign = true
      setTimeout(()=>{
        this.isSign = false
      },2000)
    },
    toDetail(id) {
      console.log('去到详情页', id)
      uni.navigateTo({
        url: 'detail',
      })
    },
    getHomeList() {
      this.detailArr = [
        {
          id: 1,
          detail: {
            title: '19 ercedes-Benz GLS450 steering systems failed',
            Vehicle: '2003 BMW 530i 3.0L',
            dtcarr: ['P0171', 'P0174', 'P0101'],
            text:
              'The customer states the check engine light is on and the vehicle exhibits a hard start ',
            author: 'Milan Collier',
            num1: '22',
            num2: '33',
            imgsrc: [
              '/static/daotong/img_1.png',
              '/static/daotong/img_2.png',
              '/static/daotong/img_3.png',
            ],
          },
        },
        {
          id: 2,
          detail: {
            title: '19 ercedes-Benz GLS450 steering systems failed',
            Vehicle: '2003 BMW 530i 3.0L',
            dtcarr: ['P0171', 'P0174', 'P0101'],
            text:
              'The customer states the check engine light is on and the vehicle exhibits a hard start ',
            author: 'Milan Collier',
            num1: '22',
            num2: '33',
            imgsrc: [
              '/static/daotong/img_3.png',
              '/static/daotong/img_2.png',
              '/static/daotong/img_1.png',
            ],
          },
        },
        {
          id: 3,
          detail: {
            title: '19 ercedes-Benz GLS450 steering systems failed',
            Vehicle: '2003 BMW 530i 3.0L',
            dtcarr: ['P0171', 'P0174', 'P0101'],
            text:
              'The customer states the check engine light is on and the vehicle exhibits a hard start ',
            author: 'Milan Collier',
            num1: '22',
            num2: '33',
            imgsrc: [
              '/static/daotong/img_2.png',
              '/static/daotong/img_3.png',
              '/static/daotong/img_1.png',
            ],
          },
        },
      ]
    },
  },
}
</script>

<style lang="scss" scoped>
.home {
  padding-top: 88rpx;
  width: 750rpx;
  background: rgba(224, 224, 224, 1);
  padding-bottom: 146rpx;
  .detailbox {
    padding: 30rpx 0 0 30rpx;
  }
  .sign_img {
    height: 180rpx;
    width: 180rpx;
    position: fixed;
    bottom: 300rpx;
    right: 0;
  }
  .succeed{
    color:#fff;
    width:360rpx;
    height:360rpx;
    background:rgba(0,0,0,0.6);
    border-radius:20rpx;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    z-index: 9999;
    .succeedImg{
      width:222rpx;
      height:222rpx;
      margin-left:60rpx;
      margin-top:20rpx;
    }
    .text{
      text-align:center;
      font-size:30rpx;
    }
    
  }
}
</style>