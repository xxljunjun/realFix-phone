<template>
  <view class="lottery">
    <TopBack title="Lottery" />
    <view class="banner-box">
      <img src="../../static/price/banner.png" alt="" class="banner" />
    </view>
    <view class="time-box">
      <view class="time-left">Period</view>
      <view class="time-right">
        <view class="top">Wed Jan 13 10:00:00 CST 2021</view>
        <view class="bottom">Wed Jan 13 12:00:00 CST 2021</view>
      </view>
    </view>
    <view class="win-box">
      <ul class="lb" :class="{ marquee_top: animate }">
        <li v-for="(item, index) in list" class="item" :key="index">
          {{ item }}
        </li>
      </ul>
    </view>
    <!-- 抽奖 -->
    <view class="rote-box">
      <view class="btn-box">
        <img
          src="../../static/price/btn.png"
          alt=""
          class="btn"
          @click="goToStart"
        />
      </view>
      <view
        :class="['small-price', item.pictrueClase, { active: bg == index + 1 }]"
        v-for="(item, index) in btnPriceArr"
        :key="index"
      >
        <img :src="item.src" alt="" />
        <view class="txt">{{ item.text }}</view>
      </view>
    </view>
    <view class="account-box">
      <view class="account-top">
        <img src="../../static/price/money_small.png" alt="" />
        <span class="txt-price">350</span>
      </view>
      <view class="account-bottom">Account Points Balance</view>
    </view>
    <view class="win-box">
      Submit Your Repair Cases Today To Get More
    </view>
    <view class="txt-box">
      Use your MaxiFIX Points for a chance to win Daily Prize Giveaways.
    </view>
    <!-- 奖品 -->
    <view class="price-box" v-for="(item, index) in priceArr" :key="index">
      <view class="title">1st Prize</view>
      <view class="txt">Including one Maxisys Ultra and one Maxisys 909</view>
      <view class="img_box">
        <img src="../../static/price/pad.png" alt="" />
      </view>
      <view class="value">Values:$10,000</view>
    </view>
    <!-- <view class="rule-box"></view> -->
    <view class="Winners-box">
      <view class="title-box">Recent Winners</view>
      <view class="win-man" v-for="(item, index) in priceArr" :key="index">
        <view class="left">{{ item.time }}</view>
        <view class="middle">{{ item.name }}</view>
        <view class="right">{{ item.price }}</view>
      </view>
    </view>
    <!-- <view class="text-box"></view> -->
    <view class="path-box">Autel Share Your Repair Giveaway Rules</view>
  </view>
</template>

