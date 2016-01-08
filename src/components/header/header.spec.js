/* eslint-env mocha */
/* eslint no-unused-vars:0 */
/* global inject, expect */

import HeaderModule from './header';
import HeaderController from './header.controller';
import HeaderTemplate from './header.html';

describe('Header', () => {
  let $rootScope;
  let makeController;

  beforeEach(window.module(HeaderModule.name));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new HeaderController();
    };
  }));

  describe('Module', () => {
    // top-level specs: i.e., routes, injection, naming
  });

  describe('Controller', () => {
    // controller specs
    it('has a name property [REMOVE]', () => { // erase if removing this.name from the controller
      const controller = makeController();
      expect(controller).to.have.property('languages');
      expect(controller).to.have.property('selectedLanguage');
    });
  });

  describe('Template', () => {
    // template specs
    // tip: use regex to ensure correct bindings are used e.g., {{  }}
    it('has name in template [REMOVE]', () => {
      expect(HeaderTemplate).to.match(/{{\s?language\.name\s?}}/g);
    });
  });
});
