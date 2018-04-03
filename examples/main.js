/*
 * @Author: caoyankui 
 * @Date: 2018-04-03 17:14:12 
 * @Last Modified by: caoyankui
 * @Last Modified time: 2018-04-03 17:20:50
 */
/*
  引用方式
    1、全局引用  Vue.use(aview);
    按需引入
    babel-plugin-component
    2、import { atable, aform } from 'aview';
      Vue.component('atable', atable);
    3、import { atable, aform } from 'aview';
      Vue.use(atable)
 */



import Vue from 'vue'

import App from './App'
/*
import aview from '../src/main';
Vue.use(aview);
*/

import { atable, aform } from '../src/main';
/*
  Vue.use(atable);
  Vue.use(aform);
*/
Vue.component('atable', atable);
Vue.component('aform', aform);

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})
