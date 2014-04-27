'use strict';

angular.module('d3DiplomApp')
  .controller('InvestorCtrl', function ($scope) {
        $scope.showForm = function () {
            $scope.newForm = true;
            $scope.investor = {};
            $scope.savedInvestor = null;
        };

        $scope.saveInvestor = function(){
            $scope.newForm = false;
            var investors = localStorage.getItem('investors') ? JSON.parse(localStorage.getItem('investors')) : [];
            investors.push($scope.investor);

            localStorage.setItem('investors', JSON.stringify(investors));

            $scope.savedInvestor = $scope.investor;
        }
  });
