import angular from 'angular';
import uiRouter from 'angular-ui-router';
import HomeController from './home.controller';
import HomeTemplate from './home.html';

const homeModule = angular
  .module('home', [
    uiRouter
  ])
  .controller('HomeController', HomeController)
  .config(($stateProvider) => {
    'ngInject';

    $stateProvider
      .state('home', {
        url: '/',
        parent: 'root',
        template: HomeTemplate,
        controller: 'HomeController',
        controllerAs: 'home'
      });
  });

export default homeModule;
