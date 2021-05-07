<template>
  <view>
    <button @click="tomyPost">点我去myPost</button>
    <button @click="toFavorite">点我去Favorite</button>
  </view>
</template>

<script>
export default {
  data(){
    return {

    }
  },
  methods:{
    tomyPost(){
      uni.navigateTo({
        url: 'Mypost',
      })
    },
    toFavorite(){
      uni.navigateTo({
        url: 'Favorite',
      })
    }
  }
}
</script>

<style lang="scss" scoped>
</style>