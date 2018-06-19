"use strict";
{
    let service = function ($http) {
        let vm = this;
        let trackId = 0;
        const APIKey = "c42ef466fff57d1c817a1efd2f2ebf38";
        console.log("hi kelly")

        let beId = function () {
            return trackId
        }
        let setId = function (newId) {
            trackId = newId
        }

        // getLyrics is pulling in from the API a random snippet of lyrics
        // use this url to get a snipet of lyrics 
        let getLyrics = function (trackId) {
            let url = `https://cors-anywhere.herokuapp.com/api.musixmatch.com/ws/1.1/track.snippet.get?format=json&track_id=${trackId}&apikey=c42ef466fff57d1c817a1efd2f2ebf38`
            return $http.get(url).then(function (response) {
                console.log(url);

                let lyrics = response.data;
                return lyrics[0];
                console.log("Hi Dj");
            });
        }



        let getTrackId = function (artist) {
            var artist = artist.split(" ").join("%20");
            let url = `https://cors-anywhere.herokuapp.com/api.musixmatch.com/ws/1.1/track.search?format=json&q_artist=${artist}&apikey=c42ef466fff57d1c817a1efd2f2ebf38`
            return $http.get(url).then(function (response) {
                console.log(response.data.message.body.track_list[0].track.artist_name);
                let trackNum = response.data.message.body.track_list[0].track.track_id;
                return trackNum;
            });
            // beginning the language filter function, unecessary?
            // ${language}

            // let filterLanguage = function (language) {
            //     let url = `https://api.musixmatch.com/ws/1.1/artist.search?format=jsonp&callback=callback&q_artist=katy%20perry&apikey=c42ef466fff57d1c817a1efd2f2ebf38
            // `
            //     return $http.get(url).then(function (response) {
            //         console.log(response.callback.message.header.body.artist_list.artist.artist_name_translation_list.artist_alias.list.primary_genres.sedondary_genres.artist_credits.);
            //         console.log("hi");
            //     });

            }
        
    
        return {
            getLyrics,
            getTrackId,
            beId,
            setId
        };
    }
    angular
        .module("app")
        .factory("service", service);
}
