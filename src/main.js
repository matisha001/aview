import htable from './component/table';
import hform from './component/form';
const components = {
  htable,
  hform
}

const hview = {
  ...components
}

const install = function (Vue, opts = {}) {
  if (install.installed) return;
  Object.keys(hview).forEach(key => {
    Vue.component(key, hview[key]);
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