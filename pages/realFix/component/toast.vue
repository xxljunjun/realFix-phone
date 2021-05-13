<template>
  <view class="myDialog" v-if="dialogIsShow">
    <view class="content">
      <view class="img_box"
        ><image src="/static/daotong/gou.png" class="succeedimg"
      /></view>
      <view class="title">Submitted successfully</view>
      <view class="text_1">
        <view>Congratulations! Get 100</view>
        <image src="/static/daotong/lucky.png" class="luckyimg" />
      </view>
      <view class="text_2"
        >(you have 2 more places to participate in the selected cases this
        month)</view
      >
      <view class="Confirm" @tap="Confirm">OK</view>
    </view>
    <view class="mask"></view>
  </view>
</template>

<script>
export default {
  data() {
    return {}
  },
  props: {
    dialogIsShow: Boolean,
  },
  methods: {
    cancel() {
      this.$emit('cancel', false)
    },
    Confirm() {
      this.$emit('confirm')
    },
  },
}
</script>

<style lang="scss" scoped>
.myDialog {
  width: 750rpx;
  height: 100%;
}
.mask {
  width: 750rpx;
  height: 100%;
  background: rgba(0, 0, 0, 0.4);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
}
.content {
  width: 580rpx;
  height: 534rpx;
  background: rgba(245, 245, 245, 1);
  border-radius: 14rpx;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  z-index: 9999;
  text-align: center;
  .img_box {
    margin: 60rpx 0 20rpx;
    .succeedimg {
      width: 100rpx;
      height: 100rpx;
    }
  }
  .title {
    margin-bottom: 16rpx;
    font-size: 34rpx;
    color: rgba(0, 0, 0, 1);
    line-height: 42rpx;
  }
  .text_1 {
    margin-bottom: 30rpx;
    font-size: 30rpx;
    color: rgba(255, 112, 18, 1);
    line-height: 38rpx;
    display: flex;
    align-items: center;
    justify-content: center;
    .luckyimg {
      height: 64rpx;
      width: 64rpx;
      margin-left: 10rpx;
    }
  }
  .text_2 {
    margin-bottom: 40rpx;
    font-size: 26rpx;
    color: rgba(85, 85, 85, 1);
    line-height: 34rpx;
  }
  .Confirm {
    border-top: 1rpx solid #ccc;
    width: 580rpx;
    height: 100rpx;
    line-height: 100rpx;
    color: #0d7eff;
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
</style>