<template>
  <view class="points">
    <image src="/static/daotong/back.png" class="back" @tap="back" />
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
.points {
  position: relative;
  .back {
    height: 48rpx;
    width: 48rpx;
    position: absolute;
    left: 30rpx;
    top: 30rpx;
  }
}
</style>