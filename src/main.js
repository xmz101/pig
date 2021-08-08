import Vue from 'vue'
import router from './router'
// 发送请求之前都需要axios
import axios from 'axios'
// 挂载到vue实例，方便调用this
import VueAxios from 'vue-axios'
// 插件写在前面，组件写在后面
import App from './App.vue'
import env from './env'

// 根据前端的跨域方式做调整
axios.defaults.baseURL = '/api'; // 代理跨域 前后端域名一样  /a/b : /api/a/b => /a/b 前后端域名不一样    http://www.com.baidu 
// 根据环境变量获取不同的请求地址
axios.defaults.baseURL = env.baseURL
axios.defaults.timeout = 8000; // 超时设置

//  接口错误拦截
axios.interceptors.response.use(function(response) {
    // Do something with response data
    // response.data 才是接口返回的值，axios 内部做的封装
    let res = response.data;
    if (res.status == 0) {
        // 成功，我们需要的数据
        return res.data;
    } else if (res.status == 10) {
        // 如果登录报错，状态码的设置应该根据相应业务设置
        // 未登录就应该跳转到登录页面， # 哈希路由 
        // 这里的this不行？没有指向vue
        window.location.href = '/#/login';
    } else {
        // 其他错误?
        alert(res.msg);
    }
});

// 使用
Vue.use(VueAxios, axios);
Vue.config.productionTip = false


new Vue({
    router,
    render: h => h(App),
}).$mount('#app')