import Vue from 'vue'
import VueRouter from 'vue-router'
import ArticleList from "../components/ArticleList";
import Article from "../components/Article";
import UserInfo from "../components/UserInfo";
import SideBar from "../components/SideBar"
Vue.use(VueRouter)


const routes = [
  {
    path: '/',
    name: 'index',
    components: {
      main:ArticleList
    }
  },
  {
    path:'/topic/:id&author=:name',
    name: 'article',
    components: {
      main: Article,
      sidebar: SideBar
    }
  },
  {
    path: '/user:name',
    name:'userInfo',
    components: {
      main: UserInfo,
      sidebar: SideBar
    }
  }
]

const router = new VueRouter({
  routes
})

export default router
