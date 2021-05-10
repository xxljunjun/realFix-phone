<template>
  <view class="detail">
    <TopBack title="" rightText="Report" @rightBack="rightBack" />
    <view class="userInfo">
      <view class="title">The failure code of 2016 Mercedes-benz E300L  is P064104</view>
    </view>
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
.detail {
  padding-top: 88rpx;
}
</style>