"use strict";
{
    let settings = {
        template: `<div class="settingsContent">
        <h1>Select your Difficulty</h1>
        <a href="#!/game"><button class="difficultyButton" ng-click="$ctrl.difficulty(3,3)">Easy <span ng-show="$ctrl.txt">{{$ctrl.text}}</span></button><a>        
        <a href="#!/game"> <button class="difficultyButton" ng-click="$ctrl.difficulty(5,3)">Medium></button></a>        
        <a href="#!/game"> <button class="difficultyButton" ng-click="$ctrl.difficulty(7,3)">Hard</button></a>
        <a href="#!/game"> <button class="difficultyButton" ng-click="$ctrl.difficulty(10,1)">Insane</button></a>
        </div>`,


        controller: function(service){
            let vm = this;
            
            vm.difficulty = function(a, b){
                let gameType = {win: a, loss: b}
                service.difficultyType(gameType);
                console.log(gameType);
                return gameType; 

            }           
            vm.text = "hi"; 

            $(".difficultyButton").hover(function() {vm.txt=!vm.txt}, function() {vm.text=":)"})
 

    }
};

    settings.$inject = ["service"];


 angular
        .module("app")
        .component("settings", settings)
}
