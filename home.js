"use strict";
{
    let home = {
        template: `<div>
        <h1>Hi the API is working!</h1>
        <p>Here's an artist: {{$ctrl.song}}</p>
        <input type="text" placeholder="Enter an artist" ng-model="$ctrl.artist"/><button>Submit</button>
        <p>Lyric: {{$ctrl.lyrics}}</p>
        </div>`,

        controller: function(service) {
            let vm = this;   
            vm.artist = "";
            vm.callAPI = service.getAPI();
            vm.callLyrics = service.getLyrics(vm.artist);
            vm.callAPI.then(function(response){
                vm.song = response;
            });
            vm.callLyrics.then(function(response){
                vm.lyrics = response;
            });
		}
	};

    home.$inject = ["service"];

    angular
    .module("app")
    .component("home", home)
}