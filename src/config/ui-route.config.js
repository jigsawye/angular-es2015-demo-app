/** @ngInject */
function config($urlMatcherFactoryProvider, $locationProvider) {
  $urlMatcherFactoryProvider.strictMode(false);
  $locationProvider.html5Mode(true);
}

export default config;
