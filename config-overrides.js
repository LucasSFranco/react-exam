const { alias } = require('react-app-rewire-alias');

module.exports = function override(config) {
  alias({ '@': 'src', '#': 'tests' })(config);

  return config;
};
