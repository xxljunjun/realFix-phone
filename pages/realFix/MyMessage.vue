<template>
  <view class="myMessage">
    <TopBack title="MyMessage" />
    <view class="noData">
      <NoData types="1" />
    </view>
  </view>
</template>

<script>
import TopBack from './component/topBack/topBack'
import NoData from '../components/noData'
export default {
  data() {
    return {}
  },
  components: {
    TopBack,
    NoData,
  },
}
</script>

<style lang="scss" scoped>
uni-page-body,
uni-page-refresh {
  height: 100%;
  background: #eee;
}
.myMessage {
  height: 100%;
  .noData {
    width: 122rpx;
    height: 122rpx;
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    margin: auto;
  }
}
</style>