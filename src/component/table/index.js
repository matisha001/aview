/*
 * @Author: caoyankui 
 * @Date: 2018-04-03 17:12:14 
 * @Last Modified by: caoyankui
 * @Last Modified time: 2018-04-03 17:12:40
 */

import atable from './table.vue';

/*
import  { atable } from 'aview';
使用Vue.use(atable)
*/
atable.install = function (Vue) {
    Vue.component(atable.name, atable);
};
export default atable;