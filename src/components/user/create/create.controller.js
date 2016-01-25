class CreateController {
  /** @ngInject */
  constructor($mdDialog, $state, $translate, UserService, ToastService) {
    Object.assign(this, {
      $mdDialog, $state, $translate, UserService, ToastService
    });
  }

  cancel() {
    this.$mdDialog.cancel();
  }

  create() {
    this.UserService.createUser(this.user)
      .then(() => {
        return this.$translate('TOAST.CREATE_SUCCESS');
      })
      .then(successMessage => {
        this.$state.reload();
        this.$mdDialog.cancel();
        this.ToastService.show(successMessage);
      });
  }
}

export default CreateController;
