<template>
  <view class="MyComment">
    <TopBack title="MyComment" />
    <view class="noData">
      <NoData types="4" />
      1111111
    </view>
    <myLoading/>
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
.MyComment {
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