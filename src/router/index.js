import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../views/Index.vue'
import Topic from '../views/Topic.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'cnodeHead',
    component: Index
  },
  {
    path:'/topic/:id',
    name: 'topic',
    component: Topic
  },
  {
    path: '/topic',
    redirect: '/'
  },
  {
    path: '/user',
    redirect: '/'
  }
]

const router = new VueRouter({
  routes
})

export default router
