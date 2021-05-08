<template>
  <view class="header">
    <image src="/static/daotong/back.png" class="back" @tap="back" />
    <text class="title">{{ title }}</text>
    <view class="rightBtn" @tap="rightBack">{{ rightText }}</view>
  </view>
</template>

<script>
export default {
  data() {
    return {}
  },
  props: {
    title: {
      type:String,
      default:'',
      required:false,
    },
    rightText: {
      type:String,
      default:'',
      required:false,
    },
  },
  methods: {
    back() {
      uni.navigateBack({
        delta: 1,
      })
    },
    rightBack() {
      this.$emit('rightBack')
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
  justify-content: center;
  position: fixed;
  top: 0;
  z-index: 99;
  .back {
    height: 48rpx;
    width: 48rpx;
    position: absolute;
    left: 30rpx;
  }
  .title {
    text-align: center;
    font-size: 36rpx;
    font-family: HelveticaNeue-Medium, HelveticaNeue;
    font-weight: border;
    color: rgba(0, 0, 0, 1);
    line-height: 44rpx;
  }
  .rightBtn {
    position: absolute;
    right: 36rpx;
    font-size: 34rpx;
    font-family: HelveticaNeue;
    color: rgba(0, 126, 255, 1);
    line-height: 36rpx;
  }
}
</style>