<script>
import TopBack from "./component/topBack/topBack";
export default {
  data() {
    return {
      // 标记转动的位置
      bg: 1,
      // 是否正在转动的标记
      isSport: false,
      // 转动速度减慢
      reduce: 10,
      // 转动间隔时间
      startTime: 30,
      area: "",
      btnPriceArr: [
        {
          id: 1,
          text: "1st Prize",
          isSelect: false,
          src: require("../../static/price/pad.png"),
          pictrueClase: "small-price_1",
        },
        {
          id: 2,
          text: "1000 Points",
          isSelect: false,
          src: require("../../static/price/money_small.png"),
          pictrueClase: "small-price_2",
        },
        {
          id: 3,
          text: "Thank you",
          isSelect: false,
          src: require("../../static/price/small.png"),
          pictrueClase: "small-price_3",
        },
        {
          id: 4,
          text: "2nd Prize",
          isSelect: false,
          src: require("../../static/price/pad_1.png"),
          pictrueClase: "small-price_4",
        },
        {
          id: 5,
          text: "500 Points",
          isSelect: false,
          src: require("../../static/price/money_1.png"),
          pictrueClase: "small-price_5",
        },
        {
          id: 6,
          text: "Thank you ",
          isSelect: false,
          src: require("../../static/price/small.png"),
          pictrueClase: "small-price_6",
        },
        {
          id: 7,
          text: "3rd Prize",
          isSelect: false,
          src: require("../../static/price/phone.png"),
          pictrueClase: "small-price_7",
        },
        {
          id: 8,
          text: "500 Points",
          isSelect: false,
          src: require("../../static/price/money_1.png"),
          pictrueClase: "small-price_8",
        },
        {
          id: 9,
          text: "Thank you",
          isSelect: false,
          src: require("../../static/price/small.png"),
          pictrueClase: "small-price_9",
        },
        {
          id: 10,
          text: "4st Prize",
          isSelect: false,
          src: require("../../static/price/autel.png"),
          pictrueClase: "small-price_10",
        },
        {
          id: 11,
          text: "1000 Points",
          isSelect: false,
          src: require("../../static/price/money_small.png"),
          pictrueClase: "small-price_11",
        },
        {
          id: 12,
          text: "Thank you",
          isSelect: false,
          src: require("../../static/price/small.png"),
          pictrueClase: "small-price_12",
        },
      ],
      animate: false,
      list: [
        " has won the 1st prize worth $50000",
        " has won the 1st prize worth $50000",
        " has won the 1st prize worth $50000",
      ],
      priceArr: [
        { id: 1, time: "10-02 06:12", name: "Adm***0021", price: "1st Prize" },
        { id: 2, time: "10-08 2:09", name: "Adm***01023", price: "2st Prize" },
        { id: 3, time: "11-01 16:49", name: "Adm***00223", price: "1st Prize" },
        { id: 4, time: "11-09 19:23", name: "Adm***0023", price: "2st Prize" },
        { id: 5, time: "11-20 12:38", name: "Adm***00236", price: "3st Prize" },
        { id: 6, time: "11-25 2:30", name: "Adm***002376", price: "1st Prize" },
        {
          id: 7,
          time: "11-29 1:19",
          name: "Adm***00243",
          price: "2st Prize",
        },
        {
          id: 8,
          time: "11-30 129:16",
          name: "Adm***0013",
          price: "1st Prize",
        },
      ],
    };
  },
  mounted() {
    this.scrollEvent();
  },
  methods: {
    goToStart() {
      if (this.isSport == false) {
        this.isSport = true;
      } else {
        // 正在转动时点击按钮无效
        return;
      }
      this.go();
    },
    go() {
      setTimeout(() => {
        console.log("开始抽奖");
        // 让转动速度减慢
        this.startTime = this.startTime + this.reduce;
        this.bg = (this.bg % 12) + 1; //这个%时求余的意识哦
        // 如果达到这个条件则停止跳动
        if (this.startTime >= 300) {
          // 标记是否转动状态
          this.isSport = false;
          // 重置转动间隔时间
          this.startTime = 30;
          console.log("中奖状态", this.bg);
          return;
        }
        this.go();
      }, this.startTime);
    },
    scrollEvent() {
      let that = this;
      //每隔3秒执行一次
      const timer = setInterval(() => {
        this.animate = true;
        setTimeout(() => {
          that.list.push(this.list[0]);
          that.list.shift();
          that.animate = false;
        }, 500);
      }, 2000);
      // 通过$once来监听定时器，在beforeDestroy钩子可以被清除。
      this.$once("hook:beforeDestroy", () => {
        clearInterval(timer);
      });
    },
  },
  components: {
    TopBack,
  },
};
</script>

