<template>
  <view class="home">
    <!-- 一 -->
    <SearchTopBack :isBack="false" />
    <view class="gundong">
      <view class="gundong_inner">
        <scroll-view class="scroll-view_H" scroll-x="true">
          <view
            class="scroll-view-item_H"
            v-for="item in makeArr"
            :key="item.id"
            @click="toSearchMake(item.id)"
            :class="item.ischecked ? 'active' : ''"
            >{{ item.makeName }}
            <image
              src="/static/daotong/blue.png"
              class="blue"
              v-if="item.ischecked"
            />
          </view>
        </scroll-view>
      </view>
      <view class="right" @click="goToChooseMask">
        <image src="/static/daotong/3.png" class="threen" />
      </view>
    </view>
    <!-- 二 -->
    <mescroll-uni
      ref="mescrollRef"
      @init="mescrollInit"
      @down="downCallback"
      @up="upCallback"
      :down="downOption"
      :up="upOption"
      top="0"
    >
      <view
        class="detailbox"
        v-for="item in detailArr"
        :key="item.id"
        @tap="toDetail(item.id)"
      >
        <Box :items="item" :canDelete="canDelete" />
      </view>
    </mescroll-uni>
    <image
      src="/static/daotong/point.png"
      class="sign_img"
      @tap="goToSign"
      v-if="imgStatus"
    />
    <!-- 签到成功 -->
    <view class="succeed" v-if="isSign">
      <image src="/static/daotong/succeed.png" class="succeedImg" />
      <view class="text">Received 100 Points</view>
    </view>
    <!-- 气泡 -->
    <view class="paopao" v-if="paopaoStatus">
      <view>Post cases to win prozes!</view>
      <view> <text class="num">8</text>new diagnostic cases are awaited.</view>
    </view>
    <!-- 自定义底部导航栏 -->
    <Loading :loadingStatus="loadingStatus" />
    <BottomTabBar current="featured" />
    <ChooseMask v-if="ischooseMask" @toClose="toClose" title="All Makes" />
  </view>
</template>

