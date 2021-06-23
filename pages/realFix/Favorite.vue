<template>
  <view class="favorite">
    <TopBack title="Favorite" />
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
  </view>
</template>

<script>
import Box from './component/Box'
import TopBack from './component/topBack/topBack'
export default {
  data() {
    return {
      detailArr: [],
      dialogIsShow: false,
      canDelete: true,
      // mescroll:null,
      downOption: {
        textLoading: '加载中 ...',
        textOutOffset: '释放刷新',
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
        toTop: {
          src: '/static/top@2x.png',
        },
      },
    }
  },
  mounted() {
    this.getBoxDetail()
  },
  components: {
    TopBack,
    Box,
  },
  methods: {
    //滚动组件初始化
    mescrollInit(mescroll) {
      this.mescroll = mescroll
    },
    /*下拉刷新的回调*/
    downCallback() {
      console.log('downCallback')
      this.mescroll.endSuccess()
    },
    // 上拉更新更多
    upCallback() {
      console.log('upCallback')
      //  this.mescroll.endErr()
      this.mescroll.endByPage(0, 0)
    },
    toDetail(id) {
      console.log('todetaol', id)
      // this.$router.push("/")
      //跳转到详情页
      let url = 'http://www.baidu.com'
      uni.navigateTo({
        url: 'webView?url=' + url,
      })
    },
    getBoxDetail() {
      this.detailArr = [
        {
          id: 1,
          detail: {
            title: '19 ercedes-Benz GLS450 steering systems failed',
            Vehicle: '2003 BMW 530i 3.0L',
            dtcarr: ['P0171', 'P0174', 'P0101'],
            text: 'The customer states the check engine light is on and the vehicle exhibits a hard start ',
            author: 'Milan Collier',
            num1: '22',
            num2: '33',
            imgsrc: [
              '/static/daotong/img_1.png',
              '/static/daotong/img_2.png',
              '/static/daotong/img_3.png',
            ],
          },
        },
        {
          id: 2,
          detail: {
            title: '19 ercedes-Benz GLS450 steering systems failed',
            Vehicle: '2003 BMW 530i 3.0L',
            dtcarr: ['P0171', 'P0174', 'P0101'],
            text: 'The customer states the check engine light is on and the vehicle exhibits a hard start ',
            author: 'Milan Collier',
            num1: '22',
            num2: '33',
            imgsrc: [
              '/static/daotong/img_3.png',
              '/static/daotong/img_2.png',
              '/static/daotong/img_1.png',
            ],
          },
        },
        {
          id: 3,
          detail: {
            title: '19 ercedes-Benz GLS450 steering systems failed',
            Vehicle: '2003 BMW 530i 3.0L',
            dtcarr: ['P0171', 'P0174', 'P0101'],
            text: 'The customer states the check engine light is on and the vehicle exhibits a hard start ',
            author: 'Milan Collier',
            num1: '22',
            num2: '33',
            imgsrc: [
              '/static/daotong/img_2.png',
              '/static/daotong/img_3.png',
              '/static/daotong/img_1.png',
            ],
          },
        },
        {
          id: 4,
          detail: {
            title: '19 ercedes-Benz GLS450 steering systems failed',
            Vehicle: '2003 BMW 530i 3.0L',
            dtcarr: ['P0171', 'P0174', 'P0101'],
            text: 'The customer states the check engine light is on and the vehicle exhibits a hard start ',
            author: 'Milan Collier',
            num1: '22',
            num2: '33',
            imgsrc: [
              '/static/daotong/img_2.png',
              '/static/daotong/img_3.png',
              '/static/daotong/img_1.png',
            ],
          },
        },
        {
          id: 5,
          detail: {
            title: '19 ercedes-Benz GLS450 steering systems failed',
            Vehicle: '2003 BMW 530i 3.0L',
            dtcarr: ['P0171', 'P0174', 'P0101'],
            text: 'The customer states the check engine light is on and the vehicle exhibits a hard start ',
            author: 'Milan Collier',
            num1: '22',
            num2: '33',
            imgsrc: [
              '/static/daotong/img_2.png',
              '/static/daotong/img_3.png',
              '/static/daotong/img_1.png',
            ],
          },
        },
        {
          id: 6,
          detail: {
            title: '19 ercedes-Benz GLS450 steering systems failed',
            Vehicle: '2003 BMW 530i 3.0L',
            dtcarr: ['P0171', 'P0174', 'P0101'],
            text: 'The customer states the check engine light is on and the vehicle exhibits a hard start ',
            author: 'Milan Collier',
            num1: '22',
            num2: '33',
            imgsrc: [
              '/static/daotong/img_2.png',
              '/static/daotong/img_3.png',
              '/static/daotong/img_1.png',
            ],
          },
        },
        {
          id: 7,
          detail: {
            title: '19 ercedes-Benz GLS450 steering systems failed',
            Vehicle: '2003 BMW 530i 3.0L',
            dtcarr: ['P0171', 'P0174', 'P0101'],
            text: 'The customer states the check engine light is on and the vehicle exhibits a hard start ',
            author: 'Milan Collier',
            num1: '22',
            num2: '33',
            imgsrc: [
              '/static/daotong/img_2.png',
              '/static/daotong/img_3.png',
              '/static/daotong/img_1.png',
            ],
          },
        },
        {
          id: 8,
          detail: {
            title: '19 ercedes-Benz GLS450 steering systems failed',
            Vehicle: '2003 BMW 530i 3.0L',
            dtcarr: ['P0171', 'P0174', 'P0101'],
            text: 'The customer states the check engine light is on and the vehicle exhibits a hard start ',
            author: 'Milan Collier',
            num1: '22',
            num2: '33',
            imgsrc: [
              '/static/daotong/img_2.png',
              '/static/daotong/img_3.png',
              '/static/daotong/img_1.png',
            ],
          },
        },
      ]
    },
  },
}
</script>

<style lang="scss" scoped>
/deep/.mescroll-uni {
  padding-top: 88rpx !important;
}
.favorite {
  padding-top: 88rpx;
  width: 750px;
  background: rgba(224, 224, 224, 1);
  .detailbox {
    padding: 30rpx 0 0 30rpx;
  }
}
</style>