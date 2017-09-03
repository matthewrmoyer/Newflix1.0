$(document).ready(function(){

//TODO MORE THAN ONE FILTER AND CAN SORT THE CATEGORIES YOU WANT JUST KEEP THE WHITE LIGHT ON BEHIND ACTIVE FILTERS
//TODO OPTIONS FOR OTHER COUNTRIES
//TODO ADD SHOWS AND MOVIES FROM OTHER COUNTRIES LET USER CHOOSE COUNTRY
//TODO GET RID OF WHITE BORDER ON FIREFOX AROUND MODULE MOVIES? CHECK GITHUB ALREADY DID FOR OTHER MOVIE SITE

//TODO ADD CLICK FUNCTIONS TO SORT-O TABS
var sm = localStorage.getItem("savedMovies");
$("#saved").append(sm);


//array of movies
var movies = [
//from http://www.digitaltrends.com/home-theater/whats-new-on-netflix-shows-movies/
//sept 1 and 2

//THIS IS A KEY ON WHAT TO CHANGE SPECIAL CHARACTERS TO: http://www.w3schools.com/tags/ref_urlencode.asp
//FIX U571 LINK WORKS ON IMDB API
//"February 1",
"American Experience: The Big Burn ",
"American Experience: The Boys of ’36 ",
"Under Arrest: Season 5",
"Kazoops!: Season 3",
"The Last Kingdom: Season 2",
"Sense8: Season 2",
"Spirit: Riding Free: Season 1",
"Queen of the South: Season 1",
"The Fosters: Season 4",
"Switched at Birth: Season 5",
"All Hail King Julien: Exiled: Season 1",
"Anne with an E: Season 1",
"Master of None: Season 2",
"Sherlock: Series 4",
"Riverdale: Season 1 ",
"Royal Pains: Season 8",
"The Keepers: Season 1",
"Unbreakable Kimmy Schmidt: Season 3",
"Bloodline: Season 3",
"Bunk’d: Season 2",
"F Is for Family: Season 2",
"House of Cards: Season 5",
"Anvil! The Story of Anvil",
"Blood on the Mountain",
"Chaahat",
"Chocolat",
"Decanted",
"Don’t Think Twice",
"Drifter",
"Forrest Gump",
"Happy Feet",
"In the Shadow of Iris",
"Love",
"Losing Sight of Shore",
"Malibu’s Most Wanted",
"Nerdland",
"Raja Hindustani ",
"Richard Pryor: Icon",
"Bodyguards: Secret Lives From the Watchtower",
"Hija de la Laguna",
"Maria Bamford: Old Baby",
"Two Lovers and a Bear",
"Handsome: A Netflix Mystery Movie",
"The Mars Generation",
"Simplemente Manu NNa",
"Cold War 2",
"When the Bough Breaks",
"LoveTrue ",
"Stake Land II ",
"The Host",
"Beyond the Gates ",
"Hunter Gatherer",
"Norm Macdonald: Hitler’s Dog, Gossip & Trickery",
"All We Had",
"The Adventure Club",
"El Apóstata",
"Get Me Roger Stone",
"Mindhorn",
"Sahara",
"Cave",
"Command and Control",
"The Intent",
"Lovesong",
"The Break-Up ",
"The Place Beyond the Pines ",
"Tracy Morgan: Staying Alive",
"BLAME!",
"Laerte-se",
"What’s With Wheat",
"Inglourious Basterds ",
"They Call Us Monsters",
"Dig Two Graves",
"Hasan Minhaj: Homecoming King",
"Southpaw",
"Believe",
"I Am Jane Doe",
"Joshua: Teenager vs. Superpower",
"War Machine",
"Forever Pure ",
"A New High",
"Doctor Strange ",
"Masterminds",
"Sarah Silverman: A Speck of Dust"
];


//empty array to store relevant movie info
var movieInfo = [{"Title":"Crematorium","Year":"2011","Rated":"N/A","Released":"07 Mar 2011","Runtime":"397 min","Genre":"Drama","Director":"N/A","Writer":"N/A","Actors":"José Sancho, Alicia Borrachero, Juana Acosta, Pau Durà","Plot":"N/A","Language":"Spanish, Russian","Country":"Spain","Awards":"4 wins & 1 nomination.","Poster":"https://images-na.ssl-images-amazon.com/images/M/MV5BZTg0YWNhMjYtMjM3OS00MzY5LTk0YmEtMjNmZWFiZmExM2QzXkEyXkFqcGdeQXVyMTA0MjU0Ng@@._V1_SX300.jpg","Ratings":[{"Source":"Internet Movie Database","Value":"7.8/10"}],"Metascore":"N/A","imdbRating":"7.8","imdbVotes":"546","imdbID":"tt1661526","Type":"series","totalSeasons":"1","Response":"True"},
{"Title":"The Royal House of Windsor","Year":"2017–","Rated":"N/A","Released":"22 Feb 2017","Runtime":"N/A","Genre":"History","Director":"N/A","Writer":"N/A","Actors":"N/A","Plot":"The history of Britain's ruling dynasty, the Windsors, over the last 100 years, starting with the time around the outbreak of WWI.","Language":"English","Country":"UK","Awards":"N/A","Poster":"N/A","Ratings":[{"Source":"Internet Movie Database","Value":"7.7/10"}],"Metascore":"N/A","imdbRating":"7.7","imdbVotes":"11","imdbID":"tt6596634","Type":"series","totalSeasons":"1","Response":"True"},
{"Title":"Voltron","Year":"2016–","Rated":"TV-Y7","Released":"10 Jun 2016","Runtime":"23 min","Genre":"Animation, Adventure, Sci-Fi","Director":"N/A","Writer":"N/A","Actors":"Jeremy Shada, Bex Taylor-Klaus, Josh Keaton, Tyler Labine","Plot":"Five Earth teens - Keith, Lance, Hunk, Pidge and Shiro - who become the last line of defense for the galaxy in an intergalactic battle against the evil alien force led by King Zarkon.","Language":"English","Country":"USA","Awards":"2 nominations.","Poster":"https://images-na.ssl-images-amazon.com/images/M/MV5BMjA2MzMzNTg5NV5BMl5BanBnXkFtZTgwMzAzOTc4ODE@._V1_SX300.jpg","Ratings":[{"Source":"Internet Movie Database","Value":"8.4/10"}],"Metascore":"N/A","imdbRating":"8.4","imdbVotes":"3,357","imdbID":"tt5580664","Type":"series","totalSeasons":"2","Response":"True"},
{"Title":"Wet Hot American Summer: 10 Years Later","Year":"2017–","Rated":"N/A","Released":"N/A","Runtime":"N/A","Genre":"Comedy","Director":"N/A","Writer":"N/A","Actors":"Elizabeth Banks, Amy Poehler, Michael Showalter, David Wain","Plot":"See what happens to your favorite campers and counselors ten years after the original Wet Hot American Summer.","Language":"English","Country":"USA","Awards":"N/A","Poster":"N/A","Ratings":[],"Metascore":"N/A","imdbRating":"N/A","imdbVotes":"N/A","imdbID":"tt5669272","Type":"series","totalSeasons":"N/A","Response":"True"},
{"Title":"My Little Pony: Friendship Is Magic","Year":"2010–","Rated":"TV-Y","Released":"10 Oct 2010","Runtime":"22 min","Genre":"Animation, Comedy, Family","Director":"N/A","Writer":"Lauren Faust","Actors":"Ashleigh Ball, Tabitha St. Germain, Andrea Libman, Tara Strong","Plot":"After learning that her friends, as well as herself, are the magical Elements of Harmony, studious unicorn Twilight Sparkle is sent by her mentor, Princess Celestia, to Ponyville to study the magic of friendship with help from her friends.","Language":"English","Country":"USA, Canada","Awards":"18 wins & 32 nominations.","Poster":"https://images-na.ssl-images-amazon.com/images/M/MV5BMTU1NzQ1MDg5MV5BMl5BanBnXkFtZTcwMDIzODIxNw@@._V1_SX300.jpg","Ratings":[{"Source":"Internet Movie Database","Value":"7.7/10"}],"Metascore":"N/A","imdbRating":"7.7","imdbVotes":"16,397","imdbID":"tt1751105","Type":"series","totalSeasons":"7","Response":"True"},
{"Title":"Home: Adventures with Tip & Oh","Year":"2016–","Rated":"N/A","Released":"29 Jul 2016","Runtime":"23 min","Genre":"Animation, Comedy, Family","Director":"N/A","Writer":"Ryan Crego, Thurop Van Orman","Actors":"Rachel Crow, Mark Whitten, Ana Ortiz, Ron Funches","Plot":"Picking up where the 2015 film left off, this coming-of-age buddy comedy follows fearless Tip and overenthusiastic Oh, as they navigate the crazily combined human and alien culture they live in, finding adventure everywhere they go.","Language":"English","Country":"USA","Awards":"N/A","Poster":"https://images-na.ssl-images-amazon.com/images/M/MV5BOTM4ODIyNzUyOF5BMl5BanBnXkFtZTgwMDkxOTkxOTE@._V1_SX300.jpg","Ratings":[{"Source":"Internet Movie Database","Value":"6.4/10"}],"Metascore":"N/A","imdbRating":"6.4","imdbVotes":"196","imdbID":"tt5759196","Type":"series","totalSeasons":"2","Response":"True"},
{"Title":"True and the Rainbow Kingdom","Year":"2017–","Rated":"N/A","Released":"N/A","Runtime":"N/A","Genre":"Animation","Director":"N/A","Writer":"N/A","Actors":"N/A","Plot":"N/A","Language":"N/A","Country":"Canada","Awards":"N/A","Poster":"http://ia.media-imdb.com/images/M/MV5BYjk3NGJmOWMtYWE4Zi00NDBkLWFjYzEtM2RkMTlkMWY0ODAxXkEyXkFqcGdeQXVyMzE1MzY5Mzk@._V1_SX300.jpg","Ratings":[],"Metascore":"N/A","imdbRating":"N/A","imdbVotes":"N/A","imdbID":"tt5607658","Type":"series","totalSeasons":"N/A","Response":"True"},
{"Title":"A Murderous Affair: The Carolyn Warmus Story","Year":"1992","Rated":"N/A","Released":"13 Sep 1992","Runtime":"96 min","Genre":"Biography, Crime, Drama","Director":"Martin Davidson","Writer":"Earl W. Wallace, Pamela Wallace, Martin Davidson","Actors":"Virginia Madsen, Chris Sarandon, Ned Eisenberg, Tom Mason","Plot":"A married man meets a beautiful woman and they begin an affair.","Language":"English","Country":"USA","Awards":"N/A","Poster":"https://images-na.ssl-images-amazon.com/images/M/MV5BYTA5ZTMyN2ItNGNhOC00ZjUyLThkYjgtYTA3ZGMyMWEzNWQ0XkEyXkFqcGdeQXVyNzU5ODYyNw@@._V1_SX300.jpg","Ratings":[{"Source":"Internet Movie Database","Value":"5.3/10"}],"Metascore":"N/A","imdbRating":"5.3","imdbVotes":"160","imdbID":"tt0104943","Type":"movie","DVD":"25 Jan 2005","BoxOffice":"N/A","Production":"ABC Television","Website":"N/A","Response":"True"},
{"Title":"Dinotrux","Year":"2015–","Rated":"TV-Y7","Released":"14 Aug 2015","Runtime":"N/A","Genre":"Animation, Action, Comedy","Director":"N/A","Writer":"N/A","Actors":"Andrew Francis, Richard Ian Cox, Brian Drummond, Matt Hill","Plot":"Animals like the Craneosauraus, Garbageadon and Tyrannosaurus Trux (part dinosaurs and part truck) exist in a fictional prehistoric era.","Language":"English, French","Country":"USA","Awards":"2 wins & 4 nominations.","Poster":"https://images-na.ssl-images-amazon.com/images/M/MV5BZjMyYWE2NDEtMzgxYi00MzQ3LTlmZWEtNDI5NGIxMjdjMDg3XkEyXkFqcGdeQXVyMzQwMDg1MDI@._V1_SX300.jpg","Ratings":[{"Source":"Internet Movie Database","Value":"7.6/10"}],"Metascore":"N/A","imdbRating":"7.6","imdbVotes":"204","imdbID":"tt1396212","Type":"series","totalSeasons":"4","Response":"True"},
{"Title":"The Defenders","Year":"2017–","Rated":"N/A","Released":"18 Aug 2017","Runtime":"50 min","Genre":"Action, Adventure, Crime","Director":"N/A","Writer":"N/A","Actors":"Finn Jones, Mike Colter, Charlie Cox, Jessica Henwick","Plot":"Daredevil, Jessica Jones, Luke Cage, and Iron Fist team up to fight crime in New York City.","Language":"English","Country":"USA","Awards":"N/A","Poster":"https://images-na.ssl-images-amazon.com/images/M/MV5BMTk4Njc5MTMyNl5BMl5BanBnXkFtZTgwMTI4NTk2MjI@._V1_SX300.jpg","Ratings":[{"Source":"Internet Movie Database","Value":"9.4/10"}],"Metascore":"N/A","imdbRating":"9.4","imdbVotes":"186","imdbID":"tt4230076","Type":"series","totalSeasons":"1","Response":"True"},
{"Title":"Gomorrah","Year":"2008","Rated":"NOT RATED","Released":"10 Apr 2009","Runtime":"137 min","Genre":"Crime, Drama","Director":"Matteo Garrone","Writer":"Roberto Saviano (book), Maurizio Braucci (screenplay), Ugo Chiti (screenplay), Gianni Di Gregorio (screenplay), Matteo Garrone (screenplay), Massimo Gaudioso (screenplay), Roberto Saviano (screenplay)","Actors":"Salvatore Abbruzzese, Simone Sacchettino, Salvatore Ruocco, Vincenzo Fabricino","Plot":"An inside look at Italy's modern crime families.","Language":"Neapolitan, Italian, Mandarin, French","Country":"Italy","Awards":"Nominated for 1 Golden Globe. Another 34 wins & 33 nominations.","Poster":"https://images-na.ssl-images-amazon.com/images/M/MV5BMTI4MDY5MTc5OF5BMl5BanBnXkFtZTcwMTMyMTk3Mg@@._V1_SX300.jpg","Ratings":[{"Source":"Internet Movie Database","Value":"7.0/10"},{"Source":"Rotten Tomatoes","Value":"92%"},{"Source":"Metacritic","Value":"87/100"}],"Metascore":"87","imdbRating":"7.0","imdbVotes":"40,076","imdbID":"tt0929425","Type":"movie","DVD":"24 Nov 2009","BoxOffice":"$1,500,000","Production":"IFC Films","Website":"http://www.gomorra-lefilm.com/","Response":"True"},
{"Title":"Disjointed","Year":"2017–","Rated":"N/A","Released":"25 Aug 2017","Runtime":"N/A","Genre":"Comedy","Director":"N/A","Writer":"David Javerbaum, Chuck Lorre","Actors":"Aaron Moten, Tone Bell, Dougie Baldwin, Elizabeth Alderfer","Plot":"Cannabis legend Ruth Whitefeather Feldman employs her newly graduated son and a team of young \"budtenders\" to help run her Los Angeles marijuana dispensary.","Language":"English","Country":"USA","Awards":"N/A","Poster":"https://images-na.ssl-images-amazon.com/images/M/MV5BMGZkOTA3ZDQtZjUwNC00NzMxLWJmN2YtMDUzMDA4YzBmNzA0XkEyXkFqcGdeQXVyNzU1NjI4NzQ@._V1_SX300.jpg","Ratings":[],"Metascore":"N/A","imdbRating":"N/A","imdbVotes":"N/A","imdbID":"tt5884792","Type":"series","totalSeasons":"N/A","Response":"True"},
{"Title":"Dragons: Race to the Edge","Year":"2015–","Rated":"TV-Y7","Released":"26 Jun 2015","Runtime":"22 min","Genre":"Animation, Adventure, Comedy","Director":"N/A","Writer":"N/A","Actors":"America Ferrera, Jay Baruchel, T.J. Miller, Christopher Mintz-Plasse","Plot":"Unlock the secrets of the Dragon Eye and come face to face with more dragons than anyone has ever imagined as Hiccup, Toothless and the Dragon Riders soar to the edge of adventure.","Language":"English","Country":"USA","Awards":"1 win & 4 nominations.","Poster":"https://images-na.ssl-images-amazon.com/images/M/MV5BNjQ1NDU4Y2UtOTIyMS00ODA0LWI0ZGYtNWMzNGM2N2Y5ZTgzXkEyXkFqcGdeQXVyNDQ2MTMzODA@._V1_SX300.jpg","Ratings":[{"Source":"Internet Movie Database","Value":"8.5/10"}],"Metascore":"N/A","imdbRating":"8.5","imdbVotes":"1,454","imdbID":"tt4816058","Type":"series","totalSeasons":"4","Response":"True"},
{"Title":"Once Upon a Time","Year":"2011–","Rated":"TV-PG","Released":"23 Oct 2011","Runtime":"44 min","Genre":"Adventure, Fantasy, Romance","Director":"N/A","Writer":"Adam Horowitz, Edward Kitsis","Actors":"Lana Parrilla, Robert Carlyle, Jared Gilmore, Jennifer Morrison","Plot":"A young woman with a troubled past is drawn to a small town in Maine where fairy tales are to be believed.","Language":"English","Country":"USA","Awards":"Nominated for 6 Primetime Emmys. Another 10 wins & 66 nominations.","Poster":"https://images-na.ssl-images-amazon.com/images/M/MV5BNmVjNGRlM2UtNTc3Zi00NDliLTg1NzItZjY1ZDFjNDI0MWFmXkEyXkFqcGdeQXVyMzAzNTY3MDM@._V1_SX300.jpg","Ratings":[{"Source":"Internet Movie Database","Value":"7.9/10"}],"Metascore":"N/A","imdbRating":"7.9","imdbVotes":"182,178","imdbID":"tt1843230","Type":"series","totalSeasons":"7","Response":"True"},
{"Title":"The Good Place","Year":"2016–","Rated":"N/A","Released":"19 Sep 2016","Runtime":"30 min","Genre":"Comedy, Drama, Family","Director":"N/A","Writer":"Michael Schur","Actors":"Kristen Bell, William Jackson Harper, Jameela Jamil, D'Arcy Carden","Plot":"A woman struggles to define what it means to be \"good\".","Language":"English","Country":"USA","Awards":"1 win & 5 nominations.","Poster":"https://images-na.ssl-images-amazon.com/images/M/MV5BMjI2NDExMTg5MF5BMl5BanBnXkFtZTgwMzIwNzY5OTE@._V1_SX300.jpg","Ratings":[{"Source":"Internet Movie Database","Value":"7.7/10"}],"Metascore":"N/A","imdbRating":"7.7","imdbVotes":"8,016","imdbID":"tt4955642","Type":"series","totalSeasons":"1","Response":"True"},
{"Title":"The Addams Family","Year":"1991","Rated":"PG-13","Released":"22 Nov 1991","Runtime":"99 min","Genre":"Comedy, Fantasy","Director":"Barry Sonnenfeld","Writer":"Charles Addams (characters), Caroline Thompson, Larry Wilson","Actors":"Anjelica Huston, Raul Julia, Christopher Lloyd, Dan Hedaya","Plot":"Con artists plan to fleece an eccentric family using an accomplice who claims to be their long-lost uncle.","Language":"English","Country":"USA","Awards":"Nominated for 1 Oscar. Another 4 wins & 17 nominations.","Poster":"https://images-na.ssl-images-amazon.com/images/M/MV5BODc1NmY0MDUtNjUzNS00ODdhLWJlN2ItMTgwZjczZjI0MDkyXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg","Ratings":[{"Source":"Internet Movie Database","Value":"6.8/10"},{"Source":"Rotten Tomatoes","Value":"60%"},{"Source":"Metacritic","Value":"57/100"}],"Metascore":"57","imdbRating":"6.8","imdbVotes":"102,781","imdbID":"tt0101272","Type":"movie","DVD":"22 Feb 2000","BoxOffice":"N/A","Production":"Paramount Pictures","Website":"N/A","Response":"True"},
{"Title":"The Astronaut's Wife","Year":"1999","Rated":"R","Released":"27 Aug 1999","Runtime":"109 min","Genre":"Drama, Sci-Fi, Thriller","Director":"Rand Ravich","Writer":"Rand Ravich","Actors":"Johnny Depp, Charlize Theron, Joe Morton, Clea DuVall","Plot":"After an explosion in space and subsequent two-minute radio-out period, two astronauts return home to their wives. Slightly it's revealed that they're not the same as they were.","Language":"English","Country":"USA","Awards":"1 nomination.","Poster":"https://images-na.ssl-images-amazon.com/images/M/MV5BMTUxNGI2NzUtYzgwNy00NmIyLTgwNjMtZGMzYjhlYjY1MThkXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg","Ratings":[{"Source":"Internet Movie Database","Value":"5.3/10"},{"Source":"Rotten Tomatoes","Value":"16%"},{"Source":"Metacritic","Value":"37/100"}],"Metascore":"37","imdbRating":"5.3","imdbVotes":"47,366","imdbID":"tt0138304","Type":"movie","DVD":"08 Feb 2000","BoxOffice":"N/A","Production":"New Line Home Entertainment","Website":"http://www.astronautswife.com","Response":"True"},
{"Title":"Bad Santa","Year":"2003","Rated":"R","Released":"26 Nov 2003","Runtime":"91 min","Genre":"Comedy, Crime, Drama","Director":"Terry Zwigoff","Writer":"Glenn Ficarra, John Requa","Actors":"Billy Bob Thornton, Tony Cox, Brett Kelly, Lauren Graham","Plot":"A miserable conman and his partner pose as Santa and his Little Helper to rob department stores on Christmas Eve. But they run into problems when the conman befriends a troubled kid, and the security boss discovers the plot.","Language":"English","Country":"USA, Germany","Awards":"Nominated for 1 Golden Globe. Another 1 win & 11 nominations.","Poster":"https://images-na.ssl-images-amazon.com/images/M/MV5BMjA4Njg1MDcwN15BMl5BanBnXkFtZTYwMzAxNjM3._V1_SX300.jpg","Ratings":[{"Source":"Internet Movie Database","Value":"7.1/10"},{"Source":"Rotten Tomatoes","Value":"78%"},{"Source":"Metacritic","Value":"70/100"}],"Metascore":"70","imdbRating":"7.1","imdbVotes":"117,275","imdbID":"tt0307987","Type":"movie","DVD":"22 Jun 2004","BoxOffice":"N/A","Production":"Miramax Films","Website":"http://www.miramax.com/movie/bad-santa","Response":"True"},
{"Title":"The Bomb","Year":"2015","Rated":"N/A","Released":"28 Jul 2015","Runtime":"115 min","Genre":"Documentary","Director":"Rushmore DeNooyer","Writer":"Rushmore DeNooyer","Actors":"Jonathan Adams, John Andersen, Hal Behl, Walter Boyne","Plot":"See how America developed the most destructive invention in human history - the nuclear bomb - how it changed the world and how it continues to loom large in our lives. Hear from historians...","Language":"English","Country":"USA","Awards":"N/A","Poster":"https://images-na.ssl-images-amazon.com/images/M/MV5BMjI3MDA4NTg0MF5BMl5BanBnXkFtZTgwMTg4OTA0NjE@._V1_SX300.jpg","Ratings":[{"Source":"Internet Movie Database","Value":"7.9/10"}],"Metascore":"N/A","imdbRating":"7.9","imdbVotes":"163","imdbID":"tt4840922","Type":"movie","DVD":"20 Oct 2015","BoxOffice":"N/A","Production":"Lone Wolf Documentary Group","Website":"N/A","Response":"True"},
{"Title":"A Cinderella Story","Year":"2004","Rated":"PG","Released":"16 Jul 2004","Runtime":"95 min","Genre":"Comedy, Family, Romance","Director":"Mark Rosman","Writer":"Leigh Dunlap","Actors":"Hilary Duff, Jennifer Coolidge, Chad Michael Murray, Dan Byrd","Plot":"Routinely exploited by her wicked stepmother, the downtrodden Sam Montgomery is excited about the prospect of meeting her Internet beau at the school's Halloween dance.","Language":"English, German, Czech","Country":"USA, Canada","Awards":"6 wins & 8 nominations.","Poster":"https://images-na.ssl-images-amazon.com/images/M/MV5BMTA1NDI0OTkwNDNeQTJeQWpwZ15BbWU3MDQ3Nzc1MjE@._V1_SX300.jpg","Ratings":[{"Source":"Internet Movie Database","Value":"5.9/10"},{"Source":"Rotten Tomatoes","Value":"11%"},{"Source":"Metacritic","Value":"25/100"}],"Metascore":"25","imdbRating":"5.9","imdbVotes":"67,355","imdbID":"tt0356470","Type":"movie","DVD":"19 Oct 2004","BoxOffice":"$51,100,000","Production":"Warner Bros. Pictures","Website":"http://www2.warnerbros.com/acinderellastory/index.html","Response":"True"},
{"Title":"Cloud Atlas","Year":"2012","Rated":"R","Released":"26 Oct 2012","Runtime":"172 min","Genre":"Drama, Sci-Fi","Director":"Tom Tykwer, Lana Wachowski, Lilly Wachowski","Writer":"David Mitchell (novel), Lana Wachowski (written for the screen by), Tom Tykwer (written for the screen by), Lilly Wachowski (written for the screen by)","Actors":"Tom Hanks, Halle Berry, Jim Broadbent, Hugo Weaving","Plot":"An exploration of how the actions of individual lives impact one another in the past, present and future, as one soul is shaped from a killer into a hero, and an act of kindness ripples across centuries to inspire a revolution.","Language":"English, Spanish, Ukrainian","Country":"Germany, USA, Hong Kong, Singapore","Awards":"Nominated for 1 Golden Globe. Another 16 wins & 75 nominations.","Poster":"https://images-na.ssl-images-amazon.com/images/M/MV5BMTczMTgxMjc4NF5BMl5BanBnXkFtZTcwNjM5MTA2OA@@._V1_SX300.jpg","Ratings":[{"Source":"Internet Movie Database","Value":"7.5/10"},{"Source":"Rotten Tomatoes","Value":"66%"},{"Source":"Metacritic","Value":"55/100"}],"Metascore":"55","imdbRating":"7.5","imdbVotes":"300,790","imdbID":"tt1371111","Type":"movie","DVD":"14 May 2013","BoxOffice":"$22,100,000","Production":"Warner Bros. Pictures","Website":"http://www.cloudatlasmovie.com","Response":"True"},
{"Title":"Everyone's Hero","Year":"2006","Rated":"G","Released":"15 Sep 2006","Runtime":"87 min","Genre":"Animation, Adventure, Comedy","Director":"Colin Brady, Christopher Reeve, Dan St. Pierre","Writer":"Robert Kurtz (screenplay), Jeff Hand (screenplay), Howard Jonas (story)","Actors":"Ritchie Allen, Jake T. Austin, Cherise Boothe, Jesse Bronstein","Plot":"A boy (Jake T. Austin) begins a grand journey to return Babe Ruth's baseball bat before the deciding game of the 1932 World Series comes to a close.","Language":"English","Country":"Canada, USA","Awards":"N/A","Poster":"https://images-na.ssl-images-amazon.com/images/M/MV5BMjE3MTgwNzY5N15BMl5BanBnXkFtZTcwNDU0OTUzMQ@@._V1_SX300.jpg","Ratings":[{"Source":"Internet Movie Database","Value":"5.8/10"},{"Source":"Rotten Tomatoes","Value":"41%"},{"Source":"Metacritic","Value":"51/100"}],"Metascore":"51","imdbRating":"5.8","imdbVotes":"6,475","imdbID":"tt0430779","Type":"movie","DVD":"20 Mar 2007","BoxOffice":"$14,497,591","Production":"20th Century Fox","Website":"http://www.everyoneshero.com/","Response":"True"},
{"Title":"Funny Games","Year":"2007","Rated":"R","Released":"04 Apr 2008","Runtime":"111 min","Genre":"Crime, Drama, Horror","Director":"Michael Haneke","Writer":"Michael Haneke","Actors":"Naomi Watts, Tim Roth, Michael Pitt, Brady Corbet","Plot":"Two psychopathic young men take a family hostage in their cabin.","Language":"English","Country":"USA, France, UK, Austria, Germany, Italy","Awards":"1 win & 5 nominations.","Poster":"https://images-na.ssl-images-amazon.com/images/M/MV5BMTg4OTExNTYzMV5BMl5BanBnXkFtZTcwOTg1MDU1MQ@@._V1_SX300.jpg","Ratings":[{"Source":"Internet Movie Database","Value":"6.5/10"},{"Source":"Rotten Tomatoes","Value":"52%"},{"Source":"Metacritic","Value":"44/100"}],"Metascore":"44","imdbRating":"6.5","imdbVotes":"74,407","imdbID":"tt0808279","Type":"movie","DVD":"10 Jun 2008","BoxOffice":"$1,045,279","Production":"Warner Independent Pictures","Website":"http://wip.warnerbros.com/funnygames/","Response":"True"},
{"Title":"Innerspace","Year":"1987","Rated":"PG","Released":"01 Jul 1987","Runtime":"120 min","Genre":"Action, Adventure, Comedy","Director":"Joe Dante","Writer":"Chip Proser (story), Jeffrey Boam (screenplay), Chip Proser (screenplay)","Actors":"Dennis Quaid, Martin Short, Meg Ryan, Kevin McCarthy","Plot":"A hapless store clerk must foil criminals to save the life of the man who, miniaturized in a secret experiment, was accidentally injected into him.","Language":"English","Country":"USA","Awards":"Won 1 Oscar. Another 1 win & 4 nominations.","Poster":"https://images-na.ssl-images-amazon.com/images/M/MV5BNDk1NzNiMGQtNGQ4Yy00NmMzLTkyNWQtZjM4MDU2Y2Q2NDVlL2ltYWdlXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg","Ratings":[{"Source":"Internet Movie Database","Value":"6.8/10"},{"Source":"Rotten Tomatoes","Value":"81%"},{"Source":"Metacritic","Value":"66/100"}],"Metascore":"66","imdbRating":"6.8","imdbVotes":"44,418","imdbID":"tt0093260","Type":"movie","DVD":"09 Jul 2002","BoxOffice":"N/A","Production":"Warner Bros. Pictures","Website":"N/A","Response":"True"},
{"Title":"Jackie Brown","Year":"1997","Rated":"R","Released":"25 Dec 1997","Runtime":"154 min","Genre":"Crime, Drama, Thriller","Director":"Quentin Tarantino","Writer":"Quentin Tarantino (written for the screen by), Elmore Leonard (novel)","Actors":"Pam Grier, Samuel L. Jackson, Robert Forster, Bridget Fonda","Plot":"A middle-aged woman finds herself in the middle of a huge conflict that will either make her a profit or cost her life.","Language":"English","Country":"USA","Awards":"Nominated for 1 Oscar. Another 7 wins & 21 nominations.","Poster":"https://images-na.ssl-images-amazon.com/images/M/MV5BNmY5ODRmYTItNWU0Ni00MWE3LTgyYzUtYjZlN2Q5YTcyM2NmXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg","Ratings":[{"Source":"Internet Movie Database","Value":"7.5/10"},{"Source":"Rotten Tomatoes","Value":"87%"},{"Source":"Metacritic","Value":"64/100"}],"Metascore":"64","imdbRating":"7.5","imdbVotes":"254,684","imdbID":"tt0119396","Type":"movie","DVD":"05 Aug 1998","BoxOffice":"N/A","Production":"Miramax Films","Website":"N/A","Response":"True"},
{"Title":"The Last Mimzy","Year":"2007","Rated":"PG","Released":"23 Mar 2007","Runtime":"90 min","Genre":"Drama, Family, Sci-Fi","Director":"Robert Shaye","Writer":"Bruce Joel Rubin (screenplay), Toby Emmerich (screenplay), James V. Hart (screen story), Carol Skilken (screen story), Henry Kuttner (short story \"Mimsy Were the Borogoves\"), C.L. Moore (short story \"Mimsy Were the Borogoves\")","Actors":"Chris O'Neil, Rhiannon Leigh Wryn, Joely Richardson, Timothy Hutton","Plot":"Two siblings begin to develop special talents after they find a mysterious box of toys. Soon the kids, their parents, and even their teacher are drawn into a strange new world and find a task ahead of them that is far more important than any of them could imagine!","Language":"English, Spanish","Country":"USA","Awards":"7 nominations.","Poster":"https://images-na.ssl-images-amazon.com/images/M/MV5BMTIwMTkzMDI1N15BMl5BanBnXkFtZTcwMzc1NzI0MQ@@._V1_SX300.jpg","Ratings":[{"Source":"Internet Movie Database","Value":"6.3/10"},{"Source":"Rotten Tomatoes","Value":"53%"},{"Source":"Metacritic","Value":"59/100"}],"Metascore":"59","imdbRating":"6.3","imdbVotes":"19,274","imdbID":"tt0768212","Type":"movie","DVD":"10 Jul 2007","BoxOffice":"$21,426,088","Production":"New Line Cinema","Website":"http://www.mimzy.com/","Response":"True"},
{"Title":"Lord of War","Year":"2005","Rated":"R","Released":"16 Sep 2005","Runtime":"122 min","Genre":"Crime, Drama, Thriller","Director":"Andrew Niccol","Writer":"Andrew Niccol","Actors":"Nicolas Cage, Bridget Moynahan, Jared Leto, Shake Tukhmanyan","Plot":"An arms dealer confronts the morality of his work as he is being chased by an Interpol agent.","Language":"English, Ukrainian, German, Spanish, Russian, French, Arabic, Turkish","Country":"USA, Germany, France","Awards":"2 wins & 2 nominations.","Poster":"https://images-na.ssl-images-amazon.com/images/M/MV5BMTYzZWE3MDAtZjZkMi00MzhlLTlhZDUtNmI2Zjg3OWVlZWI0XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg","Ratings":[{"Source":"Internet Movie Database","Value":"7.6/10"},{"Source":"Rotten Tomatoes","Value":"61%"},{"Source":"Metacritic","Value":"62/100"}],"Metascore":"62","imdbRating":"7.6","imdbVotes":"259,183","imdbID":"tt0399295","Type":"movie","DVD":"17 Jan 2006","BoxOffice":"$24,033,036","Production":"Lions Gate","Website":"http://www.lordofwarthemovie.com/","Response":"True"},
{"Title":"The Matrix","Year":"1999","Rated":"R","Released":"31 Mar 1999","Runtime":"136 min","Genre":"Action, Sci-Fi","Director":"Lana Wachowski, Lilly Wachowski","Writer":"Lilly Wachowski, Lana Wachowski","Actors":"Keanu Reeves, Laurence Fishburne, Carrie-Anne Moss, Hugo Weaving","Plot":"A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers.","Language":"English","Country":"USA","Awards":"Won 4 Oscars. Another 34 wins & 45 nominations.","Poster":"https://images-na.ssl-images-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg","Ratings":[{"Source":"Internet Movie Database","Value":"8.7/10"},{"Source":"Rotten Tomatoes","Value":"87%"},{"Source":"Metacritic","Value":"73/100"}],"Metascore":"73","imdbRating":"8.7","imdbVotes":"1,323,021","imdbID":"tt0133093","Type":"movie","DVD":"21 Sep 1999","BoxOffice":"N/A","Production":"Warner Bros. Pictures","Website":"http://www.whatisthematrix.com","Response":"True"},
{"Title":"The Matrix Reloaded","Year":"2003","Rated":"R","Released":"15 May 2003","Runtime":"138 min","Genre":"Action, Sci-Fi","Director":"Lana Wachowski, Lilly Wachowski","Writer":"Lilly Wachowski, Lana Wachowski, Lilly Wachowski (characters), Lana Wachowski (characters)","Actors":"Ray Anthony, Christine Anu, Andy Arness, Alima Ashton-Sheibu","Plot":"Neo and the rebel leaders estimate that they have 72 hours until 250,000 probes discover Zion and destroy it and its inhabitants. During this, Neo must decide how he can save Trinity from a dark fate in his dreams.","Language":"English, French","Country":"USA, Australia","Awards":"8 wins & 31 nominations.","Poster":"https://images-na.ssl-images-amazon.com/images/M/MV5BMjA0NDM5MDY2OF5BMl5BanBnXkFtZTcwNzg5OTEzMw@@._V1_SX300.jpg","Ratings":[{"Source":"Internet Movie Database","Value":"7.2/10"},{"Source":"Rotten Tomatoes","Value":"73%"},{"Source":"Metacritic","Value":"62/100"}],"Metascore":"62","imdbRating":"7.2","imdbVotes":"442,318","imdbID":"tt0234215","Type":"movie","DVD":"14 Oct 2003","BoxOffice":"$281,500,000","Production":"Warner Bros. Pictures","Website":"http://whatisthematrix.warnerbros.com/","Response":"True"},
{"Title":"The Matrix Revolutions","Year":"2003","Rated":"R","Released":"05 Nov 2003","Runtime":"129 min","Genre":"Action, Sci-Fi","Director":"Lana Wachowski, Lilly Wachowski","Writer":"Lilly Wachowski, Lana Wachowski, Lilly Wachowski (characters), Lana Wachowski (characters)","Actors":"Mary Alice, Tanveer K. Atwal, Helmut Bakaitis, Kate Beahan","Plot":"The human city of Zion defends itself against the massive invasion of the machines as Neo fights to end the war at another front while also opposing the rogue Agent Smith.","Language":"English, French","Country":"Australia, USA","Awards":"4 wins & 30 nominations.","Poster":"https://images-na.ssl-images-amazon.com/images/M/MV5BMjA1MjM3NTE1Ml5BMl5BanBnXkFtZTYwODM4MDg3._V1_SX300.jpg","Ratings":[{"Source":"Internet Movie Database","Value":"6.7/10"},{"Source":"Rotten Tomatoes","Value":"36%"},{"Source":"Metacritic","Value":"47/100"}],"Metascore":"47","imdbRating":"6.7","imdbVotes":"383,447","imdbID":"tt0242653","Type":"movie","DVD":"06 Apr 2004","BoxOffice":"$139,076,032","Production":"Warner Bros. Pictures","Website":"http://whatisthematrix.warnerbros.com/","Response":"True"},
{"Title":"The Number 23","Year":"2007","Rated":"R","Released":"23 Feb 2007","Runtime":"101 min","Genre":"Mystery, Thriller","Director":"Joel Schumacher","Writer":"Fernley Phillips","Actors":"Jim Carrey, Virginia Madsen, Logan Lerman, Danny Huston","Plot":"Walter Sparrow becomes obsessed with a novel that he believes was written about him. As his obsession increases, more and more similarities seem to arise.","Language":"English, Chinese","Country":"USA, Germany","Awards":"5 nominations.","Poster":"https://images-na.ssl-images-amazon.com/images/M/MV5BMjcwNzczNDQ0MV5BMl5BanBnXkFtZTcwMTE0NzA0MQ@@._V1_SX300.jpg","Ratings":[{"Source":"Internet Movie Database","Value":"6.4/10"},{"Source":"Rotten Tomatoes","Value":"8%"}],"Metascore":"N/A","imdbRating":"6.4","imdbVotes":"171,746","imdbID":"tt0481369","Type":"movie","DVD":"05 Jul 2005","BoxOffice":"$35,063,732","Production":"New Line","Website":"http://www.number23movie.com/","Response":"True"},
{"Title":"Opening Night","Year":"1977","Rated":"PG-13","Released":"17 Apr 1978","Runtime":"144 min","Genre":"Drama","Director":"John Cassavetes","Writer":"John Cassavetes","Actors":"Gena Rowlands, John Cassavetes, Ben Gazzara, Joan Blondell","Plot":"An actress suffers an emotional uproar in her personal life after a fan dies trying to see her.","Language":"English","Country":"USA","Awards":"Nominated for 2 Golden Globes. Another 2 wins & 1 nomination.","Poster":"https://images-na.ssl-images-amazon.com/images/M/MV5BMTU5NTE1NTY5NF5BMl5BanBnXkFtZTgwODAwMzkwMzE@._V1_SX300.jpg","Ratings":[{"Source":"Internet Movie Database","Value":"8.1/10"},{"Source":"Rotten Tomatoes","Value":"92%"}],"Metascore":"N/A","imdbRating":"8.1","imdbVotes":"6,494","imdbID":"tt0079672","Type":"movie","DVD":"29 Jun 1998","BoxOffice":"N/A","Production":"Faces Distributing Corporation","Website":"N/A","Response":"True"},
{"Title":"Practical Magic","Year":"1998","Rated":"PG-13","Released":"16 Oct 1998","Runtime":"104 min","Genre":"Comedy, Drama, Fantasy","Director":"Griffin Dunne","Writer":"Alice Hoffman (novel), Robin Swicord (screenplay), Akiva Goldsman (screenplay), Adam Brooks (screenplay)","Actors":"Sandra Bullock, Nicole Kidman, Stockard Channing, Dianne Wiest","Plot":"Two witch sisters, raised by their eccentric aunts in a small town, face closed-minded prejudice and a curse which threatens to prevent them ever finding lasting love.","Language":"English","Country":"USA","Awards":"1 win & 6 nominations.","Poster":"https://images-na.ssl-images-amazon.com/images/M/MV5BMThhNmFkMzgtNGUxOS00N2Q4LWJlMTctYjdlNjM0YmQzMTVkL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyNTYxMjAyNzg@._V1_SX300.jpg","Ratings":[{"Source":"Internet Movie Database","Value":"6.2/10"},{"Source":"Rotten Tomatoes","Value":"20%"},{"Source":"Metacritic","Value":"46/100"}],"Metascore":"46","imdbRating":"6.2","imdbVotes":"59,132","imdbID":"tt0120791","Type":"movie","DVD":"16 Feb 1999","BoxOffice":"N/A","Production":"Warner Bros. Pictures","Website":"http://www.practicalmagic.com","Response":"True"},
{"Title":"Sleepy Hollow","Year":"1999","Rated":"R","Released":"19 Nov 1999","Runtime":"105 min","Genre":"Fantasy, Horror, Mystery","Director":"Tim Burton","Writer":"Washington Irving (story \"The Legend of Sleepy Hollow\"), Kevin Yagher (screen story), Andrew Kevin Walker (screen story), Andrew Kevin Walker (screenplay)","Actors":"Johnny Depp, Christina Ricci, Miranda Richardson, Michael Gambon","Plot":"Ichabod Crane is sent to Sleepy Hollow to investigate the decapitations of 3 people with the culprit being the legendary apparition, the Headless Horseman.","Language":"English, Latin","Country":"USA, Germany","Awards":"Won 1 Oscar. Another 23 wins & 39 nominations.","Poster":"https://images-na.ssl-images-amazon.com/images/M/MV5BMTQ4Yjk5ODEtNGFkOS00OTY1LTgwYTYtOTFkNmU2NzBmNGM2XkEyXkFqcGdeQXVyNDQ2MTMzODA@._V1_SX300.jpg","Ratings":[{"Source":"Internet Movie Database","Value":"7.4/10"},{"Source":"Rotten Tomatoes","Value":"67%"},{"Source":"Metacritic","Value":"65/100"}],"Metascore":"65","imdbRating":"7.4","imdbVotes":"282,208","imdbID":"tt0162661","Type":"movie","DVD":"23 May 2000","BoxOffice":"N/A","Production":"Paramount Pictures","Website":"http://www2.sleepyhollowmovie.com","Response":"True"},
{"Title":"Small Soldiers","Year":"1998","Rated":"PG-13","Released":"10 Jul 1998","Runtime":"110 min","Genre":"Action, Adventure, Comedy","Director":"Joe Dante","Writer":"Gavin Scott, Adam Rifkin, Ted Elliott, Terry Rossio","Actors":"David Cross, Jay Mohr, Alexandra Wilson, Denis Leary","Plot":"When missile technology is used to enhance toy action figures, the toys soon begin to take their battle programming too seriously.","Language":"English","Country":"USA","Awards":"3 wins & 4 nominations.","Poster":"https://images-na.ssl-images-amazon.com/images/M/MV5BNzhiZmZkYjQtMTFlZi00YmQ2LTg5NGEtM2M4ZTg4ZjAyNzI1L2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg","Ratings":[{"Source":"Internet Movie Database","Value":"6.1/10"},{"Source":"Rotten Tomatoes","Value":"48%"}],"Metascore":"N/A","imdbRating":"6.1","imdbVotes":"80,619","imdbID":"tt0122718","Type":"movie","DVD":"01 Dec 1998","BoxOffice":"N/A","Production":"Dreamworks","Website":"N/A","Response":"True"},
{"Title":"Tie the Knot","Year":"2016","Rated":"N/A","Released":"04 May 2016","Runtime":"90 min","Genre":"Comedy, Family, Romance","Director":"Shuja Paul","Writer":"Nadia Kijanka, Shuja Paul (story), Shuja Paul, Shuja Paul","Actors":"Tara Reid, Karishma Ahluwalia, Parvesh Cheena, Ashley Schmitt","Plot":"The hysterical cross cultural journey of hearts.","Language":"English","Country":"USA","Awards":"N/A","Poster":"https://images-na.ssl-images-amazon.com/images/M/MV5BMTg2NDU4NjQ0NF5BMl5BanBnXkFtZTgwNTU4MjQzNDE@._V1_SX300.jpg","Ratings":[{"Source":"Internet Movie Database","Value":"4.6/10"}],"Metascore":"N/A","imdbRating":"4.6","imdbVotes":"15","imdbID":"tt3038542","Type":"movie","DVD":"21 Feb 2017","BoxOffice":"N/A","Production":"N/A","Website":"N/A","Response":"True"},
{"Title":"Straight Talk: The Truth About Alcohol & Sex","Year":"2009","Rated":"N/A","Released":"N/A","Runtime":"20 min","Genre":"Short, Drama, Family","Director":"Jared Bentley","Writer":"Jared Bentley, Erahm Christopher","Actors":"Bridgette Bassa, Brent Waffle, Diana Zahir","Plot":"Follows a young group of teens as they deal with the pressures and consequences of alcohol abuse and reckless sexual behavior.","Language":"English","Country":"Canada, USA","Awards":"N/A","Poster":"N/A","Ratings":[],"Metascore":"N/A","imdbRating":"N/A","imdbVotes":"N/A","imdbID":"tt1527750","Type":"movie","DVD":"N/A","BoxOffice":"N/A","Production":"N/A","Website":"N/A","Response":"True"},
{"Title":"The Wedding Party","Year":"2005","Rated":"N/A","Released":"21 Apr 2005","Runtime":"92 min","Genre":"Action, Comedy, Drama","Director":"Dominique Deruddere","Writer":"Christoph Darnstädt (script collaborator), Dominique Deruddere, Hermann Huppen (comic book), Jean Van Hamme (comic book)","Actors":"Armin Rohde, Uwe Ochsenknecht, Imogen Kogge, Arne Lenk","Plot":"Screaming, shooting, tears and blood changes the party into a nightmare.","Language":"German","Country":"Germany, Belgium","Awards":"1 win & 3 nominations.","Poster":"https://images-na.ssl-images-amazon.com/images/M/MV5BMTk0OTU2OTU0Ml5BMl5BanBnXkFtZTcwODc1NDM0MQ@@._V1_SX300.jpg","Ratings":[{"Source":"Internet Movie Database","Value":"6.6/10"}],"Metascore":"N/A","imdbRating":"6.6","imdbVotes":"975","imdbID":"tt0382572","Type":"movie","DVD":"24 Apr 2007","BoxOffice":"N/A","Production":"Constantin Film","Website":"http://www.bluthochzeit.film.de/","Response":"True"},
{"Title":"Who Gets the Dog?","Year":"2016","Rated":"PG","Released":"13 Sep 2016","Runtime":"95 min","Genre":"Comedy","Director":"Huck Botko","Writer":"Matt JL Wheeler, Rick Rapoza","Actors":"Ryan Kwanten, Alicia Silverstone, Randall Batinkoff, Matty Ryan","Plot":"A couple going through a divorce squabble over custody of their beloved dog.","Language":"English","Country":"USA","Awards":"2 nominations.","Poster":"https://images-na.ssl-images-amazon.com/images/M/MV5BMjMyMTI4OTMxMF5BMl5BanBnXkFtZTgwMTk2NTM2OTE@._V1_SX300.jpg","Ratings":[{"Source":"Internet Movie Database","Value":"4.8/10"}],"Metascore":"N/A","imdbRating":"4.8","imdbVotes":"540","imdbID":"tt1949605","Type":"movie","DVD":"27 Sep 2016","BoxOffice":"N/A","Production":"2DS Productions","Website":"N/A","Response":"True"},
{"Title":"Wild Wild West","Year":"1999","Rated":"PG-13","Released":"30 Jun 1999","Runtime":"106 min","Genre":"Action, Comedy, Sci-Fi","Director":"Barry Sonnenfeld","Writer":"Jim Thomas (story), John Thomas (story), S.S. Wilson (screenplay), Brent Maddock (screenplay), Jeffrey Price (screenplay), Peter S. Seaman (screenplay)","Actors":"Will Smith, Kevin Kline, Kenneth Branagh, Salma Hayek","Plot":"The two best hired guns in the West must save President Grant from the clutches of a nineteenth-century inventor-villain.","Language":"English","Country":"USA","Awards":"12 wins & 15 nominations.","Poster":"https://images-na.ssl-images-amazon.com/images/M/MV5BYmYyMTc4YjItMGNhNC00OWQwLWJhMWUtNTdjZDgxMDI5MjE2L2ltYWdlXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg","Ratings":[{"Source":"Internet Movie Database","Value":"4.8/10"},{"Source":"Rotten Tomatoes","Value":"17%"},{"Source":"Metacritic","Value":"38/100"}],"Metascore":"38","imdbRating":"4.8","imdbVotes":"135,166","imdbID":"tt0120891","Type":"movie","DVD":"30 Nov 1999","BoxOffice":"N/A","Production":"Warner Bros. Pictures","Website":"http://wildwildwest.warnerbros.com","Response":"True"},
{"Title":"The Founder","Year":"2016","Rated":"PG-13","Released":"20 Jan 2017","Runtime":"115 min","Genre":"Biography, Drama, History","Director":"John Lee Hancock","Writer":"Robert D. Siegel","Actors":"Michael Keaton, Nick Offerman, John Carroll Lynch, Linda Cardellini","Plot":"The story of Ray Kroc, a salesman who turned two brothers' innovative fast food eatery, McDonald's, into one of the biggest restaurant businesses in the world with a combination of ambition, persistence and ruthlessness.","Language":"English","Country":"USA","Awards":"1 win & 3 nominations.","Poster":"https://images-na.ssl-images-amazon.com/images/M/MV5BMzExNDg0MDk1M15BMl5BanBnXkFtZTgwNzE1Mjg0MDI@._V1_SX300.jpg","Ratings":[{"Source":"Internet Movie Database","Value":"7.2/10"},{"Source":"Rotten Tomatoes","Value":"84%"},{"Source":"Metacritic","Value":"66/100"}],"Metascore":"66","imdbRating":"7.2","imdbVotes":"48,858","imdbID":"tt4276820","Type":"movie","DVD":"18 Apr 2017","BoxOffice":"$12,785,093","Production":"The Weinstein Company","Website":"http://thefounderfilm.com/","Response":"True"},
{"Title":"Jab We Met","Year":"2007","Rated":"N/A","Released":"26 Oct 2007","Runtime":"138 min","Genre":"Comedy, Drama, Romance","Director":"Imtiaz Ali","Writer":"Imtiaz Ali","Actors":"Shahid Kapoor, Kareena Kapoor Khan, Tarun Arora, Dara Singh","Plot":"A depressed wealthy businessman finds his life changing after he meets a spunky and care-free young woman.","Language":"Hindi, Panjabi, English","Country":"India","Awards":"7 wins & 14 nominations.","Poster":"https://images-na.ssl-images-amazon.com/images/M/MV5BMjExODIzNjU3N15BMl5BanBnXkFtZTcwNjk4NTk5Mw@@._V1_SX300.jpg","Ratings":[{"Source":"Internet Movie Database","Value":"8.0/10"}],"Metascore":"N/A","imdbRating":"8.0","imdbVotes":"35,463","imdbID":"tt1093370","Type":"movie","DVD":"08 Jan 2008","BoxOffice":"N/A","Production":"Studio 18","Website":"http://www.jabwemetthefilm.com/","Response":"True"},
{"Title":"The Invisible Guardian","Year":"2017","Rated":"N/A","Released":"03 Mar 2017","Runtime":"129 min","Genre":"Thriller","Director":"Fernando González Molina","Writer":"Luiso Berdejo, Dolores Redondo (novel)","Actors":"Marta Etura, Elvira Mínguez, Francesc Orella, Itziar Aizpuru","Plot":"An inspector woman must to confront a serial killer case with the ghosts of her own family past.","Language":"Spanish, English, Basque","Country":"Spain, Germany","Awards":"N/A","Poster":"https://images-na.ssl-images-amazon.com/images/M/MV5BYjI1ZTI5YjYtZjI2MS00OTBjLWIyYzUtMDMxYmQzNjM4Y2JiL2ltYWdlXkEyXkFqcGdeQXVyMjQ3NzUxOTM@._V1_SX300.jpg","Ratings":[{"Source":"Internet Movie Database","Value":"5.8/10"}],"Metascore":"N/A","imdbRating":"5.8","imdbVotes":"514","imdbID":"tt4924942","Type":"movie","DVD":"N/A","BoxOffice":"N/A","Production":"N/A","Website":"N/A","Response":"True"},
{"Title":"Sing","Year":"2016","Rated":"PG","Released":"21 Dec 2016","Runtime":"108 min","Genre":"Animation, Comedy, Family","Director":"Christophe Lourdelet, Garth Jennings","Writer":"Garth Jennings","Actors":"Matthew McConaughey, Reese Witherspoon, Seth MacFarlane, Scarlett Johansson","Plot":"In a city of humanoid animals, a hustling theater impresario's attempt to save his theater with a singing competition becomes grander than he anticipates even as its finalists' find that their lives will never be the same.","Language":"English, Japanese, Ukrainian","Country":"USA","Awards":"Nominated for 2 Golden Globes. Another 1 win & 14 nominations.","Poster":"https://images-na.ssl-images-amazon.com/images/M/MV5BMTYzODYzODU2Ml5BMl5BanBnXkFtZTgwNTc1MTA2NzE@._V1_SX300.jpg","Ratings":[{"Source":"Internet Movie Database","Value":"7.2/10"},{"Source":"Rotten Tomatoes","Value":"73%"},{"Source":"Metacritic","Value":"59/100"}],"Metascore":"59","imdbRating":"7.2","imdbVotes":"71,106","imdbID":"tt3470600","Type":"movie","DVD":"21 Mar 2017","BoxOffice":"$270,322,940","Production":"Illumination Entertainment","Website":"http://www.singmovie.com/","Response":"True"},
{"Title":"Icarus","Year":"2017","Rated":"N/A","Released":"04 Aug 2017","Runtime":"110 min","Genre":"Documentary, Thriller","Director":"Bryan Fogel","Writer":"Jon Bertain, Bryan Fogel, Mark Monroe, Timothy Rode","Actors":"Bryan Fogel, Nikita Kamaev, Grigory Rodchenkov","Plot":"When Bryan Fogel sets out to uncover the truth about doping in sports, a chance meeting with a Russian scientist transforms his story from a personal experiment into a geopolitical thriller...","Language":"English","Country":"USA","Awards":"1 win & 1 nomination.","Poster":"https://images-na.ssl-images-amazon.com/images/M/MV5BMTExMDc5NjQyMjJeQTJeQWpwZ15BbWU4MDEzMzkyODIy._V1_SX300.jpg","Ratings":[{"Source":"Internet Movie Database","Value":"7.6/10"},{"Source":"Rotten Tomatoes","Value":"90%"},{"Source":"Metacritic","Value":"70/100"}],"Metascore":"70","imdbRating":"7.6","imdbVotes":"157","imdbID":"tt6333060","Type":"movie","DVD":"04 Aug 2017","BoxOffice":"N/A","Production":"Impact Partners","Website":"http://www.icarus.film/media/","Response":"True"},
{"Title":"Holes","Year":"2003","Rated":"PG","Released":"18 Apr 2003","Runtime":"117 min","Genre":"Adventure, Comedy, Drama","Director":"Andrew Davis","Writer":"Louis Sachar (novel), Louis Sachar (screenplay)","Actors":"Sigourney Weaver, Jon Voight, Tim Blake Nelson, Shia LaBeouf","Plot":"A wrongfully convicted boy is sent to a brutal desert detention camp where he joins the job of digging holes for some mysterious reason.","Language":"English","Country":"USA","Awards":"3 wins & 9 nominations.","Poster":"https://images-na.ssl-images-amazon.com/images/M/MV5BMTg0MTU5ODkwM15BMl5BanBnXkFtZTYwMzgxNzY3._V1_SX300.jpg","Ratings":[{"Source":"Internet Movie Database","Value":"7.1/10"},{"Source":"Rotten Tomatoes","Value":"77%"},{"Source":"Metacritic","Value":"71/100"}],"Metascore":"71","imdbRating":"7.1","imdbVotes":"62,112","imdbID":"tt0311289","Type":"movie","DVD":"23 Sep 2003","BoxOffice":"$67,325,559","Production":"Buena Vista Pictures","Website":"http://disney.go.com/disneypictures/holes/index.html","Response":"True"},
{"Title":"Black Site Delta","Year":"2017","Rated":"N/A","Released":"05 May 2017","Runtime":"87 min","Genre":"Action","Director":"Jesse Gustafson","Writer":"Rick Benattar (original story), Guy Stevenson, Nigel Thomas (original story)","Actors":"Cam Gigandet, Teri Reeves, Sherri Eakin, Jeremy Sande","Plot":"A group of military prisoners must fight off a terrorist attack on their prison which, unbeknownst to them, is a cover for a secret drone control facility.","Language":"English","Country":"USA","Awards":"N/A","Poster":"https://images-na.ssl-images-amazon.com/images/M/MV5BMWZlMjYzOGQtNTI0MS00ODY0LWIyZDUtYTBjYzMyOTQyYjBkXkEyXkFqcGdeQXVyMzQwMTY2Nzk@._V1_SX300.jpg","Ratings":[{"Source":"Internet Movie Database","Value":"4.0/10"}],"Metascore":"N/A","imdbRating":"4.0","imdbVotes":"140","imdbID":"tt5667516","Type":"movie","DVD":"09 May 2017","BoxOffice":"N/A","Production":"Xlrator Media","Website":"N/A","Response":"True"},
{"Title":"Diary of an Exorcist","Year":"2015","Rated":"N/A","Released":"N/A","Runtime":"N/A","Genre":"Horror","Director":"N/A","Writer":"Ian Ascher (story), Nick Slatkin","Actors":"N/A","Plot":"N/A","Language":"English","Country":"USA","Awards":"N/A","Poster":"N/A","Ratings":[],"Metascore":"N/A","imdbRating":"N/A","imdbVotes":"N/A","imdbID":"tt3310848","Type":"movie","DVD":"N/A","BoxOffice":"N/A","Production":"N/A","Website":"N/A","Response":"True"},
{"Title":"Naked","Year":"1993","Rated":"UNRATED","Released":"04 Feb 1994","Runtime":"132 min","Genre":"Comedy, Drama","Director":"Mike Leigh","Writer":"Mike Leigh","Actors":"David Thewlis, Lesley Sharp, Katrin Cartlidge, Greg Cruttwell","Plot":"Parallel tales of two sexually obsessed men, one hurting and annoying women physically and mentally, one wandering around the city talking to strangers and experiencing dimensions of life.","Language":"English","Country":"UK","Awards":"8 wins & 7 nominations.","Poster":"https://images-na.ssl-images-amazon.com/images/M/MV5BMjA3Y2I4NjAtMDQyZS00ZGJhLWEwMzgtODBiNzE5Zjc1Nzk1L2ltYWdlXkEyXkFqcGdeQXVyNTc2MDU0NDE@._V1_SX300.jpg","Ratings":[{"Source":"Internet Movie Database","Value":"7.9/10"},{"Source":"Rotten Tomatoes","Value":"88%"},{"Source":"Metacritic","Value":"84/100"}],"Metascore":"84","imdbRating":"7.9","imdbVotes":"25,633","imdbID":"tt0107653","Type":"movie","DVD":"27 Sep 2005","BoxOffice":"N/A","Production":"New Line Cinema","Website":"N/A","Response":"True"},
{"Title":"White Gold","Year":"2017–","Rated":"N/A","Released":"24 May 2017","Runtime":"30 min","Genre":"Comedy","Director":"N/A","Writer":"Damon Beesley","Actors":"Ed Westwick, Joe Thomas, James Buckley, Linzey Cocker","Plot":"The story of a double-glazing showroom in Essex in 1983, led by charismatic salesman Vincent who is smart, handsome and cocksure, He will happily break the rules if it guarantees a sale.","Language":"English","Country":"UK","Awards":"N/A","Poster":"https://images-na.ssl-images-amazon.com/images/M/MV5BNmIzNzEyMjYtNTViMy00Mjg0LTgxNGYtNjNhZTM4OTM0NTBlXkEyXkFqcGdeQXVyMjkyMzg4OTM@._V1_SX300.jpg","Ratings":[{"Source":"Internet Movie Database","Value":"7.6/10"}],"Metascore":"N/A","imdbRating":"7.6","imdbVotes":"1,116","imdbID":"tt6010920","Type":"series","totalSeasons":"1","Response":"True"},
{"Title":"Arthur and the Invisibles","Year":"2006","Rated":"PG","Released":"12 Jan 2007","Runtime":"94 min","Genre":"Animation, Adventure, Family","Director":"Luc Besson","Writer":"Céline Garcia, Luc Besson, Luc Besson (book), Patrice Garcia (creator: characters and settings), Georges Bouchelagem (creator: characters and settings), Philippe Rouchier (creator: characters and settings), Nicolas Fructus (creator: characters and settings)","Actors":"Freddie Highmore, Mia Farrow, Ron Crawford, Penny Balfour","Plot":"Ten-year-old Arthur, in a bid to save his grandfather's house from being demolished, goes looking for some much-fabled hidden treasure in the land of the Minimoys, a tiny people living in harmony with nature.","Language":"English","Country":"France","Awards":"1 win & 2 nominations.","Poster":"https://images-na.ssl-images-amazon.com/images/M/MV5BNDQ2ODQ1NTM5OF5BMl5BanBnXkFtZTcwNjQzNTA0MQ@@._V1_SX300.jpg","Ratings":[{"Source":"Internet Movie Database","Value":"6.0/10"},{"Source":"Rotten Tomatoes","Value":"21%"},{"Source":"Metacritic","Value":"39/100"}],"Metascore":"39","imdbRating":"6.0","imdbVotes":"27,282","imdbID":"tt0344854","Type":"movie","DVD":"15 May 2007","BoxOffice":"$15,004,318","Production":"MGM","Website":"http://www.mgm.com/","Response":"True"},
{"Title":"Hot Property","Year":"2016","Rated":"N/A","Released":"25 Jun 2016","Runtime":"83 min","Genre":"Comedy","Director":"Max McGill","Writer":"Andrew Cryan, Max McGill","Actors":"MyAnna Buring, Tom Rhys Harries, Alex Ferns, Kate Bracken","Plot":"Hot Property is an anarchic satire for 'generation rent'. An un-romantic comedy about love, greed and psychotic estate agents. Set amid London's deranged property market and self-parodying hipster culture.","Language":"English","Country":"UK","Awards":"N/A","Poster":"https://images-na.ssl-images-amazon.com/images/M/MV5BNzYzMjkyNmYtYWZhMi00NWVjLTg3NDYtYzE5ZTZmOWE0Nzc4XkEyXkFqcGdeQXVyMjA2MTc2MTg@._V1_SX300.jpg","Ratings":[{"Source":"Internet Movie Database","Value":"5.0/10"}],"Metascore":"N/A","imdbRating":"5.0","imdbVotes":"32","imdbID":"tt3515318","Type":"movie","DVD":"N/A","BoxOffice":"N/A","Production":"N/A","Website":"N/A","Response":"True"},
{"Title":"Mission Control: The Unsung Heroes of Apollo","Year":"2017","Rated":"N/A","Released":"14 Mar 2017","Runtime":"101 min","Genre":"Documentary, History","Director":"David Fairhead","Writer":"N/A","Actors":"N/A","Plot":"At the heart of the Apollo program was the special team in Mission Control who put a man on the moon and helped create the future.","Language":"English","Country":"USA, UK","Awards":"N/A","Poster":"https://images-na.ssl-images-amazon.com/images/M/MV5BYmM3YWM1NTItZTNiNS00MzlhLTk2YmMtZmRmYzdmMTk0ZThiXkEyXkFqcGdeQXVyMTY2NTQ3ODc@._V1_SX300.jpg","Ratings":[{"Source":"Internet Movie Database","Value":"8.6/10"},{"Source":"Metacritic","Value":"71/100"}],"Metascore":"71","imdbRating":"8.6","imdbVotes":"65","imdbID":"tt5959952","Type":"movie","DVD":"N/A","BoxOffice":"N/A","Production":"N/A","Website":"N/A","Response":"True"},
{"Title":"The Outcasts","Year":"2017","Rated":"PG-13","Released":"14 Apr 2017","Runtime":"95 min","Genre":"Comedy","Director":"Peter Hutchings","Writer":"Dominique Ferrari, Suzanne Wrubel","Actors":"Avan Jogia, Eden Sher, Peyton List, Victoria Justice","Plot":"After falling victim to a humiliating prank by the high school Queen Bee, best friends and world-class geeks, Mindy and Jodi, decide to get their revenge by uniting the outcasts of the school against her and her circle of friends.","Language":"English","Country":"USA","Awards":"N/A","Poster":"https://images-na.ssl-images-amazon.com/images/M/MV5BMTk1N2Y3MDctODY4MS00M2I5LWE2YzEtMThmODAwMjEwMTA4XkEyXkFqcGdeQXVyMjMwMzk5OTI@._V1_SX300.jpg","Ratings":[{"Source":"Internet Movie Database","Value":"5.8/10"},{"Source":"Rotten Tomatoes","Value":"50%"}],"Metascore":"N/A","imdbRating":"5.8","imdbVotes":"726","imdbID":"tt2597760","Type":"movie","DVD":"14 Apr 2017","BoxOffice":"N/A","Production":"BCDF Pictures","Website":"http://theoutcastsmovie.com/","Response":"True"},
{"Title":"Urban Hymn","Year":"2015","Rated":"N/A","Released":"12 May 2017","Runtime":"114 min","Genre":"Crime, Drama","Director":"Michael Caton-Jones","Writer":"Nick Moorcroft","Actors":"Shirley Henderson, Ian Hart, Steven Mackintosh, Letitia Wright","Plot":"Urban Hymn follows a troubled teenage girl, Jamie, who possesses an amazing singing voice, and an inspiring and unconventional social worker, Kate, who encourages her to use it.","Language":"English","Country":"UK","Awards":"3 wins & 1 nomination.","Poster":"https://images-na.ssl-images-amazon.com/images/M/MV5BZjkwYzVlZjEtM2M4Yi00NThiLTg1ZjUtMjAxMWRhMjgzYzY2XkEyXkFqcGdeQXVyNDg3MTQxOTg@._V1_SX300.jpg","Ratings":[{"Source":"Internet Movie Database","Value":"6.2/10"},{"Source":"Rotten Tomatoes","Value":"58%"},{"Source":"Metacritic","Value":"51/100"}],"Metascore":"51","imdbRating":"6.2","imdbVotes":"210","imdbID":"tt2184335","Type":"movie","DVD":"12 May 2017","BoxOffice":"N/A","Production":"Level 33 Entertainment","Website":"N/A","Response":"True"},
{"Title":"21","Year":"2008","Rated":"PG-13","Released":"28 Mar 2008","Runtime":"123 min","Genre":"Crime, Drama, Thriller","Director":"Robert Luketic","Writer":"Peter Steinfeld (screenplay), Allan Loeb (screenplay), Ben Mezrich (book)","Actors":"Jim Sturgess, Kevin Spacey, Kate Bosworth, Aaron Yoo","Plot":"\"21\" is the fact-based story about six MIT students who were trained to become experts in card counting and subsequently took Vegas casinos for millions in winnings.","Language":"English","Country":"USA","Awards":"1 win & 5 nominations.","Poster":"https://images-na.ssl-images-amazon.com/images/M/MV5BMjAyNTU5OTcxOV5BMl5BanBnXkFtZTcwMDEyNjM2MQ@@._V1_SX300.jpg","Ratings":[{"Source":"Internet Movie Database","Value":"6.8/10"},{"Source":"Rotten Tomatoes","Value":"36%"},{"Source":"Metacritic","Value":"48/100"}],"Metascore":"48","imdbRating":"6.8","imdbVotes":"199,834","imdbID":"tt0478087","Type":"movie","DVD":"22 Jul 2008","BoxOffice":"$81,159,365","Production":"Sony/Columbia Pictures","Website":"http://www.sonypictures.com/movies/21/","Response":"True"},
{"Title":"The Barbeque","Year":"2015","Rated":"N/A","Released":"25 Apr 2015","Runtime":"8 min","Genre":"Short, War","Director":"Tony Hunt","Writer":"N/A","Actors":"Peter Butler, Pia Justine Cruz, Sean Cruz, Daniel Harpur","Plot":"At a BBQ, the wife of a soldier learns that he has to go to war. Her parents try to reason with her not to let him go - and it turns out her father has been keeping something secret from her.","Language":"English","Country":"Australia","Awards":"N/A","Poster":"N/A","Ratings":[],"Metascore":"N/A","imdbRating":"N/A","imdbVotes":"N/A","imdbID":"tt4633962","Type":"movie","DVD":"N/A","BoxOffice":"N/A","Production":"N/A","Website":"N/A","Response":"True"},
{"Title":"Donald Cried","Year":"2016","Rated":"N/A","Released":"12 Mar 2016","Runtime":"85 min","Genre":"Comedy, Drama","Director":"Kris Avedisian","Writer":"Kris Avedisian, Kris Avedisian (screenplay), Kyle Espeleta (story), Jesse Wakeman (story)","Actors":"Jesse Wakeman, Louisa Krause, Tyrone Alcorn, Ted Arcidi","Plot":"With sudden passing of his grandmother, Peter Latang returns to his hometown and encounters his long lost, childhood friend, Donald Treebeck. What begins as a simple favor, turns into a long day's journey into the past.","Language":"English","Country":"USA","Awards":"6 wins & 6 nominations.","Poster":"https://images-na.ssl-images-amazon.com/images/M/MV5BMTUyNjU2MzMzMl5BMl5BanBnXkFtZTgwNTUwNTcxMTI@._V1_SX300.jpg","Ratings":[{"Source":"Internet Movie Database","Value":"6.5/10"},{"Source":"Rotten Tomatoes","Value":"92%"},{"Source":"Metacritic","Value":"72/100"}],"Metascore":"72","imdbRating":"6.5","imdbVotes":"406","imdbID":"tt4442604","Type":"movie","DVD":"N/A","BoxOffice":"$61,309","Production":"Electric Chinoland","Website":"http://www.donaldcried.com/","Response":"True"},
{"Title":"My Ex-Ex","Year":"2015","Rated":"N/A","Released":"15 Sep 2015","Runtime":"89 min","Genre":"Comedy, Romance","Director":"Nathaniel Warsh","Writer":"André Bharti, André Bharti","Actors":"André Bharti, Katherine Barrell, Ray Galletti, Emily Alatalo","Plot":"A recently-jilted woman has to decide whether to take back the man who dumped her or return to her college boyfriend.","Language":"English","Country":"Canada","Awards":"N/A","Poster":"https://images-na.ssl-images-amazon.com/images/M/MV5BNjQ3MzI0MjMwOF5BMl5BanBnXkFtZTgwNjM0MTY3NTE@._V1_SX300.jpg","Ratings":[{"Source":"Internet Movie Database","Value":"7.3/10"}],"Metascore":"N/A","imdbRating":"7.3","imdbVotes":"19","imdbID":"tt3202940","Type":"movie","DVD":"N/A","BoxOffice":"N/A","Production":"Project AMB","Website":"N/A","Response":"True"},
{"Title":"The Sweet Life","Year":"2016","Rated":"N/A","Released":"07 Jun 2016","Runtime":"90 min","Genre":"Comedy, Drama, Romance","Director":"Rob Spera","Writer":"Jared Rappaport","Actors":"Chris Messina, Abigail Spencer, Brian Shortall, Karan Soni","Plot":"The Sweet Life, an edgy and unconventional dramedy, is the love story of Kenny Parker and Lolita Nowicki, each struggling with their own brand of demons, who first meet by chance in Chicago...","Language":"English","Country":"USA","Awards":"1 win & 1 nomination.","Poster":"https://images-na.ssl-images-amazon.com/images/M/MV5BMTA5OTkxMzE1ODleQTJeQWpwZ15BbWU4MDYxNzM5NzEy._V1_SX300.jpg","Ratings":[{"Source":"Internet Movie Database","Value":"6.2/10"}],"Metascore":"N/A","imdbRating":"6.2","imdbVotes":"543","imdbID":"tt4838534","Type":"movie","DVD":"11 Apr 2017","BoxOffice":"N/A","Production":"Mockingbird Pictures","Website":"N/A","Response":"True"},
{"Title":"Gold","Year":"2016","Rated":"R","Released":"27 Jan 2017","Runtime":"120 min","Genre":"Adventure, Drama, Thriller","Director":"Stephen Gaghan","Writer":"Patrick Massett, John Zinman","Actors":"Matthew McConaughey, Edgar Ramírez, Bryce Dallas Howard, Corey Stoll","Plot":"Kenny Wells, a prospector desperate for a lucky break, teams up with a similarly eager geologist and sets off on a journey to find gold in the uncharted jungle of Indonesia.","Language":"English, Indonesian","Country":"USA","Awards":"Nominated for 1 Golden Globe. Another 1 win & 3 nominations.","Poster":"https://images-na.ssl-images-amazon.com/images/M/MV5BNjEwNzMzMDI4Nl5BMl5BanBnXkFtZTgwMTM2ODkwMTI@._V1_SX300.jpg","Ratings":[{"Source":"Internet Movie Database","Value":"6.7/10"},{"Source":"Metacritic","Value":"49/100"}],"Metascore":"49","imdbRating":"6.7","imdbVotes":"25,128","imdbID":"tt1800302","Type":"movie","DVD":"N/A","BoxOffice":"N/A","Production":"N/A","Website":"N/A","Response":"True"},
{"Title":"I Am Sam","Year":"2001","Rated":"PG-13","Released":"25 Jan 2002","Runtime":"132 min","Genre":"Drama","Director":"Jessie Nelson","Writer":"Kristine Johnson, Jessie Nelson","Actors":"Sean Penn, Michelle Pfeiffer, Dakota Fanning, Dianne Wiest","Plot":"A mentally handicapped man fights for custody of his 7-year-old daughter, and in the process teaches his cold hearted lawyer the value of love and family.","Language":"English","Country":"USA","Awards":"Nominated for 1 Oscar. Another 8 wins & 10 nominations.","Poster":"https://images-na.ssl-images-amazon.com/images/M/MV5BYzEyNzc0NjctZjJiZC00MWI1LWJlOTMtYWZkZDAzNzQ0ZDNkXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg","Ratings":[{"Source":"Internet Movie Database","Value":"7.6/10"},{"Source":"Rotten Tomatoes","Value":"34%"},{"Source":"Metacritic","Value":"28/100"}],"Metascore":"28","imdbRating":"7.6","imdbVotes":"127,286","imdbID":"tt0277027","Type":"movie","DVD":"18 Jun 2002","BoxOffice":"$40,270,895","Production":"New Line Cinema","Website":"http://www.iamsammovie.com","Response":"True"},
{"Title":"What Happened to Monday?","Year":"2017","Rated":"N/A","Released":"N/A","Runtime":"N/A","Genre":"Sci-Fi, Thriller","Director":"Tommy Wirkola","Writer":"Max Botkin, Kerry Williamson","Actors":"Noomi Rapace, Willem Dafoe, Glenn Close, Robert Wagner","Plot":"In a world where families are limited to one child due to overpopulation, a set of identical septuplets must avoid being put to a long sleep by the government and dangerous infighting while investigating the disappearance of one of their own.","Language":"English","Country":"UK","Awards":"N/A","Poster":"https://images-na.ssl-images-amazon.com/images/M/MV5BYWU0YzJlYjktYTc2YS00YmFlLTlhNzItODQzMmViMWExODJlXkEyXkFqcGdeQXVyNDkzNTM2ODg@._V1_SX300.jpg","Ratings":[],"Metascore":"N/A","imdbRating":"N/A","imdbVotes":"N/A","imdbID":"tt1536537","Type":"movie","DVD":"18 Aug 2017","BoxOffice":"N/A","Production":"Netflix","Website":"N/A","Response":"True"},
{"Title":"Hide and Seek","Year":"2005","Rated":"R","Released":"28 Jan 2005","Runtime":"101 min","Genre":"Drama, Horror, Mystery","Director":"John Polson","Writer":"Ari Schlossberg","Actors":"Robert De Niro, Dakota Fanning, Famke Janssen, Elisabeth Shue","Plot":"As a widower tries to piece together his life in the wake of his wife's suicide, his daughter finds solace -- at first -- in her imaginary friend.","Language":"English","Country":"USA, Germany","Awards":"1 win & 5 nominations.","Poster":"https://images-na.ssl-images-amazon.com/images/M/MV5BMjA1MDkxNDY4OV5BMl5BanBnXkFtZTYwMzE4ODc3._V1_SX300.jpg","Ratings":[{"Source":"Internet Movie Database","Value":"5.9/10"},{"Source":"Rotten Tomatoes","Value":"13%"},{"Source":"Metacritic","Value":"35/100"}],"Metascore":"35","imdbRating":"5.9","imdbVotes":"73,126","imdbID":"tt0382077","Type":"movie","DVD":"05 Jul 2005","BoxOffice":"$51,100,000","Production":"20th Century Fox","Website":"http://www.hideandseekthemovie.com/home.html","Response":"True"},
{"Title":"Camera Store","Year":"2016","Rated":"N/A","Released":"N/A","Runtime":"99 min","Genre":"Drama","Director":"Scott Marshall Smith","Writer":"Scott Marshall Smith","Actors":"John Rhys-Davies, Laura Silverman, Cheryl Ladd, John Larroquette","Plot":"On the eve of the transition from film to digital, the longtime denizens of a camera store confront their personal issues in this darkly comic story.","Language":"English","Country":"USA","Awards":"N/A","Poster":"https://images-na.ssl-images-amazon.com/images/M/MV5BNjQ0MjY4MWEtMjliYS00YjVmLTgyY2YtM2I4OTM1OTU1YmY3XkEyXkFqcGdeQXVyNzI1OTE4Ng@@._V1_SX300.jpg","Ratings":[{"Source":"Internet Movie Database","Value":"9.4/10"}],"Metascore":"N/A","imdbRating":"9.4","imdbVotes":"808","imdbID":"tt4651666","Type":"movie","DVD":"N/A","BoxOffice":"N/A","Production":"Provocator","Website":"N/A","Response":"True"},
{"Title":"AWOL","Year":"2016","Rated":"N/A","Released":"23 May 2017","Runtime":"85 min","Genre":"Drama, Romance","Director":"Deb Shoval","Writer":"Deb Shoval, Karolina Waclawiak","Actors":"Lola Kirke, Breeda Wool, Dale Soules, Bill Sage","Plot":"A young woman Joey is in search of direction in her small town. A visit to an army recruiting office appears to provide a path, but when she meets and falls in love with Rayna that path diverges in ways that neither woman anticipates.","Language":"English","Country":"USA","Awards":"2 wins & 3 nominations.","Poster":"https://images-na.ssl-images-amazon.com/images/M/MV5BMjM0MDkyNTY3Ml5BMl5BanBnXkFtZTgwMDAwOTcyMjI@._V1_SX300.jpg","Ratings":[{"Source":"Internet Movie Database","Value":"5.5/10"},{"Source":"Rotten Tomatoes","Value":"100%"}],"Metascore":"N/A","imdbRating":"5.5","imdbVotes":"270","imdbID":"tt4462372","Type":"movie","DVD":"23 May 2017","BoxOffice":"N/A","Production":"Race Point Films","Website":"N/A","Response":"True"},
{"Title":"Bad Rap","Year":"2016","Rated":"N/A","Released":"16 Apr 2016","Runtime":"82 min","Genre":"Documentary, Music","Director":"Salima Koroma","Writer":"N/A","Actors":"Awkwafina, David Lee, Richard Lee, Jonathan Park","Plot":"Four Asian-American rappers run into tough obstacles as they try to make it big in Hip Hop, a genre rooted in black culture.","Language":"English","Country":"USA, Canada","Awards":"N/A","Poster":"https://images-na.ssl-images-amazon.com/images/M/MV5BNjRjZjQzZjgtZDVlNi00ODY5LTgyN2MtN2VkZTg2YmNiMGE2XkEyXkFqcGdeQXVyMjU5MzI5Nzc@._V1_SX300.jpg","Ratings":[{"Source":"Internet Movie Database","Value":"8.1/10"},{"Source":"Rotten Tomatoes","Value":"67%"}],"Metascore":"N/A","imdbRating":"8.1","imdbVotes":"8","imdbID":"tt5264178","Type":"movie","DVD":"23 May 2017","BoxOffice":"N/A","Production":"N/A","Website":"N/A","Response":"True"},
{"Title":"Beautiful Creatures","Year":"2013","Rated":"PG-13","Released":"14 Feb 2013","Runtime":"124 min","Genre":"Drama, Fantasy, Romance","Director":"Richard LaGravenese","Writer":"Richard LaGravenese (screenplay), Kami Garcia (based on the novel \"Beautiful Creatures\" by), Margaret Stohl (based on the novel \"Beautiful Creatures\" by)","Actors":"Alden Ehrenreich, Alice Englert, Jeremy Irons, Viola Davis","Plot":"Ethan longs to escape his small Southern town. He meets a mysterious new girl, Lena. Together, they uncover dark secrets about their respective families, their history and their town.","Language":"English","Country":"USA","Awards":"9 nominations.","Poster":"https://images-na.ssl-images-amazon.com/images/M/MV5BMTQyMjYwODMwMl5BMl5BanBnXkFtZTcwODUwNzY5OA@@._V1_SX300.jpg","Ratings":[{"Source":"Internet Movie Database","Value":"6.2/10"},{"Source":"Rotten Tomatoes","Value":"46%"},{"Source":"Metacritic","Value":"52/100"}],"Metascore":"52","imdbRating":"6.2","imdbVotes":"72,538","imdbID":"tt1559547","Type":"movie","DVD":"21 May 2013","BoxOffice":"$19,445,217","Production":"Warner Bros. Pictures","Website":"http://beautifulcreaturesmovie.com","Response":"True"},
{"Title":"Unacknowledged","Year":"2017","Rated":"N/A","Released":"09 May 2017","Runtime":"100 min","Genre":"Documentary","Director":"Michael Mazzola","Writer":"Michael Mazzola, Stephen Peek","Actors":"Richard Doty, Giancarlo Esposito, Steven M. Greer, Edgar D. Mitchell","Plot":"\"Unacknowledged\" focuses on the historic files of the Disclosure Project and how UFO secrecy has been ruthlessly enforced-and why. The best evidence for extraterrestrial contact, dating ...","Language":"English","Country":"USA","Awards":"N/A","Poster":"https://images-na.ssl-images-amazon.com/images/M/MV5BM2Y0ZTJlZmItZDcyYS00YjRmLWI0NDQtODBjMTM2YWVmM2E4L2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyNTkzMTE1NjI@._V1_SX300.jpg","Ratings":[{"Source":"Internet Movie Database","Value":"7.3/10"}],"Metascore":"N/A","imdbRating":"7.3","imdbVotes":"1,226","imdbID":"tt6400614","Type":"movie","DVD":"09 May 2017","BoxOffice":"N/A","Production":"The Orchard","Website":"N/A","Response":"True"},
{"Title":"Sadie's Last Days on Earth","Year":"2016","Rated":"N/A","Released":"09 Dec 2016","Runtime":"90 min","Genre":"Comedy","Director":"Michael Seater","Writer":"Lauren Collins (story by), Michael Seater (story by), Michael Seater","Actors":"Morgan Taylor Campbell, Clark Backo, Ricardo Hoyos, Munro Chambers","Plot":"Everything in high school is like the world ending and Sadie Mitchell's crippling fear of the coming apocalypse is the heightened version of that. Undeterred by the naysayers, Sadie has two...","Language":"English","Country":"Canada","Awards":"N/A","Poster":"https://images-na.ssl-images-amazon.com/images/M/MV5BZjgzODExNjQtMWUwZi00OGEyLTkyOWItOGFhOTJkODhlNWQ0XkEyXkFqcGdeQXVyNDkwNzc5OQ@@._V1_SX300.jpg","Ratings":[{"Source":"Internet Movie Database","Value":"4.8/10"},{"Source":"Rotten Tomatoes","Value":"40%"}],"Metascore":"N/A","imdbRating":"4.8","imdbVotes":"158","imdbID":"tt5777802","Type":"movie","DVD":"N/A","BoxOffice":"N/A","Production":"BrancSeater Productions","Website":"N/A","Response":"True"},
{"Title":"Feel Rich: Health Is the New Wealth","Year":"2017","Rated":"N/A","Released":"23 May 2017","Runtime":"N/A","Genre":"Documentary","Director":"Peter Spirer","Writer":"Quincy Jones III, John Michael Measells, Will James Moore, Shawn Ullman","Actors":"Common, Jermaine Dupri, Game, Afya Ibomu","Plot":"FEEL RICH: HEALTH IS THE NEW WEALTH documents the nascent self-love revolution emerging in urban communities. Narrated by Quincy Jones III, the film features interviews with iconic artists,...","Language":"English","Country":"USA","Awards":"N/A","Poster":"https://images-na.ssl-images-amazon.com/images/M/MV5BOTNmMzc1MTAtOGNhZC00YWIwLTkyYmItZmViN2FkZDkyYThhXkEyXkFqcGdeQXVyMzQwMTY2Nzk@._V1_SX300.jpg","Ratings":[],"Metascore":"N/A","imdbRating":"N/A","imdbVotes":"N/A","imdbID":"tt6285404","Type":"movie","DVD":"23 May 2017","BoxOffice":"N/A","Production":"Xlrator Media","Website":"N/A","Response":"True"},
{"Title":"Death Note","Year":"2006–2007","Rated":"TV-14","Released":"03 Oct 2006","Runtime":"24 min","Genre":"Animation, Crime, Drama","Director":"N/A","Writer":"N/A","Actors":"Mamoru Miyano, Brad Swaile, Vincent Tong, Ryô Naitô","Plot":"An intelligent high school student goes on a secret crusade to eliminate criminals from the world after discovering a notebook capable of killing anyone whose name is written into it.","Language":"Japanese","Country":"Japan","Awards":"2 wins.","Poster":"https://images-na.ssl-images-amazon.com/images/M/MV5BODkzMjhjYTQtYmQyOS00NmZlLTg3Y2UtYjkzN2JkNmRjY2FhXkEyXkFqcGdeQXVyNTM4MDQ5MDc@._V1_SX300.jpg","Ratings":[{"Source":"Internet Movie Database","Value":"9.0/10"}],"Metascore":"N/A","imdbRating":"9.0","imdbVotes":"135,532","imdbID":"tt0877057","Type":"series","totalSeasons":"1","Response":"True"},
{"Title":"Be Afraid","Year":"2017","Rated":"N/A","Released":"01 Jun 2017","Runtime":"99 min","Genre":"Horror, Sci-Fi, Thriller","Director":"Drew Gabreski","Writer":"Gerald Nott","Actors":"Brian Krause, Jaimi Paige, Louis Herthum, Jared Abrahamson","Plot":"Not long after John Chambers and his family arrive at their new home in a small country town of Pennsylvania, John begins to experience sleep paralysis. Lying there paralyzed, trapped ...","Language":"English","Country":"USA","Awards":"1 win.","Poster":"https://images-na.ssl-images-amazon.com/images/M/MV5BM2RlMDVhMzgtMzM4My00YjY2LTlkMDgtYzk4MWJhODRhYzRjXkEyXkFqcGdeQXVyMTM2MzgyOTU@._V1_SX300.jpg","Ratings":[{"Source":"Internet Movie Database","Value":"4.7/10"},{"Source":"Rotten Tomatoes","Value":"29%"}],"Metascore":"N/A","imdbRating":"4.7","imdbVotes":"334","imdbID":"tt3311020","Type":"movie","DVD":"01 Jun 2017","BoxOffice":"N/A","Production":"DarkShed","Website":"N/A","Response":"True"}];


loadMovieData();



var movieJSON = [
{"Title":"Crematorium","Year":"2011","Rated":"N/A","Released":"07 Mar 2011","Runtime":"397 min","Genre":"Drama","Director":"N/A","Writer":"N/A","Actors":"José Sancho, Alicia Borrachero, Juana Acosta, Pau Durà","Plot":"N/A","Language":"Spanish, Russian","Country":"Spain","Awards":"4 wins & 1 nomination.","Poster":"https://images-na.ssl-images-amazon.com/images/M/MV5BZTg0YWNhMjYtMjM3OS00MzY5LTk0YmEtMjNmZWFiZmExM2QzXkEyXkFqcGdeQXVyMTA0MjU0Ng@@._V1_SX300.jpg","Ratings":[{"Source":"Internet Movie Database","Value":"7.8/10"}],"Metascore":"N/A","imdbRating":"7.8","imdbVotes":"546","imdbID":"tt1661526","Type":"series","totalSeasons":"1","Response":"True"},
{"Title":"The Royal House of Windsor","Year":"2017–","Rated":"N/A","Released":"22 Feb 2017","Runtime":"N/A","Genre":"History","Director":"N/A","Writer":"N/A","Actors":"N/A","Plot":"The history of Britain's ruling dynasty, the Windsors, over the last 100 years, starting with the time around the outbreak of WWI.","Language":"English","Country":"UK","Awards":"N/A","Poster":"N/A","Ratings":[{"Source":"Internet Movie Database","Value":"7.7/10"}],"Metascore":"N/A","imdbRating":"7.7","imdbVotes":"11","imdbID":"tt6596634","Type":"series","totalSeasons":"1","Response":"True"},
{"Title":"Voltron","Year":"2016–","Rated":"TV-Y7","Released":"10 Jun 2016","Runtime":"23 min","Genre":"Animation, Adventure, Sci-Fi","Director":"N/A","Writer":"N/A","Actors":"Jeremy Shada, Bex Taylor-Klaus, Josh Keaton, Tyler Labine","Plot":"Five Earth teens - Keith, Lance, Hunk, Pidge and Shiro - who become the last line of defense for the galaxy in an intergalactic battle against the evil alien force led by King Zarkon.","Language":"English","Country":"USA","Awards":"2 nominations.","Poster":"https://images-na.ssl-images-amazon.com/images/M/MV5BMjA2MzMzNTg5NV5BMl5BanBnXkFtZTgwMzAzOTc4ODE@._V1_SX300.jpg","Ratings":[{"Source":"Internet Movie Database","Value":"8.4/10"}],"Metascore":"N/A","imdbRating":"8.4","imdbVotes":"3,357","imdbID":"tt5580664","Type":"series","totalSeasons":"2","Response":"True"},
{"Title":"Wet Hot American Summer: 10 Years Later","Year":"2017–","Rated":"N/A","Released":"N/A","Runtime":"N/A","Genre":"Comedy","Director":"N/A","Writer":"N/A","Actors":"Elizabeth Banks, Amy Poehler, Michael Showalter, David Wain","Plot":"See what happens to your favorite campers and counselors ten years after the original Wet Hot American Summer.","Language":"English","Country":"USA","Awards":"N/A","Poster":"N/A","Ratings":[],"Metascore":"N/A","imdbRating":"N/A","imdbVotes":"N/A","imdbID":"tt5669272","Type":"series","totalSeasons":"N/A","Response":"True"},
{"Title":"My Little Pony: Friendship Is Magic","Year":"2010–","Rated":"TV-Y","Released":"10 Oct 2010","Runtime":"22 min","Genre":"Animation, Comedy, Family","Director":"N/A","Writer":"Lauren Faust","Actors":"Ashleigh Ball, Tabitha St. Germain, Andrea Libman, Tara Strong","Plot":"After learning that her friends, as well as herself, are the magical Elements of Harmony, studious unicorn Twilight Sparkle is sent by her mentor, Princess Celestia, to Ponyville to study the magic of friendship with help from her friends.","Language":"English","Country":"USA, Canada","Awards":"18 wins & 32 nominations.","Poster":"https://images-na.ssl-images-amazon.com/images/M/MV5BMTU1NzQ1MDg5MV5BMl5BanBnXkFtZTcwMDIzODIxNw@@._V1_SX300.jpg","Ratings":[{"Source":"Internet Movie Database","Value":"7.7/10"}],"Metascore":"N/A","imdbRating":"7.7","imdbVotes":"16,397","imdbID":"tt1751105","Type":"series","totalSeasons":"7","Response":"True"},
{"Title":"Home: Adventures with Tip & Oh","Year":"2016–","Rated":"N/A","Released":"29 Jul 2016","Runtime":"23 min","Genre":"Animation, Comedy, Family","Director":"N/A","Writer":"Ryan Crego, Thurop Van Orman","Actors":"Rachel Crow, Mark Whitten, Ana Ortiz, Ron Funches","Plot":"Picking up where the 2015 film left off, this coming-of-age buddy comedy follows fearless Tip and overenthusiastic Oh, as they navigate the crazily combined human and alien culture they live in, finding adventure everywhere they go.","Language":"English","Country":"USA","Awards":"N/A","Poster":"https://images-na.ssl-images-amazon.com/images/M/MV5BOTM4ODIyNzUyOF5BMl5BanBnXkFtZTgwMDkxOTkxOTE@._V1_SX300.jpg","Ratings":[{"Source":"Internet Movie Database","Value":"6.4/10"}],"Metascore":"N/A","imdbRating":"6.4","imdbVotes":"196","imdbID":"tt5759196","Type":"series","totalSeasons":"2","Response":"True"},
{"Title":"True and the Rainbow Kingdom","Year":"2017–","Rated":"N/A","Released":"N/A","Runtime":"N/A","Genre":"Animation","Director":"N/A","Writer":"N/A","Actors":"N/A","Plot":"N/A","Language":"N/A","Country":"Canada","Awards":"N/A","Poster":"http://ia.media-imdb.com/images/M/MV5BYjk3NGJmOWMtYWE4Zi00NDBkLWFjYzEtM2RkMTlkMWY0ODAxXkEyXkFqcGdeQXVyMzE1MzY5Mzk@._V1_SX300.jpg","Ratings":[],"Metascore":"N/A","imdbRating":"N/A","imdbVotes":"N/A","imdbID":"tt5607658","Type":"series","totalSeasons":"N/A","Response":"True"},
{"Title":"A Murderous Affair: The Carolyn Warmus Story","Year":"1992","Rated":"N/A","Released":"13 Sep 1992","Runtime":"96 min","Genre":"Biography, Crime, Drama","Director":"Martin Davidson","Writer":"Earl W. Wallace, Pamela Wallace, Martin Davidson","Actors":"Virginia Madsen, Chris Sarandon, Ned Eisenberg, Tom Mason","Plot":"A married man meets a beautiful woman and they begin an affair.","Language":"English","Country":"USA","Awards":"N/A","Poster":"https://images-na.ssl-images-amazon.com/images/M/MV5BYTA5ZTMyN2ItNGNhOC00ZjUyLThkYjgtYTA3ZGMyMWEzNWQ0XkEyXkFqcGdeQXVyNzU5ODYyNw@@._V1_SX300.jpg","Ratings":[{"Source":"Internet Movie Database","Value":"5.3/10"}],"Metascore":"N/A","imdbRating":"5.3","imdbVotes":"160","imdbID":"tt0104943","Type":"movie","DVD":"25 Jan 2005","BoxOffice":"N/A","Production":"ABC Television","Website":"N/A","Response":"True"},
{"Title":"Dinotrux","Year":"2015–","Rated":"TV-Y7","Released":"14 Aug 2015","Runtime":"N/A","Genre":"Animation, Action, Comedy","Director":"N/A","Writer":"N/A","Actors":"Andrew Francis, Richard Ian Cox, Brian Drummond, Matt Hill","Plot":"Animals like the Craneosauraus, Garbageadon and Tyrannosaurus Trux (part dinosaurs and part truck) exist in a fictional prehistoric era.","Language":"English, French","Country":"USA","Awards":"2 wins & 4 nominations.","Poster":"https://images-na.ssl-images-amazon.com/images/M/MV5BZjMyYWE2NDEtMzgxYi00MzQ3LTlmZWEtNDI5NGIxMjdjMDg3XkEyXkFqcGdeQXVyMzQwMDg1MDI@._V1_SX300.jpg","Ratings":[{"Source":"Internet Movie Database","Value":"7.6/10"}],"Metascore":"N/A","imdbRating":"7.6","imdbVotes":"204","imdbID":"tt1396212","Type":"series","totalSeasons":"4","Response":"True"},
{"Title":"The Defenders","Year":"2017–","Rated":"N/A","Released":"18 Aug 2017","Runtime":"50 min","Genre":"Action, Adventure, Crime","Director":"N/A","Writer":"N/A","Actors":"Finn Jones, Mike Colter, Charlie Cox, Jessica Henwick","Plot":"Daredevil, Jessica Jones, Luke Cage, and Iron Fist team up to fight crime in New York City.","Language":"English","Country":"USA","Awards":"N/A","Poster":"https://images-na.ssl-images-amazon.com/images/M/MV5BMTk4Njc5MTMyNl5BMl5BanBnXkFtZTgwMTI4NTk2MjI@._V1_SX300.jpg","Ratings":[{"Source":"Internet Movie Database","Value":"9.4/10"}],"Metascore":"N/A","imdbRating":"9.4","imdbVotes":"186","imdbID":"tt4230076","Type":"series","totalSeasons":"1","Response":"True"},
{"Title":"Gomorrah","Year":"2008","Rated":"NOT RATED","Released":"10 Apr 2009","Runtime":"137 min","Genre":"Crime, Drama","Director":"Matteo Garrone","Writer":"Roberto Saviano (book), Maurizio Braucci (screenplay), Ugo Chiti (screenplay), Gianni Di Gregorio (screenplay), Matteo Garrone (screenplay), Massimo Gaudioso (screenplay), Roberto Saviano (screenplay)","Actors":"Salvatore Abbruzzese, Simone Sacchettino, Salvatore Ruocco, Vincenzo Fabricino","Plot":"An inside look at Italy's modern crime families.","Language":"Neapolitan, Italian, Mandarin, French","Country":"Italy","Awards":"Nominated for 1 Golden Globe. Another 34 wins & 33 nominations.","Poster":"https://images-na.ssl-images-amazon.com/images/M/MV5BMTI4MDY5MTc5OF5BMl5BanBnXkFtZTcwMTMyMTk3Mg@@._V1_SX300.jpg","Ratings":[{"Source":"Internet Movie Database","Value":"7.0/10"},{"Source":"Rotten Tomatoes","Value":"92%"},{"Source":"Metacritic","Value":"87/100"}],"Metascore":"87","imdbRating":"7.0","imdbVotes":"40,076","imdbID":"tt0929425","Type":"movie","DVD":"24 Nov 2009","BoxOffice":"$1,500,000","Production":"IFC Films","Website":"http://www.gomorra-lefilm.com/","Response":"True"},
{"Title":"Disjointed","Year":"2017–","Rated":"N/A","Released":"25 Aug 2017","Runtime":"N/A","Genre":"Comedy","Director":"N/A","Writer":"David Javerbaum, Chuck Lorre","Actors":"Aaron Moten, Tone Bell, Dougie Baldwin, Elizabeth Alderfer","Plot":"Cannabis legend Ruth Whitefeather Feldman employs her newly graduated son and a team of young \"budtenders\" to help run her Los Angeles marijuana dispensary.","Language":"English","Country":"USA","Awards":"N/A","Poster":"https://images-na.ssl-images-amazon.com/images/M/MV5BMGZkOTA3ZDQtZjUwNC00NzMxLWJmN2YtMDUzMDA4YzBmNzA0XkEyXkFqcGdeQXVyNzU1NjI4NzQ@._V1_SX300.jpg","Ratings":[],"Metascore":"N/A","imdbRating":"N/A","imdbVotes":"N/A","imdbID":"tt5884792","Type":"series","totalSeasons":"N/A","Response":"True"},
{"Title":"Dragons: Race to the Edge","Year":"2015–","Rated":"TV-Y7","Released":"26 Jun 2015","Runtime":"22 min","Genre":"Animation, Adventure, Comedy","Director":"N/A","Writer":"N/A","Actors":"America Ferrera, Jay Baruchel, T.J. Miller, Christopher Mintz-Plasse","Plot":"Unlock the secrets of the Dragon Eye and come face to face with more dragons than anyone has ever imagined as Hiccup, Toothless and the Dragon Riders soar to the edge of adventure.","Language":"English","Country":"USA","Awards":"1 win & 4 nominations.","Poster":"https://images-na.ssl-images-amazon.com/images/M/MV5BNjQ1NDU4Y2UtOTIyMS00ODA0LWI0ZGYtNWMzNGM2N2Y5ZTgzXkEyXkFqcGdeQXVyNDQ2MTMzODA@._V1_SX300.jpg","Ratings":[{"Source":"Internet Movie Database","Value":"8.5/10"}],"Metascore":"N/A","imdbRating":"8.5","imdbVotes":"1,454","imdbID":"tt4816058","Type":"series","totalSeasons":"4","Response":"True"},
{"Title":"Once Upon a Time","Year":"2011–","Rated":"TV-PG","Released":"23 Oct 2011","Runtime":"44 min","Genre":"Adventure, Fantasy, Romance","Director":"N/A","Writer":"Adam Horowitz, Edward Kitsis","Actors":"Lana Parrilla, Robert Carlyle, Jared Gilmore, Jennifer Morrison","Plot":"A young woman with a troubled past is drawn to a small town in Maine where fairy tales are to be believed.","Language":"English","Country":"USA","Awards":"Nominated for 6 Primetime Emmys. Another 10 wins & 66 nominations.","Poster":"https://images-na.ssl-images-amazon.com/images/M/MV5BNmVjNGRlM2UtNTc3Zi00NDliLTg1NzItZjY1ZDFjNDI0MWFmXkEyXkFqcGdeQXVyMzAzNTY3MDM@._V1_SX300.jpg","Ratings":[{"Source":"Internet Movie Database","Value":"7.9/10"}],"Metascore":"N/A","imdbRating":"7.9","imdbVotes":"182,178","imdbID":"tt1843230","Type":"series","totalSeasons":"7","Response":"True"},
{"Title":"The Good Place","Year":"2016–","Rated":"N/A","Released":"19 Sep 2016","Runtime":"30 min","Genre":"Comedy, Drama, Family","Director":"N/A","Writer":"Michael Schur","Actors":"Kristen Bell, William Jackson Harper, Jameela Jamil, D'Arcy Carden","Plot":"A woman struggles to define what it means to be \"good\".","Language":"English","Country":"USA","Awards":"1 win & 5 nominations.","Poster":"https://images-na.ssl-images-amazon.com/images/M/MV5BMjI2NDExMTg5MF5BMl5BanBnXkFtZTgwMzIwNzY5OTE@._V1_SX300.jpg","Ratings":[{"Source":"Internet Movie Database","Value":"7.7/10"}],"Metascore":"N/A","imdbRating":"7.7","imdbVotes":"8,016","imdbID":"tt4955642","Type":"series","totalSeasons":"1","Response":"True"},
{"Title":"The Addams Family","Year":"1991","Rated":"PG-13","Released":"22 Nov 1991","Runtime":"99 min","Genre":"Comedy, Fantasy","Director":"Barry Sonnenfeld","Writer":"Charles Addams (characters), Caroline Thompson, Larry Wilson","Actors":"Anjelica Huston, Raul Julia, Christopher Lloyd, Dan Hedaya","Plot":"Con artists plan to fleece an eccentric family using an accomplice who claims to be their long-lost uncle.","Language":"English","Country":"USA","Awards":"Nominated for 1 Oscar. Another 4 wins & 17 nominations.","Poster":"https://images-na.ssl-images-amazon.com/images/M/MV5BODc1NmY0MDUtNjUzNS00ODdhLWJlN2ItMTgwZjczZjI0MDkyXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg","Ratings":[{"Source":"Internet Movie Database","Value":"6.8/10"},{"Source":"Rotten Tomatoes","Value":"60%"},{"Source":"Metacritic","Value":"57/100"}],"Metascore":"57","imdbRating":"6.8","imdbVotes":"102,781","imdbID":"tt0101272","Type":"movie","DVD":"22 Feb 2000","BoxOffice":"N/A","Production":"Paramount Pictures","Website":"N/A","Response":"True"},
{"Title":"The Astronaut's Wife","Year":"1999","Rated":"R","Released":"27 Aug 1999","Runtime":"109 min","Genre":"Drama, Sci-Fi, Thriller","Director":"Rand Ravich","Writer":"Rand Ravich","Actors":"Johnny Depp, Charlize Theron, Joe Morton, Clea DuVall","Plot":"After an explosion in space and subsequent two-minute radio-out period, two astronauts return home to their wives. Slightly it's revealed that they're not the same as they were.","Language":"English","Country":"USA","Awards":"1 nomination.","Poster":"https://images-na.ssl-images-amazon.com/images/M/MV5BMTUxNGI2NzUtYzgwNy00NmIyLTgwNjMtZGMzYjhlYjY1MThkXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg","Ratings":[{"Source":"Internet Movie Database","Value":"5.3/10"},{"Source":"Rotten Tomatoes","Value":"16%"},{"Source":"Metacritic","Value":"37/100"}],"Metascore":"37","imdbRating":"5.3","imdbVotes":"47,366","imdbID":"tt0138304","Type":"movie","DVD":"08 Feb 2000","BoxOffice":"N/A","Production":"New Line Home Entertainment","Website":"http://www.astronautswife.com","Response":"True"},
{"Title":"Bad Santa","Year":"2003","Rated":"R","Released":"26 Nov 2003","Runtime":"91 min","Genre":"Comedy, Crime, Drama","Director":"Terry Zwigoff","Writer":"Glenn Ficarra, John Requa","Actors":"Billy Bob Thornton, Tony Cox, Brett Kelly, Lauren Graham","Plot":"A miserable conman and his partner pose as Santa and his Little Helper to rob department stores on Christmas Eve. But they run into problems when the conman befriends a troubled kid, and the security boss discovers the plot.","Language":"English","Country":"USA, Germany","Awards":"Nominated for 1 Golden Globe. Another 1 win & 11 nominations.","Poster":"https://images-na.ssl-images-amazon.com/images/M/MV5BMjA4Njg1MDcwN15BMl5BanBnXkFtZTYwMzAxNjM3._V1_SX300.jpg","Ratings":[{"Source":"Internet Movie Database","Value":"7.1/10"},{"Source":"Rotten Tomatoes","Value":"78%"},{"Source":"Metacritic","Value":"70/100"}],"Metascore":"70","imdbRating":"7.1","imdbVotes":"117,275","imdbID":"tt0307987","Type":"movie","DVD":"22 Jun 2004","BoxOffice":"N/A","Production":"Miramax Films","Website":"http://www.miramax.com/movie/bad-santa","Response":"True"},
{"Title":"The Bomb","Year":"2015","Rated":"N/A","Released":"28 Jul 2015","Runtime":"115 min","Genre":"Documentary","Director":"Rushmore DeNooyer","Writer":"Rushmore DeNooyer","Actors":"Jonathan Adams, John Andersen, Hal Behl, Walter Boyne","Plot":"See how America developed the most destructive invention in human history - the nuclear bomb - how it changed the world and how it continues to loom large in our lives. Hear from historians...","Language":"English","Country":"USA","Awards":"N/A","Poster":"https://images-na.ssl-images-amazon.com/images/M/MV5BMjI3MDA4NTg0MF5BMl5BanBnXkFtZTgwMTg4OTA0NjE@._V1_SX300.jpg","Ratings":[{"Source":"Internet Movie Database","Value":"7.9/10"}],"Metascore":"N/A","imdbRating":"7.9","imdbVotes":"163","imdbID":"tt4840922","Type":"movie","DVD":"20 Oct 2015","BoxOffice":"N/A","Production":"Lone Wolf Documentary Group","Website":"N/A","Response":"True"},
{"Title":"A Cinderella Story","Year":"2004","Rated":"PG","Released":"16 Jul 2004","Runtime":"95 min","Genre":"Comedy, Family, Romance","Director":"Mark Rosman","Writer":"Leigh Dunlap","Actors":"Hilary Duff, Jennifer Coolidge, Chad Michael Murray, Dan Byrd","Plot":"Routinely exploited by her wicked stepmother, the downtrodden Sam Montgomery is excited about the prospect of meeting her Internet beau at the school's Halloween dance.","Language":"English, German, Czech","Country":"USA, Canada","Awards":"6 wins & 8 nominations.","Poster":"https://images-na.ssl-images-amazon.com/images/M/MV5BMTA1NDI0OTkwNDNeQTJeQWpwZ15BbWU3MDQ3Nzc1MjE@._V1_SX300.jpg","Ratings":[{"Source":"Internet Movie Database","Value":"5.9/10"},{"Source":"Rotten Tomatoes","Value":"11%"},{"Source":"Metacritic","Value":"25/100"}],"Metascore":"25","imdbRating":"5.9","imdbVotes":"67,355","imdbID":"tt0356470","Type":"movie","DVD":"19 Oct 2004","BoxOffice":"$51,100,000","Production":"Warner Bros. Pictures","Website":"http://www2.warnerbros.com/acinderellastory/index.html","Response":"True"},
{"Title":"Cloud Atlas","Year":"2012","Rated":"R","Released":"26 Oct 2012","Runtime":"172 min","Genre":"Drama, Sci-Fi","Director":"Tom Tykwer, Lana Wachowski, Lilly Wachowski","Writer":"David Mitchell (novel), Lana Wachowski (written for the screen by), Tom Tykwer (written for the screen by), Lilly Wachowski (written for the screen by)","Actors":"Tom Hanks, Halle Berry, Jim Broadbent, Hugo Weaving","Plot":"An exploration of how the actions of individual lives impact one another in the past, present and future, as one soul is shaped from a killer into a hero, and an act of kindness ripples across centuries to inspire a revolution.","Language":"English, Spanish, Ukrainian","Country":"Germany, USA, Hong Kong, Singapore","Awards":"Nominated for 1 Golden Globe. Another 16 wins & 75 nominations.","Poster":"https://images-na.ssl-images-amazon.com/images/M/MV5BMTczMTgxMjc4NF5BMl5BanBnXkFtZTcwNjM5MTA2OA@@._V1_SX300.jpg","Ratings":[{"Source":"Internet Movie Database","Value":"7.5/10"},{"Source":"Rotten Tomatoes","Value":"66%"},{"Source":"Metacritic","Value":"55/100"}],"Metascore":"55","imdbRating":"7.5","imdbVotes":"300,790","imdbID":"tt1371111","Type":"movie","DVD":"14 May 2013","BoxOffice":"$22,100,000","Production":"Warner Bros. Pictures","Website":"http://www.cloudatlasmovie.com","Response":"True"},
{"Title":"Everyone's Hero","Year":"2006","Rated":"G","Released":"15 Sep 2006","Runtime":"87 min","Genre":"Animation, Adventure, Comedy","Director":"Colin Brady, Christopher Reeve, Dan St. Pierre","Writer":"Robert Kurtz (screenplay), Jeff Hand (screenplay), Howard Jonas (story)","Actors":"Ritchie Allen, Jake T. Austin, Cherise Boothe, Jesse Bronstein","Plot":"A boy (Jake T. Austin) begins a grand journey to return Babe Ruth's baseball bat before the deciding game of the 1932 World Series comes to a close.","Language":"English","Country":"Canada, USA","Awards":"N/A","Poster":"https://images-na.ssl-images-amazon.com/images/M/MV5BMjE3MTgwNzY5N15BMl5BanBnXkFtZTcwNDU0OTUzMQ@@._V1_SX300.jpg","Ratings":[{"Source":"Internet Movie Database","Value":"5.8/10"},{"Source":"Rotten Tomatoes","Value":"41%"},{"Source":"Metacritic","Value":"51/100"}],"Metascore":"51","imdbRating":"5.8","imdbVotes":"6,475","imdbID":"tt0430779","Type":"movie","DVD":"20 Mar 2007","BoxOffice":"$14,497,591","Production":"20th Century Fox","Website":"http://www.everyoneshero.com/","Response":"True"},
{"Title":"Funny Games","Year":"2007","Rated":"R","Released":"04 Apr 2008","Runtime":"111 min","Genre":"Crime, Drama, Horror","Director":"Michael Haneke","Writer":"Michael Haneke","Actors":"Naomi Watts, Tim Roth, Michael Pitt, Brady Corbet","Plot":"Two psychopathic young men take a family hostage in their cabin.","Language":"English","Country":"USA, France, UK, Austria, Germany, Italy","Awards":"1 win & 5 nominations.","Poster":"https://images-na.ssl-images-amazon.com/images/M/MV5BMTg4OTExNTYzMV5BMl5BanBnXkFtZTcwOTg1MDU1MQ@@._V1_SX300.jpg","Ratings":[{"Source":"Internet Movie Database","Value":"6.5/10"},{"Source":"Rotten Tomatoes","Value":"52%"},{"Source":"Metacritic","Value":"44/100"}],"Metascore":"44","imdbRating":"6.5","imdbVotes":"74,407","imdbID":"tt0808279","Type":"movie","DVD":"10 Jun 2008","BoxOffice":"$1,045,279","Production":"Warner Independent Pictures","Website":"http://wip.warnerbros.com/funnygames/","Response":"True"},
{"Title":"Innerspace","Year":"1987","Rated":"PG","Released":"01 Jul 1987","Runtime":"120 min","Genre":"Action, Adventure, Comedy","Director":"Joe Dante","Writer":"Chip Proser (story), Jeffrey Boam (screenplay), Chip Proser (screenplay)","Actors":"Dennis Quaid, Martin Short, Meg Ryan, Kevin McCarthy","Plot":"A hapless store clerk must foil criminals to save the life of the man who, miniaturized in a secret experiment, was accidentally injected into him.","Language":"English","Country":"USA","Awards":"Won 1 Oscar. Another 1 win & 4 nominations.","Poster":"https://images-na.ssl-images-amazon.com/images/M/MV5BNDk1NzNiMGQtNGQ4Yy00NmMzLTkyNWQtZjM4MDU2Y2Q2NDVlL2ltYWdlXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg","Ratings":[{"Source":"Internet Movie Database","Value":"6.8/10"},{"Source":"Rotten Tomatoes","Value":"81%"},{"Source":"Metacritic","Value":"66/100"}],"Metascore":"66","imdbRating":"6.8","imdbVotes":"44,418","imdbID":"tt0093260","Type":"movie","DVD":"09 Jul 2002","BoxOffice":"N/A","Production":"Warner Bros. Pictures","Website":"N/A","Response":"True"},
{"Title":"Jackie Brown","Year":"1997","Rated":"R","Released":"25 Dec 1997","Runtime":"154 min","Genre":"Crime, Drama, Thriller","Director":"Quentin Tarantino","Writer":"Quentin Tarantino (written for the screen by), Elmore Leonard (novel)","Actors":"Pam Grier, Samuel L. Jackson, Robert Forster, Bridget Fonda","Plot":"A middle-aged woman finds herself in the middle of a huge conflict that will either make her a profit or cost her life.","Language":"English","Country":"USA","Awards":"Nominated for 1 Oscar. Another 7 wins & 21 nominations.","Poster":"https://images-na.ssl-images-amazon.com/images/M/MV5BNmY5ODRmYTItNWU0Ni00MWE3LTgyYzUtYjZlN2Q5YTcyM2NmXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg","Ratings":[{"Source":"Internet Movie Database","Value":"7.5/10"},{"Source":"Rotten Tomatoes","Value":"87%"},{"Source":"Metacritic","Value":"64/100"}],"Metascore":"64","imdbRating":"7.5","imdbVotes":"254,684","imdbID":"tt0119396","Type":"movie","DVD":"05 Aug 1998","BoxOffice":"N/A","Production":"Miramax Films","Website":"N/A","Response":"True"},
{"Title":"The Last Mimzy","Year":"2007","Rated":"PG","Released":"23 Mar 2007","Runtime":"90 min","Genre":"Drama, Family, Sci-Fi","Director":"Robert Shaye","Writer":"Bruce Joel Rubin (screenplay), Toby Emmerich (screenplay), James V. Hart (screen story), Carol Skilken (screen story), Henry Kuttner (short story \"Mimsy Were the Borogoves\"), C.L. Moore (short story \"Mimsy Were the Borogoves\")","Actors":"Chris O'Neil, Rhiannon Leigh Wryn, Joely Richardson, Timothy Hutton","Plot":"Two siblings begin to develop special talents after they find a mysterious box of toys. Soon the kids, their parents, and even their teacher are drawn into a strange new world and find a task ahead of them that is far more important than any of them could imagine!","Language":"English, Spanish","Country":"USA","Awards":"7 nominations.","Poster":"https://images-na.ssl-images-amazon.com/images/M/MV5BMTIwMTkzMDI1N15BMl5BanBnXkFtZTcwMzc1NzI0MQ@@._V1_SX300.jpg","Ratings":[{"Source":"Internet Movie Database","Value":"6.3/10"},{"Source":"Rotten Tomatoes","Value":"53%"},{"Source":"Metacritic","Value":"59/100"}],"Metascore":"59","imdbRating":"6.3","imdbVotes":"19,274","imdbID":"tt0768212","Type":"movie","DVD":"10 Jul 2007","BoxOffice":"$21,426,088","Production":"New Line Cinema","Website":"http://www.mimzy.com/","Response":"True"},
{"Title":"Lord of War","Year":"2005","Rated":"R","Released":"16 Sep 2005","Runtime":"122 min","Genre":"Crime, Drama, Thriller","Director":"Andrew Niccol","Writer":"Andrew Niccol","Actors":"Nicolas Cage, Bridget Moynahan, Jared Leto, Shake Tukhmanyan","Plot":"An arms dealer confronts the morality of his work as he is being chased by an Interpol agent.","Language":"English, Ukrainian, German, Spanish, Russian, French, Arabic, Turkish","Country":"USA, Germany, France","Awards":"2 wins & 2 nominations.","Poster":"https://images-na.ssl-images-amazon.com/images/M/MV5BMTYzZWE3MDAtZjZkMi00MzhlLTlhZDUtNmI2Zjg3OWVlZWI0XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg","Ratings":[{"Source":"Internet Movie Database","Value":"7.6/10"},{"Source":"Rotten Tomatoes","Value":"61%"},{"Source":"Metacritic","Value":"62/100"}],"Metascore":"62","imdbRating":"7.6","imdbVotes":"259,183","imdbID":"tt0399295","Type":"movie","DVD":"17 Jan 2006","BoxOffice":"$24,033,036","Production":"Lions Gate","Website":"http://www.lordofwarthemovie.com/","Response":"True"},
{"Title":"The Matrix","Year":"1999","Rated":"R","Released":"31 Mar 1999","Runtime":"136 min","Genre":"Action, Sci-Fi","Director":"Lana Wachowski, Lilly Wachowski","Writer":"Lilly Wachowski, Lana Wachowski","Actors":"Keanu Reeves, Laurence Fishburne, Carrie-Anne Moss, Hugo Weaving","Plot":"A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers.","Language":"English","Country":"USA","Awards":"Won 4 Oscars. Another 34 wins & 45 nominations.","Poster":"https://images-na.ssl-images-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg","Ratings":[{"Source":"Internet Movie Database","Value":"8.7/10"},{"Source":"Rotten Tomatoes","Value":"87%"},{"Source":"Metacritic","Value":"73/100"}],"Metascore":"73","imdbRating":"8.7","imdbVotes":"1,323,021","imdbID":"tt0133093","Type":"movie","DVD":"21 Sep 1999","BoxOffice":"N/A","Production":"Warner Bros. Pictures","Website":"http://www.whatisthematrix.com","Response":"True"},
{"Title":"The Matrix Reloaded","Year":"2003","Rated":"R","Released":"15 May 2003","Runtime":"138 min","Genre":"Action, Sci-Fi","Director":"Lana Wachowski, Lilly Wachowski","Writer":"Lilly Wachowski, Lana Wachowski, Lilly Wachowski (characters), Lana Wachowski (characters)","Actors":"Ray Anthony, Christine Anu, Andy Arness, Alima Ashton-Sheibu","Plot":"Neo and the rebel leaders estimate that they have 72 hours until 250,000 probes discover Zion and destroy it and its inhabitants. During this, Neo must decide how he can save Trinity from a dark fate in his dreams.","Language":"English, French","Country":"USA, Australia","Awards":"8 wins & 31 nominations.","Poster":"https://images-na.ssl-images-amazon.com/images/M/MV5BMjA0NDM5MDY2OF5BMl5BanBnXkFtZTcwNzg5OTEzMw@@._V1_SX300.jpg","Ratings":[{"Source":"Internet Movie Database","Value":"7.2/10"},{"Source":"Rotten Tomatoes","Value":"73%"},{"Source":"Metacritic","Value":"62/100"}],"Metascore":"62","imdbRating":"7.2","imdbVotes":"442,318","imdbID":"tt0234215","Type":"movie","DVD":"14 Oct 2003","BoxOffice":"$281,500,000","Production":"Warner Bros. Pictures","Website":"http://whatisthematrix.warnerbros.com/","Response":"True"},
{"Title":"The Matrix Revolutions","Year":"2003","Rated":"R","Released":"05 Nov 2003","Runtime":"129 min","Genre":"Action, Sci-Fi","Director":"Lana Wachowski, Lilly Wachowski","Writer":"Lilly Wachowski, Lana Wachowski, Lilly Wachowski (characters), Lana Wachowski (characters)","Actors":"Mary Alice, Tanveer K. Atwal, Helmut Bakaitis, Kate Beahan","Plot":"The human city of Zion defends itself against the massive invasion of the machines as Neo fights to end the war at another front while also opposing the rogue Agent Smith.","Language":"English, French","Country":"Australia, USA","Awards":"4 wins & 30 nominations.","Poster":"https://images-na.ssl-images-amazon.com/images/M/MV5BMjA1MjM3NTE1Ml5BMl5BanBnXkFtZTYwODM4MDg3._V1_SX300.jpg","Ratings":[{"Source":"Internet Movie Database","Value":"6.7/10"},{"Source":"Rotten Tomatoes","Value":"36%"},{"Source":"Metacritic","Value":"47/100"}],"Metascore":"47","imdbRating":"6.7","imdbVotes":"383,447","imdbID":"tt0242653","Type":"movie","DVD":"06 Apr 2004","BoxOffice":"$139,076,032","Production":"Warner Bros. Pictures","Website":"http://whatisthematrix.warnerbros.com/","Response":"True"},
{"Title":"The Number 23","Year":"2007","Rated":"R","Released":"23 Feb 2007","Runtime":"101 min","Genre":"Mystery, Thriller","Director":"Joel Schumacher","Writer":"Fernley Phillips","Actors":"Jim Carrey, Virginia Madsen, Logan Lerman, Danny Huston","Plot":"Walter Sparrow becomes obsessed with a novel that he believes was written about him. As his obsession increases, more and more similarities seem to arise.","Language":"English, Chinese","Country":"USA, Germany","Awards":"5 nominations.","Poster":"https://images-na.ssl-images-amazon.com/images/M/MV5BMjcwNzczNDQ0MV5BMl5BanBnXkFtZTcwMTE0NzA0MQ@@._V1_SX300.jpg","Ratings":[{"Source":"Internet Movie Database","Value":"6.4/10"},{"Source":"Rotten Tomatoes","Value":"8%"}],"Metascore":"N/A","imdbRating":"6.4","imdbVotes":"171,746","imdbID":"tt0481369","Type":"movie","DVD":"05 Jul 2005","BoxOffice":"$35,063,732","Production":"New Line","Website":"http://www.number23movie.com/","Response":"True"},
{"Title":"Opening Night","Year":"1977","Rated":"PG-13","Released":"17 Apr 1978","Runtime":"144 min","Genre":"Drama","Director":"John Cassavetes","Writer":"John Cassavetes","Actors":"Gena Rowlands, John Cassavetes, Ben Gazzara, Joan Blondell","Plot":"An actress suffers an emotional uproar in her personal life after a fan dies trying to see her.","Language":"English","Country":"USA","Awards":"Nominated for 2 Golden Globes. Another 2 wins & 1 nomination.","Poster":"https://images-na.ssl-images-amazon.com/images/M/MV5BMTU5NTE1NTY5NF5BMl5BanBnXkFtZTgwODAwMzkwMzE@._V1_SX300.jpg","Ratings":[{"Source":"Internet Movie Database","Value":"8.1/10"},{"Source":"Rotten Tomatoes","Value":"92%"}],"Metascore":"N/A","imdbRating":"8.1","imdbVotes":"6,494","imdbID":"tt0079672","Type":"movie","DVD":"29 Jun 1998","BoxOffice":"N/A","Production":"Faces Distributing Corporation","Website":"N/A","Response":"True"},
{"Title":"Practical Magic","Year":"1998","Rated":"PG-13","Released":"16 Oct 1998","Runtime":"104 min","Genre":"Comedy, Drama, Fantasy","Director":"Griffin Dunne","Writer":"Alice Hoffman (novel), Robin Swicord (screenplay), Akiva Goldsman (screenplay), Adam Brooks (screenplay)","Actors":"Sandra Bullock, Nicole Kidman, Stockard Channing, Dianne Wiest","Plot":"Two witch sisters, raised by their eccentric aunts in a small town, face closed-minded prejudice and a curse which threatens to prevent them ever finding lasting love.","Language":"English","Country":"USA","Awards":"1 win & 6 nominations.","Poster":"https://images-na.ssl-images-amazon.com/images/M/MV5BMThhNmFkMzgtNGUxOS00N2Q4LWJlMTctYjdlNjM0YmQzMTVkL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyNTYxMjAyNzg@._V1_SX300.jpg","Ratings":[{"Source":"Internet Movie Database","Value":"6.2/10"},{"Source":"Rotten Tomatoes","Value":"20%"},{"Source":"Metacritic","Value":"46/100"}],"Metascore":"46","imdbRating":"6.2","imdbVotes":"59,132","imdbID":"tt0120791","Type":"movie","DVD":"16 Feb 1999","BoxOffice":"N/A","Production":"Warner Bros. Pictures","Website":"http://www.practicalmagic.com","Response":"True"},
{"Title":"Sleepy Hollow","Year":"1999","Rated":"R","Released":"19 Nov 1999","Runtime":"105 min","Genre":"Fantasy, Horror, Mystery","Director":"Tim Burton","Writer":"Washington Irving (story \"The Legend of Sleepy Hollow\"), Kevin Yagher (screen story), Andrew Kevin Walker (screen story), Andrew Kevin Walker (screenplay)","Actors":"Johnny Depp, Christina Ricci, Miranda Richardson, Michael Gambon","Plot":"Ichabod Crane is sent to Sleepy Hollow to investigate the decapitations of 3 people with the culprit being the legendary apparition, the Headless Horseman.","Language":"English, Latin","Country":"USA, Germany","Awards":"Won 1 Oscar. Another 23 wins & 39 nominations.","Poster":"https://images-na.ssl-images-amazon.com/images/M/MV5BMTQ4Yjk5ODEtNGFkOS00OTY1LTgwYTYtOTFkNmU2NzBmNGM2XkEyXkFqcGdeQXVyNDQ2MTMzODA@._V1_SX300.jpg","Ratings":[{"Source":"Internet Movie Database","Value":"7.4/10"},{"Source":"Rotten Tomatoes","Value":"67%"},{"Source":"Metacritic","Value":"65/100"}],"Metascore":"65","imdbRating":"7.4","imdbVotes":"282,208","imdbID":"tt0162661","Type":"movie","DVD":"23 May 2000","BoxOffice":"N/A","Production":"Paramount Pictures","Website":"http://www2.sleepyhollowmovie.com","Response":"True"},
{"Title":"Small Soldiers","Year":"1998","Rated":"PG-13","Released":"10 Jul 1998","Runtime":"110 min","Genre":"Action, Adventure, Comedy","Director":"Joe Dante","Writer":"Gavin Scott, Adam Rifkin, Ted Elliott, Terry Rossio","Actors":"David Cross, Jay Mohr, Alexandra Wilson, Denis Leary","Plot":"When missile technology is used to enhance toy action figures, the toys soon begin to take their battle programming too seriously.","Language":"English","Country":"USA","Awards":"3 wins & 4 nominations.","Poster":"https://images-na.ssl-images-amazon.com/images/M/MV5BNzhiZmZkYjQtMTFlZi00YmQ2LTg5NGEtM2M4ZTg4ZjAyNzI1L2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg","Ratings":[{"Source":"Internet Movie Database","Value":"6.1/10"},{"Source":"Rotten Tomatoes","Value":"48%"}],"Metascore":"N/A","imdbRating":"6.1","imdbVotes":"80,619","imdbID":"tt0122718","Type":"movie","DVD":"01 Dec 1998","BoxOffice":"N/A","Production":"Dreamworks","Website":"N/A","Response":"True"},
{"Title":"Tie the Knot","Year":"2016","Rated":"N/A","Released":"04 May 2016","Runtime":"90 min","Genre":"Comedy, Family, Romance","Director":"Shuja Paul","Writer":"Nadia Kijanka, Shuja Paul (story), Shuja Paul, Shuja Paul","Actors":"Tara Reid, Karishma Ahluwalia, Parvesh Cheena, Ashley Schmitt","Plot":"The hysterical cross cultural journey of hearts.","Language":"English","Country":"USA","Awards":"N/A","Poster":"https://images-na.ssl-images-amazon.com/images/M/MV5BMTg2NDU4NjQ0NF5BMl5BanBnXkFtZTgwNTU4MjQzNDE@._V1_SX300.jpg","Ratings":[{"Source":"Internet Movie Database","Value":"4.6/10"}],"Metascore":"N/A","imdbRating":"4.6","imdbVotes":"15","imdbID":"tt3038542","Type":"movie","DVD":"21 Feb 2017","BoxOffice":"N/A","Production":"N/A","Website":"N/A","Response":"True"},
{"Title":"Straight Talk: The Truth About Alcohol & Sex","Year":"2009","Rated":"N/A","Released":"N/A","Runtime":"20 min","Genre":"Short, Drama, Family","Director":"Jared Bentley","Writer":"Jared Bentley, Erahm Christopher","Actors":"Bridgette Bassa, Brent Waffle, Diana Zahir","Plot":"Follows a young group of teens as they deal with the pressures and consequences of alcohol abuse and reckless sexual behavior.","Language":"English","Country":"Canada, USA","Awards":"N/A","Poster":"N/A","Ratings":[],"Metascore":"N/A","imdbRating":"N/A","imdbVotes":"N/A","imdbID":"tt1527750","Type":"movie","DVD":"N/A","BoxOffice":"N/A","Production":"N/A","Website":"N/A","Response":"True"},
{"Title":"The Wedding Party","Year":"2005","Rated":"N/A","Released":"21 Apr 2005","Runtime":"92 min","Genre":"Action, Comedy, Drama","Director":"Dominique Deruddere","Writer":"Christoph Darnstädt (script collaborator), Dominique Deruddere, Hermann Huppen (comic book), Jean Van Hamme (comic book)","Actors":"Armin Rohde, Uwe Ochsenknecht, Imogen Kogge, Arne Lenk","Plot":"Screaming, shooting, tears and blood changes the party into a nightmare.","Language":"German","Country":"Germany, Belgium","Awards":"1 win & 3 nominations.","Poster":"https://images-na.ssl-images-amazon.com/images/M/MV5BMTk0OTU2OTU0Ml5BMl5BanBnXkFtZTcwODc1NDM0MQ@@._V1_SX300.jpg","Ratings":[{"Source":"Internet Movie Database","Value":"6.6/10"}],"Metascore":"N/A","imdbRating":"6.6","imdbVotes":"975","imdbID":"tt0382572","Type":"movie","DVD":"24 Apr 2007","BoxOffice":"N/A","Production":"Constantin Film","Website":"http://www.bluthochzeit.film.de/","Response":"True"},
{"Title":"Who Gets the Dog?","Year":"2016","Rated":"PG","Released":"13 Sep 2016","Runtime":"95 min","Genre":"Comedy","Director":"Huck Botko","Writer":"Matt JL Wheeler, Rick Rapoza","Actors":"Ryan Kwanten, Alicia Silverstone, Randall Batinkoff, Matty Ryan","Plot":"A couple going through a divorce squabble over custody of their beloved dog.","Language":"English","Country":"USA","Awards":"2 nominations.","Poster":"https://images-na.ssl-images-amazon.com/images/M/MV5BMjMyMTI4OTMxMF5BMl5BanBnXkFtZTgwMTk2NTM2OTE@._V1_SX300.jpg","Ratings":[{"Source":"Internet Movie Database","Value":"4.8/10"}],"Metascore":"N/A","imdbRating":"4.8","imdbVotes":"540","imdbID":"tt1949605","Type":"movie","DVD":"27 Sep 2016","BoxOffice":"N/A","Production":"2DS Productions","Website":"N/A","Response":"True"},
{"Title":"Wild Wild West","Year":"1999","Rated":"PG-13","Released":"30 Jun 1999","Runtime":"106 min","Genre":"Action, Comedy, Sci-Fi","Director":"Barry Sonnenfeld","Writer":"Jim Thomas (story), John Thomas (story), S.S. Wilson (screenplay), Brent Maddock (screenplay), Jeffrey Price (screenplay), Peter S. Seaman (screenplay)","Actors":"Will Smith, Kevin Kline, Kenneth Branagh, Salma Hayek","Plot":"The two best hired guns in the West must save President Grant from the clutches of a nineteenth-century inventor-villain.","Language":"English","Country":"USA","Awards":"12 wins & 15 nominations.","Poster":"https://images-na.ssl-images-amazon.com/images/M/MV5BYmYyMTc4YjItMGNhNC00OWQwLWJhMWUtNTdjZDgxMDI5MjE2L2ltYWdlXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg","Ratings":[{"Source":"Internet Movie Database","Value":"4.8/10"},{"Source":"Rotten Tomatoes","Value":"17%"},{"Source":"Metacritic","Value":"38/100"}],"Metascore":"38","imdbRating":"4.8","imdbVotes":"135,166","imdbID":"tt0120891","Type":"movie","DVD":"30 Nov 1999","BoxOffice":"N/A","Production":"Warner Bros. Pictures","Website":"http://wildwildwest.warnerbros.com","Response":"True"},
{"Title":"The Founder","Year":"2016","Rated":"PG-13","Released":"20 Jan 2017","Runtime":"115 min","Genre":"Biography, Drama, History","Director":"John Lee Hancock","Writer":"Robert D. Siegel","Actors":"Michael Keaton, Nick Offerman, John Carroll Lynch, Linda Cardellini","Plot":"The story of Ray Kroc, a salesman who turned two brothers' innovative fast food eatery, McDonald's, into one of the biggest restaurant businesses in the world with a combination of ambition, persistence and ruthlessness.","Language":"English","Country":"USA","Awards":"1 win & 3 nominations.","Poster":"https://images-na.ssl-images-amazon.com/images/M/MV5BMzExNDg0MDk1M15BMl5BanBnXkFtZTgwNzE1Mjg0MDI@._V1_SX300.jpg","Ratings":[{"Source":"Internet Movie Database","Value":"7.2/10"},{"Source":"Rotten Tomatoes","Value":"84%"},{"Source":"Metacritic","Value":"66/100"}],"Metascore":"66","imdbRating":"7.2","imdbVotes":"48,858","imdbID":"tt4276820","Type":"movie","DVD":"18 Apr 2017","BoxOffice":"$12,785,093","Production":"The Weinstein Company","Website":"http://thefounderfilm.com/","Response":"True"},
{"Title":"Jab We Met","Year":"2007","Rated":"N/A","Released":"26 Oct 2007","Runtime":"138 min","Genre":"Comedy, Drama, Romance","Director":"Imtiaz Ali","Writer":"Imtiaz Ali","Actors":"Shahid Kapoor, Kareena Kapoor Khan, Tarun Arora, Dara Singh","Plot":"A depressed wealthy businessman finds his life changing after he meets a spunky and care-free young woman.","Language":"Hindi, Panjabi, English","Country":"India","Awards":"7 wins & 14 nominations.","Poster":"https://images-na.ssl-images-amazon.com/images/M/MV5BMjExODIzNjU3N15BMl5BanBnXkFtZTcwNjk4NTk5Mw@@._V1_SX300.jpg","Ratings":[{"Source":"Internet Movie Database","Value":"8.0/10"}],"Metascore":"N/A","imdbRating":"8.0","imdbVotes":"35,463","imdbID":"tt1093370","Type":"movie","DVD":"08 Jan 2008","BoxOffice":"N/A","Production":"Studio 18","Website":"http://www.jabwemetthefilm.com/","Response":"True"},
{"Title":"The Invisible Guardian","Year":"2017","Rated":"N/A","Released":"03 Mar 2017","Runtime":"129 min","Genre":"Thriller","Director":"Fernando González Molina","Writer":"Luiso Berdejo, Dolores Redondo (novel)","Actors":"Marta Etura, Elvira Mínguez, Francesc Orella, Itziar Aizpuru","Plot":"An inspector woman must to confront a serial killer case with the ghosts of her own family past.","Language":"Spanish, English, Basque","Country":"Spain, Germany","Awards":"N/A","Poster":"https://images-na.ssl-images-amazon.com/images/M/MV5BYjI1ZTI5YjYtZjI2MS00OTBjLWIyYzUtMDMxYmQzNjM4Y2JiL2ltYWdlXkEyXkFqcGdeQXVyMjQ3NzUxOTM@._V1_SX300.jpg","Ratings":[{"Source":"Internet Movie Database","Value":"5.8/10"}],"Metascore":"N/A","imdbRating":"5.8","imdbVotes":"514","imdbID":"tt4924942","Type":"movie","DVD":"N/A","BoxOffice":"N/A","Production":"N/A","Website":"N/A","Response":"True"},
{"Title":"Sing","Year":"2016","Rated":"PG","Released":"21 Dec 2016","Runtime":"108 min","Genre":"Animation, Comedy, Family","Director":"Christophe Lourdelet, Garth Jennings","Writer":"Garth Jennings","Actors":"Matthew McConaughey, Reese Witherspoon, Seth MacFarlane, Scarlett Johansson","Plot":"In a city of humanoid animals, a hustling theater impresario's attempt to save his theater with a singing competition becomes grander than he anticipates even as its finalists' find that their lives will never be the same.","Language":"English, Japanese, Ukrainian","Country":"USA","Awards":"Nominated for 2 Golden Globes. Another 1 win & 14 nominations.","Poster":"https://images-na.ssl-images-amazon.com/images/M/MV5BMTYzODYzODU2Ml5BMl5BanBnXkFtZTgwNTc1MTA2NzE@._V1_SX300.jpg","Ratings":[{"Source":"Internet Movie Database","Value":"7.2/10"},{"Source":"Rotten Tomatoes","Value":"73%"},{"Source":"Metacritic","Value":"59/100"}],"Metascore":"59","imdbRating":"7.2","imdbVotes":"71,106","imdbID":"tt3470600","Type":"movie","DVD":"21 Mar 2017","BoxOffice":"$270,322,940","Production":"Illumination Entertainment","Website":"http://www.singmovie.com/","Response":"True"},
{"Title":"Icarus","Year":"2017","Rated":"N/A","Released":"04 Aug 2017","Runtime":"110 min","Genre":"Documentary, Thriller","Director":"Bryan Fogel","Writer":"Jon Bertain, Bryan Fogel, Mark Monroe, Timothy Rode","Actors":"Bryan Fogel, Nikita Kamaev, Grigory Rodchenkov","Plot":"When Bryan Fogel sets out to uncover the truth about doping in sports, a chance meeting with a Russian scientist transforms his story from a personal experiment into a geopolitical thriller...","Language":"English","Country":"USA","Awards":"1 win & 1 nomination.","Poster":"https://images-na.ssl-images-amazon.com/images/M/MV5BMTExMDc5NjQyMjJeQTJeQWpwZ15BbWU4MDEzMzkyODIy._V1_SX300.jpg","Ratings":[{"Source":"Internet Movie Database","Value":"7.6/10"},{"Source":"Rotten Tomatoes","Value":"90%"},{"Source":"Metacritic","Value":"70/100"}],"Metascore":"70","imdbRating":"7.6","imdbVotes":"157","imdbID":"tt6333060","Type":"movie","DVD":"04 Aug 2017","BoxOffice":"N/A","Production":"Impact Partners","Website":"http://www.icarus.film/media/","Response":"True"},
{"Title":"Holes","Year":"2003","Rated":"PG","Released":"18 Apr 2003","Runtime":"117 min","Genre":"Adventure, Comedy, Drama","Director":"Andrew Davis","Writer":"Louis Sachar (novel), Louis Sachar (screenplay)","Actors":"Sigourney Weaver, Jon Voight, Tim Blake Nelson, Shia LaBeouf","Plot":"A wrongfully convicted boy is sent to a brutal desert detention camp where he joins the job of digging holes for some mysterious reason.","Language":"English","Country":"USA","Awards":"3 wins & 9 nominations.","Poster":"https://images-na.ssl-images-amazon.com/images/M/MV5BMTg0MTU5ODkwM15BMl5BanBnXkFtZTYwMzgxNzY3._V1_SX300.jpg","Ratings":[{"Source":"Internet Movie Database","Value":"7.1/10"},{"Source":"Rotten Tomatoes","Value":"77%"},{"Source":"Metacritic","Value":"71/100"}],"Metascore":"71","imdbRating":"7.1","imdbVotes":"62,112","imdbID":"tt0311289","Type":"movie","DVD":"23 Sep 2003","BoxOffice":"$67,325,559","Production":"Buena Vista Pictures","Website":"http://disney.go.com/disneypictures/holes/index.html","Response":"True"},
{"Title":"Black Site Delta","Year":"2017","Rated":"N/A","Released":"05 May 2017","Runtime":"87 min","Genre":"Action","Director":"Jesse Gustafson","Writer":"Rick Benattar (original story), Guy Stevenson, Nigel Thomas (original story)","Actors":"Cam Gigandet, Teri Reeves, Sherri Eakin, Jeremy Sande","Plot":"A group of military prisoners must fight off a terrorist attack on their prison which, unbeknownst to them, is a cover for a secret drone control facility.","Language":"English","Country":"USA","Awards":"N/A","Poster":"https://images-na.ssl-images-amazon.com/images/M/MV5BMWZlMjYzOGQtNTI0MS00ODY0LWIyZDUtYTBjYzMyOTQyYjBkXkEyXkFqcGdeQXVyMzQwMTY2Nzk@._V1_SX300.jpg","Ratings":[{"Source":"Internet Movie Database","Value":"4.0/10"}],"Metascore":"N/A","imdbRating":"4.0","imdbVotes":"140","imdbID":"tt5667516","Type":"movie","DVD":"09 May 2017","BoxOffice":"N/A","Production":"Xlrator Media","Website":"N/A","Response":"True"},
{"Title":"Diary of an Exorcist","Year":"2015","Rated":"N/A","Released":"N/A","Runtime":"N/A","Genre":"Horror","Director":"N/A","Writer":"Ian Ascher (story), Nick Slatkin","Actors":"N/A","Plot":"N/A","Language":"English","Country":"USA","Awards":"N/A","Poster":"N/A","Ratings":[],"Metascore":"N/A","imdbRating":"N/A","imdbVotes":"N/A","imdbID":"tt3310848","Type":"movie","DVD":"N/A","BoxOffice":"N/A","Production":"N/A","Website":"N/A","Response":"True"},
{"Title":"Naked","Year":"1993","Rated":"UNRATED","Released":"04 Feb 1994","Runtime":"132 min","Genre":"Comedy, Drama","Director":"Mike Leigh","Writer":"Mike Leigh","Actors":"David Thewlis, Lesley Sharp, Katrin Cartlidge, Greg Cruttwell","Plot":"Parallel tales of two sexually obsessed men, one hurting and annoying women physically and mentally, one wandering around the city talking to strangers and experiencing dimensions of life.","Language":"English","Country":"UK","Awards":"8 wins & 7 nominations.","Poster":"https://images-na.ssl-images-amazon.com/images/M/MV5BMjA3Y2I4NjAtMDQyZS00ZGJhLWEwMzgtODBiNzE5Zjc1Nzk1L2ltYWdlXkEyXkFqcGdeQXVyNTc2MDU0NDE@._V1_SX300.jpg","Ratings":[{"Source":"Internet Movie Database","Value":"7.9/10"},{"Source":"Rotten Tomatoes","Value":"88%"},{"Source":"Metacritic","Value":"84/100"}],"Metascore":"84","imdbRating":"7.9","imdbVotes":"25,633","imdbID":"tt0107653","Type":"movie","DVD":"27 Sep 2005","BoxOffice":"N/A","Production":"New Line Cinema","Website":"N/A","Response":"True"},
{"Title":"White Gold","Year":"2017–","Rated":"N/A","Released":"24 May 2017","Runtime":"30 min","Genre":"Comedy","Director":"N/A","Writer":"Damon Beesley","Actors":"Ed Westwick, Joe Thomas, James Buckley, Linzey Cocker","Plot":"The story of a double-glazing showroom in Essex in 1983, led by charismatic salesman Vincent who is smart, handsome and cocksure, He will happily break the rules if it guarantees a sale.","Language":"English","Country":"UK","Awards":"N/A","Poster":"https://images-na.ssl-images-amazon.com/images/M/MV5BNmIzNzEyMjYtNTViMy00Mjg0LTgxNGYtNjNhZTM4OTM0NTBlXkEyXkFqcGdeQXVyMjkyMzg4OTM@._V1_SX300.jpg","Ratings":[{"Source":"Internet Movie Database","Value":"7.6/10"}],"Metascore":"N/A","imdbRating":"7.6","imdbVotes":"1,116","imdbID":"tt6010920","Type":"series","totalSeasons":"1","Response":"True"},
{"Title":"Arthur and the Invisibles","Year":"2006","Rated":"PG","Released":"12 Jan 2007","Runtime":"94 min","Genre":"Animation, Adventure, Family","Director":"Luc Besson","Writer":"Céline Garcia, Luc Besson, Luc Besson (book), Patrice Garcia (creator: characters and settings), Georges Bouchelagem (creator: characters and settings), Philippe Rouchier (creator: characters and settings), Nicolas Fructus (creator: characters and settings)","Actors":"Freddie Highmore, Mia Farrow, Ron Crawford, Penny Balfour","Plot":"Ten-year-old Arthur, in a bid to save his grandfather's house from being demolished, goes looking for some much-fabled hidden treasure in the land of the Minimoys, a tiny people living in harmony with nature.","Language":"English","Country":"France","Awards":"1 win & 2 nominations.","Poster":"https://images-na.ssl-images-amazon.com/images/M/MV5BNDQ2ODQ1NTM5OF5BMl5BanBnXkFtZTcwNjQzNTA0MQ@@._V1_SX300.jpg","Ratings":[{"Source":"Internet Movie Database","Value":"6.0/10"},{"Source":"Rotten Tomatoes","Value":"21%"},{"Source":"Metacritic","Value":"39/100"}],"Metascore":"39","imdbRating":"6.0","imdbVotes":"27,282","imdbID":"tt0344854","Type":"movie","DVD":"15 May 2007","BoxOffice":"$15,004,318","Production":"MGM","Website":"http://www.mgm.com/","Response":"True"},
{"Title":"Hot Property","Year":"2016","Rated":"N/A","Released":"25 Jun 2016","Runtime":"83 min","Genre":"Comedy","Director":"Max McGill","Writer":"Andrew Cryan, Max McGill","Actors":"MyAnna Buring, Tom Rhys Harries, Alex Ferns, Kate Bracken","Plot":"Hot Property is an anarchic satire for 'generation rent'. An un-romantic comedy about love, greed and psychotic estate agents. Set amid London's deranged property market and self-parodying hipster culture.","Language":"English","Country":"UK","Awards":"N/A","Poster":"https://images-na.ssl-images-amazon.com/images/M/MV5BNzYzMjkyNmYtYWZhMi00NWVjLTg3NDYtYzE5ZTZmOWE0Nzc4XkEyXkFqcGdeQXVyMjA2MTc2MTg@._V1_SX300.jpg","Ratings":[{"Source":"Internet Movie Database","Value":"5.0/10"}],"Metascore":"N/A","imdbRating":"5.0","imdbVotes":"32","imdbID":"tt3515318","Type":"movie","DVD":"N/A","BoxOffice":"N/A","Production":"N/A","Website":"N/A","Response":"True"},
{"Title":"Mission Control: The Unsung Heroes of Apollo","Year":"2017","Rated":"N/A","Released":"14 Mar 2017","Runtime":"101 min","Genre":"Documentary, History","Director":"David Fairhead","Writer":"N/A","Actors":"N/A","Plot":"At the heart of the Apollo program was the special team in Mission Control who put a man on the moon and helped create the future.","Language":"English","Country":"USA, UK","Awards":"N/A","Poster":"https://images-na.ssl-images-amazon.com/images/M/MV5BYmM3YWM1NTItZTNiNS00MzlhLTk2YmMtZmRmYzdmMTk0ZThiXkEyXkFqcGdeQXVyMTY2NTQ3ODc@._V1_SX300.jpg","Ratings":[{"Source":"Internet Movie Database","Value":"8.6/10"},{"Source":"Metacritic","Value":"71/100"}],"Metascore":"71","imdbRating":"8.6","imdbVotes":"65","imdbID":"tt5959952","Type":"movie","DVD":"N/A","BoxOffice":"N/A","Production":"N/A","Website":"N/A","Response":"True"},
{"Title":"The Outcasts","Year":"2017","Rated":"PG-13","Released":"14 Apr 2017","Runtime":"95 min","Genre":"Comedy","Director":"Peter Hutchings","Writer":"Dominique Ferrari, Suzanne Wrubel","Actors":"Avan Jogia, Eden Sher, Peyton List, Victoria Justice","Plot":"After falling victim to a humiliating prank by the high school Queen Bee, best friends and world-class geeks, Mindy and Jodi, decide to get their revenge by uniting the outcasts of the school against her and her circle of friends.","Language":"English","Country":"USA","Awards":"N/A","Poster":"https://images-na.ssl-images-amazon.com/images/M/MV5BMTk1N2Y3MDctODY4MS00M2I5LWE2YzEtMThmODAwMjEwMTA4XkEyXkFqcGdeQXVyMjMwMzk5OTI@._V1_SX300.jpg","Ratings":[{"Source":"Internet Movie Database","Value":"5.8/10"},{"Source":"Rotten Tomatoes","Value":"50%"}],"Metascore":"N/A","imdbRating":"5.8","imdbVotes":"726","imdbID":"tt2597760","Type":"movie","DVD":"14 Apr 2017","BoxOffice":"N/A","Production":"BCDF Pictures","Website":"http://theoutcastsmovie.com/","Response":"True"},
{"Title":"Urban Hymn","Year":"2015","Rated":"N/A","Released":"12 May 2017","Runtime":"114 min","Genre":"Crime, Drama","Director":"Michael Caton-Jones","Writer":"Nick Moorcroft","Actors":"Shirley Henderson, Ian Hart, Steven Mackintosh, Letitia Wright","Plot":"Urban Hymn follows a troubled teenage girl, Jamie, who possesses an amazing singing voice, and an inspiring and unconventional social worker, Kate, who encourages her to use it.","Language":"English","Country":"UK","Awards":"3 wins & 1 nomination.","Poster":"https://images-na.ssl-images-amazon.com/images/M/MV5BZjkwYzVlZjEtM2M4Yi00NThiLTg1ZjUtMjAxMWRhMjgzYzY2XkEyXkFqcGdeQXVyNDg3MTQxOTg@._V1_SX300.jpg","Ratings":[{"Source":"Internet Movie Database","Value":"6.2/10"},{"Source":"Rotten Tomatoes","Value":"58%"},{"Source":"Metacritic","Value":"51/100"}],"Metascore":"51","imdbRating":"6.2","imdbVotes":"210","imdbID":"tt2184335","Type":"movie","DVD":"12 May 2017","BoxOffice":"N/A","Production":"Level 33 Entertainment","Website":"N/A","Response":"True"},
{"Title":"21","Year":"2008","Rated":"PG-13","Released":"28 Mar 2008","Runtime":"123 min","Genre":"Crime, Drama, Thriller","Director":"Robert Luketic","Writer":"Peter Steinfeld (screenplay), Allan Loeb (screenplay), Ben Mezrich (book)","Actors":"Jim Sturgess, Kevin Spacey, Kate Bosworth, Aaron Yoo","Plot":"\"21\" is the fact-based story about six MIT students who were trained to become experts in card counting and subsequently took Vegas casinos for millions in winnings.","Language":"English","Country":"USA","Awards":"1 win & 5 nominations.","Poster":"https://images-na.ssl-images-amazon.com/images/M/MV5BMjAyNTU5OTcxOV5BMl5BanBnXkFtZTcwMDEyNjM2MQ@@._V1_SX300.jpg","Ratings":[{"Source":"Internet Movie Database","Value":"6.8/10"},{"Source":"Rotten Tomatoes","Value":"36%"},{"Source":"Metacritic","Value":"48/100"}],"Metascore":"48","imdbRating":"6.8","imdbVotes":"199,834","imdbID":"tt0478087","Type":"movie","DVD":"22 Jul 2008","BoxOffice":"$81,159,365","Production":"Sony/Columbia Pictures","Website":"http://www.sonypictures.com/movies/21/","Response":"True"},
{"Title":"The Barbeque","Year":"2015","Rated":"N/A","Released":"25 Apr 2015","Runtime":"8 min","Genre":"Short, War","Director":"Tony Hunt","Writer":"N/A","Actors":"Peter Butler, Pia Justine Cruz, Sean Cruz, Daniel Harpur","Plot":"At a BBQ, the wife of a soldier learns that he has to go to war. Her parents try to reason with her not to let him go - and it turns out her father has been keeping something secret from her.","Language":"English","Country":"Australia","Awards":"N/A","Poster":"N/A","Ratings":[],"Metascore":"N/A","imdbRating":"N/A","imdbVotes":"N/A","imdbID":"tt4633962","Type":"movie","DVD":"N/A","BoxOffice":"N/A","Production":"N/A","Website":"N/A","Response":"True"},
{"Title":"Donald Cried","Year":"2016","Rated":"N/A","Released":"12 Mar 2016","Runtime":"85 min","Genre":"Comedy, Drama","Director":"Kris Avedisian","Writer":"Kris Avedisian, Kris Avedisian (screenplay), Kyle Espeleta (story), Jesse Wakeman (story)","Actors":"Jesse Wakeman, Louisa Krause, Tyrone Alcorn, Ted Arcidi","Plot":"With sudden passing of his grandmother, Peter Latang returns to his hometown and encounters his long lost, childhood friend, Donald Treebeck. What begins as a simple favor, turns into a long day's journey into the past.","Language":"English","Country":"USA","Awards":"6 wins & 6 nominations.","Poster":"https://images-na.ssl-images-amazon.com/images/M/MV5BMTUyNjU2MzMzMl5BMl5BanBnXkFtZTgwNTUwNTcxMTI@._V1_SX300.jpg","Ratings":[{"Source":"Internet Movie Database","Value":"6.5/10"},{"Source":"Rotten Tomatoes","Value":"92%"},{"Source":"Metacritic","Value":"72/100"}],"Metascore":"72","imdbRating":"6.5","imdbVotes":"406","imdbID":"tt4442604","Type":"movie","DVD":"N/A","BoxOffice":"$61,309","Production":"Electric Chinoland","Website":"http://www.donaldcried.com/","Response":"True"},
{"Title":"My Ex-Ex","Year":"2015","Rated":"N/A","Released":"15 Sep 2015","Runtime":"89 min","Genre":"Comedy, Romance","Director":"Nathaniel Warsh","Writer":"André Bharti, André Bharti","Actors":"André Bharti, Katherine Barrell, Ray Galletti, Emily Alatalo","Plot":"A recently-jilted woman has to decide whether to take back the man who dumped her or return to her college boyfriend.","Language":"English","Country":"Canada","Awards":"N/A","Poster":"https://images-na.ssl-images-amazon.com/images/M/MV5BNjQ3MzI0MjMwOF5BMl5BanBnXkFtZTgwNjM0MTY3NTE@._V1_SX300.jpg","Ratings":[{"Source":"Internet Movie Database","Value":"7.3/10"}],"Metascore":"N/A","imdbRating":"7.3","imdbVotes":"19","imdbID":"tt3202940","Type":"movie","DVD":"N/A","BoxOffice":"N/A","Production":"Project AMB","Website":"N/A","Response":"True"},
{"Title":"The Sweet Life","Year":"2016","Rated":"N/A","Released":"07 Jun 2016","Runtime":"90 min","Genre":"Comedy, Drama, Romance","Director":"Rob Spera","Writer":"Jared Rappaport","Actors":"Chris Messina, Abigail Spencer, Brian Shortall, Karan Soni","Plot":"The Sweet Life, an edgy and unconventional dramedy, is the love story of Kenny Parker and Lolita Nowicki, each struggling with their own brand of demons, who first meet by chance in Chicago...","Language":"English","Country":"USA","Awards":"1 win & 1 nomination.","Poster":"https://images-na.ssl-images-amazon.com/images/M/MV5BMTA5OTkxMzE1ODleQTJeQWpwZ15BbWU4MDYxNzM5NzEy._V1_SX300.jpg","Ratings":[{"Source":"Internet Movie Database","Value":"6.2/10"}],"Metascore":"N/A","imdbRating":"6.2","imdbVotes":"543","imdbID":"tt4838534","Type":"movie","DVD":"11 Apr 2017","BoxOffice":"N/A","Production":"Mockingbird Pictures","Website":"N/A","Response":"True"},
{"Title":"Gold","Year":"2016","Rated":"R","Released":"27 Jan 2017","Runtime":"120 min","Genre":"Adventure, Drama, Thriller","Director":"Stephen Gaghan","Writer":"Patrick Massett, John Zinman","Actors":"Matthew McConaughey, Edgar Ramírez, Bryce Dallas Howard, Corey Stoll","Plot":"Kenny Wells, a prospector desperate for a lucky break, teams up with a similarly eager geologist and sets off on a journey to find gold in the uncharted jungle of Indonesia.","Language":"English, Indonesian","Country":"USA","Awards":"Nominated for 1 Golden Globe. Another 1 win & 3 nominations.","Poster":"https://images-na.ssl-images-amazon.com/images/M/MV5BNjEwNzMzMDI4Nl5BMl5BanBnXkFtZTgwMTM2ODkwMTI@._V1_SX300.jpg","Ratings":[{"Source":"Internet Movie Database","Value":"6.7/10"},{"Source":"Metacritic","Value":"49/100"}],"Metascore":"49","imdbRating":"6.7","imdbVotes":"25,128","imdbID":"tt1800302","Type":"movie","DVD":"N/A","BoxOffice":"N/A","Production":"N/A","Website":"N/A","Response":"True"},
{"Title":"I Am Sam","Year":"2001","Rated":"PG-13","Released":"25 Jan 2002","Runtime":"132 min","Genre":"Drama","Director":"Jessie Nelson","Writer":"Kristine Johnson, Jessie Nelson","Actors":"Sean Penn, Michelle Pfeiffer, Dakota Fanning, Dianne Wiest","Plot":"A mentally handicapped man fights for custody of his 7-year-old daughter, and in the process teaches his cold hearted lawyer the value of love and family.","Language":"English","Country":"USA","Awards":"Nominated for 1 Oscar. Another 8 wins & 10 nominations.","Poster":"https://images-na.ssl-images-amazon.com/images/M/MV5BYzEyNzc0NjctZjJiZC00MWI1LWJlOTMtYWZkZDAzNzQ0ZDNkXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg","Ratings":[{"Source":"Internet Movie Database","Value":"7.6/10"},{"Source":"Rotten Tomatoes","Value":"34%"},{"Source":"Metacritic","Value":"28/100"}],"Metascore":"28","imdbRating":"7.6","imdbVotes":"127,286","imdbID":"tt0277027","Type":"movie","DVD":"18 Jun 2002","BoxOffice":"$40,270,895","Production":"New Line Cinema","Website":"http://www.iamsammovie.com","Response":"True"},
{"Title":"What Happened to Monday?","Year":"2017","Rated":"N/A","Released":"N/A","Runtime":"N/A","Genre":"Sci-Fi, Thriller","Director":"Tommy Wirkola","Writer":"Max Botkin, Kerry Williamson","Actors":"Noomi Rapace, Willem Dafoe, Glenn Close, Robert Wagner","Plot":"In a world where families are limited to one child due to overpopulation, a set of identical septuplets must avoid being put to a long sleep by the government and dangerous infighting while investigating the disappearance of one of their own.","Language":"English","Country":"UK","Awards":"N/A","Poster":"https://images-na.ssl-images-amazon.com/images/M/MV5BYWU0YzJlYjktYTc2YS00YmFlLTlhNzItODQzMmViMWExODJlXkEyXkFqcGdeQXVyNDkzNTM2ODg@._V1_SX300.jpg","Ratings":[],"Metascore":"N/A","imdbRating":"N/A","imdbVotes":"N/A","imdbID":"tt1536537","Type":"movie","DVD":"18 Aug 2017","BoxOffice":"N/A","Production":"Netflix","Website":"N/A","Response":"True"},
{"Title":"Hide and Seek","Year":"2005","Rated":"R","Released":"28 Jan 2005","Runtime":"101 min","Genre":"Drama, Horror, Mystery","Director":"John Polson","Writer":"Ari Schlossberg","Actors":"Robert De Niro, Dakota Fanning, Famke Janssen, Elisabeth Shue","Plot":"As a widower tries to piece together his life in the wake of his wife's suicide, his daughter finds solace -- at first -- in her imaginary friend.","Language":"English","Country":"USA, Germany","Awards":"1 win & 5 nominations.","Poster":"https://images-na.ssl-images-amazon.com/images/M/MV5BMjA1MDkxNDY4OV5BMl5BanBnXkFtZTYwMzE4ODc3._V1_SX300.jpg","Ratings":[{"Source":"Internet Movie Database","Value":"5.9/10"},{"Source":"Rotten Tomatoes","Value":"13%"},{"Source":"Metacritic","Value":"35/100"}],"Metascore":"35","imdbRating":"5.9","imdbVotes":"73,126","imdbID":"tt0382077","Type":"movie","DVD":"05 Jul 2005","BoxOffice":"$51,100,000","Production":"20th Century Fox","Website":"http://www.hideandseekthemovie.com/home.html","Response":"True"},
{"Title":"Camera Store","Year":"2016","Rated":"N/A","Released":"N/A","Runtime":"99 min","Genre":"Drama","Director":"Scott Marshall Smith","Writer":"Scott Marshall Smith","Actors":"John Rhys-Davies, Laura Silverman, Cheryl Ladd, John Larroquette","Plot":"On the eve of the transition from film to digital, the longtime denizens of a camera store confront their personal issues in this darkly comic story.","Language":"English","Country":"USA","Awards":"N/A","Poster":"https://images-na.ssl-images-amazon.com/images/M/MV5BNjQ0MjY4MWEtMjliYS00YjVmLTgyY2YtM2I4OTM1OTU1YmY3XkEyXkFqcGdeQXVyNzI1OTE4Ng@@._V1_SX300.jpg","Ratings":[{"Source":"Internet Movie Database","Value":"9.4/10"}],"Metascore":"N/A","imdbRating":"9.4","imdbVotes":"808","imdbID":"tt4651666","Type":"movie","DVD":"N/A","BoxOffice":"N/A","Production":"Provocator","Website":"N/A","Response":"True"},
{"Title":"AWOL","Year":"2016","Rated":"N/A","Released":"23 May 2017","Runtime":"85 min","Genre":"Drama, Romance","Director":"Deb Shoval","Writer":"Deb Shoval, Karolina Waclawiak","Actors":"Lola Kirke, Breeda Wool, Dale Soules, Bill Sage","Plot":"A young woman Joey is in search of direction in her small town. A visit to an army recruiting office appears to provide a path, but when she meets and falls in love with Rayna that path diverges in ways that neither woman anticipates.","Language":"English","Country":"USA","Awards":"2 wins & 3 nominations.","Poster":"https://images-na.ssl-images-amazon.com/images/M/MV5BMjM0MDkyNTY3Ml5BMl5BanBnXkFtZTgwMDAwOTcyMjI@._V1_SX300.jpg","Ratings":[{"Source":"Internet Movie Database","Value":"5.5/10"},{"Source":"Rotten Tomatoes","Value":"100%"}],"Metascore":"N/A","imdbRating":"5.5","imdbVotes":"270","imdbID":"tt4462372","Type":"movie","DVD":"23 May 2017","BoxOffice":"N/A","Production":"Race Point Films","Website":"N/A","Response":"True"},
{"Title":"Bad Rap","Year":"2016","Rated":"N/A","Released":"16 Apr 2016","Runtime":"82 min","Genre":"Documentary, Music","Director":"Salima Koroma","Writer":"N/A","Actors":"Awkwafina, David Lee, Richard Lee, Jonathan Park","Plot":"Four Asian-American rappers run into tough obstacles as they try to make it big in Hip Hop, a genre rooted in black culture.","Language":"English","Country":"USA, Canada","Awards":"N/A","Poster":"https://images-na.ssl-images-amazon.com/images/M/MV5BNjRjZjQzZjgtZDVlNi00ODY5LTgyN2MtN2VkZTg2YmNiMGE2XkEyXkFqcGdeQXVyMjU5MzI5Nzc@._V1_SX300.jpg","Ratings":[{"Source":"Internet Movie Database","Value":"8.1/10"},{"Source":"Rotten Tomatoes","Value":"67%"}],"Metascore":"N/A","imdbRating":"8.1","imdbVotes":"8","imdbID":"tt5264178","Type":"movie","DVD":"23 May 2017","BoxOffice":"N/A","Production":"N/A","Website":"N/A","Response":"True"},
{"Title":"Beautiful Creatures","Year":"2013","Rated":"PG-13","Released":"14 Feb 2013","Runtime":"124 min","Genre":"Drama, Fantasy, Romance","Director":"Richard LaGravenese","Writer":"Richard LaGravenese (screenplay), Kami Garcia (based on the novel \"Beautiful Creatures\" by), Margaret Stohl (based on the novel \"Beautiful Creatures\" by)","Actors":"Alden Ehrenreich, Alice Englert, Jeremy Irons, Viola Davis","Plot":"Ethan longs to escape his small Southern town. He meets a mysterious new girl, Lena. Together, they uncover dark secrets about their respective families, their history and their town.","Language":"English","Country":"USA","Awards":"9 nominations.","Poster":"https://images-na.ssl-images-amazon.com/images/M/MV5BMTQyMjYwODMwMl5BMl5BanBnXkFtZTcwODUwNzY5OA@@._V1_SX300.jpg","Ratings":[{"Source":"Internet Movie Database","Value":"6.2/10"},{"Source":"Rotten Tomatoes","Value":"46%"},{"Source":"Metacritic","Value":"52/100"}],"Metascore":"52","imdbRating":"6.2","imdbVotes":"72,538","imdbID":"tt1559547","Type":"movie","DVD":"21 May 2013","BoxOffice":"$19,445,217","Production":"Warner Bros. Pictures","Website":"http://beautifulcreaturesmovie.com","Response":"True"},
{"Title":"Unacknowledged","Year":"2017","Rated":"N/A","Released":"09 May 2017","Runtime":"100 min","Genre":"Documentary","Director":"Michael Mazzola","Writer":"Michael Mazzola, Stephen Peek","Actors":"Richard Doty, Giancarlo Esposito, Steven M. Greer, Edgar D. Mitchell","Plot":"\"Unacknowledged\" focuses on the historic files of the Disclosure Project and how UFO secrecy has been ruthlessly enforced-and why. The best evidence for extraterrestrial contact, dating ...","Language":"English","Country":"USA","Awards":"N/A","Poster":"https://images-na.ssl-images-amazon.com/images/M/MV5BM2Y0ZTJlZmItZDcyYS00YjRmLWI0NDQtODBjMTM2YWVmM2E4L2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyNTkzMTE1NjI@._V1_SX300.jpg","Ratings":[{"Source":"Internet Movie Database","Value":"7.3/10"}],"Metascore":"N/A","imdbRating":"7.3","imdbVotes":"1,226","imdbID":"tt6400614","Type":"movie","DVD":"09 May 2017","BoxOffice":"N/A","Production":"The Orchard","Website":"N/A","Response":"True"},
{"Title":"Sadie's Last Days on Earth","Year":"2016","Rated":"N/A","Released":"09 Dec 2016","Runtime":"90 min","Genre":"Comedy","Director":"Michael Seater","Writer":"Lauren Collins (story by), Michael Seater (story by), Michael Seater","Actors":"Morgan Taylor Campbell, Clark Backo, Ricardo Hoyos, Munro Chambers","Plot":"Everything in high school is like the world ending and Sadie Mitchell's crippling fear of the coming apocalypse is the heightened version of that. Undeterred by the naysayers, Sadie has two...","Language":"English","Country":"Canada","Awards":"N/A","Poster":"https://images-na.ssl-images-amazon.com/images/M/MV5BZjgzODExNjQtMWUwZi00OGEyLTkyOWItOGFhOTJkODhlNWQ0XkEyXkFqcGdeQXVyNDkwNzc5OQ@@._V1_SX300.jpg","Ratings":[{"Source":"Internet Movie Database","Value":"4.8/10"},{"Source":"Rotten Tomatoes","Value":"40%"}],"Metascore":"N/A","imdbRating":"4.8","imdbVotes":"158","imdbID":"tt5777802","Type":"movie","DVD":"N/A","BoxOffice":"N/A","Production":"BrancSeater Productions","Website":"N/A","Response":"True"},
{"Title":"Feel Rich: Health Is the New Wealth","Year":"2017","Rated":"N/A","Released":"23 May 2017","Runtime":"N/A","Genre":"Documentary","Director":"Peter Spirer","Writer":"Quincy Jones III, John Michael Measells, Will James Moore, Shawn Ullman","Actors":"Common, Jermaine Dupri, Game, Afya Ibomu","Plot":"FEEL RICH: HEALTH IS THE NEW WEALTH documents the nascent self-love revolution emerging in urban communities. Narrated by Quincy Jones III, the film features interviews with iconic artists,...","Language":"English","Country":"USA","Awards":"N/A","Poster":"https://images-na.ssl-images-amazon.com/images/M/MV5BOTNmMzc1MTAtOGNhZC00YWIwLTkyYmItZmViN2FkZDkyYThhXkEyXkFqcGdeQXVyMzQwMTY2Nzk@._V1_SX300.jpg","Ratings":[],"Metascore":"N/A","imdbRating":"N/A","imdbVotes":"N/A","imdbID":"tt6285404","Type":"movie","DVD":"23 May 2017","BoxOffice":"N/A","Production":"Xlrator Media","Website":"N/A","Response":"True"},
{"Title":"Death Note","Year":"2006–2007","Rated":"TV-14","Released":"03 Oct 2006","Runtime":"24 min","Genre":"Animation, Crime, Drama","Director":"N/A","Writer":"N/A","Actors":"Mamoru Miyano, Brad Swaile, Vincent Tong, Ryô Naitô","Plot":"An intelligent high school student goes on a secret crusade to eliminate criminals from the world after discovering a notebook capable of killing anyone whose name is written into it.","Language":"Japanese","Country":"Japan","Awards":"2 wins.","Poster":"https://images-na.ssl-images-amazon.com/images/M/MV5BODkzMjhjYTQtYmQyOS00NmZlLTg3Y2UtYjkzN2JkNmRjY2FhXkEyXkFqcGdeQXVyNTM4MDQ5MDc@._V1_SX300.jpg","Ratings":[{"Source":"Internet Movie Database","Value":"9.0/10"}],"Metascore":"N/A","imdbRating":"9.0","imdbVotes":"135,532","imdbID":"tt0877057","Type":"series","totalSeasons":"1","Response":"True"},
{"Title":"Be Afraid","Year":"2017","Rated":"N/A","Released":"01 Jun 2017","Runtime":"99 min","Genre":"Horror, Sci-Fi, Thriller","Director":"Drew Gabreski","Writer":"Gerald Nott","Actors":"Brian Krause, Jaimi Paige, Louis Herthum, Jared Abrahamson","Plot":"Not long after John Chambers and his family arrive at their new home in a small country town of Pennsylvania, John begins to experience sleep paralysis. Lying there paralyzed, trapped ...","Language":"English","Country":"USA","Awards":"1 win.","Poster":"https://images-na.ssl-images-amazon.com/images/M/MV5BM2RlMDVhMzgtMzM4My00YjY2LTlkMDgtYzk4MWJhODRhYzRjXkEyXkFqcGdeQXVyMTM2MzgyOTU@._V1_SX300.jpg","Ratings":[{"Source":"Internet Movie Database","Value":"4.7/10"},{"Source":"Rotten Tomatoes","Value":"29%"}],"Metascore":"N/A","imdbRating":"4.7","imdbVotes":"334","imdbID":"tt3311020","Type":"movie","DVD":"01 Jun 2017","BoxOffice":"N/A","Production":"DarkShed","Website":"N/A","Response":"True"}
]


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
  return el.imdbRating >=0;
}).sort(function(a, b){
    var a1= a.imdbRating, b1= b.imdbRating;
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

//set up so that you can have more than one category at once
//clone movies
//var moviesClone = $(".module-movie").clone();



    $("#movies").empty();

  for (i = 0; i < movieInfo.length; i++) {

  //calling template function and passing it the data
  var html = template(movieInfo[i]);
  $("#movies").append(html);
};
$("#movies .module-movie:not(:contains('Sci-Fi'))").remove();

// add the clones here $("#movies").append(moviesClone);

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

//fixed?????????????? fixed above todo!!!?!??!?!
if(movieInfo.length>40){
  popularSort();
} else setTimeout(function (){


  popularSort();
  console.log(movieInfo.length);

}, 500);



$("#tab-imdb-sort-o").on("click", function(){
  $(".sort-wrapper-o").fadeOut("slow");
  $(".black-overlay").fadeOut("slow");
  imdbSort();
})


$("#tab-metascore-sort-o").on("click", function(){
  $(".sort-wrapper-o").fadeOut("slow");
  $(".black-overlay").fadeOut("slow");
  metascoreSort();
})
$("#tab-popular-sort-o").on("click", function(){
  $(".sort-wrapper-o").fadeOut("slow");
  $(".black-overlay").fadeOut("slow");
  popularSort();
})


$("#tab-saved").on("click", function(){
    $(".sort-wrapper-o").fadeOut("slow");
  $(".black-overlay").fadeOut("slow");
 window.location = $(this).find("a").attr("href"); 

});

$("#tab-drama-o").on("click", function(){
  $(".sort-wrapper-o").fadeOut("slow");
  $(".black-overlay").fadeOut("slow");
  showDrama();

})
$("#tab-comedy-o").on("click", function(){
  $(".sort-wrapper-o").fadeOut("slow");
  $(".black-overlay").fadeOut("slow");
  showComedy();
})

$("#tab-action-o").on("click", function(){
  $(".sort-wrapper-o").fadeOut("slow");
  $(".black-overlay").fadeOut("slow");
  showAction();
})
$("#tab-adventure-o").on("click", function(){
  $(".sort-wrapper-o").fadeOut("slow");
  $(".black-overlay").fadeOut("slow");
  showAdventure();
})-
$("#tab-crime-o").on("click", function(){
  $(".sort-wrapper-o").fadeOut("slow");
  $(".black-overlay").fadeOut("slow");
  showCrime();
})
$("#tab-horror-o").on("click", function(){
  $(".sort-wrapper-o").fadeOut("slow");
  $(".black-overlay").fadeOut("slow");
  showHorror();
})
$("#tab-sci-fi-o").on("click", function(){
  $(".sort-wrapper-o").fadeOut("slow");
  $(".black-overlay").fadeOut("slow");
  showSciFi();
})

});





