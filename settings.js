"use strict";
{
    let settings = {
        template: `<div class="settingsContent">
        <h1>Select your Difficulty</h1>
        <a href="#!/game"><button class="difficultyButton" ng-click="$ctrl.difficulty(3,3)">Easy</button><a>
        <p class="gamerules1">Try to get three right before you get three wrong</p>
        <a href="#!/game"> <button class="difficultyButton" ng-click="$ctrl.difficulty(5,3)">Medium</button></a>
        <p class="gamerules2">Try to get three right before you get three wrong</p>
        <a href="#!/game"> <button class="difficultyButton" ng-click="$ctrl.difficulty(7,3)">Hard</button></a>
        <p class="gamerules3">Try to get three right before you get three wrong</p>
        <a href="#!/game"> <button class="difficultyButton" ng-click="$ctrl.difficulty(10,1)">Insane</button></a>
        <p class="gamerules2">Try to get three right before you get three wrong</p>
       </div>`,


        controller: function(service){
            let vm = this;
            
            vm.difficulty = function(a, b){
                let gameType = {win: a, loss: b}
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
