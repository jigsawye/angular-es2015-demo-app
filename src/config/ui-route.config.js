function config($urlMatcherFactoryProvider, $locationProvider) {
  'ngInject';

  $urlMatcherFactoryProvider.strictMode(false);
  $locationProvider.html5Mode(true);
}

export default config;
