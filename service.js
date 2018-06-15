// "use strict";
// {
//     let service = function ($http) {
//         let vm = this;
//         const APIKey = "e89505a720549b7b6b4a37d28142e420";
        
//         const getData = function () {
//             return data;
//         };
//         //Update data
//         const setData = function (newData) {
//             data = newData;
//         };

//         let getAPI = function () {
//             $http.get(url).then(function (response) {
//                 let url = `https://api.musixmatch.com/ws/1.1/artist.search?format=jsonp&callback=callback&q_artist=kanye&apikey=${APIKey}`;
//                 console.log(response);

//             });
//         },

//         return {
//             getAPI
//         }

//     }
//     angular
//         .module("app")
//         .factory("service", service);
// }

"use strict";
{
    function service($http) {
        
        const getSong = function () {
            return song;
        }
        const setSong = function (song) {
            song = newSong;
        }

        const APIKey = "e89505a720549b7b6b4a37d28142e420";

        const callAPI = function(){
            let url = `https://api.musixmatch.com/ws/1.1/artist.search?format=jsonp&callback=callback&q_artist=kanye&apikey=${APIKey}`;
            return $http.get(url);
            console.log(response);
        }

        return{
            setSong,
            getSong,
            callAPI
        }
    }
    angular
        .module("app")
        .factory("service", service);
}

