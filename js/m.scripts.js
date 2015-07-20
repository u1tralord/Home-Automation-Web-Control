window.addEventListener('orientationchange', calculateTileSize);
calculateTileSize()

var songArea = $("#songs");
for(var i = 0; i < 100; i++){
	var songItem = $("<button class='song-item'></button>").text("Song #"+i);
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
	music.play();
	
	
	albumArt.attr("src", "res/album.jpg");
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