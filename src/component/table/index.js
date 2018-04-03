/*
 * @Author: caoyankui 
 * @Date: 2018-04-03 17:12:14 
 * @Last Modified by: caoyankui
 * @Last Modified time: 2018-04-03 17:12:40
 */

import htable from './table.vue';

/*
import  { htable } from 'aview';
使用Vue.use(htable)
*/
htable.install = function (Vue) {
    Vue.component(htable.name, htable);
};
export default htable;