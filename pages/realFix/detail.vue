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
    <view>
      <view>国际化</view>
      <view>{{ $t('text') }}</view>
      <view @click="changeLanguage">点我哟</view>
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
    }
  },
  mounted() {
    console.log('000000000', this.$store)
    console.log('11111111111', this.status)
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
</style>