import angular from 'angular';
import UserEditTemplate from '../edit/edit.html';
import UserCreateTemplate from '../create/create.html';

class UserListController {
  /** @ngInject */
  constructor($mdDialog, $state, UserService, ToastService) {
    this.$mdDialog = $mdDialog;
    this.$state = $state;
    this.UserService = UserService;
    this.ToastService = ToastService;
    UserService.getUsers().then(users => this.users = users);
  }

  edit($event, userId) {
    this.$mdDialog.show({
      controller: 'UserEditController',
      controllerAs: 'edit',
      template: UserEditTemplate,
      locals: {
        userId
      },
      parent: angular.element(document.body),
      targetEvent: $event,
      clickOutsideToClose: true,
    });
  }

  create($event) {
    this.$mdDialog.show({
      controller: 'UserCreateController',
      controllerAs: 'create',
      template: UserCreateTemplate,
      parent: angular.element(document.body),
      targetEvent: $event,
      clickOutsideToClose: true,
    });
  }

  delete($event, user) {
    this.$mdDialog.show(this.$mdDialog.confirm()
      .title('Would you like to delete the user?')
      .textContent(`User name: ${user.name}`)
      .ariaLabel('confirm remove user')
      .targetEvent($event)
      .ok('Yes')
      .cancel('No')
    ).then(() => {
      this.UserService.deleteUser(user.id)
        .then(() => {
          this.$state.reload();
          this.ToastService.show('Delete Success!');
        });
    });
  }
}

export default UserListController;
