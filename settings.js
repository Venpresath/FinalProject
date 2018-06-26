"use strict";
{
    let settings = {
        template: `<div class="settingsContent">
        <h1>Select your Difficulty</h1>
        <a href="#!/game"><button class="difficultyButton" ng-mouseenter="value=false" ng-mouseleave="value=true" ng-click="$ctrl.difficulty(3,3)">Easy<span ng-hide=value >{{$ctrl.text}}</span></button><a>        
        <a href="#!/game"> <button class="difficultyButton" ng-mouseenter="val2=false" ng-mouseleave="val2=true" ng-click="$ctrl.difficulty(5,3)">Medium<span ng-hide=val2></button></a>        
        <a href="#!/game"> <button class="difficultyButton" ng-mouseenter="val3=false" ng-mouseleave="val3=true" ng-click="$ctrl.difficulty(7,3)">Hard<span ng-hide=val3></button><</a>
        <a href="#!/game"> <button class="difficultyButton" ng-click="$ctrl.difficulty(10,1)">Insane</button></a>
        </div>`,


        controller: function(service){
            let vm = this;
            vm.text = "Rules here";
            vm.text2= "More rules";
            vm.text3="Very important rules";
            vm.difficulty = function(a, b){
                let gameType = {win: a, loss: b}
                service.difficultyType(gameType);
                console.log(gameType);
                return gameType; 

            }           

            //$(".difficultyButton").hover(function() {vm.txt=!vm.txt}, function() {vm.text=":)"})
 

    }
};

    settings.$inject = ["service"];


 angular
        .module("app")
        .component("settings", settings)
}
