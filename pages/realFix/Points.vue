<template>
  <view class="Tindex">
    <!-- 头部搜索框 -->
    <view class="top">
      <input
        class="inp"
        placeholder="请输入游戏名称或商品ID"
        placeholder-class="palceInp"
      />
      <image src="/static/junjun/Tsize_06.gif" class="search" />
      <image src="/static/junjun/Tsize_03.gif" class="kefu" />
    </view>
    <mescroll-uni
      ref="mescrollRef"
      @init="mescrollInit"
      @down="downCallback"
      @up="upCallback"
      :down="downOption"
      :up="upOption"
      top="90"
      bottom="100"
    >
      <!-- 轮播图 -->
      <view class="swiper-box">
        <view class="daily">
          <ul class="lb" :class="{ marquee_top: animate }">
            <li v-for="(item, index) in list" class="item" :key="index">
              <image src="/static/junjun/Tsize_11.gif" class="header" />
              <view class="text">{{ item }}</view>
            </li>
          </ul>
        </view>
        <swiper
          class="swiper"
          :indicator-dots="true"
          :autoplay="true"
          :circular="true"
        >
          <swiper-item v-for="(item, index) in swiperArr" :key="index">
            <view class="swiper-item">
              <image :src="item.path" class="swiper-img" />
            </view>
          </swiper-item>
        </swiper>
      </view>
      <!-- 标签 -->
      <view class="box">
        <view class="box-top">
          <view class="a-item" v-for="(item, index) in textArr" :key="index">
            <image :src="item.path" class="icon-img" />
            <text>{{ item.text }}</text>
          </view>
        </view>
        <view class="box-bottom">
          <scroll-view
            class="scroll-view_H"
            :scroll-x="true"
            :show-scrollbar="true"
            @scroll="scroll"
          >
            <view
              class="scroll-view-item_H"
              v-for="(item, index) in scrollArr"
              :key="index"
            >
              <image :src="item.path1" class="logo-img" />
              <view class="top-text">{{ item.text1 }}</view>
              <image :src="item.path2" class="logo-img bottom-img" />
              <view class="bottom-text">{{ item.text2 }}</view>
            </view>
          </scroll-view>
          <view class="gun">
            <view class="slider" id="slider"></view>
          </view>
        </view>
      </view>
      <Guess />
      <TopGame />
      <MoreGame ref="moreGame" :isFixed="isFixed" />
    </mescroll-uni>

    <TabBar />
  </view>
</template>

