import angular from 'angular';
import uiRouter from 'angular-ui-router';
import UserListController from './list.controller';
import UserListTemplate from './list.html';

const UserListModule = angular
  .module('list', [
    uiRouter
  ])
  .controller('UserListController', UserListController)
  .config(($stateProvider, $urlRouterProvider) => {
    'ngInject';

    $stateProvider
      .state('user.list', {
        url: '',
        parent: 'user',
        template: UserListTemplate,
        controller: 'UserListController',
        controllerAs: 'list'
      });

    $urlRouterProvider.when('/posts/', '/posts');
  });

export default UserListModule;
