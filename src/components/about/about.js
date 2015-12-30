import angular from 'angular';
import uiRouter from 'angular-ui-router';
import AboutController from './about.controller';
import AboutTemplate from './about.html';

const aboutModule = angular
  .module('about', [
    uiRouter
  ])
  .controller('AboutController', AboutController)
  .config(($stateProvider, $urlRouterProvider) => {
    'ngInject';

    $stateProvider
      .state('about', {
        url: '/about',
        parent: 'root',
        template: AboutTemplate,
        controller: 'AboutController',
        controllerAs: 'about'
      });

    $urlRouterProvider.when('/about/', '/about');
  });

export default aboutModule;
