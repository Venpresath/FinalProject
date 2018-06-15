"use strict";
{
    let home = {
        template: `<div>
        <h1>Hi the API is working!</h1>
        </div>`,

        controller: function(service) {
            let vm = this;   
            vm.callAPI = service.callAPI();
            vm.callAPI.then(function(response){
                vm.song = response.data;
            });
		}
	};

    home.$inject = ["service"];

    angular
    .module("app")
    .component("home", home)
}