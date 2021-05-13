<template>
  <view class="version_Box">
    <view class="choose_Box"
      >{{ who }}<span class="title">{{ title }}</span></view
    >
    <view class="year_Box" v-if="yearStatus">
      <view
        class="a_line"
        v-for="(item, index) in yearArr"
        :key="index"
        @click="tochooseYear(item.id)"
        >{{ item.yearName }}
        <image
          src="/static/daotong/dagou.png"
          class="dagou"
          v-if="item.isChoose"
        />
      </view>
    </view>
    <view class="mark_Box" v-if="markStatus">
      <view
        class="a_line"
        v-for="(item, index) in markArr"
        :key="index"
        @click="tochooseMark(item.id)"
        >{{ item.markName }}
        <image
          src="/static/daotong/dagou.png"
          class="dagou"
          v-if="item.isChoose"
        />
      </view>
    </view>
    <view class="model_box" v-if="modelStatus">
      <view
        class="a_line"
        v-for="(item, index) in modelArr"
        :key="index"
        @click="tochooseModel(item.id)"
        >{{ item.modelName }}
        <image
          src="/static/daotong/dagou.png"
          class="dagou"
          v-if="item.isChoose"
        />
      </view>
    </view>
    <view class="engine_box" v-if="engineStatus">
      <view
        class="a_line"
        v-for="(item, index) in engineArr"
        :key="index"
        @click="tochooseEngine(item.id)"
        >{{ item.engineName }}
        <image
          src="/static/daotong/dagou.png"
          class="dagou"
          v-if="item.isChoose"
        />
      </view>
    </view>
    <TopBack title="Select Vehicle" />
  </view>
</template>

<script>
import TopBack from '../topBack/topBack'
export default {
  data() {
    return {
      who: '',
      title: 'Select Year',
      yearStatus: true,
      markStatus: false,
      modelStatus: false,
      engineStatus: false,
      yearArr: [
        { id: 1, yearName: 2008, isChoose: false },
        { id: 2, yearName: 2009, isChoose: false },
        { id: 3, yearName: 2010, isChoose: false },
        { id: 4, yearName: 2011, isChoose: false },
        { id: 5, yearName: 2012, isChoose: false },
        { id: 6, yearName: 2013, isChoose: false },
        { id: 7, yearName: 2014, isChoose: false },
      ],
      markArr: [
        { id: 1, markName: 'BMW', isChoose: false },
        { id: 2, markName: 'Buick', isChoose: false },
        { id: 3, markName: 'Chrysler', isChoose: false },
        { id: 4, markName: 'DS', isChoose: false },
        { id: 5, markName: 'DMC', isChoose: false },
        { id: 6, markName: 'Buick', isChoose: false },
      ],
      modelArr: [
        { id: 1, modelName: '116i', isChoose: false },
        { id: 2, modelName: '118d', isChoose: false },
        { id: 3, modelName: '218i', isChoose: false },
        { id: 4, modelName: '320i', isChoose: false },
      ],
      engineArr: [
        {
          id: 1,
          engineName: '2.0L L4(N20B20A)Turbocharged GAS FI',
          isChoose: false,
        },
        {
          id: 2,
          engineName: '2.0L L4(N20B20A)Turbocharged GAS FI',
          isChoose: false,
        },
        {
          id: 3,
          engineName: '2.0L L4(N20B20A)Turbocharged GAS FI',
          isChoose: false,
        },
        {
          id: 4,
          engineName: '2.0L L4(N20B20A)Turbocharged GAS FI',
          isChoose: false,
        },
        {
          id: 5,
          engineName: '2.0L L4(N20B20A)Turbocharged GAS FI',
          isChoose: false,
        },
      ],
      version: {
        year: '',
        mark: '',
        model: '',
        engineS: '',
      },
    }
  },
  components: {
    TopBack,
  },
  methods: {
    tochooseYear(id) {
      console.log('选择')

      this.yearArr.forEach((val) => {
        if (val.id == id) {
          if (!val.isChoose) {
            this.yearStatus = false
            this.markStatus = true
            this.title = 'Select Make'
            this.who = val.yearName + ' ' + '>' + ' '
          }
          val.isChoose = !val.isChoose
        }
      })
    },
    tochooseMark(id) {
      console.log('选择')

      this.markArr.forEach((val) => {
        if (val.id == id) {
          if (!val.isChoose) {
            this.markStatus = false
            this.modelStatus = true
            this.title = 'Select Model'
            this.who = this.who + val.markName + ' ' + '>' + ' '
          }
          val.isChoose = !val.isChoose
        }
      })
    },
    tochooseModel(id) {
      console.log('选择')

      this.modelArr.forEach((val) => {
        if (val.id == id) {
          if (!val.isChoose) {
            this.modelStatus = false
            this.engineStatus = true
            this.title = 'Select Engine'
            this.who = this.who + val.modelName + ' ' + '>' + ' '
          }
          val.isChoose = !val.isChoose
        }
      })
    },
    tochooseEngine(id) {
      console.log('选择')

      this.engineArr.forEach((val) => {
        if (val.id == id) {
          // if (!val.isChoose) {
          //   this.engineStatus = false
          //   this.title = 'Select Engine'
          //   this.who = this.who + val.engineName + ' ' + '>' + ' '
          // }
          // val.isChoose = !val.isChoose
        }
      })
      //跳转
      uni.navigateBack({
        delta: 1,
      })
    },
  },
}
</script>

<style lang="scss" scoped>
uni-page-body,
uni-page-refresh {
  height: 100%;
  background: rgba(224, 224, 224, 1);
}
.version_Box {
  background: rgba(224, 224, 224, 1);
  padding-top: 88rpx;
  .choose_Box {
    height: 110rpx;
    padding-left: 30rpx;
    line-height: 110rpx;
    .title {
      color: #007eff;
    }
  }
  .a_line {
    padding-left: 30rpx;
    height: 100rpx;
    width: 750rpx;
    background: rgba(235, 235, 235, 1);
    box-shadow: 0px 2rpx 0px 0px rgba(255, 255, 255, 0.5),
      0px -2rpx 0px 0px rgba(204, 204, 204, 1);
    display: flex;
    align-items: center;
    position: relative;
    .dagou {
      height: 44rpx;
      width: 44rpx;
      position: absolute;
      top: 30rpx;
      right: 60rpx;
    }
  }
  .year_Box {
  }
}
</style>