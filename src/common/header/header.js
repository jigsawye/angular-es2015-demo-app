import angular from 'angular';
import uiRouter from 'angular-ui-router';
import HeaderController from './header.controller';
import './header.css';

const headerModule = angular
  .module('header', [
    uiRouter
  ])
  .controller('HeaderController', HeaderController);

export default headerModule;
