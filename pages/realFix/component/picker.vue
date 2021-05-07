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
        <view class="system_main" v-if="types === 'report'">
          <view
            v-for="item in listArr"
            :key="item.id"
            @tap="toSelectadvice(item)"
            :class="item.ischeck ? 'selected item0' : 'item0 noselcted'"
          >
            {{ item.system }}
            <image
              src="/static/daotong/blue.png"
              class="blue"
              v-show="item.ischeck"
            />
          </view>
          <view class="textmore">
            <view class="addText">Add Additional Comments</view>
            <uni-easyinput
              type="textarea"
              v-model="advice"
              placeholder="Please explain the problem in detail and we will deal with it as soon as possible"
              class="advicetextarea"
              :clearable="false"
              placeholderStyle="color: #AAAAAA;font-size:30rpx;"
            >
            </uni-easyinput>
          </view>
        </view>
        <view class="system_main" v-if="types === 'system'">
          <view
            v-for="item in listArr"
            :key="item.id"
            @tap="toSelectadvice(item)"
            :class="item.ischeck ? 'selected item0' : 'item0 noselcted'"
          >
            {{ item.system }}
            <image
              src="/static/daotong/blue.png"
              class="blue"
              v-show="item.ischeck"
            />
          </view>
        </view>
        <!-- 按钮 -->
        <view class="btn_box" v-if="types === 'report'">
          <button type="primary" class="submit" @tap="submit">Submit</button>
        </view>
        <view class="btn_box" v-if="types === 'system'">
          <button type="primary" class="Reset" @tap="emptySystem">Reset</button>
          <button type="primary" class="Ok" @tap="okSystem">Ok</button>
        </view>
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
    types: {
      type: String,
      default: '',
      required: true,
    },
    listArr: {
      type: Array,
      default: () => {
        return []
      },
      required: false,
    },
  },
  components: {},
  mounted() {},
  methods: {
    okSystem() {
      this.$emit('okSystem')
    },
    emptySystem() {
      this.$emit('emptySystem')
    },
    submit() {
      switch (this.types) {
        case 'report':
          let arr = this.listArr.filter((val) => {
            return val.ischeck
          })
          let params = {
            davice: this.advice,
            listArr: arr,
          }
          this.$emit('submit', params)
          break
        case 'system':
          break
        default:
          break
      }
    },
    toClose() {
      this.$emit('toClose')
    },
    toSelectadvice(item) {
      switch (this.types) {
        case 'report':
          item.ischeck = !item.ischeck
          break
        case 'system':
          item.ischeck = !item.ischeck
          break
        default:
          break
      }
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
          font-weight: 600;
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
      .btn_box {
        height: 120rpx;
        width: 750rpx;
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        line-height: 88rpx;
        background: linear-gradient(
            180deg,
            rgba(233, 233, 233, 1) 0%,
            rgba(211, 211, 211, 1) 100%
          )
          rgba(235, 235, 235, 1);
        box-shadow: 0px -2rpx 6rpx 0px rgba(0, 0, 0, 0.08);
        .Reset {
          width: 335rpx;
          height: 88rpx;
          background: linear-gradient(
            360deg,
            rgba(213, 213, 213, 1) 0%,
            rgba(241, 241, 241, 1) 100%
          );
          border-radius: 10rpx;
          border: 1rpx solid rgba(184, 184, 184, 1);
          color: rgba(0, 0, 0, 1);
          font-size: 34rpx;
        }
        .submit {
          width: 690rpx;
          height: 88rpx;
          background: linear-gradient(
            360deg,
            rgba(0, 122, 255, 1) 0%,
            rgba(99, 174, 255, 1) 100%
          );
          border-radius: 10rpx;
          border: 1rpx solid rgba(18, 114, 221, 1);
          color: rgba(255, 255, 255, 1);
          font-size: 34rpx;
        }
        .Ok {
          width: 335rpx;
          height: 88rpx;
          background: linear-gradient(
            360deg,
            rgba(0, 122, 255, 1) 0%,
            rgba(99, 174, 255, 1) 100%
          );
          border-radius: 10rpx;
          border: 1rpx solid rgba(18, 114, 221, 1);
          color: rgba(255, 255, 255, 1);
          font-size: 34rpx;
        }
      }
    }
  }
}
</style>