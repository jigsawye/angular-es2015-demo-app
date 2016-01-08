import angular from 'angular';
import UserEditController from './edit.controller';

const UserEditModule = angular
  .module('edit', [])
  .controller('UserEditController', UserEditController);

export default UserEditModule;
