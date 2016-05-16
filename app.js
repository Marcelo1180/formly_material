/**
 * Created by wael on 14/12/15.
 */
// console.clear(); // <-- keep the console clean on refresh

/* global angular */
(function() {
    'use strict';

    //var app = angular.module('djangoRestFormlyExample', ['formly', 'formlyMaterial']);
    var app = angular.module('djangoRestFormlyExample', ['formlyMaterial']);


    app.controller('MainCtrl', function MainCtrl(formlyVersion, $http) {
        var vm = this;
        // function assignment
        vm.onSubmit = onSubmit;

        // variable assignment
        vm.author = { // optionally fill in your info below :-)
            name: 'Wael BEN ZID EL GUEBSI',
            url: 'https://twitter.com/benzid_wael'  // my twitter account
        };
        vm.exampleTitle = 'Introduction';
        vm.env = {
            angularVersion: angular.version.full,
            formlyVersion: formlyVersion
        };

        // vm.model = {
        //   note: "",
        //   score: 0
        // };
        vm.options = {
            formState: {
                awesomeIsForced: false
            }
        };
        var urlSearch = "http://127.0.0.1:8000/api/designacion_horarios/1/";
        // var urlSearch = "http://127.0.0.1:8000/api/designacion_horarios/";
        //$http({method: 'OPTIONS', url:urlSearch}).success(function(data){
        //    vm.fields = DjangoRestFormly.toFormly(data.actions.PUT);
        //    /*$http({method: 'GET', url:urlSearch}).success(function(data){
        //     vm.model = data;
        //     });*/
        //    vm.model = {
        //        id: 1,
        //        fecha_ini: new Date("2016-05-03"),
        //        fecha_fin: new Date("2016-05-03"),
        //        usuario: "4",
        //        horario: "1"
        //    };
        //});

         vm.fields = DjangoRestFormly.toFormly({
           "first_name": {
               "type": "date",
               label: "Apellido",
               "required": true,
               "read_only": false,
               max_length: 10
           },
           "last_name": {
               "type": "string",
               "required": true,
               "read_only": false,
               "label": "Family Name (Max: 10)",
               "max_length": 10
           },
           "age": {
               "type": "integer",
               "required": true,
               "read_only": false
           }
         });
        //vm.fields = [
        //    {
        //        key: 'first_name',
        //        type: 'input',
        //        templateOptions: {
        //            type: 'text',
        //            label: 'First Name',
        //            placeholder: 'Enter your first name',
        //            required: true
        //        }
        //    },
        //    {
        //        key: 'dates',
        //        type: 'datepicker',
        //        templateOptions: {
        //            type: 'input',
        //            label: 'Date',
        //            required: true
        //        }
        //    },
        //    {
        //        key: 'last_name',
        //        type: 'input',
        //        templateOptions: {
        //            type: 'text',
        //            label: 'Last Name',
        //            placeholder: 'Enter your last name',
        //            required: true
        //        }
        //    },
        //    {
        //        key: 'email',
        //        type: 'input',
        //        templateOptions: {
        //            type: 'email',
        //            label: 'Email address',
        //            placeholder: 'Enter email',
        //            required: true
        //        }
        //    },
        //];
        //console.dir(vm.fields);
        console.log(JSON.stringify(vm.fields));
        // function definition
        function onSubmit() {
            alert("You clicked on 'Submit' button");
        }
    });

})();