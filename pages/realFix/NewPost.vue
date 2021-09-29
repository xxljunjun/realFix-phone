<template>
  <view class="xxl">
    <TopBack title="New Post" rightText="Next" @rightBack="nextHandle" />
    <!-- 导入报告按钮 -->
    <view class="addBox">
      <view class="text_1">
        <image src="/static/daotong/jia@2x.png" class="jia" />
        <text class="intext_1">Import diagnostic report</text>
      </view>
      <view class="text_2"
        >Import report, auto input vehicle fault information</view
      >
    </view>
    <!-- Vehicle -->
    <view class="line">
      <text class="dot">*</text>
      <text class="line_text">Vehicle</text>
      <image src="/static/daotong/prompt.png" class="tishi" />
    </view>
    <view class="inp_Box" @click="toVersion">
      <input
        class="inp"
        placeholder="Pelese select"
        disabled
        v-model="vehicle"
      />
      <image src="/static/daotong/vin.png" class="vin" />
    </view>
    <!-- Mileage -->
    <view class="line">
      <text class="dot">*</text>
      <text class="line_text">Mileage</text>
    </view>
    <view class="inp_Box">
      <input class="smallinp" placeholder="Pelese enter" v-model="unitNum" />
      <input class="largeinp" disabled v-model="unit" @click.stop="openUnit" />
      <image src="/static/daotong/speak.png" class="speak1" />
      <image src="/static/daotong/rightArrow.png" class="downArrow" />
      <view class="chooseUnit_Box" v-if="unitState">
        <ul>
          <li
            v-for="item in unitArr"
            :key="item.id"
            @click.stop="toChooseUnit(item.id)"
          >
            {{ item.unit }}
          </li>
        </ul>
      </view>
    </view>
    <!-- System -->
    <view class="line">
      <text class="dot">*</text>
      <text class="line_text">System</text>
    </view>
    <view class="inp_Box">
      <input
        class="inp Systeminp"
        placeholder="Pelese select"
        disabled
        v-model="System"
        @touchend.stop="ischooseSystem = true"
      />
      <image src="/static/daotong/rightArrow.png" class="rightArrow" />
    </view>
    <!-- DOC -->
    <view class="line">
      <text class="dot">*</text>
      <text class="line_text">DOC</text>
    </view>
    <view class="inp_Box">
      <uni-easyinput
        type="textarea"
        autoHeight
        v-model="Dtcvalue"
        placeholder="Pelese select"
        class="Doctextarea"
        :clearable="false"
        placeholderStyle="color: #AAAAAA;font-size:30rpx;"
        :maxlength="8"
        @keyup.native="toDtc($event)"
      >
      </uni-easyinput>
      <image src="/static/daotong/speak.png" class="speak" />
    </view>
    <!-- 选择System -->
    <Picker
      v-if="ischooseSystem"
      @toClose="toClose"
      @okSystem="okSystem"
      @emptySystem="emptySystem"
      title="System"
      :listArr="systemArr"
      types="system"
    />
  </view>
</template>

<script>
import TopBack from "./component/topBack/topBack";
import Picker from "./component/picker";
export default {
  components: {
    TopBack,
    Picker,
  },
  data() {
    return {
      unitState: false,
      unit: "Miles", //里程单位
      unitArr: [
        { id: 1, unit: "Miles" },
        { id: 2, unit: "Kilometers" },
      ],
      unitNum: "", //里程数
      System: "", //系统
      ischooseSystem: false,
      systemArr: [
        { id: 1, system: "Engine", ischeck: false },
        { id: 2, system: "ADAS system", ischeck: false },
        { id: 3, system: "Communication systems", ischeck: false },
        { id: 4, system: "Anti-theft and entry system", ischeck: false },
      ],
      vehicle: "", //机型
      Dtcvalue: "",
    };
  },
  onLoad: function(option) {
    //option为object类型，会序列化上个页面传递的参数
    this.vehicle = option.vehicle;
  },
  mounted() {
    document.body.addEventListener("click", this.clickBody);
  },
  destroyed() {
    document.body.removeEventListener("click", this.clickBody);
  },
  methods: {
    toVersion() {
      uni.navigateTo({
        url: "component/NewPost/version",
      });
    },
    nextHandle() {
      console.log("下一步");
      uni.navigateTo({
        url: "NewPost2",
      });
    },
    toDtc(e) {
      //回车键13
      //空格键32
      //逗号188
      if (e.keyCode === 13) {
        console.log(e);
        this.Dtcvalue = "";
      }
    },
    okSystem() {
      let arr = this.systemArr.filter((val) => {
        return val.ischeck;
      });
      let arr1 = [];
      arr.forEach((val) => {
        arr1.push(val.system);
      });
      this.System = arr1.join();
      this.ischooseSystem = false;
    },
    emptySystem() {
      this.systemArr.forEach((val) => {
        val.ischeck = false;
      });
    },
    toSelectSystem(item) {
      item.ischeck = !item.ischeck;
    },
    toClose() {
      this.ischooseSystem = false;
    },
    back() {
      uni.navigateBack({
        delta: 1,
      });
    },
    openUnit() {
      this.unitState = true;
    },
    toChooseUnit(id) {
      console.log("id", id);
      if (id == 1) {
        this.unit = "Miles";
      } else {
        this.unit = "Kilometers";
      }
      this.unitState = false;
    },
    clickBody() {
      this.unitState = false;
    },
  },
};
</script>

