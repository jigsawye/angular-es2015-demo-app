class HeaderController {
  /** @ngInject */
  constructor($translate) {
    this.$translate = $translate;
    this.languages = [
      { key: 'en', name: 'English' },
      { key: 'tw', name: '繁體中文' },
    ];
    this.selectedLanguage = 'en';
  }

  changeLanguage() {
    this.$translate.use(this.selectedLanguage);
  }
}

export default HeaderController;
