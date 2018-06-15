"use strict";
{
    angular
        .module("app")
        .config(($routeProvider) => {
			$routeProvider
			.when("/myList", {
				template: "<movies></movies>"
			})
			.when("/watchList", {
				template: "<watch-list></watch-list>"
			})
			.when("/search", {
				template: "<search></search>"
			})
			.when("/more", {
				template: "<more></more>"
			})
			.otherwise({ redirectTo: "/search" });
	});
}

// we will need to rename the files when we have recreated the files