import Vue from 'vue'
import Router from 'vue-router'

import PagesView from '../views/pagesView'
import HomeView from '../views/HomeView'
import ParentChild1 from '../views/Parent-Child1'
import ParentChild2 from '../views/Parent-Child2' 
import ParentChild3 from '../views/Parent-Child3' 
import uncorrelatedComponent from '../views/uncorrelatedComponent' 

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/pages'
    },
    {
      path: '/pages',
      component:PagesView,
      children: [
        {
	        path: '',
	        redirect: '/pages/home'
        },
        {
	        path: 'home',
	        name: 'HomeView',
	        component: HomeView
        },
      ]
    },
    {
    	path:'/parent_child1',
    	name:'ParentChild1',
    	component:ParentChild1
    },
    {
    	path:'/parent_child2',
    	name:'ParentChild2',
    	component:ParentChild2
    },
    {
    	path:'/parent_child3',
    	name:'ParentChild3',
    	component: ParentChild3
    },
    {
    	path:'/uncorrelatedComponent',
    	name:'uncorrelatedComponent',
    	component: uncorrelatedComponent
    }
    
  ]
})


