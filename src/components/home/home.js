import { module } from 'angular';
import uiRouter from 'angular-ui-router';
import HomeTemplate from './home.html';

/** @ngInject */
const route = $stateProvider => {
  $stateProvider.state('home', {
    url: '/',
    parent: 'root',
    template: HomeTemplate,
    controllerAs: 'home',
  });
};

const Home = module('home', [
  uiRouter,
])
.config(route);

export default Home.name;
