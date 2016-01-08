import angular from 'angular';
import Layout from './layout/layout';
import Header from './header/header';
import About from './about/about';
import Home from './home/home';
import User from './user/user';

const ComponentModule = angular.module('app.components', [
  Layout.name,
  Header.name,
  Home.name,
  User.name,
  About.name,
]);

export default ComponentModule;
