"use strict";
{
    let game = {
        template: `<div ng-init="$ctrl.getTrackId()"> 
        <p>Lyric: {{$ctrl.lyrics}} </p>
        <p> ID: {{$ctrl.songNum}}</p>
        <p> Song Name: {{$ctrl.songName}}</p>
        <input type = "text" placeholder="Guess the song" ng-model="$ctrl.guess"><button ng-click="$ctrl.getSongName($ctrl.songNum); $ctrl.getTrackId($ctrl.songNum)">GEET'EM</button>
        <p> Result: {{$ctrl.result}} {{$ctrl.condition}}</p>
        </div>`,
// empty strings are created here that are filled in when a specific artist, lyric, guess is called. 
        controller: function (service) {

            let vm = this;
            vm.artist = "";
            vm.lyrics = "";
            vm.guess = "";
            vm.result = "";
            vm.wins = 0;
            vm.losses = 0;
            vm.condition = "";
// guessSong function will determine if the users answer is correct or not and give an appropriate response
            vm.guessSong = function (guess) {
                if (guess.toLowerCase() == vm.songName.toLowerCase()) {
                    console.log("correct");
                    vm.result = "correct";
                    vm.wins++;
                    if (vm.wins === 3){
                        vm.condition = "you win!";
                        vm.wins = 0;
                        vm.losses = 0;                       
                    }
                    
                    return vm.result;
                } else {
                    console.log("guess again");
                    vm.result = "guess again";
                    vm.losses++;
                        if (vm.losses === 3){
                            vm.condition = "you lose!";
                            // if user lose count reaches 3 reset wins and losses 0. Reset start again. 
                            vm.wins = 0;
                            vm.losses = 0;
                            
                        }
                    return vm.result;
                } 
            }
// getLyrics using the trackId to get lyrics
            vm.getLyrics = function () {
                service.getLyrics(vm.songNum).then(function () {
                    vm.lyrics = service.beLyrics();
                    return vm.lyrics;
                });
            }
            vm.test = function () {
                console.log("hi");
            }
            vm.getArtist = function () {
                vm.artist = service.beArtist();
            }
// getSongName using the trackId to getSongName
            vm.getSongName = function () {
                service.getSongName(vm.songNum).then(function (response) {
                    vm.songName = response;
                    vm.guessSong(vm.guess);
                    console.log(vm.guess);
                    return vm.songName;
                    
                });                
            }
// getTrackId is giving the song a trackId based on the artist name
            vm.getTrackId = function () {
                service.getTrackId(service.beArtist())
                    .then(function (response) {
                        console.log("It's working");
                        vm.songNum = response;
                        vm.getLyrics();
                        return vm.songNum;
                    });
            }

            // vm.disableButton = function() {
            //     if (){

            //     }
            // }

        }
    };

    game.$inject = ["service"];

    angular
        .module("app")
        .component("game", game)
}