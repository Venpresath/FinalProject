"use strict";
{
    let home = {
        template: `<div>
        <h1>Hi the API is working!</h1>
        <p>Here's an artist: {{$ctrl.song}}
        </div>`,

        controller: function(service) {
            let vm = this;   
            vm.callAPI = service.getAPI();
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