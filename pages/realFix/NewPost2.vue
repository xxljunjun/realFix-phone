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
        <!-- 点击加一步后的 -->
        <view v-for="(item, index) in dignosticArr" :key="index">
          <text class="step">Step{{ index + 1 }}</text>
          <image
            src="/static/daotong/del.png"
            class="del"
            @click="reduceStep"
          />
          <view class="dignostic_box"></view>
        </view>
        <text class="btn" @click="addStep" v-if="addStepStatus">Add Step</text>
      </view>
      <!-- Correction -->
      <view class="correction">
        <view class="TXT">
          <text style="color: red">*</text>
          Correction
        </view>
        <view class="txt"> Part </view>
        <text class="btn" @click="chooseParts">Choose Parts</text>
        <view class="txt"> Description </view>
        <uni-easyinput
          type="textarea"
          autoHeight
          v-model="Dtcvalue"
          placeholder="Pelese select"
          class="Doctextarea"
          :clearable="false"
          placeholderStyle="color: #AAAAAA;font-size:30rpx;"
        >
        </uni-easyinput>
      </view>
    </view>
    <!-- last -->
    <view class="normal">
      <checkbox value="cb" checked="true" class="choose" />
      <view> Nominate for Featured Fix of the Week (1/3) </view>
      <view>
        <image src="/static/daotong/wenhao1.png" class="wenhao1" />
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
      dignosticArr: [],
      Dtcvalue: '',
      addStepStatus: true,
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
    addStep() {
      console.log('新增一级')
      let line = {}
      this.dignosticArr.push(line)
      if (this.dignosticArr.length > 4) {
        this.addStepStatus = false
      } else {
        this.addStepStatus = true
      }
    },
    chooseParts() {
      console.log('去选择部分')
    },
    reduceStep() {
      console.log('减少一步')
      this.dignosticArr.pop()
      this.addStepStatus = true
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
.btn {
  display: block;
  width: 222rpx;
  height: 72rpx;
  background: linear-gradient(
    360deg,
    rgba(213, 213, 213, 1) 0%,
    rgba(241, 241, 241, 1) 100%
  );
  border-radius: 10rpx;
  border: 1rpx solid rgba(184, 184, 184, 1);
  text-align: center;
  line-height: 72rpx;
  color: #0d7eff;
}

.newPost2 {
  padding-top: 88rpx;
  background: #ebebeb;
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
      .del {
        height: 44rpx;
        width: 44rpx;
        position: relative;
        top: 10rpx;
        margin-left: 20rpx;
      }
      .step {
        margin-bottom: 10rpx;
        font-size: 30rpx;

        color: rgba(85, 85, 85, 1);
        line-height: 38rpx;
      }
      .TXT {
        font-size: 34rpx;
        color: #000;
        line-height: 42rpx;
        margin-bottom: 10rpx;
        font-weight: bolder;
      }
      .dignostic_box {
        width: 690rpx;
        height: 345rpx;
        background: rgba(245, 245, 245, 1);
        box-shadow: 0px 4rpx 2rpx 0px rgba(226, 226, 226, 1);
        border-radius: 10rpx;
        border: 2rpx solid rgba(184, 184, 184, 1);
        margin-bottom: 35rpx;
        margin-top: 10rpx;
      }
    }
    .correction {
      margin-top: 40rpx;
      .TXT {
        font-size: 34rpx;
        color: #000;
        line-height: 42rpx;
        margin-bottom: 10rpx;
        font-weight: bolder;
      }
      .txt {
        margin: 8rpx 0;
        font-size: 30rpx;
        color: rgba(85, 85, 85, 1);
        line-height: 38rpx;
      }
      .Doctextarea {
        max-width: 690rpx;
        min-height: 88rpx;
        background: rgba(245, 245, 245, 1);
        box-shadow: 0px 4rpx 2rpx 0px rgba(226, 226, 226, 1);
        border-radius: 10rpx;
        border: 2rpx solid rgba(184, 184, 184, 1);
        font-size: 30rpx;
      }
    }
  }
  .normal {
    margin-top: 40rpx;
    width: 750rpx;
    height: 120rpx;
    background: #f9f9f9;
    box-shadow: 0px -2rpx 6rpx 0px rgba(0, 0, 0, 0.08);
    display: flex;
    align-items: center;
    .wenhao1 {
      width: 44rpx;
      height: 44rpx;
      margin-right: 30rpx;
    }
    .choose {
      margin: 0 16rpx 0 30rpx;
    }
  }
}
</style>