<template>
  <view class="tabBar">
    <view class="btn">
      <image src="/static/junjun/tao_52.jpg" class="icon" />
      <view>首页</view>
    </view>
    <view class="btn">
      <image src="/static/junjun/tao_54.gif" class="icon" />
      <view>我要买</view>
    </view>
    <view class="btn-other">
      <image src="/static/junjun/tao_43.gif" class="icon" />
      <view>我要卖</view>
    </view>
    <view class="btn">
      <image src="/static/junjun/tao_46.gif" class="icon" />
      <view>消息</view>
    </view>
    <view class="btn">
      <image src="/static/junjun/tao_49.jpg" class="icon" />
      <view>我i的</view>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {}
  },
  props: {},
  mounted() {},
  components: {},
  methods: {},
}
</script>

<style lang="scss" scoped>
.icon {
  height: 45rpx;
  width: 45rpx;
}
.tabBar {
  padding: 0 50rpx;
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 999;
  height: 100rpx;
  width: 100%;
  background: #f3f3f3;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 20rpx;
  color: #000;
  .btn {
    text-align: center;
  }
  .btn-other {
    height: 130rpx;
    width: 110rpx;
    background: #fff;
    border-top-left-radius: 55rpx;
    border-top-right-radius: 55rpx;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border: 2rpx solid #dbdbdb;
    box-shadow: 0rpx 0rpx 10rpx #ccc;
    .icon {
      margin-bottom: 12rpx;
    }
  }
}
</style>