<style lang="scss"></style>
<style lang="scss" scoped>
uni-page-body,
uni-page-refresh {
  height: 100%;
  background: rgba(235, 235, 235, 1);
}
/deep/.uni-input-wrapper {
  width: 580rpx !important;
}
/* textarea */
.xxl {
  /deep/.uni-easyinput__content-textarea {
    padding: 0;
  }
  /deep/.is-textarea {
    background: rgba(245, 245, 245, 1) !important;
  }
  /deep/.input-padding {
    padding-left: 30rpx;
    line-height: 88rpx;
    color: #000;
    font-size: 30rpx;
  }
}

.dtc {
  width: 171px;
  height: 56px;
  background: rgba(225, 225, 225, 1);
  border-radius: 28px;
}
.brn {
  width: 690rpx;
  height: 88rpx;
  background: linear-gradient(
    360deg,
    rgba(5, 124, 255, 1) 0%,
    rgba(95, 172, 255, 1) 100%
  );
  border-radius: 10rpx;
  border: 1px solid rgba(18, 114, 221, 1);
  font-size: 34rpx;
  font-family: HelveticaNeue;
  color: rgba(255, 255, 255, 1);
  line-height: 34rpx;
  display: flex;
  align-items: center;
  justify-content: center;
}
.xxl {
  color: #000;
  border-top: 1px solid #ccc;
  background: rgba(235, 235, 235, 1);
  box-shadow: 0px -2px 0px 0px rgba(204, 204, 204, 1),
    0px 2px 0px 0px rgba(249, 249, 249, 1);
  width: 100%;
  // height: 100%;
  padding-top: 88rpx;
}
.addBox {
  width: 690rpx;
  height: 150rpx;
  background: rgba(245, 245, 245, 1);
  border-radius: 10px;
  border: 2px dashed rgba(13, 126, 255, 1);
  margin-top: 30rpx;
  text-align: center;
  margin-left: 30rpx;
}
.text_1 {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 12rpx;
  margin-top: 30rpx;
}
.text_2 {
  font-size: 26rpx;
  font-family: HelveticaNeue;
  color: rgba(13, 126, 255, 1);
  line-height: 34rpx;
}
.jia {
  height: 36rpx;
  width: 36rpx;
  margin-right: 5rpx;
}
.intext_1 {
  font-size: 34rpx;
  font-family: HelveticaNeue-Medium, HelveticaNeue;
  font-weight: bold;
  color: rgba(13, 126, 255, 1);
  line-height: 42rpx;
}
.line {
  padding-left: 30rpx;
  margin-top: 30rpx;
}
.inp_Box {
  padding-left: 30rpx;
  margin: 8rpx 0 40rpx;
  display: flex;
  position: relative;
  .Systeminp {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  .chooseUnit_Box {
    width: 340rpx;
    height: 216rpx;
    border-radius: 10rpx;
    background: rgba(245, 245, 245, 1);
    box-shadow: 0px 8rpx 14rpx 0px rgba(0, 0, 0, 0.1);
    border: 2rpx solid rgba(184, 184, 184, 1);
    position: absolute;
    top: 96rpx;
    right: 22rpx;
    z-index: 66;
    li {
      height: 106rpx;
      line-height: 106rpx;
      padding-left: 30rpx;
      &:first-child {
        border-bottom: 2px solid #ccc;
      }
    }
  }
}
.dot {
  color: rgba(245, 44, 44, 1);
  font-size: 34rpx;
  font-family: HelveticaNeue;
  line-height: 42rpx;
  margin-right: 5rpx;
  position: relative;
  top: 6rpx;
}
.line_text {
  font-size: 34rpx;
  font-family: HelveticaNeue;
  line-height: 42rpx;
  font-weight: bold;
}
.tishi {
  height: 44rpx;
  width: 44rpx;
  margin-left: 16rpx;
  position: relative;
  top: 8rpx;
}
.inp {
  width: 690rpx;
  height: 88rpx;
  background: rgba(245, 245, 245, 1);
  box-shadow: 0px 4rpx 2rpx 0px rgba(226, 226, 226, 1);
  border-radius: 10rpx;
  border: 2rpx solid rgba(184, 184, 184, 1);
  font-size: 30rpx;
}
.Doctextarea {
  max-width: 690rpx;
  min-height: 88rpx;
  background: rgba(245, 245, 245, 1);
  box-shadow: 0px 4rpx 2rpx 0px rgba(226, 226, 226, 1);
  border-radius: 10rpx;
  border: 2rpx solid rgba(184, 184, 184, 1);
  font-size: 30rpx;
}
.smallinp {
  background: #fff;
  width: 340rpx;
  height: 88rpx;
  background: rgba(245, 245, 245, 1);
  box-shadow: 0px 4rpx 2rpx 0px rgba(226, 226, 226, 1);
  border-radius: 10rpx;
  border: 2rpx solid rgba(184, 184, 184, 1);
  font-size: 30rpx;
}
.largeinp {
  background: #fff;
  width: 340rpx;
  height: 88rpx;
  background: rgba(245, 245, 245, 1);
  box-shadow: 0px 4rpx 2rpx 0px rgba(226, 226, 226, 1);
  border-radius: 10rpx;
  border: 2rpx solid rgba(184, 184, 184, 1);
  margin-left: 10rpx;
  font-size: 30rpx;
}
.vin,
.speak,
.rightArrow,
.downArrow {
  height: 44rpx;
  width: 44rpx;
  position: absolute;
  right: 55rpx;
  top: 22rpx;
}
.speak1 {
  height: 44rpx;
  width: 44rpx;
  position: absolute;
  left: 300rpx;
  top: 22rpx;
}
</style>
