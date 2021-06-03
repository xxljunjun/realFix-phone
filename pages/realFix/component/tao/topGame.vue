<template>
  <view class="topGame">
    <view class="title">热门游戏</view>
    <view class="main">
      <view class="game-box" v-for="(item, index) in 12" :key="index">
        <image src="/static/junjun/Tsize_11.gif" class="game-img" />
        <view class="text">口袋妖怪复刻</view>
      </view>
    </view>
    <view class="btn-box">
      <view class="btn">
        查看全部游戏
        <image src="/static/junjun/Tsize_11.gif" class="quan" />
      </view>
    </view>
    <view class="title">专属福利</view>
    <view class="img-box">
      <image src="/static/junjun/Tsize_11.gif" class="left-img imgs" />
      <image src="/static/junjun/Tsize_11.gif" class="right-img imgs" />
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {}
  },
  methods: {},
  components: {},
}
</script>

<style lang="scss" scoped>
@mixin find-ellipsis {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.topGame {
  padding: 0 25rpx;
  .title {
    font-size: 38rpx;
    color: #000;
    font-weight: bolder;
    margin-bottom: 34rpx;
  }
  .main {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    .game-box {
      margin-bottom: 55rpx;
      margin-right: 65rpx;
      &:nth-child(4) {
        margin-right: 0;
      }
      &:nth-child(8) {
        margin-right: 0;
      }
      &:nth-child(12) {
        margin-right: 0;
      }
      .game-img {
        width: 110rpx;
        height: 110rpx;
        border-radius: 50%;
        // margin-bottom:14rpx;
      }
      .text {
        font-size: 26rpx;
        line-height: 26rpx;
        color: #000;
        width: 110rpx;
        text-align: center;
        @include find-ellipsis;
      }
    }
  }
  .btn-box {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 90rpx;
    .quan {
      width: 26rpx;
      height: 26rpx;
      margin-left: 8rpx;
      position: relative;
      top: 2rpx;
    }
    .btn {
      width: 345rpx;
      height: 86rpx;
      border: 3rpx solid #f0f0f0;
      border-radius: 43rpx;
      line-height: 86rpx;
      text-align: center;
      color: #000;
      font-size: 26rpx;
    }
  }
  .img-box {
    display: flex;
    justify-content: space-between;
    .imgs {
      width: 345rpx;
      height: 210rpx;
      border-radius: 15rpx;
    }
  }
}
</style>