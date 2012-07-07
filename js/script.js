/************************************
 author : Garbray
 ************************************/

/************************************
 * Global variables
 ************************************/

var content = $('content'),
	about = $('about'),
	interesting = $('interesting'),
	twitter = $('twitter'),
	places = $('places'),
	findme = $('findme'),
	proyects = $('proyects')
	cont = "";




/************************************
 * Event listener
 ************************************/

about.addEventListener('click', showAbout);
findme.addEventListener('click',showFindMe);
interesting.addEventListener('click',showInteresting);
places.addEventListener('click',showPlaces);
proyects.addEventListener('click',showProyects);
twitter.addEventListener('click',showTwitter);


/************************************
 * Functions
 ************************************/

function showAbout(){
	cont = "<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>";
	changeContent(cont);
}

function showFindMe(){
	cont = "<h5>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</h5>";
	changeContent(cont);
}

function showPlaces(){
	cont = "<p>Places</p>";
	changeContent(cont);
}

function showProyects(){
	cont = "<h2> fuck yeah </h2>";
	changeContent(cont);
}

function showInteresting(){
	cont = "<p> I love makes real my dreams this could be a really dangerous lol is only a test\
				<ul> <li> like </li>\
				</ul>\
				</p>"
	changeContent(cont);
}

function showTwitter(){
	cont = "<p> Twitter</p>";
	changeContent(cont);
}



function changeContent(text){
	content.innerHTML = text;
}