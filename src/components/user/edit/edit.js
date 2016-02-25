import { module } from 'angular';
import router from 'angular-ui-router';
import UserEditController from './edit.controller';

const UserEdit = module('user.edit', [
  router,
])
.controller('UserEditController', UserEditController);

export default UserEdit.name;
