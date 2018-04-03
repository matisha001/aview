/*
 * @Author: caoyankui 
 * @Date: 2018-04-03 17:10:15 
 * @Last Modified by: caoyankui
 * @Last Modified time: 2018-04-03 17:13:02
 */

import aform from './form.vue';

/*
import  { aform } from 'aview';
使用Vue.use(aform)
*/
aform.install = function (Vue) {
    Vue.component(aform.name, aform);
};
export default aform;