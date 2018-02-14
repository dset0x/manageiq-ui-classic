describe('widget-empty', function() {
    var $scope, element, $compile;
    beforeEach(module('ManageIQ'));
    beforeEach(inject(function(_$compile_, $rootScope, $templateCache) {
      // FIXME: templateRequest is using $http to get the template, but angular-mocks prevents it
      $templateCache.put('/static/dropdown-menu.html.haml', '<div></div>');
      $scope = $rootScope;
      $scope.miqButtonClicked = function(){};
      $scope.validForm = true;
      $compile = _$compile_;
    }));
    it('is rendered in widget-wrapper if widget-blank is set to true', function(done) {
      element = angular.element(
        '<form name="angularForm">' +
        '<widget-wrapper widget-id="42" widget-blank=true widget-buttons="null"></widget-wrapper>' +
        '</form>'
      );
      element = $compile(element)($scope);
      $scope.$digest();
      setTimeout(function(){
        var widget = element.find("widget-empty");
        expect(widget.length).not.toBe(0);
        done();
      });
    });
}
);
