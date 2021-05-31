import Vue from 'vue'
import App from './App'
import store from './store'
import Viewer from 'v-viewer'
// import 'viewerjs/dist/viewer.css'
import i18n from './src/i18n';
// import router from './src/router/index.js'


Vue.config.productionTip = false
Vue.use(Viewer);
Viewer.setDefaults({
	Options: { "inline": false, "button": true, "navbar": false, "title": false, "toolbar": false, "tooltip": false, "movable": false, "zoomable": false, "rotatable": false, "scalable": false, "transition": false, "fullscreen": false, "keyboard": false, "url": "data-source" }
});


import MescrollUni from "@/pages/mescroll-uni/mescroll-uni.vue"
Vue.component('mescroll-uni', MescrollUni)

App.mpType = 'app'

const app = new Vue({
	i18n,
	store,
	// router,
	...App
})
app.$mount()
