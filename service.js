"use strict";
{
    let service = function ($http) {
        let vm = this;
        let trackId= 0;
        let lyrics = "";
        const APIKey = "c42ef466fff57d1c817a1efd2f2ebf38";

       let beLyrics= function(){
            return lyrics;
        }
       
        let setLyrics = function(newlyrics){
            lyrics = newlyrics;
        }

        //

        let getLyrics = function (trackId) {
                let url = `https://cors-anywhere.herokuapp.com/api.musixmatch.com/ws/1.1/track.snippet.get?format=json&track_id=${trackId}&apikey=c42ef466fff57d1c817a1efd2f2ebf38`
                return $http.get(url).then(function (response) {
                    
                    let lyrics = response.data.message.body.snippet.snippet_body;
                    setLyrics(lyrics);
                    return lyrics;
                });
            }
        
            let getTrackId = function (artist) {
                var artist = artist.split(" ").join("%20");
                let url = `https://cors-anywhere.herokuapp.com/api.musixmatch.com/ws/1.1/track.search?format=json&q_artist=${artist}&s_track_rating=desc&apikey=c42ef466fff57d1c817a1efd2f2ebf38`
                return $http.get(url).then(function(response){
                    console.log(response.data.message.body.track_list[0].track.artist_name);
                    let trackNum = response.data.message.body.track_list[0].track.track_id;
                    getLyrics(trackNum);
                    return trackNum;
                });
            }

            let getSongName = function(trackId){
                let url = `https://cors-anywhere.herokuapp.com/api.musixmatch.com/ws/1.1/track.get?format=json&track_id=${trackId}&apikey=c42ef466fff57d1c817a1efd2f2ebf38`;
                return $http.get(url).then(function(response){
                    console.log(url);
                    let songName = response.data.message.body.track.track_name;
                    return songName;
                });
            }

                return {
                    getLyrics,
                    getTrackId,
                    beLyrics,
                    setLyrics,
                    getSongName
                };
            
        }
        angular
            .module("app")
            .factory("service", service);
    }
