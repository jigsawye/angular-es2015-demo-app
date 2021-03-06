import { module } from 'angular';
import router from 'angular-ui-router';
import NotFoundController from './notFound.controller';
import NotFoundTemplate from './notFound.html';

/** @ngInject */
const route = $stateProvider => {
  $stateProvider.state('notFound', {
    url: '/404',
    parent: 'root',
    template: NotFoundTemplate,
    controller: 'NotFoundController',
    controllerAs: 'notFound',
  });
};

const NotFound = module('notFound', [
  router,
])
.controller('NotFoundController', NotFoundController)
.config(route);

export default NotFound.name;
