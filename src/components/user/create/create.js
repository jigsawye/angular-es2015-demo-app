import angular from 'angular';
import uiRouter from 'angular-ui-router';
import UserCreateController from './create.controller';

const UserCreateModule = angular
  .module('create', [
    uiRouter,
  ])
  .controller('UserCreateController', UserCreateController);


export default UserCreateModule;
