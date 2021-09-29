<template>
  <view class="mypost">
    <TopBack title="Mypost" />
    <mescroll-uni
      ref="mescrollRef"
      @init="mescrollInit"
      @down="downCallback"
      @up="upCallback"
      :down="downOption"
      :up="upOption"
      top="0"
    >
      <view class="reject" v-for="(val, index) in rejectListArr" :key="index">
        <view class="content">
          <view class="title">
            {{ val.detail.title }}
          </view>
          <view class="Vehicle">
            {{ val.detail.Vehicle }}
          </view>
          <view class="dtcBox">
            <view
              class="dtc"
              v-for="(val, index) in val.detail.dtcarr"
              :key="index"
            >
              {{ val }}
            </view>
          </view>
          <view class="detext">
            {{ val.detail.text }}
          </view>
          <view class="editBox" @tap="toEdit">
            <image src="/static/daotong/edit.png" class="edit_img" />
            <text>Edit</text>
          </view>
        </view>
        <view class="reason">
          <image src="/static/daotong/reject.png" class="reject_img" />
          <text class="reason_Title">Reasons for rejection</text>
          <view class="reason_text">
            The customer states the check engine light is on and the vehicle
            exhibits a hard start
          </view>
        </view>
      </view>
      <view
        class="detailbox"
        v-for="item in detailArr"
        :key="item.id"
        @tap="toDetail(item.id)"
      >
        <Box :items="item" :canDelete="canDelete" />
      </view>
    </mescroll-uni>
  </view>
</template>

<script>
import TopBack from "./component/topBack/topBack";
import Box from "./component/Box";
export default {
  data() {
    return {
      detailArr: [],
      canDelete: false,
      rejectListArr: [],
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
  mounted() {
    this.getMypostList();
    this.getRejectList();
  },
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
    toEdit() {
      console.log("去编辑");
      uni.navigateTo({
        url: "NewPost",
      });
    },
    toDetail(id) {
      console.log("todetaol", id);
      //跳转到详情页
      uni.navigateTo({
        url: "detail",
      });
    },
    getRejectList() {
      this.rejectListArr = [
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
      ];
    },
    getMypostList() {
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
      ];
    },
  },
  components: {
    TopBack,
    Box,
  },
};
</script>

<style lang="scss" scoped>
/deep/.mescroll-uni {
  padding-top: 88rpx !important;
}
.mypost {
  padding-top: 88rpx;
  width: 750px;
  background: rgba(224, 224, 224, 1);
  .detailbox {
    padding: 30rpx 0 0 30rpx;
  }
  .reject {
    width: 690rpx;
    height: 592rpx;
    background: rgba(245, 245, 245, 1);
    box-shadow: 0px 2rpx 6rpx 0px rgba(0, 0, 0, 0.08);
    border-radius: 12rpx;
    margin-left: 30rpx;
    margin-top: 30rpx;
    background: #fff;
    position: relative;
    .content {
      height: 410rpx;
      width: 100%;
      position: relative;
      padding: 30rpx 0 0 30rpx;
      box-sizing: border-box;
      .title {
        width: 630rpx;
        height: 84rpx;
        font-size: 34rpx;
        font-family: HelveticaNeue-Medium, HelveticaNeue;
        font-weight: bold;
        color: rgba(0, 0, 0, 1);
        line-height: 42rpx;
        margin-bottom: 16rpx;
      }
      .Vehicle {
        margin-bottom: 16rpx;
        color: #000;
      }
      .dtcBox {
        display: flex;
        margin-bottom: 16rpx;
        .dtc {
          min-width: 93rpx;
          height: 38rpx;
          background: rgba(221, 221, 221, 1);
          border-radius: 4rpx;
          padding: 0 12rpx;
          font-size: 24rpx;
          font-family: HelveticaNeue;
          color: rgba(68, 68, 68, 1);
          line-height: 24rpx;
          display: flex;
          align-items: center;
          margin-right: 8rpx;
          justify-content: center;
        }
      }
      .detext {
        width: 630rpx;
        height: 76rpx;
        font-size: 30rpx;
        font-family: HelveticaNeue;
        color: rgba(85, 85, 85, 1);
        line-height: 30rpx;
      }
      .editBox {
        position: absolute;
        bottom: 33rpx;
        right: 30rpx;
        font-size: 30rpx;
        font-family: PingFangSC-Regular, PingFang SC;
        color: rgba(13, 126, 255, 1);
        line-height: 30rpx;
        .edit_img {
          height: 36rpx;
          width: 36rpx;
          margin-right: 12rpx;
          position: relative;
          top: 8rpx;
        }
      }
    }
    .reason {
      background: rgba(245, 245, 245, 1);
      height: 182rpx;
      border-radius: 0 0 12rpx 12rpx;
      padding-left: 30rpx;
      padding-top: 30rpx;
      margin-bottom: 8rpx;
      box-sizing: border-box;
      .reject_img {
        height: 34rpx;
        width: 34rpx;
        position: relative;
        top: 5rpx;
        margin-right: 8rpx;
      }
      .reason_Title {
        font-size: 30rpx;
        font-family: HelveticaNeue-Medium, HelveticaNeue;
        font-weight: bold;
        color: rgba(0, 0, 0, 1);
        line-height: 38rpx;
      }
      .reason_text {
        font-size: 30rpx;
        font-family: HelveticaNeue;
        color: rgba(85, 85, 85, 1);
        line-height: 38rpx;
      }
    }
  }
}
</style>
