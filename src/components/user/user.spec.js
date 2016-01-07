/* eslint-env mocha */
/* eslint no-unused-vars:0 */
/* global inject, expect */

import UserModule from './user';
import UserController from './user.controller';
import UserTemplate from './user.html';
import UserService from './user.service';

describe('User', () => {
  let $rootScope;
  let makeController;

  beforeEach(window.module(UserModule.name));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new UserController();
    };
  }));

  describe('Module', () => {
    // top-level specs: i.e., routes, injection, naming
  });

  describe('Service', () => {
    it('', () => {

    });
  });
});