<script>
import Box from "./component/Box";
import Loading from "./component/common/loading";
import SearchTopBack from "./component/topBack/searchTopBack";
import BottomTabBar from "../components/bottom-tabBar";
import ChooseMask from "./component/chooseMask";
export default {
  data() {
    return {
      loadingStatus: true,
      paopaoStatus: true,
      makeArr: [
        { id: 1, makeName: "GM", ischecked: false },
        { id: 2, makeName: "BMW", ischecked: false },
        { id: 3, makeName: "Benz", ischecked: false },
        { id: 4, makeName: "Ford", ischecked: false },
        { id: 5, makeName: "Toyota", ischecked: false },
      ],
      ischooseMask: false,
      detailArr: [],
      canDelete: false,
      isSign: false,
      imgStatus: true,
      downOption: {
        textLoading: "加载中 ...",
        textOutOffset: "释放刷新",
        use: true, // 是否启用下拉刷新; 默认true
        auto: false, // 是否在初始化完毕之后自动执行下拉刷新的回调; 默认true
        native: false, // 启用系统自带的下拉组件,默认false;仅mescroll-body生效,mescroll-uni无效(native: true, 则需在pages.json中配置"enablePullDownRefresh":true)
      },
      // 上拉加载的常用配置
      upOption: {
        use: true, // 是否启用上拉加载; 默认true
        auto: false, // 是否在初始化完毕之后自动执行上拉加载的回调; 默认true
        page: {
          num: 1, // 当前页码,默认0,回调之前会加1,即callback(page)会从1开始
          size: 5, // 每页数据的数量,默认10
        },
        noMoreSize: 1, // 配置列表的总数量要大于等于5条才显示'-- END --'的提示
        empty: {
          tip: "暂无数据",
          use: false,
          // icon: '/static/realFix-module/no-search@2x.png',
        },

        textNoMore: "-------  " + "你已经到底了哟" + "  -------",
        toTop: {
          src: "/static/top@2x.png",
        },
      },
    };
  },
  components: {
    SearchTopBack,
    Box,
    BottomTabBar,
    ChooseMask,
    Loading,
  },
  mounted() {
    this.getHomeList();
    setTimeout(() => {
      this.loadingStatus = false;
    }, 2000);
  },
  onShow() {
    this.paopaoStatus = true;
    setTimeout(() => {
      this.paopaoStatus = false;
    }, 3000);
  },
  onHide() {},
  onLoad: function(option) {},
  methods: {
    //滚动组件初始化
    mescrollInit(mescroll) {
      this.mescroll = mescroll;
    },
    /*下拉刷新的回调*/
    downCallback() {
      console.log("downCallback");
      this.mescroll.endSuccess();
    },
    // 上拉更新更多
    upCallback() {
      console.log("upCallback");
      //  this.mescroll.endErr()
      this.mescroll.endByPage(0, 0);
    },
    handleTouchmove(e) {
      // console.log('handleTouchmove', e)
      e.preventDefault();
    },
    preventMove() {
      document
        .querySelector(".home")
        .addEventListener("touchmove", this.handleTouchmove);
    },
    recoverMove() {
      //恢复滑动
      document
        .querySelector(".home")
        .removeEventListener("touchmove", this.handleTouchmove);
    },
    toSearchMake(id) {
      console.log(id);
      this.makeArr.forEach((val) => {
        if (val.id == id) {
          val.ischecked = true;
        } else {
          val.ischecked = false;
        }
      });
    },
    toClose() {
      this.ischooseMask = false;
      this.recoverMove();
    },
    goToChooseMask() {
      this.ischooseMask = true;
      this.preventMove();
    },
    goToSign() {
      console.log("签到");
      this.imgStatus = false;
      this.isSign = true;
      setTimeout(() => {
        this.isSign = false;
      }, 2000);
    },
    toDetail(id) {
      console.log("去到详情页", id);
      uni.navigateTo({
        url: "detail",
      });
    },
    getHomeList() {
      this.detailArr = [
        {
          id: 1,
          detail: {
            title: "19 ercedes-Benz GLS450 steering systems failed",
            Vehicle: "2003 BMW 530i 3.0L",
            dtcarr: ["P0171", "P0174", "P0101"],
            text:
              "The customer states the check engine light is on and the vehicle exhibits a hard start ",
            author: "Milan Collier",
            num1: "22",
            num2: "33",
            imgsrc: [
              "/static/daotong/img_1.png",
              "/static/daotong/img_2.png",
              "/static/daotong/img_3.png",
            ],
          },
        },
        {
          id: 2,
          detail: {
            title: "19 ercedes-Benz GLS450 steering systems failed",
            Vehicle: "2003 BMW 530i 3.0L",
            dtcarr: ["P0171", "P0174", "P0101"],
            text:
              "The customer states the check engine light is on and the vehicle exhibits a hard start ",
            author: "Milan Collier",
            num1: "22",
            num2: "33",
            imgsrc: [
              "/static/daotong/img_3.png",
              "/static/daotong/img_2.png",
              "/static/daotong/img_1.png",
            ],
          },
        },
        {
          id: 3,
          detail: {
            title: "19 ercedes-Benz GLS450 steering systems failed",
            Vehicle: "2003 BMW 530i 3.0L",
            dtcarr: ["P0171", "P0174", "P0101"],
            text:
              "The customer states the check engine light is on and the vehicle exhibits a hard start ",
            author: "Milan Collier",
            num1: "22",
            num2: "33",
            imgsrc: [
              "/static/daotong/img_2.png",
              "/static/daotong/img_3.png",
              "/static/daotong/img_1.png",
            ],
          },
        },
        {
          id: 4,
          detail: {
            title: "19 ercedes-Benz GLS450 steering systems failed",
            Vehicle: "2003 BMW 530i 3.0L",
            dtcarr: ["P0171", "P0174", "P0101"],
            text:
              "The customer states the check engine light is on and the vehicle exhibits a hard start ",
            author: "Milan Collier",
            num1: "22",
            num2: "33",
            imgsrc: [
              "/static/daotong/img_2.png",
              "/static/daotong/img_3.png",
              "/static/daotong/img_1.png",
            ],
          },
        },
        {
          id: 5,
          detail: {
            title: "19 ercedes-Benz GLS450 steering systems failed",
            Vehicle: "2003 BMW 530i 3.0L",
            dtcarr: ["P0171", "P0174", "P0101"],
            text:
              "The customer states the check engine light is on and the vehicle exhibits a hard start ",
            author: "Milan Collier",
            num1: "22",
            num2: "33",
            imgsrc: [
              "/static/daotong/img_2.png",
              "/static/daotong/img_3.png",
              "/static/daotong/img_1.png",
            ],
          },
        },
        {
          id: 6,
          detail: {
            title: "19 ercedes-Benz GLS450 steering systems failed",
            Vehicle: "2003 BMW 530i 3.0L",
            dtcarr: ["P0171", "P0174", "P0101"],
            text:
              "The customer states the check engine light is on and the vehicle exhibits a hard start ",
            author: "Milan Collier",
            num1: "22",
            num2: "33",
            imgsrc: [
              "/static/daotong/img_2.png",
              "/static/daotong/img_3.png",
              "/static/daotong/img_1.png",
            ],
          },
        },
      ];
    },
  },
};
</script>

