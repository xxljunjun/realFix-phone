<template>
  <view class="detail">
    <TopBack title="" rightText="Report" @rightBack="rightBack" />
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
        { id: 1, system: 'Content Quantity Needs Improvement', ischeck: false },
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
}
</style>