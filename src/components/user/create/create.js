import angular from 'angular';
import UserCreateController from './create.controller';

const UserCreateModule = angular
  .module('create', [])
  .controller('UserCreateController', UserCreateController);


export default UserCreateModule;
