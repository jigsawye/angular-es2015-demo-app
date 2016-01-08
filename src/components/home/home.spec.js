/* eslint-env mocha */
/* eslint no-unused-vars:0 */
/* global inject, expect */

import HomeModule from './home';
import HomeController from './home.controller';
import HomeTemplate from './home.html';

describe('Home', () => {
  let $rootScope;
  let makeController;

  beforeEach(window.module(HomeModule.name));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new HomeController();
    };
  }));

  describe('Module', () => {
    // top-level specs: i.e., routes, injection, naming
  });

  describe('Controller', () => {
    // controller specs
    it('has a name property [REMOVE]', () => { // erase if removing this.name from the controller
      const controller = makeController();
      expect(controller).to.have.property('name');
    });
  });

  describe('Template', () => {
    // template specs
    // tip: use regex to ensure correct bindings are used e.g., {{  }}
    it('has name in template [REMOVE]', () => {
      expect(HomeTemplate).to.match(/{{\s?vm\.name\s?}}/g);
    });
  });
});
