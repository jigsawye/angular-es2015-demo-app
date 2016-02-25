import { module } from 'angular';
import Toast from './toast/toast';

const Utils = module('app.utils', [
  Toast,
]);

export default Utils.name;
