<template>
  <view>
    <web-view :src="url" :progress="false"></web-view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      url: '',
      title: '',
    }
  },
  onLoad(op) {
    console.log(op.url)
    this.url = decodeURIComponent(op.url)
    console.log('拿到传递过来的参数', this.url)
  },
  onReady() {
    //改变标题
    uni.setNavigationBarTitle({
      title: this.title,
    })
  },
}
</script>

<style lang="scss" scoped>
</style>