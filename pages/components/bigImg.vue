<template>
  <view class="scaleImg" v-if="status">
    <!-- <button class="btn" @click.stop="close"></button> -->
    <movable-area @click.stop="close">
      <movable-view
        direction="all"
        scale-value="1"
        scale-min="1"
        scale="true"
        scale-max="4"
      >
        <image :src="url" mode="" @click.stop></image>
      </movable-view>
    </movable-area>
  </view>
</template>
    
<script>
export default {
  data() {
    return {
      status: false,
      url: '',
    }
  },
  methods: {
    close() {
      this.status = false
      this.url = ''
      this.$emit('closeImg')
    },
    showImage(val) {
      this.status = true
      this.url = val
    },
  },
}
</script>

<style lang="scss" scoped>
.scaleImg {
  width: 100%;
  height: 100%;
  z-index: 5000;
  & > movable-area {
    height: 100%;
    width: 100%;
    position: fixed;
    overflow: hidden;
    left: 0;
    top: 0;
    z-index: 9999000;
    background-color: rgba(0, 0, 0, 0.8);

    movable-view {
      display: flex;
      justify-content: center;
      width: 100%;
      height: 100%;
      image {
        top: 10%;
        width: 80%;
        height: 80%;
      }
    }
  }
}
// .btn {
//   position: fixed;
//   width: rpx(90);
//   height: rpx(90);
//   left: rpx(62);
//   top: rpx(54);
//   z-index: 999999999;
//   border-radius: rpx(20);
//   background-color: rgba(51, 51, 51, 0.8);
//   background-image: url('/static/daotong/close.png');
//   background-repeat: no-repeat;
//   background-position: center;
//   background-size: rpx(60) rpx(60);
//   color: white;
// }
</style>