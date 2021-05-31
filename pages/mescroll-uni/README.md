## mescroll --【wxs+renderjs实现】高性能的下拉刷新上拉加载组件
1. mescroll的uni版本 是专门用在uni-app的下拉刷新和上拉加载的组件, 支持一套代码编译到iOS、Android、H5、小程序等多个平台

2. mescroll的uni版本 继承了mescroll.js的实用功能: 自动处理分页, 自动控制无数据, 空布局提示, 回到顶部按钮 ..

3. mescroll的uni版本 丰富的案例, 自由灵活的api, 超详细的注释, 可让您快速自定义真正属于自己的下拉上拉组件

<br/>


## 最新文档(1.3.7版本): <a href="http://www.mescroll.com/uni.html">http://www.mescroll.com/uni.html</a>
2021-04-13 by mescroll (文档可能会有缓存,建议打开时刷新一下)


## 近期已更新优化的内容:
1. 微信小程序, app, h5使用高性能wxs和renderjs, 下拉刷新更流畅丝滑, 尤其能明显解决Android小程序下拉卡顿的问题
2. 新增国际化`mescroll-i18n.vue`示例, 新增轮播吸顶菜单`mescroll-swiper-sticky.vue`示例,    
3. 新增 "局部区域滚动" 的案例: mescroll-body-part.vue 和 mescroll-uni-part.vue  
4. 新增 me-video 视频组件, 解决APP端视频下拉悬浮错位的问题, 参考 mescroll-options.vue 示例  
5. 新增 me-tabs 组件,tabs支持水平滑动; 优化mescroll-more和mescroll-swiper的案例, 顶部tab支持水平滑动
6. 吸顶悬浮提供了原生sticky和监听滚动条实现的示例: sticky.vue 和 sticky-scroll.vue (推荐使用sticky样式实现)
7. mescroll.scrollTo(y)的y支持css选择器, 包括跨自定义组件的后代选择器, 支持滚动到子组件的view (参考 mescroll-options.vue)  
8. topbar 顶部是否预留状态栏的高度, 默认false; 还可支持设置状态栏背景: 如 '#ffff00', 'url(xxx) 0 0/100% 100%', 'linear-gradient(xx)'
9. down.bgColor 和 up.bgColor 加载区域的背景,不仅支持色值, 而且还是支持背景图和渐变: 如 'url(xxx) 0 0/100% 100%', 'linear-gradient(xx)'
10. topbar,bgColor支持一行代码定义background: [https://www.runoob.com/cssref/css3-pr-background.html](https://www.runoob.com/cssref/css3-pr-background.html)
<br/>
<br/>
<a href="https://ext.dcloud.net.cn/plugin?id=343&update_log">查看更多 ... </a>


### 更新记录:

---
#### 1.3.7版本 (2021/04/13)  
1. 新增`mescroll-swiper-sticky.vue`的示例, 轮播吸顶菜单导航  
2. 新增`mescroll-empty.vue`的示例, 单独使用空布局组件  
3. 简化tabs在具体项目中的使用,并简化对应的示例  
4. mescroll-uni 支持动态禁止滚动的属性 disableScroll (注: mescroll-body不支持)  
-by 小瑾同学

---
#### 1.3.5版本 (2021/04/10)  
1. 新增 `mescroll-i18n.vue` 的示例, 支持国际化的配置  
2. down的`beforeEndDelay`不再默认配置 // (显示加载成功/失败的时长, android小程序设置此项结束下拉会卡顿, 配置后请注意测试)  
3. mescroll-body-part.vue 和 mescroll-uni-part.vue 的示例新增参考代码: `异步加载左侧菜单(超简单)`  
4. mescroll的极简示例新增参考代码: `先请求其他接口,再触发upCallback,无需配置auto为false(超简单)`  
5. 修复mescroll-swiper的tabs在app或h5错位的问题  
-by 小瑾同学

---
#### 1.3.3版本 (2020/09/15)  
1. 新增下拉刷新成功和失败的文本配置, 可在 mescroll-uni-option.js 配置修改  
1. 新增 me-video 视频组件, 解决APP端视频下拉悬浮错位的问题, 参考最新的 mescroll-options.vue 示例  
2. 更新 mescroll-comp.vue 的示例, 支持 mescroll-body 子子..子组件 , 包括 mescroll-more.vue 也支持写在子子..子组件  
3. mescroll-uni 的 down.offset 由原来的 80 调整为 150 , 避免超快速滑动列表到底部,偶尔出现无法再翻页的问题 (mescroll-body无此问题)  
4. 修复 mescroll-more.vue 和 mescroll-swiper.vue 的示例在字节跳动小程序2.0.0以上新版编辑器无法正常运行的问题  
5. 修复淘宝和美团的示例下拉卡顿的问题 ( 案例需重新下载 )  
-by mescroll  

---
#### 1.3.2版本 (2020/08/05)
1. mescroll-body新增sticky属性, 简化吸顶悬浮sticky.vue的示例  
2. QQ小程序支持wxs,解决QQ小程序卡顿和无法隐藏加载状态的问题  
3. mescroll.scrollTo(y)的y支持css选择器, 包括跨自定义组件的后代选择器, 支持滚动到子组件的view (参考 mescroll-options.vue)  
-by 小瑾同学

---
#### 1.3.1版本 (2020/07/27)
1. 修复Android小程序下拉刷新时, image 和 swiper 脱离文档流的问题  
2. 修复H5端, 当配置down.use为false时, 返回其他页面无法滚动的问题  
3. mescroll-comp.js支持mescroll-body写在子子子...组件中 (以前版本仅支持写在一级子组件) 
4. 吸顶悬浮提供了sticky样式和监听滚动条实现的示例: sticky.vue 和 sticky-scroll.vue (推荐使用sticky样式实现)  
-by 小瑾同学

---
#### 1.3.0版本 (2020/07/10)
1. 微信小程序, app, h5使用高性能wxs和renderjs, 下拉刷新更流畅丝滑, 尤其能明显解决Android小程序下拉卡顿的问题
2. 使用wxs和renderjs优化所有案例, 尤其是中高级案例, 建议大家重新下载最新的案例
3. 废弃down的isBounce配置, 已通过renderjs自动判断, 无需配置mescroll-touch
4. 废弃down的fps配置, 已通过wxs提高性能, 无需手动节流
5. 新增 "局部区域滚动" 的案例: mescroll-body-part.vue 和 mescroll-uni-part.vue
6. 解决swiper切换时,有时会触发下拉刷新的问题, 已避免swiper和下拉刷新相互冲突
7. 解决钉钉小程序mescroll-uni下拉刷新有时无法触发的问题
8. 解决上拉加载进度在部分Android手机显示不全的问题
9. 提高 me-tabs 组件在部分Android手机的兼容性  
-by 小瑾同学

---
#### 1.2.8版本 (2020/06/28)
1. 解决 mescroll-uni 再某些情况下列表数据渲染不完全的问题 ( mescroll-body无此问题 )
2. 优化 me-tabs 组件, 使用支付宝小程序可隐藏滚动条, 同时修复字节跳动小程序tab切换时渲染延迟的问题
-by 小瑾同学

---
#### 1.2.7版本 (2020/06/24)
1. 上拉加载结束隐藏底部加载区域,避免加载区域占位
2. h5端的tab页默认偏移TabBar的高度,避免h5端列表被TabBar遮住 (如不想偏移,可通过配置 :bottombar="false" 取消)
3. 新增 me-tabs 组件,tabs支持水平滑动; 优化mescroll-more和mescroll-swiper的案例, 顶部tab支持水平滑动

---
#### 1.2.6版本 (2020/06/16)
1. mescroll-uni 和 mescroll-body 的 scrollTo 正式支持 scroll-into-view (传入的 y 为view的id即可生效)
2. topbar 顶部是否预留状态栏的高度, 默认false; 这个版本还可支持设置状态栏背景: 如 '#ffff00', 'url(xxx)', 'linear-gradient(xx)'
3. down.bgColor 和 up.bgColor 加载区域的背景,不仅支持色值, 而且还是支持背景图和渐变: 如 'url(xxx)', 'linear-gradient(xx)'
4. 通过css方式适配iPhoneX, 比之前通过style方式具有更好的兼容性, 也同时消除了edge浏览器重复设置相同属性的警告
5. 移除非必须的标签选择器,避免微信小程序提示组件内不可使用标签选择器的警告
6. 修复当配置up的use为false时,默认的下拉刷新有时候无法自动隐藏的问题
7. 修复当配置down的native为true时,auto失效的问题
8. 修复空布局在某些情况下图片和文本错位的问题

---
#### 1.2.5版本 (2020/03/15)
1. mescroll-body 的 props 支持 safearea 的配置 (需要适配iPhoneX时,配置为 true 即可, 默认 false)
2. mescroll-uni 的 scrollTo 支持 scroll-into-view (当传入的 y 为view的id时, 即可生效)
3. 新增 下拉加载聊天记录的案例 list-msg.vue, 类似微信QQ的聊天记录

---
#### 1.2.4版本 (2020/03/11)
1. down和up分别新增 bgColor 的配置: 下拉区域背景颜色,默认"transparent"
2. down和up分别新增 textColor 的配置: 下拉文本的颜色,默认"gray" (当bgColor配置了颜色,而textColor未配置时,则自动默认为白色)
3. 调整mescroll-more-item.js, 使mescroll-more的案例支持初始化tabIndex大于0的tab页
4. mescroll-body支持isBounce的配置, 解决H5下拉刷新失效的问题
5. 解决mescroll-body在Android真机小程序下拉卡顿的问题 (mescroll-uni无此问题)

---
#### 1.2.3版本 (2020/02/18)
新增3个mescroll的mixins, 极大简化了mescroll-comp, mescroll-more, mescroll-swiper的案例


#### 1.2.2版本 (2020/02/16)
1. 调整mescroll-more和mescroll-swiper的案例,确保各小程序平台可正确获取到mescroll对象  
2. 修复字节跳动小程序初始化时的异常警告: <a href="http://www.mescroll.com/qa.html?v=20200216#q26">详情</a>


#### 1.2.1版本 (2020/02/08)
1. 新增 &lt;mescroll-body&gt; 组件, 用来填补 &lt;mescroll-uni&gt; 的不足.
2. mescroll-body基于原生页的滚动,支持写入原生组件和fixed元素,不必固定高度,不必配置pages.json,简单性能好.
3. mescroll-body可配置down的native:true, 可直接代理系统自带的下拉组件, 参考 mescroll-native 示例
4. 新增mescroll-mixins.js,简化代码,兼容更多小程序平台
5. 修复字节跳动小程序和支付宝小程序的部分异常警告

#### 1.2.0版本 (2020/01/06)
1. mescroll-uni.vue的props新增height. // 简单快捷设置mescroll的高度, 此项有值,则不使用fixed. 
	使用场景: 当在弹窗或浮层中使用fixed固定mescroll高度比较麻烦时, 配置此项就很方便了
	支持20, "20rpx", "20px", "20%"格式的值, 其中纯数字则默认单位rpx, 百分比则相对于windowHeight
2. mescroll-uni.vue的props新增safearea. // bottom的偏移量是否加上底部安全区的距离, 默认false (需要适配iPhoneX时使用,此项值对回到顶部按钮生效)
3. mescroll-uni.vue的props中,top和bottom不仅仅支持数字, 还支持"20rpx", "20px", "20%"格式的值
4. 补充锁定上拉加载mescroll.lockUpScroll的方法
5. down.fps默认值提高至80
6. 独立出空布局的组件&lt;mescroll-empty&gt;, 以便在不使用mescroll的界面也能统一管理空布局
```
<template>
		<view>
			// 基本用法
			<mescroll-empty v-if="list.length==0"></mescroll-empty>
			// 所有配置项 (option同up.empty的配置一致)
			<mescroll-empty v-if="isShowEmpty" :option="optEmpty" @emptyclick="emptyClick"></mescroll-empty>
		</view>
	</template>
	
	<script>
		import MescrollEmpty from '@/components/mescroll-uni/components/mescroll-empty.vue';
		export default {
			components: {
				MescrollEmpty
			},
			...
		}
```
7. 为了更快速自定义回到顶部按钮, up.toTop新增以下配置项:
```
	toTop: {
		zIndex: 9990, // fixed定位z-index值
		right: 20, // 到右边的距离, 默认20 (支持"20rpx", "20px", "20%"格式的值, 纯数字则默认单位rpx)
		bottom: 120, // 到底部的距离, 默认120 (支持"20rpx", "20px", "20%"格式的值, 纯数字则默认单位rpx)
		safearea: false, // bottom的偏移量是否加上底部安全区的距离, 默认false. 需要适配iPhoneX时使用 (具体的界面如果不配置此项,则取mescroll-uni.vue的safearea值)
		width: 72, // 回到顶部图标的宽度, 默认72 (支持"20rpx", "20px", "20%"格式的值, 纯数字则默认单位rpx)
		radius: "50%", // 圆角, 默认"50%" (支持"20rpx", "20px", "20%"格式的值, 纯数字则默认单位rpx)
		left: null, // 到左边的距离, 默认null. 此项有值时,right不生效. (支持"20rpx", "20px", "20%"格式的值, 纯数字则默认单位rpx)
		duration: 300, // 回到顶部的动画时长,默认300ms (当值为0或300则使用系统自带回到顶部,更流畅; 其他值则通过step模拟,部分机型可能不够流畅,所以非特殊情况不建议修改此项)
		src: null, // (已有配置)
		offset: 1000 // (已有配置)
	}
```


---
#### 1.1.9版本 (2019/12/16)
1. 解决左右滑动屏幕,某些情况下会触发上拉回调的bug
2. mescroll-uni.vue的props新增topbar: top的偏移量是否加上状态栏高度 (当fixed为false时不生效; 使用场景:取消原生导航栏时,配置此项可自动加上状态栏高度的偏移量)

---
#### 1.1.8版本 (2019/11/01)
1. 解决Android小程序快速上拉可能会导致不断翻页直到没有数据为止的bug
2. 过滤某些情况下touch的警告输出

---
#### 1.1.7版本 (2019/10/15)
1. 重点解决下拉刷新卡顿,特别是Android小程序卡顿的问题
2. 补充之前版本遗漏的mescroll.lockUpScroll方法
3. 支持数据不满屏时,仍可触发翻页的回调

---
#### 1.1.5版本 (2019/07/25)
1. up新增isBounce的配置, 默认值为false. 目的是解决H5在ios下拉出现灰色背景和android端无法正常下拉的问题. 详见: <a href="http://www.mescroll.com/qa.html?v=190725#q25">http://www.mescroll.com/qa.html?v=190725#q25</a>
2. 修复setClientHeight某些情况下会提示undefined的问题
3. 修复在mescroll-uni-option.js配置page会导致分页异常的问题

---
#### 1.1.2版本 (2019/07/19)
一. 修复和优化的内容:
1. 修复列表不满屏时,无法上拉的问题
2. 修复列表滚动到底部,有时无法上拉的问题
3. 修复快速滚动到顶部时,滚动条的位置有时不为0的问题
4. 修复配置page.num不生效的问题
5. 修复小程序android端下拉卡顿的问题 (可配置down的supply,复杂的列表可适当调大值)
6. 修复H5多mescroll的情况下回到顶部按钮错位的问题
7. 优化和简化逻辑,去除冗余代码

二. 完善获取节点信息的方式:
1. 获取mescroll的唯一元素id: mescroll.viewId (可通过uni.createSelectorQuery进一步获取更多信息)
2. 获取滚动内容的高度: mescroll.getScrollHeight()
3. 获取mescroll的高度: mescroll.getClientHeight()
4. 获取滚动条位置: mescroll.getScrollTop()
5. 获取到底部的距离: mescroll.getScrollBottom()
6. 获取滚动的方向: mescroll.isScrollUp // true向上滑; false向下滑
7. 更多信息详见mescroll-options的示例

---
#### 1.1.1版本 (2019/07/16)
1. 修复滚动到顶部,有时无法下拉的问题
2. 修复禁止上拉时,列表底部有空白区域的问题

---
#### 1.1.0版本 (重要版本) (2019/07/01)
一. 简化使用:
1. **无需**在page.json中配置onReachBottomDistance<br/>
2. **无需**在页面中注册onReachBottom 和 onPageScroll<br/>
3. 初始化时@init**不再**是必须配置项<br/>
4. 极大的**简化** list-mescroll-more.vue 的案例<br/>
5. 全面**支持swiper**,详见 mescroll-swiper.vue 的案例<br/>
6. 所有基础案例都有所简化, **建议**重新下载参考. (以前版本向下兼容)<br/> 
7. 所有中高级案例自定义的部分,改动比较大, **必须**重新下载参考. (不兼容以前版本)

二. 优化性能:
1. 支持fixed定位,可实现局部**区域滚动**<br/>
2. 支持swiper,scrollview**嵌套**使用<br/>
3. 优化下拉逻辑,修复下拉刷新卡顿和抖动的问题<br/>
4. 优化默认样式,避免某些情况出现双滚动条的问题<br/>
5. up废弃errDistance配置, 内部已优化处理相关问题

三. 新增配置:
1. down和up新增fps节流配置.(默认40fps, 值越大每秒刷新频率越高)<br/>
2. up新增offset配置: 距底部多远时,触发upCallback (默认80, 代替page.json的onReachBottomDistance)<br/>
3. up新增onScroll配置: 是否监听滚动事件,默认false<br/>
4. < mescroll-uni 新增 @scroll="scroll" 获取滚动条的位置和滚动方向, 需配置up的onScroll为true, 详见 mescroll-options.vue 的示例<br/>
5. < mescroll-uni 新增 :fixed="true/false" 是否支持fixed定位, 默认 true. 
<br/> 当:fixed="true", 此时 :top 和 :bottom 为 fixed 的 top 和 bottom
<br/> 当:fixed="false", 此时 :top 和 :bottom 为 padding-top 和 padding-bottom


---
#### 1.0.3版本 (2019/06/13)
1. 默认设置page高度100%,使列表不满屏的时候,仍可下拉刷新<br/>
2. 加入-webkit-overflow-scrolling: touch, 编译到H5和APP,使iOS列表滚动更流畅<br/>
3. mescroll-empty加入box-sizing: border-box, 修复图标和文本不居中的问题<br/>
4. 上拉配置新增errDistance,默认110 // mescroll.endErr()的时候需往上滑动一段距离,使其能再次触发上拉加载 (已在1.1.0版本废弃)<br/>
5. mescroll.endErr(errDistance) 新增的参数 errDistance; 可单独配置异常往上滑动的距离 (已在1.1.0版本废弃)<br/>
6. 修改了list-mescroll-more的160行为mescroll.endErr(0);(已在1.1.0版本优化)<br/>
7. 新增mescroll.scrollTo(y,t) 滚动到指定的位置; 本质调用的是uni.pageScrollTo

---
#### 1.0.2版本 (2019/05/28)  
1. 组件根元素加入mescroll-uni的样式,empty新增fixed等配置项; <br/>
2. 修复list-mescroll-more案例切换tabs,某些情况的page.num会错乱的问题