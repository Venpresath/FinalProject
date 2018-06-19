"use strict";
{
    let service = function ($http) {
        let vm = this;
        let trackId= 0;
        const APIKey = "c42ef466fff57d1c817a1efd2f2ebf38";

    //    let beId= function(){
    //         return trackId
    //     }
       
        let setId = function(newId){
            trackId = newId
        }


        let getLyrics = function (trackId) {
                let url = `https://cors-anywhere.herokuapp.com/api.musixmatch.com/ws/1.1/track.snippet.get?format=json&track_id=${trackId}&apikey=f4e510d4d5b6f478a5d43f2bbc92a036`
                return $http.get(url).then(function (response) {
                    console.log(url);
                    
                    let lyrics = response.data.message.body.snippet.snippet_body;
                    
                    console.log(lyrics);
                    return lyrics;
                });
            }
        
            let getTrackId = function (artist) {
                var artist = artist.split(" ").join("%20");
                let url = `https://cors-anywhere.herokuapp.com/api.musixmatch.com/ws/1.1/track.search?format=json&q_artist=${artist}&apikey=c42ef466fff57d1c817a1efd2f2ebf38`
                return $http.get(url).then(function(response){
                    console.log(response.data.message.body.track_list[0].track.artist_name);
                    let trackNum = response.data.message.body.track_list[0].track.track_id;
                    getLyrics(trackNum);
                    return trackNum;
                });
            }


                return {
                    getLyrics,
                    getTrackId,
                    // beId,
                    setId
                };
            
        }
        angular
            .module("app")
            .factory("service", service);
    }
