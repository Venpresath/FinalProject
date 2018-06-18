"use strict";
{
    let service = function ($http) {
        let vm = this;
        const APIKey = "c42ef466fff57d1c817a1efd2f2ebf38";


        let getLyrics = function (artist) {
                var artist = artist.split(" ").join("%20");
                let url = `https://cors-anywhere.herokuapp.com/api.musixmatch.com/ws/1.1/matcher.lyrics.get?format=json&q_artist=${artist}&apikey=${APIKey}`;
                return $http.get(url).then(function (response) {
                    console.log(url);
                    
                    let lyrics = response.data.message.body.lyrics.lyrics_body;
                    lyrics = lyrics.split("******* This Lyrics is NOT for Commercial use *******");
                    return lyrics[0];
                });
            }

                return {
                    getLyrics
                };
            
        }
        angular
            .module("app")
            .factory("service", service);
    }
