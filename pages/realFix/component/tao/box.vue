<template>
  <view>
    <view class="box" v-for="(item, index) in boxArr" :key="index">
      <view class="img-box">
        <image :src="item.path" class="imags" />
        <view class="game">{{ item.gameNmae }}</view>
      </view>
      <view class="title">{{ item.title }}</view>
      <view class="types">
        <text class="type">{{ item.type }}</text>
        <text>{{ item.who }}</text>
      </view>
      <view class="status">
        <view class="dtc1 dtc">{{ item.dtc1 }}</view>
        <view class="dtc2 dtc">{{ item.dtc2 }}</view>
      </view>
      <view class="priceBox">
        <view class="price">￥{{ item.price }}</view>
        <view class="same">看相似</view>
      </view>
      <view class="time">
        <view class="text1">{{ item.text1 }}</view>
        <view class="text2">{{ item.text2 }}</view>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  props: {
    boxArr: {
      type: Array,
      default: [],
    },
  },
  data() {
    return {}
  },
}
</script>

<style lang="scss" scoped>
@mixin find-ellipsis {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
@mixin find-two-ellipsis {
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}
.box {
  width: 340rpx;
  position: relative;
  margin-bottom: 20rpx;
  background: #fff;
  height: 100%; //瀑布流布局
  .img-box {
    height: 350rpx;
    width: 340rpx;
    position: relative;
    .imags {
      height: 350rpx;
      width: 340rpx;
    }
    .game {
      color: #fff;
      font-size: 20rpx;
      width: 150rpx;
      height: 34rpx;
      background: #ffaf02;
      position: absolute;
      bottom: -12rpx;
      left: 18rpx;
      text-align: center;
      line-height: 34rpx;
      border-radius: 5rpx;
    }
  }
  .title {
    padding: 0 20rpx;
    width: 340rpx;
    color: #000;
    font-size: 28rpx;
    line-height: 38rpx;
    @include find-two-ellipsis;
    margin: 35rpx 0;
  }
  .types {
    padding: 0 20rpx;
    color: #474747;
    font-size: 22rpx;
    margin-bottom: 22rpx;
    .type {
      margin-right: 15rpx;
    }
  }
  .status {
    padding: 0 20rpx;
    display: flex;
    flex-direction: row;
    .dtc {
      height: 30rpx;
      border-radius: 15rpx;
      color: #fff;
      font-size: 20rpx;
      padding: 0 10rpx;
      line-height: 30rpx;
    }
    .dtc1 {
      background: #ffb900;
      margin-right: 10rpx;
    }
    .dtc2 {
      background: #85cd5f;
    }
  }
  .priceBox {
    padding: 0 20rpx;
    height: 110rpx;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .price {
      color: #f80344;
      font-size: 30rpx;
      font-weight: bolder;
    }
    .same {
      width: 100rpx;
      height: 50rpx;
      border-radius: 25rpx;
      border: 1rpx solid #b5b5b5;
      color: #000;
      font-size: 20rpx;
      line-height: 50rpx;
      text-align: center;
    }
  }
  .time {
    padding: 0 20rpx;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 68rpx;
    border-top: 2rpx solid #eeeeee;
    .text1 {
      font-size: 20rpx;
      color: #000;
    }
    .text2 {
      font-size: 16rpx;
      color: #898989;
    }
  }
}
</style>