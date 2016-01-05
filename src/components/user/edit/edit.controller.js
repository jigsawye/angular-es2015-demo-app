class EditController {
  /** @ngInject */
  constructor($mdDialog, $state, UserService, ToastService, userId) {
    Object.assign(this, {
      $mdDialog, $state, UserService, ToastService
    });

    UserService.getUserById(userId).then(user => this.user = user);
  }

  cancel() {
    this.$mdDialog.cancel();
  }

  edit() {
    this.UserService.updateUser(this.user).then(() => {
      this.$translate('TOAST.EDIT_SUCCESS')
        .then(successMessage => {
          this.$state.reload();
          this.$mdDialog.cancel();
          this.ToastService.show(successMessage);
        });
    });
  }
}

export default EditController;
