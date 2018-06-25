"use strict";
{
    let settings = {
        template: `<a href="#!/game"><button ng-click="$ctrl.difficulty(easy)">Easy</button><a>
       <a href="#!/game"> <button ng-clck="$ctrl.difficulty(medium)">Medium</button></a>
       <a href="#!/game"> <button ng-click="$ctrl.difficulty(hard)">Hard</button></a>
       <a href="#!/game"> <button ng-click="$ctrl.difficulty(insane)">Insane</button></a>`,


        controller: function(){
            let vm = this;
            vm.difficulty= 0;
            vm.easy= 3;
            vm.medium= 5;
            vm.hard= 7;
            vm.insane= 9;
            // vm.standardWrong= 3;
            // vm.insaneWrong= 1;

            vm.difficulty = function(difficulty){
                    let 
            }           

    }
};

    settings.$inject = ["service"];


 angular
        .module("app")
        .component("settings", settings)
}
