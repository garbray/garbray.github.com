/************************************
 author : Garbray
 ************************************/

/************************************
 * Global variables
 ************************************/

var content = $('content'),
	about = $('about'),
	cont = "",
	findme = $('findme'),
	interesting = $('interesting'),
	li = $$('.view'),
	lTweets="<p>",
	places = $('places'),
	proyects = $('proyects'),
	twitter = $('twitter'),
	i = 1,
	flag = false;

/************************************
 * Event listener
 ************************************/

about.addEvent('click', showAbout);
findme.addEvent('click',showFindMe);
interesting.addEvent('click',showInteresting);
places.addEvent('click',showPlaces);
proyects.addEvent('click',showProyects);
twitter.addEvent('click',showTwitter);

/************************************
 * Functions
 ************************************/

function showAbout(){
	cont = "<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>";
	changeContent(this,cont);
}

function showFindMe(){
	cont = "<iframe width='100%' height='350' frameborder='0' scrolling='no' marginheight='0' marginwidth='0' src='https://maps.google.com/?vector=1&amp;ie=UTF8&amp;ll=4.63274,-74.066269&amp;spn=0.006095,0.007178&amp;t=v&amp;z=17&amp;output=embed'></iframe>";
	changeContent(this,cont);
}

function showPlaces(){
	cont = "<p>Places</p>";
	changeContent(this,cont);
}

function showProyects(){
	cont = "<h2> fuck yeah </h2>";
	changeContent(this,cont);
}

function showInteresting(){
	cont = "<p> I love makes real my dreams this could be a really dangerous lol is only a test\
				<ul> <li> like </li>\
				</ul>\
				</p>";
	changeContent(this,cont);
}

function showTwitter(){
	cont = lTweets;
	changeContent(this,cont);
}

function changeContent(ele,text){
	ele.match('#twitter')?flag=true:flag=false
	content.innerHTML = text;
	removeSelected();
	ele.addClass('selected');
}

function removeSelected(){
	for (var i = 0; i < li.length; i++) {
		li[i].removeClass('selected');
	};
}

/************************************
 * obtain tweets 
 ************************************/
function tweets(){
	new Request.JSONP({
  		url: "http://search.twitter.com/search.json",
  		data: {
			q: "garbray" /* query by username */
		},
	    onComplete: function(tweet) {
	    // inyect the response on the listTweet
	    displayTweets(tweet);
		}
	}).send();
}  

/**
*display tweet
*@tweets
***/
function userTweet(tweet){
	tweet = tweet.replace(/@\w+/g, function(data){ return '<span>'+data+'</span>'})
	tweet = tweet.replace(/#\w+/g, function(data){ return '<span>'+data+'</span>'})
	tweet = tweet.replace(/http:\/\/\w+\.\w+\/\w+/g, function(data){ return '<a href='+data+' target="_blank">'+data+'</a>'})
	return tweet;
}

function displayTweets(tweets){
	lTweets = "<p>"+userTweet(tweets.results[0].text)+"</p>";
	setInterval(function(){
		(i<tweets.results.length-1)?i++:i=0;
		lTweets = "<p>"+userTweet(tweets.results[i].text)+"</p>";
		if(flag == true){			
			content.innerHTML = lTweets;
		}
	},7000);
}

/**
* Initialize
* @call tweets function
**/
function initialize(){
	tweets();
}

initialize();
