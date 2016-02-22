export default class EditController {
  /** @ngInject */
  constructor($mdDialog, $translate, UserService, ToastService, userId) {
    Object.assign(this, {
      $mdDialog, $translate, UserService, ToastService,
    });

    UserService.getUserById(userId).then(user => (this.user = user));
  }

  cancel() {
    this.$mdDialog.cancel();
  }

  edit() {
    this.UserService.updateUser(this.user)
      .then(() => this.$translate('TOAST.EDIT_SUCCESS'))
      .then(successMessage => {
        this.$mdDialog.cancel();
        this.ToastService.show(successMessage);
      });
  }
}
