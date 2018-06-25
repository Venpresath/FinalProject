"use strict";
{
    let settings = {
        template: `<a href="#!/game"><button ng-click="$ctrl.difficulty(3,3)">Easy</button><a>
       <a href="#!/game"> <button ng-clck="$ctrl.difficulty(5,3)">Medium</button></a>
       <a href="#!/game"> <button ng-click="$ctrl.difficulty(7,3)">Hard</button></a>
       <a href="#!/game"> <button ng-click="$ctrl.difficulty(10,1)">Insane</button></a>`,


        controller: function(service){
            let vm = this;
            vm.difficulty= 0;
            vm.easy= 3;
            vm.medium= 5;
            vm.hard= 7;
            vm.insane= 9;

            vm.difficulty = function(a, b){
                let gameType = {win:a, loss: b}
                service.difficultyType(gameType);
                console.log(gameType);
                return gameType; 

            }           

    }
};

    settings.$inject = ["service"];


 angular
        .module("app")
        .component("settings", settings)
}