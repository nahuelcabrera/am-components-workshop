/**
 * Created by Josue on 24/11/16.
 */
(function () {
    'use strict';

    angular
        .module('todos')
        .component('todoAlert', {
            controller: TodoAlertController,
            bindings: {
                todosAmmount: "<"
            },
            require: {},
            templateUrl: "todos/todo-alert/todo-alert.html"
        });



})();

