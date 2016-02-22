import angular from 'angular';
import uiRouter from 'angular-ui-router';
import UserListController from './list.controller';
import UserListTemplate from './list.html';

/** @ngInject */
const route = $stateProvider => {
  $stateProvider.state('user.list', {
    url: '',
    parent: 'user',
    template: UserListTemplate,
    controller: 'UserListController',
    controllerAs: 'list',
  });
};

export default angular
  .module('user.list', [
    uiRouter,
  ])
  .controller('UserListController', UserListController)
  .config(route);
