import angular from 'angular';
import uiRouter from 'angular-ui-router';
import UserCreateController from './create.controller';

export default angular
  .module('user.create', [
    uiRouter,
  ])
  .controller('UserCreateController', UserCreateController);
