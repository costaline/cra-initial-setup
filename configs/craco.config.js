const cracoAlias = require('craco-alias');
const sassResourcesLoader = require('craco-sass-resources-loader');
const jsConfig = require('./jsconfig.json');

module.exports = {
  plugins: [
    /* aliases from jsconfig */
    {
      plugin: cracoAlias,
      options: {
        source: 'jsconfig',
        baseUrl: jsConfig.compilerOptions.baseUrl,
      },
    },

    /* scss sourcemaps in development mode */
    {
      plugin: {
        overrideWebpackConfig: ({
          webpackConfig,
          cracoConfig,
          pluginOptions,
          context: { env, paths },
        }) => {
          function traverse(obj, callback) {
            if (Array.isArray(obj)) {
              obj.forEach((item) => traverse(item, callback));
            } else if (typeof obj === 'object' && obj !== null) {
              Object.keys(obj).forEach((key) => {
                if (obj.hasOwnProperty(key)) {
                  callback(obj, key);
                  traverse(obj[key], callback);
                }
              });
            }
          }

          traverse(webpackConfig, (node, key) => {
            if (key === 'loader') {
              if (
                node[key].indexOf('sass-loader') !== -1 ||
                node[key].indexOf('postcss-loader') !== -1 ||
                node[key].indexOf('css-loader') !== -1
              ) {
                if (node.options) {
                  node.options.sourceMap = env === 'development' && process.env.GENERATE_SOURCEMAP === 'true';
                }
              }
            }
          });

          return webpackConfig;
        },
      },
    },

    /* scss prepend data */
    {
      plugin: sassResourcesLoader,
      options: {
        resources: [
          './src/assets/styles/_at-rules.scss',
          './src/assets/styles/_variables.scss',
        ],
      },
    },
  ],
};
