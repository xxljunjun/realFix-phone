<template>
  <view class="header">
    <image src="/static/daotong/back.png" class="back" @tap="back" />
    <view class="inp">
      <input class="input" placeholder="Search" />
      <image src="/static/daotong/search.png" class="search_img" />
      <image src="/static/daotong/speak.png" class="speak_img" />
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {}
  },
  methods: {
    back() {
      uni.navigateBack({
        delta: 1,
      })
    },
  },
}
</script>

<style lang="scss" scoped>
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
  .uni-input-placeholder {
    left: 76rpx !important;
  }
  /deep/.uni-input-input {
    padding-left: 74rpx !important;
  }
  .back {
    height: 48rpx;
    width: 48rpx;
    position: relative;
    left: 30rpx;
  }
  .inp {
    position: relative;
    margin-left: 30rpx;
    margin-right: 30rpx;
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
      width: 612rpx;
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