import { module } from 'angular';
import router from 'angular-ui-router';
import material from 'angular-material';
import translate from 'angular-translate';

const Vendor = module('app.vendor', [
  router,
  material,
  translate,
]);

export default Vendor.name;
