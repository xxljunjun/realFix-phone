<template>
  <view class="home">
    <SearchTopBack :isBack="false" />
    <view class="gundong">
      <view class="gundong_inner">
        <scroll-view class="scroll-view_H" scroll-x="true">
          <view
            class="scroll-view-item_H"
            v-for="item in makeArr"
            :key="item.id"
            @click="toSearchMake(item.id)"
            :class="item.ischecked ? 'active' : ''"
            >{{ item.makeName }}
            <image
              src="/static/daotong/blue.png"
              class="blue"
              v-if="item.ischecked"
            />
          </view>
        </scroll-view>
      </view>
      <view class="right" @click="goToChooseMask">
        <image src="/static/daotong/3.png" class="threen" />
      </view>
    </view>
    <view
      class="detailbox"
      v-for="item in detailArr"
      :key="item.id"
      @tap="toDetail(item.id)"
    >
      <Box :items="item" :canDelete="canDelete" />
    </view>
    <image
      src="/static/daotong/point.png"
      class="sign_img"
      @tap="goToSign"
      v-if="imgStatus"
    />
    <!-- 签到成功 -->
    <view class="succeed" v-if="isSign">
      <image src="/static/daotong/succeed.png" class="succeedImg" />
      <view class="text">Received 100 Points</view>
    </view>
    <!-- 气泡 -->
    <view class="paopao" v-if="paopaoStatus">
      <view>Post cases to win prozes!</view>
      <view> <text class="num">8</text>new diagnostic cases are awaited.</view>
    </view>
    <!-- 自定义底部导航栏 -->
    <BottomTabBar current="featured" />
    <ChooseMask v-if="ischooseMask" @toClose="toClose" title="All Makes" />
  </view>
</template>

<script>
import Box from './component/Box'
import SearchTopBack from './component/topBack/searchTopBack'
import BottomTabBar from '../components/bottom-tabBar'
import ChooseMask from './component/chooseMask'
export default {
  data() {
    return {
      paopaoStatus: true,
      makeArr: [
        { id: 1, makeName: 'GM', ischecked: false },
        { id: 2, makeName: 'BMW', ischecked: false },
        { id: 3, makeName: 'Benz', ischecked: false },
        { id: 4, makeName: 'Ford', ischecked: false },
        { id: 5, makeName: 'Toyota', ischecked: false },
      ],
      ischooseMask: false,
      detailArr: [],
      canDelete: false,
      isSign: false,
      imgStatus: true,
    }
  },
  components: {
    SearchTopBack,
    Box,
    BottomTabBar,
    ChooseMask,
  },
  mounted() {
    this.getHomeList()
  },
  onShow() {
    this.paopaoStatus = true
    setTimeout(() => {
      this.paopaoStatus = false
    }, 3000)
  },
  onHide() {},
  onLoad: function (option) {},
  methods: {
    handleTouchmove(e) {
      // console.log('handleTouchmove', e)
      e.preventDefault()
    },
    preventMove() {
      document
        .querySelector('.home')
        .addEventListener('touchmove', this.handleTouchmove)
    },
    recoverMove() {
      //恢复滑动
      document
        .querySelector('.home')
        .removeEventListener('touchmove', this.handleTouchmove)
    },
    toSearchMake(id) {
      console.log(id)
      this.makeArr.forEach((val) => {
        if (val.id == id) {
          val.ischecked = true
        } else {
          val.ischecked = false
        }
      })
    },
    toClose() {
      this.ischooseMask = false
      this.recoverMove()
    },
    goToChooseMask() {
      this.ischooseMask = true
      this.preventMove()
    },
    goToSign() {
      console.log('签到')
      this.imgStatus = false
      this.isSign = true
      setTimeout(() => {
        this.isSign = false
      }, 2000)
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
  padding-top: 178rpx;
  width: 750rpx;
  background: rgba(224, 224, 224, 1);
  padding-bottom: 146rpx;
  .paopao {
    width: 500rpx;
    height: 140rpx;
    background: rgba(255, 255, 255, 1);
    box-shadow: 0px -4rpx 16rpx 0px rgba(0, 0, 0, 0.24);
    border-radius: 10rpx;
    position: fixed;
    bottom: 140rpx;
    z-index: 99;
    left: 50%;
    margin-left: -250rpx;
    font-size: 26rpx;
    color: #000;
    line-height: 40rpx;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-left: 30rpx;
    .num {
      color: rgba(0, 126, 255, 1);
      margin-right: 10rpx;
    }
  }
  //三角形
  // .paopao::before {
  //   box-sizing: content-box;
  //   width: 0px;
  //   height: 0px;
  //   position: absolute;
  //   top: 70px;
  //   right: 118px;
  //   padding: 0;
  //   border-top: 20rpx solid #ffffff;
  //   border-bottom: 20rpx solid transparent;
  //   border-left: 20rpx solid transparent;
  //   border-right: 20rpx solid transparent;
  //   display: block;
  //   content: '';
  //   z-index: 12;
  // }
  // .paopao::after {
  //   box-sizing: content-box;
  //   width: 0px;
  //   height: 0px;
  //   position: absolute;
  //   top: 70px;
  //   right: 117px;
  //   padding: 0;
  //   border-top: 18rpx solid #aaaaaa;
  //   border-bottom: 18rpx solid transparent;
  //   border-left: 18rpx solid transparent;
  //   border-right: 18rpx solid transparent;
  //   display: block;
  //   content: '';
  //   z-index: 10;
  // }
  .gundong {
    height: 120rpx;
    width: 750rpx;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: fixed;
    top: 88rpx;
    z-index: 11;
    background: rgba(224, 224, 224, 1);
    white-space: nowrap; //重要的scroll-view
    margin-left: 30rpx;
    .gundong_inner {
      height: 120rpx;
      width: 645rpx;
      display: flex;
      align-items: center;
      .scroll-view_H {
        .scroll-view-item_H {
          min-width: 110rpx;
          height: 72rpx;
          padding: 0 10rpx;
          display: inline-block; //重要的scroll-view
          background: #fff;
          border-radius: 10rpx;
          text-align: center;
          line-height: 72rpx;
          margin-right: 20rpx;
          position: relative;
          &.active {
            color: #007aff;
            background: rgba(211, 223, 237, 1);
            border: 1px solid rgba(0, 122, 255, 1);
          }
          .blue {
            position: absolute;
            bottom: 0;
            right: 0;
            height: 34rpx;
            width: 34rpx;
          }
        }
      }
    }
    .right {
      margin-right: 30rpx;
      text-align: center;
      .threen {
        width: 44rpx;
        height: 44rpx;
        margin-right: 15rpx;
      }
    }
  }
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
  .succeed {
    color: #fff;
    width: 360rpx;
    height: 360rpx;
    background: rgba(0, 0, 0, 0.6);
    border-radius: 20rpx;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    z-index: 9999;
    .succeedImg {
      width: 222rpx;
      height: 222rpx;
      margin-left: 60rpx;
      margin-top: 20rpx;
    }
    .text {
      text-align: center;
      font-size: 30rpx;
    }
  }
}
</style>