<style lang="scss" scoped>
/deep/.mescroll-uni {
  margin-top: 200rpx !important;
  margin-bottom: 150rpx !important;
  background: #fff;
}
.home {
  padding-top: 178rpx;
  width: 750rpx;
  background: rgba(224, 224, 224, 1);
  padding-bottom: 146rpx;
  .paopao {
    width: 500rpx;
    height: 140rpx;
    background: rgba(255, 255, 255, 1);
    box-shadow: 0px -4rpx 16rpx 0px rgba(0, 0, 0, 0.24);
    border-radius: 10rpx;
    position: fixed;
    bottom: 140rpx;
    z-index: 99;
    left: 50%;
    margin-left: -250rpx;
    font-size: 26rpx;
    color: #000;
    line-height: 40rpx;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-left: 30rpx;
    .num {
      color: rgba(0, 126, 255, 1);
      margin-right: 10rpx;
    }
  }
  //三角形
  // .paopao::before {
  //   box-sizing: content-box;
  //   width: 0px;
  //   height: 0px;
  //   position: absolute;
  //   top: 70px;
  //   right: 118px;
  //   padding: 0;
  //   border-top: 20rpx solid #ffffff;
  //   border-bottom: 20rpx solid transparent;
  //   border-left: 20rpx solid transparent;
  //   border-right: 20rpx solid transparent;
  //   display: block;
  //   content: '';
  //   z-index: 12;
  // }
  // .paopao::after {
  //   box-sizing: content-box;
  //   width: 0px;
  //   height: 0px;
  //   position: absolute;
  //   top: 70px;
  //   right: 117px;
  //   padding: 0;
  //   border-top: 18rpx solid #aaaaaa;
  //   border-bottom: 18rpx solid transparent;
  //   border-left: 18rpx solid transparent;
  //   border-right: 18rpx solid transparent;
  //   display: block;
  //   content: '';
  //   z-index: 10;
  // }
  .gundong {
    height: 120rpx;
    width: 750rpx;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: fixed;
    top: 88rpx;
    z-index: 11;
    // background: rgba(224, 224, 224, 1);
    white-space: nowrap; //重要的scroll-view
    margin-left: 30rpx;
    .gundong_inner {
      height: 120rpx;
      width: 645rpx;
      display: flex;
      align-items: center;
      .scroll-view_H {
        .scroll-view-item_H {
          min-width: 110rpx;
          height: 72rpx;
          padding: 0 10rpx;
          display: inline-block; //重要的scroll-view
          background: #fff;
          border-radius: 10rpx;
          text-align: center;
          line-height: 72rpx;
          margin-right: 20rpx;
          position: relative;
          &.active {
            color: #007aff;
            background: rgba(211, 223, 237, 1);
            border: 1px solid rgba(0, 122, 255, 1);
          }
          .blue {
            position: absolute;
            bottom: 0;
            right: 0;
            height: 34rpx;
            width: 34rpx;
          }
        }
      }
    }
    .right {
      margin-right: 30rpx;
      text-align: center;
      .threen {
        width: 44rpx;
        height: 44rpx;
        margin-right: 15rpx;
      }
    }
  }
  .detailbox {
    padding: 30rpx 0 0 30rpx;
    background: #fff;
  }
  .sign_img {
    height: 180rpx;
    width: 180rpx;
    position: fixed;
    bottom: 300rpx;
    right: 0;
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
