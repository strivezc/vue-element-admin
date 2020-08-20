const path = require('path');
const files = require.context('../api', true, /.js/);
const modules = {};
files.keys().forEach(item => {
  const name = path.basename(item, '.js');
  modules[name] = files(item).default || files(item);
});
export default modules;
