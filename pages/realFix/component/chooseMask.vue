<template>
  <view class="picker">
    <view class="system_BoX">
      <view class="bottom_Box">
        <!-- 上面 -->
        <view class="system_top">
          <text class="sy_text">{{ title }}</text>
          <image src="/static/daotong/close.png" class="close" @tap="toClose" />
        </view>
        <!-- 中间 -->
        <view class="system_main"> </view>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      advice: '',
    }
  },
  props: {
    title: {
      type: String,
      default: '',
      required: true,
    },
  },
  components: {},
  mounted() {},
  methods: {
    toClose() {
      this.$emit('toClose')
    },
  },
}
</script>

<style lang="scss" scoped>
.picker {
  /deep/.uni-easyinput__content-textarea {
    padding: 0;
    height: 0;
  }
  /deep/.input-padding {
    box-sizing: border-box;
    padding: 20rpx 30rpx 0;
    color: #000;
    font-size: 30rpx;
    height: 238rpx;
  }
}
.picker {
  .system_BoX {
    width: 750rpx;
    height: 100%;
    background: rgba(0, 0, 0, 0.4);
    position: fixed;
    bottom: 0;
    z-index: 999;
    .bottom_Box {
      width: 750rpx;
      position: fixed;
      bottom: 0;
      .system_top {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 750rpx;
        height: 90rpx;
        background: linear-gradient(
          360deg,
          rgba(210, 210, 210, 1) 0%,
          rgba(255, 255, 255, 1) 100%
        );
        box-shadow: 0px 2rpx 0px 0px rgba(204, 204, 204, 1);
        border-radius: 14rpx 14rpx 0px 0px;
        position: relative;
        .sy_text {
          font-size: 36rpx;
          font-family: HelveticaNeue-Medium, HelveticaNeue;
          font-weight: bold;
          color: rgba(0, 0, 0, 1);
          line-height: 36rpx;
        }
        .close {
          height: 32rpx;
          width: 32rpx;
          position: absolute;
          right: 30rpx;
          top: 30rpx;
        }
      }
      .system_main {
        width: 750rpx;
        height: 790rpx;
        background: rgba(235, 235, 235, 1);
        padding-left: 30rpx;
        overflow: auto;
        .textmore {
          margin-top: 30rpx;
          font-size: 34rpx;
          font-family: HelveticaNeue;
          color: rgba(0, 0, 0, 1);
          line-height: 42rpx;
          font-size: 30rpx;
          .advicetextarea {
            max-width: 690rpx;
            height: 240rpx;
            background: #fff;
            box-shadow: 0px 4rpx 2rpx 0px rgba(226, 226, 226, 1);
            border-radius: 10rpx;
            border: 2rpx solid rgba(184, 184, 184, 1);
            font-size: 30rpx;
          }
        }
        .selected {
          background: rgba(206, 221, 237, 1);
          color: #007eff;
        }
        .noselcted {
          color: #555555;
          background: rgba(223, 223, 223, 1);
        }
        .item0 {
          height: 72rpx;
          min-width: 168rpx;
          max-width: 540rpx;
          text-align: center;
          line-height: 72rpx;
          display: inline-block;
          margin-right: 20rpx;
          margin-top: 20rpx;
          padding: 0 35rpx;
          border-radius: 10rpx;
          position: relative;
          .blue {
            height: 34rpx;
            width: 34rpx;
            position: absolute;
            bottom: 0;
            right: 0;
          }
        }
      }
    }
  }
}
</style>