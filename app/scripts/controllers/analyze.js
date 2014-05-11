'use strict';

angular.module('d3DiplomApp')
    .controller('AnalyzeCtrl', function ($scope, Database) {
        Database.getRegions().then(function (regions) {
            Database.getInvestors().then(function (investors) {
                $scope.regions = _.map(regions.data, function (item) {
                    return JSON.parse(item);
                });
                $scope.investors = _.map(investors.data, function (item) {
                    return JSON.parse(item);
                });

                $scope.analyze = function () {
                    var region = _.find($scope.regions, function (item) {
                        return item.name == $scope.selectedRegion;
                    });

                    var investor = _.find($scope.investors, function (item) {
                        return item.name == $scope.selectedInvestor;
                    });

                    if (!(region && investor))
                        return;

                    function trim(str) {
                        return str.replace(/^\s\s*/, '').replace(/\s\s*$/, '').toUpperCase();
                    }

                    function normalize(arr) {
                        return _.map(arr.split(','), function (s) {
                            return  trim(s);
                        })
                    }

                    var iStructs = normalize(investor.structs);
                    var iObjects = normalize(investor.objects);
                    var iRes = normalize(investor.resources);

                    _.each(region.children, function (struct) {
                        var name = trim(struct.name);

                        if (_.contains(iStructs, name)) {
                            struct.fill = true;
                        }

                        _.each(struct.children, function (object) {
                            var name = trim(object.name);

                            if (_.contains(iObjects, name)) {
                                object.fill = true;
                            }

                            _.each(object.children, function (resource) {
                                var name = trim(resource.name);

                                if (_.contains(iRes, name)) {
                                    resource.fill = true;
                                }
                            });
                        });
                    })

                    if (window.drawGraph) {
                        window.drawGraph(region);
                    }
                }

            });
        });

    });
