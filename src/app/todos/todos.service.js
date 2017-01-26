/**
 * Created by Josue on 26/1/17.
 */
(function () {
    'use strict';

    angular
        .module('todos')
        .service('TodosService', TodosService);

    TodosService.$inject = [];

    /* @ngInject */
    function TodosService() {

        var todos = [{
            label: 'Eat pizza',
            id: 0,
            complete: true
        }, {
            label: 'Do some coding',
            id: 1,
            complete: true
        }, {
            label: 'Sleep',
            id: 2,
            complete: false
        }, {
            label: 'Print tickets',
            id: 3,
            complete: true
        }];


        this.getTodos = getTodos;
        this.addTodo = addTodo;

        ////////////////

        function getTodos() {
            return todos;
        }


        function addTodo(label) {
            const newId = todos.length;
            todos.push({id: newId, label: label, completed: false});

        }
    }

})();

