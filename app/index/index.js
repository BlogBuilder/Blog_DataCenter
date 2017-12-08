//============导入JS文件=============
import Vue from 'vue'
// import VueRouter from 'mod/vue-router'
import VueResource from 'vue-resource'


import store from './store/store';
import router from './router/router'

import 'mod/pace'
import 'mod/jquery'
import 'mod/bootstrap'
import 'mod/modernizr'
// import 'modernizr'
import 'jquery-ui'
import 'jquery.easing'
import 'jquery-unveil'
import 'jquery-bez'
import 'mod/iosList'
import 'imagesloaded/imagesloaded.pkgd'
import 'mod/jqueryActual'
import 'mod/pagination'
import 'jquery.scrollbar'
import 'bootstrap-select'
import 'select2'
import 'mod/validate'
import 'mod/validateZh'
import 'mod/sh_js'
import 'mod/snippet'
import 'classie'
import wangEditor from 'wangeditor'
import 'pages/pageJs'
import 'mod/utils'


//===========导入Vue组件==============
import App from './app.vue'
import sidebar from './components/sidebar.vue'
import container from './components/container.vue'
import quickView from './components/quickview.vue'
import overlay from './components/overlay.vue'

//==========导入CSS文件===============
import './style/typo.css'
import 'style/pace'
import 'style/bootstrap'
import 'font-awesome/css/font-awesome.css'
import 'jquery.scrollbar/jquery.scrollbar.css'
import 'select2/dist/css/select2.css'
import 'bootstrap-select/dist/css/bootstrap-select.css'
import 'switchery/switchery.css'
import 'style/pagination'
import 'pages/pages-icons'
import './style/icon-fonts.css'
import 'select2/dist/css/select2.css'
import 'style/snippet'
import 'pages/light'


import 'font-awesome/fonts/fontawesome-webfont.woff'
// import './style/index.css'


Vue.config.debug = true;//开启错误提示
Vue.use(VueResource);
Vue.http.options.emulateJSON = true;

window.wangEditor = wangEditor;

//注册全局组件
Vue.component('sidebar', sidebar);
Vue.component('container', container);
Vue.component('quickview', quickView);
Vue.component('overlay', overlay);

new Vue({
    render: h => h(App),
    store,
    router
}).$mount('#app');


$(document).on('click', '.sidebar-menu a', function (e) {

    if ($(this).parent().children('.sub-menu') === false) {
        return;
    }
    let el = $(this);
    let parent = $(this).parent().parent();
    let li = $(this).parent();
    let sub = $(this).parent().children('.sub-menu');

    if (li.hasClass("open active")) {
        el.children('.arrow').removeClass("open active");
        sub.slideUp(200, function () {
            li.removeClass("open active");
        });

    } else {
        parent.children('li.open').children('.sub-menu').slideUp(200);
        parent.children('li.open').children('a').children('.arrow').removeClass('open active');
        parent.children('li.open').removeClass("open active");
        el.children('.arrow').addClass("open active");
        sub.slideDown(200, function () {
            li.addClass("open active");

        });
    }
    //e.preventDefault();
});