import Vue from 'vue'
import Router from 'vue-router'
import App from './App.vue'
import IndexView from './components/IndexView.vue'
import ZdmView from './components/ZdmView.vue'
import CategoryView from './components/CategoryView.vue'
import ArticleView from './components/ArticleView.vue'

Vue.use(Router)
var router = new Router()

router.map({
    '/index': {
        component: IndexView
    },
    '/zdm': {
        component: ZdmView
    },
    '/category': {
        component: CategoryView
    },
    '/article/:id':{
        component: ArticleView
    }
})

router.beforeEach(function () {
  window.scrollTo(0, 0)
})

router.redirect({
  '*': '/index'
})

router.start(App, '#app')
