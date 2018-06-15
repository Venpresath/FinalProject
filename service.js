"use strict";
{
    let service = function ($http) {
        let vm = this;
        const APIKey = "e89505a720549b7b6b4a37d28142e420";


        let callAPI = function(){
            let url = `https://api.musixmatch.com/ws/1.1/artist.search?format=json?q_artist=kanye&apikey=${APIKey}`;
            // $http.jsonp(url, {jsonpCallbackParam: 'callback'})
            return $http.get(url).then(function(response) {  
            // let sampleArtist = response.data.message.body.artist_list[0].artist.artist_name;
            console.log(response.data);
            // return sampleArtist;
        });
    }
        
return {
    callAPI
}

    }
    angular
        .module("app")
        .factory("service", service);
}