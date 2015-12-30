import angular from 'angular';
import uiRouter from 'angular-ui-router';
import LayoutTemplate from './layout.html';
import HeaderTemplate from '../header/header.html';

const layoutModule = angular
  .module('layout', [
    uiRouter
  ])
  .config($stateProvider => {
    'ngInject';

    $stateProvider
      .state('root', {
        abstract: true,
        url: '',
        views: {
          '': {
            template: LayoutTemplate,
          },
          'header@root': {
            template: HeaderTemplate,
            controller: 'HeaderController',
            controllerAs: 'header',
          }
        }
      });
  });

export default layoutModule;
