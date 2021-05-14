<template>
  <view class="noData_Box">
    <image
      src="/static/daotong/nodata1.png"
      class="nodata1"
      v-if="types === '1'"
    />
    <image
      src="/static/daotong/nodata2.png"
      class="nodata1"
      v-if="types === '2'"
    />
    <image
      src="/static/daotong/nodata3.png"
      class="nodata1"
      v-if="types === '3'"
    />
    <image
      src="/static/daotong/nodata4.png"
      class="nodata1"
      v-if="types === '4'"
    />
    <view>No Data</view>
  </view>
</template>

<script>
export default {
  data() {
    return {}
  },
  props: {
    types: {
      type: String,
      default: '1',
      required: true,
    },
  },
}
</script>

<style lang="scss" scoped>
.noData_Box {
  font-size: 30rpx;
  color: rgba(136, 136, 136, 1);
  line-height: 36px;
  .nodata1 {
    height: 122rpx;
    width: 122rpx;
  }
}
</style>