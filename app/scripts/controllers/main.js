'use strict';

angular.module('d3DiplomApp')
    .controller('MainCtrl', function ($scope, $location, $modal) {
        $scope.go = function (path) {
            $scope.login(path);
        };

        $scope.login = function (path) {
            if(localStorage.getItem('loggedin') === 'true'){
                $location.path(path);
                return;
            }

            var modalInstance = $modal.open({
                templateUrl: 'myModalContent.html',
                controller: ModalInstanceCtrl,
                resolve: {
                    success: function () {
                        return function(){
                            $location.path(path);
                        }
                    }
                }
            });
        }
    });

var ModalInstanceCtrl = function ($scope, $modalInstance, success) {
    $scope.name = 'админ';
    $scope.password = 'пароль';

    $scope.ok = function () {
        if($scope.name == 'админ' && $scope.password == 'пароль'){
            localStorage.setItem('loggedin', true);
            if(success)
                success();

            $modalInstance.dismiss('cancel');
        }
        else{
            $scope.showError = true;
        }
    };

    $scope.cancel = function () {
        $modalInstance.dismiss('cancel');
    };
};
