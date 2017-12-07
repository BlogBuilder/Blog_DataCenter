//============导入JS文件=============
import Vue from 'vue'
import VueResource from 'vue-resource'


import 'mod/pace'
import 'mod/jquery'
import 'mod/bootstrap'
import 'mod/modernizr'
import 'jquery-ui'
import 'jquery.easing'
import 'jquery-unveil'
import 'jquery-bez'
import 'mod/iosList'
import 'imagesloaded/imagesloaded.pkgd'
import 'mod/jqueryActual'
import 'jquery.scrollbar'
import 'classie'
import 'mod/validate'
import 'mod/validateZh'
import 'pages/pageJs'
import 'pages/scriptsJs'
import 'mod/utils'


//===========导入Vue组件==============
import App from './app.vue'


//==========导入CSS文件===============
import 'style/pace'
import 'style/bootstrap'
import 'font-awesome/css/font-awesome.css'
import 'jquery.scrollbar/jquery.scrollbar.css'
import 'select2/dist/css/select2.css'
import 'switchery/switchery.css'
import 'pages/pages-icons'
import 'pages/light'
import 'font-awesome/fonts/fontawesome-webfont.woff'


Vue.config.debug = true;//开启错误提示
Vue.use(VueResource);
Vue.http.options.emulateJSON = true;

new Vue({
    render: h => h(App),
}).$mount('#app');