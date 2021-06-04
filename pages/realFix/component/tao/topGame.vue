<template>
  <view class="topGame">
    <view class="title">热门游戏</view>
    <view class="main">
      <view class="game-box" v-for="(item, index) in toGameArr" :key="index">
        <image :src="item.path" class="game-img" />
        <view class="text">{{ item.text }}</view>
      </view>
    </view>
    <view class="btn-box">
      <view class="btn">
        查看全部游戏
        <image src="/static/junjun/tao_32.gif" class="quan" />
      </view>
    </view>
    <view class="title">专属福利</view>
    <view class="img-box">
      <image src="/static/junjun/tao_36.gif" class="left-img imgs" />
      <image src="/static/junjun/tao_38.gif" class="right-img imgs" />
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      toGameArr: [
        { ia: 1, path: '/static/junjun/tao_03.gif', text: '口袋妖怪复刻' },
        { ia: 2, path: '/static/junjun/tao_05.gif', text: '王者荣耀' },
        { ia: 3, path: '/static/junjun/tao_07.gif', text: '拳皇97' },
        { ia: 4, path: '/static/junjun/tao_09.gif', text: '三国战记' },
        { ia: 5, path: '/static/junjun/tao_15.gif', text: '妖神记' },
        { ia: 6, path: '/static/junjun/tao_16.gif', text: '漆黑的魅影' },
        { ia: 7, path: '/static/junjun/tao_17.gif', text: '传奇' },
        { ia: 8, path: '/static/junjun/tao_18.gif', text: '口袋妖怪复刻' },
        { ia: 9, path: '/static/junjun/tao_23.gif', text: '口袋妖怪复刻' },
        { ia: 10, path: '/static/junjun/tao_24.gif', text: '口袋妖怪复刻' },
        { ia: 11, path: '/static/junjun/tao_25.gif', text: '口袋妖怪复刻' },
        { ia: 12, path: '/static/junjun/tao_26.gif', text: '口袋妖怪复刻' },
      ],
    }
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
      margin-right: 35rpx;
      display: flex;
      flex-direction: column;
      align-items: center;
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
        margin-bottom: 14rpx;
      }
      .text {
        font-size: 26rpx;
        line-height: 26rpx;
        width: 140rpx;
        color: #000;
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
      margin-left: 10rpx;
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