import angular from 'angular';
import Layout from './layout/layout';
import Header from './header/header';

const CommonModule = angular.module('app.common', [
  Layout.name,
  Header.name,
]);

export default CommonModule;
