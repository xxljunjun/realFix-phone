<template>
  <view class="detail">
    <TopBack title="" rightText="Report" @rightBack="rightBack" />
    <view class="all">
      <view class="title"
        >The failure code of 2016 Mercedes-benz E300L is P064104</view
      >
    </view>
    <viewer :images="imgs">
      <img v-for="src in imgs" :src="src.url" :key="src.title" />
    </viewer>
    <Picker
      v-if="isReport"
      @toClose="toClosePicker"
      @submit="submit"
      title="Report"
      :listArr="reportListArr"
      types="report"
    />
  </view>
</template>

<script>
import TopBack from './component/topBack/topBack'
import Picker from './component/picker'
export default {
  data() {
    return {
      isReport: false,
      reportListArr: [
        { id: 1, system: 'Content Quantity Needs ', ischeck: false },
        { id: 2, system: 'Inaccurate Article', ischeck: false },
        { id: 3, system: 'Advertisement', ischeck: false },
        { id: 4, system: 'Inappropriate Content', ischeck: false },
      ],
      imgs: [
        {
          url:
            'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=85690711,3884201894&fm=27&gp=0.jpg',
          title: '图片1',
        },
      ],
    }
  },
  components: {
    TopBack,
    Picker,
  },
  methods: {
    rightBack() {
      console.log('弹出举报')
      this.isReport = true
    },
    toClosePicker() {
      this.isReport = false
    },
    submit(val) {
      console.log('提交意见', val)
      this.isReport = false
    },
  },
}
</script>
<style lang="scss" scoped>
uni-page-body,
uni-page-refresh {
  height: 100%;
}

.detail {
  padding-top: 88rpx;
  background: rgba(235, 235, 235, 1);
  height: 100%;
  box-sizing: border-box;
  .all {
    padding: 30rpx;
    .title {
      color: #000;
      font-weight: bolder;
      font-size: 40rpx;
      line-height: 49rpx;
    }
  }
}
</style>