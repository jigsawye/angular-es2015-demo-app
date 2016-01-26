/** @ngInject */
function config($urlMatcherFactoryProvider, $locationProvider, $urlRouterProvider) {
  $urlMatcherFactoryProvider.strictMode(false);
  $locationProvider.html5Mode(true);
  $urlRouterProvider.otherwise('/404');
}

export default config;
