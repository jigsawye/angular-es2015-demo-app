class CreateController {
  /** @ngInject */
  constructor($mdDialog, $state, UserService, ToastService) {
    this.$mdDialog = $mdDialog;
    this.$state = $state;
    this.UserService = UserService;
    this.ToastService = ToastService;
  }

  cancel() {
    this.$mdDialog.cancel();
  }

  create() {
    this.UserService.createUser(this.user).then(() => {
      this.$state.reload();
      this.$mdDialog.cancel();
      this.ToastService.show('Create Success!');
    });
  }
}

export default CreateController;
