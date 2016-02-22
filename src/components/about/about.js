import angular from 'angular';
import uiRouter from 'angular-ui-router';
import AboutTemplate from './about.html';

import './about.css';

/** @ngInject */
const route = $stateProvider => {
  $stateProvider.state('about', {
    url: '/about',
    parent: 'root',
    template: AboutTemplate,
    controllerAs: 'about',
  });
};

export default angular
  .module('about', [
    uiRouter,
  ])
  .config(route);
