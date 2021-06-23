import Vue from 'vue'
import App from './App'
import store from './store'
import Viewer from 'v-viewer'
// import 'viewerjs/dist/viewer.css'
import i18n from './src/i18n';
// import router from './src/router/index.js'


// import http from '@/utils/api'
// Vue.prototype.$http = http
import uView from "uview-ui";
Vue.use(uView);

Vue.config.productionTip = false
Vue.use(Viewer);
Viewer.setDefaults({
	Options: { "inline": false, "button": true, "navbar": false, "title": false, "toolbar": false, "tooltip": false, "movable": false, "zoomable": false, "rotatable": false, "scalable": false, "transition": false, "fullscreen": false, "keyboard": false, "url": "data-source" }
});


import MescrollUni from "@/pages/mescroll-uni/mescroll-uni.vue"
Vue.component('mescroll-uni', MescrollUni)

//全局注册loading组件
import Loading from "@/pages/realFix/component/common/loading.vue"
Vue.component('myLoading', Loading)

App.mpType = 'app'

const app = new Vue({
	i18n,
	store,
	// router,
	...App
})
app.$mount()
