angular.module('app').directive('person', function () {
    return {
        restrict: 'E',
        scope: {
            person: '='
        },
        template: '<h3>{{person.name}}</h3><h4>{{person.penName}}</h4>'
    };
});