/*
 * @Author: caoyankui 
 * @Date: 2018-04-03 17:10:15 
 * @Last Modified by: caoyankui
 * @Last Modified time: 2018-04-03 17:13:02
 */

import hform from './form.vue';

/*
import  { hform } from 'aview';
使用Vue.use(hform)
*/
hform.install = function (Vue) {
    Vue.component(hform.name, hform);
};
export default hform;