import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios';
import moment from 'moment'



Vue.config.productionTip = false
Vue.prototype.$http = axios

Vue.prototype.moment = moment;
Vue.prototype.changeTime = time => moment(time).startOf('minute').fromNow().replace(/hours?/, '小时').replace('ago', '前').replace(/days?/, '天').replace(/minutes?/, '分钟').replace(/\ban?/, '1').replace(/months?/, '个月').replace(/\byears?/, '年').replace(/\s/g, '').replace('fewseconds','分钟');


Vue.filter('tabFormatter',function (post) {
  if(post.good === true){
    return '精华'
  }else if(post.top === true){
    return '置顶'
  }else if(post.tab === 'ask'){
    return '问答'
  }else if(post.tab === 'share'){
    return '分享'
  }else{
    return '招聘'
  }
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

