import angular from 'angular';
import Toast from './toast/toast';

const UtilsModule = angular.module('app.utils', [
  Toast.name,
]);

export default UtilsModule;