<style lang="scss" scoped>
.lottery {
  width: 750rpx;
  padding-bottom: 60rpx;
  .banner-box {
    width: 750rpx;
    display: flex;
    align-items: center;
    justify-content: center;
    .banner {
      height: 200rpx;
      width: 690rpx;
      margin: 120rpx auto 20rpx;
    }
  }
  .time-box {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin-bottom: 20rpx;
    .time-left {
      margin-right: 20rpx;
      font-size: 30rpx;
      font-weight: 600;
      color: #000000;
    }
    .time-right {
      border-left: 1px solid #bdbdbd;
      padding-left: 20rpx;
      display: flex;
      flex-direction: column;
      align-items: center;
      font-size: 26rpx;
      color: #000000;
    }
  }
  .win-box {
    height: 85rpx;
    width: 690rpx;
    background: #d81b2c;
    border-radius: 7px;
    margin: 20rpx auto 0;
    font-size: 26rpx;
    font-weight: 500;
    color: #fff;
    line-height: 85rpx;
    text-align: center;
    overflow: hidden;
    .lb {
      box-sizing: border-box;
      padding: 0;
      .item {
        width: 690rpx;
        line-height: 85rpx;
        white-space: nowrap; //强制不换行
        overflow: hidden;
        text-overflow: ellipsis;
      }
    }
    .marquee_top {
      transition: all 0.5s;
      margin-top: -85rpx;
    }
  }
  .account-box {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-bottom: 40rpx;
    .account-top {
      img {
        height: 60rpx;
        width: 60rpx;
      }
      .txt-price {
        font-size: 70rpx;
        font-weight: bold;
        color: #d2222a;
      }
    }
    .account-bottom {
      font-size: 26rpx;
      font-weight: 400;
      color: #d2222a;
    }
  }
  .txt-box {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 20rpx;
    text-align: center;
    margin-top: 20rpx;
    margin-bottom: 60rpx;
  }
  .price-box {
    width: 690rpx;
    height: 365rpx;
    background: #f3f3f5;
    margin: 20rpx auto 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    .title {
      font-size: 38rpx;
      font-weight: bold;
      color: #000000;
      margin-top: 30rpx;
    }
    .txt {
      font-size: 26rpx;
      color: #000000;
      margin: 6rpx 0 6rpx 0;
    }
    .img_box {
      img {
        width: 275rpx;
        height: 165rpx;
      }
    }
    .value {
    }
  }
  .rote-box {
    height: 670rpx;
    width: 750rpx;
    background: url("@/static/price/main.png");
    background-repeat: no-repeat;
    background-position: center;
    background-size: 750rpx 670rpx;
    position: relative;
    .btn-box {
      height: 670rpx;
      width: 750rpx;
      display: flex;
      align-items: center;
      justify-content: center;
      position: absolute;
      top: 0;
      left: 0;
      .btn {
        height: 300rpx;
        width: 320rpx;
        margin-top: 40rpx;
      }
    }
    .small-price {
      height: 116rpx;
      width: 140rpx;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      border-radius: 10rpx;
      position: absolute;
      color: #000;
      &.active {
        background: yellow;
      }
      img {
        height: 70rpx;
        width: 115rpx;
      }
      .txt {
        font-size: 20rpx;
        color: #000000;
      }
    }
    .small-price_1 {
      top: 92rpx;
      left: 86rpx;
    }
    .small-price_2 {
      top: 92rpx;
      left: 232rpx;
    }
    .small-price_3 {
      top: 92rpx;
      left: 376rpx;
    }
    .small-price_4 {
      top: 92rpx;
      left: 520rpx;
    }
    .small-price_5 {
      top: 212rpx;
      left: 520rpx;
    }
    .small-price_6 {
      top: 332rpx;
      left: 520rpx;
    }
    .small-price_7 {
      top: 452rpx;
      left: 520rpx;
    }
    .small-price_8 {
      top: 452rpx;
      left: 376rpx;
    }
    .small-price_9 {
      top: 452rpx;
      left: 232rpx;
    }
    .small-price_10 {
      top: 452rpx;
      left: 86rpx;
    }
    .small-price_11 {
      top: 332rpx;
      left: 86rpx;
    }
    .small-price_12 {
      top: 212rpx;
      left: 86rpx;
    }
  }
  .Winners-box {
    // height: 610rpx;
    width: 690rpx;
    background: #f3f3f5;
    margin: 55rpx auto 0;
    .title-box {
      height: 85rpx;
      width: 250rpx;
      box-sizing: border-box;
      text-align: center;
      line-height: 85rpx;
      border-bottom: 1rpx solid #d81b2c;
      margin: 0 auto;
      font-weight: bold;
      margin-bottom: 40rpx;
    }
    .win-man {
      height: 60rpx;
      width: 690rpx;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0 30rpx;
      .left {
        font-size: 26rpx;
        color: #555555;
      }
      .middle {
        font-size: 26rpx;
        color: #000000;
      }
      .right {
        font-size: 26rpx;
        color: #000000;
      }
    }
  }
  .path-box {
    margin-left: 30rpx;
    text-decoration: underline;
    font-size: 26rpx;
    color: #0d7eff;
    margin-top: 40rpx;
  }
}
</style>
