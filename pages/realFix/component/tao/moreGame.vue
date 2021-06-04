<template>
  <view class="moreGame">
    <!-- 选择更多游戏 -->
    <view class="aline" :class="sonIsFixed ? 'fixed' : ''">
      <scroll-view class="scrollView" :scroll-x="true" :show-scrollbar="true">
        <view
          class="namebox"
          v-for="(item, index) in gameNameArr"
          :key="index"
          @click="toSelectGame(item.id)"
        >
          <text
            :class="item.select ? 'select-name' : 'noSelect'"
            :id="'namebox_' + item.id"
            >{{ item.gameNmae }}</text
          >
          <view class="line" v-if="item.select"></view>
        </view>
      </scroll-view>
    </view>
    <!-- 瀑布流内容需要上拉加载和下拉刷新 -->
    <view class="content">
      <view class="left">
        <Box :boxArr="allboxArr1" />
      </view>
      <view class="right">
        <Box :boxArr="allboxArr2" />
      </view>
    </view>
  </view>
</template>

<script>
import Box from './box'
export default {
  components: {
    Box,
  },
  props: {
    isFixed: Boolean,
    default: false,
  },
  watch: {
    isFixed: {
      handler(newval) {
        this.sonIsFixed = newval
      },
    },
  },
  data() {
    return {
      sonIsFixed: false,
      gameNameArr: [
        { id: 1, gameNmae: '口袋妖怪复刻', select: true },
        { id: 2, gameNmae: '王者荣耀', select: false },
        { id: 3, gameNmae: '梦幻西游', select: false },
        { id: 4, gameNmae: '和平精英', select: false },
        { id: 5, gameNmae: '英雄联盟', select: false },
        { id: 6, gameNmae: '漆黑的魅影', select: false },
        { id: 7, gameNmae: '哪吒传奇', select: false },
      ],
      allboxArr1: [
        {
          id: 1,
          gameNmae: '口袋妖怪复刻',
          path: '/static/junjun/Tsize_11.jpg',
          title: '夏日杯32强突破资源号即使武器',
          type: '安卓TT玩',
          who: '全部区服',
          dtc1: '寄售',
          dtc2: '已投保',
          price: '1800',
          text1: '卖家1小时前来过',
          text2: '60人看过',
        },
        {
          id: 2,
          gameNmae: '口袋妖怪复刻',
          path: '/static/junjun/Tsize_11.jpg',
          title: '夏日杯32强突破资源号开局',
          type: '安卓TT玩',
          who: '全部区服',
          dtc1: '寄售',
          dtc2: '已投保',
          price: '1800',
          text1: '卖家1小时前来过',
          text2: '60人看过',
        },
        {
          id: 3,
          gameNmae: '口袋妖怪复刻',
          path: '/static/junjun/Tsize_11.jpg',
          title: '夏日杯32强突破资源号',
          type: '安卓TT玩',
          who: '全部区服',
          dtc1: '寄售',
          dtc2: '已投保',
          price: '1800',
          text1: '卖家1小时前来过',
          text2: '60人看过',
        },
        {
          id: 4,
          gameNmae: '口袋妖怪复刻',
          path: '/static/junjun/Tsize_11.jpg',
          title: '夏日杯32强突破资源号开局',
          type: '安卓TT玩',
          who: '全部区服',
          dtc1: '寄售',
          dtc2: '已投保',
          price: '1800',
          text1: '卖家1小时前来过',
          text2: '60人看过',
        },
      ],
      allboxArr2: [
        {
          id: 1,
          gameNmae: '口袋妖怪复刻',
          path: '/static/junjun/Tsize_11.jpg',
          title: '夏日杯32强突破资源号',
          type: '安卓TT玩',
          who: '全部区服',
          dtc1: '寄售',
          dtc2: '已投保',
          price: '1800',
          text1: '卖家1小时前来过',
          text2: '60人看过',
        },
        {
          id: 2,
          gameNmae: '口袋妖怪复刻',
          path: '/static/junjun/Tsize_11.jpg',
          title: '夏日杯32强突破资源号开局即使武器',
          type: '安卓TT玩',
          who: '全部区服',
          dtc1: '寄售',
          dtc2: '已投保',
          price: '1800',
          text1: '卖家1小时前来过',
          text2: '60人看过',
        },
        {
          id: 3,
          gameNmae: '口袋妖怪复刻',
          path: '/static/junjun/Tsize_11.jpg',
          title: '夏日杯32强突破资源号开局即使武器',
          type: '安卓TT玩',
          who: '全部区服',
          dtc1: '寄售',
          dtc2: '已投保',
          price: '1800',
          text1: '卖家1小时前来过',
          text2: '60人看过',
        },
      ],
    }
  },
  mounted() {},
  methods: {
    toSelectGame(id) {
      // console.log('1', id)
      this.gameNameArr.forEach((val) => {
        if (id == val.id) {
          val.select = true
        } else {
          val.select = false
        }
      })

      //方法一
      // 获取点击的按钮对应页面的id
      var PageId = document.querySelector('#namebox_' + id)
      console.log(PageId.offsetLeft)
      // 使用平滑属性，滑动到上方获取的距离
      // 下方我只设置了top，当然 你也可以加上 left 让他横向滑动
      // widow 根据浏览器滚动条，如果你是要在某个盒子里面产生滑动，记得修改
      // PageId.scrollIntoView()
      PageId.scrollIntoView({ inline: 'center', behavior: 'smooth' })
    },
  },
}
</script>

<style lang="scss" scoped>
.fixed {
  position: fixed;
  left: 0px;
  top: 90rpx;
  z-index: 99;
}
@mixin find-ellipsis {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
@mixin find-two-ellipsis {
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}
.moreGame {
  background: #f7f7f7;
  // padding: 0 25rpx;
  .aline {
    height: 95rpx;
    width: 750rpx;
    margin-bottom: 5rpx;
    background: #fff;
    .scrollView {
      white-space: nowrap; //scroll-view组件使用坑
      .namebox {
        display: inline-block; //scroll-view组件使用坑
        line-height: 95rpx;
        height: 95rpx;
        margin-right: 54rpx;
        position: relative;
        &:first-child {
          margin-left: 20rpx;
        }
        .line {
          height: 10rpx;
          width: 85rpx;
          background: #ff0141;
          position: absolute;
          bottom: 0;
          left: 25%;
        }
      }
      .noSelect {
        font-size: 26rpx;
        color: #929292;
      }
      .select-name {
        font-size: 40rpx;
        color: #000;
        font-weight: bold;
      }
    }
  }
  .content {
    padding: 0 25rpx;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    .left {
      width: 340rpx;
      height: 100%;
    }
    .right {
      width: 340rpx;
      height: 100%;
    }
  }
}
</style>