import Vue from 'vue'
import './assets/css/base.css'
import {createRouter} from './router'
import App from './App.vue'

import upperFirst from 'lodash/upperFirst'
import camelCase from 'lodash/camelCase'

const requireComponent=require.context(
	'./components/common',
	false,
	/\w+\.(vue|js)$/ 
)
requireComponent.keys().forEach(fileName => {
	const componentConfig=requireComponent(fileName)
	const componentName = upperFirst( 
		camelCase( 
			fileName.replace(/^\.\/\w+\/(.*)\.\w+$/, '$1')
	    )
    )
	Vue.component( // 全局注册组件
		componentName,  
		componentConfig.default || componentConfig
	)
})

// 实例 每次请求都会创建新的实例

export default (context) => {

  const router = createRouter()

  const app = new Vue({
    router,
    components: { App },
    template: '<App/>'
  })
  return { router, app }

}
