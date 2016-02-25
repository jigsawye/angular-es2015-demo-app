import { module } from 'angular';
import router from 'angular-ui-router';
import UserCreateController from './create.controller';

const UserCreate = module('user.create', [
  router,
])
.controller('UserCreateController', UserCreateController);

export default UserCreate.name;
