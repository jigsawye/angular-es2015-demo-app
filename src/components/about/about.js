import angular from 'angular';
import AboutController from './about.controller';
import AboutTemplate from './about.html';

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
  .module('about', [])
  .controller('AboutController', AboutController)
  .config(route);

export default aboutModule;
