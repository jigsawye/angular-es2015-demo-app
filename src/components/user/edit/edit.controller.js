class EditController {
  /** @ngInject */
  constructor($mdDialog, $state, UserService, ToastService, userId) {
    this.$mdDialog = $mdDialog;
    this.$state = $state;
    this.UserService = UserService;
    this.ToastService = ToastService;
    UserService.getUserById(userId).then(user => this.user = user);
  }

  cancel() {
    this.$mdDialog.cancel();
  }

  edit() {
    this.UserService.updateUser(this.user).then(() => {
      this.$state.reload();
      this.$mdDialog.cancel();
      this.ToastService.show('Edit Success!');
    });
  }
}

export default EditController;
