'use strict';

angular.module('d3DiplomApp')
    .service('Database', function Database($http) {
        this.addRegion = function (region) {
            $http.post(window.dbUrl + '/AddRegion', {content: JSON.stringify(region)});
        };

        this.addInvestor = function (investor) {
            $http.post(window.dbUrl + '/AddInvestor', {content: JSON.stringify(investor)});
        };

        this.getInvestors = function () {
            return $http.post(window.dbUrl + '/GetInvestors');
        };

        this.getRegions = function () {
            return $http.post(window.dbUrl + '/GetRegions');
        };
    });
