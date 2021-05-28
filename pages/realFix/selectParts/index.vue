<template>
  <view class="selectParts">
    <TopBack title="Select Parts" />
    <view class="inp">
      <input class="input" placeholder="Search" />
      <image src="/static/daotong/search.png" class="search_img" />
    </view>
  </view>
</template>

<script>
import TopBack from '../component/topBack/topBack'
export default {
  data() {
    return {}
  },
  props: {},
  components: {
    TopBack,
  },
  methods: {},
}
</script>

<style lang="scss" scoped>
.selectParts {
  padding-top: 88rpx;
  background: #ebebeb;
  .inp {
    position: relative;
    margin-left: 30rpx;
    margin-right: 30rpx;
    .search_img {
      height: 36rpx;
      width: 36rpx;
      position: absolute;
      top: 14rpx;
      left: 30rpx;
    }
    .input {
      width: 612rpx;
      height: 64rpx;
      background: rgba(245, 245, 245, 1);
      box-shadow: 0px 3rpx 9rpx 0px rgba(0, 0, 0, 0.2);
      border-radius: 36rpx;
      border: 2px solid rgba(204, 204, 204, 1);
      font-size: 30rpx;
      font-family: HelveticaNeue;
      color: #000;
      line-height: 30rpx;
    }
  }
}
</style>