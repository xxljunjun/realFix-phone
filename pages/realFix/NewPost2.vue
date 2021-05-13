<template>
  <view>
    <TopBack title="New Post" rightText="Submit" @rightBack="submitHandle" />
    <Toast :dialogIsShow="isSubimit" @confirm="ok"/>
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
    ok(){
      this.isSubimit = false
    }
  },
}
</script>

<style lang="scss" scoped>
</style>