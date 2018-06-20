"use strict";
{
    
    
    
    let home = {
        template: `<div>
        <input type="text" placeholder="Enter an artist" ng-model="$ctrl.artist"/><button ng-click="$ctrl.getTrackId(); $ctrl.getLyrics()">Submit</button>
        <p>Lyric: {{$ctrl.lyrics}}</p>
        <p> Song: {{$ctrl.songNum}</p>
        <button>Submit</button>
        </div>`,

        controller: function(service) {
            let vm = this;   
            vm.artist = "";
            vm.songNum = 0;


            vm.getTrackId = function(artist){
                service.getTrackId(vm.artist)
                .then(function(response){
                    vm.songNum= response; 
                    service.beId();
                    service.setId(vm.songNum);
                    return songNum;
                });
            }
            
            // vm.callAPI = service.getAPI();
            vm.getLyrics = function(trackId){
                service.getLyrics(songNum)
                .then(function(response){
                    vm.lyrics = response;
                    console.log(url);
                });
            } 


            // vm.callAPI.then(function(response){
            //     vm.song = response;
            // });
            // vm.callLyrics().then(function(response){
            //     console.log("hi");
            //     vm.lyrics = response;
            // });

//             vm.callAPI.then(function(response){
//                 vm.song = response;
//             });
// >>>>>>> ecff9b3566a0151e996847424a59d4b96a807cac
		}
	};

    home.$inject = ["service"];

    angular
    .module("app")
    .component("home", home)
}