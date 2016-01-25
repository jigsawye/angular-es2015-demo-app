/* eslint-env mocha */
/* eslint no-unused-vars:0 */
/* global inject, chai, sinon */

import CreateModule from './create';
import CreateController from './create.controller';
import CreateTemplate from './create.html';

describe('Create', () => {
  let $rootScope;
  let makeDeferred;
  let makeController;

  const $mdDialog = {};
  const $state = {};
  let $translate = {};
  const UserService = {};
  const ToastService = {};

  beforeEach(window.module(CreateModule.name));

  beforeEach(inject(($q, _$rootScope_) => {
    $rootScope = _$rootScope_;

    makeDeferred = () => {
      return $q.defer();
    };

    makeController = () => {
      return new CreateController($mdDialog, $state, $translate, UserService, ToastService);
    };
  }));

  describe('Module', () => {
    // top-level specs: i.e., routes, injection, naming
  });

  describe('Controller', () => {
    it('.cancel() - should call $mdDialog once.', () => {
      $mdDialog.cancel = sinon.spy();

      const controller = makeController();
      controller.cancel();
      chai.expect($mdDialog.cancel.called).to.eq(true);
    });

    it('.create() - should call dependecnies.', () => {
      UserService.createUser = () => {};
      const UserServiceMock = sinon.mock(UserService);
      const userServiceDeferred = makeDeferred();
      UserServiceMock.expects('createUser').once().returns(userServiceDeferred.promise);
      userServiceDeferred.resolve();

      const $translateDeferred = makeDeferred();
      $translate = sinon.stub().returns($translateDeferred.promise);
      $translateDeferred.resolve();

      $state.reload = sinon.spy();
      $mdDialog.cancel = sinon.spy();
      ToastService.show = sinon.spy();

      const controller = makeController();
      controller.create();
      $rootScope.$digest();

      UserServiceMock.verify();
      chai.expect($translate.called).to.eq(true);
      chai.expect($state.reload.called).to.eq(true);
      chai.expect($mdDialog.cancel.called).to.eq(true);
      chai.expect(ToastService.show.called).to.eq(true);
    });
  });

  describe('Template', () => {
    // template specs
    // tip: use regex to ensure correct bindings are used e.g., {{  }}
    it('has name in template [REMOVE]', () => {
      // expect(CreateTemplate).to.match(/{{\s?vm\.name\s?}}/g);
    });
  });
});