<script>
import Guess from './component/tao/guess'
import TopGame from './component/tao/topGame'
import MoreGame from './component/tao/moreGame'
import TabBar from './component/tao/tabBar-buttom'
export default {
  components: {
    Guess,
    TopGame,
    MoreGame,
    TabBar,
  },
  props: {},
  data() {
    return {
      downOption: {
        textLoading: '加载中 ...',
        textInOffset: '下拉刷新',
        textOutOffset: '下拉刷新',
        textLoading: '正在刷新',
        textSuccess: '刷新完成',
        beforeEndDelay: 1000,
        textColor: '#000',
        offset: 180,
        // bgColor: 'url(/static/junjun/bg.jpg) 0 75rpx/100% 3%',
        // textErr:"",
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
          tip: '暂无数据',
          use: false,
          // icon: '/static/realFix-module/no-search@2x.png',
        },

        textNoMore: '-------  ' + '你已经到底了哟' + '  -------',
        // toTop: {
        //   src: '/static/top@2x.png',
        // },
        toTop: {
          src: '',
        },
      },
      isFixed: false,
      animate: false,
      list: [
        '成功购买口袋妖怪复刻',
        '成功购买王者荣耀满皮肤',
        '成功购买梦幻西游150级',
      ],
      swiperArr: [
        { id: 1, path: '/static/junjun/Tsize_11.jpg' },
        { id: 2, path: '/static/junjun/Tsize_11.jpg' },
        { id: 3, path: '/static/junjun/Tsize_11.jpg' },
        { id: 4, path: '/static/junjun/Tsize_11.jpg' },
        { id: 5, path: '/static/junjun/Tsize_11.jpg' },
        { id: 6, path: '/static/junjun/Tsize_11.jpg' },
      ],
      textArr: [
        { id: 1, path: '/static/junjun/Tsize_15.gif', text: '专业平台' },
        { id: 2, path: '/static/junjun/Tsize_17.gif', text: '安全保障' },
        { id: 3, path: '/static/junjun/Tsize_20.gif', text: '卖家身份验证' },
      ],
      scrollArr: [
        {
          id: 1,
          path1: '/static/junjun/Tsize_37.gif',
          path2: '/static/junjun/Tsize_46.gif',
          text1: '账号',
          text2: '首冲续充',
        },
        {
          id: 2,
          path1: '/static/junjun/Tsize_34.gif',
          path2: '/static/junjun/Tsize_47.gif',
          text1: '租号',
          text2: '精品账号',
        },
        {
          id: 3,
          path1: '/static/junjun/Tsize_31.gif',
          path2: '/static/junjun/Tsize_48.gif',
          text1: '找代练',
          text2: '开局代充',
        },
        {
          id: 4,
          path1: '/static/junjun/Tsize_26.gif',
          path2: '/static/junjun/Tsize_50.gif',
          text1: '福利游戏',
          text2: '端游专区',
        },
        {
          id: 5,
          path1: '/static/junjun/Tsize_29.gif',
          path2: '/static/junjun/Tsize_45.gif',
          text1: '辅助神器',
          text2: '折扣充值',
        },
        {
          id: 6,
          path1: '/static/junjun/Tsize_37.gif',
          path2: '/static/junjun/Tsize_46.gif',
          text1: '免费领',
          text2: '安卓代充',
        },
        {
          id: 7,
          path1: '/static/junjun/Tsize_34.gif',
          path2: '/static/junjun/Tsize_15.gif',
          text1: '游戏币',
          text2: '首冲续充',
        },
      ],
    }
  },
  mounted() {
    this.scrollEvent()
    window.onscroll = this.handScroll // 不能加（），否则会返回undefined
  },
  methods: {
    //滚动组件初始化
    mescrollInit(mescroll) {
      this.mescroll = mescroll
    },
    /*下拉刷新的回调*/
    downCallback() {
      setTimeout(() => {
        console.log('downCallback')
        this.mescroll.endSuccess()
      }, 2000)
    },
    // 上拉更新更多
    upCallback() {
      console.log('upCallback')
      //  this.mescroll.endErr()
      this.mescroll.endByPage(0, 0)
    },
    handScroll() {
      // console.log('111')
      // console.log(document.documentElement.scrollTop, this.$refs.myswiper.$el.offsetHeight)// 获取滚动距离和轮播高度
      // if(滚动距离>=轮播的高度)
      this.$nextTick(() => {
        console.log(this.$refs.moreGame.$el.offsetHeight)
        if (
          document.documentElement.scrollTop >=
          this.$refs.moreGame.$el.offsetHeight - 490
        ) {
          // console.log('fixed')
          this.isFixed = true
        } else {
          // console.log('unfixed')
          this.isFixed = false
        }
      })
    },
    scroll(e) {
      //方法一
      //e.detail.scrollLeft
      //440
      let slider = document.getElementsByClassName('slider')[0]
      // console.log(slider)
      // console.log(e.detail.scrollLeft / 8 + 'px')
      slider.style.left = e.detail.scrollLeft / 8 + 'px'
      if (e.detail.scrollLeft == 0) {
        slider.style.left = 0
      }
      if (e.detail.scrollLeft == 440) {
        slider.style.left = '50px'
      }

      //方法二
      // let mystyle = this.$refs.slider.$el.style
      // mystyle.left = e.detail.scrollLeft / 8 + 'px'
      // if (e.detail.scrollLeft == 0) {
      //   mystyle.left = 0
      // }
      // if (e.detail.scrollLeft == 440) {
      //   mystyle.left = 50 + 'px'
      // }
    },
    scrollEvent() {
      let that = this
      //每隔3秒执行一次
      const timer = setInterval(() => {
        this.animate = true
        setTimeout(() => {
          that.list.push(this.list[0])
          that.list.shift()
          that.animate = false
          console.log(Math.random())
        }, 500)
      }, 3000)
      // 通过$once来监听定时器，在beforeDestroy钩子可以被清除。
      this.$once('hook:beforeDestroy', () => {
        clearInterval(timer)
      })
    },
  },
}
</script>

