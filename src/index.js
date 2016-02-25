import { module } from 'angular';

import './index.css';
import Vendor from './vendor/';
import Components from './components/';
import Utils from './utils';
import Config from './config';

module('app', [
  Vendor,
  Config,
  Components,
  Utils,
]);
