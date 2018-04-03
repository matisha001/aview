/*
 * @Author: caoyankui 
 * @Date: 2018-04-03 17:14:12 
 * @Last Modified by: caoyankui
 * @Last Modified time: 2018-04-03 17:20:50
 */
/*
  引用方式
    1、全局引用  Vue.use(hview);
    按需引入
    babel-plugin-component
    2、import { htable, hform } from 'hview';
      Vue.component('htable', htable);
    3、import { htable, hform } from 'hview';
      Vue.use(htable)
 */



import Vue from 'vue'

import App from './App'
/*
import hview from '../src/main';
Vue.use(hview);
*/

import { htable, hform } from '../src/main';
/*
  Vue.use(htable);
  Vue.use(hform);
*/
Vue.component('htable', htable);
Vue.component('hform', hform);

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})
