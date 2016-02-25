import { module } from 'angular';
import Layout from './layout/layout';
import NotFound from './notFound/notFound';
import Header from './header/header';
import About from './about/about';
import Home from './home/home';
import User from './user/user';

const Components = module('app.components', [
  Layout,
  Header,
  NotFound,
  Home,
  User,
  About,
]);

export default Components.name;
