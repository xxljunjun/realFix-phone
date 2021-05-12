<template>
  <view class="header">
    <view class="inp">
      <input class="input" placeholder="Search" @focus="toSearch" />
      <image src="/static/daotong/search.png" class="search_img" />
      <image src="/static/daotong/speak.png" class="speak_img" />
    </view>
    <view class="Lottery" @tap="goToLottery">
      <image src="/static/daotong/price.png" class="lottery_img" />
      <view class="lo_text">Lottery</view>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {}
  },
  props: {
    isBack: {
      type: Boolean,
      default: true,
      required: false,
    },
  },
  methods: {
    toSearch() {
      //跳转搜索页面
      uni.navigateTo({
        url: 'search',
      })
    },
    goToLottery() {
      console.log('跳转抽奖页面')
      uni.navigateTo({
        url: 'Lottery',
      })
    },
  },
}
</script>

<style lang="scss" scoped>
.uni-input-placeholder {
  left: 76rpx !important;
}
/deep/.uni-input-input {
  padding-left: 74rpx !important;
}
/* 自定义导航栏 */
.header {
  height: 88rpx;
  width: 750rpx;
  background: linear-gradient(
    360deg,
    rgba(210, 210, 210, 1) 0%,
    rgba(255, 255, 255, 1) 100%
  );
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  top: 0;
  z-index: 99;
  .Lottery {
    margin-right: 30rpx;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .lottery_img {
      height: 48rpx;
      width: 48rpx;
    }
    .lo_text {
      font-size: 20rpx;
      font-family: PingFangSC-Medium, PingFang SC;
      font-weight: bold;
      color: rgba(70, 70, 70, 1);
      line-height: 28rpx;
    }
  }
  .inp {
    position: relative;
    margin-left: 30rpx;
    .search_img {
      height: 36rpx;
      width: 36rpx;
      position: absolute;
      top: 14rpx;
      left: 30rpx;
    }
    .speak_img {
      height: 44rpx;
      width: 44rpx;
      position: absolute;
      top: 10rpx;
      right: 30rpx;
    }
    .input {
      width: 570rpx;
      height: 64rpx;
      background: rgba(245, 245, 245, 1);
      box-shadow: 0px 3rpx 9rpx 0px rgba(0, 0, 0, 0.2);
      border-radius: 36rpx;
      border: 2px solid rgba(204, 204, 204, 1);
      font-size: 30rpx;
      font-family: HelveticaNeue;
      color: #000;
      line-height: 30rpx;
    }
  }
}
</style>