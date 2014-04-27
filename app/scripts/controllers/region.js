'use strict';

angular.module('d3DiplomApp')
    .controller('RegionCtrl', function ($scope) {
        $scope.showForm = function () {
            $scope.newForm = true;
        };

        $scope.graphString = '3,2,1,3,1,1,0,1,1,0';

        $scope.children = [];

        $scope.currentPage = 1;

        $scope.setCurrentStruct = function (page) {
            $scope.currentStruct = $scope.children[page - 1];
        }

        $scope.buildForms = function () {
            $scope.canDraw = false;

            var split = $scope.graphString.split(',');
            var structsCount = parseInt(split[0]);

            $scope.children = new Array(structsCount);

            var secondLevel = split.slice(1, structsCount + 1);

            for (var i = 0; i < secondLevel.length; i++) {
                $scope.children[i] = {children: new Array(parseInt(secondLevel[i])), name: ''};
            }

            var counter = 1 + structsCount;

            for (var i = 0; i < structsCount; i++) {
                for (var j = 0; j < $scope.children[i].children.length; j++) {
                    var children = [];

                    for (var k = 0; k < parseInt(split[counter]); k++) {
                        children.push({name: ''});
                    }

                    $scope.children[i].children[j] = {name: '', children: children};
                    counter++;
                }
            }

            $scope.currentStruct = $scope.children[0];
        };

        $scope.saveGraph = function () {
            var graph = {name: $scope.regionName, children: $scope.children};

            var graphs = localStorage.getItem('graphs') ? JSON.parse(localStorage.getItem('graphs')) : [];
            graphs.push(graph);

            localStorage.setItem('graphs', JSON.stringify(graphs));
            localStorage.setItem('graph', JSON.stringify(graph));
            $scope.canDraw = true;
        }

        $scope.newForm = false;
    });
