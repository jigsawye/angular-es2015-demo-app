import angular from 'angular';
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
  .module('layout', [])
  .config(route);

export default layoutModule;
