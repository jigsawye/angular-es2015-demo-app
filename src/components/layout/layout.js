import angular from 'angular';
import uiRouter from 'angular-ui-router';
import LayoutTemplate from './layout.html';
import HeaderTemplate from '../header/header.html';

/** @ngInject */
const route = $stateProvider => {
  $stateProvider.state('root', {
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
};

const layoutModule = angular
  .module('layout', [
    uiRouter,
  ])
  .config(route);

export default layoutModule;
