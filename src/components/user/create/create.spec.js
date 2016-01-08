/* eslint-env mocha */
/* eslint no-unused-vars:0 */
/* global inject, expect */

import CreateModule from './create';
import CreateController from './create.controller';
import CreateTemplate from './create.html';

describe('Create', () => {
  let $rootScope;
  let makeController;

  beforeEach(window.module(CreateModule.name));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new CreateController();
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
      expect(CreateTemplate).to.match(/{{\s?vm\.name\s?}}/g);
    });
  });
});
