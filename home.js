"use strict";
{



    let home = {
        template: `<div>
        <h1>Hi the API is working!</h1>
        <input type="text" placeholder="Enter an artist" ng-model="$ctrl.artist"/><button ng-click="$ctrl.getTrackId($ctrl.songNum)">Submit</button>
        <p>Lyric: {{$ctrl.lyrics}}</p>
        <p> ID: {{$ctrl.songNum}}</p>
        <p> Song Name: {{$ctrl.songName}}</p>
        <input type = "text" placeholder="Guess the song" ng-model="$ctrl.guess"><button ng-click="$ctrl.getSongName($ctrl.songNum)">GEET'EM</button>
        </div>`,

        controller: function (service) {
            let vm = this;
            vm.artist = "";
            vm.lyrics = "";
            vm.guess = "";

            vm.guessSong = function (guess) {
                if (guess === vm.songName) {
                    // console.log("correct");
                } else {
                    // console.log("guess again");
                }
            }

            vm.getLyrics = function () {
                service.getLyrics(vm.songNum).then(function () {
                    vm.lyrics = service.beLyrics();
                    return vm.lyrics;
                });
            }

            vm.getSongName = function () {
                service.getSongName(vm.songNum).then(function (response) {
                    vm.songName = response;
                    vm.guessSong(vm.guess);
                    return vm.songName;
                    
                });
                
            }

            vm.getTrackId = function () {
                service.getTrackId(vm.artist)
                    .then(function (response) {
                        vm.songNum = response;
                        vm.getLyrics();
                        return vm.songNum;
                    });
            }

        }
    };

    home.$inject = ["service"];

    angular
        .module("app")
        .component("home", home)
}