"use strict";
{   
    let home = {
        template: `<div>
        <h1>Hi the API is working!</h1>
        <input type="text" placeholder="Enter an artist" ng-model="$ctrl.artist"/><button ng-click="$ctrl.getTrackId(); $ctrl.callLyrics()">Submit</button>
        <p>Lyric: {{$ctrl.lyrics}}</p>
        <p> Song: {{$ctrl.songNum}}</p>
        </div>`,

        controller: function(service) {
            let vm = this;   
            vm.artist = "";
            
            // callLyrics function is returning the snipet of lyrics coming from the service 

            // vm.callAPI = service.getAPI();
            vm.callLyrics = function(){
                service.getLyrics(service.beId())
                .then(function(response){
                    
                    vm.lyrics = response;
                    return vm.lyrics;
                });
            } 
            // getTrackId returns calls beId and setId from the service with the result being obtaining the trackId and the newTrackId to be passed back.  

            vm.getTrackId = function(artist){
                service.getTrackId(vm.artist)
                .then(function(response){
                    vm.songNum= response; 
                    service.beId();
                    service.setId(vm.songNum);
                });
            }
		}
	};

    home.$inject = ["service"];

    angular
    .module("app")
    .component("home", home)
}