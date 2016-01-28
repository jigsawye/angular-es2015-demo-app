import angular from 'angular';
import uiRouter from 'angular-ui-router';
import AboutController from './about.controller';
import AboutTemplate from './about.html';

import './about.css';

/** @ngInject */
const route = $stateProvider => {
  $stateProvider.state('about', {
    url: '/about',
    parent: 'root',
    template: AboutTemplate,
    controller: 'AboutController',
    controllerAs: 'about'
  });
};

const aboutModule = angular
  .module('about', [
    uiRouter,
  ])
  .controller('AboutController', AboutController)
  .config(route);

export default aboutModule;
