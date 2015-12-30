import angular from 'angular';
import uiRouter from 'angular-ui-router';
import <%= upCaseName %>Controller from './<%= name %>.controller';
import <%= upCaseName %>Template from './<%= name %>.html';
import './<%= name %>.css';

const <%= upCaseName %>Module = angular
  .module('<%= name %>', [
    uiRouter
  ])
  .controller('<%= upCaseName %>Controller', <%= upCaseName %>Controller)
  .config($stateProvider => {
    'ngInject';

    $stateProvider
      .state('<%= name %>', {
        url: '/<%= name %>',
        parent: 'root',
        template: <%= upCaseName %>Template,
        controller: '<%= upCaseName %>Controller',
        controllerAs: '<%= name %>'
      });
  });

export default <%= upCaseName %>Module;
