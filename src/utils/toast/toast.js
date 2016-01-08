import angular from 'angular';
import ToastService from './toast.service';

const ToastModule = angular
  .module('toast', [])
  .service('ToastService', ToastService);

export default ToastModule;
