/**
 * @ngdoc function
 * @name ccmPatientRegistration.controller:GeninfoStateCtrl
 * @description
 * # GeninfoStateCtrl
 * Controller of the ccmPatientRegistration
 */

(function() {
    'use strict';

    /*
        angular
            .module('ccmPatientRegistration', ['ngMaterial', 'ngMessages', 'ui.router'])
            .config(function ($stateProvider, $urlRouterProvider, $locationProvider) {

                    $stateProvider
                        .state('geninfo', {
                            url: '/geninfo',
                            templateUrl: '/scripts/routes/geninfo/geninfo.controller.html',
                            controllerAs: GeninfoStateCtrl
                        })

                    $locationProvider.html5Mode({
                        enabled: true,
                        requireBase: false
                    });

                })

            .controller('GeninfoStateCtrl', GeninfoStateCtrl);
     */

    angular
           .module('ccm')
           .config(function (ngFabFormProvider){
                    ngFabFormProvider.extendConfig({
                       // validationsTemplate : 'scripts/routes/geninfo/ccm-validation-template.html'
                       globalFabFormDisable: true
                    });
                })
           .controller('GeninfoStateCtrl', GeninfoStateCtrl);

    /* @ngInject */
    function GeninfoStateCtrl() {
        var vm = this;
//        vm.formDisabled;
//        vm.defaultFormOptions = ngFabForm.config;
//        vm.customFormOptions = angular.copy(ngFabForm.config);

        console.log('controller called');
        vm.sexes = ['Male', 'Female'];
    }
})();
