import angular from 'angular';
import uiRouter from 'angular-ui-router';
import <%= upCaseName %>Controller from './<%= name %>.controller';<% if (route) { %>
import <%= upCaseName %>Template from './<%= name %>.html';
<% } %>
import './<%= name %>.css';
<% if (route) { %>
/** @ngInject */
const route = $stateProvider => {
  $stateProvider.state('<%= name %>', {
    url: '/<%= name %>',
    parent: 'root',
    template: <%= upCaseName %>Template,
    controller: '<%= upCaseName %>Controller',
    controllerAs: '<%= name %>'
  });
};
<% } if (route) { %>
const <%= upCaseName %>Module = angular
  .module('<%= name %>', [
    uiRouter,
  ])
  .controller('<%= upCaseName %>Controller', <%= upCaseName %>Controller)
  .config(route);
<% } else { %>
const <%= upCaseName %>Module = angular
  .module('<%= name %>', [
    uiRouter,
  ])
  .controller('<%= upCaseName %>Controller', <%= upCaseName %>Controller);
<% } %>
export default <%= upCaseName %>Module;
