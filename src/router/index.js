import Vue from 'vue'
import Router from 'vue-router'

const Home = () => import(/*webpackChunkName: 'index_part'*/'@/views/index/home')
const Login = () => import(/*webpackChunkName: 'index_part'*/'@/views/index/login')

Vue.use(Router)

export const createRouter = () => {
	return new Router({
		linkActiveClass: 'tab-active',
		mode: 'history',
		routes: [
		    {
		    	path: '/home',
		    	name: 'home',
		    	component: Home
		    },{
		        path: '/login',
		        name: 'login',
		        component: Login
		    },{
		    	path: '*',
		    	redirect: {
		    		name: 'home',
		    		component: Home
		    	}
		    }
		  ]
	})
}
