<template>
  <div class="points">
    <div class="top">
      <image src="/static/daotong/back.png" class="back" @tap="back" />
    </div>
    <div class="coins">
      <div class="TXT">600</div>
      <div class="txt">My Points</div>
    </div>
    <div class="box-1 box">
      <div class="angle"></div>
      <div class="title">Point History</div>
      <div class="item" v-for="item in historyArr" :key="item.id">
        <div class="left">
          <div class="left_top">{{ item.name }}</div>
          <div class="left_bottom">{{ item.time }}</div>
        </div>
        <div class="right" :class="{ up: item.isUp }">{{ item.coins }}</div>
      </div>
    </div>
    <div class="box-2 box">
      <div class="title">My Prizes</div>
      <div class="item" v-for="item in prizesArr" :key="item.id">
        <div class="left">
          <div class="left_top">{{ item.name }}</div>
          <div class="left_bottom">{{ item.time }}</div>
        </div>
        <div class="right" :class="{ up: item.isUp }">{{ item.coins }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      historyArr: [
        {
          id: 1,
          name: "Giveaway Prizes Won",
          time: "10-01-2020 11:23",
          coins: "+100",
          isUp: true,
        },
        {
          id: 2,
          name: "Giveaway Prizes Won",
          time: "10-01-2020 11:23",
          coins: "+300",
          isUp: true,
        },
        {
          id: 3,
          name: "Giveaway Prizes Won",
          time: "10-01-2020 11:23",
          coins: "-100",
          isUp: false,
        },
        {
          id: 4,
          name: "Giveaway Prizes Won",
          time: "10-01-2020 11:23",
          coins: "+100",
          isUp: true,
        },
      ],
      prizesArr: [
        {
          id: 1,
          name: "Giveaway Prizes Won",
          time: "10-01-2020 11:23",
          coins: "+100",
          isUp: true,
        },
        {
          id: 2,
          name: "Giveaway Prizes Won",
          time: "10-01-2020 11:23",
          coins: "+300",
          isUp: true,
        },
        {
          id: 3,
          name: "Giveaway Prizes Won",
          time: "10-01-2020 11:23",
          coins: "-100",
          isUp: false,
        },
      ],
    };
  },
  methods: {
    back() {
      uni.navigateBack({
        delta: 1,
      });
    },
  },
  components: {},
};
</script>

<style lang="scss" scoped>
.points {
  background: #e0e0e0;
  background: url("@/static/background.png") no-repeat fixed top;
  padding-bottom: 30rpx;
  .top {
    position: relative;

    height: 80rpx;
    width: 100%;
    .back {
      height: 48rpx;
      width: 48rpx;
      position: absolute;
      left: 30rpx;
      top: 20rpx;
    }
  }
  .coins {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 20rpx 0 30rpx;
    .TXT {
      font-size: 100rpx;
      font-weight: 600;
      color: #ff7012;
    }
    .txt {
      font-size: 26rpx;
      font-weight: 600;
      color: #000000;
    }
  }
  .box {
    margin: 0 30rpx;
    .title {
      height: 110rpx;
      width: 690rpx;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 26rpx;
      color: #888888;
    }
    .item {
      padding: 0 30rpx;
      width: 690rpx;
      box-sizing: border-box;
      height: 140rpx;
      display: flex;
      align-items: center;
      justify-content: space-between;
      .left {
        .left_top {
          margin-bottom: 15rpx;
          font-weight: 600;
          color: #000;
        }
        .left_bottom {
          font-size: 26rpx;
          color: #888888;
        }
      }
      .right {
        color: #000;
        font-weight: 600;
        &.up {
          color: #ff7012;
        }
      }
    }
  }
  .box-1 {
    width: 690rpx;
    height: 725rpx;
    background: #f5f5f5;
    box-shadow: 0px 2px 6px 0px rgba(0, 0, 0, 0.08);
    border-radius: 14rpx;
    margin: 0 auto 20rpx;
    position: relative;
    .angle {
      width: 0;
      height: 0;
      border-left: 25rpx solid transparent;
      border-right: 25rpx solid transparent;
      border-bottom: 25rpx solid #f5f5f5;
      position: absolute;
      top: -20rpx;
      left: 45%;
    }
  }
  .box-2 {
    width: 690rpx;
    height: 600rpx;
    background: #f5f5f5;
    box-shadow: 0px 2px 6px 0px rgba(0, 0, 0, 0.08);
    border-radius: 14rpx;
    margin: 0 auto;
  }
}
</style>
