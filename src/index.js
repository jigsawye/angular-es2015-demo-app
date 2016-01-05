import angular from 'angular';
import uiRouter from 'angular-ui-router';
import ngMaterial from 'angular-material';
import translate from 'angular-translate';
import 'angular-material/angular-material.css';

import Common from './common/';
import Components from './components/';
import Utils from './utils';
import * as Config from './config';

angular
  .module('app', [
    uiRouter,
    ngMaterial,
    translate,

    Common.name,
    Components.name,
    Utils.name,
  ])
  .constant('Config', {
    API_URL: `http://${window.location.hostname}:4000`,
  })
  .config(Config.uiRouter)
  .config(Config.translate);
