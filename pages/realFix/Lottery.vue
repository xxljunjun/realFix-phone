<template>
  <view class="lottery">
    <TopBack title="Lottery" />
    <div class="banner-box">
      <img src="/static/price/banner.png" alt="" class="banner" />
    </div>
    <div class="time-box">
      <div class="time-left">Period</div>
      <div class="time-right">
        <div class="top">Wed Jan 13 10:00:00 CST 2021</div>
        <div class="bottom">Wed Jan 13 12:00:00 CST 2021</div>
      </div>
    </div>
    <div class="win-box">
      has won the 1st prize worth $50000
    </div>
    <!-- 抽奖 -->
    <div class="rote-box">
      <div class="btn-box">
        <img src="/static/price/btn.png" alt="" class="btn" />
      </div>
    </div>
    <div class="account-box">
      <div class="account-top">
        <img src="/static/price/money_small.png" alt="" />
        <span class="txt-price">350</span>
      </div>
      <div class="account-bottom">Account Points Balance</div>
    </div>
    <div class="win-box">
      Submit Your Repair Cases Today To Get More
    </div>
    <div class="txt-box">
      Use your MaxiFIX Points for a chance to win Daily Prize Giveaways.
    </div>
    <!-- 奖品 -->
    <div class="price-box" v-for="(item, index) in 4" :key="index">
      <div class="title">1st Prize</div>
      <div class="txt">Including one Maxisys Ultra and one Maxisys 909</div>
      <div class="img_box">
        <img src="/static/price/pad.png" alt="" />
      </div>
      <div class="value">Values:$10,000</div>
    </div>
    <div class="rule-box"></div>
    <div class="Winners-box"></div>
    <div class="text-box"></div>
    <div class="path-box">Autel Share Your Repair Giveaway Rules</div>
  </view>
</template>

<script>
import TopBack from "./component/topBack/topBack";
export default {
  data() {
    return {};
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
