window.addEventListener('orientationchange', calculateTileSize);
calculateTileSize()

var songArea = $("#songs");
for(var i = 0; i < 2000; i++){
	var optionsButton = $("<button></button>");
	var albumArt = $("<img/>");
	var songName = $("<h1></h1>");
	var artistName = $("<h2></h2>");
	var songItem = $("<button class='song-item'></button>");
	
	albumArt.attr("src", "res/album.jpg");
	songName.text("Song #"+i);
	artistName.text("Song #"+i);
	
	songItem.append(optionsButton);
	songItem.append(albumArt);
	songItem.append(songName);
	songItem.append(artistName);
	
	songArea.append(songItem);
}
function calculateTileSize()
{
    var bodyWidth = $(".panel-body").first().width();
    var bodyHeight = $(".panel-body").first().height();
    var squareSize = 125;
    switch(window.orientation) 
    {  
        case -90:
        case 90:
            squareSize = (bodyHeight/2);
            break;
        default:
            squareSize = (bodyWidth/2);
            break; 
    }
    $(".tile").each(function(){
        $(this).width(squareSize);
        $(this).height(squareSize);
    });
}

$(".tab-nav").click(function() {
  $( ".panel-screen" ).each(function() {
    $( this ).removeClass( "active-panel" );
  });
  $("#"+$(this).attr('linkTo')).addClass("active-panel");
});

$(".song-item").click(function(){
	var music = document.getElementById("audio-handler");
	var albumArt = $("#simple-player > img");
	var songText = $("#simple-player > h1");
	var artistText = $("#simple-player > h2");
	var playPauseButton = $("#simple-player > button");
	
	$("#audio-handler > source").attr("src", "res/song.mp3");
	music.currentTime = 0;
	music.play();
	
	
	albumArt.attr("src", "res/album.jpg");
	albumArt.click(function(){
		$("#simple-player").removeClass("active-audio");
	});
	songText.text("Song");
	artistText.text("Artist");
	playPauseButton.addClass("pause");
	playPauseButton.click(function(){
		if (music.paused) {
			music.play();
			$(this).removeClass("play");
			$(this).addClass("pause");
		} else {
			music.pause();
			$(this).removeClass("pause");
			$(this).addClass("play");
		}
	});
	
	//Show the miniplayer
	$("#simple-player").addClass("active-audio");
});