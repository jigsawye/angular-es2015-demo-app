import angular from 'angular';
import UserEditTemplate from '../edit/edit.html';
import UserCreateTemplate from '../create/create.html';

class UserListController {
  /** @ngInject */
  constructor($scope, $mdDialog, $translate, UserService, ToastService) {
    Object.assign(this, {
      $mdDialog, $translate, UserService, ToastService
    });

    this.users = UserService.users;
    $scope.$watch(
      () => UserService.users,
      (newVal) => this.users = newVal
    );

    UserService.getUsers();
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
    this.$translate(['USER.CONFIRM_DELETE', 'USER.USER_NAME', 'USER.YES', 'USER.NO'])
      .then(translations => this.$mdDialog.show(this.$mdDialog.confirm()
        .title(translations['USER.CONFIRM_DELETE'])
        .textContent(`${translations['USER.USER_NAME']}: ${user.name}`)
        .ariaLabel('confirm remove user')
        .targetEvent($event)
        .ok(translations['USER.YES'])
        .cancel(translations['USER.NO'])
      ))
      .then(() => this.UserService.deleteUser(user.id))
      .then(() => this.$translate('TOAST.DELETE_SUCCESS'))
      .then(successMessage => {
        this.ToastService.show(successMessage);
      });
  }
}

export default UserListController;
