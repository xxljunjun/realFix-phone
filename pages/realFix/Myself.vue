<template>
  <view class="mySelf">
    <view class="heard">
      <view class="daily" @tap="goToSign" v-show="imgStatus">
        <view class="txt">Daily Tokens</view>
      </view>
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
        <view class="myName">84</view>
        <view class="text">Followers</view>
      </view>
      <view @click="goTomythings(2)">
        <view class="myName">56</view>
        <view class="text">Following</view>
      </view>
      <view @click="goTomythings(3)">
        <view class="myName">110</view>
        <view class="text">Fixed</view>
      </view>
      <view @click="goTomythings(4)">
        <view class="myName">256</view>
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
    <!-- 签到成功 -->
    <view class="succeed" v-if="isSign">
      <image src="/static/daotong/succeed.png" class="succeedImg" />
      <view class="text">Received 100 Points</view>
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
import BottomTabBar from "../components/bottom-tabBar";
import MyDialog from "./component/myDialog";
export default {
  data() {
    return {
      imgStatus: true,
      isSign: false,
      dialogIsShow: false,
      boxarr: [
        { id: 1, message: "Lottery", iconSrc: "/static/myself/red.png" },
        {
          id: 2,
          message: "Points ",
          iconSrc: "/static/myself/yellow.png",
          point: "To receive 100 points",
        },
        { id: 3, message: "Favorite", iconSrc: "/static/myself/orange.png" },
        { id: 4, message: "My Post", iconSrc: "/static/myself/green.png" },
        {
          id: 5,
          message: "My Messages",
          iconSrc: "/static/myself/blue.png",
        },
      ],
    };
  },
  components: {
    BottomTabBar,
    MyDialog,
  },
  methods: {
    goToSign() {
      console.log("签到");
      this.imgStatus = false;
      this.isSign = true;
      setTimeout(() => {
        this.isSign = false;
      }, 2000);
    },
    goTomythings(index) {
      switch (index) {
        case 1:
          uni.navigateTo({
            url: "MyFlowers",
          });
          break;
        case 2:
          uni.navigateTo({
            url: "MyFollowing",
          });
          break;
        case 3:
          uni.navigateTo({
            url: "MyFixed",
          });
          break;
        case 4:
          uni.navigateTo({
            url: "MyComment",
          });
          break;
        default:
          break;
      }
    },
    toclosemask() {
      this.dialogIsShow = false;
    },
    toConfirm() {
      this.dialogIsShow = false;
    },
    goToPage(id) {
      switch (id) {
        case 1:
          uni.navigateTo({
            url: "Lottery",
          });
          break;
        case 2:
          uni.navigateTo({
            url: "Points",
          });
          break;
        case 3:
          uni.navigateTo({
            url: "Favorite",
          });
          break;
        case 4:
          uni.navigateTo({
            url: "Mypost",
          });
          break;
        case 5:
          uni.navigateTo({
            url: "MyMessage",
          });
          break;

        default:
          break;
      }
    },
    toLogOut() {
      console.log("退出登录");
      this.dialogIsShow = true;
    },
  },
};
</script>

<style lang="scss" scoped>
uni-page-body,
uni-page-refresh {
  height: 100%;
}
.mySelf {
  background: rgba(224, 224, 224, 1);
  height: 100vh;
  font-size: 34rpx;
  color: #000;
  .heard {
    width: 750rpx;
    height: 150rpx;
    background: rgba(235, 235, 235, 1);
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    // align-items: center;
    // padding-bottom: 70rpx;
    position: relative;
    .daily {
      width: 325rpx;
      height: 80rpx;
      background: rgba(255, 250, 228, 1);
      border-radius: 0px 65px 65px 0px;
      filter: blur(0px);
      display: flex;
      align-items: center;
      justify-content: flex-end;
      .txt {
        margin-right: 60rpx;
        font-size: 30rpx;
        font-weight: bolder;
        color: rgba(159, 91, 2, 1);
        line-height: 34rpx;
      }
    }
    .logoutbox {
      font-size: 30rpx;
      color: rgba(85, 85, 85, 1);
      line-height: 80rpx;
      position: absolute;
      right: 30rpx;
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
    // margin-bottom: 20rpx;
    padding-bottom: 20rpx;
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
  .succeed {
    color: #fff;
    width: 360rpx;
    height: 360rpx;
    background: rgba(0, 0, 0, 0.6);
    border-radius: 20rpx;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    z-index: 9999;
    .succeedImg {
      width: 222rpx;
      height: 222rpx;
      margin-left: 60rpx;
      margin-top: 20rpx;
    }
    .text {
      text-align: center;
      font-size: 30rpx;
    }
  }
}
</style>
