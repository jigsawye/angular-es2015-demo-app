import { module } from 'angular';
import ToastService from './toast.service';

const Toast = module('toast', [])
  .service('ToastService', ToastService);

export default Toast.name;
