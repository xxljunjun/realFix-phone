<template>
  <view class="newPost2">
    <view class="box">
      <!-- title -->
      <view class="title">
        <view class="TXT">
          <text style="color: red">*</text>
          Title
        </view>
        <input class="titleInp" />
        <view class="txt_1">
          <view class="txt_0">
            <image src="/static/daotong/gan.png" class="gan" />
          </view>

          <view class="txt_2"
            >Enter a brief description of the symptom here with DTCs
            included.</view
          >
        </view>
      </view>
      <!-- Symptoms -->
      <view class="symptoms">
        <view class="TXT">
          <text style="color: red">*</text>
          Symptoms
        </view>
        <view class="symptoms_box"></view>
      </view>
      <!-- Dignostic Procedures -->
      <view class="Dignostic">
        <view class="TXT">
          <text style="color: red">*</text>
          Dignostic Procedures
        </view>
        <view class="dignostic_box"></view>
      </view>
    </view>
    <TopBack title="New Post" rightText="Submit" @rightBack="submitHandle" />
    <Toast :dialogIsShow="isSubimit" @confirm="ok" />
  </view>
</template>

<script>
import TopBack from './component/topBack/topBack'
import Toast from './component/toast'
export default {
  data() {
    return {
      isSubimit: false,
    }
  },
  components: {
    TopBack,
    Toast,
  },
  methods: {
    submitHandle() {
      this.isSubimit = true
      console.log('去提交案例')
    },
    ok() {
      this.isSubimit = false
      uni.redirectTo({
        url: 'Featured',
      })
    },
  },
}
</script>

<style lang="scss" scoped>
uni-page-body,
uni-page-refresh {
  height: 100%;
  background: rgba(235, 235, 235, 1);
}
.newPost2 {
  padding-top: 88rpx;
  .box {
    padding-left: 30rpx;
    .title {
      margin-top: 30rpx;
      .titleInp {
        width: 690rpx;
        height: 88rpx;
        background: rgba(245, 245, 245, 1);
        box-shadow: 0px 4rpx 2rpx 0px rgba(226, 226, 226, 1);
        border-radius: 10rpx;
        border: 2rpx solid rgba(184, 184, 184, 1);
      }
      .TXT {
        font-size: 34rpx;
        color: #000;
        line-height: 42rpx;
        margin-bottom: 10rpx;
        font-weight: bolder;
      }
      .txt_1 {
        display: flex;
        margin-top: 10rpx;
        .txt_0 {
          height: 36rpx;
          width: 36rpx;
          margin-right: 10rpx;
          .gan {
            height: 36rpx;
            width: 36rpx;
          }
        }
        .txt_2 {
        }
      }
    }
    .symptoms {
      margin-top: 40rpx;
      .TXT {
        font-size: 34rpx;
        color: #000;
        line-height: 42rpx;
        margin-bottom: 10rpx;
        font-weight: bolder;
      }
      .symptoms_box {
        width: 690rpx;
        height: 345rpx;
        background: rgba(245, 245, 245, 1);
        box-shadow: 0px 4rpx 2rpx 0px rgba(226, 226, 226, 1);
        border-radius: 10rpx;
        border: 2rpx solid rgba(184, 184, 184, 1);
      }
    }
    .Dignostic {
      margin-top: 40rpx;
      .TXT {
        font-size: 34rpx;
        color: #000;
        line-height: 42rpx;
        margin-bottom: 10rpx;
        font-weight: bolder;
      }
      .dignostic_box {
      }
    }
  }
}
</style>