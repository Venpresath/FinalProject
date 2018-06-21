"use strict";
{
    
    
    
    let home = {
        template: `<div>
<<<<<<< HEAD
        <h1>Hi the API is working!</h1>
        <input type="text" placeholder="Enter an artist" ng-model="$ctrl.artist"/><button ng-click="$ctrl.callLyrics()">Submit</button>
        <p>Lyric: {{$ctrl.lyrics}}</p>
=======
        <input type="text" placeholder="Enter an artist" ng-model="$ctrl.artist" class="input"/> <a href= "#!/game"><button class="mybtn" ng-click="$ctrl.updateArtist($ctrl.artist)">Submit</button></a>
>>>>>>> d8e003b2653ce687391557bc5ba27f97bc3daa98
        </div>`,
        // empty strings are created here that are filled in when a specific artist, lyric, guess is called. 
        controller: function (service) {
            let vm = this;
            vm.artist = "";

<<<<<<< HEAD
        controller: function(service) {
            let vm = this;   
            vm.artist = "";
            // vm.callAPI = service.getAPI();
            vm.callLyrics = function(artist){
                service.getLyrics(vm.artist)
                .then(function(response){
                    
                    vm.lyrics = response;
                    return vm.lyrics;
                });
            } 
            // vm.callAPI.then(function(response){
            //     vm.song = response;
            // });
            // vm.callLyrics().then(function(response){
            //     console.log("hi");
            //     vm.lyrics = response;
            // });
		}
	};
=======
            vm.updateArtist = function (artist) {
                service.setArtist(artist);
                console.log(service.beArtist());
            }
        }
    };
>>>>>>> d8e003b2653ce687391557bc5ba27f97bc3daa98

    home.$inject = ["service"];

    angular
        .module("app")
        .component("home", home)
}