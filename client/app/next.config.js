/**
 * next.config.js
 *
 * next.js configuration goes here
 *
 */

const router = require('../routes'); // eslint-disable-line module-resolver/use-alias

/**
 * Module variables.
 * @public
 */
const initExport = {
  distDir: '../build',
  // webpack: (config, { dev, isServer }) => {
  webpack: (config, { dev }) => {
    // const prod = !dev;

    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });

    if (dev) {
      config.module.rules.push({
        test: /\.(jsx?|gql|graphql)$/,
        loader: 'eslint-loader',
        exclude: ['/node_modules/', '/app/.next/'],
        enforce: 'pre',
      });
    }

    return config;
  },
};

if (process.env.STATIC_EXPORT) {
  initExport.exportPathMap = function exportPathMap() {
    const routes = {};
    routes['/'] = {
      page: '/',
    };
    router.routes.forEach(route => {
      if (!route.pattern.includes(':')) {
        routes[route.pattern] = {
          page: route.page,
        };
      }
    });

    return routes;
  };
}

/**
 * Module exports.
 * @public
 */
module.exports = initExport;
