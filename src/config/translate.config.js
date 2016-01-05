import * as translations from '../translations';

/** @ngInject */
function config($translateProvider) {
  $translateProvider
    .useSanitizeValueStrategy('escape')
    .translations('en', translations.en)
    .translations('tw', translations.tw)
    .preferredLanguage('en')
    .fallbackLanguage('en');
}

export default config;
