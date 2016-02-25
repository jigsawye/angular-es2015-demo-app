import { module } from 'angular';
import router from 'angular-ui-router';
import AboutTemplate from './about.html';

import './about.css';

/** @ngInject */
const route = $stateProvider => {
  $stateProvider.state('about', {
    url: '/about',
    parent: 'root',
    template: AboutTemplate,
  });
};

const About = module('about', [
  router,
])
.config(route);

export default About.name;
