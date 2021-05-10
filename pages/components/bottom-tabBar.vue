<template>
  <view class="bottom-tabBar">
    <view class="backImg"></view>
    <view
      class="home"
      @click="goToHome"
      :class="{ active: current === 'featured' }"
    >
      <image
        src="/static/daotong/anli.png"
        class="homeImg"
        mode="aspectFill"
        v-if="current === 'featured'"
      />
      <image
        src="/static/daotong/featured-icon@2x.png"
        class="homeImg"
        mode="aspectFill"
        v-else
      />
      <view>Featured</view>
    </view>
    <view class="newPost" @click="goTonewPost">
      <image
        src="/static/daotong/creat.png"
        class="newPostImg"
        mode="aspectFill"
      />
      <view>New Post</view>
    </view>
    <view class="me" @click="goTome" :class="{ active: current === 'me' }">
      <image
        src="/static/daotong/me-current@2x.png"
        class="meImg"
        mode="aspectFill"
        v-if="current === 'me'"
      />
      <image
        src="/static/daotong/person.png"
        class="meImg"
        mode="aspectFill"
        v-else
      />
      <view>Me</view>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {}
  },
  props: {
    current: {
      type: String,
      default: '',
    },
  },
  methods: {
    goToHome() {
      console.log('goToHome')
      uni.navigateTo({
        url: 'Featured',
      })
    },
    goTonewPost() {
      console.log('goTonewPost')
      uni.navigateTo({
        url: 'NewPost',
      })
    },
    goTome() {
      console.log('goTome')
      uni.navigateTo({
        url: 'Myself',
      })
    },
  },
}
</script>

<style lang="scss" scoped>
.bottom-tabBar {
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 100rpx;
  background-size: 200%;
  display: flex;
  justify-content: space-around;
  text-align: center;
  .backImg {
    width: 750rpx;
    height: 116rpx;
    position: absolute;
    bottom: 0;
    z-index: -1;
    background:#E6E6E6;
    border-top:2rpx solid #D2D2D2;
  }
  .home {
    &.active {
      color: #007aff;
    }
    .homeImg {
      width: 48rpx;
      height: 48rpx;
    }
  }
  .newPost {
    .newPostImg {
      width: 64rpx;
      height: 64rpx;
    }
  }
  .me {
    &.active {
      color: #007aff;
    }
    .meImg {
      width: 48rpx;
      height: 48rpx;
    }
  }
  .home,
  .newPost,
  .me {
    font-size: 20rpx;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
}
</style>