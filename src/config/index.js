import angular from 'angular';
import uiRouter from './ui-route.config';
import translate from './translate.config';

const config = angular
  .module('app.config', [])
  .config(uiRouter)
  .config(translate)
  .constant('Config', {
    API_URL: `http://${window.location.hostname}:4000`,
  });

export default config;
