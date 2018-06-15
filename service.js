"use strict";
{
    let service = function ($http) {
        let vm = this;
        const APIKey = "e89505a720549b7b6b4a37d28142e420";


        let getAPI = function(){
            return $http.get(url).then(function (response) {
           let url = `https://api.musixmatch.com/ws/1.1/artist.search?format=jsonp&callback=callback&q_artist=kanye&apikey=${APIKey}`;
            console.log(response);
        
        })
    }
        
return {
    getAPI
}

    }
    angular
        .module("app")
        .factory("service", service);
}

