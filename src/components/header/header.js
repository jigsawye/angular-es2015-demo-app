import { module } from 'angular';
import router from 'angular-ui-router';
import HeaderController from './header.controller';
import './header.css';

const Header = module('header', [
  router,
])
.controller('HeaderController', HeaderController);

export default Header.name;
