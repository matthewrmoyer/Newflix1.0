$(document).ready(function(){


//if any movies saved from other sessions, paste them into #saved
//savedMovies is the localstorage key for the innerhtml of #saved from the last session
//change from sessionStorage to localStorage when done programming
var sm = sessionStorage.getItem("savedMovies");
console.log(sm);
$("#saved").append(sm);





var data = {

  movies: [
  
{"Title":"The American Side","Year":"2016","Rated":"N/A","Released":"14 Apr 2016","Runtime":"90 min","Genre":"Drama, Mystery, Thriller","Director":"Jenna Ricker","Writer":"Greg Stuhr, Jenna Ricker","Actors":"Greg Stuhr, Alicja Bachleda, Camilla Belle, Matthew Broderick","Plot":"Following a mysterious suicide at Niagara Falls, a low-rent detective unravels a conspiracy to build a revolutionary invention by enigmatic scientist, Nikola Tesla.","Language":"English","Country":"USA","Awards":"N/A","Poster":"http://ia.media-imdb.com/images/M/MV5BOWQwZTA4OTctYTMwNy00ZDYxLTljZjYtN2U2NTQyYzU3ZDIzXkEyXkFqcGdeQXVyMjYwOTk0OTM@._V1_SX300.jpg","Metascore":"63","imdbRating":"4.7","imdbVotes":"491","imdbID":"tt3093286","Type":"movie","Response":"True"},

{"Title":"An Inconvenient Truth","Year":"2006","Rated":"PG","Released":"30 Jun 2006","Runtime":"96 min","Genre":"Documentary","Director":"Davis Guggenheim","Writer":"N/A","Actors":"Al Gore, Billy West","Plot":"Director Davis Guggenheim eloquently weaves the science of global warming with Al Gore's personal history and lifelong commitment to reversing the effects of global climate change in the most talked-about documentary at Sundance.","Language":"English","Country":"USA","Awards":"Won 2 Oscars. Another 30 wins & 10 nominations.","Poster":"http://ia.media-imdb.com/images/M/MV5BOTg3NjYxMjM5OF5BMl5BanBnXkFtZTcwMzQzMDA0MQ@@._V1_SX300.jpg","Metascore":"75","imdbRating":"7.5","imdbVotes":"67,490","imdbID":"tt0497116","Type":"movie","Response":"True"},

{"Title":"Apex: The Story of the Hypercar","Year":"2016","Rated":"N/A","Released":"29 Mar 2016","Runtime":"85 min","Genre":"Documentary","Director":"J.F. Musial, Josh Vietze","Writer":"Michael Spinelli","Actors":"Manuel Berglung, Chris Goodwin, Dan Greenawalt, Chris Harris","Plot":"\"APEX: The Story of the Hypercar\" spotlights a new class of exotic sports cars designed to blast from zero to 200 miles per hour in seconds. Rocket science meets the auto industry as \"APEX\"...","Language":"German, French, Swedish, English","Country":"USA","Awards":"N/A","Poster":"http://ia.media-imdb.com/images/M/MV5BYWI1NGMxYjEtOWQ5My00NWY2LTlmMDEtZTBkNjYzZjZlYzI4XkEyXkFqcGdeQXVyNDI4ODczMDE@._V1_SX300.jpg","Metascore":"N/A","imdbRating":"8.6","imdbVotes":"33","imdbID":"tt4325400","Type":"movie","Response":"True"},


{"Title":"Beethoven's Christmas Adventure","Year":"2011","Rated":"PG","Released":"08 Nov 2011","Runtime":"90 min","Genre":"Comedy, Fantasy","Director":"John Putch","Writer":"Daniel Altiere, Steven Altiere","Actors":"John Cleese, Munro Chambers, Kim Rhodes, Jan Skene","Plot":"A Christmas elf accidentally takes off in Santa's sleigh, crash lands in a small town, and loses the magic toy bag. Beethoven must rescue the elf, recover the bag from greedy crooks, and return the sleigh to Santa in time to save Christmas.","Language":"English","Country":"USA, Canada","Awards":"2 nominations.","Poster":"http://ia.media-imdb.com/images/M/MV5BMTYzNjc2NzE2Nl5BMl5BanBnXkFtZTgwMDU2NTA2MDE@._V1_SX300.jpg","Metascore":"N/A","imdbRating":"4.6","imdbVotes":"676","imdbID":"tt1855134","Type":"movie","Response":"True"},

{"Title":"Big Daddy","Year":"1999","Rated":"PG-13","Released":"25 Jun 1999","Runtime":"93 min","Genre":"Comedy, Drama","Director":"Dennis Dugan","Writer":"Steve Franks (story), Steve Franks (screenplay), Tim Herlihy (screenplay), Adam Sandler (screenplay)","Actors":"Adam Sandler, Joey Lauren Adams, Jon Stewart, Cole Sprouse","Plot":"A lazy law school grad adopts a kid to impress his girlfriend, but everything doesn't go as planned and he becomes the unlikely foster father.","Language":"English, Italian","Country":"USA","Awards":"8 wins & 11 nominations.","Poster":"http://ia.media-imdb.com/images/M/MV5BMTgwODU4MTg5M15BMl5BanBnXkFtZTcwNjM2NjkxMQ@@._V1_SX300.jpg","Metascore":"41","imdbRating":"6.4","imdbVotes":"160,147","imdbID":"tt0142342","Type":"movie","Response":"True"},

{"Title":"Black Widow","Year":"1987","Rated":"R","Released":"06 Feb 1987","Runtime":"102 min","Genre":"Crime, Thriller","Director":"Bob Rafelson","Writer":"Ronald Bass","Actors":"Debra Winger, Theresa Russell, Sami Frey, Dennis Hopper","Plot":"A federal investigator tracks down a gold digging woman who moves from husband to husband, kills them and collects the inheritance.","Language":"English","Country":"USA","Awards":"N/A","Poster":"http://ia.media-imdb.com/images/M/MV5BMTU5MDUyMzY2MF5BMl5BanBnXkFtZTcwNjMwMTUyMQ@@._V1_SX300.jpg","Metascore":"N/A","imdbRating":"6.3","imdbVotes":"6,376","imdbID":"tt0090738","Type":"movie","Response":"True"},
{"Title":"Critical Condition","Year":"1987","Rated":"R","Released":"16 Jan 1987","Runtime":"100 min","Genre":"Comedy","Director":"Michael Apted","Writer":"Denis Hamill (story), John Hamill (story), Alan Swyer (story), Denis Hamill (screenplay), John Hamill (screenplay), David Isaacs, Ken Levine","Actors":"Richard Pryor, Rachel Ticotin, Rubén Blades, Maria Cardinale","Plot":"Con man Kevin Lennihan framed in a jewel smuggling tries for an insanity plea and is sent to a hospital for review where he is confused for another doctor and takes over the hospital when a major storm hits.","Language":"English","Country":"USA","Awards":"N/A","Poster":"http://ia.media-imdb.com/images/M/MV5BMTkwMDgyOTQ0N15BMl5BanBnXkFtZTcwMDczODUyMQ@@._V1_SX300.jpg","Metascore":"N/A","imdbRating":"5.1","imdbVotes":"2,130","imdbID":"tt0092798","Type":"movie","Response":"True"},
{"Title":"Deadfall","Year":"2012","Rated":"R","Released":"09 Nov 2012","Runtime":"95 min","Genre":"Crime, Drama, Thriller","Director":"Stefan Ruzowitzky","Writer":"Zach Dean","Actors":"Eric Bana, Olivia Wilde, Charlie Hunnam, Dennis Lafond","Plot":"A thriller that follows two siblings who decide to fend for themselves in the wake of a botched casino heist, and their unlikely reunion during another family's Thanksgiving celebration.","Language":"English","Country":"USA, France","Awards":"N/A","Poster":"http://ia.media-imdb.com/images/M/MV5BMTM3ODIwODYxOF5BMl5BanBnXkFtZTcwNTU5MjcxOA@@._V1_SX300.jpg","Metascore":"52","imdbRating":"6.3","imdbVotes":"32,159","imdbID":"tt1667310","Type":"movie","Response":"True"},
{"Title": "Destination: Team USA"},
{"Title": "Funny Or Die Presents: Donald Trump’s Art of the Deal: The Movie"},
{"Title":"The Family Man","Year":"2000","Rated":"PG-13","Released":"22 Dec 2000","Runtime":"125 min","Genre":"Comedy, Drama, Fantasy","Director":"Brett Ratner","Writer":"David Diamond, David Weissman","Actors":"Nicolas Cage, Téa Leoni, Don Cheadle, Jeremy Piven","Plot":"A fast-lane investment broker, offered the opportunity to see how the other half lives, wakes up to find that his sports car and girlfriend have become a mini-van and wife.","Language":"English, Italian","Country":"USA","Awards":"4 wins & 6 nominations.","Poster":"http://ia.media-imdb.com/images/M/MV5BMTI2Mjc0MDYyOV5BMl5BanBnXkFtZTcwMzA5MDQyMQ@@._V1_SX300.jpg","Metascore":"42","imdbRating":"6.7","imdbVotes":"85,564","imdbID":"tt0218967","Type":"movie","Response":"True"},
{"Title":"The Fast and the Furious","Year":"2001","Rated":"PG-13","Released":"22 Jun 2001","Runtime":"106 min","Genre":"Action, Crime, Thriller","Director":"Rob Cohen","Writer":"Ken Li (magazine article \"Racer X\"), Gary Scott Thompson (screen story), Gary Scott Thompson (screenplay), Erik Bergquist (screenplay), David Ayer (screenplay)","Actors":"Paul Walker, Vin Diesel, Michelle Rodriguez, Jordana Brewster","Plot":"Los Angeles police officer Brian O'Connor must decide where his loyalties really lie when he becomes enamored with the street racing world he has been sent undercover to destroy.","Language":"English","Country":"USA, Germany","Awards":"9 wins & 12 nominations.","Poster":"http://ia.media-imdb.com/images/M/MV5BMjAyNDQwMTEzMl5BMl5BanBnXkFtZTgwNDk3NzUwOTE@._V1_SX300.jpg","Metascore":"58","imdbRating":"6.7","imdbVotes":"270,440","imdbID":"tt0232500","Type":"movie","Response":"True"},
{"Title":"The Fast and the Furious: Tokyo Drift","Year":"2006","Rated":"PG-13","Released":"16 Jun 2006","Runtime":"104 min","Genre":"Action, Crime, Thriller","Director":"Justin Lin","Writer":"Chris Morgan","Actors":"Lucas Black, Damien Marzette, Trula M. Marcus, Zachery Ty Bryan","Plot":"A teenager becomes a major competitor in the world of drift racing after moving in with his father in Tokyo to avoid a jail sentence in America.","Language":"English, Japanese","Country":"USA","Awards":"4 nominations.","Poster":"http://ia.media-imdb.com/images/M/MV5BMTQ2NTMxODEyNV5BMl5BanBnXkFtZTcwMDgxMjA0MQ@@._V1_SX300.jpg","Metascore":"46","imdbRating":"6.0","imdbVotes":"178,941","imdbID":"tt0463985","Type":"movie","Response":"True"},
{"Title":"Final Destination 3","Year":"2006","Rated":"R","Released":"10 Feb 2006","Runtime":"93 min","Genre":"Horror","Director":"James Wong","Writer":"Glen Morgan, James Wong, Jeffrey Reddick (characters)","Actors":"Mary Elizabeth Winstead, Ryan Merriman, Kris Lemche, Alexz Johnson","Plot":"In this third installment of the Final Destination series, a student's premonition of a deadly rollercoaster ride saves her life and a lucky few, but not from death itself which seeks out those who escaped their fate.","Language":"English","Country":"Germany, USA, Canada","Awards":"6 nominations.","Poster":"http://ia.media-imdb.com/images/M/MV5BMTg2MzI0MzczOF5BMl5BanBnXkFtZTcwNzAyODExMw@@._V1_SX300.jpg","Metascore":"41","imdbRating":"5.8","imdbVotes":"101,634","imdbID":"tt0414982","Type":"movie","Response":"True"},
{"Title":"From the Terrace","Year":"1960","Rated":"APPROVED","Released":"09 Sep 1960","Runtime":"149 min","Genre":"Drama, Romance","Director":"Mark Robson","Writer":"John O'Hara (novel), Ernest Lehman (screenplay)","Actors":"Paul Newman, Joanne Woodward, Myrna Loy, Ina Balin","Plot":"An ambitious young executive chooses a loveless marriage and an unfulfilling personal life in exchange for a successful Wall Street career.","Language":"English","Country":"USA","Awards":"Won 1 Golden Globe. Another 2 nominations.","Poster":"http://ia.media-imdb.com/images/M/MV5BMTYzNzcxODUxOF5BMl5BanBnXkFtZTYwNzMwNzk5._V1_SX300.jpg","Metascore":"N/A","imdbRating":"6.7","imdbVotes":"1,784","imdbID":"tt0053841","Type":"movie","Response":"True"},
{"Title":"Holding the Man","Year":"2015","Rated":"N/A","Released":"27 Aug 2015","Runtime":"127 min","Genre":"Biography, Drama, Romance","Director":"Neil Armfield","Writer":"Tommy Murphy (screenplay), Timothy Conigrave (book)","Actors":"Ryan Corr, Sarah Snook, Francesco Ferdinandi, Craig Stott","Plot":"Tim and John fell in love while teenagers at their all-boys high school. John was captain of the football team, Tim an aspiring actor playing a minor part in Romeo and Juliet. Their romance...","Language":"English","Country":"Australia","Awards":"6 wins & 17 nominations.","Poster":"http://ia.media-imdb.com/images/M/MV5BMTAyNTUyNDM3NzZeQTJeQWpwZ15BbWU4MDkzMDAyNDYx._V1_SX300.jpg","Metascore":"N/A","imdbRating":"7.0","imdbVotes":"2,044","imdbID":"tt3671542","Type":"movie","Response":"True"},
{"Title": "How to Win the US Presidency"},
{"Title":"In the Shadow of the Moon","Year":"2007","Rated":"PG","Released":"02 Nov 2007","Runtime":"100 min","Genre":"Documentary, History","Director":"David Sington","Writer":"N/A","Actors":"Buzz Aldrin, Neil Armstrong, Stephen Armstrong, Viola Armstrong","Plot":"The crew members of NASA's Apollo missions tell their story in their own words.","Language":"English, French, Japanese","Country":"UK, USA","Awards":"5 wins & 13 nominations.","Poster":"http://ia.media-imdb.com/images/M/MV5BOTUxNjQyMjAyOV5BMl5BanBnXkFtZTcwNjE4ODE1MQ@@._V1_SX300.jpg","Metascore":"84","imdbRating":"8.1","imdbVotes":"5,426","imdbID":"tt0925248","Type":"movie","Response":"True"},
{"Title": "ISIS Women Unveiled"},
{"Title":"Masha and the Bear","Year":"2009–","Rated":"TV-Y","Released":"07 Jan 2009","Runtime":"N/A","Genre":"Animation, Action, Adventure","Director":"N/A","Writer":"Oleg Kuzovkov","Actors":"Alina Kukushkina, Boris Kutnevich, Elsie Fisher, Giselle Nieto","Plot":"A retired circus bear settles into the woods and prepares for a quiet new life surrounded by peace and tranquility until he is introduced to an adventurous little girl named Masha.","Language":"Russian","Country":"Russia","Awards":"N/A","Poster":"http://ia.media-imdb.com/images/M/MV5BNDhmMmEzYmQtYmEyYy00NDU2LWJhNGUtNTExZjQ3ZGEwMjc0XkEyXkFqcGdeQXVyMTM3OTE2Mzg@._V1_SX300.jpg","Metascore":"N/A","imdbRating":"8.3","imdbVotes":"1,109","imdbID":"tt1884856","Type":"series","totalSeasons":"2","Response":"True"},
{"Title":"Memoria","Year":"2015","Rated":"R","Released":"08 Apr 2016","Runtime":"70 min","Genre":"Biography, Drama","Director":"Vladimir de Fontenay, Nina Ljeti","Writer":"Nina Ljeti, Nina Ljeti, Vladimir de Fontenay, Vladimir de Fontenay","Actors":"Sam Dillon, Thomas Mann, James Franco, Teo Halm","Plot":"Ivan Cohen is a young boy living in Palo Alto, California. Unsatisfied by his slacker group of friends, his love for a girl who doesn't know he exists and a dysfunctional family life, he is struggling to find his place in the world.","Language":"English","Country":"USA","Awards":"N/A","Poster":"http://ia.media-imdb.com/images/M/MV5BNTY0ODgyOTA2N15BMl5BanBnXkFtZTgwMjQ1OTIzODE@._V1_SX300.jpg","Metascore":"N/A","imdbRating":"5.2","imdbVotes":"110","imdbID":"tt3262252","Type":"movie","Response":"True"},
{"Title":"The Naked Prey","Year":"1965","Rated":"APPROVED","Released":"14 Jun 1966","Runtime":"96 min","Genre":"Adventure, Drama, Thriller","Director":"Cornel Wilde","Writer":"Clint Johnston, Don Peters","Actors":"Cornel Wilde, Gert van den Bergh, Ken Gampu, Patrick Mynhardt","Plot":"A group of men are on safari. One of the party refuses to give a gift to a tribe they encounter. The tribe is offended, seizes the party, and one-by-one, kills all but one of the safari ...","Language":"English","Country":"South Africa, USA","Awards":"N/A","Poster":"http://ia.media-imdb.com/images/M/MV5BMTQ0ODU4NDE1M15BMl5BanBnXkFtZTcwMDEyMTU1MQ@@._V1_SX300.jpg","Metascore":"N/A","imdbRating":"7.5","imdbVotes":"3,632","imdbID":"tt0060736","Type":"movie","Response":"True"},
{"Title":"Pay It Forward","Year":"2000","Rated":"PG-13","Released":"20 Oct 2000","Runtime":"123 min","Genre":"Drama","Director":"Mimi Leder","Writer":"Catherine Ryan Hyde (book), Leslie Dixon (screenplay)","Actors":"Kevin Spacey, Helen Hunt, Haley Joel Osment, Jay Mohr","Plot":"A young boy attempts to make the world a better place after his teacher gives him that chance.","Language":"English","Country":"USA","Awards":"1 win & 4 nominations.","Poster":"http://ia.media-imdb.com/images/M/MV5BNjI3ODI5NDEwMl5BMl5BanBnXkFtZTYwNDYyMjU3._V1_SX300.jpg","Metascore":"40","imdbRating":"7.2","imdbVotes":"95,130","imdbID":"tt0223897","Type":"movie","Response":"True"},
{"Title": "The Real Texas Chainsaw Massacre"},
{"Title":"Roseanne","Year":"1988–1997","Rated":"TV-PG","Released":"18 Oct 1988","Runtime":"22 min","Genre":"Comedy, Drama","Director":"N/A","Writer":"Matt Williams","Actors":"Roseanne Barr, John Goodman, Laurie Metcalf, Sara Gilbert","Plot":"The story of a working class family struggling with life's essential problems: Marriage, Children, Money and Parents in Law.","Language":"English","Country":"USA","Awards":"Won 3 Golden Globes. Another 43 wins & 108 nominations.","Poster":"http://ia.media-imdb.com/images/M/MV5BMjE4MTA2MzE1Nl5BMl5BanBnXkFtZTcwNjAyOTkyMQ@@._V1_SX300.jpg","Metascore":"N/A","imdbRating":"7.0","imdbVotes":"27,298","imdbID":"tt0094540","Type":"series","totalSeasons":"9","Response":"True"},
{"Title":"Sleepy Hollow","Year":"1999","Rated":"R","Released":"19 Nov 1999","Runtime":"105 min","Genre":"Fantasy, Horror, Mystery","Director":"Tim Burton","Writer":"Washington Irving (story \"The Legend of Sleepy Hollow\"), Kevin Yagher (screen story), Andrew Kevin Walker (screen story), Andrew Kevin Walker (screenplay)","Actors":"Johnny Depp, Christina Ricci, Miranda Richardson, Michael Gambon","Plot":"Ichabod Crane is sent to Sleepy Hollow to investigate the decapitations of 3 people with the culprit being the legendary apparition, the Headless Horseman.","Language":"English, Latin","Country":"USA, Germany","Awards":"Won 1 Oscar. Another 23 wins & 39 nominations.","Poster":"http://ia.media-imdb.com/images/M/MV5BMTQ4Yjk5ODEtNGFkOS00OTY1LTgwYTYtOTFkNmU2NzBmNGM2XkEyXkFqcGdeQXVyNDQ2MTMzODA@._V1_SX300.jpg","Metascore":"65","imdbRating":"7.4","imdbVotes":"266,129","imdbID":"tt0162661","Type":"movie","Response":"True"},
{"Title":"Sliding Doors","Year":"1998","Rated":"R","Released":"01 May 1998","Runtime":"99 min","Genre":"Comedy, Drama, Fantasy","Director":"Peter Howitt","Writer":"Peter Howitt","Actors":"Gwyneth Paltrow, John Hannah, John Lynch, Jeanne Tripplehorn","Plot":"A London woman's love life and career both hinge, unknown to her, on whether or not she catches a train. We see it both ways, in parallel.","Language":"English","Country":"UK, USA","Awards":"6 wins & 4 nominations.","Poster":"http://ia.media-imdb.com/images/M/MV5BMTI0NjExNDg2N15BMl5BanBnXkFtZTYwMDMyOTA5._V1_SX300.jpg","Metascore":"59","imdbRating":"6.8","imdbVotes":"52,734","imdbID":"tt0120148","Type":"movie","Response":"True"},
{"Title":"Star Trek: Nemesis","Year":"2002","Rated":"PG-13","Released":"13 Dec 2002","Runtime":"116 min","Genre":"Action, Adventure, Sci-Fi","Director":"Stuart Baird","Writer":"Gene Roddenberry (television series Star Trek), John Logan (story), Rick Berman (story), Brent Spiner (story), John Logan (screenplay)","Actors":"Patrick Stewart, Jonathan Frakes, Brent Spiner, LeVar Burton","Plot":"The Enterprise is diverted to the Romulan homeworld Romulus, supposedly because they want to negotiate a peace treaty.","Language":"English","Country":"USA","Awards":"1 win & 4 nominations.","Poster":"http://ia.media-imdb.com/images/M/MV5BMjAxNjY2NDY3NF5BMl5BanBnXkFtZTcwMjA0MTEzMw@@._V1_SX300.jpg","Metascore":"51","imdbRating":"6.4","imdbVotes":"57,718","imdbID":"tt0253754","Type":"movie","Response":"True"},
{"Title":"Teacher's Pet","Year":"1958","Rated":"APPROVED","Released":"01 Apr 1958","Runtime":"120 min","Genre":"Comedy, Romance","Director":"George Seaton","Writer":"Fay Kanin, Michael Kanin","Actors":"Clark Gable, Doris Day, Gig Young, Mamie Van Doren","Plot":"A newspaper editor joins the class of a journalism professor who despises him, and they begin to fall in love.","Language":"English","Country":"USA","Awards":"Nominated for 2 Oscars. Another 7 nominations.","Poster":"http://ia.media-imdb.com/images/M/MV5BMTI1MTI4MzQ3MV5BMl5BanBnXkFtZTcwMDk5NDgyMQ@@._V1_SX300.jpg","Metascore":"N/A","imdbRating":"7.2","imdbVotes":"2,884","imdbID":"tt0052278","Type":"movie","Response":"True"},
{"Title":"The Verdict","Year":"1982","Rated":"R","Released":"17 Dec 1982","Runtime":"129 min","Genre":"Drama","Director":"Sidney Lumet","Writer":"Barry Reed (based upon the novel by), David Mamet (screenplay)","Actors":"Paul Newman, Charlotte Rampling, Jack Warden, James Mason","Plot":"A lawyer sees the chance to salvage his career and self-respect by taking a medical malpractice case to trial rather than settling.","Language":"English","Country":"USA","Awards":"Nominated for 5 Oscars. Another 3 wins & 9 nominations.","Poster":"http://ia.media-imdb.com/images/M/MV5BMTU5MzMwMzAzM15BMl5BanBnXkFtZTcwNjYyMjA0Mg@@._V1_SX300.jpg","Metascore":"N/A","imdbRating":"7.8","imdbVotes":"25,987","imdbID":"tt0084855","Type":"movie","Response":"True"},
{"Title":"The Wedding Planner","Year":"2001","Rated":"PG-13","Released":"26 Jan 2001","Runtime":"103 min","Genre":"Comedy, Romance","Director":"Adam Shankman","Writer":"Pamela Falk, Michael Ellis","Actors":"Jennifer Lopez, Matthew McConaughey, Bridgette Wilson-Sampras, Justin Chambers","Plot":"Mary Fiore is San Francisco's most successful supplier of romance and glamor. She knows all the tricks. She knows all the rules. But then she breaks the most important rule of all: she falls in love with the groom.","Language":"English, Italian","Country":"Germany, USA","Awards":"1 win & 6 nominations.","Poster":"http://ia.media-imdb.com/images/M/MV5BMjE3NTc5MzA0Nl5BMl5BanBnXkFtZTYwMTU3ODc5._V1_SX300.jpg","Metascore":"33","imdbRating":"5.2","imdbVotes":"61,156","imdbID":"tt0209475","Type":"movie","Response":"True"},
{"Title":"What Women Want","Year":"2000","Rated":"PG-13","Released":"15 Dec 2000","Runtime":"127 min","Genre":"Comedy, Fantasy, Romance","Director":"Nancy Meyers","Writer":"Josh Goldsmith (story), Cathy Yuspa (story), Diane Drake (story), Josh Goldsmith (screenplay), Cathy Yuspa (screenplay)","Actors":"Mel Gibson, Helen Hunt, Marisa Tomei, Alan Alda","Plot":"After an accident, a chauvenistic executive gains the ability to hear what women are really thinking.","Language":"English, French","Country":"USA","Awards":"Nominated for 1 Golden Globe. Another 5 wins & 7 nominations.","Poster":"http://ia.media-imdb.com/images/M/MV5BZjUyZWE5YmMtNDA2ZC00NzFlLTg0MzktOTgzYjA2ZWE3NmIwXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg","Metascore":"47","imdbRating":"6.4","imdbVotes":"158,488","imdbID":"tt0207201","Type":"movie","Response":"True"},
{"Title":"Young@Heart","Year":"2007","Rated":"PG","Released":"23 May 2008","Runtime":"107 min","Genre":"Documentary, Music","Director":"Stephen Walker, Sally George","Writer":"N/A","Actors":"Joe Benoit, Helen Boston, Louise Canady, Elaine Fligman","Plot":"A documentary on a chorus of senior citizens from Massachusetts who cover songs by Jimi Hendrix, Coldplay, Sonic Youth, and other unexpected musicians.","Language":"English","Country":"UK","Awards":"9 wins & 9 nominations.","Poster":"http://ia.media-imdb.com/images/M/MV5BMTU4MDM1MzA0N15BMl5BanBnXkFtZTcwMjQ2OTc1MQ@@._V1_SX300.jpg","Metascore":"75","imdbRating":"7.9","imdbVotes":"3,542","imdbID":"tt1047007","Type":"movie","Response":"True"},
{"Title":"The Verdict","Year":"1982","Rated":"R","Released":"17 Dec 1982","Runtime":"129 min","Genre":"Drama","Director":"Sidney Lumet","Writer":"Barry Reed (based upon the novel by), David Mamet (screenplay)","Actors":"Paul Newman, Charlotte Rampling, Jack Warden, James Mason","Plot":"A lawyer sees the chance to salvage his career and self-respect by taking a medical malpractice case to trial rather than settling.","Language":"English","Country":"USA","Awards":"Nominated for 5 Oscars. Another 3 wins & 9 nominations.","Poster":"http://ia.media-imdb.com/images/M/MV5BMTU5MzMwMzAzM15BMl5BanBnXkFtZTcwNjYyMjA0Mg@@._V1_SX300.jpg","Metascore":"N/A","imdbRating":"7.8","imdbVotes":"25,987","imdbID":"tt0084855","Type":"movie","Response":"True"},
{"Title":"Zack and Miri Make a Porno","Year":"2008","Rated":"R","Released":"31 Oct 2008","Runtime":"101 min","Genre":"Comedy, Romance","Director":"Kevin Smith","Writer":"Kevin Smith","Actors":"Elizabeth Banks, Seth Rogen, Craig Robinson, Gerry Bednob","Plot":"Lifelong platonic friends Zack and Miri look to solve their respective cash-flow problems by making an adult film together. As the cameras roll, however, the duo begin to sense that they may have more feelings for each other than they previously thought.","Language":"English","Country":"USA","Awards":"2 wins & 4 nominations.","Poster":"http://ia.media-imdb.com/images/M/MV5BYTIyMDJmMDEtMmNjYS00YzZlLThjMDYtZDNjOWM3NDJiNWM2XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg","Metascore":"56","imdbRating":"6.6","imdbVotes":"149,428","imdbID":"tt1007028","Type":"movie","Response":"True"},
{"Title":"Beat Bugs","Year":"2015–","Rated":"N/A","Released":"N/A","Runtime":"N/A","Genre":"Animation","Director":"N/A","Writer":"N/A","Actors":"N/A","Plot":"N/A","Language":"N/A","Country":"Australia, Canada","Awards":"N/A","Poster":"N/A","Metascore":"N/A","imdbRating":"N/A","imdbVotes":"N/A","imdbID":"tt4716268","Type":"series","totalSeasons":"N/A","Response":"True"},
{"Title": "David Cross: Making America Great Again"},
{"Title":"Ever After High","Year":"2013–","Rated":"N/A","Released":"30 May 2013","Runtime":"N/A","Genre":"Animation","Director":"N/A","Writer":"N/A","Actors":"Erin Fitzgerald, Kate Higgins, Evan Smith, Jonquil Goode","Plot":"The students of all the fairytale characters attend Ever After High, where they are either Royals (students who want to follow in their parent's footsteps) or Rebels (students who wish to write their own destiny).","Language":"English","Country":"Canada","Awards":"N/A","Poster":"N/A","Metascore":"N/A","imdbRating":"8.1","imdbVotes":"278","imdbID":"tt3312378","Type":"series","totalSeasons":"4","Response":"True"},
{"Title":"The Little Prince","Year":"2015","Rated":"PG","Released":"05 Aug 2016","Runtime":"108 min","Genre":"Animation, Adventure, Drama","Director":"Mark Osborne","Writer":"Irena Brignull (screenplay), Bob Persichetti (screenplay), Antoine de Saint-Exupéry (novel)","Actors":"Jeff Bridges, Rachel McAdams, Paul Rudd, Marion Cotillard","Plot":"A little girl lives in a very grown-up world with her mother, who tries to prepare her for it. Her neighbor, the Aviator, introduces the girl to an extraordinary world where anything is possible, the world of the Little Prince.","Language":"English, French","Country":"France, Canada","Awards":"1 win.","Poster":"http://ia.media-imdb.com/images/M/MV5BNDE5NTg5NTA3NF5BMl5BanBnXkFtZTgwNTQ2ODU3NzE@._V1_SX300.jpg","Metascore":"71","imdbRating":"7.8","imdbVotes":"26,330","imdbID":"tt1754656","Type":"movie","Response":"True"},
{"Title":"Punk's Dead: SLC Punk 2","Year":"2016","Rated":"N/A","Released":"N/A","Runtime":"75 min","Genre":"Comedy","Director":"James Merendino","Writer":"James Merendino","Actors":"Ben Schnetzer, Devon Sawa, Sarah Clarke, Hannah Marks","Plot":"A young punk's odyssey.","Language":"English","Country":"USA","Awards":"N/A","Poster":"http://ia.media-imdb.com/images/M/MV5BMTA1NzU2NTc4OTReQTJeQWpwZ15BbWU4MDI1MjU2OTMx._V1_SX300.jpg","Metascore":"N/A","imdbRating":"5.9","imdbVotes":"260","imdbID":"tt2836166","Type":"movie","Response":"True"},
{"Title":"The Confirmation","Year":"2016","Rated":"PG-13","Released":"18 Mar 2016","Runtime":"90 min","Genre":"Comedy","Director":"Bob Nelson","Writer":"Bob Nelson","Actors":"Clive Owen, Jaeden Lieberher, Maria Bello, Patton Oswalt","Plot":"Eight year old Anthony is somewhat uneasy about spending the weekend with his alcoholic, down-on-his-luck carpenter dad Walt while his mom Bonnie and her new husband Kyle go to a Catholic ...","Language":"English","Country":"Canada","Awards":"1 nomination.","Poster":"http://ia.media-imdb.com/images/M/MV5BNzI3OTY5NDU0NV5BMl5BanBnXkFtZTgwNjY2NDA5NzE@._V1_SX300.jpg","Metascore":"65","imdbRating":"6.4","imdbVotes":"1,447","imdbID":"tt4210080","Type":"movie","Response":"True"},
{"Title":"Real Husbands of Hollywood Season 4 Promotional Campaign","Year":"2015","Rated":"N/A","Released":"18 Aug 2015","Runtime":"N/A","Genre":"N/A","Director":"N/A","Writer":"N/A","Actors":"N/A","Plot":"N/A","Language":"N/A","Country":"USA","Awards":"N/A","Poster":"N/A","Metascore":"N/A","imdbRating":"N/A","imdbVotes":"N/A","imdbID":"tt4998204","Type":"series","totalSeasons":"4","Response":"True"},
{"Title":"T-Rex","Year":"2015","Rated":"N/A","Released":"24 Jun 2016","Runtime":"91 min","Genre":"Documentary, Action, Sport","Director":"Zackary Canepari, Drea Cooper","Writer":"N/A","Actors":"N/A","Plot":"17-year-old Claressa 'T-Rex' Shields from Flint, Michigan dreams of being the first woman in history to win a gold medal in Olympic boxing. But in order for her to succeed, she'll need to stand her ground both inside and outside the ring.","Language":"English","Country":"USA, Canada, China, UK","Awards":"4 wins & 1 nomination.","Poster":"http://ia.media-imdb.com/images/M/MV5BNDkyMTAyNjU5N15BMl5BanBnXkFtZTgwOTM1NzE3NDE@._V1_SX300.jpg","Metascore":"69","imdbRating":"8.2","imdbVotes":"23","imdbID":"tt4151212","Type":"movie","Response":"True"},
{"Title":"Flight of the Butterflies","Year":"2012","Rated":"N/A","Released":"08 Jan 2013","Runtime":"40 min","Genre":"Documentary, Biography, Drama","Director":"Mike Slee","Writer":"Wendy MacKeigan, Mike Slee","Actors":"Gordon Pinsent, Patricia Phillips, Shaun Benson, Stephen Bogaert","Plot":"A film of hundreds of millions of monarchs in their remote overwintering sanctuaries and along their migratory routes from Canada and across the U.S. to Mexico.","Language":"English","Country":"UK, Mexico, Canada","Awards":"N/A","Poster":"http://ia.media-imdb.com/images/M/MV5BOTI3NDA1MTU5MF5BMl5BanBnXkFtZTcwMTg4NjI0OA@@._V1_SX300.jpg","Metascore":"N/A","imdbRating":"7.1","imdbVotes":"236","imdbID":"tt2174750","Type":"movie","Response":"True"},
{"Title":"No Country for Old Men","Year":"2007","Rated":"R","Released":"21 Nov 2007","Runtime":"122 min","Genre":"Crime, Drama, Thriller","Director":"Ethan Coen, Joel Coen","Writer":"Joel Coen (screenplay), Ethan Coen (screenplay), Cormac McCarthy (novel)","Actors":"Tommy Lee Jones, Javier Bardem, Josh Brolin, Woody Harrelson","Plot":"Violence and mayhem ensue after a hunter stumbles upon a drug deal gone wrong and more than two million dollars in cash near the Rio Grande.","Language":"English, Spanish","Country":"USA","Awards":"Won 4 Oscars. Another 155 wins & 131 nominations.","Poster":"http://ia.media-imdb.com/images/M/MV5BMjA5Njk3MjM4OV5BMl5BanBnXkFtZTcwMTc5MTE1MQ@@._V1_SX300.jpg","Metascore":"91","imdbRating":"8.1","imdbVotes":"610,435","imdbID":"tt0477348","Type":"movie","Response":"True"},
{"Title":"Ask the StoryBots","Year":"2016–","Rated":"N/A","Released":"12 Aug 2016","Runtime":"N/A","Genre":"Animation","Director":"N/A","Writer":"N/A","Actors":"Erin Fitzgerald, Jeff Gill, Evan Spiridellis, Gregg Spiridellis","Plot":"N/A","Language":"English","Country":"USA","Awards":"N/A","Poster":"N/A","Metascore":"N/A","imdbRating":"N/A","imdbVotes":"N/A","imdbID":"tt5846856","Type":"series","totalSeasons":"1","Response":"True"},
{"Title":"The Get Down","Year":"2016–","Rated":"N/A","Released":"12 Aug 2016","Runtime":"52 min","Genre":"Drama, Music, Musical","Director":"N/A","Writer":"Shawn Ryan","Actors":"Yahya Abdul-Mateen II, Mamoudou Athie, Skylan Brooks, Tremaine Brown Jr.","Plot":"A rag tag group of teenagers run wild in the streets of the Bronx in the late 70's.","Language":"English","Country":"USA","Awards":"N/A","Poster":"http://ia.media-imdb.com/images/M/MV5BODE0NDcwMDYzNl5BMl5BanBnXkFtZTgwOTIzNDQ2NzE@._V1_SX300.jpg","Metascore":"N/A","imdbRating":"N/A","imdbVotes":"N/A","imdbID":"tt4592410","Type":"series","totalSeasons":"1","Response":"True"},
{"Title":"Project MC2","Year":"2015","Rated":"N/A","Released":"27 Dec 2015","Runtime":"N/A","Genre":"N/A","Director":"Michael Younesi","Writer":"Katiedid Langrock","Actors":"Mika Abdalla, Ysa Penarejo, Victoria Vida, Genneya Walton","Plot":"NOV8 has a new assignment for the girls: throw the best New Year's Eve party ever!!!. The team must teach secret agent McKeyla McAlister how to host a party before the ball drops in this Netflix exclusive countdown to 2016.","Language":"N/A","Country":"N/A","Awards":"N/A","Poster":"N/A","Metascore":"N/A","imdbRating":"N/A","imdbVotes":"N/A","imdbID":"tt5648878","Type":"movie","Response":"True"},
{"Title":"13 Cameras","Year":"2015","Rated":"N/A","Released":"15 Apr 2016","Runtime":"87 min","Genre":"Drama, Horror","Director":"Victor Zarcoff","Writer":"Victor Zarcoff","Actors":"Neville Archambault, Sarah Baldwin, Sean Carrigan, Jim Cummings","Plot":"Claire and Ryan, a newlywed couple, move into a new house across the country, only to find out that their marital issues are the least of their problems. Unbeknownst to them, Their grim and...","Language":"English","Country":"USA","Awards":"1 win.","Poster":"http://ia.media-imdb.com/images/M/MV5BMWUzNDZkZTAtYzdmZi00NzI3LThkMjQtNTMxYWVjNmU4OGZiXkEyXkFqcGdeQXVyNjEwNTM2Mzc@._V1_SX300.jpg","Metascore":"41","imdbRating":"5.2","imdbVotes":"757","imdbID":"tt4392454","Type":"movie","Response":"True"},
{"Title":"Louis C.K.: Live at the Comedy Store","Year":"2015","Rated":"N/A","Released":"27 Jan 2015","Runtime":"66 min","Genre":"Comedy","Director":"Louis C.K.","Writer":"Louis C.K., Jay London (opening act)","Actors":"Louis C.K., Jay London","Plot":"Comedian Louis C.K. performs live at the Comedy store in LA.","Language":"English","Country":"USA","Awards":"Won 1 Primetime Emmy. Another 1 nomination.","Poster":"http://ia.media-imdb.com/images/M/MV5BODJlMmIyNjEtZDQ0ZS00MGIyLWEyZmYtOTQyYTQyMWJkODhmXkEyXkFqcGdeQXVyMjQ0ODQ0MzQ@._V1_SX300.jpg","Metascore":"N/A","imdbRating":"7.9","imdbVotes":"1,794","imdbID":"tt4368814","Type":"movie","Response":"True"},
{"Title":"Let's Go to Prison","Year":"2006","Rated":"R","Released":"17 Nov 2006","Runtime":"84 min","Genre":"Comedy, Crime","Director":"Bob Odenkirk","Writer":"Robert Ben Garant, Thomas Lennon, Michael Patrick Jann, Jim Hogshire (book)","Actors":"Dax Shepard, Will Arnett, Chi McBride, David Koechner","Plot":"When a career criminal's plan for revenge is thwarted by unlikely circumstances, he puts his intended victim's son in his place by putting him in prison...and then joining him.","Language":"English","Country":"USA","Awards":"N/A","Poster":"http://ia.media-imdb.com/images/M/MV5BMTQ2ODkxNDE1N15BMl5BanBnXkFtZTcwOTMzMjkzMQ@@._V1_SX300.jpg","Metascore":"27","imdbRating":"6.0","imdbVotes":"19,596","imdbID":"tt0454987","Type":"movie","Response":"True"},
{"Title":"Our Last Tango","Year":"2015","Rated":"NOT RATED","Released":"10 Dec 2015","Runtime":"85 min","Genre":"Documentary, Musical","Director":"German Kral","Writer":"German Kral","Actors":"Melina Brutman, Johana Copes, Juan Carlos Copes, Leonardo Cuello","Plot":"The life and love story of Argentina's famous tango dancers Maria Nieves Rego and Juan Carlos Copes, who met as teenagers and danced together for nearly fifty years until a painful separation tore them apart.","Language":"Spanish","Country":"Argentina, Germany","Awards":"3 nominations.","Poster":"http://ia.media-imdb.com/images/M/MV5BMTYwNDkxNjAxOV5BMl5BanBnXkFtZTgwODAyMDE1ODE@._V1_SX300.jpg","Metascore":"70","imdbRating":"7.3","imdbVotes":"156","imdbID":"tt4937156","Type":"movie","Response":"True"},
{"Title":"The Curse of Sleeping Beauty","Year":"2016","Rated":"N/A","Released":"13 May 2016","Runtime":"89 min","Genre":"Fantasy, Mystery, Thriller","Director":"Pearry Reginald Teo","Writer":"Josh Nadler (screenplay), Pearry Reginald Teo (screen story), Everette Hartsoe (based on the comic book by), Jacob Grimm (inspired by the story \"Little Briar Rose\" by), Wilhelm Grimm (inspired by the story \"Little Briar Rose\" by), Pearry Reginald Teo (screenplay)","Actors":"Ethan Peck, India Eisley, Natalie Hall, Bruce Davison","Plot":"Thomas unexpectedly inherits a property with a mysterious curse.","Language":"English","Country":"USA","Awards":"N/A","Poster":"http://ia.media-imdb.com/images/M/MV5BNTY0NzU4OTU3Nl5BMl5BanBnXkFtZTgwMjIxNDU0ODE@._V1_SX300.jpg","Metascore":"N/A","imdbRating":"4.3","imdbVotes":"498","imdbID":"tt4118606","Type":"movie","Response":"True"},
{"Title":"The Last Heist","Year":"2016","Rated":"N/A","Released":"17 Jun 2016","Runtime":"84 min","Genre":"Action","Director":"Mike Mendez","Writer":"Guy Stevenson","Actors":"Henry Rollins, Torrance Coombs, Victoria Pratt, Mykel Shannon Jenkins","Plot":"A bank heist descends into violent chaos when one of the hostages turns out to be a serial killer. Trapping the well-organized team of bank robbers in the building, the killer is now picking them off one by one.","Language":"English","Country":"USA","Awards":"N/A","Poster":"http://ia.media-imdb.com/images/M/MV5BMjAzMjk2MzI2Ml5BMl5BanBnXkFtZTgwMjM0OTM3ODE@._V1_SX300.jpg","Metascore":"28","imdbRating":"3.6","imdbVotes":"521","imdbID":"tt4743562","Type":"movie","Response":"True"},
{"Title":"Puffin Rock","Year":"2015–","Rated":"TV-Y","Released":"12 Jan 2015","Runtime":"7 min","Genre":"Animation, Family","Director":"N/A","Writer":"N/A","Actors":"Kate McCafferty, Chris O'Dowd, Sally McDaid, Geraldine Cole","Plot":"Puffin Rock follows the adventures of Oona, her little brother Baba, and their family and friends on a gorgeous and wild Irish island.","Language":"N/A","Country":"Ireland","Awards":"3 nominations.","Poster":"http://ia.media-imdb.com/images/M/MV5BMjEyMTIzNTczOF5BMl5BanBnXkFtZTgwNTQyMTgwNjE@._V1_SX300.jpg","Metascore":"N/A","imdbRating":"9.0","imdbVotes":"175","imdbID":"tt3590338","Type":"series","totalSeasons":"1","Response":"True"},
{"Title": "Bottersnikes and Gumbles"},
{"Title": "Fearless)"},
{"Title": "I’ll Sleep When I’m Dead"},
{"Title": "Maz Jobrani: I’m Not a Terrorist, But I’ve Played One On TV"},
{"Title":"NCIS","Year":"2003–","Rated":"TV-14","Released":"23 Sep 2003","Runtime":"60 min","Genre":"Action, Comedy, Crime","Director":"N/A","Writer":"Donald P. Bellisario, Don McGill","Actors":"Mark Harmon, Michael Weatherly, Pauley Perrette, David McCallum","Plot":"The cases of the Naval Criminal Investigative Service's Washington DC Major Case Response Team, led by Special Agent Leroy Jethro Gibbs.","Language":"English","Country":"USA","Awards":"Nominated for 3 Primetime Emmys. Another 19 wins & 27 nominations.","Poster":"http://ia.media-imdb.com/images/M/MV5BMTYyMTQ0MTU1OF5BMl5BanBnXkFtZTcwMjI0Njg4Ng@@._V1_SX300.jpg","Metascore":"N/A","imdbRating":"7.9","imdbVotes":"85,928","imdbID":"tt0364845","Type":"series","totalSeasons":"13","Response":"True"},
{"Title":"Law & Order: Special Victims Unit","Year":"1999–","Rated":"TV-14","Released":"20 Sep 1999","Runtime":"60 min","Genre":"Crime, Drama, Mystery","Director":"N/A","Writer":"Dick Wolf","Actors":"Mariska Hargitay, Ice-T, Dann Florek, Richard Belzer","Plot":"This show introduces the Special Victims Unit, a new elite squad of NYPD detectives who investigate sexually related crimes.","Language":"English","Country":"USA","Awards":"Won 1 Golden Globe. Another 48 wins & 140 nominations.","Poster":"http://ia.media-imdb.com/images/M/MV5BMjEyMDE0NTgwNl5BMl5BanBnXkFtZTgwMzY3MDE3NjE@._V1_SX300.jpg","Metascore":"N/A","imdbRating":"8.1","imdbVotes":"52,604","imdbID":"tt0203259","Type":"series","totalSeasons":"17","Response":"True"},
{"Title":"Septembers of Shiraz","Year":"2015","Rated":"PG-13","Released":"24 Jun 2016","Runtime":"110 min","Genre":"Thriller","Director":"Wayne Blair","Writer":"Dalia Sofer (novel), Hanna Weg","Actors":"Salma Hayek, Adrien Brody, Shohreh Aghdashloo, Gabriella Wright","Plot":"Prior to the Iranian revolution it was a place where people of all religions were allowed to flourish. This is the story of a prosperous Jewish family who abandon everything before they are consumed by the passions of revolutionaries.","Language":"English","Country":"USA","Awards":"N/A","Poster":"http://ia.media-imdb.com/images/M/MV5BMTg0NjYyMDI1NF5BMl5BanBnXkFtZTgwMzI0ODIyOTE@._V1_SX300.jpg","Metascore":"16","imdbRating":"5.6","imdbVotes":"529","imdbID":"tt3661298","Type":"movie","Response":"True"},
{"Title":"The Road","Year":"2009","Rated":"R","Released":"18 Dec 2009","Runtime":"111 min","Genre":"Adventure, Drama","Director":"John Hillcoat","Writer":"Cormac McCarthy (novel), Joe Penhall (screenplay)","Actors":"Viggo Mortensen, Kodi Smit-McPhee, Robert Duvall, Guy Pearce","Plot":"In a dangerous post-apocalyptic world, an ailing father defends his son as they slowly travel to the sea.","Language":"English","Country":"USA","Awards":"Nominated for 1 BAFTA Film Award. Another 5 wins & 30 nominations.","Poster":"http://ia.media-imdb.com/images/M/MV5BMTAwNzk4NTU3NDReQTJeQWpwZ15BbWU3MDg3OTEyODI@._V1_SX300.jpg","Metascore":"64","imdbRating":"7.3","imdbVotes":"176,165","imdbID":"tt0898367","Type":"movie","Response":"True"},
{"Title":"Blue Is the Warmest Color","Year":"2013","Rated":"NC-17","Released":"09 Oct 2013","Runtime":"180 min","Genre":"Drama, Romance","Director":"Abdellatif Kechiche","Writer":"Abdellatif Kechiche (scenario, adaptation and dialogue), Ghalia Lacroix (scenario, adaptation and dialogue), Julie Maroh (adapted from: the comic book \"Le Bleu est une couleur chaude\" by)","Actors":"Léa Seydoux, Adèle Exarchopoulos, Salim Kechiouche, Aurélien Recoing","Plot":"Adele's life is changed when she meets Emma, a young woman with blue hair, who will allow her to discover desire, to assert herself as a woman and as an adult. In front of others, Adele grows, seeks herself, loses herself and ultimately finds herself through love and loss.","Language":"French, English","Country":"France, Belgium, Spain","Awards":"Nominated for 1 Golden Globe. Another 83 wins & 92 nominations.","Poster":"http://ia.media-imdb.com/images/M/MV5BMTQ5NTg5ODk4OV5BMl5BanBnXkFtZTgwODc4MTMzMDE@._V1_SX300.jpg","Metascore":"88","imdbRating":"7.8","imdbVotes":"90,085","imdbID":"tt2278871","Type":"movie","Response":"True"},
{"Title":"Dawn of the Croods","Year":"2015–","Rated":"N/A","Released":"24 Dec 2015","Runtime":"23 min","Genre":"Animation, Comedy, Family","Director":"N/A","Writer":"N/A","Actors":"Dan Milano, Cree Summer, A.J. LoCascio, Laraine Newman","Plot":"Eep, Grug, Thunk, Ugga, Sandy and Gran are back. Follow them as they meet new friends, outrun new creatures and encounter \"firsts\" the world has never seen - such as school, slumber parties, hiccups and elections.","Language":"English","Country":"USA","Awards":"3 nominations.","Poster":"http://ia.media-imdb.com/images/M/MV5BNjM4OTkyMDY0OV5BMl5BanBnXkFtZTgwMjAxNjI2NzE@._V1_SX300.jpg","Metascore":"N/A","imdbRating":"6.0","imdbVotes":"152","imdbID":"tt5193172","Type":"series","totalSeasons":"1","Response":"True"},
{"Title": "Glitter Force"},
{"Title": "Jeff Foxworthy and Larry the Cable Guy: We’ve Been Thinking"},
{"Title":"Once Upon a Time","Year":"2011–","Rated":"TV-PG","Released":"23 Oct 2011","Runtime":"44 min","Genre":"Adventure, Fantasy, Romance","Director":"N/A","Writer":"Adam Horowitz, Edward Kitsis","Actors":"Ginnifer Goodwin, Jennifer Morrison, Lana Parrilla, Josh Dallas","Plot":"A young woman with a troubled past is drawn to a small town in Maine where fairy tales are to be believed.","Language":"English","Country":"USA","Awards":"Nominated for 6 Primetime Emmys. Another 8 wins & 64 nominations.","Poster":"http://ia.media-imdb.com/images/M/MV5BODA4ODExNjMyM15BMl5BanBnXkFtZTgwMTcyOTk0ODE@._V1_SX300.jpg","Metascore":"N/A","imdbRating":"8.0","imdbVotes":"167,047","imdbID":"tt1843230","Type":"series","totalSeasons":"6","Response":"True"},
{"Title":"XoXO","Year":"2013","Rated":"N/A","Released":"14 Nov 2013","Runtime":"3 min","Genre":"Short, Comedy","Director":"Phillip Russell","Writer":"Phillip Russell","Actors":"James Christiano, Ashlyn Libert, Phillip Russell, Anthony Zito","Plot":"Our detective hero tries to solve his most difficult case yet - The twist ending will shock, alarm, and entertain -- especially to gossip girl enthusiasts.","Language":"English","Country":"USA","Awards":"N/A","Poster":"N/A","Metascore":"N/A","imdbRating":"N/A","imdbVotes":"N/A","imdbID":"tt5124466","Type":"movie","Response":"True"},
{"Title":"Rams","Year":"2015","Rated":"R","Released":"28 May 2015","Runtime":"93 min","Genre":"Drama","Director":"Grímur Hákonarson","Writer":"Grímur Hákonarson","Actors":"Sigurður Sigurjónsson, Theodór Júlíusson, Charlotte Bøving, Jón Benónýsson","Plot":"In a remote Icelandic farming valley, two brothers who haven't spoken in 40 years have to come together in order to save what's dearest to them - their sheep.","Language":"Icelandic","Country":"Iceland, Denmark, Norway, Poland","Awards":"28 wins & 7 nominations.","Poster":"http://ia.media-imdb.com/images/M/MV5BNDc5MjI4MjQwNV5BMl5BanBnXkFtZTgwODE4MDE2NTE@._V1_SX300.jpg","Metascore":"N/A","imdbRating":"7.4","imdbVotes":"3,942","imdbID":"tt3296658","Type":"movie","Response":"True"},
{"Title":"The State Of Marriage","Year":"2015","Rated":"N/A","Released":"18 Jun 2015","Runtime":"82 min","Genre":"Documentary, Biography, News","Director":"Jeffrey Kaufman","Writer":"Jeffrey Kaufman","Actors":"Jeffrey Amestoy, Stan-Lee Ray Baker, Nina Beck, Craig Bensen","Plot":"The untold story of how legal pioneer Mary Bonauto partnered with small town Vermont lawyers Beth Robinson and Susan Murray in a 2-decade long struggle that built the foundation for the ...","Language":"English","Country":"USA","Awards":"N/A","Poster":"http://ia.media-imdb.com/images/M/MV5BMjI5NDM4ODc1MV5BMl5BanBnXkFtZTgwMzU2Nzg1NjE@._V1_SX300.jpg","Metascore":"N/A","imdbRating":"9.4","imdbVotes":"5","imdbID":"tt4096638","Type":"movie","Response":"True"},
{"Title": "Ku’damm 56"},

  ]

}

//creating separate arrays for sorting; doesn't have to sort each time the function runs; gets rid of sort bugs
var imdbArray;
imdbArray = data.movies.slice().sort(function(a, b){
    var a1= a.imdbRating, b1= b.imdbRating;
    if(a1== b1) return 0;
    return a1<b1? 1: -1;
});

var metascoreArray;
metascoreArray = data.movies.slice().sort(function(a, b){
    var a1= a.Metascore, b1= b.Metascore;
    if(a1== b1) return 0;
    return a1<b1? 1: -1;
});


function noMatches(){
  var moduleMovieCount = document.getElementById("movies").getElementsByClassName("module-movie");
console.log(moduleMovieCount.length);
  if(moduleMovieCount.length<=0){
  $("#movies").addClass("no-matches");
} else{
  $("#movies").removeClass("no-matches");
}
}

function imdbSort(){
    $("#movies").empty();
  
  
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
    $("#movies").empty();

  for (i = 0; i < data.movies.length; i++) {
  //calling template function and passing it the data
  var html = template(data.movies[i]);
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
 
  for (i = 0; i < data.movies.length; i++) {

  //calling template function and passing it the data
  var html = template(data.movies[i]);
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

  for (i = 0; i < data.movies.length; i++) {

  //calling template function and passing it the data
  var html = template(data.movies[i]);
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
  for (i = 0; i < data.movies.length; i++) {

  //call template function and pass it the data
  var html = template(data.movies[i]);
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

  for (i = 0; i < data.movies.length; i++) {

  //calling template function and passing it the data
  var html = template(data.movies[i]);
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

  for (i = 0; i < data.movies.length; i++) {

  //calling template function and passing it the data
  var html = template(data.movies[i]);
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

  for (i = 0; i < data.movies.length; i++) {

  //calling template function and passing it the data
  var html = template(data.movies[i]);
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

  for (i = 0; i < data.movies.length; i++) {

  //calling template function and passing it the data
  var html = template(data.movies[i]);
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

for (i = 0; i < data.movies.length; i++) {

	//calling template function and passing it the data
  var html = template(data.movies[i]);
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
console.log(searchInput);
    $("#movies").empty(),
    data.movies.sort(function(a, b){
    return b.movieIMDB-a.movieIMDB
  });
  
  for (i = 0; i < data.movies.length; i++) {
  //calling template function and passing it the data
  var html = template(data.movies[i]);
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
    data.movies.sort(function(a, b){
    return b.movieIMDB-a.movieIMDB
  });
  
  for (i = 0; i < data.movies.length; i++) {
  //calling template function and passing it the data
  var html = template(data.movies[i]);
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
sessionStorage.setItem("savedMovies", savedMoviesStorage);
//setting localStorage to "savedMovies"
var sm = sessionStorage.getItem("savedMovies");

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
sessionStorage.setItem("savedMovies", savedMoviesStorage);
//setting localStorage to "savedMovies"
var sm = sessionStorage.getItem("savedMovies");

 

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

 /*
localStorage.setItem('savedMovies', "#saved");
var sm = localStorage.getItem('savedMovies');
console.log(sm);
*/

var arr = document.getElementsByClassName("module-movie")
console.log(arr.length);

$(".movie-metascore-rating:contains('N')").remove().addClass("clearBefore");
$(".movie-metascore-rating:empty").remove().addClass("clearBefore");

$(".movie-imdb-rating:contains('N')").remove().addClass("clearBefore");
$(".movie-imdb-rating:empty").remove().addClass("clearBefore");




});