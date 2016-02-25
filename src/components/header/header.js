import { module } from 'angular';
import uiRouter from 'angular-ui-router';
import HeaderController from './header.controller';
import './header.css';

const Header = module('header', [
  uiRouter,
])
.controller('HeaderController', HeaderController);

export default Header.name;
