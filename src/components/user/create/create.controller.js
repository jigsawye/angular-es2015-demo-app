class CreateController {
  /** @ngInject */
  constructor($mdDialog, $state, UserService, ToastService) {
    Object.assign(this, {
      $mdDialog, $state, UserService, ToastService
    });
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
