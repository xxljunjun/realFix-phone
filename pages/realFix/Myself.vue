<template>
  <view>
    <button @click="tomyPost">点我去myPost</button>
    <button @click="toFavorite">点我去Favorite</button>
    <!-- 自定义底部导航栏 -->
    <BottomTabBar current="me" />
  </view>
</template>

<script>
import BottomTabBar from '../components/bottom-tabBar'
export default {
  data() {
    return {}
  },
  components: {
    BottomTabBar,
  },
  methods: {
    tomyPost() {
      uni.navigateTo({
        url: 'Mypost',
      })
    },
    toFavorite() {
      uni.navigateTo({
        url: 'Favorite',
      })
    },
  },
}
</script>

<style lang="scss" scoped>
</style>