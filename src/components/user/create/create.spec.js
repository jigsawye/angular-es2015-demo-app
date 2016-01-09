/* eslint-env mocha */
/* eslint no-unused-vars:0 */
/* global inject, chai, sinon */

import CreateModule from './create';
import CreateController from './create.controller';
import CreateTemplate from './create.html';

describe('Create', () => {
  const $mdDialog = {};
  const $state = {};
  const $translate = {};
  const UserService = {};
  const ToastService = {};
  let makeController;
  let mockDependecies;

  beforeEach(() => {
    makeController = () => {
      return new CreateController($mdDialog, $state, $translate, UserService, ToastService);
    };

    mockDependecies = window.module($provide => {
      $provide.factory('$mdDialog', () => {
        return $mdDialog;
      });
      $provide.factory('$state', () => {
        return $state;
      });
      $provide.factory('$translate', () => {
        return $translate;
      });
      $provide.factory('UserService', () => {
        return UserService;
      });
      $provide.factory('ToastService', () => {
        return ToastService;
      });
    });
  });

  describe('Module', () => {
    // top-level specs: i.e., routes, injection, naming
  });

  describe('Controller', () => {
    it('.cancel() - should call $mdDialog once.', () => {
      $mdDialog.cancel = sinon.spy();
      mockDependecies();

      const controller = makeController();
      controller.cancel();
      chai.expect($mdDialog.cancel.called).to.eq(true);
    });

    it('.create() - should call dependecnies.', () => {
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