<style lang="scss" scoped>
//修改下拉刷新和上拉加载
// /deep/.mescroll-uni,
// .mescroll-uni-fixed {
//   padding-top: 90px !important;
//   padding-bottom: 100px !important;
// }
/deep/.mescroll-downwarp {
  // background: url('/static/junjun/bg.jpg') no-repeat fixed 90% 80% !important;
  // background-repeat: no-repeat !important;
  // background: url('/static/junjun/bg.jpg') no-repeat fixed top 0 80% !important;
}
/deep/.downwarp-content {
  min-height: 430rpx !important;
  bottom: -50rpx !important;
  color: #fff;
  font-size: 20rpx;
  background-repeat: no-repeat !important;
  background: url('/static/junjun/bg.jpg') no-repeat scroll 90% 80% !important;
  position: relative;
  .downwarp-tip {
    position: absolute;
    bottom: 80rpx;
    z-index: 99;
    left: 295rpx;
  }
  .mescroll-wxs-progress {
    display: none;
  }
}
/deep/.mescroll-upwarp {
  background: #f7f7f7 !important;
}
//修改swiper样式
/deep/.uni-swiper-dot {
  //未选择
  background: #fff;
  margin-right: 16rpx;
  width: 8rpx;
  height: 8rpx;
}
/deep/.uni-swiper-dot-active {
  //已选择
  width: 70rpx;
  height: 8rpx;
  border-radius: 4rpx;
}
/deep/.uni-swiper-dots {
  bottom: 15rpx;
}
.Tindex {
  font-size: 26rpx;
  background: #fff;
  padding-top: 90rpx;
  padding-bottom: 100rpx;
  .top {
    height: 90rpx;
    width: 750rpx;
    background: #ff0141;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    position: fixed;
    left: 0;
    top: 0;
    z-index: 99;
    .search {
      width: 30rpx;
      height: 30rpx;
      position: absolute;
      top: 30rpx;
      left: 50rpx;
      z-index: 10;
    }
    .inp {
      width: 620rpx;
      height: 70rpx;
      background: #f6f6f6;
      border-radius: 70rpx;
      margin-left: 20rpx;
      color: #000;
      font-size: 26rpx;
      /deep/.uni-input-wrapper {
        padding-left: 50rpx;
      }
    }
    .palceInp {
      color: #939393;
      font-size: 26rpx;
      left: 85rpx;
    }
    .kefu {
      width: 50rpx;
      height: 50rpx;
      margin-right: 30rpx;
    }
  }
  .swiper-box {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 338rpx;
    width: 750rpx;
    position: relative;
    .swiper {
      width: 710rpx;
      height: 300rpx;
      border-radius: 10rpx;
      background: red;
      .swiper-img {
        border-radius: 10rpx;
        width: 710rpx;
        height: 300rpx;
      }
    }
    .daily {
      width: 280rpx;
      height: 50rpx;
      background: #fff;
      opacity: 0.7;
      border-radius: 50rpx;
      position: absolute;
      bottom: 34rpx;
      right: 28rpx;
      z-index: 11;
      overflow: hidden;
      .lb {
        .item {
          display: flex;
          align-items: center;
          .header {
            width: 30rpx;
            height: 30rpx;
            margin: 0 10rpx;
          }
          .text {
            width: 225rpx;
            line-height: 50rpx;
            white-space: nowrap; //强制不换行
            overflow: hidden;
            text-overflow: ellipsis;
          }
        }
      }
      .marquee_top {
        transition: all 0.5s;
        margin-top: -50rpx;
      }
    }
  }
  .box {
    margin-bottom: 90rpx;
    .box-top {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-around;
      margin-bottom: 50rpx;
      .a-item {
        display: flex;
        flex-direction: row;
        color: #8d8d8d;
        font-size: 24rpx;
        .icon-img {
          width: 25rpx;
          height: 25rpx;
          margin-right: 10rpx;
          position: relative;
          top: 10rpx;
        }
      }
    }
    .box-bottom {
      .gun {
        margin-top: 35rpx;
        width: 100rpx;
        height: 8rpx;
        background: #d8d8d8;
        border-radius: 4rpx;
        margin-left: 300rpx;
        .slider {
          width: 50rpx;
          height: 8rpx;
          background: #ff0141;
          border-radius: 4rpx;
          position: relative;
          left: 0; //0到50的滚动距离
        }
      }
      .scroll-view_H {
        white-space: nowrap;
        .scroll-view-item {
          height: 320rpx;
          text-align: center;
          font-size: 36rpx;
        }
        .scroll-view-item_H {
          margin-right: 70rpx;
          display: inline-block; //scroll-view组件使用坑
          width: 100rpx;
          height: 320rpx;
          text-align: center;
          font-size: 36rpx;
          &:first-child {
            margin-left: 35rpx;
          }
          &:last-child {
            margin-right: 35rpx;
            .bottom-img,
            .bottom-text {
              // display: none;
              opacity: 0;
            }
          }
          .logo-img {
            width: 80rpx;
            height: 80rpx;
          }
          .top-text {
            margin-bottom: 32rpx;
          }
        }
      }
    }
  }
}
</style>