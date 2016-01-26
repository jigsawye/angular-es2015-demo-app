import angular from 'angular';
import Layout from './layout/layout';
import notFound from './notFound/notFound';
import Header from './header/header';
import About from './about/about';
import Home from './home/home';
import User from './user/user';

const ComponentModule = angular.module('app.components', [
  Layout.name,
  Header.name,
  notFound.name,
  Home.name,
  User.name,
  About.name,
]);

export default ComponentModule;
