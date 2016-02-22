import angular from 'angular';
import uiRouter from 'angular-ui-router';
import UserEditController from './edit.controller';

export default angular
  .module('user.edit', [
    uiRouter,
  ])
  .controller('UserEditController', UserEditController);
