<template>
  <view class="mySelf">
    <view class="heard">
      <view class="daily">Daily Tokens </view>
      <view class="logoutbox" @click="toLogOut">Log out</view>
    </view>
    <view class="man">
      <image src="/static/myself/body.png" class="manImg" mode="scaleToFill" />
      <view>
        <view class="myName">AUTEL</view>
        <view class="text">Senior maintenance </view>
      </view>
      <image src="/static/myself/arrow.png" class="arrow" />
    </view>
    <view class="fourBox man">
      <view @click="goTomythings(1)">
        <view class="myName">4</view>
        <view class="text">Followers</view>
      </view>
      <view @click="goTomythings(2)">
        <view class="myName">4</view>
        <view class="text">Following</view>
      </view>
      <view @click="goTomythings(3)">
        <view class="myName">4</view>
        <view class="text">Fixed</view>
      </view>
      <view @click="goTomythings(4)">
        <view class="myName">4</view>
        <view class="text">Comments</view>
      </view>
    </view>
    <view
      class="box"
      v-for="(item, index) in boxarr"
      :key="index"
      @click="goToPage(item.id)"
    >
      <image :src="item.iconSrc" class="colorImg" />
      <view>{{ item.message }}</view>
      <!-- <view>{{ item.point }}</view> -->
      <image src="/static/myself/arrow.png" class="arrow" />
    </view>
    <!-- 自定义底部导航栏 -->
    <BottomTabBar current="me" />
    <MyDialog
      :dialogIsShow="dialogIsShow"
      @cancel="toclosemask"
      @confirm="toConfirm"
    />
  </view>
</template>

<script>
import BottomTabBar from '../components/bottom-tabBar'
import MyDialog from './component/myDialog'
export default {
  data() {
    return {
      dialogIsShow: false,
      boxarr: [
        { id: 1, message: 'Lottery', iconSrc: '/static/myself/red.png' },
        {
          id: 2,
          message: 'Points ',
          iconSrc: '/static/myself/yellow.png',
          point: 'To receive 100 points',
        },
        { id: 3, message: 'Favorite', iconSrc: '/static/myself/orange.png' },
        { id: 4, message: 'My Post', iconSrc: '/static/myself/green.png' },
        {
          id: 5,
          message: 'My Messages',
          iconSrc: '/static/myself/blue.png',
        },
      ],
    }
  },
  components: {
    BottomTabBar,
    MyDialog,
  },
  methods: {
    goTomythings(index) {
      switch (index) {
        case 1:
          uni.navigateTo({
            url: 'Points',
          })
          break
        case 2:
          uni.navigateTo({
            url: 'Points',
          })
          break
        case 3:
          uni.navigateTo({
            url: 'Favorite',
          })
          break
        case 4:
          uni.navigateTo({
            url: 'Mypost',
          })
          break
        default:
          break
      }
    },
    toclosemask() {
      this.dialogIsShow = false
    },
    toConfirm() {
      this.dialogIsShow = false
    },
    goToPage(id) {
      switch (id) {
        case 1:
          uni.navigateTo({
            url: 'Lottery',
          })
          break
        case 2:
          uni.navigateTo({
            url: 'Points',
          })
          break
        case 3:
          uni.navigateTo({
            url: 'Favorite',
          })
          break
        case 4:
          uni.navigateTo({
            url: 'Mypost',
          })
          break
        case 5:
          break

        default:
          break
      }
    },
    toLogOut() {
      console.log('退出登录')
      this.dialogIsShow = true
    },
  },
}
</script>

<style lang="scss" scoped>
uni-page-body,
uni-page-refresh {
  height: 100%;
}
.mySelf {
  background: rgba(224, 224, 224, 1);
  height: 100%;
  font-size: 34rpx;
  color: #000;
  .heard {
    width: 750rpx;
    height: 80rpx;
    background: rgba(235, 235, 235, 1);
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 70rpx;
    .daily {
      width: 325rpx;
      height: 80rpx;
      background: rgba(255, 250, 228, 1);
      border-radius: 0px 65px 65px 0px;
      filter: blur(0px);
      display: flex;
      align-items: center;
    }
    .logoutbox {
      margin-right: 30rpx;
    }
  }
  .man {
    width: 750rpx;
    height: 150rpx;
    background: rgba(235, 235, 235, 1);
    display: flex;
    align-items: center;
    .myName {
      margin-bottom: 12rpx;
      font-size: 40rpx;
      font-weight: bold;
    }
    .text {
      color: rgba(85, 85, 85, 1);
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    .manImg {
      height: 150rpx;
      width: 150rpx;
      margin: 0 24rpx 0 30rpx;
    }
    .arrow {
      width: 44rpx;
      height: 44rpx;
      margin-left: 140rpx;
    }
  }
  .fourBox {
    width: 750rpx;
    height: 180rpx;
    background: rgba(235, 235, 235, 1);
    display: flex;
    align-items: center;
    margin-bottom: 20rpx;
    text-align: center;
    justify-content: space-around;
    font-size: 26rpx;
    color: rgba(85, 85, 85, 1);
    line-height: 32rpx;
  }
  .box {
    width: 750rpx;
    height: 110rpx;
    background: rgba(235, 235, 235, 1);
    display: flex;
    align-items: center;
    box-shadow: 0px 2px 0px 0px rgba(255, 255, 255, 0.5),
      0px -2px 0px 0px rgba(210, 210, 210, 1);
    position: relative;
    .arrow {
      width: 44rpx;
      height: 44rpx;
      position: absolute;
      right: 40rpx;
      top: 37rpx;
    }
    .colorImg {
      height: 56rpx;
      width: 56rpx;
      margin: 0 30rpx;
    }
  }
}
</style>