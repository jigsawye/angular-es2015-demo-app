export default class CreateController {
  /** @ngInject */
  constructor($mdDialog, $translate, UserService, ToastService) {
    Object.assign(this, {
      $mdDialog, $translate, UserService, ToastService,
    });
  }

  cancel() {
    this.$mdDialog.cancel();
  }

  create() {
    this.UserService.createUser(this.user)
      .then(() => this.$translate('TOAST.CREATE_SUCCESS'))
      .then(successMessage => {
        this.$mdDialog.cancel();
        this.ToastService.show(successMessage);
      });
  }
}
