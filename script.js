$(document).ready(function(){

//TODO MORE THAN ONE FILTER AND CAN SORT THE CATEGORIES YOU WANT JUST KEEP THE WHITE LIGHT ON BEHIND ACTIVE FILTERS
//TODO SHOW MOVIES WHEN PAGE LOADS RIGHT NOW #MOVIES IS BLANK ON LOAD
//TODO OPTIONS FOR OTHER COUNTRIES
//TODO ADD SHOWS AND MOVIES FROM OTHER COUNTRIES LET USER CHOOSE COUNTRY
//TODO GET RID OF WHITE BORDER ON FIREFOX AROUND MODULE MOVIES? CHECK GITHUB ALREADY DID FOR OTHER MOVIE SITE
//TODO ON LARGE SCREENS MOVE PLAY AND ADD BUTTONS TO BOTTOM 
//if any movies saved from other sessions, paste them into #saved
//savedMovies is the localstorage key for the innerhtml of #saved from the last session
//change from sessionStorage to localStorage when done programming
var sm = localStorage.getItem("savedMovies");
$("#saved").append(sm);


//array of movies
var movies = [
//from http://www.digitaltrends.com/home-theater/whats-new-on-netflix-shows-movies/
//sept 1 and 2

//TODO ISSUE LOADING MOVIES WITH SPECIAL CHARACTERS (BILL & TEDS, YOUNG & HUNGRY)
//JUST CHANGE & TO %26 (looks like this is what the omdb api does)
//THIS IS A KEY ON WHAT TO CHANGE SPECIAL CHARACTERS TO: http://www.w3schools.com/tags/ref_urlencode.asp
//FIX U571 LINK WORKS ON IMDB API
"The Amityville Horror",
"Babel",
"Bayou Maharajah",
"Bill %26 Ted’s Bogus Journey",
"Bratz: The Movie ",
"Burn, Burn, Burn ",
"Cats %26 Dogs ",
"Crashing",
"Defiance ",
"Easy Fortune Happy Life ",
"Europe’s Last Great Wilderness",
"The Fierce Wife",
"Footloose",
"Full Out",
"Game Winning Hit",
"Heartland",
"Hellevator",
"Hoot",
"Hope Floats",
"I Am the Ambassador",
"Indochina’s Wild Heart",
"The IT Crowd",
"Jaws",
"Jaws 2",
"Jaws 3 ",
"Jaws: The Revenge",
"Joyful Noise",
"Keepers of the Game",
"Last Holiday",
"Lucky Days",
"Man on Wire",
"Milk Money",
"Practical Magic",
"Road Trip",
"Sam Kinison: Breaking the Rules",
"Saving Private Ryan",
"Scary Movie 2",
"Shameless",
"Stomp the Yard",
"Sweeney Todd",
"Top Gun",
"True Grit",
"U­-571",
"The Wicker Man",
//TODO CHECK IF THE BELOW LINKS WORK
 "Wild Madagascar",
"The Womanizer",
"The Year of Happiness and Love",
"Baby Daddy",
"Chef’s Table",
"Kazoops",
"Kulipari",
"Narcos",
"Young %26 Hungry",
];


//empty array to store relevant movie info
var movieInfo = [];


loadMovieData();




function noMatches(){
  var moduleMovieCount = document.getElementById("movies").getElementsByClassName("module-movie");
  if(moduleMovieCount.length<=0){
  $("#movies").addClass("no-matches");
} else{
  $("#movies").removeClass("no-matches");
}
}

function imdbSort(){
    $("#movies").empty();
  
//slice makes new array, filter gets rid of the N/A and null values (i.e. imdbRating: N/A), sort orders it

imdbArray = movieInfo.slice().filter(function (el) {
  return el.ImdbRating >=0;
}).sort(function(a, b){
    var a1= a.ImdbRating, b1= b.ImdbRating;
    if(a1== b1) return 0;
    return a1<b1? 1: -1;
});
  
  for (i = 0; i < imdbArray.length; i++) {
  //calling template function and passing it the data
  var html = template(imdbArray[i]);
  $("#movies").append(html);
  $(".movie-imdb-rating:empty").parents(".module-movie").hide();
$(".movie-imdb-rating:contains('N')").closest(".module-movie").hide();
$(".movie-metascore-rating:contains('N')").remove().addClass("clearBefore");
noMatches();


};

};

function metascoreSort(){
	//slice makes new array, filter gets rid of the N/A and null values (i.e. imdbRating: N/A), sort orders it
metascoreArray = movieInfo.slice().filter(function (el) {
  return el.MetascoreRating >=0;
}).sort(function(a, b){
    var a1= a.MetascoreRating, b1= b.MetascoreRating;
    if(a1== b1) return 0;
    return a1<b1? 1: -1;
});

    $("#movies").empty();

   for (i = 0; i < metascoreArray.length; i++) {
  //calling template function and passing it the data
  var html = template(metascoreArray[i]);
$("#movies").append(html);
$(".movie-metascore-rating:contains('N')").closest(".module-movie").hide();
$(".movie-metascore-rating:empty").parents(".module-movie").hide();
$(".movie-imdb-rating:empty").remove();
$(".movie-metascore-rating:empty").remove();
noMatches();

};
};


function netflixRatingSort() {
  $("#movies").empty();
  data.movies.sort(function(a,b){
    return b.rating-a.rating
  });
  for(i=0; i<data.movies.length; i++){
    var html = template(data.movies[i]);
    $("#movies").append(html);
      $(".movie-netflix-rating:empty").parents(".module-movie").hide();
$(".movie-imdb-rating:empty").remove();
$(".movie-metascore-rating:empty").remove();
noMatches();

  };
};


function popularSort(){
  console.log("mI length: " + movieInfo.length);
    $("#movies").empty();
  for (i = 0; i < movieInfo.length; i++) {
  //calling template function and passing it the data
  var html = template(movieInfo[i]);
  $("#movies").append(html);
$(".movie-metascore-rating:contains('N')").remove().addClass("clearBefore");
$(".movie-metascore-rating:empty").remove().addClass("clearBefore");

$(".movie-imdb-rating:contains('N')").remove().addClass("clearBefore");
$(".movie-imdb-rating:empty").remove().addClass("clearBefore");

noMatches();

};
};

function showDrama(){
  $("#movies").empty();
 
  for (i = 0; i < movieInfo.length; i++) {

  //calling template function and passing it the data
  var html = template(movieInfo[i]);
  $("#movies").append(html);

};


//removes all .module-movie elements that are inside #movies and do not contain the string "Dramas"
$("#movies .module-movie:not(:contains('Drama'))").remove();
$(".movie-metascore-rating:contains('N')").remove().addClass("clearBefore");
$(".movie-metascore-rating:empty").remove().addClass("clearBefore");

$(".movie-imdb-rating:contains('N')").remove().addClass("clearBefore");
$(".movie-imdb-rating:empty").remove().addClass("clearBefore");

noMatches();

}

function showComedy(){
    $("#movies").empty();

  for (i = 0; i < movieInfo.length; i++) {

  //calling template function and passing it the data
  var html = template(movieInfo[i]);
  $("#movies").append(html);
};
$("#movies .module-movie:not(:contains('Comedy'))").remove();
$(".movie-metascore-rating:contains('N')").remove().addClass("clearBefore");
$(".movie-metascore-rating:empty").remove().addClass("clearBefore");

$(".movie-imdb-rating:contains('N')").remove().addClass("clearBefore");
$(".movie-imdb-rating:empty").remove().addClass("clearBefore");

noMatches();

}

function showAction(){
  //empty all the modules from movies
    $("#movies").empty();

//loop through all the movies
  for (i = 0; i < movieInfo.length; i++) {

  //call template function and pass it the data
  var html = template(movieInfo[i]);
  //add modules to movies
  $("#movies").append(html);
};
//remove modules that are inside movies section that don't contain the genre in module
$("#movies .module-movie:not(:contains('Action'))").remove();

//remove empty divs
$(".movie-metascore-rating:contains('N')").remove().addClass("clearBefore");
$(".movie-metascore-rating:empty").remove().addClass("clearBefore");

$(".movie-imdb-rating:contains('N')").remove().addClass("clearBefore");
$(".movie-imdb-rating:empty").remove().addClass("clearBefore");

noMatches();

}

function showAdventure(){
    $("#movies").empty();

  for (i = 0; i < movieInfo.length; i++) {

  //calling template function and passing it the data
  var html = template(movieInfo[i]);
  $("#movies").append(html);
};
$("#movies .module-movie:not(:contains('Adventure'))").remove();
$(".movie-metascore-rating:contains('N')").remove().addClass("clearBefore");
$(".movie-metascore-rating:empty").remove().addClass("clearBefore");

$(".movie-imdb-rating:contains('N')").remove().addClass("clearBefore");
$(".movie-imdb-rating:empty").remove().addClass("clearBefore");

noMatches();

}

function showCrime(){
    $("#movies").empty();

  for (i = 0; i < movieInfo.length; i++) {

  //calling template function and passing it the data
  var html = template(movieInfo[i]);
  $("#movies").append(html);
};
$("#movies .module-movie:not(:contains('Crime'))").remove();
$(".movie-metascore-rating:contains('N')").remove().addClass("clearBefore");
$(".movie-metascore-rating:empty").remove().addClass("clearBefore");

$(".movie-imdb-rating:contains('N')").remove().addClass("clearBefore");
$(".movie-imdb-rating:empty").remove().addClass("clearBefore");

noMatches();

}

function showHorror(){
    $("#movies").empty();

  for (i = 0; i < movieInfo.length; i++) {

  //calling template function and passing it the data
  var html = template(movieInfo[i]);
  $("#movies").append(html);
};
$("#movies .module-movie:not(:contains('Horror'))").remove();
$(".movie-metascore-rating:contains('N')").remove().addClass("clearBefore");
$(".movie-metascore-rating:empty").remove().addClass("clearBefore");

$(".movie-imdb-rating:contains('N')").remove().addClass("clearBefore");
$(".movie-imdb-rating:empty").remove().addClass("clearBefore");

noMatches();





}

function showSciFi(){
    $("#movies").empty();

  for (i = 0; i < movieInfo.length; i++) {

  //calling template function and passing it the data
  var html = template(movieInfo[i]);
  $("#movies").append(html);
};
$("#movies .module-movie:not(:contains('Sci-Fi'))").remove();
$(".movie-metascore-rating:contains('N')").remove().addClass("clearBefore");
$(".movie-metascore-rating:empty").remove().addClass("clearBefore");

$(".movie-imdb-rating:contains('N')").remove().addClass("clearBefore");
$(".movie-imdb-rating:empty").remove().addClass("clearBefore");

noMatches();

}


$("#tab-drama").on("click", showDrama);
$("#tab-comedy").on("click", showComedy);
$("#tab-action").on("click", showAction);
$("#tab-adventure").on("click", showAdventure);
$("#tab-crime").on("click", showCrime);
$("#tab-horror").on("click", showHorror);
$("#tab-sci-fi").on("click", showSciFi);

//makes whole #tab-saved div clickable for #saved link, not just the text
$("#tab-saved").on("click", function(){
 window.location = $(this).find("a").attr("href"); 
});



//grabbing guts of #media-template (getter)
var source = $("#media-template").html();
//template = handlebars complile method being passed "source" from above
//template is a function we can call
var template = Handlebars.compile(source);

for (i = 0; i < movieInfo.length; i++) {

	//calling template function and passing it the data
  var html = template(movieInfo[i]);
  $("#movies").append(html);
};





/* cannot use the following for for dynamically created elements:
$(".module-movie").on("click,function(){});
you need to use $('body').on('click', ".module-movie", function(){ });
*/
  $('body').on('click', ".module-movie", function() {
    $(this).toggleClass("enlarge");
    $(this).children().toggleClass("show-description");
    $(this).find(".movie-info").toggleClass("zero-z-index");

  });





$("#tab-netflix-rating-sort").on("click", netflixRatingSort);
$("#tab-imdb-sort").on("click",imdbSort);
$("#tab-metascore-sort").on("click",metascoreSort);
$("#tab-popular-sort").on("click", popularSort);






$("#search-button").on("click", function() {
var searchInput = $("#search-bar").val();
    $("#movies").empty(),
    movieInfo.sort(function(a, b){
    return b.movieIMDB-a.movieIMDB
  });
  
  for (i = 0; i < movieInfo.length; i++) {
  //calling template function and passing it the data
  var html = template(movieInfo[i]);
  $("#movies").append(html);
};
/*  
could use this instead. it makes a new methond called containsNC
//extend $.expr[":"] <-- this is the object that stores jquery selectors; we are extending it to include the following selector
 $.extend($.expr[":"], {
  //containsNC = new selector's name
  //
  "containsNC": function(elem, i, match, array) {
    return (elem.textContent || elem.innerText || "").toLowerCase().indexOf((match[3] || "").toLowerCase()) >= 0;
  }
});
*/

//makes contains method case insensitive, changes core funtionality of the Jquery method
$.expr[":"].contains = $.expr.createPseudo(function(arg) {
    return function( elem ) {
        return $(elem).text().toUpperCase().indexOf(arg.toUpperCase()) >= 0;
    };
});

$("#movies .module-movie:not(:contains('"+searchInput+"'))").remove();
$(".movie-imdb-rating:empty").remove();
$(".movie-metascore-rating:empty").remove();
noMatches();

});



$("#search-bar").bind("keypress",function(e) {

  if(event.keyCode == 13){
    event.preventDefault();
    $("#movies").empty(),
   movieInfo.sort(function(a, b){
    return b.movieIMDB-a.movieIMDB
  });
  
  for (i = 0; i < movieInfo.length; i++) {
  //calling template function and passing it the data
  var html = template(movieInfo[i]);
  $("#movies").append(html);
};

    $("#search-button").click();
  }
}); 


$(".dialog-button-agree").on("click", function(){
  $(".dialog-container").remove();
});






//remove these divs if empty
$(".movie-imdb-rating:contains('N')").remove();
$(".movie-metascore-rating:contains('N')").remove();


//add movie to saved list
$("body").on("click", ".add-button", function(){


//clones module movie and puts the clone in the saved for later section
  var movieClone = $(this).closest(".module-movie").clone();
  $("#saved").append(movieClone);

  var savedMoviesStorage = document.getElementById("saved").innerHTML;


//get local storage to save innerHTML of #saved so then can append to #saved section when page loads
localStorage.setItem("savedMovies", savedMoviesStorage);
//setting localStorage to "savedMovies"
var sm = localStorage.getItem("savedMovies");

//without this the click on the add-button would also click the module-movie
e.stopPropagation();

});


$("body").on("click", ".netflix-play-button", function(){
//without this the click on the netflix-play-button would also click the module-movie
e.stopPropagation();

});


//remove movie from saved list
$("body").on("click", ".remove-button", function(){


   $(this).closest(".module-movie").remove();

    var savedMoviesStorage = document.getElementById("saved").innerHTML;


//get local storage to save innerHTML of #saved so then can append to #saved section when page loads
localStorage.setItem("savedMovies", savedMoviesStorage);
//setting localStorage to "savedMovies"
var sm = localStorage.getItem("savedMovies");

 

});

//click and hold to play on small screens!!!
var pressTimer=0;
$(".module-movie").on("mousedown", function() {
pressTimer=setTimeout(function() {
    $(".small-screen-play-link").addClass("visible-small-screen")
      //draw border down left up right separately to make it look like its being drawn around before link is fired


}, 500);
});


$(".module-movie").on("mouseup", function(){
clearTimeout(pressTimer);

    $(".small-screen-play-link").removeClass("visible-small-screen");

});

$(".small-screen-play-link").on("mouseup", function(){
  $(this).removeClass("visible-small-screen");
  //click link
      window.open($(this).attr('href'));

  
});





//get movie data from omdbapi
function loadMovieData(){
	for(i=0; i<movies.length; i++){
		//get movie name from array
	var movieName = movies[i];
	//create omdb api url using movieName
	//may have to change https to http
	var movieSource = "https://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&r=json";

//get all data
	$.getJSON(movieSource, function(data){

		//get string of movieTitle
		var movieTitleData = JSON.stringify((data["Title"]));
		//parse movieTitleData
		var movieTitle = JSON.parse(movieTitleData);


		var directorData = JSON.stringify((data["Director"]));
		var director = JSON.parse(directorData);

		var imdbRatingData = JSON.stringify((data["imdbRating"]));
		var imdbRating = JSON.parse(imdbRatingData);

		var metascoreRatingData = JSON.stringify((data["Metascore"]));
		var metascoreRating = JSON.parse(metascoreRatingData);

		var yearOfReleaseData = JSON.stringify((data["Year"]));
		var yearOfRelease = JSON.parse(yearOfReleaseData);


		var plotData = JSON.stringify((data["Plot"]));
		var plot = JSON.parse(plotData);

		var posterData = JSON.stringify((data["Poster"]));
		var poster = JSON.parse(posterData);

		var genreData = JSON.stringify((data["Genre"]));
		var genre = JSON.parse(genreData);

		movieInfo.push({
			Title: movieTitle, Director: director, YearOfRelease: yearOfRelease, ImdbRating: imdbRating, MetascoreRating: metascoreRating, Plot: plot, Poster: poster, Genre: genre
		});

	})
	}
	}

 /*
localStorage.setItem('savedMovies', "#saved");
var sm = localStorage.getItem('savedMovies');
console.log(sm);
*/



var arr = document.getElementsByClassName("module-movie");

$(".movie-metascore-rating:contains('N')").remove().addClass("clearBefore");
$(".movie-metascore-rating:empty").remove().addClass("clearBefore");

$(".movie-imdb-rating:contains('N')").remove().addClass("clearBefore");
$(".movie-imdb-rating:empty").remove().addClass("clearBefore");


//TODO nested if statements increasing timeout length until movieInfo.length is the correct
//call after popularSort after 1 second


setTimeout(function (){


  popularSort();
  console.log(movieInfo[40]);

}, 500); 


});