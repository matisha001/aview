import atable from './component/table';
import aform from './component/form';
import { Button, Table } from 'iview';
// import abutton from './component/button';
// import iviews from './iviews';

console.log(atable);
const components = {
  atable,
  aform,
  // abutton,
  // ...iview
}
console.log(components);
const aview = {
  ...components
}

const install = function (Vue, opts = {}) {
  if (install.installed) return;
  Object.keys(aview).forEach(key => {
    Vue.component(key, aview[key]);
  });
};

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}
const API = {
  install,
  ...components
};
module.exports.default = module.exports = API;