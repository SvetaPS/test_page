(function() {
    angular.module('app', []).controller('CommentsCtrl', function($scope) {
        $scope.comments = [
            {
                name: 'Самуил',
                text: 'Сайт рыбатекст поможет дизайнеру, верстальщику,вебмастеру сгенерировать',
                date: '10 дек. 2016 г.'
            },
            {
                name: 'Самуил',
                text: 'Сайт рыбатекст поможет дизайнеру, верстальщику,вебмастеру сгенерировать. Сайт рыбатекст поможет дизайнеру, верстальщику,вебмастеру сгенерировать. Сайт рыбатекст поможет дизайнеру, верстальщику,вебмастеру сгенерировать',
                date: '15 дек. 2016 г.'
            }
        ];

        var validationApp = angular.module('validationApp', []);

        validationApp.controller('mainController', function($scope) {

            $scope.submitForm = function() {

                if ($scope.userForm.$valid) {
                    return null;
                }

            };

        });

       $scope.submit = function() {
            $scope.comments.push({
                name: $scope.user.name,
                text: $scope.user.text,
                date: $scope.today = new Date(),
                language: "ru"

            });
            $scope.user.name = '';
            return $scope.user.text = '';
        };
        $scope.approve = function(comment) {
            return comment.approved = true;
        };


        return $scope.drop = function(comment) {
            return $scope.comments.splice($scope.comments.indexOf(comment), 1);
        };
    });
}).call(this);

