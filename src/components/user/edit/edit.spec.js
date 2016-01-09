/* eslint-env mocha */
/* eslint no-unused-vars:0 */
/* global inject, expect */

import EditModule from './edit';
import EditController from './edit.controller';
import EditTemplate from './edit.html';

describe('Edit', () => {
  let $rootScope;
  let makeController;

  beforeEach(window.module(EditModule.name));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new EditController();
    };
  }));

  describe('Module', () => {
    // top-level specs: i.e., routes, injection, naming
  });

  describe('Controller', () => {
    // controller specs
    it('has a name property [REMOVE]', () => { // erase if removing this.name from the controller
    });
  });

  describe('Template', () => {
    // template specs
    // tip: use regex to ensure correct bindings are used e.g., {{  }}
    it('has name in template [REMOVE]', () => {
    });
  });
});
