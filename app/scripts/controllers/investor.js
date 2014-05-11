'use strict';

angular.module('d3DiplomApp')
    .controller('InvestorCtrl', function ($scope, Database) {
        $scope.showForm = function () {
            $scope.newForm = true;
            $scope.investor = {
                porog: 50
            };
            $scope.savedInvestor = null;
        };

        $scope.saveInvestor = function () {
            $scope.newForm = false;
            Database.addInvestor($scope.investor);
            $scope.savedInvestor = $scope.investor;
        }

        $scope.colorpicker = {
            red: 255,
            green: 140,
            blue: 60,
            options: {
                orientation: 'horizontal',
                min: 0,
                max: 100,
                range: 'min'
            }
        };
    });
