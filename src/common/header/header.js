import angular from 'angular';
import HeaderController from './header.controller';
import './header.css';

const headerModule = angular
  .module('header', [])
  .controller('HeaderController', HeaderController);

export default headerModule;
