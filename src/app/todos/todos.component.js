/**
 * Created by Josue on 26/1/17.
 */
(function () {
    'use strict';

    angular
        .module('todos')
        .component('todos', {
            controller: TodosController,
            template: "<div class='todos'>" +
            "<todo-form on-add='$ctrl.add($event)'></todo-form>" +
            "</div>"

        });


    TodosController.$inject = ['TodosService'];

    /* @ngInject */
    function TodosController(TodosService) {

        this.$onInit = function () {
            //all initialisation code for the Controller, consider it a constructor

            this.todos = TodosService.getTodos();
            console.log(this.todos);
        };

        this.$postLink = function () {

        };

        this.$onChanges = function (changes) {

        };


        this.add = function ($event) {
            var label = $event.label;

            TodosService.addTodo(label);

            console.log(TodosService.getTodos());

            console.log("el metodo add fue invocado")

        }
    }

})();

