"use strict";
{
    let service = function ($http) {
        let vm = this;
        const APIKey = "e89505a720549b7b6b4a37d28142e420";


        let getAPI = function(){
            let url = `https://api.musixmatch.com/ws/1.1/artist.search?format=jsonp&callback=callback&q_artist=kanye&apikey=${APIKey}`;
            return $http.get(url).then(function(response) {  
            console.log(response.data);
        
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

