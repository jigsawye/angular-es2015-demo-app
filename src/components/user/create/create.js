import { module } from 'angular';
import uiRouter from 'angular-ui-router';
import UserCreateController from './create.controller';

const UserCreate = module('user.create', [
  uiRouter,
])
.controller('UserCreateController', UserCreateController);

export default UserCreate.name;
