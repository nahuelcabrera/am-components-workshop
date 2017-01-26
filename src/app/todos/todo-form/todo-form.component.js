/**
 * Created by Josue on 26/1/17.
 */
(function () {
    'use strict';

    angular
        .module('todos')
        .component('todoForm', {
            controller: TodoFormController,
            bindings: {
                onAdd: "&"
            },
            template: "<div class='todo-form'>" +
            "<form name='$ctrl.todo_form' novalidate ng-submit='$ctrl.onSubmit()'>" +
            "<input type='text' ng-model='$ctrl.label' required>" +
            "<button type='submit'>Añadir</button>" +
            "</form>" +
            "</div>"
        });


    TodoFormController.$inject = [];

    /* @ngInject */
    function TodoFormController() {

        var self = this;

        this.$onInit = function () {
            //all initialisation code for the Controller, consider it a constructor

        };

        this.$postLink = function () {

        };

        this.$onChanges = function (changes) {

        };

        this.onSubmit = function () {

            if (self.todo_form.$valid) {
                console.log("el form fue submiteado con el valor ", self.label);
                self.onAdd({$event: {label: self.label}});
            }


        }


    }

})();

