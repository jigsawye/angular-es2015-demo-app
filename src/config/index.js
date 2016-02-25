import { module } from 'angular';
import router from './ui-route.config';
import translate from './translate.config';

const Config = module('app.config', [])
  .config(router)
  .config(translate)
  .constant('Config', {
    API_URL: `http://${window.location.hostname}:4000`,
  });

export default Config.name;
