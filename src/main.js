import atable from './component/table';
import aform from './component/form';
import abutton from './component/button';
// import iview from './iview';
const components = {
  atable,
  aform,
  abutton
}

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