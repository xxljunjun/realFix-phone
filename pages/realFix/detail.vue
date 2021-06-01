<template>
  <view class="detail">
    <TopBack title="" rightText="Report" @rightBack="rightBack" />
    <view class="all">
      <view class="title"
        >The failure code of 2016 Mercedes-benz E300L is P064104</view
      >
    </view>
    <viewer :images="imgs">
      <img v-for="src in imgs" :src="src.url" :key="src.title" />
    </viewer>
    <!-- 随意 -->
    <view class="box">
      <view>国际化</view>
      <view>{{ $t('text') }}</view>
      <view @click="changeLanguage">点我哟</view>
      <input type="text" class="inp" v-model="city" />
      <button @click="toSearch" class="btn">查天气</button>
      <!-- <u-button shape="square">乌啼</u-button> -->
      <view class="content"></view>
    </view>
    <Picker
      v-if="isReport"
      @toClose="toClosePicker"
      @submit="submit"
      title="Report"
      :listArr="reportListArr"
      types="report"
    />
  </view>
</template>

<script>
import TopBack from './component/topBack/topBack'
import Picker from './component/picker'
import { mapState } from 'vuex'
import { getWeather } from '../../src/utils/api.js'
export default {
  data() {
    return {
      isReport: false,
      reportListArr: [
        { id: 1, system: 'Content Quantity Needs ', ischeck: false },
        { id: 2, system: 'Inaccurate Article', ischeck: false },
        { id: 3, system: 'Advertisement', ischeck: false },
        { id: 4, system: 'Inappropriate Content', ischeck: false },
      ],
      imgs: [
        {
          url:
            'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=85690711,3884201894&fm=27&gp=0.jpg',
          title: '图片1',
        },
      ],
      city: '',
    }
  },
  mounted() {
    // this.togetSomething()
    // console.log('000000000', this.$store)
    // console.log('11111111111', this.status)
    /* 
		1、可以用mapState、mapGetters在computed进行简写。
		2、可以用mapMutations、mapActions在methods进行简写。
    3、this.$store.dispatch触发actions上的方法进行调用后端数据。
    4、this.$store.commit触发mutations上的方法修改state上的变量。

	 */
  },
  computed: {
    //可以通过mapState，mapGetters方法简写代码，直接通过this去访问
    ...mapState(['status']),
  },
  components: {
    TopBack,
    Picker,
  },
  methods: {
    toSearch() {
      console.log("1111111111'")
      this.togetSomething()
    },
    togetSomething() {
      console.log('掉接口前')
      //方法一未封装统一的request
      // uni.request({
      //   url:
      //     'http://localhost:8080/he/freeweather?city=beijing&appkey=7a85fc9df58cd155f764e033a257d879',
      //   header: {
      //     'content-type': 'application/x-www-form-urlencoded', //自定义请求头信息
      //   },
      //   //请求成功后返回
      //   success: (res) => {
      //     // 请求成功之后将数据给Info
      //     console.log('0000000000000', res)
      //   },
      // })

      //方法二统一封装request
      let params = {
        city: this.city,
        appkey: '7a85fc9df58cd155f764e033a257d879',
      }
      getWeather(params).then((res) => {
        console.log('天气', res)
      })
    },
    changeLanguage() {
      console.log('国际化', this.$i18n)
      this.$i18n.locale = this.$i18n.locale === 'zh' ? 'en' : 'zh'
      this.$store.commit('toChaneStatus', 11111111111)
      this.$store.dispatch('toChang', 22222222222)
    },
    rightBack() {
      console.log('弹出举报')
      this.isReport = true
    },
    toClosePicker() {
      this.isReport = false
    },
    submit(val) {
      console.log('提交意见', val)
      this.isReport = false
    },
  },
}
</script>
<style lang="scss" scoped>
uni-page-body,
uni-page-refresh {
  height: 100%;
}

.detail {
  padding-top: 88rpx;
  background: rgba(235, 235, 235, 1);
  height: 100%;
  box-sizing: border-box;
  .all {
    padding: 30rpx;
    .title {
      color: #000;
      font-weight: bolder;
      font-size: 40rpx;
      line-height: 49rpx;
    }
  }
}
.box {
  .btn {
    height: 80rpx;
    width: 300rpx;
  }
  .inp {
    height: 60rpx;
    width: 400rpx;
    background: #fff;
  }
  content {
  }
}
</style>