"use strict";
{
    
    
    
    let home = {
        template: `<div>
        <h1>Hi the API is working!</h1>
        <input type="text" placeholder="Enter an artist" ng-model="$ctrl.artist"/><button ng-click="$ctrl.getTrackId($ctrl.songNum)">Submit</button>
        <p>Lyric: {{$ctrl.lyrics}}</p>
        <p> Song: {{$ctrl.songNum}}</p>
        </div>`,

        controller: function(service) {
            let vm = this;   
            vm.artist = "";
            vm.lyrics = "";
            
            vm.getLyrics = function(){
                service.getLyrics(vm.songNum).then(function(){
                vm.lyrics = service.beLyrics();
                return vm.lyrics;
                })
            } 

            vm.getTrackId = function(){
                service.getTrackId(vm.artist)
                .then(function(response){
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