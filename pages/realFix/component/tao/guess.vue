<template>
  <view class="guess">
    <view class="title">
      <view class="left"> 猜你喜欢 </view>
      <view class="right">
        换一组
        <image src="/static/junjun/Tsize_17.gif" class="icon" />
      </view>
    </view>
    <!-- 轮播图 -->
    <view class="swiper-box">
      <swiper
        class="swiper"
        :indicator-dots="false"
        :autoplay="true"
        :circular="true"
        @change="changeIndex"
      >
        <swiper-item v-for="(item, index) in swiperArr" :key="index">
          <view
            class="box-item"
            v-for="(val, index) in item.boxArr"
            :key="index"
          >
            <view class="img-box">
              <image :src="val.path" class="gameImg" />
              <view class="game">{{ val.whichGame }}</view>
            </view>
            <view class="titles">{{ val.title }}</view>
            <view class="content">{{ val.content }}</view>
            <view class="price">￥{{ val.price }}</view>
          </view>
        </swiper-item>
      </swiper>
    </view>
    <view class="gun">
      <view class="sliders" ref="sliders"></view>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      currentIndex: 0,
      swiperArr: [
        {
          id: 1,
          boxArr: [
            {
              id: 1,
              path: '/static/junjun/Tsize_11.jpg',
              whichGame: '口袋妖怪复刻',
              title: '新区榜三无敌号主卖号来啦',
              content: '安卓官方 全部都是厉害的角色',
              price: '188',
            },
            {
              id: 2,
              path: '/static/junjun/Tsize_11.jpg',
              whichGame: '口袋妖怪复刻',
              title: '新区榜三无敌号主卖号来啦',
              content: '安卓官方 全部都是厉害的角色',
              price: '188',
            },
            {
              id: 3,
              path: '/static/junjun/Tsize_11.jpg',
              whichGame: '口袋妖怪复刻',
              title: '新区榜三无敌号主卖号来啦',
              content: '安卓官方 全部都是厉害的角色',
              price: '188',
            },
          ],
        },
        {
          id: 2,
          boxArr: [
            {
              id: 1,
              path: '/static/junjun/Tsize_11.jpg',
              whichGame: '口袋妖怪复刻',
              title: '新区榜三无敌号主卖号来啦',
              content: '安卓官方 全部都是厉害的角色',
              price: '188',
            },
            {
              id: 2,
              path: '/static/junjun/Tsize_11.jpg',
              whichGame: '口袋妖怪复刻',
              title: '新区榜三无敌号主卖号来啦',
              content: '安卓官方 全部都是厉害的角色',
              price: '188',
            },
            {
              id: 3,
              path: '/static/junjun/Tsize_11.jpg',
              whichGame: '口袋妖怪复刻',
              title: '新区榜三无敌号主卖号来啦',
              content: '安卓官方 全部都是厉害的角色',
              price: '188',
            },
          ],
        },
        {
          id: 3,
          boxArr: [
            {
              id: 1,
              path: '/static/junjun/Tsize_11.jpg',
              whichGame: '口袋妖怪复刻',
              title: '新区榜三无敌号主卖号来啦',
              content: '安卓官方 全部都是厉害的角色',
              price: '188',
            },
            {
              id: 2,
              path: '/static/junjun/Tsize_11.jpg',
              whichGame: '口袋妖怪复刻',
              title: '新区榜三无敌号主卖号来啦',
              content: '安卓官方 全部都是厉害的角色',
              price: '188',
            },
            {
              id: 3,
              path: '/static/junjun/Tsize_11.jpg',
              whichGame: '口袋妖怪复刻',
              title: '新区榜三无敌号主卖号来啦',
              content: '安卓官方 全部都是厉害的角色',
              price: '188',
            },
          ],
        },
      ],
    }
  },
  methods: {
    changeIndex(e) {
      //方法一
      // console.log('00000000', e)
      // var slider = document.getElementsByClassName('sliders')[0]
      // console.log('111111', slider)
      // if (e.detail.current == 0) {
      //   slider.style.left = 0
      // } else if (e.detail.current == 1) {
      //   slider.style.left = '50px'
      // } else if (e.detail.current == 2) {
      //   slider.style.left = '100px'
      // }

      //方法二
      this.$nextTick(() => {
        let mystyle = this.$refs.sliders.$el.style
        // console.log('11', mystyle)
        if (e.detail.current == 0) {
          // console.log('000')
          mystyle.left = 0
        } else if (e.detail.current == 1) {
          // console.log('111')
          mystyle.left = 50 + 'px'
        } else if (e.detail.current == 2) {
          // console.log('2222')
          mystyle.left = 100 + 'px'
        }
      })
    },
  },
  components: {},
}
</script>

<style lang="scss" scoped>
@mixin find-ellipsis {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.guess {
  padding: 0 25rpx;
  margin-bottom: 90rpx;
  .title {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 20rpx;
    .left {
      font-size: 38rpx;
      color: #000;
      font-weight: bolder;
    }
    .right {
      color: #888888;
      font-size: 26rpx;
      .icon {
        height: 25rpx;
        width: 25rpx;
        margin-left: 12rpx;
      }
    }
  }
  .swiper-box {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 450rpx;
    width: 700rpx;
    position: relative;
    /deep/uni-swiper-item {
      display: flex;
    }
    .swiper {
      height: 450rpx;
      width: 700rpx;
    }
    .box-item {
      background: #f8f8f8;
      height: 450rpx;
      width: 230rpx;
      .img-box {
        height: 230rpx;
        width: 230rpx;
        position: relative;
        margin-bottom: 45rpx;
        .gameImg {
          height: 230rpx;
          width: 230rpx;
        }
        .game {
          color: #fff;
          font-size: 20rpx;
          width: 150rpx;
          height: 34rpx;
          background: #ffaf02;
          position: absolute;
          bottom: -12rpx;
          left: 18rpx;
          text-align: center;
          line-height: 34rpx;
          border-radius: 5rpx;
        }
      }
      .titles {
        width: 190rpx;
        padding-left: 20rpx;
        color: #000;
        font-size: 30rpx;
        line-height: 30rpx;
        margin-bottom: 38rpx;
        @include find-ellipsis;
      }
      .content {
        padding-left: 20rpx;
        width: 190rpx;
        @include find-ellipsis color: #8d8d8d;
        font-size: 22rpx;
        line-height: 22rpx;
        margin-bottom: 38rpx;
      }
      .price {
        padding-left: 20rpx;
        width: 190rpx;
        @include find-ellipsis color: #f80344;
        font-size: 30rpx;
        line-height: 30rpx;
        font-weight: bolder;
      }
      &:nth-child(2) {
        margin: 0 6rpx;
      }
    }
  }
  .gun {
    margin-top: 35rpx;
    width: 150rpx;
    height: 8rpx;
    background: #d8d8d8;
    border-radius: 4rpx;
    margin-left: 300rpx;
    .sliders {
      width: 50rpx;
      height: 8rpx;
      background: #ff0141;
      border-radius: 4rpx;
      position: relative;
      left: 0; //0到50的滚动距离
    }
  }
}
</style>