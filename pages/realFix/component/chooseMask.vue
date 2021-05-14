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
        <view class="system_main">
          <view class="delBox">
            <view class="title">The Makes I follow</view>
            <view class="edit" @tap="toEdit">{{ status }}</view>
          </view>
          <!-- 已选择 -->
          <view class="box_1">
            <view class="itemBox" v-for="item in maks2Arr" :key="item.id"
              >{{ item.maks2Name }}
              <image
                src="/static/daotong/delete.png"
                class="close"
                v-if="isToEdit"
                @click="toDelMake(item.id)"
              />
            </view>
          </view>
          <view class="makeBox">
            <view class="title">More Makes</view>
          </view>
          <!-- 未选择 -->
          <view class="box_2">
            <view class="itemBox" v-for="item in maks1Arr" :key="item.id"
              >{{ item.maks1Name }}
              <image
                src="/static/daotong/jia.png"
                class="jia"
                v-if="isToEdit"
                @click="toAddMake(item.id)"
              />
            </view>
          </view>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      isToEdit: false,
      status: 'Edit',
      advice: '',
      maks1Arr: [
        { id: 1, maks1Name: 'GM' },
        { id: 2, maks1Name: 'BMW' },
        { id: 3, maks1Name: 'Benz' },
        { id: 4, maks1Name: 'Ford' },
        { id: 5, maks1Name: 'Toyota' },
      ],
      maks2Arr: [
        { id: 6, maks2Name: 'Jaguar' },
        { id: 7, maks2Name: 'Mazda' },
        { id: 8, maks2Name: 'Land Rover' },
        { id: 9, maks2Name: 'Aston Martin' },
        { id: 10, maks2Name: 'CHEVRDLET' },
      ],
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
    toAddMake(id) {
      console.log('增加')
      this.maks1Arr = this.maks1Arr.filter((val) => {
        if (val.id == id) {
          this.maks2Arr.push({ id: id, maks2Name: val.maks1Name })
        }
        return val.id !== id
      })
    },
    toDelMake(id) {
      console.log('删除')
      this.maks2Arr = this.maks2Arr.filter((val) => {
        if (val.id == id) {
          this.maks1Arr.push({ id: id, maks1Name: val.maks2Name })
        }
        return val.id !== id
      })
    },
    toClose() {
      this.$emit('toClose')
    },
    toEdit() {
      if (this.status === 'Edit') {
        this.status = 'Done'
        this.isToEdit = true
      } else {
        this.status = 'Edit'
        this.isToEdit = false
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
        height: 1075rpx;
        background: rgba(235, 235, 235, 1);
        padding: 0 0 0 30rpx;
        box-sizing: border-box;
        overflow: auto;
        .delBox {
          display: flex;
          align-items: center;
          justify-content: space-between;
          height: 100rpx;
          font-size: 34rpx;
          line-height: 41rpx;
          .title {
            color: #000;
            font-weight: bolder;
          }
          .edit {
            color: #007aff;
            font-size: 30rpx;
            margin-right: 30rpx;
          }
        }
        .makeBox {
          display: flex;
          align-items: center;
          justify-content: space-between;
          height: 100rpx;
          font-size: 34rpx;
          line-height: 41rpx;
          color: #000;
          font-weight: bolder;
        }
        .box_1 {
          display: flex;
          flex-wrap: wrap;
          font-size: 30rpx;
          .itemBox {
            margin-right: 20rpx;
            width: 335rpx;
            height: 88rpx;
            background: rgba(223, 223, 223, 1);
            border-radius: 10rpx;
            margin-bottom: 20rpx;
            text-align: center;
            line-height: 88rpx;
            position: relative;
            .close {
              height: 30rpx;
              width: 30rpx;
              position: absolute;
              right: 10rpx;
              top: 10rpx;
            }
          }
        }
        .box_2 {
          display: flex;
          flex-wrap: wrap;
          font-size: 30rpx;
          .itemBox {
            margin-right: 20rpx;
            width: 335rpx;
            height: 88rpx;
            margin-bottom: 20rpx;
            text-align: center;
            line-height: 88rpx;
            background: rgba(245, 245, 245, 1);
            border-radius: 10rpx;
            border: 1px solid rgba(190, 190, 190, 1);
            position: relative;
            .jia {
              height: 30rpx;
              width: 30rpx;
              position: absolute;
              right: 10rpx;
              top: 10rpx;
            }
          }
        }
      }
    }
  }
}
</style>