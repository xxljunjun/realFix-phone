uniapp搭建的uniapp自带组件库和扩展插件库
集成了vuex
封装了uni-request请求和跨域问题
使用了mescroll上拉加载和下拉刷新插件
viewer插件图片缩放功能
支持sass编译
做了i18n国际化处理
drag拖拽功能
集成了Uview组件库

# 配置全局网络差的组件
+ manifest.json配置文件
```
"async": {
	//页面js异步加载配置
	"loading": "AsyncLoading", //页面js加载时使用的组件（需注册为全局组件）
	"error": "Network",
	"timeout": 4000,
	"delay": 2000 //展示 loading 加载组件的延时时间（页面 js 若在 delay 时间内加载完成，则不会显示 loading 组件）
},
```

# web-view访问外部链接
```
<web-view></web-view>
```

# 图片和小icon因网络差无法加载时候显示的图片
+ 小icon可以打包成base64
vue.confige配置（在无网络的状态下也能看到小icon）把小icon打包成base64
```
config.module
        .rule('images')
            .use('url-loader')
            .loader('url-loader')
            .tap(options => Object.assign(options, { limit: 20000 }))
```
+ 大图片网络差的时候要怎么显示图片呢？
