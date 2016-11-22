/**
 * Created by Josue on 22/11/16.
 */
(function () {
    'use strict';

    angular
        .module('todos')
        .component('todos', {
            controller: TodosController,


            templateUrl: ""
        });


    TodosController.$inject = ['TodoService'];

    /* @ngInject */
    function TodosController(TodoService) {

        var _self = this;
        this.todoService = TodoService;


        this.$onInit = function () {
            this.todos = this.todoService.getTodos();

        };

        this.addTodo = function (label) {
            _self.todos = _self.todos.push({label, id: _self.todos.length + 1});
        };

        this.completeTodo = function (todo) {
            _self.todos = _self.todos.map(function (item) {
                return item.id === todo.id ? Object.assign({}, item, {complete: true}) : item
            });

        };

        this.removeTodo = function (todo) {
            _self.todos = _self.todos.filter(function(item){
               return  todo.id !== item.id;
            });

        }


    }

})();

