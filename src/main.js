import Vue from 'vue'
import Router from 'vue-router'
import VueResource from 'vue-resource'

// import { domain, fromNow } from './filters'
import App from './App.vue'
import IndexView from './components/IndexView.vue'
import ZdmView from './components/ZdmView.vue'
import CategoryView from './components/CategoryView.vue'

// install router
Vue.use(Router)

Vue.use(VueResource)

// register filters globally
// Vue.filter('fromNow', fromNow)
// Vue.filter('domain', domain)

// routing
var router = new Router()

router.map({
  // '/news/:page': {
  //   component: NewsView
  // },
  // '/user/': {
  //   component: UserView
  // },
  // '/item/:id': {
  //   component: ZdmView
  // },
    '/index/:page': {
        component: IndexView
    },
    '/zdm': {
        component: ZdmView
    },
    '/category': {
        component: CategoryView
    }
})

router.beforeEach(function () {
  window.scrollTo(0, 0)
})

router.redirect({
  '*': '/index/1'
})

router.start(App, '#app')
