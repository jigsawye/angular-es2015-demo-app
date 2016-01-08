import angular from 'angular';
import uiRouter from 'angular-ui-router';
import UserController from './user.controller';
import UserService from './user.service';
import UserTemplate from './user.html';
import './user.css';

import UserList from './list/list';
import UserEdit from './edit/edit';
import UserCreate from './create/create';

/** @ngInject */
const route = $stateProvider => {
  $stateProvider.state('user', {
    url: '/user',
    parent: 'root',
    abstract: true,
    template: UserTemplate,
    controller: 'UserController',
    controllerAs: 'user'
  });
};

const userModule = angular
  .module('user', [
    uiRouter,
    UserList.name,
    UserEdit.name,
    UserCreate.name,
  ])
  .controller('UserController', UserController)
  .service('UserService', UserService)
  .config(route);

export default userModule;
