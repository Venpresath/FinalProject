"use strict";
{
    let home = {
        template: `<div>
        <h1>Hi the API is working!</h1>
        <p>Here's an artist: {{$ctrl.song}}</p>
        <input type="text" placeholder="Enter an artist" ng-model="$ctrl.artist"/><button ng-click="$ctrl.callLyrics()">Submit</button>
        <p>Lyric: {{$ctrl.lyrics}}</p>
        </div>`,

        controller: function(service) {
            let vm = this;   
            vm.artist = "";
            vm.callAPI = service.getAPI();
            vm.callLyrics =function(re){
                service.getLyrics(vm.artist)
                .then(function(response){
                    console.log("hi");
                    vm.lyrics = response;
                    });
            } 
            vm.callAPI.then(function(response){
                vm.song = response;
            });
		}
	};

    home.$inject = ["service"];

    angular
    .module("app")
    .component("home", home)
}