"use strict";
{
    let game = {
        template: `
        <div ng-init="$ctrl.getTrackId()">
        <div ng-show="$ctrl.load" class="preloader">
        <img class="loadingImage" src="loader.gif">
        </div>
            <div class="tracker">
                <span ng-repeat="conds in $ctrl.count"class = "winContainer"><i class={{conds.class}}></i></span>
                </div>
                <div class="content">
                
                    <p>Lyric: {{$ctrl.lyrics}} </p>
                    <input class = "input" type = "text" placeholder="Guess the song" ng-model="$ctrl.guess"><button class="mybtn" ng-click="$ctrl.getSongName($ctrl.songNum); $ctrl.getTrackId($ctrl.songNum)">GEET'EM</button>
                    <p> Result: {{$ctrl.result}} {{$ctrl.condition}}</p>
                </div>
            <div class="background" ng-show="$ctrl.background">
            <div class="modal" ng-show="$ctrl.show">{{$ctrl.modalText}}<br/><img src="{{$ctrl.resultImg}}" width="150px"><a href="#!/home"><button class="playAgain">Play again?</button></a></div></div>

        </div>
        `,
        // empty strings are created here that are filled in when a specific artist, lyric, guess is called. 
        controller: function (service) {

            let vm = this;
            vm.load = true;
            vm.artist = "";
            vm.artistid = "";
            vm.lyrics = "";
            vm.guess = "";
            vm.result = "";
            vm.wins = 0;
            vm.losses = 0;
            vm.condition = "";
            vm.count = [];
            vm.modalText = "";
            vm.resultImg = "";
            vm.gameType = service.difficulty();

            // guessSong function will determine if the users answer is correct or not and give an appropriate response
            vm.guessSong = function (guess) {
                if (guess.indexOf("?") > -1) {
                    guess = guess.substring(0, guess.indexOf("?"));
                    return guess;
                }
                if (guess.toLowerCase() == vm.songName.toLowerCase()) {
                    console.log("correct");
                    vm.result = "correct";
                    vm.wins++;
                    if (vm.wins === vm.gameType.win) {
                        vm.condition = "you win!";
                        vm.wins = 0;
                        vm.losses = 0;

                        $(".mybtn").prop('disabled', true);
                        vm.modalText = "You win!";
                        vm.resultImg = "https://i.gifer.com/Wvua.gif";
                        vm.show = !vm.show;
                        vm.background = !vm.background;
                    }
                    vm.count.push({ class: "fas fa-trophy" });
                    console.log(vm.count);
                    return vm.result;
                } else {
                    console.log("guess again");
                    vm.count.push({ class: "fas fa-times" });
                    console.log(vm.count);

                    vm.results = [
                        `Do you even listen to ${service.beArtist()}? The answer was: ${vm.songName}.`,
                        `Dang, even my mother knew that this song was by ${service.beArtist()}. The song is: ${vm.songName}.`,
                        `Hahaha.. NOPE!! This song is by ${service.beArtist()}. The song is called: ${vm.songName}.`
                    ];

                    //randomize lose response
                    let randRes = function () {
                        var i = Math.floor(Math.random() * (vm.results.length - 1));
                        return vm.results[i];
                    }

                    //change vm.result to equal the randomized index from 'results'
                    vm.result = randRes();

                    vm.losses++;
                    if (vm.losses === vm.gameType.loss) {
                        vm.condition = "you lose!";
                        // if user lose count reaches 3 reset wins and losses 0. Reset start again. 
                        vm.wins = 0;
                        vm.losses = 0;
                        $(".mybtn").prop('disabled', true);
                        vm.modalText = "You are such a loser! The correct answer was: " + vm.songName;
                        vm.resultImg = "https://media1.popsugar-assets.com/files/thumbor/B8lOru9rf0j1aOafrCxnqK6fKeA/fit-in/1200x630/filters:format_auto-!!-:strip_icc-!!-:fill-!white!-/2017/05/12/985/n/3019466/53c5add94ca9772d_pizza2/i/Pizza-you-when-youre-sad.gif";
                        vm.show = !vm.show;
                        vm.background = !vm.background;

                    }

                }
            }
            // getLyrics using the trackId to get lyrics
            vm.getLyrics = function () {
                service.getLyrics(vm.songNum).then(function (response) {
                    if (response === "") {
                        console.log("Lyrics not found");
                    }
                    vm.lyrics = service.beLyrics();
                    return vm.lyrics;
                }).finally(function () {
                    vm.load = false;
                });
            }

            vm.getArtist = function () {
                vm.artist = service.beArtist();
            }
            // getSongName using the trackId to getSongName
            vm.getSongName = function () {
                service.getSongName(vm.songNum).then(function (response) {
                    vm.songName = response;
                    vm.guessSong(vm.guess);
                    console.log(vm.guess);
                    return vm.songName;

                });
            }
            // getTrackId is giving the song a trackId based on the artist name
            vm.getTrackId = function () {
                service.getTrackId(service.beArtist())
                    .then(function (response) {
                        console.log("It's working");
                        vm.songNum = response;
                        vm.getLyrics();
                        return vm.songNum;
                    });
            }

            //JQuery Stuff
            //Clears value from input on click
            $("button").on("click", function () {
                $("input").val("");
            });
            $(".playAgain").on("click", function () {
                window.location.reload();
            });



            $('input').keypress(function (e) {
                if (e.which == 13) {
                    $('.mybtn').click();
                    return false;
                }
            });

        }
    };

    game.$inject = ["service"];

    angular
        .module("app")
        .component("game", game)
}