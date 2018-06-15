"use strict";
{
    let home = {
        template: `<div>
        <h1>Hi the API is working!</h1>
        </div>`,

        controller: function() {
            let vm = this;   
            vm.getAPI= service.getAPI();       

		}
	};

    home.$inject = ["service"];

    angular
    .module("app")
    .component("home", home)
}