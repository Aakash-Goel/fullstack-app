const routes = require('next-routes')();

//
// Because of awesome Next.js, You don't need to add routes for all pages.
// Every file on Pages folder basically has route as they named.
// (index.js => /, about.js => /about, ...etc.)
//
// If you want to change url (for SEO or put different path), please add your route below.
//
// Please add your route between of comments
//
// ------------ ROUTES ---------------
// @StartRoutes
// below is an example, remove/update according to your needs
routes.add({
  name: 'audit-dashboard',
  pattern: '/account/dashboard',
  page: 'dashboard',
});
// @EndRoutes
// ------------ ROUTES ---------------
//
//

/**
 * Module exports.
 * @public
 */
module.exports = routes;
