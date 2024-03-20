const CracoLessPlugin = require('craco-less');
module.exports = {
  plugin: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            javascriptEnabled: true
          }
        }
      }
    }
  ]
};
