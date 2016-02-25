import { module } from 'angular';
import uiRouter from 'angular-ui-router';
import UserEditController from './edit.controller';

const UserEdit = module('user.edit', [
  uiRouter,
])
.controller('UserEditController', UserEditController);

export default UserEdit.name;
