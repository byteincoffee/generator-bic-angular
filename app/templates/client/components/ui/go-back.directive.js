'use strict';

angular.module('<%= scriptAppName %>')
  .directive('goBack', [function () {
    return {
      restrict: 'A',
      controller: function ($scope, $element, $window) {
        return $element.on('click', function () {
          return $window.history.back();
        });
      }
    };
  }
  ]);
