import angular from 'angular';
import About from './about/about';
import Home from './home/home';
import User from './user/user';

const ComponentModule = angular.module('app.components', [
  Home.name,
  User.name,
  About.name,
]);

export default ComponentModule;
