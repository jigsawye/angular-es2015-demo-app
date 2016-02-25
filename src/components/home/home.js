import { module } from 'angular';
import router from 'angular-ui-router';
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
  router,
])
.config(route);

export default Home.name;
