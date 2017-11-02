import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/index/index'
import Three from '@/components/three/three'
import Two from '@/components/two/two'
import Firstone from '@/components/firstone/firstone'
import Secondtwo from '@/components/secondtwo/secondtwo'
import Thirdlythree from '@/components/thirdlythree/thirdlythree'
import Fifthfive from '@/components/fifthfive/fifthfive'
import Fourthlyfour from '@/components/fourthlyfour/fourthlyfour'
import Threethirdly from '@/components/threethirdly/threethirdly'
import Fourfourthly from '@/components/fourfourthly/fourfourthly'
import First from '@/components/first/first'
import Second from '@/components/second/second'
import Thirdly from '@/components/thirdly/thirdly'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/index',
      component: Index
    },
    {
      path: '/three',
      component: Three
    },
    {
      path: '/firstone',
      component: Firstone
    },
    {
      path: '/two',
      component: Two
    },
    {
      path: '/secondtwo',
      component: Secondtwo
    },
    {
      path: '/thirdlythree',
      component: Thirdlythree
    },
    {
      path: '/fifthfive',
      component: Fifthfive
    },
    {
      path: '/fourthlyfour',
      component: Fourthlyfour
    },
    {
      path: '/threethirdly',
      component: Threethirdly
    },
    {
      path: '/fourfourthly',
      component: Fourfourthly
    },
    {
      path: '/first',
      component: First
    },
    {
      path: '/second',
      component: Second
    },
    {
      path: '/thirdly',
      component: Thirdly
    },
    {
      path: '/*',
      redirect: '/index'
    }
  ]
})
